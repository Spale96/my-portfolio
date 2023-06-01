import { Introduction, Navbar, About, Projects, Contact, Skills, Footer } from "@/components";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Introduction />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
