// Remembers where you stopped in each Yale lecture video and resumes there.
// Positions live in extraData.videoPos (the "alex-music-extras" key), so they sync with the rest.
(function(){
  const video=document.getElementById('study-video');
  if(!video||typeof openStudyMode!=='function')return;
  const fmt=s=>{s=Math.floor(s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),r=s%60;return (h?h+':'+String(m).padStart(2,'0'):m)+':'+String(r).padStart(2,'0')};
  extraData.videoPos??={};

  const note=document.createElement('p');note.id='resume-note';note.className='study-tip';note.hidden=true;
  video.insertAdjacentElement('afterend',note);

  let lesson=null,ready=false,lastSave=0;
  function save(force){
    if(!ready||!lesson||!Number.isFinite(video.duration)||video.duration<=0)return;
    const t=video.currentTime,now=Date.now();
    if(!force&&now-lastSave<15000)return; // each save also triggers an account sync, so don't write every tick
    lastSave=now;
    if(t<10||video.duration-t<15)delete extraData.videoPos[lesson]; // not started, or finished
    else extraData.videoPos[lesson]={t:Math.floor(t),d:Math.floor(video.duration)};
    persistExtra();
  }

  const priorOpen=openStudyMode;
  openStudyMode=function(n){
    save(true); // keep the position of the lecture we're leaving
    priorOpen(n);
    lesson=n;ready=false;note.hidden=true;
    const saved=extraData.videoPos[n];
    video.addEventListener('loadedmetadata',function once(){
      video.removeEventListener('loadedmetadata',once);
      if(saved&&saved.t>=10&&video.duration-saved.t>=15){
        video.currentTime=saved.t;
        note.innerHTML=`Resumed at <strong>${fmt(saved.t)}</strong>. <button type="button" class="secondary" id="resume-restart">Start from the beginning</button>`;
        note.hidden=false;
        document.getElementById('resume-restart').onclick=()=>{video.currentTime=0;note.hidden=true};
      }
      ready=true;lastSave=Date.now();
    });
  };

  video.addEventListener('timeupdate',()=>save(false));
  video.addEventListener('pause',()=>save(true));
  video.addEventListener('ended',()=>save(true));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)save(true)});
  addEventListener('pagehide',()=>save(true));
  const back=document.getElementById('study-back');
  if(back)back.addEventListener('click',()=>video.pause());
})();
