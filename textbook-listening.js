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
  // Original section outlines, keyed by video id. Order of events only: no timestamps, because tempo,
  // repeats and applause differ between recordings. Shared by every lesson that links the recording.
  const OUT={
    'I7AQeN-x_Xs':["Exposition: the short-short-short-long motive is announced twice, each time with a pause.","A horn call launches a bridge, then a gentler second theme in the strings, with the motive still ticking underneath. (If your performance repeats the exposition, you hear all this twice.)","Development: the motive is tossed between strings and winds and pushed through rising sequences, then thins to quiet.","Recapitulation: the opening returns, followed by a brief, exposed oboe solo.","Coda: the motive drives the movement to a forceful close."],
    'exveTEjJa5E':["A deep, held organ and low-string note, almost silence.","A rising three-note call in a solo trumpet, answered by the orchestra.","Timpani and the full orchestra swell to a huge major chord, with the organ underneath."],
    '4vbvhU22uAM':["Theme (by Purcell) stated by the full orchestra, then by each family in turn: woodwinds, brass, strings, percussion.","Thirteen variations, each spotlighting an instrument: flutes and piccolo, oboes, clarinets, bassoons, violins, violas, cellos, double basses, harp, horns, trumpets, trombones and tuba, percussion.","Fugue: the instruments enter one at a time in roughly the same order as the variations, starting with the piccolo.","Finale: the theme returns in the brass over the racing fugue."],
    'JIqDNTnOCks':["Recitative: a short, speech-like prophecy over a plain continuo accompaniment.","Aria: a lilting solo melody with an orchestral refrain; listen for the tune climbing at \"get thee up into the high mountain.\"","The chorus enters unexpectedly and takes up the aria's words.","Solo and chorus alternate to the end."],
    'IzfjTSPNS0c':["The bass voice sets the pattern: \"Duke, Duke, Duke of Earl.\"","The other voices join with the chords above the bass.","The lead singer enters. The same four-bar chord loop goes round the whole way through, never changing."],
    'vWvxp-F6pEs':["The cello and continuo begin the repeating bass: eight notes, then again and again.","First violin enters with a calm melody above it.","Second violin enters with the same melody, two bars behind; then the third violin the same way.","The violins' notes get busier, then calm again toward the end, over the same bass."],
    'vITIeoxcfdM':["Exposition: the subject sounds alone in one voice, then another voice answers with it, until all four voices have entered.","Episodes: freer passages where the subject rests.","The subject returns in different voices and different keys.","A final entry and a full, firm ending."],
    'r94zvNLw98g':["Ritornello: the full ensemble plays the main theme.","Episodes: the flute, violin and harpsichord trio plays lighter material between returns of the ritornello.","The ritornello returns, in pieces, several times.","A long harpsichord solo near the end builds tension.","The final ritornello closes the movement."],
    '9Do6NLjGqq0':["Violins play a flowing instrumental melody that returns between the sung phrases.","The tenors sing the hymn tune in long notes above a walking bass.","The hymn has two matching phrases, then a different third (AAB)."],
    'vdMDxtNzaf4':["A speech-like recitation by a solo singer over low strings and organ.","There is no repeated music: each phrase follows the words."],
    'eDm2Y_y4PKM':["A plain four-part chorale, all voices moving together.","Two matching phrases, then a different closing phrase (AAB)."],
    'CQtzd9l2Uvo':["A: the trumpet refrain.","B: a contrasting episode.","A returns.","C: a second, different episode.","A returns to end (ABACA)."],
    'e3nSvIiBNFo':["Refrain: the full orchestra plays the main tune.","Birdsong: solo violins trill and twitter.","Refrain returns.","A gentle stream: murmuring strings.","Refrain returns.","A storm: tremolo strings and rushing scales.","Refrain returns.","Birdsong again, then a final refrain."],
    'h3FED3omlDA':["One unaccompanied line of chant with no beat.","The melody is sung twice, to two lines of text each time, then moves on to a new melody for the next pair of lines."],
    'omObUM6FcJo':["One floating melodic line, no instruments or beat.","Phrases climb to high notes, then settle."],
    'KA6oq_UYbyA':["A single voice sustains each note of the old chant very slowly.","Three upper voices dance above it in a lilting triple meter.","Voices swap short, repeating patterns as the long chant notes change underneath."],
    '33yR2-vXblo':["Kyrie I: chant-like opening alternating with polyphony.","Christe: the middle section, also with polyphony.","Kyrie II: a return of the opening plan. Listen for dissonances resolving at phrase ends."],
    'xGkb5KFwx1I':["The voices enter one after another with the same melody (imitation).","Each section sets a new line of text with new imitation, one for each scene from Mary's life.","Final plea: the voices move together in plain chords, slower and more intense."],
    'GncDseEpNh0':["Kyrie I: voices enter in smooth imitation.","Christe: a shorter middle section with fewer voices.","Kyrie II: the full choir returns. The pace never changes."],
    '0aZcf5S9HGk':["A short instrumental prelude, usually on a fiddle or similar instrument.","The voice sings the first strophe.","Further strophes repeat the same melody with new words."],
    '5vX8i7zFLDg':["Verse: a narrative about the battle, often by a solo or small group.","Chorus: everyone sings \"Deo gracias Anglia\" together.","Verse and chorus alternate (strophic)."],
    'UlKh75MjIuM':["Pavane: a slow, stately dance in duple meter, in regular 4+4-bar phrases.","Galliard: a quicker, bouncier dance in triple meter."],
    '9LLDwTNj6f4':["The music acts out the words: the line falls on \"descending,\" rises as the queen ascends, and runs on \"running down.\"","Weaving two-, three- and many-voice passages show the \"two by two, three by three\" words.","A closing refrain in praise of Queen Elizabeth."],
    'uPH89Ylw8Bs':["Minuet: a bright dance in triple meter, played by the full ensemble.","Trio: a quieter, contrasting middle dance.","Minuet returns."],
    'weFJHtcxJt0':["\"Hallelujah\": chords struck together by chorus and orchestra.","\"For the Lord God omnipotent reigneth\": everyone sings the same line in unison.","\"The kingdom of this world\": slow, hushed chords.","\"And He shall reign for ever and ever\": overlapping voices (polyphony) climb to an emphatic statement.","\"King of kings\": the sopranos soar above the chorus.","A pause, then a final \"Hallelujah.\""],
    'A_uaVwg6h8U':["Leporello's aria: he complains about standing guard.","Don Giovanni and Donna Anna struggle in an ensemble.","The Commendatore arrives and challenges him.","The duel, then the Commendatore's death in a hushed trio.","A short recitative as Don Giovanni and Leporello slip away."],
    '67vYBB7VTfs':["Don Giovanni invites Zerlina in a smooth, lilting tune.","Zerlina hesitates and answers, with her own phrases.","Their voices join, singing the same line together as she gives way."],
    'q7MqqVecdok':["First theme: a calm, song-like melody in the lower strings.","Second theme: a brassy fanfare in C major.","The first theme returns with a busier, decorated accompaniment.","The fanfare returns, then a quieter wandering section.","A closing section fades."],
    'Li60Ti2wHpo':["Scherzo: low strings creep upward, then the horns call out the four-note motive from the first movement.","Trio: cellos and basses race through a rumbling fugue-like section.","The scherzo returns hushed, with plucked strings.","A long, quiet suspense build leads without a break to the finale."],
    'UhPBT0dA_oA':["Exposition: first theme, a rocket-like upward figure in the whole ensemble.","A bridge leads to a lighter, second theme in a new key; it ends the exposition (repeated).","Development: a short passage that works over the first theme in different keys.","Recapitulation: the first theme returns, and the second theme now in the home key.","Short coda."],
    '20tnjOkmEmk':["Slow introduction: dark, heavy chords and eerie scales, music of doom.","Fast main part in sonata-allegro form: lively, quicksilver themes.","The music runs on without a big ending, leading straight into the opera."],
    'df-eLzao63I':["A: muted strings with plucked bass and a gentle pulse, with a long, songlike piano melody above.","B: a contrasting middle section with woodwinds and a more restless mood.","A returns, with a short coda."],
    'yHRQ8nIAiqw':["Theme: a simple melody.","Variations 1–7: fast runs, triplets and rhythmic patterns, shifting between hands.","Variation 8: the theme turns to a minor key.","Variation 11: slow and ornamental.","Variation 12: a lively dance-like finish."],
    'lLjwkamp3lI':["Theme: soft and delicate, played softly twice, then a sudden loud chord (the \"surprise\").","Variation 1: violins decorate the theme, with the winds.","Variation 2: minor key and louder.","Variation 3: quick repeated notes in the oboe and flute.","Variation 4: full orchestra, loud and ceremonial.","Coda: a quiet close."],
    'hb5MSJcBb9o':["Refrain (A): the trumpet's catchy tune.","Contrasting episodes (B, C) come between each return.","The order is ABABACABA: count the refrains."],
    'KQEi_xyByOI':["Refrain: the solo violin announces a dance-like theme in thirds and octaves, then the orchestra takes it up.","Episodes: contrasting themes, including a minor-key one, with the violin and orchestra trading ideas.","Refrain returns several times, each time a little changed.","A lively coda in march rhythm."],
    '-K1G8PgDfCI':["The orchestra opens with gentle, rocking music.","The choir enters, voices overlapping in imitation.","A contrasting middle section with more motion.","The opening returns and fades into peaceful calm."],
    'yNOnsskjd9k':["Orchestral exposition: the orchestra alone introduces the main themes.","Soloist's exposition: the piano enters and re-presents the themes with decoration.","Development: themes are reworked.","Recapitulation: themes return in the home key.","Cadenza: the pianist plays alone near the end.","A brief orchestral close."],
    'kqvBJc9IovI':["Slow introduction (Grave): heavy chords followed by soft answers.","Fast main section: a racing theme above a rumbling left hand.","Second theme: a lighter, singing theme.","The slow introduction interrupts at the start of the development.","The racing theme returns; the slow music reappears at the end of the movement before the final rush."],
    'BJPmYURJk4c':["Exposition: the \"sighing\" first theme in the violins over restless violas.","A second, more lyrical theme, with the winds answering.","Development: the first theme is fragmented and passed through keys.","Recapitulation: the first theme returns, now more tense.","A short, urgent coda."],
    '9GKGk_3LT3M':["Alfredo's solo: a sincere tune about love.","Violetta's reply: lighter, quicker and fluttering.","The two voices join in the duet."],
    '4G_J_sPfQHM':["Recitative: Violetta wonders whether Alfredo is her true love.","Alfredo is heard singing offstage, a hint that her doubts are real.","Cabaletta: she breaks into the dazzling \"Sempre libera,\" full of coloratura and ending on a high note."],
    'K2snTkaD64U':["Orchestra: a descending line and the swaying habanera rhythm.","Carmen sings the first stanza over the rhythm, rising to the refrain on \"L'amour.\"","The chorus echoes the refrain.","A second stanza follows the same plan."],
    'zSe8tfjqUKI':["Rodolfo starts quietly, taking Mimì's cold hand.","He tells her about himself, with the music warming and growing.","A high-lying climax leads to a soft, tender close."],
    '1zl1YKNgGxI':["A: slow, hymn-like chords in the brass, then the English horn's long, nostalgic melody.","B: a more restless middle section, with woodwinds.","C: a darker, more agitated passage.","A returns: the English horn melody, then a hushed close."],
    'VQEhwXMqACg':["A solo double bass begins a minor-key funeral march built on a familiar round (\"Frère Jacques\" in minor), joined by other instruments entering in turn.","Parody: music with a Bohemian-band flavor intrudes.","A tender, song-like middle section.","The funeral march returns and fades."],
    'jlLoXvamfZw':["A solo flute plays a drifting melody by itself.","Harp, horn and strings join with lush, shimmering color.","A warmer, more sweeping melody in the strings builds to a climax.","The flute melody returns and the music fades."],
    'a15gE1qu30c':["A: a hazy, drifting texture built on whole-tone scales.","B: a central section using black keys (a pentatonic scale), with a held bass.","A returns, and the whole-tone sound dissolves at the end."],
    's_pSJOkmYBA':["The snare drum keeps one rhythm throughout.","One long tune (A) and a second tune (B) repeat, with no development.","Each repetition gets a different instrument or group: flute, clarinet, bassoon, other woodwinds, then pairs, brass and strings.","The volume and layers grow. Near the end the key shifts upward.","A sudden crash ends it."],
    'EkwqPJZe8ms':["Introduction: a high solo bassoon, then other woodwinds twisting around it.","The texture builds into a tangle of bird calls and a restless swell.","Scene 1: pounding, dissonant string chords, with horns accenting off the beat.","Rhythms stay unpredictable for the rest of the dance."],
    'TPV5YX8YQZI':["A voice neither sings nor speaks (Sprechstimme), sliding between pitches.","A small ensemble answers in angular, jagged lines.","There is no key to settle on."],
    'xdonpTF3ZhI':["The tune is built from a fixed order of twelve pitches.","Short, scattered fragments appear and repeat in different forms.","The Trio is the middle section of the dance movement."],
    'upJJwkTgWGs':["Strophe 1: a gentle, rocking melody over a soft accompaniment.","Strophe 2: exactly the same music with new words."],
    'adEzklq8Dik':["A: flutes play a dainty dance tune in a major key.","B: soft trumpets take over in a minor key.","A returns in the flutes, shorter."]
  };
  const css=document.createElement('style');
  css.textContent=`.tb-listen{margin:14px 0;padding:14px 16px;border:1px solid #e2dcc4;border-radius:11px;background:#fbf8ec}
  .tb-listen h4{margin:0 0 4px;color:#5a4a16;font-size:15px}.tb-listen .tb-sub{font-size:12px;color:#6d6446;margin:0 0 8px}
  .tb-listen ul{list-style:none;margin:0;padding:0}.tb-listen li{padding:9px 0;border-top:1px solid #ece5cc;font-size:13px;line-height:1.5}
  .tb-listen li:first-child{border-top:0}.tb-listen .tb-meta{color:#6d6446;font-size:12px}.tb-listen a{font-weight:700}
  .tb-listen .tb-opt{font-size:11px;font-weight:700;color:#8a6d1f;text-transform:uppercase;letter-spacing:.04em;margin-left:6px}
  .tb-listen details{margin:6px 0 2px;font-size:12.5px}.tb-listen summary{cursor:pointer;font-weight:700;color:#5a4a16}.tb-listen details ol{margin:6px 0 4px;padding-left:20px}.tb-listen details p{margin:4px 0 0;color:#6d6446;font-size:11.5px}
  .tb-listen .tb-note{font-size:12.5px;color:#5a4a16;margin:8px 0 0}`;
  document.head.append(css);
  const block=n=>{
    const d=textbookListening[n];if(!d)return '';
    const rows=d.items.map(g=>`<li><strong>${exEscape(g.c)} — ${exEscape(g.w)}</strong>${g.opt?'<span class="tb-opt">optional</span>':''}<div class="tb-meta">Book p. ${g.p} · about ${exEscape(g.m)} min</div><div>${exEscape(g.l)}</div>${OUT[g.v]?`<details><summary>Section outline</summary><ol>${OUT[g.v].map(x=>`<li>${exEscape(x)}</li>`).join('')}</ol><p>In order of events, not timestamps: tempo and repeats vary between recordings.</p></details>`:''}<a href="${link(g.v)}" target="_blank" rel="noopener">▶ Listen on YouTube ↗</a></li>`).join('');
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
