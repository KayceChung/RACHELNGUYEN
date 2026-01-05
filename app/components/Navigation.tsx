import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";

interface NavigationProps {
  onNavigatePortfolio?: () => void;
}

export function Navigation({ onNavigatePortfolio }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.experience'), href: "#experience" },
    { label: t('nav.skills'), href: "#skills" },
    { label: t('nav.achievements'), href: "#achievements" },
    { label: t('nav.education'), href: "#education" },
    { label: t('nav.portfolio'), isPage: true },
    { label: t('nav.contact'), href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (item.isPage && onNavigatePortfolio) {
      onNavigatePortfolio();
      setIsMobileMenuOpen(false);
    } else if (item.href) {
      scrollToSection(item.href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-lg border-b-2 border-[#4FB6C6]/20"
          : "bg-gradient-to-b from-[#1F2933]/80 via-[#1F2933]/40 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("#hero")}
            className={`transition-all duration-300 transform hover:scale-105 ${
              isScrolled ? "text-[#4FB6C6]" : "text-white drop-shadow-lg"
            }`}
          >
            <Logo />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: [0.6, 0.05, 0.01, 0.99]
                }}
                onClick={() => handleMenuClick(item)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#4FB6C6]/10 group ${
                  isScrolled ? "text-[#1F2933] hover:text-[#4FB6C6]" : "text-white hover:text-[#F2C94C] bg-white/5 backdrop-blur-sm"
                }`}
                style={{ fontFamily: 'var(--font-subheading)' }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-[#4FB6C6]' : 'bg-[#F2C94C]'} transition-all duration-300 group-hover:w-full rounded-full`}></span>
              </motion.button>
            ))}
            
            {/* Language Switcher - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className={`ml-2 ${isScrolled ? 'text-[#1F2933]' : 'text-white'}`}
            >
              <LanguageSwitcher />
            </motion.div>
          </div>

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className={`${isScrolled ? 'text-[#1F2933]' : 'text-white'}`}>
              <LanguageSwitcher />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`${isScrolled ? 'hover:bg-[#4FB6C6]/10' : 'hover:bg-white/10'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`${isScrolled ? "text-[#1F2933]" : "text-white"} transition-colors`} />
              ) : (
                <Menu className={`${isScrolled ? "text-[#1F2933]" : "text-white"} transition-colors`} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
              className="md:hidden bg-white/98 backdrop-blur-xl border-t-2 border-[#4FB6C6]/20 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col py-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    onClick={() => handleMenuClick(item)}
                    className="px-6 py-4 text-left text-[#1F2933] hover:bg-[#4FB6C6]/10 hover:text-[#4FB6C6] transition-all font-medium border-l-4 border-transparent hover:border-[#4FB6C6]"
                    style={{ fontFamily: 'var(--font-subheading)' }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}