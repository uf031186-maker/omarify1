import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import WhyHireMe from "@/components/WhyHireMe";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <WhyHireMe />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </PageTransition>
  );
}
