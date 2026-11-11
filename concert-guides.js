// Concert guides for the February and April TSO programmes, modelled on the Messiah guide.
// Movement-by-movement, no recording timestamps: those need a specific recording checked by ear.
(function(){
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const guides=[
    {id:'eroica-guide',nav:'Eroica concert guide',concert:1,eyebrow:'Concert guide · February 4, 2027',title:'Beethoven’s <em>Eroica</em>',
     intro:'Three very different voices in one evening: a contemporary memorial, a lyrical twentieth-century violin concerto, and the symphony that changed what a symphony could be.',
     works:[
      {name:'Jennifer Higdon · blue cathedral',before:'Commissioned by the Curtis Institute of Music for its 75th anniversary and first performed in 2000, in memory of Higdon’s younger brother, Andrew Blue, who died in 1998. It is a single movement of roughly 11 minutes (the TSO’s listing). Higdon wrote solos for the flute, her own instrument, and the clarinet, her brother’s. The TSO describes gentle bell sounds that create a calm, reflective hush.',
       rows:[['Opening','Very soft, bell-like sounds','A critic describing the piece calls them “very soft bell-like sounds”. Notice how the sound is built from colour rather than a tune.'],
             ['The dialogue','Solo flute and solo clarinet','The flute appears first in the dialogue. The flute stands for Higdon and the clarinet for her brother. How does each answer the other?'],
             ['The ending','Bells return after the peak; the flute drops out','The clarinet continues alone to the end. What does it feel like to be left with only one voice?']],
       q:['How does Higdon create mood without a conventional melody?','What does it mean for the clarinet, her brother’s instrument, to have the last word?']},
      {name:'William Walton · Violin Concerto',before:'Written in 1938–39 and dedicated to the violinist Jascha Heifetz; Walton began it in Ravello, Italy. Heifetz gave the first performance on December 7, 1939, with the Cleveland Orchestra. Walton later revised the orchestration, and the revised version was first performed in January 1944. The TSO calls it a “lesser-known but much-revered” work of about 28 minutes, with Jonathan Crow, the orchestra’s concertmaster, as soloist.',
       rows:[['I. Andante tranquillo','Mostly lyrical. The opening theme is marked sognando (dreaming)','Listen for the dreamy opening theme in the violin. You will want to recognize it later.'],
             ['II. Presto capriccioso alla napolitana','A scherzo (a fast, playful movement) with a contrasting middle section called a trio','The trio is a canzonetta (a little song) introduced by a solo horn. Listen for the change of mood when it arrives.'],
             ['III. Vivace','A rondo finale with three main subjects, described as gruff, shrill and lyrical','Under the finale’s first theme, the solo violin plays a variant of the first movement’s opening theme. Can you hear the dreamy theme return in disguise?']],
       q:['Where do the soloist and orchestra answer each other, and where do they play together?','How does the finale’s three-subject structure differ from the lyrical first movement?']},
      {name:'Beethoven · Symphony No. 3, “Eroica”',before:'Composed mainly in 1803–04, about 47 minutes in the TSO’s listing. Beethoven withdrew a dedication to Napoleon after Napoleon declared himself emperor; another account notes the dedication might have cost him a fee from a noble patron, and he re-dedicated it to Prince Lobkowitz. The 1806 title page calls it “Sinfonia Eroica”, composed to celebrate the memory of a great man.',
       rows:[['I. Allegro con brio','Sonata form. Two loud E-flat chords, then the cellos introduce the first theme','Near the end of the development the horn enters early with the main theme, before the recapitulation. A long coda reintroduces the new theme from the development.'],
             ['II. Marcia funebre (Adagio assai)','A funeral march in C minor','Listen for the C-major middle section and for the fugue (an imitative passage), which is in F minor.'],
             ['III. Scherzo (Allegro vivace)','A fast scherzo whose trio uses three horns','Three horns in a symphony’s trio was a first in the tradition. Listen for how they change the colour.'],
             ['IV. Finale','Theme and variations','The movement opens with a bass theme before the melody arrives. The theme comes from Beethoven’s earlier Contredanses and the finale of his ballet The Creatures of Prometheus.']],
       q:['How does the funeral march change your idea of what a symphony can be about?','Where in the first movement did you hear the horn enter early?','How is the finale built from a theme you first hear as a bass line?']}
     ],
     sources:[['TSO: Beethoven’s Eroica','https://www.tso.ca/concerts-and-events/events/beethovens-eroica'],['TSO ticket page','https://my.tso.ca/3974'],['Wikipedia: Beethoven’s Symphony No. 3','https://en.wikipedia.org/wiki/Symphony_No._3_(Beethoven)'],['Wikipedia: Walton Violin Concerto','https://en.wikipedia.org/wiki/Violin_Concerto_(Walton)'],['Wikipedia: blue cathedral','https://en.wikipedia.org/wiki/Blue_cathedral']],
     compare:'After the concert, listen to the opening two minutes of the first movement in a recording of your choice and compare it with the live sound. What did the hall add?'},
    {id:'violin-guide',nav:'Beethoven’s Violin guide',concert:2,eyebrow:'Concert guide · April 11, 2027',title:'Beethoven’s <em>Violin</em>',
     intro:'An evening about conversation and growth: a violin and an orchestra in dialogue, and a symphony whose themes grow from a tiny motif.',
     works:[
      {name:'Yike Zhang · New work (world premiere)',before:'Yike Zhang is one of the TSO’s three 2026/27 NextGen Composers, early-career composers developing new works with Gustavo Gimeno and TSO RBC Affiliate Composer Liam Ritz. Each of the three performances (April 8, 10 and 11) premieres a different NextGen work, and Zhang’s is on April 11 only. The TSO lists it at about 5 minutes. The TSO has not published a title or any description of the piece, and I found none elsewhere. A 2024 University of Toronto profile describes Zhang as based in Toronto and New York, with a masters degree from the Manhattan School of Music.',
       rows:[['Before the concert','Check the TSO programme','The piece has no published title or notes yet, so read the programme note as soon as you can.'],
             ['While listening','Short and new','At about 5 minutes you can hold it in your head. What is the first sound you hear, and what returns?'],
             ['Afterwards','Your first impression','You will have no reference recording. Write down what it made you think of before reading anything.']],
       q:['What would you tell a friend about this piece in one sentence?','How did listening without preparation feel compared with the other works?']},
      {name:'Beethoven · Violin Concerto in D major',before:'Composed in 1806 and first performed on December 23, 1806, at the Theater an der Wien in Vienna, with Franz Clement as soloist. The TSO lists it at about 42 minutes. The first movement begins with five beats on the timpani. Beethoven wrote a long first-movement cadenza for his piano arrangement of the concerto (Op. 61a), which features the timpani. Violinists play cadenzas written by others, and Fritz Kreisler’s is probably the most often used. Listen for which one you hear.',
       rows:[['I. Allegro ma non troppo (D major)','About 21 minutes. Begins with five timpani beats','Listen for the five drumbeats at the start and notice where the rhythm returns later. Notice when the soloist plays the cadenza.'],
             ['II. Larghetto (G major)','About 10 minutes, in a contrasting key','How does the mood change from the first movement? Listen to how the violin and orchestra share the music.'],
             ['III. Rondo: Allegro (D major)','About 10 minutes. It follows the slow movement without a pause','Listen for the returning main tune of the rondo (a form where a refrain keeps coming back) and what happens between returns.']],
       q:['Where did you hear the timpani rhythm come back?','Which cadenza did the soloist play, and how did you know it was a cadenza?','How does the slow movement differ from the other two?']},
      {name:'Sibelius · Symphony No. 2 in D major',before:'Composed in 1901–02, begun in Rapallo, Italy, and first performed in Helsinki on March 8, 1902, conducted by Sibelius. The TSO lists it at about 44 minutes. Some listeners link the finale to Finland’s struggle for independence, and it has been called the “Symphony of Independence”, but whether Sibelius intended a patriotic message is debated. He called it “a confession of the soul”. The symphony grows almost organically from a rising three-note motif heard at the start, and the full main theme only appears at the first movement’s climax.',
       rows:[['I. Allegretto (D major)','Grows from a rising three-note motif','Listen for the three-note motif in many guises. Can you hear the full theme only arriving at the climax?'],
             ['II. Tempo andante, ma rubato (D minor)','A slower, darker movement','A pizzicato string “walking bass” stems from a bassoon theme Sibelius sketched first. Listen for the plucked bass and for the bassoon.'],
             ['III. Vivacissimo (B-flat major)','An angry, restless scherzo with machine-gun string figures, then a slow trio with a lyrical oboe solo','The trio returns at the end and bridges, without a break, into the finale. Listen for that join.'],
             ['IV. Finale: Allegro moderato (D major)','The triumphant close','This is the movement some link to Finland’s independence. Do you hear it as a patriotic statement, or simply as a triumphant ending?']],
       q:['Where did you hear the three-note motif come back after the first movement?','How does Sibelius connect the scherzo to the finale?','How does the way Sibelius builds themes compare with Beethoven’s in the Eroica?']}
     ],
     sources:[['TSO: Beethoven’s Violin','https://www.tso.ca/concerts-and-events/events/beethovens-violin'],['TSO ticket page (all performances)','https://my.tso.ca/3979'],['TSO: 2026/27 NextGen Composers','https://www.tso.ca/about/orchestra/202627-nextgen-composers'],['U of T New Music Festival: Yike Zhang profile','https://utnmf.music.utoronto.ca/2024/07/21/yike-zhang-blurry-scenery/'],['Wikipedia: Beethoven Violin Concerto','https://en.wikipedia.org/wiki/Violin_Concerto_(Beethoven)'],['Wikipedia: Sibelius Symphony No. 2','https://en.wikipedia.org/wiki/Symphony_No._2_(Sibelius)']],
     compare:'Compare how the Beethoven violin concerto and the Sibelius symphony start: one with five drumbeats, the other with a rising three-note motif. Which opening draws you in more?'}
  ];

  const rows=r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`;
  const backLink='<p><button class="secondary" type="button" onclick="showTab(\'concertguides\')">← All concert guides</button></p>';
  guides.forEach(g=>{
    const c=concertData[g.concert];
    const page=mountExtraPage(g.id,g.nav,'♬');
    document.querySelector('.nav [data-tab="'+g.id+'"]').remove();
    page.innerHTML=`${backLink}<div class="eyebrow">${esc(g.eyebrow)}</div><h2>${g.title}</h2><p class="section-intro">${esc(g.intro)}</p>
      <div class="card"><h3>The programme</h3><ul>${c.works.map(w=>`<li>${esc(w)}</li>`).join('')}</ul><p class="small">${esc(c.extra)}</p><a class="secondary" href="${c.url}" target="_blank" rel="noopener">TSO programme ↗</a></div>
      ${g.works.map(w=>`<section class="session"><h3 style="margin-top:28px">${esc(w.name)}</h3><div class="card"><p>${esc(w.before)}</p></div><table><thead><tr><th>Section</th><th>What it is</th><th>Listen for</th></tr></thead><tbody>${w.rows.map(rows).join('')}</tbody></table><div class="note"><strong>Reflection:</strong><ul>${w.q.map(q=>`<li>${esc(q)}</li>`).join('')}</ul></div></section>`).join('')}
      <div class="card"><h3>After the concert</h3><p>${esc(g.compare)}</p></div>
      <div class="note"><strong>Sources:</strong> ${g.sources.map(x=>`<a href="${x[1]}" target="_blank" rel="noopener">${esc(x[0])} ↗</a>`).join(' · ')}</div>
      <div class="note">These guides describe each movement but do not yet have recording timestamps like the Messiah guide. Pick a recording you like and we can add them.</div>`;
    c.button=g.id;
  });

  // Hub page: one sidebar entry, all guides listed.
  const hub=mountExtraPage('concertguides','TSO concert guides','♬');
  document.querySelector('.nav [data-tab="concertguides"]').remove();
  const hubNav=document.querySelector('.nav [data-tab="messiah"]');
  hubNav.dataset.tab='concertguides';hubNav.innerHTML='♬ &nbsp; TSO concert guides';
  const guideFor=['messiah','eroica-guide','violin-guide'];
  const guideNote=['Includes recording timestamps. Tap a time to play it in the page.','Movement-by-movement guide, with sources.','Movement-by-movement guide, with sources.'];
  hub.innerHTML=`<div class="eyebrow">The concert season</div><h2>TSO concert guides</h2><p class="section-intro">One guide for each Toronto Symphony Orchestra concert on your course. Open a guide to prepare before the concert and to listen with more attention.</p>
    <div class="cards">${concertData.map((c,i)=>`<article class="card"><div class="number">${esc(c.date)}</div><h3>${esc(c.name)}</h3><div class="label">Programme</div><ul>${c.works.map(w=>`<li>${esc(w)}</li>`).join('')}</ul><p class="small">${esc(guideNote[i])}</p><div class="actions"><button class="primary" type="button" onclick="showTab('${guideFor[i]}')">Open guide →</button></div></article>`).join('')}</div>`;
  const messiahPage=document.getElementById('messiah');
  if(messiahPage)messiahPage.insertAdjacentHTML('afterbegin',backLink);
  // Keep "TSO concert guides" highlighted while any of the three guides is open.
  const baseShowTab=showTab;
  showTab=function(tab,...rest){baseShowTab(tab,...rest);if(guideFor.includes(tab))hubNav.classList.add('active')};
  document.getElementById('allConcerts').innerHTML=concertData.map(concertCard).join('');
  const note=document.querySelector('#concerts .note');
  if(note)note.textContent='Each concert has its own listening guide. The Messiah guide includes recording timestamps; the February and April guides describe each movement and what to listen for.';
})();
