import { useTranslations } from "next-intl";

export default function Resume() {
  const t = useTranslations("resume");

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
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="timeline-header">
                <h3>{t("work.work1.title")}</h3>
                <p>{t("work.work1.date")}</p>
              </div>
              <div className="timeline-content">
                <h4>{t("work.work1.company")}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: t.raw("work.work1.text") }}
                />
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="timeline-header">
                <h3>{t("work.work2.title")}</h3>
                <p>{t("work.work2.date")}</p>
              </div>
              <div className="timeline-content">
                <h4>{t("work.work2.company")}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: t.raw("work.work2.text") }}
                />
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="timeline-header">
                <h3>{t("work.work3.title")}</h3>
                <p>{t("work.work3.date")}</p>
              </div>
              <div className="timeline-content">
                <h4>{t("work.work3.company")}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: t.raw("work.work3.text") }}
                />
              </div>
            </div>
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
                <h3>{t("school.school1.title")}</h3>
                <p>{t("school.school1.date")}</p>
              </div>

              <div className="timeline-content">
                <h4>{t("school.school1.university")}</h4>
                <p>{t("school.school1.title")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
