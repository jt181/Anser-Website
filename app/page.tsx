import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Sectors from "../sections/Sectors";
import Experience from "../sections/Experience";
import Team from "../sections/Team";
import CallToAction from "../sections/CallToAction";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Sectors />
      <Services />
      <Experience />
      <Team />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
