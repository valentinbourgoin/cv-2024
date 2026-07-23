import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const tCommon = useTranslations("Common");

  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <p className="h05">{t("title")}</p>
          <h2>{t("subtitle")}</h2>
          <p className="lead">{t("text")}</p>
        </div>
      </div>

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>
          <h3 className="h05">{t("info.location.title")}</h3>
          <p>{t("info.location.text")}</p>
        </div>

        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>
          <h3 className="h05">{t("info.email.title")}</h3>
          <p>{t("info.email.text")}</p>
        </div>

        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>
          <h3 className="h05">{t("info.malt.title")}</h3>
          <p>
            <a
              href="https://www.malt.fr/profile/valentinbourgoin1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("info.malt.text")}
              <span className="sr-only"> ({tCommon("newWindow")})</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
