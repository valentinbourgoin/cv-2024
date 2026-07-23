import Image from "next/image";
import { useTranslations } from "next-intl";

const BIRTH_DATE = new Date(1987, 3, 1); // 01/04/1987

function getAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) {
    age -= 1;
  }
  return age;
}

const DAILY_ITEM_KEYS = ["item1", "item2", "item3", "item4", "item5"] as const;
const SKILLS = [
  { key: "teamManagement", percent: "percent90", value: 90 },
  { key: "coding", percent: "percent90", value: 90 },
  { key: "roadmap", percent: "percent90", value: 90 },
  { key: "specs", percent: "percent75", value: 75 },
] as const;

export default function About() {
  const t = useTranslations("About");
  const tCommon = useTranslations("Common");

  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <p className="h05">{t("title")}</p>
          <h2>{t("subtitle")}</h2>
          <div className="intro-info">
            <Image
              alt="Valentin Tilly Bourgoin"
              height={300}
              src="/images/Valentin-Bourgoin.jpeg"
              width={300}
            />
            <div className="lead">
              {t("leadText")}
              <br />
              {t("dailyLabel")}
              <ul>
                {DAILY_ITEM_KEYS.map((key) => (
                  <li key={key}>{t(`daily.${key}`)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>{t("profile.title")}</h3>
          <p>{t("profile.text")}</p>
          <ul className="info-list">
            <li>
              <strong>{t("profile.nameLabel")} </strong>
              <span>{t("profile.name")}</span>
            </li>
            <li>
              <strong>{t("profile.ageLabel")} </strong>
              <span>
                {getAge(BIRTH_DATE)} {t("profile.ageUnit")}
              </span>
            </li>
            <li>
              <strong>{t("profile.locationLabel")} </strong>
              <span>{t("profile.location")}</span>
            </li>
            <li>
              <strong>{t("profile.emailLabel")} </strong>
              <span>{t("profile.email")}</span>
            </li>
          </ul>
        </div>
        <div className="col-six tab-full">
          <h3>{t("skills.title")}</h3>
          <p>{t("skills.text")}</p>
          <ul className="skill-bars">
            {SKILLS.map(({ key, percent, value }) => (
              <li key={key}>
                <div className={`progress ${percent}`}>
                  <span>{value}%</span>
                </div>
                <strong>{t(`skills.${key}`)}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row button-section">
        <div className="col-twelve">
          <a
            href="#contact"
            title="Contact"
            className="button stroke smoothscroll"
          >
            {t("buttons.contact")}
          </a>
          <a
            href="https://www.malt.fr/profile/valentinbourgoin1"
            title="RDV sur Malt"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            {t("buttons.hire")}
            <span className="sr-only"> ({tCommon("newWindow")})</span>
          </a>
        </div>
      </div>
    </section>
  );
}
