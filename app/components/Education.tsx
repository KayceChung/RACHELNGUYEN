import { Card } from "./ui/card";
import { GraduationCap, Award, Users } from "lucide-react";
import { FloatingIslands } from "./animations/FloatingIslands";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-28 px-6 relative overflow-hidden" id="education" ref={ref}>
      {/* Soft cream background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9E6] via-[#FFFEF9] to-[#FFF9E6]"></div>
      
      {/* Floating Islands Animation */}
      <FloatingIslands />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
            Background
          </p>
          <h2 className="mb-6 text-[#1F2933]" style={{ fontFamily: 'var(--font-heading)' }}>
            Học Vấn & Hoạt Động
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="p-6 hover:shadow-xl transition-all duration-500 border-[#4FB6C6]/15 bg-white h-full">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4FB6C6] to-[#7ECDD7] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-[#1F2933] text-lg" style={{ fontFamily: 'var(--font-subheading)' }}>
                    Đại học Hoa Sen
                  </h3>
                  <p className="text-[#4FB6C6] mb-2 font-medium">
                    Cử nhân Thương mại Điện tử
                  </p>
                  <p className="text-[#52606D] text-sm">
                    GPA: <span className="font-semibold text-[#F2C94C]">3.52/4</span>
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Card className="p-6 hover:shadow-xl transition-all duration-500 border-[#4FB6C6]/15 bg-white h-full">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F2C94C] to-[#E8BB3A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-[#1F2933] text-lg" style={{ fontFamily: 'var(--font-subheading)' }}>
                    Chứng chỉ Tiếng Anh
                  </h3>
                  <ul className="space-y-2 text-[#52606D] text-sm">
                    <li className="flex gap-2 items-start">
                      <span className="w-1 h-1 rounded-full bg-[#4FB6C6] mt-2 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#1F2933]">Aptis General:</span> CEFR Grade C</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="w-1 h-1 rounded-full bg-[#4FB6C6] mt-2 flex-shrink-0"></span>
                      <span><span className="font-semibold text-[#1F2933]">EF SET:</span> 63/100 - C1 Advanced</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Community Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8"
        >
          <Card className="p-8 border-[#4FB6C6]/15 bg-gradient-to-br from-white to-[#F6F8F7]/50 hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4FB6C6] to-[#7ECDD7] rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-[#1F2933] text-lg" style={{ fontFamily: 'var(--font-subheading)' }}>
                Dự Án Cộng Đồng
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#4FB6C6]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4FB6C6]/20 transition-colors">
                    <Users className="w-4 h-4 text-[#4FB6C6]" />
                  </div>
                  <div>
                    <h4 className="text-[#1F2933] font-medium mb-1">Ngày hội Cù Lao Chàm</h4>
                    <p className="text-[#52606D] text-sm">Hoạt động bảo vệ môi trường biển</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#4FB6C6]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#4FB6C6]/20 transition-colors">
                    <Users className="w-4 h-4 text-[#4FB6C6]" />
                  </div>
                  <div>
                    <h4 className="text-[#1F2933] font-medium mb-1">Trung Thu Yêu Thương 2023</h4>
                    <p className="text-[#52606D] text-sm">Mang Trung thu đến trẻ em khó khăn</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}