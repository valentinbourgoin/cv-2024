import "../css/vendor.css";
import "../css/base.css";
import "../css/fonts.css";
import "../css/main.css";


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
