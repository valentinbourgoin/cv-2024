import "../css/vendor.css";
import "../css/base.css";
import "../css/fonts.css";
import "../css/main.css";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Valentin Bourgoin - Tech Lead freelance", 
  description: "CV de Valentin Bourgoin, CTO / CPTO / lead dev indépendant",
  metadataBase: new URL("https://valentinbourgoin.fr")
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
          {children}
      </body>
    </html>
  );
}
