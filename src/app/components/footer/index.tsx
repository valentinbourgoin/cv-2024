export default function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col-eight tab-full">
          <div className="copyright">
            <span>© Copyright 2021 </span>
            <span>
            Design par <a href="http://www.styleshout.com/">styleshout</a>
            </span>
            <span>Codé avec NextJS & amour depuis Nantes 🐘</span>
          </div>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Retour en haut" href="#top">
            <i className="fa fa-long-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
