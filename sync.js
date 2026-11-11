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

const btn=document.createElement('button');
btn.style.cssText='position:fixed;right:14px;bottom:14px;z-index:9999;padding:9px 14px;border-radius:999px;border:1px solid #145a47;background:#fff;color:#145a47;font:600 13px system-ui,sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.15);cursor:pointer';
function paint(){btn.textContent=status}
btn.onclick=async()=>{
  if(!client)return alert('Sync could not load. Check your connection.');
  if(session){
    if(confirm('Signed in as '+session.user.email+'.\n\nOK = sync now.\nCancel = stay as is.'))await sync();
    else if(confirm('Sign out of sync on this device?')){await client.auth.signOut()}
    return;
  }
  const email=prompt('Enter your email to get a sign-in link:');
  if(!email)return;
  const {error}=await client.auth.signInWithOtp({email:email.trim(),options:{emailRedirectTo:location.origin+location.pathname}});
  alert(error?'Could not send link: '+error.message:'Check your email and open the link on this device.');
};
document.body.appendChild(btn);paint();

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
