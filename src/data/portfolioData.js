export const personalData = {
  firstName: "MOHAMED",
  lastName: "AMINE",
  fullName: "Mohamed Amine Teljaoui",
  year: "©2026",
  taglineSmall: "JE CONÇOIS DES APPLICATIONS WEB SÉCURISÉES, RAPIDES ET ÉLÉGANTES.",
  role: "Développeur Full-Stack (spécialité MERN)",
  status: "En recherche active d'un emploi (Contrat / CDI)",
  statusSub: "Également ouvert aux missions Freelance",
  school: "YouCode UM6P (Campus Youssoufia)",
  email: "medamine.teljaoui@gmail.com",
  phone: "+212 634-555918",
  location: "Marrakech / Youssoufia, Maroc",
  bio: "DÉVELOPPEUR FULL-STACK SPÉCIALISÉ MERN (MONGODB, EXPRESS, REACT, NODE.JS) ET LARAVEL. EXPÉRIMENTÉ DANS LA CRÉATION D'APPLICATIONS SÉCURISÉES, D'INTERFACES INTERACTIVES ET DE SYSTÈMES BACKEND ROBUSTES. FORT INTÉRÊT POUR LE CODE PROPRE, LA SÉCURITÉ APPLICATIVE (OWASP), DOCKER ET LA GESTION DE BASES DE DONNÉES.",
  socials: {
    github: "https://github.com/MoAmiine",
    linkedin: "https://www.linkedin.com/in/mohamed-amine-teljaoui-6b3592396/",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  },
  stats: [
    { number: "36+", label: "PROJETS RÉALISÉS", sub: "Dépôts GitHub & YouCode" },
    { number: "02+", label: "ANNÉES D'EXPERTISE ACTIVE", sub: "Full-Stack MERN & Laravel" },
    { number: "100%", label: "SÉCURITÉ & CLEAN CODE", sub: "OWASP / XSS / CSRF" }
  ]
};

export const marqueeTech = [
  { name: "React.js", icon: "react" },
  { name: "Node.js", icon: "node" },
  { name: "MongoDB", icon: "mongo" },
  { name: "Express.js", icon: "express" },
  { name: "Laravel", icon: "laravel" },
  { name: "Docker", icon: "docker" },
  { name: "PHP 8", icon: "php" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "JavaScript ES6+", icon: "js" },
  { name: "Git", icon: "git" }
];

