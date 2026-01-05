import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { PulseCircles } from "./animations/PulseCircles";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-32 px-6 overflow-hidden" id="contact" ref={ref}>
      {/* Pulse Circles Animation */}
      <PulseCircles />
      
      {/* Fresh gradient background - Sunlit Travel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4FB6C6] via-[#7ECDD7] to-[#4FB6C6]"></div>
      
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

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
            Get In Touch
          </p>
          <h2 className="mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Sẵn sàng hợp tác cùng bạn
          </h2>
          <p className="mb-16 text-white/95 text-xl max-w-2xl mx-auto leading-relaxed">
            Tôi luôn mở lòng với các cơ hội mới trong ngành Du Lịch và Phát triển Kinh doanh. Hãy kết nối để cùng tạo nên những giá trị đặc biệt!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="group p-8 bg-white/15 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F2C94C] to-[#E8BB3A] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-white text-lg" style={{ fontFamily: 'var(--font-subheading)' }}>
                Email
              </h3>
              <a
                href="mailto:rachelnguyen.contact@gmail.com"
                className="text-[#FDFEFE] hover:text-white transition-colors text-sm break-all"
              >
                rachelnguyen.contact@gmail.com
              </a>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="group p-8 bg-white/15 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7ECDD7] to-[#4FB6C6] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-white text-lg" style={{ fontFamily: 'var(--font-subheading)' }}>
                Số điện thoại
              </h3>
              <a
                href="tel:+84777447107"
                className="text-[#FDFEFE] hover:text-white transition-colors"
              >
                +84 777 447 107
              </a>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Card className="group p-8 bg-white/15 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4FB6C6] to-[#3A9AAA] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-white text-lg" style={{ fontFamily: 'var(--font-subheading)' }}>
                LinkedIn
              </h3>
              <a
                href="https://www.linkedin.com/in/nhi-nguy%E1%BB%85n-th%E1%BB%8B-th%E1%BA%A3o-723a7723a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FDFEFE] hover:text-white transition-colors"
              >
                View Profile
              </a>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            asChild
            className="bg-[#F2C94C] text-[#1F2933] hover:bg-[#E8BB3A] shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-6 rounded-full group"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            <a href="mailto:rachelnguyen.contact@gmail.com" className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              <span>Gửi Email</span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-white/40 text-white hover:bg-white/15 backdrop-blur-sm shadow-xl px-8 py-6 rounded-full"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            <a href="tel:+84777447107" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Gọi điện</span>
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-white/20"
        >
          <p className="text-[#FDFEFE]/80 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            © 2025 Rachel Nguyễn (Nguyễn Thị Thảo Nhi). All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
