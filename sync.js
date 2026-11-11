(function(){
// Cross-device sync via Supabase. The site keeps working offline from localStorage;
// signing in additionally mirrors the four data keys to one row per user.
const SUPABASE_URL='https://knsnhiaikylptcjtahos.supabase.co';
const SUPABASE_KEY='sb_publishable_B0CnilKxs7fn2YhMoLpHbg_kKn4DkyM'; // publishable key, safe in client code
const KEYS=['alex-music-complete','alex-music-journal','alex-music-lecture-notes','alex-music-extras'];
const META='alex-music-sync-meta'; // {key: lastModifiedMs}
const lsGet=k=>{try{return localStorage.getItem(k)}catch{return null}};
const meta=()=>{try{return JSON.parse(lsGet(META)||'{}')}catch{return {}}};
const rawSet=localStorage.setItem.bind(localStorage);
let applying=false,client=null,session=null,timer=null,status='Sync off';

// Track local edits so we know which side is newer.
localStorage.setItem=function(k,v){
  rawSet(k,v);
  if(!applying&&KEYS.includes(k)){const m=meta();m[k]=Date.now();rawSet(META,JSON.stringify(m));schedulePush()}
};

const css=document.createElement('style');
css.textContent=`#syncbanner{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 16px;padding:12px 16px;background:#f6f0e4;color:#24463b;font:15px/1.4 system-ui,sans-serif;border-bottom:1px solid #e0d6bd}
#syncbanner strong{font-weight:700}
#syncbanner button{font:inherit;cursor:pointer}
#syncbanner .go{background:#145a47;color:#fff;border:0;border-radius:9px;padding:9px 16px;font-weight:700}
#syncbanner .x{background:transparent;border:0;color:#24463b;font-size:20px;line-height:1;padding:4px 8px}
#syncpill{position:fixed;right:14px;bottom:14px;z-index:9999;padding:13px 20px;border-radius:999px;border:0;background:#145a47;color:#fff;font:700 15px system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.3);cursor:pointer}
#syncpill.ok{background:#fff;color:#145a47;border:1px solid #145a47;box-shadow:0 2px 8px rgba(0,0,0,.15);font-weight:600;font-size:14px;padding:10px 16px}
#syncdlg{border:0;border-radius:16px;padding:0;max-width:min(92vw,460px);width:100%;font:15px/1.5 system-ui,sans-serif;color:#202b34;box-shadow:0 20px 60px rgba(0,0,0,.35)}
#syncdlg::backdrop{background:rgba(10,25,20,.55)}
#syncdlg .in{padding:24px}
#syncdlg h2{margin:0 0 10px;font-size:22px;color:#234a42}
#syncdlg p{margin:0 0 12px}
#syncdlg ol{margin:0 0 14px;padding-left:20px}
#syncdlg input{width:100%;padding:12px;font:inherit;border:1px solid #b9c7bf;border-radius:9px;margin:4px 0 12px}
#syncdlg .row{display:flex;gap:10px;flex-wrap:wrap}
#syncdlg button{font:inherit;font-weight:700;border-radius:9px;padding:11px 18px;cursor:pointer;border:1px solid #145a47;background:#fff;color:#145a47}
#syncdlg button.primary{background:#145a47;color:#fff}
#syncdlg button:disabled{opacity:.55;cursor:default}
#syncdlg .msg{color:#8a2d2d;min-height:1.2em;margin:0 0 8px}
#syncdlg .small{font-size:13px;color:#64717a}`;
document.head.appendChild(css);

const pill=document.createElement('button');pill.id='syncpill';pill.type='button';
document.body.appendChild(pill);
const banner=document.createElement('div');banner.id='syncbanner';
banner.innerHTML='<span><strong>Keep your progress and notes safe.</strong> Sign in with your email to save them and use them on your phone and laptop.</span><button type="button" class="go">Sign in to save</button><button type="button" class="x" aria-label="Dismiss">&times;</button>';
document.body.insertBefore(banner,document.body.firstChild);
banner.querySelector('.go').onclick=()=>openDialog();
banner.querySelector('.x').onclick=()=>{banner.style.display='none';try{sessionStorage.setItem('alex-music-banner-off','1')}catch{}};
let bannerOff=false;try{bannerOff=!!sessionStorage.getItem('alex-music-banner-off')}catch{}

const dlg=document.createElement('dialog');dlg.id='syncdlg';document.body.appendChild(dlg);
function openDialog(){
  if(!client){dlg.innerHTML='<div class="in"><h2>Sync unavailable</h2><p>The sign-in service could not load. Check your connection and reload the page.</p><div class="row"><button type="button" id="sdclose">Close</button></div></div>';}
  else if(session){
    dlg.innerHTML=`<div class="in"><h2>You’re signed in</h2><p>Signed in as <strong>${esc(session.user.email)}</strong>. Your notes and progress are saved to your account and sync across devices where you sign in with this email.</p><p class="small">Status: ${esc(status)}</p><div class="row"><button type="button" class="primary" id="sdsync">Sync now</button><button type="button" id="sdout">Sign out</button><button type="button" id="sdclose">Close</button></div></div>`;
  }else{
    dlg.innerHTML=`<div class="in"><h2>Save your progress and notes</h2>
      <p>Sign in with your email so your lecture notes, journal and progress are saved and available on your phone and laptop. There is no password.</p>
      <ol><li>Enter your email below.</li><li>You’ll get an email from <strong>Supabase Auth</strong>, the service this site uses for sign-in.</li><li>Open the link in that email to confirm your email address. You’ll come back here signed in.</li></ol>
      <p class="small">Your notes are saved under your email account, and other visitors can’t read them. Check your spam folder if the email doesn’t arrive.</p>
      <label for="sdemail"><strong>Your email</strong></label><input id="sdemail" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com">
      <p class="msg" id="sdmsg" role="alert"></p>
      <div class="row"><button type="button" class="primary" id="sdsend">Send me a sign-in link</button><button type="button" id="sdclose">Close</button></div></div>`;
  }
  wireDialog();if(!dlg.open)dlg.showModal();
}
function wireDialog(){
  const q=id=>dlg.querySelector('#'+id);
  q('sdclose')&&(q('sdclose').onclick=()=>dlg.close());
  q('sdsync')&&(q('sdsync').onclick=async()=>{q('sdsync').disabled=true;await sync();dlg.close()});
  q('sdout')&&(q('sdout').onclick=async()=>{await client.auth.signOut();dlg.close()});
  const send=q('sdsend');
  if(send)send.onclick=async()=>{
    const email=q('sdemail').value.trim(),msg=q('sdmsg');msg.textContent='';
    if(!/^\S+@\S+\.\S+$/.test(email)){msg.textContent='Please enter a valid email address.';return}
    send.disabled=true;send.textContent='Sending…';
    try{
      const {error}=await client.auth.signInWithOtp({email,options:{emailRedirectTo:location.origin+location.pathname}});
      if(error)throw error;
      dlg.querySelector('.in').innerHTML=`<h2>Check your email</h2><p>We sent a sign-in link to <strong>${esc(email)}</strong> from <strong>Supabase Auth</strong>. Open it on this device and click the link to confirm your email. You’ll land back here signed in, and your notes will be saved.</p><p class="small">It can take a minute. Check your spam folder if you don’t see it.</p><div class="row"><button type="button" class="primary" id="sdclose">Close</button></div>`;
      wireDialog();
    }catch(e){
      console.error(e);msg.textContent='Could not send the link: '+(e&&e.message?e.message:'please try again.');
      send.disabled=false;send.textContent='Send me a sign-in link';
    }
  };
}
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
pill.onclick=()=>openDialog();
function paint(){
  pill.textContent=session?status:(status==='Sync off'||status==='Sign in to sync'?'Sign in to save your progress':status);
  pill.className=session?'ok':'';
  banner.style.display=(session||bannerOff)?'none':'flex';
}
paint();

function mergeJson(key,a,b){ // a=local raw, b=remote raw; union for first-time linking
  try{
    const x=JSON.parse(a||'null'),y=JSON.parse(b||'null');
    if(x==null)return b;if(y==null)return a;
    if(key==='alex-music-complete')return JSON.stringify([...new Set([...x,...y])]);
    if(key==='alex-music-journal'){const seen=new Set(),out=[];for(const e of [...x,...y]){const id=e.date+'|'+e.piece+'|'+e.detail;if(!seen.has(id)){seen.add(id);out.push(e)}}return JSON.stringify(out)}
    if(typeof x==='object'&&!Array.isArray(x))return JSON.stringify(deepFill(x,y));
  }catch{}
  return a||b;
}
function deepFill(a,b){const o={...b};for(const k in a){o[k]=(a[k]&&typeof a[k]==='object'&&!Array.isArray(a[k])&&b&&typeof b[k]==='object')?deepFill(a[k],b[k]):(a[k]===''||a[k]==null?b?.[k]??a[k]:a[k])}return o}

async function sync(){
  if(!client||!session)return;
  status='Syncing…';paint();
  try{
    const {data:row,error}=await client.from('progress').select('data').eq('user_id',session.user.id).maybeSingle();
    if(error)throw error;
    const remote=row?.data||{}, m=meta(), firstLink=!lsGet('alex-music-sync-linked');
    let changed=false;const out={};
    for(const k of KEYS){
      const r=remote[k], local=lsGet(k), lt=m[k]||0;
      let val=local,t=lt;
      if(r){
        if(firstLink&&local){val=mergeJson(k,local,r.v);t=Math.max(lt,r.t||0,Date.now())}
        else if((r.t||0)>lt){val=r.v;t=r.t}
      }
      if(val!=null&&val!==local){applying=true;rawSet(k,val);applying=false;changed=true}
      if(val!=null){out[k]={v:val,t};m[k]=t}
    }
    rawSet(META,JSON.stringify(m));rawSet('alex-music-sync-linked','1');
    const {error:e2}=await client.from('progress').upsert({user_id:session.user.id,data:out,updated_at:new Date().toISOString()});
    if(e2)throw e2;
    status='Synced ✓';paint();
    if(changed)location.reload(); // pages read storage once at load
  }catch(e){console.error(e);status='Sync error – tap to retry';paint()}
}
function schedulePush(){if(!session)return;clearTimeout(timer);timer=setTimeout(sync,2500)}

function init(){
  if(!window.supabase){status='Sync unavailable';paint();return}
  client=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
  client.auth.onAuthStateChange((ev,s)=>{
    session=s;
    if(s){status='Syncing…';paint();if(ev==='SIGNED_IN'||ev==='INITIAL_SESSION')sync()}
    else{status='Sign in to sync';paint()}
  });
  document.addEventListener('visibilitychange',()=>{if(!document.hidden&&session)sync()});
}
init();
})();
