import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Users, Star, CheckCircle } from "lucide-react";
const travelImage = "/RACHELNGUYEN/asset/z7399693833478_e40ce35126c165fa0528ed2d2af5d8db.jpg";

export function Portfolio() {
  const caseStudies = [
    {
      title: "Tour Miền Trung - Khách đoàn 15 người",
      client: "Gia đình & Bạn bè",
      duration: "5 ngày 4 đêm",
      location: "Huế - Đà Nẵng - Hội An",
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
        "Khách hàng quay lại sử dụng dịch vụ cho chuyến đi tiếp theo",
        "Được giới thiệu cho 3 nhóm khách hàng mới"
      ]
    },
    {
      title: "Tour Phú Quốc - Honeymoon Package",
      client: "Cặp đôi mới cưới",
      duration: "4 ngày 3 đêm",
      location: "Phú Quốc",
      challenges: [
        "Tạo trải nghiệm lãng mạn và riêng tư",
        "Ngân sách hạn chế nhưng mong muốn chất lượng cao",
        "Thời gian đặt tour gấp (2 tuần trước)"
      ],
      solutions: [
        "Tư vấn resort 4 sao có ưu đãi honeymoon package",
        "Sắp xếp bữa tối riêng tư trên bãi biển với giá ưu đãi",
        "Thêm các hoạt động miễn phí như ngắm hoàng hôn, đi bộ trên bãi biển",
        "Phối hợp với resort trang trí phòng đặc biệt"
      ],
      results: [
        "Tiết kiệm 20% chi phí nhờ đàm phán với đối tác",
        "Cặp đôi cực kỳ hài lòng với trải nghiệm lãng mạn",
        "Nhận được phản hồi tích cực trên mạng xã hội",
        "Tạo mối quan hệ dài hạn với resort partner"
      ]
    },
    {
      title: "Business Tour Seoul - Đoàn công ty 8 người",
      client: "Công ty Công nghệ",
      duration: "3 ngày 2 đêm",
      location: "Seoul, Hàn Quốc",
      challenges: [
        "Kết hợp giữa công việc và du lịch",
        "Yêu cầu cao về dịch vụ và thời gian",
        "Cần hỗ trợ ngôn ngữ và văn hóa kinh doanh"
      ],
      solutions: [
        "Sắp xếp khách sạn gần khu vực họp",
        "Lên lịch tham quan linh hoạt sau giờ làm việc",
        "Liên hệ hướng dẫn viên am hiểu văn hóa kinh doanh Hàn Quốc",
        "Đặt nhà hàng phù hợp cho business dinner"
      ],
      results: [
        "Đoàn hoàn thành tốt cả mục tiêu công việc và du lịch",
        "Công ty đăng ký làm khách hàng thường xuyên",
        "Mở rộng quan hệ với các công ty du lịch tại Hàn Quốc",
        "Nhận được thưởng từ công ty cho dịch vụ xuất sắc"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Portfolio - Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những dự án du lịch tiêu biểu mà tôi đã thực hiện, từ lập kế hoạch đến vận hành 
            và chăm sóc khách hàng
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="grid md:grid-cols-5 gap-6">
                {/* Image section - only for first case that has image */}
                {study.image && (
                  <div className="md:col-span-2">
                    <div className="h-64 md:h-full">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                {/* Content section */}
                <div className={`p-6 ${study.image ? 'md:col-span-3' : 'md:col-span-5'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="mb-2">{study.title}</h3>
                      <p className="text-blue-600">{study.client}</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      {study.duration}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>{study.location}</span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Challenges */}
                    <div>
                      <h4 className="mb-3 text-orange-600">Thử thách</h4>
                      <ul className="space-y-2">
                        {study.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-gray-700">
                            <span className="text-orange-500 mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="mb-3 text-blue-600">Giải pháp</h4>
                      <ul className="space-y-2">
                        {study.solutions.map((solution, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="mb-3 text-green-600">Kết quả</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-gray-700">
                            <Star className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <div className="text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Tours đã thực hiện</p>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <div className="text-blue-600 mb-2">98%</div>
            <p className="text-gray-600">Khách hàng hài lòng</p>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <div className="text-blue-600 mb-2">200+</div>
            <p className="text-gray-600">Khách hàng đã phục vụ</p>
          </Card>
          <Card className="p-6 text-center bg-white/80 backdrop-blur">
            <div className="text-blue-600 mb-2">4.9/5</div>
            <p className="text-gray-600">Đánh giá trung bình</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
