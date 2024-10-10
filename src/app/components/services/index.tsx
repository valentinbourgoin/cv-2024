export default function Services() {

  const services = [
    {
      "icon": "users",
      "title": "Organisation d'équipe",
      "text": "Comment organiser la delivery et maximiser la vélocité de vos équipes ?"
    },
    {
      "icon": "code",
      "title": "Tech lead",
      "text": "Vous avez besoin d'un contributeur sénior dans le cadre du développement d'un produit ou d'une fonctionnalité ?"
    },
    {
      "icon": "microphone",
      "title": "Coaching / formation",
      "text": "Comment soutenir vos équipes sur le long terme et les aider à progresser ?"
    },
    {
      "icon": "road",
      "title": "Strategie MVP",
      "text": "Quelle fonctionnalité doit être priorisée ? Comment minimiser le time-to-market ?"
    },
    {
      "icon": "cogs",
      "title": "Architecture technique",
      "text": "Comment concevoir votre prochaine killer feature ? Quels outils utiliser et quelle architecture implémenter ?"
    },
    {
      "icon": "stethoscope",
      "title": "Audit",
      "text": "Comment améliorer votre organisation Tech / Product déjà en place ? "
    },
    
    
  ]

  return (
    <section id="services">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Services</h5>
          <h1>Comment puis-je vous aider ?</h1>
          <p className="lead">
            Vous avez des besoins court-termes sur la stratégie de développement d&apos;un MVP, 
            sur l&apos;organisation ou le scale de votre delivery ? Je serais ravi de vous aider !
          </p>
        </div>
      </div>

      <div className="row services-content">
        <div className="services-list">

          {services.map(service => (
            <div className="service" key={service.icon}>
              <span className="icon">
                <i className={`fa fa-${service.icon} fa-stack-1x fa-inverse`}></i>
              </span>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="desc">{service.text}</p>
              </div>
          </div>
          ))}
          
          {/* <div className="service">
            <span className="icon">
              <i className="fa fa-code fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
              <h3>{t("services.service6.title")}</h3>
              <p className="desc">{t("services.service6.text")}</p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="fa fa-users fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
              <h3>{t("services.service3.title")}</h3>
              <p className="desc">{t("services.service3.text")}</p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="fa fa-microphone fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
              <h3>{t("services.service5.title")}</h3>
              <p className="desc">{t("services.service5.text")}</p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="fa fa-road fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
              <h3>{t("services.service1.title")}</h3>
              <p className="desc">{t("services.service1.text")}</p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
              <h3>{t("services.service2.title")}</h3>
              <p className="desc">{t("services.service2.text")}</p>
            </div>
          </div>

          <div className="service">
            <span className="icon">
              <i className="fa fa-stethoscope fa-stack-1x fa-inverse"></i>
            </span>
            <div className="service-content">
              <h3>{t("services.service4.title")}</h3>
              <p className="desc">{t("services.service4.text")}</p>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
}
