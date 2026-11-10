import type { Dictionary } from "./dictionaries/es";

const dictionaries = {
  es: () => import("./dictionaries/es").then((module) => module.es),
  en: () => import("./dictionaries/en").then((module) => module.en),
};

export type Locale = keyof typeof dictionaries;
export type { Dictionary };

export const hasLocale = (locale: string): locale is Locale =>
  Object.hasOwn(dictionaries, locale);

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
