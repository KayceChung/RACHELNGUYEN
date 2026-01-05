import { motion } from "motion/react";

export function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          {/* Enhanced gradient for waves */}
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4FB6C6" stopOpacity="0.4">
              <animate attributeName="stopOpacity" values="0.4;0.6;0.4" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#7ECDD7" stopOpacity="0.3">
              <animate attributeName="stopOpacity" values="0.3;0.5;0.3" dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#4FB6C6" stopOpacity="0.4">
              <animate attributeName="stopOpacity" values="0.4;0.6;0.4" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F2C94C" stopOpacity="0.25">
              <animate attributeName="stopOpacity" values="0.25;0.4;0.25" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#FFD966" stopOpacity="0.2">
              <animate attributeName="stopOpacity" values="0.2;0.35;0.2" dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#F2C94C" stopOpacity="0.25">
              <animate attributeName="stopOpacity" values="0.25;0.4;0.25" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          {/* Foam/bubbles pattern */}
          <radialGradient id="foam-gradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Background wave - slowest */}
        <motion.path
          d="M0,150 Q400,100 800,150 T1600,150 T2400,150 T3200,150 V400 H0 Z"
          fill="url(#wave-gradient-1)"
          initial={{ x: 0 }}
          animate={{ x: -800 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Mid wave 1 */}
        <motion.path
          d="M0,100 Q350,60 700,100 T1400,100 T2100,100 T2800,100 V400 H0 Z"
          fill="url(#wave-gradient-2)"
          initial={{ x: -700 }}
          animate={{ x: 0 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Mid wave 2 */}
        <motion.path
          d="M0,180 Q300,140 600,180 T1200,180 T1800,180 T2400,180 V400 H0 Z"
          fill="url(#wave-gradient-1)"
          opacity="0.5"
          initial={{ x: 0 }}
          animate={{ x: -600 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Front wave - fastest */}
        <motion.path
          d="M0,80 Q250,40 500,80 T1000,80 T1500,80 T2000,80 V400 H0 Z"
          fill="url(#wave-gradient-2)"
          opacity="0.6"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Foam particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.circle
            key={i}
            r={Math.random() * 4 + 2}
            fill="url(#foam-gradient)"
            initial={{ 
              cx: Math.random() * 2000,
              cy: 60 + Math.random() * 100
            }}
            animate={{
              cx: [Math.random() * 2000, Math.random() * 2000 + 100],
              cy: [60 + Math.random() * 100, 50 + Math.random() * 100],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </svg>
    </div>
  );
}