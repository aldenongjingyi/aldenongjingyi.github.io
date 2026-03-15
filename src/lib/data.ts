export const experience = [
  {
    role: "Software Developer",
    company: "Map Seventy Two Sdn Bhd",
    date: "2025 — Present",
    location: "Kuala Lumpur",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flutter"],
    bullets: [
      "Building fullstack web and mobile products for clients across multiple industries",
      "Developing and shipping production features using Next.js, React, and Flutter",
      "Contributing to product engineering decisions and technical architecture",
    ],
  },
  {
    role: "Founder / Creative Producer",
    company: "WaffleBox Productions",
    date: "May 2025 — Present",
    location: "Kuala Lumpur",
    tags: ["Photoshop", "Premiere Pro", "Lightroom", "DaVinci Resolve"],
    bullets: [
      "Co-founded a creative production studio handling photography and videography for local businesses",
      "Managing end-to-end production from client consultation and conceptualization to final delivery",
    ],
  },
  {
    role: "Production Assistant (Contract)",
    company: "Taxi Production",
    date: "Mar 2025 — May 2025",
    location: "Kuala Lumpur",
    tags: ["Photography", "Premiere Pro", "Lightroom"],
    bullets: [
      "Coordinated professional photo and video shoots for brands including Nike and New Balance",
      "Shot and edited event coverage and short-form content for social media",
    ],
  },
  {
    role: "IT Intern",
    company: "AS Watson Group (Watsons Malaysia)",
    date: "Dec 2023 — Apr 2024",
    location: "Kuala Lumpur",
    tags: ["SQL", "SAP BI/BO", "FTP"],
    bullets: [
      "Provided technical support for retail operations across multiple store locations",
      "Executed SQL queries for data extraction, reporting, and operational analytics",
      "Worked with SAP BI/BO dashboards and FTP systems for data management",
    ],
  },
];

export const education = [
  {
    degree: "MBA",
    school: "Taylor's University",
    note: "Postgraduate Bursary Recipient · 2024–2026",
  },
  {
    degree: "BSc Computer Science (Honors)",
    school: "Sunway University / Lancaster University",
    note: "Lancaster Mobility Scholarship (Full) · 2021–2024",
  },
];

export const projects = [
  {
    title: "Human Activity Recognition",
    desc: "ML-powered mobile app that recognizes human activities in real-time using smartphone sensor data.",
    detail:
      "Capstone project at Sunway University. Developed and trained machine learning models using smartphone accelerometer and gyroscope data to predict human activity. Built a companion Android application integrating the trained model for real-time inference.",
    tags: ["Java", "Python", "ML", "Android"],
    link: "https://github.com/aldenongjingyi",
    linkLabel: "GitHub",
    status: "code" as const,
  },
  {
    title: "Collaborative Pixel Editor",
    desc: "Team-built pixel art editor with layer management, color palettes, and export functionality.",
    detail:
      "Developed at Lancaster University as part of collaborative coursework with a team of 5. Built a functional pixel editor in Java Swing featuring layer management, a full color palette system, and multiple export formats.",
    tags: ["Java", "Swing", "Team Project"],
    link: "https://github.com/aldenongjingyi",
    linkLabel: "GitHub",
    status: "code" as const,
  },
  {
    title: "WaffleBox Productions",
    desc: "Creative production studio delivering photography and videography for local businesses and brands.",
    detail:
      "Co-founded a small creative production studio handling end-to-end photo and video projects for local businesses. Collaborated with clients to deliver high-quality visual content. Previously worked with brands like Nike and New Balance.",
    tags: ["Photography", "Videography", "Production"],
    link: "https://instagram.com/waffleboxproductions",
    linkLabel: "Instagram",
    status: "live" as const,
  },
  {
    title: "This Portfolio",
    desc: "Personal portfolio built with Next.js, Tailwind CSS, and shadcn/ui. Designed around a terminal-meets-editorial aesthetic.",
    detail:
      "Full rebuild from static HTML to Next.js. Features smooth scroll animations, particle effects, and shadcn/ui components. TypeScript + Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn"],
    link: "https://github.com/aldenongjingyi/aldenongjingyi.github.io",
    linkLabel: "Source",
    status: "live" as const,
  },
];

export const techStack = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C", "HTML/CSS"],
  Frameworks: ["Next.js", "React", "Tailwind CSS"],
  Mobile: ["Flutter", "Dart", "Android SDK"],
  Tools: ["Git", "Vercel", "VS Code", "Figma"],
  Creative: [
    "Photoshop",
    "Premiere Pro",
    "Illustrator",
    "Lightroom",
    "DaVinci Resolve",
  ],
};

export const photography = [
  { src: "/images/photography/001.jpg", alt: "Product photography — artisan sauces and pesto flat lay" },
  { src: "/images/photography/002.jpg", alt: "Product photography — herbal skincare arrangement" },
  { src: "/images/photography/003.jpg", alt: "Product photography — charcoal deep clean" },
  { src: "/images/photography/004.jpg", alt: "Product photography — kombucha bottle styling" },
  { src: "/images/photography/005.jpg", alt: "Portrait photography — studio headshot" },
  { src: "/images/photography/006.jpg", alt: "Portrait photography — lifestyle portrait" },
];
