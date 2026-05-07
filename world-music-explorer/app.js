// =============================================================
//  To change a video, find the country by searching for
//  "youtube_[countryid]" e.g. youtube_japan
//  and replace the URL with your chosen YouTube link.
// =============================================================

const countries = [
  {
    id: "southafrica", name: "South Africa", flag: "&#127487;&#127462;", type: "Choral Harmony Singing",
    x: 1420, y: 1115, color: "#16a34a",
    url: "https://www.youtube.com/watch?v=nlzomGoy97I",  // youtube_southafrica
    videoLabel: "Shosholoza — Ladysmith Black Mambazo",
    desc: "In South Africa, there is a famous style of music called <strong>isicathamiya</strong> (say: ee-see-kah-tah-MEE-yah). This is when a group of singers blend their voices to make one powerful sound. The name means 'to walk softly' — and performers even tiptoe gently across the stage as they sing!",
    styleFact: "In this video, a South African group called <strong>Ladysmith Black Mambazo</strong> sings <em>Shosholoza</em> which means 'Go forward.' The song has a message of hope and perseverance, and is often called the country's second national anthem. Listen for how some voices sing high, some sing low, and they all blend together into something beautiful.",
    funFact: "The famous group Ladysmith Black Mambazo has won 5 Grammy Awards and once performed for Nelson Mandela at his presidential inauguration!",
    instruments: ["Voices (harmony choir)", "Handclapping"]
  },
  {
    id: "korea", name: "South Korea", flag: "&#127472;&#127479;", type: "Korean Folk Song",
    x: 2135, y: 580, color: "#2563eb",
    url: "https://www.youtube.com/watch?v=9IRo0rjKZqY",  // youtube_korea
    videoLabel: "Namdo Folk Song 'Saetaryeong'",
    desc: "Korea has beautiful folk songs that have been sung for hundreds of years! <strong>Namdo folk songs</strong> come from the southern part of Korea. The singing uses a special wavy sound — like the voice is going up and down like a wave — that gives it a magical, emotional feeling.",
    styleFact: "The song <em>Saetaryeong</em> is a playful folk song about birds. Listen for how the singer's voice moves up and down smoothly. Traditional instruments play along to support the singing.",
    funFact: "Korea's most beloved song, <em>Arirang</em>, has been sung for over 600 years and is protected by UNESCO as an important piece of world culture!",
    instruments: ["Gayageum (12-string zither)", "Haegeum (two-string fiddle)", "Daegeum (bamboo flute)", "Janggu (hourglass drum)"]
  },
  {
    id: "china", name: "China", flag: "&#127464;&#127475;", type: "Traditional Erhu & Guzheng",
    x: 2055, y: 545, color: "#dc2626",
    url: "https://www.youtube.com/watch?v=-OA8YIEo7is",  // youtube_china
    videoLabel: "Erhu & Guzheng Duet Performance",
    desc: "China has some of the oldest music in the world — over <strong>3,000 years old!</strong> In this video, you will hear two beautiful instruments played together. One is bowed like a violin, and the other is plucked like a harp. Together they create flowing, graceful melodies.",
    styleFact: "The <strong>erhu</strong> has only two strings, but it can sound almost like a human voice singing. The <strong>guzheng</strong> has 21 strings. You pluck them with your fingers to make shimmering, flowing melodies.",
    funFact: "The erhu can copy the sounds of birds, horses, and even human laughter — all from just two strings and a tiny bow!",
    instruments: ["Erhu (two-string bowed instrument)", "Guzheng (21-string plucked zither)"]
  },
  {
    id: "japan", name: "Japan", flag: "&#127471;&#127477;", type: "Taiko Drumming",
    x: 2335, y: 490, color: "#db2777",
    url: "https://www.youtube.com/watch?v=ZagsLrNzg3I",  // youtube_japan
    videoLabel: "Taiko Taikai 2023 — 1st Place",
    desc: "<strong>Taiko</strong> means 'big drum' in Japanese! Taiko drummers put on one of the most exciting shows you will ever see. The drums can be as big as a car! Drummers work as a team, hitting giant drums with big wooden sticks and moving their whole bodies.",
    styleFact: "In this video, a taiko team won first place at a drumming competition. Watch how everyone moves together — every single person hits their drum at exactly the right moment. That takes years of practice and amazing teamwork!",
    funFact: "Some taiko drums are so enormous that the sound can be heard from more than a mile away. The biggest taiko drum in Japan weighs as much as a baby elephant!",
    instruments: ["O-daiko (giant bass drum)", "Nagado-daiko (barrel drum)", "Shime-daiko (small high-pitched drum)"]
  },
  {
    id: "usa", name: "United States", flag: "&#127482;&#127480;", type: "Jazz & Blues",
    x: 430, y: 595, color: "#7c3aed",
    url: "https://www.youtube.com/watch?v=g_FWCe49rKU",  // youtube_usa
    videoLabel: "Louis Armstrong — Ed Sullivan Show 1961",
    desc: "<strong>Jazz</strong> was born in New Orleans, USA, over 100 years ago! Jazz musicians sometimes make up their music as they go — that is called <strong>improvisation</strong>. Louis Armstrong was one of the most famous jazz musicians ever, known for his shiny trumpet and his big, warm smile.",
    styleFact: "In this 1961 TV performance, Louis Armstrong plays trumpet and sings with his band. Listen for how the trumpet sounds almost like it is talking or telling a story. That conversational style is what makes jazz so special!",
    funFact: "Louis Armstrong's nickname was 'Satchmo.' When he traveled to other countries, thousands of fans would come to the airport just to see him arrive!",
    instruments: ["Trumpet", "Trombone", "Clarinet", "Piano", "Double bass", "Drums"]
  },
  {
    id: "canada", name: "Canada", flag: "&#127464;&#127462;", type: "Indigenous Pow Wow Drumming",
    x: 425, y: 360, color: "#b45309",
    url: "https://www.youtube.com/watch?v=755HZydxL3w",  // youtube_canada
    videoLabel: "Odawa Traditional Pow Wow, Ottawa",
    desc: "Canada's First Nations peoples have the oldest music traditions in North America. At a <strong>pow wow</strong>, a big group of drummers sit together around a large drum and play and sing at the same time. The drum is said to represent the heartbeat of Mother Earth!",
    styleFact: "In this video, the Odawa people perform a traditional pow wow in Ottawa. The large drum is played by many people at once, all hitting it together while singers perform powerful songs. The rhythm is steady and strong, like a heartbeat.",
    funFact: "The drum is considered so sacred by many First Nations peoples that it is treated like a living being — cared for and respected just like a family member!",
    instruments: ["Pow wow drum (large ceremonial drum)", "Voices"]
  },
  {
    id: "kenya", name: "Kenya", flag: "&#127472;&#127466;", type: "Ohangla Ensemble",
    x: 1510, y: 870, color: "#166534",
    url: "https://www.youtube.com/watch?v=KmJULbLUzME",  // youtube_kenya
    videoLabel: "Ohangla Ensemble",
    desc: "Kenya's music is full of energy and joy! <strong>Ohangla</strong> is a music style from the Luo people in western Kenya. It uses a special ancient stringed instrument called the <strong>nyatiti</strong> and gets everyone up and dancing. The music mixes fast rhythms with call-and-response singing!",
    styleFact: "In this video, the nyatiti player plucks the strings while balancing the instrument on one foot — a special playing technique. Listen for how the singers call out and the group responds, passing the music back and forth.",
    funFact: "In Kenya, the Maasai warriors perform a jumping dance called <strong>adamu</strong> where they compete to see who can jump highest — with NO instruments, just the power of their own singing voices!",
    instruments: ["Nyatiti (8-string lyre)", "Orutu (one-string fiddle)", "Bul (drum)", "Voices"]
  },
  {
    id: "australia", name: "Australia", flag: "&#127462;&#127482;", type: "Aboriginal Music & Didgeridoo",
    x: 2285, y: 1105, color: "#92400e",
    url: "https://www.youtube.com/watch?v=IRMxLwOfKGQ",  // youtube_australia
    videoLabel: "Learn About the Yidaki (Didgeridoo)",
    desc: "Aboriginal Australians have been making music for over <strong>65,000 years</strong> — the oldest musical tradition on Earth! The <strong>didgeridoo</strong> (also called <em>yidaki</em>) is a long wooden tube that makes a deep, buzzing drone sound. It is made from a hollow eucalyptus tree trunk.",
    styleFact: "In this video, you will learn about the yidaki and hear its amazing sounds. Watch how the player uses a special breathing trick — they breathe in through their nose while blowing out, so the sound never stops! This is called <strong>circular breathing</strong>.",
    funFact: "The didgeridoo can be heard from more than a mile away! Some players can make it sound like animals — frogs, birds, and even wild dingoes!",
    instruments: ["Yidaki / Didgeridoo (large wind instrument)", "Clapsticks (wooden percussion sticks)"]
  },
  {
    id: "uk", name: "United Kingdom", flag: "&#127468;&#127463;", type: "Folk Music & Bagpipes",
    x: 1200, y: 390, color: "#0f766e",
    url: "https://www.youtube.com/watch?v=oBYVmnMFMtA",  // youtube_uk
    videoLabel: "UK Folk Music",
    desc: "The United Kingdom — England, Scotland, Wales, and Northern Ireland — has wonderful music! <strong>Scottish bagpipes</strong> make one of the most recognizable sounds in the world. Wales is famous for big community choirs. And in the 1960s, a band from England called <strong>The Beatles</strong> changed music all around the world!",
    styleFact: "UK folk music has been passed down for hundreds of years. Many folk songs tell stories about everyday life and adventures. Listen for the fiddle, tin whistle, and acoustic guitar weaving together in a lively, energetic sound.",
    funFact: "When The Beatles first arrived in America in 1964, over 3,000 screaming fans were waiting at the airport! Newspapers called it 'Beatlemania!'",
    instruments: ["Bagpipes", "Fiddle (violin)", "Tin whistle", "Bodhran (frame drum)", "Guitar", "Voices"]
  },
  {
    id: "philippines", name: "Philippines", flag: "&#127477;&#127469;", type: "Kulintang Gong Music",
    x: 2175, y: 730, color: "#6d28d9",
    url: "https://www.youtube.com/watch?v=G7bW6Z0moDo",  // youtube_philippines
    videoLabel: "Kultura Kapwa Kulintang Ensemble",
    desc: "The Philippines has a beautiful ancient instrument called the <strong>kulintang</strong>! It is a row of small bronze gongs lined up in a row. A player hits them with two padded sticks to create shimmering, bell-like melodies. This tradition has been kept alive for hundreds of years!",
    styleFact: "In this video, a full kulintang ensemble plays together. Listen for how the small gongs play the main melody on top, while larger gongs boom underneath. Each musician has a different part that fits together like puzzle pieces.",
    funFact: "Kulintang music was traditionally used to send messages between villages — different rhythms meant different announcements. It worked like a musical telephone!",
    instruments: ["Kulintang (row of small gongs)", "Agung (large hanging gong)", "Dabakan (drum)"]
  },
  {
    id: "indonesia", name: "Indonesia", flag: "&#127470;&#127465;", type: "Traditional Gamelan",
    x: 2155, y: 860, color: "#c2410c",
    url: "https://www.youtube.com/watch?v=UEWCCSuHsuQ",  // youtube_indonesia
    videoLabel: "Traditional Indonesian Gamelan",
    desc: "Indonesia has a magical type of music called <strong>gamelan</strong>! A gamelan is not just one instrument — it is an entire orchestra of bronze gongs, chimes, and drums all playing together. The sound shimmers and ripples like sunlight on water. Gamelan music comes from the islands of Java and Bali.",
    styleFact: "In this video, you can see the full gamelan orchestra. Each musician plays a different part, and together they create one big, shimmering sound. Gamelan music is often used in temple ceremonies and colorful shadow puppet shows!",
    funFact: "A full gamelan set can have more than 75 instruments! They are considered sacred — players must always remove their shoes before touching the instruments, as a sign of deep respect.",
    instruments: ["Bonang (gong chimes)", "Saron (bronze metallophone)", "Gong ageng (large gong)", "Kendhang (drum)", "Gender (keyed resonator bars)"]
  },
  {
    id: "morocco", name: "Morocco", flag: "&#127474;&#127462;", type: "Berber/Amazigh Folk Music",
    x: 1180, y: 630, color: "#d97706",
    url: "https://www.youtube.com/watch?v=jUIUlm5bDMI",  // youtube_morocco
    videoLabel: "Moroccan Berber/Amazigh Folk Music",
    desc: "Morocco is home to the <strong>Amazigh people</strong> (also called Berbers), one of the oldest groups in North Africa. Their folk music is powerful and ancient! It features strong drumbeats, handclapping, and call-and-response singing — where one person sings and the whole group sings back.",
    styleFact: "In this video, listen for the <strong>bendir</strong> — a large frame drum — beating out a strong, steady rhythm. The singing passes back and forth between a leader and the group. This music is often performed outside at night around fires during festivals!",
    funFact: "The Amazigh people have lived in North Africa for over 10,000 years. Their music and language are some of the oldest still being used anywhere in the world today!",
    instruments: ["Bendir (large frame drum)", "Gambri (3-string bass lute)", "Voices", "Handclapping"]
  },
  {
    id: "mongolia", name: "Mongolia", flag: "&#127474;&#127475;", type: "Throat Singing & Traditional Folk",
    x: 1980, y: 430, color: "#7c3aed",
    url: "https://www.youtube.com/watch?v=TpQBG_W-vdg",  // youtube_mongolia
    videoLabel: "Khusugtun — Traditional Mongolian Music",
    desc: "Mongolia has one of the most amazing music traditions on Earth — <strong>throat singing!</strong> A single singer can make two different notes at the same time. It sounds almost impossible! Mongolia also has a beautiful instrument called the <strong>morin khuur</strong>, a fiddle with a horse's head carved on top.",
    styleFact: "In this video, the band <em>Khusugtun</em> plays traditional Mongolian music. Listen carefully for the throat singing — you will hear two notes coming from one person at the very same time! It takes years of practice to learn.",
    funFact: "Mongolian throat singers can copy the sounds of wind, rivers, birds, and running horses — using only their voice. Some can even sound like an entire orchestra all by themselves!",
    instruments: ["Morin khuur (horsehead fiddle)", "Tovshuur (lute)", "Limbe (bamboo flute)", "Voice — khoomei (throat singing)"]
  },
  {
    id: "india", name: "India", flag: "&#127470;&#127475;", type: "Tabla & Sitar",
    x: 1870, y: 650, color: "#f59e0b",
    url: "https://www.youtube.com/watch?v=ed4SIvGjqNI",  // youtube_india
    videoLabel: "Tabla & Sitar Performance",
    desc: "India has one of the richest music traditions in the world, going back over <strong>3,000 years!</strong> The <strong>sitar</strong> is a long-necked instrument with many strings that makes a beautiful, shimmering sound. The <strong>tabla</strong> is a pair of small hand drums that play very complex rhythms. Together they tell a story without any words!",
    styleFact: "In this video, a sitar player and tabla player perform together. Listen to how the music starts slowly and then gets faster and more exciting — this is called a <strong>raga</strong>. The energy keeps building until it reaches a thrilling finish!",
    funFact: "Tabla players must memorize hundreds of rhythm patterns called <em>taals</em>. Some patterns are so tricky that it takes years of daily practice just to learn one!",
    instruments: ["Sitar (long-neck string instrument)", "Tabla (pair of hand drums)", "Tanpura (drone string instrument)"]
  },
  {
    id: "appalachia", name: "Appalachia (USA)", flag: "&#127482;&#127480;", type: "Bluegrass",
    x: 500, y: 590, color: "#92400e",
    url: "https://www.youtube.com/watch?v=yQIJuu3N5EY",  // youtube_appalachia
    videoLabel: "Appalachian Bluegrass",
    desc: "<strong>Bluegrass</strong> music comes from the mountains of the eastern United States! It uses fast, twangy instruments and beautiful close harmonies. Bluegrass grew from music brought to America long ago by Scottish, Irish, and African American musicians. It tells stories about mountain life, love, and adventure!",
    styleFact: "Listen for how fast the players pick their strings — bluegrass musicians are some of the fastest players in the world! The banjo, fiddle, and mandolin each play different parts that fit together like puzzle pieces.",
    funFact: "Bluegrass gets its name from Kentucky, nicknamed the 'Bluegrass State.' The style was largely invented by one man — Bill Monroe — who is called the 'Father of Bluegrass!'",
    instruments: ["Banjo (5-string)", "Fiddle (violin)", "Mandolin", "Acoustic guitar", "Double bass (upright bass)"]
  },
  {
    id: "mexico", name: "Mexico", flag: "&#127474;&#127485;", type: "Mariachi",
    x: 430, y: 680, color: "#15803d",
    url: "https://www.youtube.com/watch?v=xLZiEWqKhBQ",  // youtube_mexico
    videoLabel: "Mexican Mariachi",
    desc: "<strong>Mariachi</strong> is the most famous music of Mexico! Mariachi bands play at birthdays, weddings, and fiestas — and sometimes they serenade people right at their front door! The musicians wear beautiful, decorated outfits called <strong>charro suits</strong> with shiny silver buttons and wide brimmed hats.",
    styleFact: "Listen for the bright, bold sound of the trumpets and the warm strumming of the guitars. The big bass guitar is called a <strong>guitarron</strong>. All the instruments and voices blend together to create the bright, joyful mariachi sound!",
    funFact: "Mariachi music is so important to Mexico that UNESCO officially named it a world heritage treasure that must be protected forever!",
    instruments: ["Trumpet", "Violin", "Guitarron (large bass guitar)", "Vihuela (small round guitar)", "Guitar"]
  },
  {
    id: "brazil", name: "Brazil", flag: "&#127463;&#127479;", type: "Batucada & Samba",
    x: 700, y: 940, color: "#15803d",
    url: "https://www.youtube.com/watch?v=MKM_IKRPsR8",  // youtube_brazil
    videoLabel: "Brazilian Batucada",
    desc: "<strong>Batucada</strong> is powerful drumming from Brazil that is the heartbeat of samba music! Many drummers play different drums all at once, creating one giant rhythmic machine. Batucada fills the streets of Brazil during <strong>Carnival</strong> — the biggest street party in the world — where millions of people dance in colorful costumes!",
    styleFact: "In this video, watch how each drummer has a different drum with a different job. Some keep the steady beat, some play fast fills, and some play exciting patterns on top. Together they create a sound you can feel in your whole body!",
    funFact: "At Rio de Janeiro's Carnival, one samba school's drum section can have over 300 drummers playing at once! The sound is so loud you can feel it vibrating in your chest from a whole block away!",
    instruments: ["Surdo (bass drum)", "Caixa (snare drum)", "Tamborim (small frame drum)", "Repique (tenor drum)", "Agogo (double bell)", "Chocalho (shaker)"]
  },
  {
    id: "venezuela", name: "Venezuela", flag: "&#127483;&#127466;", type: "Parranda Music",
    x: 615, y: 795, color: "#b45309",
    url: "https://www.youtube.com/watch?v=7bNfslPIKrQ",  // youtube_venezuela
    videoLabel: "Venezuelan Parranda Music",
    desc: "<strong>Parranda</strong> is one of Venezuela's most joyful music traditions! It is fast, fun music played at celebrations and holidays — when the parranda starts, everyone joins in singing and dancing! It is especially popular during Christmas time in Venezuela.",
    styleFact: "Listen for the <strong>cuatro</strong> — a small 4-string guitar — and the shaking maracas driving the rhythm. The <strong>furro</strong> drum makes a deep, buzzy sound by rubbing a wet stick. Together they create a sound that makes you want to jump up and celebrate!",
    funFact: "Venezuela's music program <em>El Sistema</em> gives free orchestra lessons to children who need them. It started in 1975 and has now inspired similar programs in over 60 countries around the world!",
    instruments: ["Cuatro (4-string guitar)", "Maracas (shakers)", "Furro (friction drum)"]
  },
  {
    id: "newzealand", name: "New Zealand", flag: "&#127475;&#127487;", type: "Maori Haka",
    x: 2460, y: 1230, color: "#b91c1c",
    url: "https://www.youtube.com/watch?v=A0DkhR60xj4",  // youtube_newzealand
    videoLabel: "All Blacks Haka — Rugby World Cup 2023",
    desc: "The <strong>Maori people</strong> are the Indigenous people of New Zealand, and the <strong>haka</strong> is one of their most powerful traditions! In a haka, a group stomps, claps, and chants together with huge energy. It was once performed before battle to show strength, but today it celebrates and welcomes important guests.",
    styleFact: "In this video, New Zealand's famous All Blacks rugby team performs the haka before a World Cup match. There are no instruments at all — only the power of voices, stomping feet, and strong body movements working together as one.",
    funFact: "The All Blacks perform the haka before EVERY rugby match they play anywhere in the world! It is one of the most recognized sporting traditions on the entire planet!",
    instruments: ["Voices (powerful chanting)", "Feet (stomping as percussion)", "Hands (clapping as percussion)"]
  },
  {
    id: "spain", name: "Spain", flag: "&#127466;&#127480;", type: "Flamenco",
    x: 1190, y: 520, color: "#dc2626",
    url: "https://www.youtube.com/watch?v=jN4Qw2nAL9Y",  // youtube_spain
    videoLabel: "Spanish Flamenco",
    desc: "<strong>Flamenco</strong> is one of the most dramatic and exciting music styles in the world! It combines singing, guitar playing, and powerful dancing all at once. Flamenco dancers stomp their feet in lightning-fast rhythms and sweep their arms in graceful patterns. It comes from the Andalusia region in southern Spain.",
    styleFact: "In this video, watch the dancer's feet and arms — they are moving perfectly to the flamenco guitar rhythm. The stomping feet are actually playing percussion! The guitar style uses lightning-fast finger movements called <em>rasgueado</em>.",
    funFact: "Flamenco dancers wear special shoes with metal tacks hammered into the heel and toe so their stomping makes a loud, sharp sound — their feet are a percussion instrument!",
    instruments: ["Flamenco guitar", "Voice", "Palmas (handclapping)", "Zapateado (foot stomping)", "Castanets"]
  },
  {
    id: "netherlands", name: "Netherlands", flag: "&#127475;&#127473;", type: "Clog Dancing & Folk",
    x: 1270, y: 350, color: "#f97316",
    url: "https://www.youtube.com/watch?v=rVkrGJxdhuI",  // youtube_netherlands
    videoLabel: "Dutch Clog Dancing",
    desc: "In the Netherlands, people dance in wooden shoes called <strong>klompen</strong> — also known as clogs! The clacking sound the wooden shoes make on the floor creates its own rhythm. <strong>Clog dancing</strong> started hundreds of years ago with farmers and workers who wore the sturdy wooden shoes every day.",
    styleFact: "In this video, watch the dancers' feet as they stamp out patterns with their wooden clogs. The clogs hit the floor in exact rhythms — making the shoes into a percussion instrument! The accordion often plays the melody.",
    funFact: "The Dutch make about 3 million pairs of wooden clogs every year! They were originally worn because they protect feet much better than leather shoes — even from water and heavy farm tools.",
    instruments: ["Klompen / Wooden clogs (worn as percussion)", "Accordion", "Fiddle (violin)"]
  },
  {
    id: "romania", name: "Romania", flag: "&#127479;&#127476;", type: "Traditional Dance & Hora",
    x: 1445, y: 390, color: "#b91c1c",
    url: "https://www.youtube.com/watch?v=27jABq105j4",  // youtube_romania
    videoLabel: "Hora din Moldova — Romanian Traditional Dance",
    desc: "Romania has joyful folk music and dancing that goes back hundreds of years! The <strong>hora</strong> is a circle dance where everyone holds hands and moves together. It is performed at weddings, festivals, and village celebrations. The music is fast, lively, and almost impossible to sit still to!",
    styleFact: "In this video, a lively band plays the <em>Hora din Moldova</em> — a famous circle dance from the Moldova region of Romania. Listen for the fast pan flute melody and the hammering sound of the cimbalom playing chords underneath.",
    funFact: "The hora circle dance is so important in Romania that it is performed at nearly every wedding — sometimes with hundreds of guests all holding hands in one giant moving circle!",
    instruments: ["Nai (pan flute)", "Cimbalom (hammered dulcimer)", "Cobza (lute)", "Violin", "Accordion"]
  },
  {
    id: "serbia", name: "Serbia", flag: "&#127479;&#127480;", type: "Brass Band & Guca Festival",
    x: 1405, y: 405, color: "#4b5563",
    url: "https://www.youtube.com/watch?v=jiQHFTbBDac",  // youtube_serbia
    videoLabel: "Guca Trumpet Festival — World's Biggest",
    desc: "Serbia is famous for incredibly joyful <strong>brass band music!</strong> Every summer, the town of Guca holds one of the world's most exciting music festivals, where hundreds of trumpet players compete. Serbian brass music mixes Eastern European folk sounds with powerful, energetic playing.",
    styleFact: "In this video from the Guca Trumpet Festival, brass bands compete to play the fastest, most exciting music. Serbian brass rhythms can be tricky — some use unusual time signatures that make them hard to clap along to. Listen and see if you can clap with the beat!",
    funFact: "The Guca Trumpet Festival brings over 500,000 visitors every summer — the whole town shakes from the sound of so many trumpets and tubas playing at once!",
    instruments: ["Trumpet", "Tuba", "Trombone", "Clarinet", "Bass drum", "Snare drum"]
  }
];

