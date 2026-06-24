import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="py-20 sm:py-24">
          <Marquee />
        </div>
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
