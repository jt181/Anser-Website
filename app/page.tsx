import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/About";
import Clients from "../sections/Clients";
import Team from "../sections/Team";
import CallToAction from "../sections/CallToAction";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Team />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}