const nav = document.getElementById("nav");
const pinsGroup = document.getElementById("pins-group");
const panel = document.getElementById("info-panel");
let active = null;

const ytSVG = `<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 2.5C21.3 1.6 20.6 0.9 19.7 0.66 17.98 0.18 11 0.18 11 0.18s-6.98 0-8.7.48C1.4.9.7 1.6.46 2.5 0 4.24 0 8 0 8s0 3.76.46 5.5c.24.9.94 1.6 1.84 1.84C4.02 15.82 11 15.82 11 15.82s6.98 0 8.7-.48c.9-.24 1.6-.94 1.84-1.84C22 11.76 22 8 22 8s0-3.76-.46-5.5z" fill="#FF0000"/><path d="M8.75 11.39L14.5 8 8.75 4.61v6.78z" fill="white"/></svg>`;

countries.forEach(c => {
  const pill = document.createElement("button");
  pill.className = "pill";
  pill.dataset.id = c.id;
  pill.innerHTML = c.flag + " " + c.name;
  pill.addEventListener("click", () => sel(c.id));
  nav.appendChild(pill);

  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("class", "pin-group");
  g.dataset.id = c.id;

  const shadow = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  shadow.setAttribute("cx", c.x + 3); shadow.setAttribute("cy", c.y + 4);
  shadow.setAttribute("r", "13"); shadow.setAttribute("fill", "rgba(0,0,0,0.3)");

  const bg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  bg.setAttribute("cx", c.x); bg.setAttribute("cy", c.y);
  bg.setAttribute("r", "13"); bg.setAttribute("fill", "#fff");
  bg.setAttribute("stroke", c.color); bg.setAttribute("stroke-width", "3");

  const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  dot.setAttribute("cx", c.x); dot.setAttribute("cy", c.y);
  dot.setAttribute("r", "6"); dot.setAttribute("fill", c.color);

  g.appendChild(shadow); g.appendChild(bg); g.appendChild(dot);
  g.addEventListener("click", () => sel(c.id));
  pinsGroup.appendChild(g);
});

