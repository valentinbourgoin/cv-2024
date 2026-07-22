import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

export default function Intro() {
  const t = useTranslations("Intro");

  return (
    <section id="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>{t("hello")}</h5>
            <h1>{t("name")}</h1>
            <p className="intro-position">
              <span>{t("description")}</span>
            </p>
            <a className="button stroke smoothscroll" href="#about" title="">
              {t("more")}
            </a>
          </div>
        </div>
      </div>

      <ul className="intro-social">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/valentinbourgoin/"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/valentin_"
            aria-label="Twitter"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.komoot.fr/user/984970505637"
          >
            <Image
              alt="Komoot"
              height={30}
              src="/images/icon-komoot.svg"
              width={30}
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.strava.com/athletes/1999872"
          >
            <Image
              alt="Strava"
              height={30}
              src="/images/icon-strava.png"
              width={30}
            />
          </a>
        </li>
        <li className="lang-switch">
          <Link href="/" locale="fr" aria-label="Français">
            🇫🇷
          </Link>
          <Link href="/" locale="en" aria-label="English">
            🇬🇧
          </Link>
        </li>
      </ul>
    </section>
  );
}
