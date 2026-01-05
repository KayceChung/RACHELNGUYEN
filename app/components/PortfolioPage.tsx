import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, CheckCircle, Star, ArrowLeft, Calendar, Users } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { AnimatedWaves } from "./animations/AnimatedWaves";
import { FloatingParticles } from "./animations/FloatingParticles";
import travelImage from "figma:asset/8d9c74d0a4246c0698528064b2dafad914b5065c.png";

interface PortfolioPageProps {
  onNavigateHome: () => void;
}

export function PortfolioPage({ onNavigateHome }: PortfolioPageProps) {
  const caseStudies = [
    {
      title: "Tour Miền Trung - Khách đoàn 15 người",
      client: "Gia đình & Bạn bè",
      duration: "5 ngày 4 đêm",
      location: "Huế - Đà Nẵng - Hội An",
      groupSize: "15 người",
      image: travelImage,
      challenges: [
        "Lập kế hoạch hành trình phù hợp với nhiều độ tuổi khác nhau",
        "Tìm kiếm nhà hàng và khách sạn đáp ứng tiêu chuẩn chất lượng",
        "Điều phối thời gian linh hoạt cho các hoạt động"
      ],
      solutions: [
        "Thiết kế lịch trình cân bằng giữa tham quan văn hóa và nghỉ ngơi",
        "Đặt trước các dịch vụ với đối tác uy tín, có đánh giá cao",
        "Sắp xếp xe riêng 16 chỗ để di chuyển thuận tiện",
        "Chuẩn bị kế hoạch dự phòng cho thời tiết xấu"
      ],
      results: [
        "100% khách hàng hài lòng với dịch vụ",
        "Nhận được đánh giá 5 sao từ khách hàng",
        "Khách hàng quay lại sử dụng dịch vụ cho chuyến đi tiếp theo"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFEFE]">
      {/* Header with Animated Background */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-[#4FB6C6] to-[#7ECDD7] text-white py-20 px-6 overflow-hidden"
      >
        {/* Animated Waves Background */}
        <AnimatedWaves />
        
        {/* Floating Particles */}
        <FloatingParticles count={20} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Button
            onClick={onNavigateHome}
            variant="ghost"
            className="mb-8 text-white hover:bg-white/20 border border-white/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Về trang chủ
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
              Case Studies
            </p>
            <h1 className="mb-6 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Portfolio Du Lịch
            </h1>
            <p className="text-white/95 text-xl max-w-2xl leading-relaxed">
              Những dự án du lịch thành công đã thực hiện
            </p>
          </motion.div>
        </div>
      </motion.header>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              <Card className="overflow-hidden border-[#4FB6C6]/15 bg-white shadow-xl">
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div>
                    <h2 className="mb-4 text-[#1F2933]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {study.title}
                    </h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-[#52606D]">
                        <Users className="w-4 h-4 text-[#4FB6C6]" />
                        <span className="text-sm">{study.client} · {study.groupSize}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#52606D]">
                        <Calendar className="w-4 h-4 text-[#4FB6C6]" />
                        <span className="text-sm">{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#52606D]">
                        <MapPin className="w-4 h-4 text-[#4FB6C6]" />
                        <span className="text-sm">{study.location}</span>
                      </div>
                    </div>
                  </div>

                  {study.image && (
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-3 gap-8 p-8 bg-[#F6F8F7]/50">
                  {/* Challenges */}
                  <div>
                    <h3 className="mb-4 text-[#1F2933] flex items-center gap-2" style={{ fontFamily: 'var(--font-subheading)' }}>
                      <span className="w-8 h-8 bg-gradient-to-br from-[#4FB6C6] to-[#7ECDD7] rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">⚡</span>
                      </span>
                      Thách thức
                    </h3>
                    <ul className="space-y-2">
                      {study.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex gap-2 text-[#52606D] text-sm leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-[#4FB6C6] mt-2 flex-shrink-0"></span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h3 className="mb-4 text-[#1F2933] flex items-center gap-2" style={{ fontFamily: 'var(--font-subheading)' }}>
                      <span className="w-8 h-8 bg-gradient-to-br from-[#F2C94C] to-[#E8BB3A] rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">💡</span>
                      </span>
                      Giải pháp
                    </h3>
                    <ul className="space-y-2">
                      {study.solutions.map((solution, idx) => (
                        <li key={idx} className="flex gap-2 text-[#52606D] text-sm leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-[#F2C94C] flex-shrink-0 mt-0.5" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="mb-4 text-[#1F2933] flex items-center gap-2" style={{ fontFamily: 'var(--font-subheading)' }}>
                      <span className="w-8 h-8 bg-gradient-to-br from-[#4FB6C6] to-[#3A9AAA] rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </span>
                      Kết quả
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex gap-2 text-[#52606D] text-sm leading-relaxed">
                          <Star className="w-4 h-4 text-[#4FB6C6] flex-shrink-0 mt-0.5" fill="#4FB6C6" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}