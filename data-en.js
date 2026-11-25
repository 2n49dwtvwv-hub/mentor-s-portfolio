/* =========================================================
   VERSION ANGLAISE — traduction du contenu de data.js.
   Seuls les textes sont ici ; tout le reste vient de data.js.
   ========================================================= */

const DATA_EN = {
  PROFILE: {
    role: "Communication & brand strategy",
    availability: {
      title: "Looking for an internship",
      text: "In brand strategy, communication and visual & digital content creation, starting January 25, 2027.",
    },
    bio: [
      "I'm Mentor. I observe, I imagine, I create. I collect images, ideas and stories that deserve to be told.",
      "<strong>Filming has always been my passion.</strong> For as long as I can remember, one thing has drawn me in more than anything: <strong><u>telling stories through images.</u></strong> I love crafting narratives that move people, to the point where they buy into the product, and then into the whole brand.",
      "My favourite playground: <strong>giving brands a real personality</strong>. Building their identity, their visual universe, their branding, so they're recognisable at first glance and people want to be part of them.",
      "<strong>What drives me?</strong> Finding the detail that makes the difference, the idea that gives meaning, <strong><em><u>the image that stops the scroll.</u></em></strong>",
      "I love moving between strategy and creativity. Understanding a brand's DNA, imagining its territory of expression, building its universe and bringing it to life through concepts, <strong><u>images and stories.</u></strong>",
      "I believe in brands with <u>a personality</u>, in ideas that shake things up and in images that say more than words.",
      "I'm not simply looking to get a message across. I'm looking for the best way to make people <strong><em><u>feel it.</u></em></strong>",
    ],
  },

  PARCOURS: [
    { label: "3-year Bachelor's", title: "Bachelor in Communication", detail: "Luxury brands & digital marketing", school: "Université Lyon 2" },
    { label: "Master's 2 — ongoing", title: "Master's", detail: "Communication and brand strategy", school: "Université Lyon 2" },
  ],

  PROJECTS: {
    "skincare-by-samy": {
      roles: ["Video editing", "YouTube channel creation", "Concept creation", "PR & influence"],
      story: {
        demande: "Build a YouTube channel from scratch, with a custom, recognisable editing style: a visual identity that belongs to Samy.",
        actions: "Video concepts, editing and art direction of the edit.",
        resultat: "Over 300,000 subscribers gained, videos between 300,000 and 600,000 views, and major collaborations with L'Oréal, La Roche-Posay and Avène.",
      },
      stats: [["+300K", "subscribers gained"], ["300–600K", "views per video"], ["L'Oréal · LRP · Avène", "collaborations"]],
    },
    kamiiinoo: {
      roles: ["Video editing", "Art direction", "Concept creation", "YouTube channel creation"],
      story: {
        demande: "Launch the YouTube channel and build a strong identity around the creator: real personal-branding work.",
        actions: "Art direction, editing, and an identity-building and personal-branding strategy.",
        resultat: "A channel launched with videos between 2,000 and 300,000 views, and over 100,000 followers across TikTok, Instagram and YouTube.",
      },
      stats: [["+100K", "followers in total"], ["up to 300K", "views per video"]],
    },
    "sunae-curls": {
      roles: ["Video editing", "Art direction"],
      story: {
        demande: "Give the salon an image people recognise at first glance on social media.",
        actions: "Art direction and above all editing: a unique style, specific to the salon, that makes it instantly recognisable.",
        resultat: "A consistent, instantly identifiable video identity, with content performing like Aiko's.",
      },
      stats: [["100%", "recognisable"]],
    },
    "aiko-curly-care": {
      roles: ["Art direction", "Concept creation", "Video editing"],
      story: {
        demande: "Build a strong visual and video identity for a curly-hair specialist salon in Brussels.",
        actions: "Art direction, concepts (including the “Curl Session” series with influencers) and editing, with a unique style specific to the salon.",
        resultat: "Over 30,000 followers and videos regularly reaching between 30,000 and 1 million views.",
      },
      stats: [["+30K", "followers"], ["up to 1M", "views per video"]],
    },
    chrome: {
      subtitle: "Hair salon — Communication assistant · 6-month internship · Courchevel",
      roles: ["Concept creation", "PR & influence", "Video editing", "Art direction"],
      story: {
        demande: "Redo the account's entire art direction and start from scratch: launch a real brand identity and visual identity for the salon, to gain followers and a place in luxury hairdressing.",
        actions: "Concepts, shoots, editing, influencer selection, art direction, communication strategy and brand strategy: building a brand in the luxury world.",
        resultat: "An Advent calendar with over 600,000 views, over 2,000 followers, and tens of thousands of views on every new video.",
      },
      stats: [["600K+", "views · Advent calendar"], ["+2,000", "followers"], ["10K+", "views per video"]],
    },
  },

  VIDEOS: {
    "aiko-curl-session": {
      desc: "A concept shot like an almost “therapy” moment: you open up while getting your hair done, while showcasing the influencer's curls. The series was shot exclusively with influencers.",
      tags: ["Concept creation"],
    },
    "chrome-clem": {
      title: "Collaboration with Clem qui court",
      desc: "Collaboration with influencer Clem qui court for Chrome — hair salon.",
      tags: ["PR & influence"],
    },
    "samy-youtube": {
      desc: "A video from the YouTube channel we built from scratch: concept, editing and art direction of the edit, with a recognisable style specific to Samy.",
      tags: ["Concept creation", "Video editing", "Art direction"],
    },
  },

  MOODBOARDS: { "photo-video": "Photo & video — all projects" },

  SAVOIR_FAIRE: {
    montage: { title: "Editing", text: "I edit every format: from vlogs to high-energy videos, with a style unique to each brand so it's instantly recognisable.",
      items: ["Motion design", "Dynamic cuts", "Vlogs", "Short-form (Reels, TikTok, Shorts)", "Long-form YouTube", "Colour grading & sound design"] },
    tournage: { title: "Filming", text: "On set, I handle pretty much everything, solo or with a crew: from prep to the last shot.",
      items: ["Framing", "Sound recording", "Lighting", "Directing talent", "Gear: Sony, Sigma 24-70, RØDE"] },
    strategie: { title: "Communication strategy", text: "I always start from the company itself: its organisation, its DNA and the message it wants to convey, to build a consistent communication strategy.",
      steps: ["Analyse the company's structure and organisation", "Understand its DNA and the message to convey", "Define targets and brand territory", "Build the strategy and communication plan", "Create content and measure results"] },
    moodboards: { title: "Moodboards & brand identity", text: "Before every project, I build moodboards in Freeform to set the visual universe: branding, brand identity, personal branding.",
      items: ["Branding", "Visual identity", "Personal branding", "Art direction"] },
  },

  SKILLS: [
    "Communication & brand strategy",
    "Social media & community management",
    "Art direction & visual identity",
    "Event communication & influence",
    "Content creation & storytelling",
    "Video editing",
  ],

  SOFTWARE: {
    finalcut: { desc: "Video editing for influencers and content creators: short-form and long-form.", tags: ["Video editing", "Short-form", "Long-form"] },
    adobe: { desc: "Photoshop, Illustrator and After Effects for art direction and visual creation." },
    capcut: { desc: "Fast short-form editing for TikTok, Instagram Reels and YouTube Shorts." },
    notion: { desc: "Organising projects and content calendars.", tags: ["Organisation", "Content calendar"] },
  },

  LANGUAGES: [
    { name: "French", level: "Native" },
    { name: "Albanian", level: "Native" },
    { name: "English", level: "C1+" },
    { name: "German", level: "B2+" },
  ],
};
