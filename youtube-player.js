// In-page player for timestamped YouTube links. Opening YouTube in a new tab (or the YouTube /
// YouTube Music app on a phone) drops the &t= timestamp, so these links play here instead.
(function(){
  const style=document.createElement('style');
  style.textContent=`#ytdock{position:fixed;left:0;right:0;bottom:0;z-index:10000;background:#16322b;color:#fff;box-shadow:0 -4px 18px rgba(0,0,0,.3);display:none}
  #ytdock.open{display:block}
  #ytdock .ytbar{display:flex;align-items:center;gap:10px;padding:8px 12px;font-size:13px}
  #ytdock .ytbar span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
  #ytdock .ytbar a,#ytdock .ytbar button{color:#fff;background:transparent;border:1px solid #ffffff66;border-radius:8px;padding:6px 10px;font:inherit;cursor:pointer;text-decoration:none;white-space:nowrap}
  #ytdock .ytframe{width:min(100%,520px);margin:0 auto;aspect-ratio:16/9;background:#000}
  #ytdock iframe{width:100%;height:100%;border:0;display:block}
  body.ytdock-open{padding-bottom:var(--ytdock-h,300px)}`;
  document.head.appendChild(style);

  const dock=document.createElement('div');dock.id='ytdock';
  dock.innerHTML='<div class="ytbar"><span id="ytlabel"></span><a id="ytopen" target="_blank" rel="noopener">Open in YouTube ↗</a><button type="button" id="ytclose">Close</button></div><div class="ytframe"></div>';
  document.body.appendChild(dock);
  const frameBox=dock.querySelector('.ytframe'),label=dock.querySelector('#ytlabel'),openLink=dock.querySelector('#ytopen');
  let loaded=null,iframe=null;

  function sizeDock(){document.body.style.setProperty('--ytdock-h',dock.offsetHeight+'px')}
  function close(){
    dock.classList.remove('open');document.body.classList.remove('ytdock-open');
    frameBox.innerHTML='';iframe=null;loaded=null; // removing the iframe stops playback
  }
  dock.querySelector('#ytclose').addEventListener('click',close);

  function play(id,seconds,text,href){
    label.textContent=text||'Now playing';openLink.href=href;
    if(iframe&&loaded===id){
      iframe.contentWindow.postMessage(JSON.stringify({event:'command',func:'seekTo',args:[seconds,true]}),'*');
      iframe.contentWindow.postMessage(JSON.stringify({event:'command',func:'playVideo',args:[]}),'*');
    }else{
      frameBox.innerHTML='';
      iframe=document.createElement('iframe');
      iframe.src=`https://www.youtube-nocookie.com/embed/${id}?start=${seconds}&autoplay=1&rel=0&playsinline=1&enablejsapi=1`;
      iframe.allow='autoplay; encrypted-media; picture-in-picture';iframe.allowFullscreen=true;iframe.title=text||'YouTube player';
      frameBox.appendChild(iframe);loaded=id;
    }
    dock.classList.add('open');document.body.classList.add('ytdock-open');sizeDock();
  }

  document.addEventListener('click',e=>{
    const a=e.target.closest&&e.target.closest('a[href*="youtube.com/watch"]');
    if(!a||e.metaKey||e.ctrlKey||e.shiftKey)return;
    let u;try{u=new URL(a.href)}catch{return}
    const id=u.searchParams.get('v'),t=u.searchParams.get('t');
    if(!id||!t||!/^\d+s?$/.test(t))return; // only links that carry a timestamp
    e.preventDefault();
    play(id,parseInt(t,10),a.textContent.replace(/\s*↗\s*$/,'').trim(),a.href);
  },true);
})();
