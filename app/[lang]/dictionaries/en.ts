import type { Dictionary } from "./es";

// Tipado contra es.ts: compila solo si tiene todas las claves traducidas
export const en: Dictionary = {
  metadata: {
    title: "Arianna Cámara | Junior Full Stack Developer",
    description:
      "Portfolio of Arianna Cámara, Full Stack developer specialized in JavaScript, TypeScript, React, Next.js and Node.js.",
  },
  hero: {
    photoAlt: "Photo of Arianna Cámara",
    location: "Madrid, Spain",
    downloadCv: "Download CV",
    linkedinLabel: "Arianna Cámara's LinkedIn",
    githubLabel: "Arianna Cámara's GitHub",
    greeting: "Hi, I'm",
    intro:
      "Full Stack developer focused on building modern web applications, from backend architecture to user experience. I work with React, Next.js, TypeScript, Node.js and NestJS, integrating APIs, databases and authentication systems to build complete applications. I am especially interested in the evolution of software development through artificial intelligence.",
  },
  featured: {
    heading: "Featured project",
    subtitle:
      "Meeti Next · A full stack platform to discover communities, organize events and connect people, with real-time notifications and an artificial intelligence assistant.",
    badge: "Full Stack · Main project",
    description:
      "Full stack application where people can create communities, post meetups, join events and discover in-person or virtual activities. Includes full authentication, real-time notifications and an AI assistant capable of helping find communities and events.",
    bullets: [
      "✦ Sign-up, email verification and session management.",
      "✦ Creation and management of communities and events.",
      "✦ Maps, geolocation and attendee lists.",
      "✦ Real-time notifications and AI assistant.",
      "✦ Feature-based architecture and validation with Zod.",
    ],
    viewDemo: "View demo ↗",
    viewCode: "View code",
    screenshotAlt: "Main screenshot of Meeti Next",
    cardTitle: "Communities that connect",
    cardSubtitle: "Discover, create and join meetups.",
    gallery: [
      {
        src: "/MeetiPerfil.PNG",
        alt: "Meeti Next profiles screen",
        label: "Profiles in meetups",
      },
      {
        src: "/meetiIA.PNG",
        alt: "Meeti Next artificial intelligence assistant",
        label: "AI assistant",
      },
      {
        src: "/meetiMapa.PNG",
        alt: "Meeti Next events map",
        label: "Events and maps",
      },
    ],
  },
  projects: {
    heading: "Other projects",
    screenshotAlt: "Screenshot of the {title} project",
    viewProject: "View project",
    items: [
      {
        title: "Veterinary Patient Tracking",
        description:
          "Web application developed with React to manage patients at a veterinary clinic. It allows registering, editing and viewing each patient's information through a dynamic and intuitive interface.",
        image: "/veterinaria.PNG",
        tags: ["React", "JavaScript", "CSS"],
        link: "https://poetic-nougat-72d01c.netlify.app/",
      },
      {
        title: "Calorie Counter",
        description:
          "Application developed with React and TypeScript to log food, track daily intake and calculate consumed calories. Includes state management and an interface adapted to different devices.",
        image: "/caloria.png",
        tags: ["React", "TypeScript", "CSS"],
        link: "https://tubular-truffle-8b9813.netlify.app/",
      },
      {
        title: "Cryptocurrency Price Tracker",
        description:
          "Web application that consumes a REST API to fetch cryptocurrency values in real time and perform conversions between different currencies dynamically.",
        image: "/cotizador1.PNG",
        tags: ["React", "JavaScript", "CSS", "REST API"],
        link: "https://criptomoneda-ari-codigoconjuan.netlify.app/",
      },
      {
        title: "CRUD App",
        description:
          "Web application developed with JavaScript that manages users through CRUD operations: create, read, edit and delete records. Includes consuming a REST API, DOM manipulation and dynamic data management.",
        image: "/App-CRUD.PNG",
        tags: ["JavaScript", "HTML", "CSS", "REST API"],
        link: "https://app-crud-4p74.onrender.com/",
      },
      {
        title: "Loan Calculator",
        description:
          "Web application that dynamically calculates loans based on the requested amount and the selected term, showing the installments and the total amount to pay.",
        image: "/cotizadoor.PNG",
        tags: ["React", "JavaScript", "CSS"],
        link: "https://cotizador-prestamos-react-codigoj.netlify.app/",
      },
      {
        title: "Tip and Bill Calculator",
        description:
          "Web application to select products, calculate orders and automatically determine the tip and the total amount to pay through a simple and dynamic interface.",
        image: "/propinas.PNG",
        tags: ["React", "JavaScript", "CSS"],
        link: "https://sage-cranachan-1183ee.netlify.app/",
      },
    ],
  },
  technologies: {
    heading: "Technologies",
  },
  education: {
    heading: "Education",
    items: [
      {
        title: "Higher FP in Web Application Development",
        subtitle: "Universae · 2024-2025",
      },
      {
        title: "Full Stack Node.js, React, TypeScript, NestJS and Next.js",
        subtitle: "Udemy · 2025",
      },
      {
        title: "React and TypeScript · Building +10 Projects",
        subtitle: "Udemy · 2025",
      },
      {
        title: "Headless WordPress · Astro, WP REST API, Tailwind and TypeScript",
        subtitle: "Udemy · 2025",
      },
      {
        title: "CSS · Flexbox, CSS Grid, SASS and +20 projects",
        subtitle: "Udemy · 2025",
      },
      {
        title: "Full Stack Next.js · Drizzle ORM, Better Auth, AI SDK and TypeScript",
        subtitle: "Udemy · 2026",
      },
      {
        title:
          "Node.js · Clean Architecture, DDD, WebHooks, WebSockets, Automated Tasks, Deployments, TypeScript, Edge and Testing",
        subtitle: "Udemy · 2026",
      },
      {
        title:
          "Nest · REST, TypeScript, WebSockets, Authentication, Authorization, Docker, MongoDB, PostgreSQL and TypeORM",
        subtitle: "Udemy · 2026",
      },
      {
        title:
          "OpenCode · TUI, Commands, Skills, MCPs, Supabase, Worktrees, GitHub Actions, Automations, Parallel Agents and SSD",
        subtitle: "Udemy · 2026",
      },
      {
        title:
          "Practical SQL Guide with PostgreSQL · Design, Entity-Relationship Diagrams, Triggers, Stored Procedures, Functions, Recursive CTEs and PL/pgSQL",
        subtitle: "Udemy · 2026",
      },
    ],
  },
};
