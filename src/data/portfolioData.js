export const personalData = {
  firstName: "MOHAMED",
  lastName: "AMINE",
  fullName: "Mohamed Amine Teljaoui",
  year: "©2026",
  taglineSmall: "JE CONÇOIS DES APPLICATIONS WEB SÉCURISÉES, RAPIDES ET ÉLÉGANTES.",
  role: "Développeur Full-Stack (MERN & Laravel)",
  status: "Disponible Lun–Ven pour Projets & Missions",
  school: "YouCode UM6P (Campus Youssoufia)",
  email: "medamine.teljaoui@gmail.com",
  phone: "+212 601818233",
  location: "Marrakech / Youssoufia, Maroc",
  bio: "ÉTUDIANT EN 2ÈME ANNÉE À YOUCODE (UM6P) EN DÉVELOPPEMENT WEB FULL-STACK, SPÉCIALISÉ DANS MERN STACK (MONGODB, EXPRESS, REACT, NODE.JS) ET LARAVEL. EXPÉRIMENTÉ DANS LA CRÉATION D'APPLICATIONS SÉCURISÉES, D'INTERFACES INTERACTIVES ET DE SYSTÈMES BACKEND ROBUSTES. FORT INTÉRÊT POUR LE CODE PROPRE, LA SÉCURITÉ APPLICATIVE ET LA GESTION DE BASES DE DONNÉES.",
  socials: {
    github: "https://github.com/MoAmiine",
    linkedin: "https://linkedin.com/in/mohamed-amine-teljaoui",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  },
  stats: [
    { number: "36+", label: "PROJETS RÉALISÉS", sub: "Dépôts GitHub & YouCode" },
    { number: "02+", label: "ANNÉES D'ÉTUDE INTENSIVE", sub: "YouCode UM6P" },
    { number: "100%", label: "SÉCURITÉ & CLEAN CODE", sub: "OWASP / XSS / CSRF" }
  ]
};

export const marqueeTech = [
  { name: "React.js", symbol: "⚛" },
  { name: "Node.js", symbol: "🟢" },
  { name: "MongoDB", symbol: "🍃" },
  { name: "Express.js", symbol: "⚡" },
  { name: "Laravel", symbol: "🔺" },
  { name: "PHP 8", symbol: "🐘" },
  { name: "PostgreSQL", symbol: "🐘" },
  { name: "Tailwind CSS", symbol: "🌊" },
  { name: "JavaScript ES6+", symbol: "JS" },
  { name: "Docker", symbol: "🐳" },
  { name: "RESTful APIs", symbol: "🔗" }
];

export const servicesData = [
  {
    num: "001",
    title: "DÉVELOPPEMENT MERN STACK",
    description: "Conception complète d'applications web de bout en bout associant la réactivité de React.js et la puissance de Node.js, Express et MongoDB. Rendu ultra-rapide et interfaces dynamiques.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "/images/services/service-mern.jpg"
  },
  {
    num: "002",
    title: "BACKEND & ARCHITECTURE LARAVEL",
    description: "Développement d'APIs RESTful robustes et sécurisées avec Laravel Sanctum, modélisation relationnelle MySQL, contrôle d'accès basé sur les rôles et pattern MVC strict.",
    tags: ["Laravel", "PHP 8", "Sanctum Auth", "MySQL", "Architecture MVC"],
    image: "/images/services/service-laravel.jpg"
  },
  {
    num: "003",
    title: "SÉCURITÉ WEB & BASES DE DONNÉES",
    description: "Protection applicative proactive contre l'OWASP Top 10 : atténuation XSS, tokens CSRF, politiques CSP et cookies SameSite. Modélisation relationnelle PostgreSQL et NoSQL.",
    tags: ["XSS / CSRF Mitigation", "CSP Headers", "SameSite", "PostgreSQL", "UML DCU/DC"],
    image: "/images/services/service-security.jpg"
  },
  {
    num: "004",
    title: "INTERFACES REACT & DESIGN SYSTEMS",
    description: "Intégration pixel-perfect, accessibilité, composants réutilisables avec Tailwind CSS, Vue.js, animations fluides et gestion d'état local via l'API de stockage web.",
    tags: ["Tailwind CSS", "Vue.js", "Bootstrap", "Web Storage API", "Responsive"],
    image: "/images/services/service-ui.jpg"
  }
];

