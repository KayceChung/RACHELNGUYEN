import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'vi' | 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

// Translations object
const translations = {
  vi: {
    nav: {
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      skills: "Kỹ năng",
      achievements: "Thành tích",
      education: "Học vấn",
      portfolio: "Portfolio",
      contact: "Liên hệ"
    },
    hero: {
      greeting: "Xin chào, tôi là",
      name: "Rachel Nguyễn",
      title: "Chuyên gia Du lịch & Phát triển Kinh doanh",
      description: "Chuyên môn sâu trong Phát triển Kinh doanh, Quản lý Dịch vụ Khách hàng, và Quản lý Tài khoản với tập trung vào ngành Du lịch",
      cta: "Xem Portfolio",
      viewCV: "Xem CV"
    },
    about: {
      tag: "About Me",
      title: "Về Tôi",
      description: "Là một chuyên gia nhiệt huyết trong ngành Du lịch, tôi kết hợp kỹ năng Phát triển Kinh doanh, Quản lý Dịch vụ Khách hàng xuất sắc để tạo ra trải nghiệm khách hàng đặc biệt. Với nền tảng Thương mại Điện tử và kinh nghiệm đa dạng trong du lịch, tôi luôn sẵn sàng đóng góp vào thành công của tổ chức.",
      focus: {
        title: "Lĩnh vực Tập trung",
        business: "Business Development",
        customer: "Customer Services Management",
        account: "Account Management"
      },
      core: {
        title: "Năng lực Cốt lõi",
        planning: "Lập kế hoạch Chiến lược",
        relationship: "Quản lý Quan hệ",
        operations: "Vận hành Tour",
        dataAnalysis: "Phân tích Dữ liệu"
      }
    },
    experience: {
      tag: "Professional Journey",
      title: "Kinh Nghiệm Làm Việc",
      description: "Tập trung vào ngành Du lịch và Phát triển Kinh doanh",
      current: "Hiện tại",
      positions: {
        hk: {
          title: "Trưởng phòng Chăm sóc Khách hàng",
          company: "HK Business and Tours",
          location: "TP. Hồ Chí Minh",
          highlights: [
            "Lập kế hoạch hành trình du lịch cá nhân hóa và sắp xếp dịch vụ",
            "Giải quyết thắc mắc và khiếu nại khách hàng kịp thời",
            "Giám sát vận hành tour đảm bảo chất lượng dịch vụ",
            "Phát triển kiến thức sâu về điểm đến và sản phẩm du lịch"
          ]
        },
        tangavi: {
          title: "Thực tập sinh Phát triển Kinh doanh",
          company: "Tangavi JSC",
          location: "TP. Hồ Chí Minh",
          highlights: [
            "Tạo slide giới thiệu sản phẩm cho khách hàng tiềm năng",
            "Thu thập yêu cầu và tạo quy trình cho bộ phận phát triển",
            "Phát triển tài liệu hướng dẫn sử dụng sản phẩm"
          ]
        },
        jma: {
          title: "Trợ lý Dự án",
          company: "JMA Global - J Autumn Fashion Show",
          location: "Remote",
          highlights: [
            "Quản lý hợp tác với nhà cung cấp và nhà tài trợ",
            "Nghiên cứu thị trường và đề xuất đối tác phù hợp",
            "Liên hệ thuyết phục nhà tài trợ cho sự kiện"
          ]
        }
      }
    },
    skills: {
      tag: "Expertise",
      title: "Kỹ Năng",
      technical: {
        office: {
          title: "Tin học văn phòng",
          items: ["MS Office", "PowerPoint", "Excel"]
        },
        english: {
          title: "Tiếng Anh",
          items: ["CEFR Grade C", "EF SET C1", "Giao tiếp thành thạo"]
        }
      },
      soft: {
        title: "Kỹ Năng Mềm",
        communication: "Giao tiếp",
        creative: "Sáng tạo",
        development: "Phát triển",
        persuasion: "Thuyết phục"
      }
    },
    achievements: {
      tag: "Recognition",
      title: "Thành Tích",
      items: {
        vecom: {
          title: "Top 5 Digital Business Competition",
          organization: "Vecom"
        },
        scholarship: {
          title: "Học bổng Hoa Sen Talent",
          organization: "Đại học Hoa Sen"
        },
        logistics: {
          title: "Giải 3 Hoa Sen Young Logistics",
          organization: "Đại học Hoa Sen"
        }
      }
    },
    education: {
      tag: "Background",
      title: "Học Vấn & Hoạt Động",
      university: {
        name: "Đại học Hoa Sen",
        degree: "Cử nhân Thương mại Điện tử",
        gpa: "GPA"
      },
      certificates: {
        title: "Chứng chỉ Tiếng Anh",
        aptis: "Aptis General",
        efset: "EF SET"
      },
      community: {
        title: "Dự Án Cộng Đồng",
        culao: {
          title: "Ngày hội Cù Lao Chàm",
          description: "Hoạt động bảo vệ môi trường biển"
        },
        midautumn: {
          title: "Trung Thu Yêu Thương 2023",
          description: "Mang Trung thu đến trẻ em khó khăn"
        }
      }
    },
    contact: {
      tag: "Get In Touch",
      title: "Liên Hệ",
      description: "Sẵn sàng cho cơ hội mới trong ngành Du lịch",
      email: "Email",
      phone: "Điện thoại",
      linkedin: "LinkedIn",
      cta: "Gửi Email",
      download: "Tải CV"
    },
    portfolio: {
      tag: "Case Studies",
      title: "Portfolio Du Lịch",
      description: "Những dự án du lịch thành công đã thực hiện",
      backHome: "Về trang chủ",
      caseStudy: {
        client: "Khách hàng",
        duration: "Thời gian",
        location: "Địa điểm",
        groupSize: "Số người",
        challenges: "Thách thức",
        solutions: "Giải pháp",
        results: "Kết quả"
      },
      projects: {
        centralVietnam: {
          title: "Tour Miền Trung - Khách đoàn 15 người",
          client: "Gia đình & Bạn bè",
          duration: "5 ngày 4 đêm",
          location: "Huế - Đà Nẵng - Hội An",
          groupSize: "15 người",
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
      }
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      achievements: "Achievements",
      education: "Education",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Rachel Nguyen",
      title: "Travel Expert & Business Development",
      description: "Deep expertise in Business Development, Customer Services Management, and Account Management with focus on Tourism industry",
      cta: "View Portfolio",
      viewCV: "View CV"
    },
    about: {
      tag: "About Me",
      title: "About Me",
      description: "As a passionate professional in the Tourism industry, I combine Business Development skills with excellent Customer Service Management to create exceptional customer experiences. With a background in E-commerce and diverse experience in travel, I'm ready to contribute to organizational success.",
      focus: {
        title: "Focus Areas",
        business: "Business Development",
        customer: "Customer Services Management",
        account: "Account Management"
      },
      core: {
        title: "Core Competencies",
        planning: "Strategic Planning",
        relationship: "Relationship Management",
        operations: "Tour Operations",
        dataAnalysis: "Data Analysis"
      }
    },
    experience: {
      tag: "Professional Journey",
      title: "Work Experience",
      description: "Focused on Tourism and Business Development",
      current: "Current",
      positions: {
        hk: {
          title: "Head of Customer Services",
          company: "HK Business and Tours",
          location: "Ho Chi Minh City",
          highlights: [
            "Plan personalized travel itineraries and arrange services",
            "Resolve customer inquiries and complaints promptly",
            "Monitor tour operations to ensure service quality",
            "Develop deep knowledge of destinations and travel products"
          ]
        },
        tangavi: {
          title: "Business Development Intern",
          company: "Tangavi JSC",
          location: "Ho Chi Minh City",
          highlights: [
            "Create product presentation slides for potential clients",
            "Gather requirements and create workflows for development team",
            "Develop product user guides and documentation"
          ]
        },
        jma: {
          title: "Project Assistant",
          company: "JMA Global - J Autumn Fashion Show",
          location: "Remote",
          highlights: [
            "Manage partnerships with vendors and sponsors",
            "Research market and propose suitable partners",
            "Contact and persuade sponsors for events"
          ]
        }
      }
    },
    skills: {
      tag: "Expertise",
      title: "Skills",
      technical: {
        office: {
          title: "Office Suite",
          items: ["MS Office", "PowerPoint", "Excel"]
        },
        english: {
          title: "English",
          items: ["CEFR Grade C", "EF SET C1", "Fluent Communication"]
        }
      },
      soft: {
        title: "Soft Skills",
        communication: "Communication",
        creative: "Creative",
        development: "Development",
        persuasion: "Persuasion"
      }
    },
    achievements: {
      tag: "Recognition",
      title: "Achievements",
      items: {
        vecom: {
          title: "Top 5 Digital Business Competition",
          organization: "Vecom"
        },
        scholarship: {
          title: "Hoa Sen Talent Scholarship",
          organization: "Hoa Sen University"
        },
        logistics: {
          title: "3rd Prize Hoa Sen Young Logistics",
          organization: "Hoa Sen University"
        }
      }
    },
    education: {
      tag: "Background",
      title: "Education & Activities",
      university: {
        name: "Hoa Sen University",
        degree: "Bachelor of E-Commerce",
        gpa: "GPA"
      },
      certificates: {
        title: "English Certificates",
        aptis: "Aptis General",
        efset: "EF SET"
      },
      community: {
        title: "Community Projects",
        culao: {
          title: "Cu Lao Cham Festival",
          description: "Marine environmental protection activities"
        },
        midautumn: {
          title: "Mid-Autumn of Love 2023",
          description: "Bringing Mid-Autumn to disadvantaged children"
        }
      }
    },
    contact: {
      tag: "Get In Touch",
      title: "Contact",
      description: "Ready for new opportunities in the Tourism industry",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      cta: "Send Email",
      download: "Download CV"
    },
    portfolio: {
      tag: "Case Studies",
      title: "Travel Portfolio",
      description: "Successful travel projects delivered",
      backHome: "Back to Home",
      caseStudy: {
        client: "Client",
        duration: "Duration",
        location: "Location",
        groupSize: "Group Size",
        challenges: "Challenges",
        solutions: "Solutions",
        results: "Results"
      },
      projects: {
        centralVietnam: {
          title: "Central Vietnam Tour - 15 Pax Group",
          client: "Family & Friends",
          duration: "5 days 4 nights",
          location: "Hue - Da Nang - Hoi An",
          groupSize: "15 people",
          challenges: [
            "Plan itinerary suitable for different age groups",
            "Find restaurants and hotels meeting quality standards",
            "Coordinate flexible timing for activities"
          ],
          solutions: [
            "Design balanced itinerary between cultural tours and rest",
            "Pre-book services with reputable, highly-rated partners",
            "Arrange private 16-seater for convenient transportation",
            "Prepare contingency plans for bad weather"
          ],
          results: [
            "100% customer satisfaction with services",
            "Received 5-star rating from customers",
            "Customers returned for next trips"
          ]
        }
      }
    }
  },
  zh: {
    nav: {
      about: "关于",
      experience: "经验",
      skills: "技能",
      achievements: "成就",
      education: "教育",
      portfolio: "作品集",
      contact: "联系"
    },
    hero: {
      greeting: "你好，我是",
      name: "Rachel Nguyen",
      title: "旅游专家与业务发展",
      description: "在业务发展、客户服务管理和客户管理方面拥有深厚的专业知识，专注于旅游行业",
      cta: "查看作品集",
      viewCV: "查看简历"
    },
    about: {
      tag: "关于我",
      title: "关于我",
      description: "作为旅游行业的热情专业人士，我结合业务发展技能和出色的客户服务管理，创造卓越的客户体验。凭借电子商务背景和旅游行业的多元经验，我随时准备为组织的成功做出贡献。",
      focus: {
        title: "专注领域",
        business: "业务发展",
        customer: "客户服务管理",
        account: "客户管��"
      },
      core: {
        title: "核心能力",
        planning: "战略规划",
        relationship: "关系管理",
        operations: "旅游运营",
        dataAnalysis: "数据分析"
      }
    },
    experience: {
      tag: "职业历程",
      title: "工作经验",
      description: "专注于旅游和业务发展",
      current: "现在",
      positions: {
        hk: {
          title: "客户服务主管",
          company: "HK Business and Tours",
          location: "胡志明市",
          highlights: [
            "规划个性化旅行行程并安排服务",
            "及时解决客户咨询和投诉",
            "监督旅游运营以确保服务质量",
            "深入了解目的地和旅游产品"
          ]
        },
        tangavi: {
          title: "业务发展实习生",
          company: "Tangavi JSC",
          location: "胡志明市",
          highlights: [
            "为潜在客户创建产品演示幻灯片",
            "收集需求并为开发团队创建工作流程",
            "开发产品用户指南和文档"
          ]
        },
        jma: {
          title: "项目助理",
          company: "JMA Global - J Autumn Fashion Show",
          location: "远程",
          highlights: [
            "管理与供应商和赞助商的合作伙伴关系",
            "研究市场并提出合适的合作伙伴",
            "联系并说服活动赞助商"
          ]
        }
      }
    },
    skills: {
      tag: "专业知识",
      title: "技能",
      technical: {
        office: {
          title: "办公软件",
          items: ["MS Office", "PowerPoint", "Excel"]
        },
        english: {
          title: "英语",
          items: ["CEFR C级", "EF SET C1", "流利交流"]
        }
      },
      soft: {
        title: "软技能",
        communication: "沟通",
        creative: "创意",
        development: "发展",
        persuasion: "说服"
      }
    },
    achievements: {
      tag: "认可",
      title: "成就",
      items: {
        vecom: {
          title: "数字商业竞赛前5名",
          organization: "Vecom"
        },
        scholarship: {
          title: "Hoa Sen人才奖学金",
          organization: "Hoa Sen大学"
        },
        logistics: {
          title: "Hoa Sen青年物流第三名",
          organization: "Hoa Sen大学"
        }
      }
    },
    education: {
      tag: "背景",
      title: "教育与活动",
      university: {
        name: "Hoa Sen大学",
        degree: "电子商务学士",
        gpa: "GPA"
      },
      certificates: {
        title: "英语证书",
        aptis: "Aptis General",
        efset: "EF SET"
      },
      community: {
        title: "社区项目",
        culao: {
          title: "Cu Lao Cham节",
          description: "海洋环境保护活动"
        },
        midautumn: {
          title: "2023爱心中秋节",
          description: "为贫困儿童带来中秋节"
        }
      }
    },
    contact: {
      tag: "联系我",
      title: "联系",
      description: "准备好在旅游行业迎接新机遇",
      email: "电子邮件",
      phone: "电话",
      linkedin: "LinkedIn",
      cta: "发送邮件",
      download: "下载简历"
    },
    portfolio: {
      tag: "案例研究",
      title: "旅游作品集",
      description: "成功交付的旅游项目",
      backHome: "返回主页",
      caseStudy: {
        client: "客户",
        duration: "时长",
        location: "地点",
        groupSize: "团队规模",
        challenges: "挑战",
        solutions: "解决方案",
        results: "结果"
      },
      projects: {
        centralVietnam: {
          title: "越南中部游 - 15人团",
          client: "家人和朋友",
          duration: "5天4夜",
          location: "顺化 - 岘港 - 会安",
          groupSize: "15人",
          challenges: [
            "规划适合不同年龄段的行程",
            "寻��符合质量标准的餐厅和酒店",
            "为活动协调灵活的时间安排"
          ],
          solutions: [
            "设计文化游览和休息之间平衡的行程",
            "提前预订信誉良好、评价高的合作伙伴服务",
            "安排私人16座车辆以方便交通",
            "为恶劣天气准备应急计划"
          ],
          results: [
            "100%客户对服务满意",
            "获得客户5星评价",
            "客户再次使用服务进行下一次旅行"
          ]
        }
      }
    }
  }
};
