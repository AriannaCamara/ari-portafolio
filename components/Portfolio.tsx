import type { ReactNode } from "react";

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
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVite,
} from "react-icons/si";

import type { Dictionary } from "@/app/[lang]/dictionaries";

const skills = [
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiNestjs />, name: "NestJS" },
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

// Los nombres de tags son iguales en ambos idiomas, solo cambia el icono
const tagIcons: Record<string, ReactNode> = {
  React: <FaReact />,
  JavaScript: <FaJs />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  TypeScript: <SiTypescript />,
  "REST API": <FaServer />,
};

const featuredTags = [
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Drizzle ORM",
  "Better Auth",
  "Vercel AI SDK",
  "Tailwind CSS",
  "Pusher",
];

export default function Portfolio({ t }: { t: Dictionary }) {
  return (
    <>
      {/* Hero */}
      <section className="mt-9 flex flex-col items-center gap-8 p-6 md:flex-row md:items-center md:gap-6">
        {/* Columna de foto */}
        <div className="flex w-full flex-col items-center gap-4 md:w-2/5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#ff31ce] opacity-70 blur-xl" />
            <div className="rounded-full bg-gradient-to-r from-[#ff31ce] via-pink-500 to-purple-500 p-1">
              <img
                src="/perfil.jpg"
                alt={t.hero.photoAlt}
                className="relative z-10 h-48 w-48 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="mt-2 flex items-center text-sm text-white md:text-base">
            <HiLocationMarker className="mr-1 text-[#f40eb2]" />
            {t.hero.location}
          </div>

          <a
            href="mailto:ariannaisabel795@gmail.com"
            className="group mt-2 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm text-[#f40eb2] shadow-[0_0_8px_rgba(244,14,178,0.45)] transition-all duration-300 hover:shadow-[0_0_15px_#f40eb2,0_0_30px_#f40eb2] md:text-base"
          >
            <HiOutlineMail className="text-base text-[#f40eb2] md:text-lg" />
            <span className="break-all">ariannaisabel795@gmail.com</span>
          </a>

          {/* Botones CV, LinkedIn y GitHub */}
          <div className="mt-2 flex gap-8">
            <a
              href="/Curriculum.pdf"
              download="AriannaCamara_CV.pdf"
              aria-label={t.hero.downloadCv}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f40eb2] text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <HiOutlineDownload className="text-lg md:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/arianna-camara-65238a2a5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.linkedinLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f40eb2] text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <FaLinkedinIn className="text-lg md:text-xl" />
            </a>
            <a
              href="https://github.com/AriannaCamara?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.githubLabel}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f40eb2] text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_10px_#f40eb2]"
            >
              <FaGithub className="text-lg md:text-xl" />
            </a>
          </div>
        </div>

        {/* Columna de texto */}
        <div className="flex w-full flex-col gap-6 md:w-3/5">
          <h1 className="mb-2 w-full text-4xl font-bold text-white md:text-5xl">
            <span className="drop-shadow-[0_0_10px_#f40eb2]">
              {t.hero.greeting}
            </span>{" "}
            <span className="text-5xl text-[#f40eb2] md:text-6xl">Arianna</span>
          </h1>

          <div className="relative mt-4 w-full max-w-150 rounded-2xl bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-600 p-0.5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-600 opacity-70 blur-md" />
            <div className="relative w-full rounded-2xl bg-gray-900 p-6">
              <p className="text-justify text-lg leading-snug text-white md:text-xl">
                {t.hero.intro}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-3 flex w-full gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1 text-sm text-[#f40eb2] shadow-[0_0_8px_rgba(244,14,178,0.45)] transition-all duration-300 hover:shadow-[0_0_15px_#f40eb2,0_0_30px_#f40eb2] md:text-base"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="px-5 py-16 md:px-10 lg:px-16">
        <h2 className="mb-4 text-center text-4xl font-bold text-white drop-shadow-[0_0_10px_#f40eb2] md:text-5xl">
          {t.featured.heading}
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-base text-gray-300 md:text-lg">
          {t.featured.subtitle}
        </p>

        <div className="relative mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#f40eb2] via-purple-500 to-blue-500 p-0.5 transition-transform duration-500 hover:-translate-y-1">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f40eb2] via-purple-500 to-blue-500 opacity-50 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl bg-gray-950">
            <div className="grid items-center gap-8 p-5 md:p-8 lg:grid-cols-5 lg:p-10">
              <div className="lg:col-span-3">
                <div className="mb-4 inline-flex rounded-full border border-pink-400/40 bg-pink-500/10 px-3 py-1 text-sm font-semibold text-pink-300">
                  {t.featured.badge}
                </div>
                <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Meeti <span className="text-[#f40eb2]">Next</span>
                </h3>
                <p className="mb-5 leading-relaxed text-gray-300">
                  {t.featured.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {featuredTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-sm text-[#f40eb2] shadow-[0_0_8px_rgba(244,14,178,0.45)] transition-all duration-300 hover:shadow-[0_0_15px_#f40eb2,0_0_30px_#f40eb2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mb-7 space-y-2 text-sm leading-relaxed text-gray-300 md:text-base">
                  {t.featured.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://meeti-next.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#f40eb2] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_14px_#f40eb2]"
                  >
                    {t.featured.viewDemo}
                  </a>
                  <a
                    href="https://github.com/AriannaCamara/meeti-next"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-[#f40eb2] hover:text-[#f40eb2]"
                  >
                    <FaGithub /> {t.featured.viewCode}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-purple-950/40">
                  <img
                    src="/meeti.PNG"
                    alt={t.featured.screenshotAlt}
                    className="aspect-[4/3] w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent p-5 pt-12">
                    <p className="text-lg font-semibold text-white">
                      {t.featured.cardTitle}
                    </p>
                    <p className="text-sm text-gray-300">
                      {t.featured.cardSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Galería de tres capturas */}
            <div className="grid grid-cols-1 gap-4 border-t border-white/10 p-5 md:grid-cols-3 md:p-8">
              {t.featured.gallery.map((image) => (
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
          {t.projects.heading}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project) => (
            <div
              key={project.link}
              className="group relative mx-auto max-w-sm rounded-2xl bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-500 p-0.5 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f40eb2] via-pink-500 to-purple-500 opacity-60 blur-md" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gray-900">
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={t.projects.screenshotAlt.replace(
                      "{title}",
                      project.title,
                    )}
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
                        key={tag}
                        className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm text-[#f40eb2] shadow-[0_0_8px_rgba(244,14,178,0.45)] transition-all duration-300 hover:shadow-[0_0_15px_#f40eb2,0_0_30px_#f40eb2]"
                      >
                        {tagIcons[tag]}
                        {tag}
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full rounded-full bg-[#f40eb2] px-3 py-2 text-center text-sm text-white transition-all duration-300 hover:bg-white hover:text-[#f40eb2] hover:shadow-[0_0_8px_#f40eb2]"
                  >
                    {t.projects.viewProject}
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
          {t.technologies.heading}
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
          {t.education.heading}
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
          {t.education.items.map((study) => (
            <div key={study.title} className="group">
              <h3 className="text-xl font-semibold text-white transition-all duration-300 group-hover:text-[#f40eb2] group-hover:drop-shadow-[0_0_6px_#f40eb2]">
                {study.title}
              </h3>
              <p className="mt-1 text-gray-300">{study.subtitle}</p>
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
