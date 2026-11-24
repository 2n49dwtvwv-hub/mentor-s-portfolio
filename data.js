/* =========================================================
   TON CONTENU — modifie uniquement ce fichier pour
   personnaliser le portfolio.
   ========================================================= */

const PROFILE = {
  name: "Mentor",
  fullName: "Mentor Mustafa",
  // Annonce affichée en notification à l'arrivée sur le site (mettre null pour la retirer)
  availability: {
    title: "Je recherche un stage",
    text: "En stratégie de marque, communication et création de contenus visuels et digitaux, à partir du 25 janvier 2027.",
  },
  username: "mentor",               // utilisé dans le Terminal
  role: "Communication & stratégie de marque",
  location: "",
  avatar: "assets/slides/photo-kimono.webp",
  // Texte de "À propos" (tu peux utiliser <strong>, <em>, <u>)
  bio: [
    "Je suis Mentor. J'observe, j'imagine, je crée. Je collectionne les images, les idées et les histoires qui méritent d'être racontées.",
    "<strong>Ce qui m'anime ?</strong> Trouver le détail qui fait la différence, l'idée qui donne du sens, <strong><em><u>l'image qui arrête le regard.</u></em></strong>",
    "J'aime naviguer entre stratégie et créativité. Comprendre l'ADN d'une marque, imaginer son territoire d'expression, construire son univers et lui donner vie à travers des concepts, <strong><u>des images et des histoires.</u></strong>",
    "Je crois aux marques qui ont <u>une personnalité</u>, aux idées qui bousculent et aux images qui racontent plus que les mots.",
    "Je ne cherche pas simplement à faire passer un message. Je cherche la meilleure façon de le faire <strong><em><u>ressentir.</u></em></strong>",
  ],
  email: "m.mentor@outlook.fr",
  phone: "+33 7 68 75 52 18",
  instagram: { handle: "@iammentorm", url: "https://www.instagram.com/iammentorm/" },
  links: [
    { label: "Instagram", url: "https://www.instagram.com/iammentorm/" },
  ],
  cv: "assets/cv.pdf",              // le PDF à télécharger
  cvPreview: "assets/cv-apercu.webp", // l'image affichée dans la fenêtre CV.pdf
  cvFileName: "MUSTAFA_Mentor_CV.pdf",
};

const PARCOURS = [
  { label: "Licence 3 ans", title: "Licence Communication", detail: "Spé marques de luxe & marketing digital", school: "Université Lyon 2" },
  { label: "Master 2 — en cours", title: "Master", detail: "Communication et stratégie de marques", school: "Université Lyon 2" },
];

// Projets : "slide" renvoie à la diapo animée (assets/projets/slides.js).
// Les liens sont utilisés par les boutons ET par les éléments cliquables de la diapo.
const PROJECTS = [
  {
    slug: "skincare-by-samy",
    slide: "samy",
    title: "Skincare by Samy",
    thumb: "assets/projets/p2-thumb.webp",
    roles: ["Montage vidéo", "Création de la chaîne YouTube", "Création de concept", "PR & influence"],
    highlights: [
      "+1 million d'abonnés sur TikTok, Instagram et YouTube",
      "Collaborations avec L'Oréal, Avène et La Roche-Posay",
    ],
    links: { youtube: "https://www.youtube.com/@skincarebysamy", instagram: "https://www.instagram.com/skincarebysamy/" },
  },
  {
    slug: "kamiiinoo",
    slide: "kamiiinoo",
    title: "Kamiiinoo",
    thumb: "assets/projets/p3-thumb.webp",
    roles: ["Montage vidéo", "Direction artistique", "Création de concept", "Création de la chaîne YouTube"],
    highlights: ["+100K abonnés sur TikTok, Instagram et YouTube"],
    links: { youtube: "https://www.youtube.com/@kamiiinoo", instagram: "https://www.instagram.com/kamii.bk_/" },
  },
  {
    slug: "sunae-curls",
    slide: "sunae",
    title: "Sunae Curls",
    thumb: "assets/projets/p4-thumb.webp",
    roles: ["Montage vidéo", "Direction artistique"],
    highlights: [],
    links: { instagram: "https://www.instagram.com/sunaecurls/" },
  },
  {
    slug: "aiko-curly-care",
    slide: "aiko",
    title: "Aiko Curly Care",
    thumb: "assets/projets/p5-thumb.webp",
    roles: ["Direction artistique", "Création de concept", "Montage vidéo"],
    highlights: [
      "Freelance, de janvier 2023 à octobre 2025",
      "Stratégie social media et community management",
      "Communautés développées de 20 000 à 25 000 abonnés",
    ],
    links: { site: "https://www.aikocurlycare.com/", instagram: "https://www.instagram.com/aikocurlycare/" },
  },
  {
    slug: "chrome",
    slide: "chrome",
    title: "Chrome",
    thumb: "assets/projets/chrome-thumb.webp",
    subtitle: "Maison de coiffure — Assistant communication · Stage de 6 mois · Courchevel",
    roles: ["Création de concept", "PR & influence", "Montage vidéo", "Direction artistique"],
    highlights: [
      "Direction artistique et lancement de produits",
      "Création de contenus et gestion des réseaux sociaux",
      "Organisation d'événements et collaborations avec des influenceurs",
      "Calendrier de l'Avent : 600 000 vues et plusieurs milliers d'abonnés",
    ],
    links: { instagram: "https://www.instagram.com/chrome_maisondecoiffure/" },
  },
];

