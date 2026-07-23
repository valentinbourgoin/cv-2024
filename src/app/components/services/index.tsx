import { useTranslations } from "next-intl";

const SERVICES = [
  { key: "teamOrg", icon: "users" },
  { key: "techLead", icon: "code" },
  { key: "coaching", icon: "microphone" },
  { key: "mvpStrategy", icon: "road" },
  { key: "architecture", icon: "cogs" },
  { key: "audit", icon: "stethoscope" },
] as const;

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services">
      <div className="row section-intro">
        <div className="col-twelve">
          <p className="h05">{t("title")}</p>
          <h2>{t("subtitle")}</h2>
          <p className="lead">{t("text")}</p>
        </div>
      </div>

      <div className="row services-content">
        <div className="services-list">
          {SERVICES.map(({ key, icon }) => (
            <div className="service" key={key}>
              <span className="icon">
                <i className={`fa fa-${icon} fa-stack-1x fa-inverse`}></i>
              </span>
              <div className="service-content">
                <h3>{t(`services.${key}.title`)}</h3>
                <p className="desc">{t(`services.${key}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
