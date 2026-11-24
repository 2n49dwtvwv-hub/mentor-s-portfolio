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
