import { useState } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { PortfolioPage } from "./components/PortfolioPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "portfolio">("home");

  return (
    <LanguageProvider>
      {currentPage === "portfolio" ? (
        <PortfolioPage onNavigateHome={() => setCurrentPage("home")} />
      ) : (
        <div className="min-h-screen bg-[#FDFEFE]">
          <Navigation onNavigatePortfolio={() => setCurrentPage("portfolio")} />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Achievements />
          <Contact />
        </div>
      )}
    </LanguageProvider>
  );
}