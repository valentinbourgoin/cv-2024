import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = {
    ...(await import(`../messages/${locale}/common.json`)).default,
    ...(await import(`../messages/${locale}/intro.json`)).default,
    ...(await import(`../messages/${locale}/about.json`)).default,
    ...(await import(`../messages/${locale}/services.json`)).default,
    ...(await import(`../messages/${locale}/resume.json`)).default,
    ...(await import(`../messages/${locale}/contact.json`)).default,
  };

  return { locale, messages };
});
