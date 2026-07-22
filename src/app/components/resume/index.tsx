import { useTranslations } from "next-intl";

const WORKS = [
  { key: "ada", highlighted: true },
  { key: "omaj", highlighted: false },
  { key: "sportHeroes", highlighted: false },
  { key: "wnp909c", highlighted: false },
  { key: "freelance", highlighted: false },
] as const;

export default function Resume() {
  const t = useTranslations("Resume");

  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>{t("intro.title")}</h5>
          <h1>{t("intro.subtitle")}</h1>

          <p className="lead">{t("intro.text")}</p>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>{t("work.title")}</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            {WORKS.map(({ key, highlighted }) => (
              <div
                className={`timeline-block${highlighted ? " highlighted" : ""}`}
                key={key}
              >
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="timeline-header">
                  <h3>{t(`work.works.${key}.title`)}</h3>
                  <p>{t(`work.works.${key}.date`)}</p>
                </div>
                <div className="timeline-content">
                  <h4>{t(`work.works.${key}.company`)}</h4>
                  <div>
                    {t.rich(`work.works.${key}.text`, {
                      br: () => <br />,
                      hr: () => <hr />,
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>{t("school.title")}</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>{t("school.degree")}</h3>
                <p>{t("school.date")}</p>
              </div>

              <div className="timeline-content">
                <h4>{t("school.university")}</h4>
                <p>{t("school.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
