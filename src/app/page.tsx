import { Metadata } from 'next';

import Intro from "./components/intro";
import About from "./components/about";
import Resume from "./components/resume";
import Services from "./components/services";
import Contact from "./components/contact";
 
export const metadata: Metadata = {
  title: "Valentin Bourgoin - Tech Lead freelance", 
  description: "CV de Valentin Bourgoin, CTO / CPTO / lead dev / formateur indépendant",
  metadataBase: new URL("https://valentinbourgoin.fr"), 
  openGraph: {
    title: 'Valentin Bourgoin - Tech Lead freelance',
    description: 'CTO / CPTO / lead dev / formateur indépendant',
  },
}

export default function IndexPage() {
  return (
    <div className="container">
      <Intro />
      <About />
      <Services />
      <Resume />
      <Contact />
    </div>
  );
}
