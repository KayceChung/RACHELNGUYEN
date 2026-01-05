import { Card } from "./ui/card";
import { Award } from "lucide-react";
import { SparkleEffect } from "./animations/SparkleEffect";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const achievements = [
    {
      title: "Top 5 Digital Business Competition",
      organization: "Vecom",
      year: "2023",
      icon: Award,
      color: "from-[#F2C94C] to-[#E8BB3A]"
    },
    {
      title: "Học bổng Hoa Sen Talent",
      organization: "Đại học Hoa Sen",
      year: "2023",
      icon: Award,
      color: "from-[#4FB6C6] to-[#7ECDD7]"
    },
    {
      title: "Giải 3 Hoa Sen Young Logistics",
      organization: "Đại học Hoa Sen",
      year: "2022",
      icon: Award,
      color: "from-[#4FB6C6] to-[#3A9AAA]"
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
    <section className="py-28 px-6 relative overflow-hidden" id="achievements" ref={ref}>
      {/* Sparkle Effect */}
      <SparkleEffect count={20} />
      
      {/* Bold teal background with geometric accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F6] via-[#D4EDF2] to-[#E8F4F6]"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#4FB6C6]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#4FB6C6]/30 to-transparent"></div>
      </div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#F2C94C]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#4FB6C6]/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
            Recognition
          </p>
          <h2 className="mb-6 text-[#1F2933]" style={{ fontFamily: 'var(--font-heading)' }}>
            Thành Tích
          </h2>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative p-6 hover:shadow-xl transition-all duration-500 text-center border-[#4FB6C6]/15 bg-white h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-[#1F2933] leading-snug" style={{ fontFamily: 'var(--font-subheading)' }}>
                    {achievement.title}
                  </h3>
                  
                  <p className="text-[#52606D] text-sm mb-4">
                    {achievement.organization}
                  </p>
                  
                  <div className={`inline-flex items-center px-4 py-1.5 bg-gradient-to-r ${achievement.color} rounded-full shadow-md`}>
                    <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-accent)' }}>
                      {achievement.year}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}