// Completed lessons collapse to a one-line row; the next unfinished lesson is flagged and scrolled to.
(function(){
const cards=()=>[...document.querySelectorAll('#lessonList article.card[id^="lesson-"]')];
const num=c=>Number(c.id.replace('lesson-',''));
const bar=document.createElement('div');bar.className='resume-bar';
document.getElementById('lessonList').before(bar);

function nextCard(){return cards().find(c=>!complete.has(num(c)))}

function apply(){
  const next=nextCard();
  cards().forEach(c=>{
    const done=complete.has(num(c));
    c.classList.toggle('done',done);
    if(!done)c.classList.remove('open');
    c.classList.toggle('up-next',c===next);
    const head=c.querySelector('.lessonhead');
    let badge=head.querySelector('.donebadge');
    if(done&&!badge){
      badge=document.createElement('button');badge.type='button';badge.className='donebadge';
      badge.addEventListener('click',()=>{c.classList.toggle('open');sync(c)});
      head.append(badge);
    }
    if(!done&&badge)badge.remove();
    if(done)sync(c);
  });
  bar.innerHTML=next
    ?`<button type="button" class="primary" id="resume-btn">Continue with Lesson ${num(next)}: ${next.querySelector('h3').textContent} →</button>`
    :'<div class="note">All 23 lessons complete. Well done.</div>';
  const b=document.getElementById('resume-btn');
  if(b)b.onclick=()=>next.scrollIntoView({behavior:'smooth',block:'start'});
}
function sync(c){const b=c.querySelector('.donebadge');if(b){const o=c.classList.contains('open');b.textContent=o?'✓ Complete · Hide':'✓ Complete · Show';b.setAttribute('aria-expanded',o)}}

const base=saveDone;
saveDone=function(n,checked){
  base(n,checked);
  apply();
  if(checked){const next=nextCard();if(next)setTimeout(()=>next.scrollIntoView({behavior:'smooth',block:'start'}),50)}
};
apply();
})();
