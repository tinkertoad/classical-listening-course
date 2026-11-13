// Listening exercises from Wright, Listening to Music, 8th ed. (Cengage, 2017): the "Listening Guide"
// pieces printed in each chapter assigned in reading-guide.js. The book's own timed cue charts are
// not reproduced; the "listen for" lines are original. Page numbers are the book's printed pages.
(function(){
  const link=id=>'https://www.youtube.com/watch?v='+id;
  // [composer, work, printed page, approx minutes, what to listen for, YouTube video id, optional?]
  const G=(c,w,p,m,l,v,opt)=>({c,w,p,m,l,v,opt:!!opt});
  const textbookListening={
    1:{items:[
      G('Beethoven','Symphony No. 5 in C minor, 1st movement (opening)',13,'1½','Follow the four-note motive as it swells, fades and returns in new guises.','I7AQeN-x_Xs'),
      G('R. Strauss','Also sprach Zarathustra (opening)',14,'1½','A slow rise from murky darkness to a blaze of full orchestra, with trumpets as the first light.','exveTEjJa5E')]},
    2:{items:[
      G('Britten','The Young Person’s Guide to the Orchestra',39,'17','The chapter’s own pointer for meeting every instrument family in turn: woodwinds, strings, brass, percussion.','4vbvhU22uAM')],
      note:'Chapter 3’s four “Listening Cue” demonstrations of the string, woodwind, brass and percussion families are MindTap-only recordings, so there is nothing public to link for them. Britten’s piece covers the same ground.'},
    3:{items:[],note:'Chapter 2’s rhythm exercise (“The Basics of Rhythm” and Listening Exercise 2.1, Hearing Meters) is a MindTap demonstration with no named piece. Try it there, or tap the beat to the Messiah chorus in this lesson.'},
    4:{items:[],note:'Chapter 2 has no named listening piece for syncopation. The rhythm exercise on p. 21 is a MindTap demonstration, and Listening Exercise 2.1 (Hearing Meters) is the one to do.'},
    5:{items:[],note:'Chapter 2’s melody section has no listening guide of its own; its listening exercises cover rhythm and harmony. Use this lesson’s Mozart theme as your practice piece.'},
    6:{items:[
      G('Handel','Messiah: “Behold, a Virgin shall conceive” and “O thou that tellest good tidings to Zion”',133,'5½','A short recitative sets up the aria. Catch the word painting in the aria and the surprise entry of the chorus.','JIqDNTnOCks')]},
    7:{items:[
      G('Gene Chandler','“Duke of Earl” (1962)',30,'2½','Sing the bass line: the same four-bar chord pattern repeats underneath, so the harmony is easy to hear.','IzfjTSPNS0c'),
      G('Pachelbel','Canon in D major',103,'4¾','The book pairs it with Duke of Earl: eight repeating chords below, a three-violin canon above.','vWvxp-F6pEs')],
      note:'The book also gives a short MindTap-only demonstration of consonance, dissonance and cadences (p. 29).'},
    8:{items:[
      G('Bach','Organ Fugue in G minor (the “Little” Fugue, BWV 578)',114,'4','After every voice has entered with the subject, decide which passages are the subject and which are episodes.','vITIeoxcfdM'),
      G('Bach','Brandenburg Concerto No. 5, 1st movement',116,'9½','Tutti against a small solo group; the harpsichord eventually takes over with a long solo.','r94zvNLw98g',true),
      G('Bach','Cantata Wachet auf, 4th movement',122,'4','Three layers: violin melody, a hymn tune in the tenors, and a walking bass.','9Do6NLjGqq0',true)]},
    9:{items:[
      G('Pachelbel','Canon in D major',103,'4¾','Hear the repeating bass pattern, then follow each violin as it imitates the one before.','vWvxp-F6pEs'),
      G('Mouret','Rondeau from Suite de symphonies',101,'2','A trumpet refrain (A) keeps coming back between contrasting sections.','CQtzd9l2Uvo'),
      G('Vivaldi','Violin Concerto in E major, “Spring,” 1st movement',107,'3¾','The full-orchestra refrain returns between the soloists’ birdsong and storm music.','e3nSvIiBNFo',true)]},
    10:{items:[
      G('Anonymous','Gregorian chant, Dies irae',55,'1¼','Single line, no beat, no instruments: an undulating tune carrying a frightening text. The recording plays the whole sequence; the book uses only the opening.','h3FED3omlDA'),
      G('Hildegard of Bingen','O rubor sanguinis',57,'1¼','Chant that floats; notice how the absence of beat and instruments changes how you listen.','omObUM6FcJo'),
      G('Perotinus','Organum, Viderunt omnes',59,'2¼','Three new voices above the chant, in a lilting triple meter. The recording is the full piece (about 11 minutes); the book uses the opening.','KA6oq_UYbyA'),
      G('Machaut','Kyrie of Messe de Nostre Dame',60,'2¼','Polyphony alternating with chant, and dissonant chords resolving at phrase ends. This recording is longer than the book\u2019s excerpt.','33yR2-vXblo'),
      G('Josquin Desprez','Ave Maria',71,'4¾','Voices imitate one another; follow the sections that tell the Virgin Mary’s story.','xGkb5KFwx1I'),
      G('Palestrina','Kyrie of the Missa Papae Marcelli',76,'4','Few contrasts: let the smooth, serene polyphony carry you.','GncDseEpNh0'),
      G('Countess of Dia','A chantar m’er',62,'2','Optional, secular: a medieval fiddle prelude, then a troubadour song.','0aZcf5S9HGk',true),
      G('Anonymous','Agincourt Carol',64,'4','Optional, secular: narrative verses against a rousing group refrain.','5vX8i7zFLDg',true),
      G('Moderne','Pavane and Galliard (Musique de joye)',78,'2¾','Optional, secular: wind-band dances in regular four-bar phrases.','UlKh75MjIuM',true),
      G('Weelkes','As Vesta Was from Latmos Hill Descending',79,'3¼','Optional, secular: the madrigal acts out each word in sound.','9LLDwTNj6f4',true)]},
    11:{items:[
      G('Bach','Cantata Wachet auf, 2nd movement (recitative)',121,'1','A rapid recitation over low strings and organ.','vdMDxtNzaf4'),
      G('Bach','Cantata Wachet auf, 4th movement',122,'4','Layered lines: violins, a chorale tune in the tenors, a walking bass.','9Do6NLjGqq0'),
      G('Bach','Cantata Wachet auf, 7th movement (closing chorale)',124,'1¼','A plain chorale meant for a whole congregation to sing.','eDm2Y_y4PKM'),
      G('Handel','Messiah: “Hallelujah” chorus',134,'3½','Notice how Handel switches between one line, chords, and overlapping voices to build drama.','weFJHtcxJt0'),
      G('Handel','Water Music, Minuet and Trio',129,'3','Optional: a cheerful minuet framing a hushed string trio.','uPH89Ylw8Bs',true)]},
    12:{items:[
      G('Mozart','Don Giovanni, Act I, Scene 1',198,'5½','Leporello’s aria, a duel and the Commandant’s death, told through ensembles.','A_uaVwg6h8U'),
      G('Mozart','Don Giovanni, Act I, Scene 7 (La ci darem la mano)',201,'5','Recitative to duet: the two voices gradually join as Zerlina gives way.','67vYBB7VTfs')]},
    13:{items:[
      G('Beethoven','Symphony No. 5, 2nd movement',219,'10','Two very different themes in turn, with a steady low-string foundation beneath.','q7MqqVecdok'),
      G('Beethoven','Symphony No. 5, 3rd movement',221,'5½','Sinister strings against thundering horns, supported by a low, creeping bass.','Li60Ti2wHpo')],
      note:'Chapter 3 has no piece that matches this lesson, so the guides here come from Chapter 15.'},
    14:{items:[
      G('Beethoven','Symphony No. 5, 1st movement (complete)',216,'7','Exposition, development, recapitulation: track the four-note motive through each.','I7AQeN-x_Xs'),
      G('Mozart','Eine kleine Nachtmusik, 1st movement',162,'5½','The book’s clearest sonata-allegro example; hear both theme groups and the repeat.','UhPBT0dA_oA'),
      G('Mozart','Overture to Don Giovanni',165,'6','Sonata-allegro with a dark slow introduction and a quick, bright main body.','20tnjOkmEmk'),
      G('Mozart','Piano Concerto No. 21, 2nd movement',158,'7','Optional: a contrasting ternary (ABA) form to compare.','df-eLzao63I',true)]},
    15:{items:[
      G('Mozart','Variations on “Twinkle, Twinkle, Little Star”',171,'3','Each statement of the tune is varied in a new way, about thirty seconds each.','yHRQ8nIAiqw'),
      G('Haydn','Symphony No. 94, “Surprise,” 2nd movement',172,'6¼','A simple theme dressed differently each time. Wait for the sudden loud chord.','lLjwkamp3lI')]},
    16:{items:[
      G('Haydn','Trumpet Concerto in E♭, 3rd movement',175,'4½','Count the returns of the rondo theme (ABABACABA).','hb5MSJcBb9o'),
      G('Mouret','Rondeau from Suite de symphonies',48,'2','A shorter rondo in the book for comparison (ABACA).','CQtzd9l2Uvo',true)]},
    17:{items:[
      G('Brahms','Violin Concerto in D, 3rd movement',322,'7½','Soloist and orchestra trade ideas; the rondo refrain keeps returning.','KQEi_xyByOI'),
      G('Brahms','Ein deutsches Requiem: “Wie lieblich sind deine Wohnungen”',323,'5½','Rich counterpoint inside a warm chorus-and-orchestra sound.','-K1G8PgDfCI')],
      note:'Chapter 3’s orchestra section pairs with this lesson; its instrument demonstrations are MindTap-only.'},
    18:{items:[
      G('Mozart','Piano Concerto No. 23, 1st movement',190,'11¾','The give-and-take of soloist and orchestra, with a double exposition.','yNOnsskjd9k'),
      G('Beethoven','Piano Sonata, Op. 13 “Pathétique,” 1st movement',210,'8½','Contrast: loud and soft, slow and fast, high and low.','kqvBJc9IovI'),
      G('Mozart','Symphony No. 40, 1st movement',183,'7¼','Optional: Classical form carrying real anxiety.','BJPmYURJk4c',true)]},
    19:{items:[
      G('Verdi','La traviata: “Un dì felice”',292,'3½','A tenor’s earnest declaration, Violetta’s light reply, then the duet.','9GKGk_3LT3M'),
      G('Verdi','La traviata: “Follie! Follie!” and “Sempre libera”',294,'4½','Recitative turning into the showpiece cabaletta.','4G_J_sPfQHM'),
      G('Bizet','Carmen: Habanera',310,'4½','The habanera rhythm and Carmen’s sultry melody.','K2snTkaD64U',true),
      G('Puccini','La bohème: “Che gelida manina”',313,'4','Optional: a tenor aria that hands over to the soprano.','zSe8tfjqUKI',true)]},
    20:{items:[
      G('Dvořák','Symphony No. 9, “From the New World,” 2nd movement',326,'12½','Broad brass chords, then the English horn’s long, wistful tune.','1zl1YKNgGxI'),
      G('Mahler','Symphony No. 1, 3rd movement',330,'10','A funeral march built from strange, dreamlike fragments.','VQEhwXMqACg')]},
    21:{items:[
      G('Debussy','Prelude to The Afternoon of a Faun',340,'10','Colour and drifting flute; no clear destination.','jlLoXvamfZw'),
      G('Debussy','Voiles (Préludes, Book I)',344,'4','Whole-tone and pentatonic scales, repeating figures, parallel chords.','a15gE1qu30c'),
      G('Ravel','Boléro',347,'15½','One tune repeated; the only change is instrumental colour.','s_pSJOkmYBA',true)]},
    22:{items:[
      G('Stravinsky','The Rite of Spring: Introduction and Scene 1',361,'7','Woodwinds crawling out of the earth, then pounding dissonant chords. This is the full ballet: play about the first 7 minutes (the Introduction, then Scene 1 from about 3:30).','EkwqPJZe8ms'),
      G('Schoenberg','Pierrot lunaire: “Madonna”',364,'2','Sprechstimme over atonal chamber music; try to find a home note.','TPV5YX8YQZI'),
      G('Schoenberg','Trio from Suite for Piano, Op. 25',367,'1','Twelve-tone writing. The link is the whole Minuet and Trio movement; the Trio is its middle section. Listen several times.','xdonpTF3ZhI')]},
    23:{items:[
      G('Handel','Messiah: “Hallelujah” chorus',43,'3½','Baroque: contrasting textures, with voices singly, in chords and overlapping.','weFJHtcxJt0'),
      G('Haydn','Symphony No. 94, theme from 2nd movement',47,'1','Classical: a balanced, tuneful theme in two parts.','lLjwkamp3lI'),
      G('Brahms','Wiegenlied (Lullaby)',45,'1¾','Romantic song with a repeated strophe.','upJJwkTgWGs'),
      G('Tchaikovsky','The Nutcracker: “Dance of the Reed Pipes”',47,'2½','Romantic orchestral colour in clear ABA form.','adEzklq8Dik'),
      G('Ravel','Boléro',347,'15½','Early twentieth century: colour over development.','s_pSJOkmYBA')]}
  };
  const css=document.createElement('style');
  css.textContent=`.tb-listen{margin:14px 0;padding:14px 16px;border:1px solid #e2dcc4;border-radius:11px;background:#fbf8ec}
  .tb-listen h4{margin:0 0 4px;color:#5a4a16;font-size:15px}.tb-listen .tb-sub{font-size:12px;color:#6d6446;margin:0 0 8px}
  .tb-listen ul{list-style:none;margin:0;padding:0}.tb-listen li{padding:9px 0;border-top:1px solid #ece5cc;font-size:13px;line-height:1.5}
  .tb-listen li:first-child{border-top:0}.tb-listen .tb-meta{color:#6d6446;font-size:12px}.tb-listen a{font-weight:700}
  .tb-listen .tb-opt{font-size:11px;font-weight:700;color:#8a6d1f;text-transform:uppercase;letter-spacing:.04em;margin-left:6px}
  .tb-listen .tb-note{font-size:12.5px;color:#5a4a16;margin:8px 0 0}`;
  document.head.append(css);
  const block=n=>{
    const d=textbookListening[n];if(!d)return '';
    const rows=d.items.map(g=>`<li><strong>${exEscape(g.c)} — ${exEscape(g.w)}</strong>${g.opt?'<span class="tb-opt">optional</span>':''}<div class="tb-meta">Book p. ${g.p} · about ${exEscape(g.m)} min</div><div>${exEscape(g.l)}</div><a href="${link(g.v)}" target="_blank" rel="noopener">▶ Listen on YouTube ↗</a></li>`).join('');
    return `<h4>🎧 Textbook listening exercises</h4>${d.items.length?`<p class="tb-sub">The Listening Guides from this lesson’s assigned chapters. Read the guide in the book while you listen; each link opens a full recording on YouTube.</p><ul>${rows}</ul>`:''}${d.note?`<p class="tb-note">${exEscape(d.note)}</p>`:''}`;
  };
  document.querySelectorAll('#lessonList article[id^="lesson-"]').forEach(card=>{
    const n=Number(card.id.slice(7));if(!textbookListening[n])return;
    const div=document.createElement('div');div.className='tb-listen';div.innerHTML=block(n);
    (card.querySelector('.reading-assignment')||card.querySelector('.question'))?.after(div);
  });
  document.querySelectorAll('#reading-schedule-list article').forEach((a,i)=>{
    const n=i+1;if(!textbookListening[n])return;
    const div=document.createElement('div');div.className='tb-listen';div.innerHTML=block(n);
    a.querySelector('ol')?.after(div);
  });
})();
