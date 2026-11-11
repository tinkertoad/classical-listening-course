// On phones, study mode is one column: the video panel is ~740px tall and the notes sit more than
// two screens below it with no hint they exist. These buttons jump between the two.
(function(){
  const video=document.getElementById('study-video');
  const notes=document.querySelector('.study-notes-panel');
  if(!video||!notes)return;

  const style=document.createElement('style');
  style.textContent=`.study-jump{display:none}
  @media(max-width:900px){
    .study-jump{display:block;width:100%;margin:14px 0 4px;padding:13px 16px;font:inherit;font-weight:700;border-radius:10px;cursor:pointer}
    .study-jump.to-notes{background:#145a47;color:#fff;border:0}
    .study-jump.to-video{background:#fff;color:#145a47;border:1px solid #145a47;margin:0 0 6px}
  }`;
  document.head.appendChild(style);

  const toNotes=document.createElement('button');
  toNotes.type='button';toNotes.className='study-jump to-notes';toNotes.textContent='✎ Take notes ↓';
  video.insertAdjacentElement('afterend',toNotes);
  toNotes.addEventListener('click',()=>notes.scrollIntoView({behavior:'smooth',block:'start'}));

  const toVideo=document.createElement('button');
  toVideo.type='button';toVideo.className='study-jump to-video';toVideo.textContent='↑ Back to the video';
  notes.insertAdjacentElement('afterbegin',toVideo);
  toVideo.addEventListener('click',()=>video.scrollIntoView({behavior:'smooth',block:'center'}));
})();