export const projectsList = [
  {
    id: "revio",
    title: "REVIO",
    category: "/Web & NFC",
    client: "Solution SaaS & NFC",
    badge: "PROJET FULL-STACK",
    period: "2026",
    summary: "Plateforme web de collecte d'avis clients en direct pour restaurants via cartes NFC. API REST sécurisée sous Laravel Sanctum et dashboard analytique temps réel React.",
    description: "Conception et développement complet de la plateforme web Revio, une solution de collecte d'avis clients pour restaurants via cartes NFC. J'ai développé et sécurisé l'API REST avec Laravel et Sanctum, modélisé la base de données relationnelle sous MySQL, et réalisé l'interface utilisateur interactive sous React, intégrant un tableau de bord de gestion pour les restaurateurs (suivi analytique, système d'alertes et modération des avis).",
    tech: ["Laravel", "React.js", "Sanctum", "MySQL", "NFC", "Tailwind CSS"],
    image: "/images/projects/revio.jpg",
    githubUrl: "https://github.com/MoAmiine",
    aspect: "tall"
  },
  {
    id: "munisport",
    title: "MUNISPORT",
    category: "/Portail Municipal",
    client: "YouCode UM6P",
    badge: "PROJET MAJEUR",
    period: "2026",
    summary: "Portail complet de réservation sportive municipale avec moteur de calcul tarifaire automatisé (Pass'Sport) et gestion des créneaux en temps réel.",
    description: "Développement d'un portail complet pour la ville, les associations et les citoyens : catalogue d'activités avec filtres avancés, calcul tarifaire automatisé (Pass'Sport, quotient familial, dégressivité), gestion des créneaux en temps réel et notifications de repêchage en file d'attente.",
    tech: ["Node.js", "PostgreSQL", "EJS", "find-my-way", "CSS3", "Architecture modulaire"],
    image: "/images/projects/munisport.jpg",
    githubUrl: "https://github.com/MoAmiine/MuniSport",
    aspect: "wide"
  },
  {
    id: "amateur2pro",
    title: "AMATEUR2PRO",
    category: "/E-Sports App",
    client: "YouCode UM6P",
    badge: "APPLICATION WEB",
    period: "2026",
    summary: "Plateforme web de tournois e-sports pour amateurs : création de championnats, gestion d'équipes, planification des matchs et scores.",
    description: "Développement d’une application web permettant la gestion complète de tournois e-sports pour joueurs amateurs : création de tournois, gestion des équipes, planification des matchs, saisie des scores et système d’annonces.",
    tech: ["Laravel", "Blade", "Tailwind CSS", "JavaScript", "MySQL", "MVC", "UML"],
    image: "/images/projects/amateur2pro.jpg",
    githubUrl: "https://github.com/MoAmiine/Amateur2pro",
    aspect: "tall"
  },
  {
    id: "truckflow",
    title: "TRUCKFLOW",
    category: "/API Logistique",
    client: "Projet Personnel",
    badge: "BACKEND API",
    period: "2026",
    summary: "API RESTful de gestion de flotte de transport routier : contrôle des véhicules, conducteurs certifiés et assignation des tournées.",
    description: "API de gestion logistique pour les entreprises de transport de fret routier. Endpoints CRUD normalisés, traçabilité des missions et validation stricte.",
    tech: ["Node.js", "Express.js", "RESTful API", "JavaScript", "Postman"],
    image: "/images/projects/truckflow.jpg",
    githubUrl: "https://github.com/MoAmiine/TruckFlow",
    aspect: "wide"
  },
  {
    id: "clickfast",
    title: "CLICK FAST",
    category: "/High Precision UI",
    client: "YouCode Experiment",
    badge: "FRONTEND HIGH-PERF",
    period: "2026",
    summary: "Application web de benchmarking de réflexes visuels et moteurs mesurant le temps de réaction au milliseconde près.",
    description: "Spécification fonctionnelle & technique d'une application web de réflexes et précision. Mesure de latence haute précision avec window.performance.now() et transitions instantanées.",
    tech: ["JavaScript (ES6+)", "DOM High-Res API", "CSS3 Keyframes"],
    image: "/images/projects/clickfast.jpg",
    githubUrl: "https://github.com/MoAmiine/Click-Fast",
    aspect: "tall"
  }
];

export const processSteps = [
  {
    step: "01",
    icon: "✦",
    title: "ANALYSE",
    desc: "Analyse approfondie des besoins fonctionnels, modélisation avec diagrammes UML (DCU: Cas d'Utilisation, DC: Classes) et spécifications techniques."
  },
  {
    step: "02",
    icon: "✱",
    title: "CONCEPTION",
    desc: "Architecture logicielle MVC & modulaire, structuration relationnelle (PostgreSQL, MySQL) ou NoSQL (MongoDB) et définition des contrats d'APIs REST."
  },
  {
    step: "03",
    icon: "✚",
    title: "DÉVELOPPEMENT",
    desc: "Développement Full-Stack propre et sécurisé (React.js, Node.js, Laravel). Application stricte des protections OWASP (XSS, CSRF, CSP, SameSite)."
  },
  {
    step: "04",
    icon: "✦",
    title: "AMÉLIORATION",
    desc: "Tests d'intégration avec Postman, conteneurisation Docker, révisions de code et rituels agiles SCRUM (Jira, Trello, Miro, Figma) pour une qualité optimale."
  }
];

export const whyChoosePoints = [
  {
    num: "01",
    title: "FORMATION D'EXCELLENCE YOUCODE UM6P",
    desc: "Immersion intensive basée sur la pédagogie par projets concrets et le travail d'équipe en méthode Agile SCRUM."
  },
  {
    num: "02",
    title: "RÉALISATIONS CONCRÈTES EN PRODUCTION",
    desc: "Conception de la plateforme Revio NFC : de l'API REST sécurisée Laravel Sanctum au dashboard React temps réel avec modélisation MySQL."
  },
  {
    num: "03",
    title: "DOUBLE EXPERTISE MERN & LARAVEL",
    desc: "Capacité à développer sur deux des écosystèmes web les plus demandés du marché avec la même exigence de code propre."
  },
  {
    num: "04",
    title: "SÉCURITÉ WEB INTÉGRÉE DÈS LA CONCEPTION",
    desc: "Atténuation XSS & CSRF, politiques CSP et cookies sécurisés ne sont pas une option mais une norme dans chaque projet."
  }
];
