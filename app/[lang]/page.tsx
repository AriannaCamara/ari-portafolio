import { notFound } from "next/navigation";
import Portfolio from "@/components/Portfolio";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const t = await getDictionary(lang);
  return <Portfolio t={t} />;
}
