import Image from "next/image"

export default function Intro() {
  return (
    <section id="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div className="row">
          <div className="col-twelve">
            <h5>Bonjour</h5>
            <h1>Je suis Valentin Bourgoin.</h1>
            <p className="intro-position">
              <span>Tech lead engagé ✊</span>
            </p>
            <a className="button stroke smoothscroll" href="#about" title="">
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      <ul className="intro-social">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/valentinbourgoin/"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/valentin_">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.komoot.fr/user/984970505637">
            <Image 
              alt="Komoot" 
              height={30}
              src="/images/icon-komoot.svg" 
              width={30} 
            />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.strava.com/athletes/1999872">
            <Image 
              alt="Strava"
              height={30}
              src="/images/icon-strava.png" 
              width={30} 
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
