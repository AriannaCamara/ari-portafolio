"use client";

import Link from "next/link";
import { FaGlobe } from "react-icons/fa";

import type { Locale } from "@/app/[lang]/dictionaries";

const options: Record<
  Locale,
  { href: string; label: string; ariaLabel: string }
> = {
  es: { href: "/en", label: "EN", ariaLabel: "Switch to English" },
  en: { href: "/", label: "ES", ariaLabel: "Cambiar a español" },
};

// Scroll sin salto al cambiar de idioma: se conserva la posición actual
export default function LanguageToggle({ lang }: { lang: Locale }) {
  const option = options[lang];

  return (
    <Link
      href={option.href}
      scroll={false}
      aria-label={option.ariaLabel}
      className="fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full border border-[#f40eb2]/60 bg-gray-950/90 px-4 py-2 text-sm font-semibold text-[#f40eb2] shadow-[0_0_10px_rgba(244,14,178,0.45)] backdrop-blur transition-all duration-300 hover:bg-[#f40eb2] hover:text-white hover:shadow-[0_0_15px_#f40eb2]"
    >
      <FaGlobe aria-hidden="true" />
      {option.label}
    </Link>
  );
}
