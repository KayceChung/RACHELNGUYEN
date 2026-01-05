import { Logo } from "./Logo";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function BusinessCard() {
  return (
    <div className="min-h-screen bg-[#F4EDE4] py-20 px-6 flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A050] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
            Brand Applications
          </p>
          <h2 className="mb-6 text-[#2A2A2A]" style={{ fontFamily: 'var(--font-heading)' }}>
            Business Card Design
          </h2>
        </motion.div>

        {/* Business Card - Front */}
        <motion.div
          initial={{ opacity: 0, rotateY: -15 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative mx-auto" style={{ width: '850px', maxWidth: '100%' }}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ aspectRatio: '85/55' }}>
              {/* Front side */}
              <div className="h-full p-12 flex flex-col justify-between relative">
                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="#2C5F6F" strokeWidth="0.5" fill="none" />
                    <circle cx="100" cy="100" r="60" stroke="#2C5F6F" strokeWidth="0.5" fill="none" />
                    <circle cx="100" cy="100" r="40" stroke="#2C5F6F" strokeWidth="0.5" fill="none" />
                    <path d="M100 20 L100 180 M20 100 L180 100" stroke="#C9A050" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Logo */}
                <div className="text-[#2C5F6F] relative z-10">
                  <Logo variant="signature" />
                </div>

                {/* Contact Information */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className="text-[#2A2A2A] text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      Business Development & Customer Services
                    </h3>
                    <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      Tourism & Travel Industry Expert
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-[#6B6B6B] text-sm">
                    <div className="flex items-start gap-2">
                      <Mail className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span style={{ fontFamily: 'var(--font-body)' }}>rachelnguyen.contact@gmail.com</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span style={{ fontFamily: 'var(--font-body)' }}>+84 777 447 107</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Linkedin className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span style={{ fontFamily: 'var(--font-body)' }}>linkedin.com/in/rachel-nguyen</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C9A050] mt-0.5 flex-shrink-0" />
                      <span style={{ fontFamily: 'var(--font-body)' }}>Ho Chi Minh City, Vietnam</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Business Card - Back */}
        <motion.div
          initial={{ opacity: 0, rotateY: 15 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative mx-auto" style={{ width: '850px', maxWidth: '100%' }}>
            <div className="bg-gradient-to-br from-[#2C5F6F] to-[#3D7B8E] rounded-2xl shadow-2xl overflow-hidden" style={{ aspectRatio: '85/55' }}>
              {/* Back side */}
              <div className="h-full p-12 flex flex-col items-center justify-center text-center relative">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>

                {/* Monogram logo */}
                <div className="text-[#C9A050] mb-8 relative z-10">
                  <Logo variant="monogram" />
                </div>

                {/* Tagline */}
                <div className="relative z-10">
                  <p className="text-white text-2xl mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-heading)' }}>
                    Transforming Travel Experiences
                  </p>
                  <div className="h-0.5 w-24 bg-[#C9A050] mx-auto rounded-full"></div>
                </div>

                {/* Specialties */}
                <div className="mt-8 flex flex-wrap justify-center gap-3 relative z-10">
                  {["Business Development", "Customer Services", "Tour Operations"].map((item, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs border border-white/20"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-xl p-8 shadow-lg border border-[#2C5F6F]/10">
            <p className="text-[#6B6B6B] text-sm mb-2" style={{ fontFamily: 'var(--font-body)' }}>
              <span className="font-semibold text-[#2A2A2A]">Specifications:</span> Standard business card size (85mm × 55mm)
            </p>
            <p className="text-[#6B6B6B] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Premium 350gsm card stock with matte finish and rounded corners
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
