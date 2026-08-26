import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedinIn,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaServer
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
  SiAstro,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
} from "react-icons/si";

export const metadata = {
  title: "Arianna Cámara | Desarrolladora Full Stack Junior",
  description:
    "Portfolio de Arianna Cámara, desarrolladora Full Stack Junior especializada en JavaScript, TypeScript, React, Next.js y Node.js.",
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
        { name: "REST API", icon: <FaJs /> },
      ],
      link: "https://criptomoneda-ari-codigoconjuan.netlify.app/",
    },
    {
      title: "App CRUD",
      description:
        "Aplicación web desarrollada con JavaScript que permite gestionar usuarios mediante operaciones CRUD: crear, consultar, editar y eliminar registros. El proyecto incluye consumo de una API REST, manipulación del DOM y gestión dinámica de datos.",
      image: "/App-CRUD.png",
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

  return (
    <>
      {/* Hero */}
      <section className="flex items-start p-6 mt-9 gap-6">
        {/* Columna de foto */}
        <div className="w-2/5 flex flex-col items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#ff31ce] blur-xl opacity-70"></div>

            <div className="p-1 rounded-full bg-linear-to-r from-[#ff31ce] via-pink-500 to-purple-500">
              <img
                src="/perfil.jpg"
                alt="Foto de Arianna Cámara"
                className="w-48 h-48 rounded-full object-cover relative z-10"
              />
            </div>
          </div>

          <div className="flex items-center text-white text-sm md:text-base mt-2">
            <HiLocationMarker className="mr-1 text-[#f40eb2]" />
            Madrid, España
          </div>

          <a
            href="mailto:ariannaisabel795@gmail.com"
            className="mt-2 group flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full text-sm md:text-base
                      transition-all duration-300 ease-in-out
                      hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_10px_#f40eb2]"
          >
            <HiOutlineMail className="text-[#f40eb2] text-base md:text-lg group-hover:text-white" />
            ariannaisabel795@gmail.com
          </a>

          {/* Botones CV, LinkedIn, GitHub */}
          <div className="flex gap-8 mt-2">
            <a
              href="/Curriculum.pdf"
              download="AriannaCamara_CV.pdf"
              aria-label="Descargar curriculum"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f40eb2] text-white
                        transition-all duration-300 ease-in-out hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <HiOutlineDownload className="text-lg md:text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/arianna-camara-65238a2a5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Arianna Cámara"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f40eb2] text-white
                        transition-all duration-300 ease-in-out hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <FaLinkedinIn className="text-lg md:text-xl" />
            </a>

            <a
              href="https://github.com/AriannaCamara?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Arianna Cámara"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f40eb2] text-white
                        transition-all duration-300 ease-in-out hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <FaGithub className="text-lg md:text-xl" />
            </a>
          </div>
        </div>

        {/* Columna de texto */}
        <div className="w-3/5 flex flex-col gap-6">
          <h1 className="text-4xl mb-2 font-bold text-white w-full max-w-150">
            <span className="drop-shadow-[0_0_10px_#f40eb2]">
              Hola, soy
            </span>{" "}
            <span className="text-[#f40eb2] text-6xl">Arianna</span>
          </h1>

          <div className="mt-4 relative rounded-2xl p-0.5 bg-linear-to-r from-[#f40eb2] via-pink-500 to-purple-600 w-full max-w-150">
            <div className="absolute inset-0 rounded-2xl blur-md opacity-70 bg-linear-to-r from-[#f40eb2] via-pink-500 to-purple-600"></div>

            <div className="relative bg-gray-900 rounded-2xl p-6 w-full">
              <p className="text-xl text-white leading-snug text-justify mb-1">
                Desarrolladora Full Stack Junior con formación en Desarrollo de Aplicaciones Web y experiencia práctica en el desarrollo de aplicaciones con JavaScript, TypeScript, React, Next.js y Node.js. He trabajado con APIs REST, autenticación, bases de datos, gestión de estado, testing y diferentes arquitecturas, desarrollando proyectos tanto frontend como full stack.  
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-9 flex flex-wrap gap-3 w-full max-w-150">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full text-sm md:text-base
                          transition-all duration-300 ease-in-out
                          hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_10px_#f40eb2]"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador neón */}
      <div
        className="w-full h-1 bg-linear-to-r from-[#f40eb2] via-pink-500 to-purple-500
                      rounded-full mt-6 mb-0
                      shadow-[0_0_10px_#f40eb2,0_0_20px_#f40eb2,0_0_30px_#f40eb2]"
      ></div>

      {/* Proyectos */}
      <section className="py-16 px-8 md:px-16 lg:px-20">
        <h1 className="text-4xl font-bold text-white w-full max-w-150 mx-auto mb-12 text-center drop-shadow-[0_0_10px_#f40eb2]">
          Proyectos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative max-w-sm mx-auto rounded-2xl p-0.5
                        bg-linear-to-r from-[#f40eb2] via-pink-500 to-purple-500
                        group
                        transition-all duration-500 ease-in-out
                        hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl blur-md opacity-60 bg-linear-to-r from-[#f40eb2] via-pink-500 to-purple-500"></div>

              <div className="relative bg-gray-900 rounded-2xl flex flex-col h-full overflow-visible">
                <div className="w-full h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                    className="w-full h-full object-cover rounded-t-2xl
                              transition-transform duration-500 ease-in-out
                              group-hover:scale-110"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-lg font-semibold text-[#f40eb2] mb-2 text-center">
                    {project.title}
                  </h2>

                  <p className="text-white text-sm mb-3 line-clamp-4 text-center leading-tight">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3 justify-center">
                    {project.tags.map((tag) => (
                      <div
                        key={tag.name}
                        className="flex items-center gap-1 bg-white/70 px-3 py-1 rounded-full text-sm transition-all duration-300 ease-in-out hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_6px_#f40eb2]"
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
                    className="mt-auto w-full bg-[#f40eb2] text-white px-3 py-2 rounded-full text-center text-sm transition-all duration-300 ease-in-out hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_8px_#f40eb2]"
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
      <div
        className="w-full h-1 bg-linear-to-r from-[#f40eb2] via-pink-500 to-purple-500
                      rounded-full mt-6 mb-6
                      shadow-[0_0_10px_#f40eb2,0_0_20px_#f40eb2,0_0_30px_#f40eb2]"
      ></div>

      {/* Tecnologías */}
      <section className="py-10 px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center drop-shadow-[0_0_10px_#f40eb2]">
          Tecnologías
        </h2>

        {/* Fila 1 */}
        <div className="flex justify-center gap-8 mb-6 flex-wrap">
          {techs.slice(0, 7).map((tech, index) => (
            <div
              key={index}
              title={tech.name}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-white
                        shadow-[0_0_10px_#fff] text-[#f40eb2]
                        transition-all duration-300 ease-in-out
                        hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_10px_#f40eb2] cursor-pointer"
            >
              <div className="text-3xl">{tech.icon}</div>
            </div>
          ))}
        </div>

        {/* Fila 2 */}
        <div className="flex justify-center gap-8 flex-wrap">
          {techs.slice(7).map((tech, index) => (
            <div
              key={index}
              title={tech.name}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-white
                        shadow-[0_0_10px_#fff] text-[#f40eb2]
                        transition-all duration-300 ease-in-out
                        hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_10px_#f40eb2] cursor-pointer"
            >
              <div className="text-3xl">{tech.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Formación */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-white mb-16 drop-shadow-[0_0_10px_#f40eb2]">
          Formación
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-16 max-w-5xl mx-auto">
          {studies.map((estudio, index) => (
            <div key={index} className="group">
              <h3
                className="text-xl md:text-xl font-semibold text-white
                          transition-all duration-300
                          group-hover:text-[#f40eb2]
                          group-hover:drop-shadow-[0_0_6px_#f40eb2]"
              >
                {estudio.title}
              </h3>

              <p className="text-gray-300 mt-1">{estudio.subtitle}</p>

              <div
                className="h-0.5 w-16 bg-[#f40eb2] mt-2
                            shadow-[0_0_8px_#f40eb2]"
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* Separador final */}
      <div
        className="w-full h-1 bg-linear-to-r from-[#f40eb2] via-pink-500 to-purple-500
                      rounded-full mt-6 mb-0
                      shadow-[0_0_10px_#f40eb2,0_0_20px_#f40eb2,0_0_30px_#f40eb2]"
      ></div>
    </>
  );
}