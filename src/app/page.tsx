import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Infocod from "@/components/Infocod";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stack />
        <Process />
        <Certifications />
        <Experience />
        <Infocod />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
