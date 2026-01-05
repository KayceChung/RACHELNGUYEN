import { Card } from "./ui/card";
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Target, 
  MessageSquare, 
  Lightbulb, 
  HandshakeIcon, 
  Clock 
} from "lucide-react";
import { GlobeNetwork } from "./animations/GlobeNetwork";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// Technical skills data
const technicalSkills = [
  {
    icon: TrendingUp,
    title: "Business Development",
    color: "from-[#4FB6C6] to-[#7ECDD7]",
    skills: ["Strategic Planning", "Market Analysis", "Partnership Development", "Revenue Growth"]
  },
  {
    icon: Users,
    title: "Customer Services",
    color: "from-[#F2C94C] to-[#FFD966]",
    skills: ["Service Excellence", "Client Relations", "Issue Resolution", "Quality Assurance"]
  },
  {
    icon: Target,
    title: "Tour Operations",
    color: "from-[#4FB6C6] to-[#F2C94C]",
    skills: ["Tour Planning", "Itinerary Design", "Vendor Management", "Operations Control"]
  },
  {
    icon: MessageSquare,
    title: "Communication",
    color: "from-[#7ECDD7] to-[#4FB6C6]",
    skills: ["Vietnamese (Native)", "English (Fluent)", "Chinese (Basic)", "Cross-Cultural"]
  }
];

// Soft skills data
const softSkills = [
  { icon: Lightbulb, name: "Problem Solving" },
  { icon: HandshakeIcon, name: "Relationship Building" },
  { icon: Target, name: "Goal-Oriented" },
  { icon: Clock, name: "Time Management" },
  { icon: Users, name: "Team Leadership" },
  { icon: MessageSquare, name: "Negotiation" },
  { icon: CheckCircle2, name: "Detail-Oriented" },
  { icon: TrendingUp, name: "Adaptability" }
];

// Animation variants
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

export function Skills() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-28 px-6 relative overflow-hidden" id="skills" ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8F6F8] via-white to-[#FFF9E6]"></div>
      
      {/* Globe Network Animation */}
      <GlobeNetwork />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#F2C94C] uppercase tracking-[0.2em] mb-4 text-sm" style={{ fontFamily: 'var(--font-subheading)' }}>
            Expertise
          </p>
          <h2 className="mb-6 text-[#1F2933]" style={{ fontFamily: 'var(--font-heading)' }}>
            Kỹ Năng
          </h2>
        </motion.div>
        
        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {technicalSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative p-6 hover:shadow-xl transition-all duration-500 border-[#4FB6C6]/15 bg-white overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="mb-3 text-[#1F2933] text-lg" style={{ fontFamily: 'var(--font-subheading)' }}>
                        {skill.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2">
                        {skill.skills.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-[#F6F8F7] text-[#52606D] rounded-full text-sm hover:bg-[#4FB6C6]/10 hover:text-[#4FB6C6] transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-[#1F2933] text-xl" style={{ fontFamily: 'var(--font-subheading)' }}>
              Kỹ Năng Mềm
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="group p-5 hover:shadow-lg transition-all duration-500 border-[#4FB6C6]/15 bg-white text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4FB6C6] to-[#7ECDD7] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-[#1F2933] text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                      {skill.name}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