function sel(id) {
  if (active === id) { closePanel(); return; }
  active = id;
  const c = countries.find(x => x.id === id);

  document.querySelectorAll(".pin-group").forEach(g => {
    const isActive = g.dataset.id === id;
    const bg = g.querySelectorAll("circle")[1];
    bg.setAttribute("r", isActive ? "17" : "13");
    bg.setAttribute("stroke-width", isActive ? "4" : "3");
  });

  document.querySelectorAll(".pill").forEach(p => {
    const isActive = p.dataset.id === id;
    p.classList.toggle("on", isActive);
    p.style.color = isActive ? c.color : "";
    p.style.borderColor = isActive ? c.color : "";
  });

  const pillsHtml = c.instruments.map(i => `<span class="instrument-pill">${i}</span>`).join("");

  panel.innerHTML = `<div class="card">
    <div class="card-header">
      <div class="flag-badge">${c.flag}</div>
      <div><div class="card-title">${c.name}</div><div class="card-sub">${c.type}</div></div>
      <button class="close-btn" onclick="closePanel()">&#x2715;</button>
    </div>
    <div class="card-sections">
      <a class="yt-btn" href="${c.url}" target="_blank" rel="noopener noreferrer">
        <div class="yt-logo-wrap">${ytSVG}</div>
        <div><div class="yt-btn-label">Watch on YouTube</div><div class="yt-btn-sub">${c.videoLabel}</div></div>
      </a>
      <div>
        <div class="section-head">&#128218; About This Music</div>
        <div class="desc">${c.desc}</div>
      </div>
      <div>
        <div class="section-head">&#11088; Cool Facts</div>
        <div class="desc">${c.styleFact}</div>
        <div class="fun-fact"><strong>Fun fact:</strong> ${c.funFact}</div>
      </div>
      <div>
        <div class="section-head">&#127928; Instruments to Listen For</div>
        <div class="instruments">${pillsHtml}</div>
      </div>
    </div>
  </div>`;
}

function closePanel() {
  active = null;
  document.querySelectorAll(".pin-group").forEach(g => {
    const bg = g.querySelectorAll("circle")[1];
    bg.setAttribute("r", "13");
    bg.setAttribute("stroke-width", "3");
  });
  document.querySelectorAll(".pill").forEach(p => {
    p.classList.remove("on");
    p.style.color = "";
    p.style.borderColor = "";
  });
  panel.innerHTML = `<div class="placeholder"><span class="big">&#128070;</span>Tap a pin or button to start exploring world music!</div>`;
}