// Vidéos (application « Vidéos ») — plateforme : "youtube" ou "instagram"
// project : slug du projet (affiche un bouton « Voir la vidéo » dans ce projet)
const VIDEOS = [
  {
    id: "aiko-curl-session",
    project: "aiko-curly-care",
    title: "Curl Session",
    platform: "instagram",
    videoId: "DYxH6BQsnhr",
    desc: "Un concept tourné comme un moment presque « psy » : on se confie pendant qu'on se fait coiffer, tout en mettant en avant les boucles de l'influenceuse. La série a été tournée uniquement avec des influenceuses.",
    tags: ["Création de concept"],
  },
  {
    id: "chrome-clem",
    project: "chrome",
    title: "Collaboration avec Clem qui court",
    platform: "instagram",
    videoId: "DPEqRKYDFx9",
    desc: "Collaboration avec l'influenceur Clem qui court pour Chrome — Maison de coiffure.",
    tags: ["PR & influence"],
  },
  {
    id: "samy-youtube",
    project: "skincare-by-samy",
    title: "Skincare by Samy",
    platform: "youtube",
    videoId: "LNyEn6bdsRg",
    desc: "Une vidéo de la chaîne YouTube Skincare by Samy.",
    tags: ["Montage vidéo"],
  },
];

// Direction artistique (fenêtre façon Pinterest)
// pins : [image (fichier du site « assets/… » ou chemin i.pinimg.com), largeur, hauteur, couleur dominante]
// project : slug du projet lié (affiche un bouton « Moodboard » dans ce projet)
const MOODBOARDS = {
  profile: "https://www.pinterest.com/iammentorm/",
  boards: [
    {
      id: "kamiiinoo",
      name: "Kamiiinoo",
      project: "kamiiinoo",
      url: "https://www.pinterest.com/iammentorm/kamino/",
      count: 40,
      pins: [
        ["assets/moodboard/kamiiinoo-01.webp", 424, 770, "#E1DACA"],
        ["assets/moodboard/kamiiinoo-02.webp", 423, 771, "#9D9998"],
        ["assets/moodboard/kamiiinoo-03.webp", 423, 423, "#525C61"],
        ["assets/moodboard/kamiiinoo-04.webp", 424, 770, "#BAB6B2"],
        ["assets/moodboard/kamiiinoo-05.webp", 423, 768, "#D7AEB6"],
        ["assets/moodboard/kamiiinoo-06.webp", 424, 732, "#E4D2C9"],
        ["assets/moodboard/kamiiinoo-07.webp", 423, 424, "#B1CBE0"],
        ["assets/moodboard/kamiiinoo-08.webp", 424, 423, "#EBE7E3"],
        ["assets/moodboard/kamiiinoo-09.webp", 423, 602, "#CACAC7"],
        ["assets/moodboard/kamiiinoo-10.webp", 424, 770, "#EEEEED"],
        ["assets/moodboard/kamiiinoo-11.webp", 423, 771, "#BAB6B2"],
        ["assets/moodboard/kamiiinoo-12.webp", 424, 804, "#C6B8B5"],
        ["assets/moodboard/kamiiinoo-13.webp", 423, 770, "#DBCDD1"],
        ["assets/moodboard/kamiiinoo-14.webp", 424, 623, "#C9A9AD"],
        ["assets/moodboard/kamiiinoo-15.webp", 423, 646, "#C8C2B9"],
        ["assets/moodboard/kamiiinoo-16.webp", 424, 320, "#E3D8D9"],
        ["assets/moodboard/kamiiinoo-17.webp", 423, 725, "#EDE9E7"],
        ["assets/moodboard/kamiiinoo-18.webp", 424, 422, "#EADFDF"],
        ["assets/moodboard/kamiiinoo-19.webp", 423, 424, "#E7E7E7"],
        ["assets/moodboard/kamiiinoo-20.webp", 424, 423, "#EDEEEF"],
      ],
    },
    {
      id: "aiko-curly-care",
      name: "Aiko Curly Care",
      project: "aiko-curly-care",
      url: "https://www.pinterest.com/iammentorm/reco-moodboard/",
      count: 23,
      pins: [
        ["f2/88/72/f288722722eea5ae8f4f163645702966.jpg", 474, 592, "#191510"],
        ["dc/94/07/dc9407c13879bf1863f00be307be61cb.jpg", 474, 544, "#7B4C25"],
        ["c0/13/d5/c013d56aef062a5acfc5aa39cec99ec4.jpg", 474, 266, "#231611"],
        ["14/7b/5b/147b5be44b84e7275ff5be6a3f193eff.jpg", 474, 266, "#53390D"],
        ["89/39/fe/8939fef0fc24f5413c2e59e6b4f76a0c.jpg", 474, 266, "#498D15"],
        ["e8/e8/26/e8e826c26000da9d7128c37c4a904caa.jpg", 474, 592, "#503D2C"],
        ["a5/c0/67/a5c06794cc6a2cac4c2489ad714a2b33.jpg", 474, 631, "#533E2D"],
        ["85/fb/98/85fb980b14f0f5ccc27baadb9fd97a2f.jpg", 474, 632, "#898A87"],
        ["74/3a/4f/743a4f539b5093087e6619e165946975.jpg", 474, 286, "#9A7470"],
        ["bb/19/da/bb19da5175583c566d56faee70f40cf9.jpg", 474, 266, "#563E36"],
      ],
    },
    {
      id: "photo-video",
      name: "Photo & vidéo — tous les projets",
      project: null,
      url: "https://www.pinterest.com/iammentorm/moodboard-photovid%C3%A9o/",
      count: 273,
      pins: [
        ["assets/moodboard/photo-video-01.webp", 424, 768, "#BDD8E8"],
        ["assets/moodboard/photo-video-02.webp", 423, 632, "#837B6E"],
        ["assets/moodboard/photo-video-03.webp", 424, 570, "#7593B4"],
        ["assets/moodboard/photo-video-04.webp", 423, 674, "#D1CECA"],
        ["assets/moodboard/photo-video-05.webp", 424, 767, "#8D8181"],
        ["assets/moodboard/photo-video-06.webp", 423, 624, "#BB9753"],
        ["assets/moodboard/photo-video-07.webp", 423, 390, "#EBE5D1"],
        ["assets/moodboard/photo-video-08.webp", 424, 567, "#EDE9DA"],
        ["assets/moodboard/photo-video-09.webp", 423, 261, "#ECA1A4"],
        ["assets/moodboard/photo-video-10.webp", 424, 421, "#B9BAB5"],
        ["assets/moodboard/photo-video-11.webp", 424, 603, "#D0CECA"],
        ["assets/moodboard/photo-video-12.webp", 423, 532, "#C4C5C5"],
        ["assets/moodboard/photo-video-13.webp", 424, 421, "#414141"],
        ["assets/moodboard/photo-video-14.webp", 423, 533, "#5C6174"],
        ["assets/moodboard/photo-video-15.webp", 424, 533, "#928F87"],
        ["assets/moodboard/photo-video-16.webp", 423, 419, "#444141"],
        ["assets/moodboard/photo-video-17.webp", 424, 820, "#190607"],
        ["assets/moodboard/photo-video-18.webp", 423, 442, "#676459"],
        ["assets/moodboard/photo-video-19.webp", 423, 223, "#5A7166"],
        ["assets/moodboard/photo-video-20.webp", 424, 473, "#737060"],
      ],
    },
  ],
};

