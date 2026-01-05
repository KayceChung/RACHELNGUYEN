import { Mail, Phone, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
import { HeroTravelAnimation } from "./animations/HeroTravelAnimation";
import { motion } from "motion/react";
const profileImage = "/RACHELNGUYEN/asset/z7399537876990_a92740fa8602b70e2ef0d9f6bed14c0e.jpg";

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden" id="hero">
      {/* Fresh gradient background - Sunlit Travel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4FB6C6] via-[#7ECDD7] to-[#4FB6C6]"></div>
      
      {/* Hero Travel Animation */}
      <HeroTravelAnimation />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Soft organic shapes */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-[#F2C94C] rounded-full mix-blend-overlay filter blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#FDFEFE] rounded-full mix-blend-overlay filter blur-3xl"
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.99] }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#F2C94C]/30 to-[#FDFEFE]/30 rounded-full blur-2xl"
              ></motion.div>
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Rachel Nguyễn"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.99] }}
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm"
                style={{ fontFamily: 'var(--font-subheading)' }}
              >
                Travel & Hospitality Specialist
              </motion.p>
              
              <h1 className="mb-6 text-white leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Creating Meaningful
                <br />
                <span className="text-[#FDFEFE]">Travel Experiences</span>
                <br />
                <span className="text-[#F2C94C]">That Last</span>
              </h1>
              
              <p className="text-white/95 text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Rachel Nguyễn — Helping travel businesses grow through customer-focused strategies
              </p>

              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <a
                  href="mailto:rachelnguyen.contact@gmail.com"
                  className="group flex items-center gap-2 text-white/90 hover:text-[#F2C94C] transition-all duration-300 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#F2C94C]/50 hover:bg-white/20"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="tel:+84777447107"
                  className="group flex items-center gap-2 text-white/90 hover:text-[#F2C94C] transition-all duration-300 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#F2C94C]/50 hover:bg-white/20"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Phone</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/nhi-nguy%E1%BB%85n-th%E1%BB%8B-th%E1%BA%A3o-723a7723a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-white/90 hover:text-[#F2C94C] transition-all duration-300 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 hover:border-[#F2C94C]/50 hover:bg-white/20"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button
                  onClick={scrollToContact}
                  className="bg-[#F2C94C] text-[#1F2933] hover:bg-[#E8BB3A] shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 rounded-full group"
                  style={{ fontFamily: 'var(--font-subheading)' }}
                >
                  <span>Liên hệ hợp tác</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-sm tracking-wider" style={{ fontFamily: 'var(--font-body)' }}>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}