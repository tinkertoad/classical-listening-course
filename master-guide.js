// A live anthology of a learner's own notes. Nothing is published or sent anywhere.
(function(){
  const styles=document.createElement('style');styles.textContent=`
  .master-head{padding:25px;background:linear-gradient(125deg,#264f43,#577e65);border-radius:18px;color:#fff;margin-bottom:18px}
  .master-head h2{color:#fff;margin:8px 0}.master-head p{color:#e9f4ec;margin:8px 0}
  .master-actions{display:flex;flex-wrap:wrap;align-items:center;gap:9px;margin:15px 0}
  .master-actions button{background:#245d4d;color:#fff;border:0;border-radius:9px;padding:11px 14px;cursor:pointer;font:inherit;font-weight:700}
  .master-actions .master-light{background:#e6f0e7;color:#285547;border:1px solid #a9c6b0}
  .master-sheet{background:#fff;border:1px solid #d7e2d8;border-radius:15px;padding:clamp(18px,4vw,42px);box-shadow:0 8px 25px #244e3d0a}
  .master-sheet h1{font-family:Georgia,serif;color:#254f40;font-size:30px;margin:0 0 6px}
  .master-sheet h2{color:#244e40;border-bottom:1px solid #dce7de;padding-bottom:9px;margin:36px 0 15px;font-size:23px}
  .master-sheet h3,.master-sheet h4{color:#285648;margin:19px 0 8px}.master-sheet p,.master-sheet li{line-height:1.7}
  .master-sheet .master-sub{color:#637a6a}.master-toc{background:#f4f8f3;border-radius:11px;padding:18px 22px;margin:24px 0}
  .master-toc a{color:#235e4a;text-decoration:none}.master-toc li{margin:5px 0}
  .master-entry{border-top:1px solid #e3ebe5;margin:25px 0;padding-top:10px}.master-entry:first-of-type{border-top:0}
  .master-content{overflow-wrap:anywhere}.master-content ul,.master-content ol{padding-left:25px}.master-content blockquote{border-left:3px solid #9ab8a2;margin-left:0;padding-left:12px}
  .master-content table{border-collapse:collapse;width:100%}.master-content td,.master-content th{border:1px solid #b7cabc;padding:7px}
  .master-missing{color:#6f8075;font-style:italic}.master-glossary{columns:2;column-gap:28px}.master-term{break-inside:avoid;margin-bottom:10px;font-size:14px;line-height:1.55}
  @media(max-width:700px){.master-glossary{columns:1}.master-sheet{padding:18px}.master-sheet h1{font-size:25px}}
  `;document.head.append(styles);
  const page=document.createElement('section');page.id='masterguide';page.className='page hidden';
  page.innerHTML=`<div class="master-head"><div class="eyebrow">Your personal course reference</div><h2>Master Study Guide</h2><p>One evolving collection of your lecture summaries—from the first listening concepts through musical modernism.</p></div><div class="master-actions"><button type="button" id="master-refresh">↻ Refresh guide</button><button type="button" id="master-print">Print / Save PDF</button><button type="button" id="master-word">Download Word file</button><label class="check"><input id="master-include-glossary" type="checkbox" checked> Include musical glossary</label></div><p class="small" id="master-status" role="status"></p><div class="master-sheet" id="master-sheet"></div>`;
  document.querySelector('main .foot').before(page);
  const nav=document.createElement('button');nav.dataset.tab='masterguide';nav.innerHTML='▤ &nbsp; Master Study Guide';document.querySelector('.sidebar .nav').append(nav);
  nav.addEventListener('click',()=>{renderMaster();showTab('masterguide')});
  document.getElementById('master-refresh').addEventListener('click',renderMaster);
  document.getElementById('master-include-glossary').addEventListener('change',renderMaster);
  const sheet=document.getElementById('master-sheet');
  const escapeText=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  function cleanHtml(input){const doc=new DOMParser().parseFromString(input,'text/html');const allow=new Set(['P','DIV','BR','H1','H2','H3','H4','STRONG','B','EM','I','U','UL','OL','LI','BLOCKQUOTE','PRE','CODE','HR','TABLE','THEAD','TBODY','TR','TH','TD']);const blocked=new Set(['SCRIPT','STYLE','IFRAME','OBJECT','SVG','MATH','FORM','IMG']);function visit(n){if(n.nodeType===Node.TEXT_NODE)return document.createTextNode(n.textContent);const frag=document.createDocumentFragment();if(n.nodeType!==Node.ELEMENT_NODE||blocked.has(n.tagName))return frag;const x=allow.has(n.tagName)?document.createElement(n.tagName.toLowerCase()):frag;for(const c of n.childNodes)x.appendChild(visit(c));return x}const root=document.createElement('div');for(const c of doc.body.childNodes)root.appendChild(visit(c));return root.innerHTML}
  function noteHtml(n){const x=lectureNotes[n]||{};if(x.aiGuideHtml&&String(x.aiGuideHtml).trim())return cleanHtml(String(x.aiGuideHtml));if(x.aiGuide&&String(x.aiGuide).trim())return String(x.aiGuide).split(/\n\s*\n/).map(p=>'<p>'+escapeText(p).replace(/\n/g,'<br>')+'</p>').join('');return ''}
  function entries(){return lessons.map(l=>({n:l[0],title:l[3],html:noteHtml(l[0])})).filter(e=>e.html)}
  function glossaryHtml(){if(!document.getElementById('master-include-glossary').checked)return '';return `<section class="master-entry" id="master-glossary"><h2>Musical glossary</h2><p class="master-sub">A ready-reference list of terms used throughout the course.</p><div class="master-glossary">${glossary.map(([term,definition])=>`<div class="master-term"><strong>${escapeText(term)}</strong> — ${escapeText(definition)}</div>`).join('')}</div></section>`}
  function renderMaster(){const available=entries();const missing=23-available.length;document.getElementById('master-status').textContent=`${available.length} of 23 lecture guides collected · ${missing} still to come. Only your own saved study guides are included.`;
    const toc=available.length?`<ol>${available.map(e=>`<li><a href="#master-lecture-${e.n}">Lecture ${e.n}: ${escapeText(e.title)}</a></li>`).join('')}${document.getElementById('master-include-glossary').checked?'<li><a href="#master-glossary">Musical glossary</a></li>':''}</ol>`:'<p class="master-missing">Your master guide will grow as you save polished study guides in Lecture Study Mode.</p>';
    sheet.innerHTML=`<h1>My Classical Music Study Guide</h1><p class="master-sub">Yale MUSI 112 · Alex’s Music Academy · ${available.length} lecture${available.length===1?'':'s'} collected</p><div class="master-toc"><h3>Contents</h3>${toc}</div>${available.map(e=>`<section class="master-entry" id="master-lecture-${e.n}"><h2>Lecture ${e.n} · ${escapeText(e.title)}</h2><div class="master-content">${e.html}</div></section>`).join('')}${glossaryHtml()}`;
  }
  function exportHtml(){renderMaster();const docStyle=`body{font:11pt Georgia,serif;color:#25382e;margin:36px;line-height:1.5}h1{font-size:25pt;color:#244e40}h2{font-size:18pt;color:#244e40;border-bottom:1px solid #cbdace;padding-bottom:7px}h3{font-size:13pt;color:#24513f}a{color:#235b48}.master-sub{color:#557060}.master-entry{break-before:page}.master-glossary{columns:2}.master-term{break-inside:avoid;margin-bottom:8px}.master-content table{border-collapse:collapse}.master-content td,.master-content th{border:1px solid #999;padding:6px}li{margin-bottom:4px}`;return `<!doctype html><html><head><meta charset="utf-8"><title>My Classical Music Study Guide</title><style>${docStyle}</style></head><body>${sheet.innerHTML}</body></html>`}
  document.getElementById('master-word').addEventListener('click',()=>{const blob=new Blob(['\ufeff',exportHtml()],{type:'application/msword;charset=utf-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='Alex-Classical-Music-Study-Guide.doc';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),5000)});
  document.getElementById('master-print').addEventListener('click',()=>{const win=window.open('','_blank');if(!win){document.getElementById('master-status').textContent='Your browser blocked the print window. Allow pop-ups for this site and try again.';return}win.document.open();win.document.write(exportHtml());win.document.close();win.focus();setTimeout(()=>win.print(),350)});
  renderMaster();
})();
