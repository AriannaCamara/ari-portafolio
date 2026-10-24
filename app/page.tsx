 
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedinIn,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";

import {
  HiLocationMarker,
  HiOutlineDownload,
  HiOutlineMail,
} from "react-icons/hi";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
} from "react-icons/si";

export const metadata = {
  title: "Arianna Cámara | Desarrolladora Full Stack Junior",
  description:
    "Portfolio de Arianna Cámara, desarrolladora Full Stack especializada en JavaScript, TypeScript, React, Next.js y Node.js.",
};

export default function Hero() {
  const skills = [
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  const techs = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Vite", icon: <SiVite /> },
  ];

  const projects = [
    {
      title: "Seguimiento de Pacientes Veterinaria",
      description:
        "Aplicación web desarrollada con React para gestionar pacientes de una clínica veterinaria. Permite registrar, editar y consultar información de cada paciente mediante una interfaz dinámica e intuitiva.",
      image: "/veterinaria.PNG",
      tags: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ],
      link: "https://poetic-nougat-72d01c.netlify.app/",
    },
    {
      title: "Contador de Calorías",
      description:
        "Aplicación desarrollada con React y TypeScript para registrar alimentos, controlar la ingesta diaria y calcular las calorías consumidas. Incluye gestión de estado y una interfaz adaptada a distintos dispositivos.",
      image: "/caloria.png",
      tags: [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ],
      link: "https://tubular-truffle-8b9813.netlify.app/",
    },
    {
      title: "Cotizador de Criptomonedas",
      description:
        "Aplicación web que consume una API REST para consultar valores de criptomonedas en tiempo real y realizar conversiones entre diferentes monedas de forma dinámica.",
      image: "/cotizador1.PNG",
      tags: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "REST API", icon: <FaServer /> },
      ],
      link: "https://criptomoneda-ari-codigoconjuan.netlify.app/",
    },
    {
      title: "App CRUD",
      description:
        "Aplicación web desarrollada con JavaScript que permite gestionar usuarios mediante operaciones CRUD: crear, consultar, editar y eliminar registros. Incluye consumo de una API REST, manipulación del DOM y gestión dinámica de datos.",
      image: "/App-CRUD.PNG",
      tags: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "REST API", icon: <FaServer /> },
      ],
      link: "https://app-crud-4p74.onrender.com/",
    },
    {
      title: "Cotizador de Préstamos",
      description:
        "Aplicación web que permite calcular préstamos de forma dinámica según la cantidad solicitada y el plazo seleccionado, mostrando las cuotas y el importe total a pagar.",
      image: "/cotizadoor.PNG",
      tags: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ],
      link: "https://cotizador-prestamos-react-codigoj.netlify.app/",
    },
    {
      title: "Calculadora de Propinas y Consumos",
      description:
        "Aplicación web para seleccionar productos, calcular consumos y determinar automáticamente la propina y el importe total a pagar mediante una interfaz sencilla y dinámica.",
      image: "/propinas.PNG",
      tags: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "CSS", icon: <FaCss3Alt /> },
      ],
      link: "https://sage-cranachan-1183ee.netlify.app/",
    },
  ];

  const studies = [
    {
      title: "FP Superior Desarrollo de Aplicaciones Web",
      subtitle: "Universae · 2024-2025",
    },
    {
      title: "Full Stack Node.js, React, TypeScript, NestJS y Next.js",
      subtitle: "Udemy · 2025",
    },
    {
      title: "React y TypeScript · Creando +10 Proyectos",
      subtitle: "Udemy · 2025",
    },
    {
      title: "Headless WordPress · Astro, WP REST API, Tailwind y TypeScript",
      subtitle: "Udemy · 2025",
    },
    {
      title: "CSS · Flexbox, CSS Grid, SASS y +20 proyectos",
      subtitle: "Udemy · 2025",
    },
    {
      title: "Full Stack Next.js · Drizzle ORM, Better Auth, AI SDK y TypeScript",
      subtitle: "Udemy · 2026",
    },
  ];

  const meetiImages = [
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
  ];

  return (
    <>
      {/* Hero */}
      <section className="mt-9 flex flex-col items-center gap-8 p-6 md:flex-row md:items-start md:gap-6">
        {/* Columna de foto */}
        <div className="flex w-full flex-col items-center gap-4 md:w-2/5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#ff31ce] opacity-70 blur-xl" />
            <div className="rounded-full bg-gradient-to-r from-[#ff31ce] via-pink-500 to-purple-500 p-1">
              <img
                src="/perfil.jpg"
                alt="Foto de Arianna Cámara"
                className="relative z-10 h-48 w-48 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="mt-2 flex items-center text-sm text-white md:text-base">
            <HiLocationMarker className="mr-1 text-[#f40eb2]" />
            Madrid, España
          </div>

          <a
            href="mailto:ariannaisabel795@gmail.com"
            className="group mt-2 flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-sm transition-all duration-300 hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_10px_#f40eb2] md:text-base"
          >
            <HiOutlineMail className="text-base text-[#f40eb2] group-hover:text-white md:text-lg" />
            <span className="break-all">ariannaisabel795@gmail.com</span>
          </a>

          {/* Botones CV, LinkedIn y GitHub */}
          <div className="mt-2 flex gap-8">
            <a
              href="/Curriculum.pdf"
              download="AriannaCamara_CV.pdf"
              aria-label="Descargar curriculum"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f40eb2] text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <HiOutlineDownload className="text-lg md:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/arianna-camara-65238a2a5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Arianna Cámara"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f40eb2] text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <FaLinkedinIn className="text-lg md:text-xl" />
            </a>
            <a
              href="https://github.com/AriannaCamara?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Arianna Cámara"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f40eb2] text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <FaGithub className="text-lg md:text-xl" />
            </a>
          </div>
        </div>

        {/* Columna de texto */}
        <div className="flex w-full flex-col gap-6 md:w-3/5">
          <h1 className="mb-2 w-full text-4xl font-bold text-white md:text-5xl">
            <span className="drop-shadow-[0_0_10px_#f40eb2]">Hola, soy</span>{" "}
            <span className="text-5xl text-[#f40eb2] md:text-6xl">Arianna</span>
          </h1>

          <div className="relative mt-4 w-full max-w-150 rounded-2xl bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-600 p-0.5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-600 opacity-70 blur-md" />
            <div className="relative w-full rounded-2xl bg-gray-900 p-6">
              <p className="mb-1 text-justify text-lg leading-snug text-white md:text-xl">
                Desarrolladora Full Stack con formación en Desarrollo de
                Aplicaciones Web y experiencia práctica en el desarrollo de
                aplicaciones con JavaScript, TypeScript, React, Next.js y
                Node.js. He trabajado con APIs REST, autenticación, bases de
                datos, gestión de estado, testing y diferentes arquitecturas,
                desarrollando proyectos tanto frontend como full stack.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-3 flex w-full max-w-150 flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-sm transition-all duration-300 hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_10px_#f40eb2] md:text-base"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador neón */}
      <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-500 shadow-[0_0_10px_#f40eb2,0_0_20px_#f40eb2,0_0_30px_#f40eb2]" />

      {/* Proyectos destacados */}
      <section className="px-5 py-16 md:px-10 lg:px-16">
        <h2 className="mb-4 text-center text-4xl font-bold text-white drop-shadow-[0_0_10px_#f40eb2] md:text-5xl">
          Proyecto destacado
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base text-gray-300 md:text-lg">
          Meeti Next · Una plataforma full stack para descubrir comunidades,
          organizar eventos y conectar personas, con notificaciones en tiempo
          real y un asistente de inteligencia artificial.
        </p>

        <div className="relative mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#f40eb2] via-purple-500 to-blue-500 p-0.5 transition-transform duration-500 hover:-translate-y-1">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f40eb2] via-purple-500 to-blue-500 opacity-50 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl bg-gray-950">
            <div className="grid items-center gap-8 p-5 md:p-8 lg:grid-cols-5 lg:p-10">
              <div className="lg:col-span-3">
                <div className="mb-4 inline-flex rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1 text-sm font-semibold text-pink-300">
                  Full Stack · Proyecto principal
                </div>
                <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Meeti <span className="text-[#f40eb2]">Next</span>
                </h3>
                <p className="mb-5 leading-relaxed text-gray-300">
                  Aplicación full stack donde las personas pueden crear
                  comunidades, publicar meetis, apuntarse a eventos y descubrir
                  actividades presenciales o virtuales. Incluye autenticación
                  completa, notificaciones en tiempo real y un asistente de IA
                  capaz de ayudar a encontrar comunidades y eventos.
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "PostgreSQL",
                    "Drizzle ORM",
                    "Better Auth",
                    "Vercel AI SDK",
                    "Tailwind CSS",
                    "Pusher",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mb-7 space-y-2 text-sm leading-relaxed text-gray-300 md:text-base">
                  <li>✦ Registro, verificación de email y gestión de sesiones.</li>
                  <li>✦ Creación y gestión de comunidades y eventos.</li>
                  <li>✦ Mapas, geolocalización y listado de asistentes.</li>
                  <li>✦ Notificaciones en tiempo real y asistente de IA.</li>
                  <li>✦ Arquitectura organizada por funcionalidades y validación con Zod.</li>
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://meeti-next.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#f40eb2] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_14px_#f40eb2]"
                  >
                    Ver demo ↗
                  </a>
                  <a
                    href="https://github.com/AriannaCamara/meeti-next"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-[#f40eb2] hover:text-[#f40eb2]"
                  >
                    <FaGithub /> Ver código
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-purple-950/40">
                  <img
                    src="/meeti.PNG"
                    alt="Captura principal de Meeti Next"
                    className="aspect-[4/3] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent p-5 pt-12">
                    <p className="text-lg font-semibold text-white">
                      Comunidades que conectan
                    </p>
                    <p className="text-sm text-gray-300">
                      Descubre, crea y participa en meetis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Galería de tres capturas */}
            <div className="grid grid-cols-1 gap-4 border-t border-white/10 p-5 md:grid-cols-3 md:p-8">
              {meetiImages.map((image) => (
                <figure
                  key={image.src}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900 transition-all duration-300 hover:border-[#f40eb2]/70 hover:shadow-[0_0_18px_rgba(244,14,178,0.15)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-medium text-gray-200">
                    {image.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Otros proyectos */}
      <section className="px-8 py-16 md:px-16 lg:px-20">
        <h2 className="mb-12 w-full text-center text-4xl font-bold text-white drop-shadow-[0_0_10px_#f40eb2]">
          Otros proyectos
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative mx-auto max-w-sm rounded-2xl bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-500 p-0.5 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-500 opacity-60 blur-md" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gray-900">
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                    className="h-full w-full rounded-t-2xl object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-center text-lg font-semibold text-[#f40eb2]">
                    {project.title}
                  </h3>
                  <p className="mb-3 line-clamp-4 text-center text-sm leading-tight text-white">
                    {project.description}
                  </p>

                  <div className="mb-3 flex flex-wrap justify-center gap-2">
                    {project.tags.map((tag) => (
                      <div
                        key={tag.name}
                        className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-sm transition-all duration-300 hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_6px_#f40eb2]"
                      >
                        {tag.icon}
                        {tag.name}
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full rounded-full bg-[#f40eb2] px-3 py-2 text-center text-sm text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_8px_#f40eb2]"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separador neón */}
      <div className="mb-6 mt-6 h-1 w-full rounded-full bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-500 shadow-[0_0_10px_#f40eb2,0_0_20px_#f40eb2,0_0_30px_#f40eb2]" />

      {/* Tecnologías */}
      <section className="px-6 py-10">
        <h2 className="mb-16 text-center text-4xl font-bold text-white drop-shadow-[0_0_10px_#f40eb2]">
          Tecnologías
        </h2>

        <div className="mb-6 flex flex-wrap justify-center gap-8">
          {techs.slice(0, 7).map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-[#f40eb2] shadow-[0_0_10px_#fff] transition-all duration-300 hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_10px_#f40eb2]"
            >
              <div className="text-3xl">{tech.icon}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {techs.slice(7).map((tech) => (
            <div
              key={tech.name}
              title={tech.name}
              className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-white text-[#f40eb2] shadow-[0_0_10px_#fff] transition-all duration-300 hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_10px_#f40eb2]"
            >
              <div className="text-3xl">{tech.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Formación */}
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <h2 className="mb-16 text-center text-4xl font-bold text-white drop-shadow-[0_0_10px_#f40eb2]">
          Formación
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
          {studies.map((estudio) => (
            <div key={estudio.title} className="group">
              <h3 className="text-xl font-semibold text-white transition-all duration-300 group-hover:text-[#f40eb2] group-hover:drop-shadow-[0_0_6px_#f40eb2]">
                {estudio.title}
              </h3>
              <p className="mt-1 text-gray-300">{estudio.subtitle}</p>
              <div className="mt-2 h-0.5 w-16 bg-[#f40eb2] shadow-[0_0_8px_#f40eb2]" />
            </div>
          ))}
        </div>
      </section>

      {/* Separador final */}
      <div className="mb-0 mt-6 h-1 w-full rounded-full bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-500 shadow-[0_0_10px_#f40eb2,0_0_20px_#f40eb2,0_0_30px_#f40eb2]" />
    </>
  );
}
