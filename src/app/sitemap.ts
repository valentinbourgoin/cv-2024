import { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `https://valentinbourgoin.fr/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
