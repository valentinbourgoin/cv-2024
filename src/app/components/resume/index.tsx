export default function Resume() {

  const works = [
    {
      "highlighted": true,
      "title": "Encadrant",
      "date": "Depuis Déc 2021",
      "company": "Ada Tech School",
      "text": "Ada Tech School est la 1ère école d’informatique inclusive à la pédagogie alternative. <br /><hr />Accompagnement de promotions d&apos;apprenant-es. <br />Animation et suivi de rituels. <br />Entretiens de prise de feedback individuels. <hr />Stack : HTML, CSS, Javascript, Python, PHP, ..."
    },
    {
      "title": "CTO",
      "date": "Déc 2021 - Sept 2024",
      "company": "OMAJ",
      "text": "OMAJ est un dépôt-vente en ligne de vêtements de seconde main qui met la Tech au service d&apos;une mission : botter les fesses de la fast fashion. <br /><hr />Mise en place de la stack technique. <br />Recrutement et management de l&apos;équipe.<br />Construction de la roadmap et staffing. <br />Mise en place d&apos;une méthodologie de travail et suivi des metrics de performance. <hr />Stack : Django (Celery, Redis, Postgres,&nbsp;...), React, Shopify."
    },
    {
      "title": "Senior VP Product",
      "date": "Sept 2016 - Juillet 2021",
      "company": "Sport Heroes",
      "text": "Sport Heroes est une start-up qui édite un produit SaaS qui permet à plus de 300 partenaires (marques, organisateurs d&apos;événements, ONGs, entreprises) d&apos;engager leurs communautés de clients, collaborateurs ou fans autour du sport connecté et du bien-être.<br /><hr />Management de l&apos;équipe Product & Tech team (environ 25 personnes&nbsp;:&nbsp;Product Managers / Designers, Engineering Managers, développeurs, User Care) en squads agiles. <br />En charge de la priorisation de la roadmap, de la delivery et des processes. <hr />Stack : React / React Native, Node, Mongo, Redis, AWS."
    },
    {
      "title": "Head of Technology",
      "date": "Sept 2015 - Sept 2016",
      "company": "909c (WNP)",
      "text": "909c est une agence social media, rachetée par WNP en 2017. <br /><hr />Management de l&apos;équipe technique dans le cadre de projets variés : planning, management quotidien, architecture technique. <br /><hr />Stack : Symfony, Wordpress, eZPublish, VueJS, ..."
    },
    {
      "title": "Ingénieur web",
      "date": "Juillet 2010 - Sept 2015",
      "company": "Freelance",
      "text": "- Dév web front / mobile / back. <br />- Hébergement. <br />- Conseil / formation. <br />- Intervenant à L&apos;Université Paris-Est.<hr />Stack: Python / Django, Symfony, Wordpress, Angular, ..."
    }
  ]

  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Plus d&apos;infos</h5>
          <h1>Mon CV</h1>

          <p className="lead">
          Vous trouverez ici mes principales références en tant que CTO, CPO, encadrant pédagogique ou dév web sénior.
          </p>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Expériences professionnelles</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">

            {works.map((item, index) => (
              <div className="timeline-block" key={index}>
                <div className="timeline-ico">
                  <i className="fa fa-briefcase"></i>
                </div>
                <div className="timeline-header">
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                </div>
                <div className="timeline-content">
                  <h4>{item.company}</h4>
                  <div dangerouslySetInnerHTML={{ __html: item.text}} />
                </div>
              </div>
            ))}

            {/* <div className="timeline-block highlighted">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="timeline-header">
                <h3>{t("work.work-current.title")}</h3>
                <p>{t("work.work-current.date")}</p>
              </div>
              <div className="timeline-content">
                <h4>{t("work.work-current.company")}</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: t.raw("work.work-current.text") }}
                />
              </div>
            </div>

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
            </div> */}


          </div>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Education</h2>
        </div>

        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>Ingénieur IMAC</h3>
                <p>2006 - 2009</p>
              </div>

              <div className="timeline-content">
                <h4>Université de Paris Est - ESIPE</h4>
                <p>Diplôme d&apos;ingénieur généraliste</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
