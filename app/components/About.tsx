import { Card } from "./ui/card";
import { TrendingUp, Users, Plane } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { TravelPath } from "./animations/TravelPath";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import travelImage1 from "figma:asset/39983172d9ad2a39a80a2df4bd0f58ff44fe87f8.png";
import travelImage2 from "figma:asset/3f2add68ed07cc6e18994675bf827cdfd9418513.png";

// Focus areas data
const focusAreas = [
  {
    icon: TrendingUp,
    title: "Business Development",
    description: "Phát triển chiến lược kinh doanh và mở rộng thị trường trong ngành du lịch",
    gradient: "from-[#4FB6C6] to-[#7ECDD7]"
  },
  {
    icon: Users,
    title: "Customer Services Management",
    description: "Quản lý và nâng cao chất lượng dịch vụ khách hàng, đảm bảo trải nghiệm tuyệt vời",
    gradient: "from-[#F2C94C] to-[#FFD966]"
  },
  {
    icon: Plane,
    title: "Account Management",
    description: "Xây dựng và duy trì mối quan hệ bền vững với khách hàng và đối tác",
    gradient: "from-[#4FB6C6] to-[#F2C94C]"
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.05, 0.01, 0.99]
    }
  }
};

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="py-28 px-6 relative overflow-hidden" id="about" ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F6F8] via-white to-[#FFF9E6]"></div>
      
      {/* Travel Path Animation */}
      <TravelPath />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm"
            style={{ fontFamily: 'var(--font-subheading)' }}
          >
            About Me
          </motion.p>
          <h2 className="mb-6 text-[#1F2933]" style={{ fontFamily: 'var(--font-heading)' }}>
            Chuyên Môn Cốt Lõi
          </h2>
          <p className="text-[#52606D] max-w-2xl mx-auto leading-relaxed">
            Kết hợp chuyên môn sâu trong du lịch với kỹ năng phát triển kinh doanh và quản lý khách hàng
          </p>
        </motion.div>
        
        {/* Focus Areas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative p-8 hover:shadow-2xl transition-all duration-500 border-[#4FB6C6]/10 bg-white overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="mb-4 text-[#1F2933]" style={{ fontFamily: 'var(--font-subheading)' }}>
                    {area.title}
                  </h3>
                  <p className="text-[#52606D] leading-relaxed">
                    {area.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Travel Experience Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-28"
        >
          <div className="text-center mb-16">
            <p className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
              Real Experiences
            </p>
            <h2 className="mb-6 text-[#1F2933]" style={{ fontFamily: 'var(--font-heading)' }}>
              Trải Nghiệm Du Lịch
            </h2>
            <p className="text-[#52606D] max-w-2xl mx-auto leading-relaxed">
              Khám phá văn hóa và di sản qua những chuyến đi thực tế
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/70 via-[#1F2933]/30 to-transparent z-10"></div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src={travelImage1}
                alt="Tour Miền Trung - Di sản văn hóa"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Tour Miền Trung</h3>
                <p className="text-[#FDFEFE]/90">Khám phá di sản văn hóa Huế</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/70 via-[#1F2933]/30 to-transparent z-10"></div>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src={travelImage2}
                alt="Tour văn hóa - Kiến trúc truyền thống"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Kiến Trúc Truyền Thống</h3>
                <p className="text-[#FDFEFE]/90">Trải nghiệm văn hóa độc đáo</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 bg-gradient-to-br from-[#4FB6C6] to-[#7ECDD7] rounded-3xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
            <div className="relative z-10">
              <p className="text-3xl lg:text-4xl text-white leading-relaxed italic" style={{ fontFamily: 'var(--font-heading)' }}>
                "Tạo ra những trải nghiệm du lịch không chỉ đáng nhớ, mà còn mang lại giá trị bền vững cho khách hàng và đối tác"
              </p>
              <div className="mt-6 h-1 w-24 bg-[#F2C94C] mx-auto rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}