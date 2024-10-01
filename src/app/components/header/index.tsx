import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div id="lang-menu">
        <Link href="/" locale="fr">
          <a>🇫🇷</a>
        </Link>
        <Link href="/" locale="en">
          <a>🇬🇧</a>
        </Link>
      </div>
    </header>
  );
}
