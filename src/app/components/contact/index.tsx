export default function Contact() {
  return (
    <section id="contact">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Contact</h5>
          <h1>Je serai ravi de vous rencontrer.</h1>
          <p className="lead">N&apos;hésitez pas à me contacter pour toute mission !</p>
        </div>
      </div>

      <div className="row contact-info">
        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-pin"></i>
          </div>
          <h5>Où me trouver</h5>
          <p>Nantes, France</p>
        </div>

        <div className="col-four tab-full collapse">
          <div className="icon">
            <i className="icon-mail"></i>
          </div>
          <h5>Envoyez-moi un e-mail</h5>
          <p>hello@valentinbourgoin.fr</p>
        </div>

        <div className="col-four tab-full">
          <div className="icon">
            <i className="icon-phone"></i>
          </div>
          <h5>Bookez-moi sur Malt</h5>
          <p>
            <a
              href="https://www.malt.fr/profile/valentinbourgoin1"
              target="_blank"
            >
              Mon profil Malt
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
