# Arianna Cámara — Portfolio

Mi portafolio personal como desarrolladora Full Stack. Construido con **Next.js 16**, **React 19**, **Tailwind CSS 4** y **TypeScript**, con soporte de idiomas ES/EN mediante rutas dinámicas.

**En vivo:** https://portafolio-arianna-camara.netlify.app

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Estilos:** Tailwind CSS 4
- **Tipado:** TypeScript estricto
- **Iconos:** react-icons
- **i18n:** rutas `/[lang]` con diccionarios `es`/`en` y tipos compartidos

## Estructura

```text
app/
  [lang]/
    dictionaries/    # Contenido en español e inglés (fuente de verdad: es.ts)
    dictionaries.ts  # Carga dinámica y tipo Locale
    layout.tsx       # Layout por idioma con metadata
    page.tsx         # Página principal
components/
  Portfolio.tsx      # Secciones: hero, proyectos, tecnologías, formación
  LanguageToggle.tsx # Selector ES/EN
public/              # Imágenes y CV en PDF
```

El diccionario español (`es.ts`) es la **fuente de verdad del contenido**; el inglés se tipa contra él, así que el compilador avisa si falta alguna traducción.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |

## Despliegue

Este sitio se despliega en **Netlify** desde la rama principal de GitHub.

## Sobre mí

Soy Arianna Cámara, desarrolladora Full Stack junior con FP Superior en Desarrollo de Aplicaciones Web. Trabajo con React, Next.js, TypeScript, Node.js y NestJS.

- **Portfolio:** https://portafolio-arianna-camara.netlify.app
- **LinkedIn:** https://www.linkedin.com/in/arianna-camara-65238a2a5
- **Email:** ariannaisabel795@gmail.com
