import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import LanguageToggle from "@/components/LanguageToggle";
import { getDictionary, hasLocale } from "./dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const t = await getDictionary(lang);
  return {
    title: t.metadata.title,
    description: t.metadata.description,
    alternates: {
      canonical: lang === "es" ? "/" : "/en",
      languages: {
        es: "/",
        en: "/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params;
  // Idioma por defecto: español ante cualquier ruta no válida
  const locale = hasLocale(lang) ? lang : "es";

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageToggle lang={locale} />
        {children}
      </body>
    </html>
  );
}
