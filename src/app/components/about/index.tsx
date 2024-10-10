export default function About() {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>A propos</h5>
          <h1>En quelques mots...</h1>
          <div className="intro-info">
            <img src="/images/Valentin-Bourgoin.jpeg" alt="Valentin Bourgoin" />
            <div className="lead">
              Soucieux d&apos;avoir un impact positif sur la société et la planète, 
              j&apos;aide les équipes à livrer et à maximiser leur impact. 
              <br />
              Mon quotidien:
              <ul>
                <li>Constuire une roadmap et prioriser des features.</li>
                <li>Organiser la delivery et mettre en place des processes.</li>
                <li>Coder des trucs.</li>
                <li>Leader des équipes et leur donner une direction et une vision technique.</li>
                <li>Courir vite et pédaler le plus longtemps possible...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>Profil</h3>
          <p>
          Je travaille au sein d&apos;équipes Tech & Produit depuis 15 ans, en tant que CT(P)O, 
          VP&nbsp;Engineering ou lead dev. Mon background de développeur me permet à la fois de contribuer à la delivery, 
          tout en étant capable de guider des équipes techniques et en étant obsédé de la qualité du produit 
          et de l&apos;expérience utilisateurice.
          </p>
          <ul className="info-list">
            <li>
              <strong>Nom : </strong>
              <span>Valentin Bourgoin</span>
            </li>
            <li>
              <strong>Age : </strong>
              <span>37 ans</span>
            </li>
            <li>
              <strong>Localisation : </strong>
              <span>Nantes</span>
            </li>
            <li>
              <strong>Email : </strong>
              <span>hello@valentinbourgoin.fr</span>
            </li>
          </ul>
        </div>
        <div className="col-six tab-full">
          <h3>Compétences</h3>
          <p>
            Je peux rejoindre une équipe en tant que contributeur individuel, 
            prendre part à la mise en place de processes de delivery, 
            à la construction et la priorisation d&apos;une roadmap ou encore à l&apos;élaboration d&apos;une architecture technique.
          </p>
          <ul className="skill-bars">
            <li>
              <div className="progress percent90"></div>
              <strong>Management d&apos;équipes</strong>
            </li>
            
            <li>
              <div className="progress percent90"></div>
              <strong>Coder (Django, Symfony, React...)</strong>
            </li>
            <li>
              <div className="progress percent90"></div>
              <strong>Roadmap produit</strong>
            </li>
            <li>
              <div className="progress percent75"></div>
              <strong>Spécifications techniques</strong>
            </li>
            
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
            Contact
          </a>
          <a
            href="https://www.malt.fr/profile/valentinbourgoin1"
            title="RDV sur Malt"
            target="_blank"
            className="button button-primary"
          >
            RDV sur Malt
          </a>
        </div>
      </div>
    </section>
  );
}
