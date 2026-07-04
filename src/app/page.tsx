import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <WhyHireMe />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </PageTransition>
  );
}
