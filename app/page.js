import { Introduction, Navbar, About, Projects, Contact, Skills, Footer } from "@/components";
import { Inconsolata } from 'next/font/google'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export default function HomePage() {
  return (
    <main className={inconsolata.className}>
      <div className="overflow-hidden">
        <Introduction />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

