import type { Dictionary } from "./es";

// Tipado contra es.ts: compila solo si tiene todas las claves traducidas
export const en: Dictionary = {
  metadata: {
    title: "Arianna Cámara | Junior Full Stack Developer",
    description:
      "Portfolio of Arianna Cámara, Full Stack developer specialized in JavaScript, TypeScript, React, Next.js and Node.js.",
  },
  nav: {
    about: "About",
    featured: "Featured",
    projects: "Projects",
    technologies: "Tech stack",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    photoAlt: "Photo of Arianna Cámara",
    location: "Madrid, Spain",
    downloadCv: "Download CV",
    linkedinLabel: "Arianna Cámara's LinkedIn",
    githubLabel: "Arianna Cámara's GitHub",
    greeting: "Hi, I'm",
    intro:
      "Full Stack developer focused on building modern web applications, from backend architecture to user experience. I work with React, Next.js, TypeScript, Node.js and NestJS, integrating APIs, databases and authentication systems to build complete applications.",
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
  about: {
    heading: "About me",
    paragraphs: [
      "I'm Arianna, a Full Stack developer with an official degree in Web Application Development. I enjoy building complete applications: from the API and database to the interface the end user interacts with.",
      "I'm especially interested in integrating artificial intelligence into real products and working as a team with good practices: typed code, validation, tests and automated deployments.",
    ],
    availability: "Open to junior opportunities in Madrid or remote.",
    skillsHeading: "What I work with daily",
  },
  projects: {
    heading: "Other projects",
    ctaTitle: "Want to see the rest?",
    ctaDescription:
      "There are more projects on my GitHub: from NestJS and Express APIs to React applications with TypeScript.",
    ctaButton: "View GitHub ↗",
    ctaLink: "https://github.com/AriannaCamara?tab=repositories",
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
        title: "Full Stack Next.js · Drizzle ORM, Better Auth, AI SDK and TypeScript",
        subtitle: "Udemy · 2026",
      },
      {
        title: "NestJS Scalable Backend · REST, WebSockets, Auth, Docker and TypeORM",
        subtitle: "Udemy · 2026",
      },
    ],
  },
  contact: {
    heading: "Let's talk?",
    subtitle:
      "I'm looking for my first role as a developer. If you think I'd fit your team, drop me a line.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Download CV",
  },
};
