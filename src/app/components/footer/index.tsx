import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer>
      <div className="row">
        <div className="col-eight tab-full">
          <div className="copyright">
            <span>
              {t("copyright")} {new Date().getFullYear()}{" "}
            </span>
            <span>
              {t("design")} <a href="http://www.styleshout.com/">styleshout</a>
            </span>
            <span>{t("coded")}</span>
          </div>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title={t("backToTop")} href="#top">
            <i className="fa fa-long-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
