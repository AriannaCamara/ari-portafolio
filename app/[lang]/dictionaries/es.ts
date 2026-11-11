// Fuente de verdad del contenido en español
export const es = {
  metadata: {
    title: "Arianna Cámara | Desarrolladora Full Stack Junior",
    description:
      "Portfolio de Arianna Cámara, desarrolladora Full Stack especializada en JavaScript, TypeScript, React, Next.js y Node.js.",
  },
  nav: {
    about: "Sobre mí",
    featured: "Proyecto destacado",
    projects: "Proyectos",
    technologies: "Tecnologías",
    education: "Formación",
    contact: "Contacto",
  },
  hero: {
    photoAlt: "Foto de Arianna Cámara",
    location: "Madrid, España",
    downloadCv: "Descargar curriculum",
    linkedinLabel: "LinkedIn de Arianna Cámara",
    githubLabel: "GitHub de Arianna Cámara",
    greeting: "Hola, soy",
    intro:
      "Desarrolladora Full Stack enfocada en la construcción de aplicaciones web modernas, desde la arquitectura del backend hasta la experiencia de usuario. Trabajo con React, Next.js, TypeScript, Node.js y NestJS, integrando APIs, bases de datos y sistemas de autenticación para desarrollar aplicaciones completas.",
  },
  featured: {
    heading: "Proyecto destacado",
    subtitle:
      "Meeti Next · Una plataforma full stack para descubrir comunidades, organizar eventos y conectar personas, con notificaciones en tiempo real y un asistente de inteligencia artificial.",
    badge: "Full Stack · Proyecto principal",
    description:
      "Aplicación full stack donde las personas pueden crear comunidades, publicar meetis, apuntarse a eventos y descubrir actividades presenciales o virtuales. Incluye autenticación completa, notificaciones en tiempo real y un asistente de IA capaz de ayudar a encontrar comunidades y eventos.",
    bullets: [
      "✦ Registro, verificación de email y gestión de sesiones.",
      "✦ Creación y gestión de comunidades y eventos.",
      "✦ Mapas, geolocalización y listado de asistentes.",
      "✦ Notificaciones en tiempo real y asistente de IA.",
      "✦ Arquitectura organizada por funcionalidades y validación con Zod.",
    ],
    viewDemo: "Ver demo ↗",
    viewCode: "Ver código",
    screenshotAlt: "Captura principal de Meeti Next",
    cardTitle: "Comunidades que conectan",
    cardSubtitle: "Descubre, crea y participa en meetis.",
    gallery: [
      {
        src: "/MeetiPerfil.PNG",
        alt: "Pantalla principal de Meeti Next",
        label: "Perfil en meetis",
      },
      {
        src: "/meetiIA.PNG",
        alt: "Asistente de inteligencia artificial de Meeti Next",
        label: "Asistente con IA",
      },
      {
        src: "/meetiMapa.PNG",
        alt: "Mapa de eventos de Meeti Next",
        label: "Eventos y mapas",
      },
    ],
  },
  about: {
    heading: "Sobre mí",
    paragraphs: [
      "Soy Arianna, desarrolladora Full Stack con formación oficial en Desarrollo de Aplicaciones Web. Disfruto construyendo aplicaciones completas: desde la API y la base de datos hasta la interfaz que usa la persona final.",
      "Me interesa especialmente la integración de inteligencia artificial en productos reales y trabajar en equipo con buenas prácticas: código tipado, validación, tests y despliegues automatizados.",
    ],
    availability: "Abierta a oportunidades junior en Madrid o en remoto.",
    skillsHeading: "Con las que trabajo a diario",
  },
  projects: {
    heading: "Otros proyectos",
    ctaTitle: "¿Quieres ver el resto?",
    ctaDescription:
      "Hay más proyectos en mi GitHub: desde APIs en NestJS y Express hasta aplicaciones React con TypeScript.",
    ctaButton: "Ver GitHub ↗",
    ctaLink: "https://github.com/AriannaCamara?tab=repositories",
  },
  technologies: {
    heading: "Tecnologías",
  },
  education: {
    heading: "Formación",
    items: [
      {
        title: "FP Superior Desarrollo de Aplicaciones Web",
        subtitle: "Universae · 2024-2025",
      },
      {
        title: "Full Stack Next.js · Drizzle ORM, Better Auth, AI SDK y TypeScript",
        subtitle: "Udemy · 2026",
      },
      {
        title: "NestJS Backend Escalable · REST, WebSockets, Auth, Docker y TypeORM",
        subtitle: "Udemy · 2026",
      },
    ],
  },
  contact: {
    heading: "¿Hablamos?",
    subtitle:
      "Estoy buscando mi primer puesto como desarrolladora. Si crees que encajo en tu equipo, escríbeme.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Descargar CV",
  },
};

export type Dictionary = typeof es;
