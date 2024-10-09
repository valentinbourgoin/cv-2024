import "../../css/vendor.css";
import "../../css/base.css";
import "../../css/fonts.css";
import "../../css/main.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Valentin Bourgoin - Tech Lead freelance", 
  description: "CV de Valentin Bourgoin, CTO / CPTO / lead dev indépendant",
  metadataBase: new URL("https://valentinbourgoin.fr")
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
