import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import { AnimatedGradient } from "./animations/AnimatedGradient";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Trưởng phòng Chăm sóc Khách hàng",
      company: "HK Business and Tours",
      location: "TP. Hồ Chí Minh",
      period: "08/2024 - Hiện tại",
      current: true,
      highlights: [
        "Lập kế hoạch hành trình du lịch cá nhân hóa và sắp xếp dịch vụ",
        "Giải quyết thắc mắc và khiếu nại khách hàng kịp thời",
        "Giám sát vận hành tour đảm bảo chất lượng dịch vụ",
        "Phát triển kiến thức sâu về điểm đến và sản phẩm du lịch"
      ]
    },
    {
      title: "Thực tập sinh Phát triển Kinh doanh",
      company: "Tangavi JSC",
      location: "TP. Hồ Chí Minh",
      period: "02/2024 - 07/2024",
      highlights: [
        "Tạo slide giới thiệu sản phẩm cho khách hàng tiềm năng",
        "Thu thập yêu cầu và tạo quy trình cho bộ phận phát triển",
        "Phát triển tài liệu hướng dẫn sử dụng sản phẩm"
      ]
    },
    {
      title: "Trợ lý Dự án",
      company: "JMA Global - J Autumn Fashion Show",
      location: "Remote",
      period: "08/2022 - 10/2022",
      highlights: [
        "Quản lý hợp tác với nhà cung cấp và nhà tài trợ",
        "Nghiên cứu thị trường và đề xuất đối tác phù hợp",
        "Liên hệ thuyết phục nhà tài trợ cho sự kiện"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  return (
    <section className="py-28 px-6 relative overflow-hidden" id="experience" ref={ref}>
      {/* Animated Gradient Background */}
      <AnimatedGradient />
      
      {/* Layered background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F8F7] to-[#E8F4F6]"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #4FB6C6 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4FB6C6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F2C94C]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
            Professional Journey
          </p>
          <h2 className="mb-6 text-[#1F2933]" style={{ fontFamily: 'var(--font-heading)' }}>
            Kinh Nghiệm Làm Việc
          </h2>
          <p className="text-[#52606D] max-w-2xl mx-auto leading-relaxed">
            Tập trung vào ngành Du lịch và Phát triển Kinh doanh
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group relative p-6 hover:shadow-xl transition-all duration-500 border-[#4FB6C6]/15 bg-white h-full flex flex-col">
                {/* Icon */}
                <div className="mb-5">
                  <div className={`w-12 h-12 ${exp.current ? 'bg-gradient-to-br from-[#F2C94C] to-[#E8BB3A]' : 'bg-gradient-to-br from-[#4FB6C6] to-[#7ECDD7]'} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 mb-5">
                  <h3 className="text-[#1F2933] mb-3 text-lg leading-snug" style={{ fontFamily: 'var(--font-subheading)' }}>
                    {exp.title}
                  </h3>
                  <p className="text-[#4FB6C6] mb-2 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                    {exp.company}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-2 text-[#52606D] text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.current && (
                      <span className="bg-gradient-to-r from-[#F2C94C] to-[#E8BB3A] text-[#1F2933] border-0 text-xs px-2 py-0.5 rounded-full font-medium">
                        Hiện tại
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-[#52606D] text-xs mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                  
                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-[#52606D] text-sm leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#4FB6C6] mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}