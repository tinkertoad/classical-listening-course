// Concert guides for the February and April TSO programmes, modelled on the Messiah guide.
// Movement-by-movement, no recording timestamps: those need a specific recording checked by ear.
(function(){
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const guides=[
    {id:'eroica-guide',nav:'Eroica concert guide',concert:1,eyebrow:'Concert guide · February 4, 2027',title:'Beethoven’s <em>Eroica</em>',
     intro:'Three very different voices in one evening: a contemporary elegy, a lyrical twentieth-century violin concerto, and the symphony that changed what a symphony could be.',
     works:[
      {name:'Jennifer Higdon · blue cathedral',before:'Composed in 2000 in memory of Higdon’s brother, Andrew Blue. It is short, about a dozen minutes, and unfolds as one continuous arc rather than in separate movements. Higdon has described imagining a journey through a cathedral of blue glass. Bells and chimes frame the piece, and there are solo lines for clarinet and flute that she links to her brother and to herself.',
       rows:[['Opening','Bells and chimes, then quiet, shimmering texture','Notice how the sound is built from colour (chimes, high strings, harp) rather than from a tune you could hum.'],
             ['Solos','Clarinet and flute step out of the orchestra','Which voice speaks first? How does the orchestra respond to each?'],
             ['Close','Return of the bells; the music thins out and fades','Compare the ending with the opening. What has changed in between?']],
       q:['How does Higdon create mood without a conventional melody?','What does the piece gain from the bells coming back at the end?']},
      {name:'William Walton · Violin Concerto',before:'Written in 1938–39 for the violinist Jascha Heifetz and revised in 1943. It is lyrical and Romantic in feeling, but with a modern edge in its rhythm and harmony. In a concerto the soloist and orchestra take turns leading, so listen to who has the melody at any moment.',
       rows:[['I. Andante tranquillo','Slow and songlike; the violin sings above a gentle orchestra','The soloist enters almost at once with a long, wandering melody. Listen for how the orchestra supports it rather than competing.'],
             ['II. Presto capriccioso alla napolitana','A fast, playful scherzo with Neapolitan dance flavour','Listen for quick rhythmic changes and the violin’s sparkling, virtuoso passages.'],
             ['III. Vivace','A lively finale that brings back music from the opening','Listen for the return of the first movement’s lyrical theme. It gives the whole work a sense of coming home.']],
       q:['Where do the soloist and orchestra answer each other, and where do they play together?','Which movement shows off the soloist’s technique, and which shows off the soloist’s tone?']},
      {name:'Beethoven · Symphony No. 3, “Eroica”',before:'Composed in 1803–04, much longer and bolder than any symphony before it. Beethoven first dedicated it to Napoleon, then, as the story goes, withdrew the dedication when Napoleon crowned himself emperor. It was published as a symphony to remember “a great man”. Last lesson’s ideas about sonata form, theme and variations, and the scherzo all appear here.',
       rows:[['I. Allegro con brio','Sonata form. It opens with two huge E-flat chords, then the cellos state the main theme','Follow the main theme as it is broken up and rebuilt in the long development. The horn seems to enter “too early” just before the recapitulation, which is on purpose. A long coda finishes the argument.'],
             ['II. Marcia funebre','A funeral march in C minor','Listen for the slow, heavy tread, the brighter major-key episode in the middle, and a fugue that builds to a climax before the march falls apart at the end.'],
             ['III. Scherzo','Fast, light and rhythmic; a trio with three horns in the middle','Listen for the hushed, scurrying start and the sudden loud outbursts. The horns in the trio sound like a hunt.'],
             ['IV. Finale','Theme and variations','The theme is first heard only as a bare bass line, then the full melody arrives. Beethoven had used it before in his ballet music for Prometheus. Count how many different moods the variations create.']],
       q:['How does the funeral march change your idea of what a symphony can be about?','Where in the first movement did you hear the main theme come back?','How is the finale built from such a simple theme?']}
     ],
     compare:'After the concert, listen to the opening two minutes of the first movement in a recording of your choice and compare it with the live sound. What did the hall add?'},
    {id:'violin-guide',nav:'Beethoven’s Violin guide',concert:2,eyebrow:'Concert guide · April 11, 2027',title:'Beethoven’s <em>Violin</em>',
     intro:'An evening about conversation and growth: a violin and an orchestra in dialogue, and a symphony whose themes grow from tiny fragments.',
     works:[
      {name:'Yike Zhang · New work',before:'A new piece will be performed, so there is no reference recording to prepare with. Read the TSO programme note beforehand and treat it as a listening experiment. You get to hear it with no preconceptions.',
       rows:[['Opening','Whatever the piece begins with','What is the first sound you hear? A tune, a texture, a rhythm?'],
             ['Middle','How the music develops','What returns, and what is new? Can you tell when a section changes?'],
             ['Ending','How it finishes','Does it feel resolved, open-ended, or abrupt? Why?']],
       q:['What would you tell a friend about this piece in one sentence?','How did listening without preparation feel compared with the other works?']},
      {name:'Beethoven · Violin Concerto in D major',before:'Composed in 1806 and first played in Vienna that December. It is one of the longest and most lyrical concertos in the repertoire. The solo part is more songlike than showy, and the orchestra is a full partner. Beethoven did not write a cadenza for the violin version, so soloists choose or write their own. Listen for which one you hear.',
       rows:[['I. Allegro ma non troppo','Sonata form. Begins with five quiet timpani beats','The five drumbeats return all through the movement. Listen for them under the strings and when the violin takes up the main themes. Notice the soloist’s long entrance, and the cadenza near the end.'],
             ['II. Larghetto','Slow movement with muted strings','The orchestra plays a hushed theme and the violin floats decorative lines above it rather than replacing it. It is a dialogue of calm.'],
             ['III. Rondo','A lively refrain in a hunting-like rhythm that keeps coming back','Count the returns of the main tune and what happens in between. Listen to how the soloist’s tone changes from graceful to playful.']],
       q:['How does the soloist enter, and how long did it take before you heard the violin?','Where did you hear the timpani motif in the first movement?','How does the slow movement differ from the other two?']},
      {name:'Sibelius · Symphony No. 2 in D major',before:'Composed in 1901–02 and premiered in Helsinki. Finnish audiences heard it as a statement of national feeling, though Sibelius himself did not describe it that way. What makes the symphony special is how the themes are made. Instead of stating a tune and developing it, Sibelius offers small fragments that slowly gather into something whole.',
       rows:[['I. Allegretto','A pastoral opening with a rustic feel','Notice the short motives passed between strings and winds. They keep growing until they merge into longer themes.'],
             ['II. Tempo andante, ma rubato','Dark, brooding, and flexible in tempo','It begins with quiet plucked basses. Listen for the bassoons, the sudden dramatic outbursts and the pauses that give the movement its tension.'],
             ['III. Vivacissimo','A fast, driven scherzo with a calm, songlike contrast in the middle','Listen for the quick repeated notes in the strings, the oboe tune in the contrasting section, and how the music builds straight into the finale without a break.'],
             ['IV. Finale: Allegro moderato','A broad, triumphant finish in D major','Listen for the big, hymn-like theme returning in grander and grander form. Notice how much of the final climax grows from ideas heard earlier.']],
       q:['Which fragment from the first movement became a full theme later?','How does Sibelius build tension before the finale?','How does the way Sibelius builds themes compare with Beethoven’s approach in the Eroica?']}
     ],
     compare:'Compare how the Beethoven violin concerto and the Sibelius symphony start: one with five drumbeats, the other with scattered fragments. Which opening draws you in more?'}
  ];

  const rows=r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td><td>${esc(r[2])}</td></tr>`;
  guides.forEach(g=>{
    const c=concertData[g.concert];
    const page=mountExtraPage(g.id,g.nav,'♬');
    page.innerHTML=`<div class="eyebrow">${esc(g.eyebrow)}</div><h2>${g.title}</h2><p class="section-intro">${esc(g.intro)}</p>
      <div class="card"><h3>The programme</h3><ul>${c.works.map(w=>`<li>${esc(w)}</li>`).join('')}</ul><p class="small">${esc(c.extra)}</p><a class="secondary" href="${c.url}" target="_blank" rel="noopener">TSO programme ↗</a></div>
      ${g.works.map(w=>`<section class="session"><h3 style="margin-top:28px">${esc(w.name)}</h3><div class="card"><p>${esc(w.before)}</p></div><table><thead><tr><th>Section</th><th>What it is</th><th>Listen for</th></tr></thead><tbody>${w.rows.map(rows).join('')}</tbody></table><div class="note"><strong>Reflection:</strong><ul>${w.q.map(q=>`<li>${esc(q)}</li>`).join('')}</ul></div></section>`).join('')}
      <div class="card"><h3>After the concert</h3><p>${esc(g.compare)}</p></div>
      <div class="note">These guides describe each movement but do not yet have recording timestamps like the Messiah guide. Pick a recording you like and we can add them.</div>`;
    c.button=g.id;
  });
  document.getElementById('allConcerts').innerHTML=concertData.map(concertCard).join('');
  const note=document.querySelector('#concerts .note');
  if(note)note.textContent='Each concert has its own listening guide. The Messiah guide includes recording timestamps; the February and April guides describe each movement and what to listen for.';
})();