export const servicesData = [
  {
    id: "mern",
    num: "001",
    title: "DÉVELOPPEMENT FULL-STACK MERN",
    subtitle: "Applications web end-to-end ultra-réactives & scalables",
    description: "Conception complète d'applications web modernes associant la puissance asynchrone de Node.js / Express, la flexibilité NoSQL de MongoDB et l'interactivité dynamique de React.js.",
    longDescription: "Je conçois et déploie des architectures MERN modulaires et scalables prêtes pour la production. Chaque composant est optimisé : gestion d'état centralisée côté client, routage performant, API RESTful sécurisée avec middlewares de validation, et schémas NoSQL Mongoose pensés pour les performances de lecture/écriture.",
    deliverables: [
      "Application Single Page (SPA) ultra-rapide avec React.js",
      "API RESTful modulaire et haute disponibilité sous Node.js & Express",
      "Schémas NoSQL MongoDB avec validation de schéma et indexation",
      "Authentification robuste par JWT et cookies SameSite sécurisés",
      "Architecture Clean Code découplée et documentée"
    ],
    technologies: [
      { name: "React.js", role: "Interface utilisateur dynamique & composants réactifs", icon: "react" },
      { name: "Node.js", role: "Moteur d'exécution backend asynchrone haute performance", icon: "node" },
      { name: "Express.js", role: "Framework API REST & chaîne de middlewares", icon: "express" },
      { name: "MongoDB", role: "Base de données NoSQL scalable & agrégations", icon: "mongo" },
      { name: "Docker", role: "Conteneurisation de la stack MERN", icon: "docker" }
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Docker"],
    image: "/images/services/service-mern.jpg"
  },
  {
    id: "docker",
    num: "002",
    title: "DEVOPS, DOCKER & CONTENEURISATION",
    subtitle: "Environnements isolés, reproductibles et déploiements fiables",
    description: "Conteneurisation complète de vos architectures multi-services avec Docker & Docker Compose pour des déploiements fluides, sans friction et strictement reproductibles.",
    longDescription: "Éliminez définitivement les écarts entre les environnements de développement et de production. Élaboration de Dockerfiles multi-stage ultra-légers, orchestration de microservices (frontend React, API Node/Laravel, bases MongoDB/PostgreSQL) avec Docker Compose et mise en place de flux d'automatisation Git.",
    deliverables: [
      "Dockerfiles optimisés en multi-stage build pour des images minimales",
      "Orchestration multi-conteneurs avec Docker Compose",
      "Isolation des réseaux virtuels et volumes persistants pour les bases",
      "Gestion sécurisée des variables d'environnement (.env)",
      "Configuration de reverse-proxy Nginx et certificats SSL"
    ],
    technologies: [
      { name: "Docker", role: "Conteneurisation et standardisation d'environnements", icon: "docker" },
      { name: "Git", role: "Gestion de versions & automatisation", icon: "git" },
      { name: "Node.js", role: "Applications serveur conteneurisées", icon: "node" },
      { name: "MongoDB", role: "Stockage persistant isolé en conteneur", icon: "mongo" }
    ],
    tags: ["Docker", "Docker Compose", "DevOps", "Git", "GitHub Actions", "Linux"],
    image: "/images/services/service-security.jpg"
  },
  {
    id: "database",
    num: "003",
    title: "BASES DE DONNÉES MONGODB & SQL",
    subtitle: "Architecture NoSQL MongoDB, PostgreSQL & Modélisation UML",
    description: "Conception, modélisation relationnelle et NoSQL optimisée. Structuration des collections MongoDB, requêtes PostgreSQL complexes, indexation et diagrammes UML.",
    longDescription: "La fiabilité d'une plateforme repose sur la modélisation de ses données. J'élabore des schémas NoSQL performants avec MongoDB adaptés aux gros volumes et flux temps réel, ainsi que des schémas relationnels normalisés en 3NF sous PostgreSQL et MySQL. Chaque base est étayée par une modélisation UML rigoureuse (DC & DCU).",
    deliverables: [
      "Modélisation de collections NoSQL et pipelines d'agrégation MongoDB",
      "Schémas relationnels normalisés (3NF) sous PostgreSQL & MySQL",
      "Diagrammes de classes UML et cas d'utilisation (DC & DCU)",
      "Stratégies d'indexation pour réduire la latence des requêtes",
      "Sécurité des accès, intégrité référentielle et transactions ACID"
    ],
    technologies: [
      { name: "MongoDB", role: "Base de données NoSQL documents & haute scalabilité", icon: "mongo" },
      { name: "PostgreSQL", role: "SGBD relationnel avancé & intégrité stricte", icon: "postgres" },
      { name: "Node.js", role: "Connecteurs ODM Mongoose & requêtage asynchrone", icon: "node" },
      { name: "Docker", role: "Déploiement de bases isolées en conteneurs", icon: "docker" }
    ],
    tags: ["MongoDB NoSQL", "PostgreSQL", "SQL / MySQL", "Modélisation UML", "Indexation"],
    image: "/images/services/service-laravel.jpg"
  },
  {
    id: "laravel",
    num: "004",
    title: "BACKEND & ARCHITECTURE LARAVEL",
    subtitle: "APIs RESTful sécurisées, architecture MVC & Laravel Sanctum",
    description: "Développement d'applications et d'APIs d'entreprise robustes avec PHP 8 et Laravel. Architecture MVC rigoureuse, contrôle d'accès basé sur les rôles et authentification Sanctum.",
    longDescription: "Conception de backends structurés et extensibles avec le framework PHP le plus éprouvé de l'industrie. Création d'APIs RESTful documentées, intégration de middlewares personnalisés, validation stricte des requêtes entrantes avec Form Requests et modélisation relationnelle avec Eloquent ORM.",
    deliverables: [
      "Architecture logicielle MVC stricte respectant les principes SOLID",
      "APIs RESTful sécurisées avec authentification Laravel Sanctum",
      "Gestion des rôles et permissions (RBAC) via Policies et Gates",
      "Contrôle et validation stricte des formulaires et requêtes",
      "Tests d'API complets avec Postman"
    ],
    technologies: [
      { name: "Laravel", role: "Framework backend PHP d'entreprise", icon: "laravel" },
      { name: "PHP 8", role: "Langage backend moderne typé", icon: "php" },
      { name: "PostgreSQL", role: "Base de données relationnelle robuste", icon: "postgres" },
      { name: "Docker", role: "Environnement d'exécution isolé", icon: "docker" }
    ],
    tags: ["Laravel", "PHP 8", "Sanctum Auth", "MySQL", "Architecture MVC", "SOLID"],
    image: "/images/services/service-laravel.jpg"
  },
  {
    id: "security",
    num: "005",
    title: "SÉCURITÉ WEB APPLICATIVE (OWASP)",
    subtitle: "Protection préventive contre les vulnérabilités XSS, CSRF & injections",
    description: "Audit et blindage de vos applications web selon les standards OWASP. Mise en place de Content Security Policy (CSP), cookies SameSite sécurisés et validation des flux entrants.",
    longDescription: "La sécurité n'est pas une couche optionnelle ajoutée après coup, mais un principe d'ingénierie intégré dès la première ligne de code. J'implémente des défenses actives contre l'altération de sessions, l'injection de scripts (XSS), la falsification de requêtes (CSRF) et les fuites d'en-têtes HTTP sensibles.",
    deliverables: [
      "Atténuation systématique des vulnérabilités Cross-Site Scripting (XSS)",
      "Protection anti-CSRF avec synchronisation et rotation des tokens",
      "En-têtes HTTP sécurisés (Content-Security-Policy, HSTS, X-Frame-Options)",
      "Gestion de sessions avec cookies HttpOnly, Secure & SameSite=Strict",
      "Sanitisation et filtrage strict des données entrantes"
    ],
    technologies: [
      { name: "Node.js", role: "Middlewares Helmet, validation & rate-limiting", icon: "node" },
      { name: "Express.js", role: "Sécurisation de la chaîne de routage HTTP", icon: "express" },
      { name: "MongoDB", role: "Protection contre les injections NoSQL", icon: "mongo" },
      { name: "Laravel", role: "Protections CSRF & XSS natives du framework", icon: "laravel" }
    ],
    tags: ["OWASP Top 10", "Atténuation XSS", "Tokens CSRF", "CSP Headers", "SameSite"],
    image: "/images/services/service-security.jpg"
  },
  {
    id: "ui",
    num: "006",
    title: "INTERFACES REACT, VUE & DESIGN SYSTEMS",
    subtitle: "Expériences utilisateur immersives, fluides et pixel-perfect",
    description: "Création d'interfaces web ultra-dynamiques avec React.js, Tailwind CSS et Vue.js. Micro-interactions fluides, responsive design absolu et stockage local via l'API Web Storage.",
    longDescription: "Développement d'interfaces visuellement percutantes inspirées des standards éditoriaux internationaux. Accessibilité soignée, animations 60 FPS fluides, composants atomiques réutilisables et persistance d'état côté client avec l'API Web Storage (localStorage / sessionStorage).",
    deliverables: [
      "Intégration d'interfaces pixel-perfect sur-mesure",
      "Design systems modulaires et réutilisables avec Tailwind CSS",
      "Animations interactives fluides 60 FPS",
      "Persistance d'état côté client via l'API Web Storage",
      "Ergonomie responsive irréprochable sur mobile, tablette et desktop"
    ],
    technologies: [
      { name: "React.js", role: "Composants d'interface réactifs & hooks", icon: "react" },
      { name: "Tailwind CSS", role: "Stylisation utilitaire moderne & design system", icon: "tailwind" },
      { name: "Vue.js", role: "Interfaces modulaires réactives", icon: "vue" },
      { name: "JavaScript ES6+", role: "Logique frontend moderne & API Web Storage", icon: "js" }
    ],
    tags: ["Tailwind CSS", "Vue.js", "Bootstrap", "Web Storage API", "Responsive UI"],
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
    title: "ANALYSE",
    desc: "Analyse approfondie des besoins fonctionnels, modélisation avec diagrammes UML (DCU: Cas d'Utilisation, DC: Classes) et spécifications techniques."
  },
  {
    step: "02",
    title: "CONCEPTION",
    desc: "Architecture logicielle MVC & modulaire, structuration relationnelle (PostgreSQL, MySQL) ou NoSQL (MongoDB) et définition des contrats d'APIs REST."
  },
  {
    step: "03",
    title: "DÉVELOPPEMENT",
    desc: "Développement Full-Stack propre et sécurisé (React.js, Node.js, Laravel). Application stricte des protections OWASP (XSS, CSRF, CSP, SameSite)."
  },
  {
    step: "04",
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