const SKILLS = [
  "Stratégie de communication & de marque",
  "Social media & community management",
  "Direction artistique & identité visuelle",
  "Communication événementielle & influence",
  "Création de contenus & storytelling",
  "Montage vidéo",
];

// Logiciels affichés dans le Dock : un clic ouvre une bulle avec le niveau.
// level : 1 à 3 (repris du CV : +++ = 3, ++ = 2)
const SOFTWARE = [
  { id: "finalcut", name: "Final Cut Pro",        level: 3, desc: "Montage vidéo pour des influenceurs et créateurs de contenu : formats courts et formats longs.", tags: ["Montage vidéo", "Formats courts", "Formats longs"] },
  { id: "adobe",    name: "Adobe Creative Cloud", level: 3, desc: "Photoshop, Illustrator et After Effects pour la direction artistique et la création de visuels.", tags: ["Photoshop", "Illustrator", "After Effects"] },
  { id: "capcut",   name: "CapCut",               level: 3, desc: "Montage rapide de formats courts pour TikTok, Instagram Reels et YouTube Shorts.", tags: ["TikTok", "Reels", "Shorts"] },
  { id: "notion",   name: "Notion",               level: 2, desc: "Organisation des projets et des calendriers de contenus.", tags: ["Organisation", "Calendrier éditorial"] },
];

const CERTIFICATIONS = ["Inside LVMH", "Editing 360"];

const LANGUAGES = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Albanais", level: "Langue maternelle" },
  { name: "Anglais",  level: "C1+" },
  { name: "Allemand", level: "B2+" },
];

const TOOLS = [
  { name: "After Effects", img: "assets/slides/ae.webp" },
  { name: "Photoshop",     img: "assets/slides/ps.webp" },
  { name: "Illustrator",   img: "assets/slides/ai.webp" },
];
