import { Introduction, Navbar, About, Contact, Footer } from "@/components";
import { Inconsolata } from 'next/font/google'
import dynamic from "next/dynamic";

const DynamicProject = dynamic(() => import('../components/Projects/Projects'), {
  ssr: false,
});

const DynamicSkills = dynamic(() => import('../components/Skills/Skills'), {
  ssr: false,
});

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
        <DynamicSkills />
        <DynamicProject />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

