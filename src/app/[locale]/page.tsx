import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

import Intro from "../components/intro";
import About from "../components/about";
import Resume from "../components/resume";
import Services from "../components/services";
import Contact from "../components/contact";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, getPathname({ locale: l, href: "/" })]),
  );

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://valentinbourgoin.fr"),
    alternates: { languages },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/api/og",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function IndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="container">
      <Intro />
      <About />
      <Services />
      <Resume />
      <Contact />
    </div>
  );
}
