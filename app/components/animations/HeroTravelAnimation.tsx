import { motion } from "motion/react";

export function HeroTravelAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft flowing waves at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-1/3" preserveAspectRatio="none" viewBox="0 0 1200 300">
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDFEFE" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#F2C94C" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDFEFE" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4FB6C6" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M0,160 Q300,100 600,160 T1200,160 L1200,300 L0,300 Z"
          fill="url(#wave-gradient-1)"
          animate={{
            d: [
              "M0,160 Q300,100 600,160 T1200,160 L1200,300 L0,300 Z",
              "M0,140 Q300,180 600,140 T1200,140 L1200,300 L0,300 Z",
              "M0,160 Q300,100 600,160 T1200,160 L1200,300 L0,300 Z"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M0,200 Q300,140 600,200 T1200,200 L1200,300 L0,300 Z"
          fill="url(#wave-gradient-2)"
          animate={{
            d: [
              "M0,200 Q300,140 600,200 T1200,200 L1200,300 L0,300 Z",
              "M0,180 Q300,220 600,180 T1200,180 L1200,300 L0,300 Z",
              "M0,200 Q300,140 600,200 T1200,200 L1200,300 L0,300 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>

      {/* Floating travel elements */}
      {/* Airplanes */}
      {[
        { startX: "-10%", startY: "25%", endX: "110%", endY: "20%", duration: 25, delay: 0 },
        { startX: "-10%", startY: "60%", endX: "110%", endY: "55%", duration: 30, delay: 8 }
      ].map((plane, index) => (
        <motion.div
          key={`plane-${index}`}
          className="absolute"
          initial={{ x: plane.startX, y: plane.startY, opacity: 0 }}
          animate={{
            x: [plane.startX, plane.endX],
            y: [plane.startY, plane.endY],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{
            duration: plane.duration,
            repeat: Infinity,
            delay: plane.delay,
            ease: "linear",
            times: [0, 0.1, 0.9, 1]
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M35 20 L20 15 L8 12 L5 13 L12 18 L5 19 L2 17 L1 18 L4 21 L1 24 L2 25 L5 23 L12 24 L5 29 L8 30 L20 27 L35 22 L38 20 Z"
              fill="white"
              opacity="0.4"
            />
            {/* Contrail */}
            <motion.path
              d="M5 20 L-10 20"
              stroke="white"
              strokeWidth="1.5"
              opacity="0.2"
              strokeLinecap="round"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating compass */}
      <motion.div
        className="absolute"
        style={{ top: "15%", right: "10%" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="1" opacity="0.2" />
          <circle cx="30" cy="30" r="22" stroke="white" strokeWidth="0.5" opacity="0.15" />
          
          {/* Compass needle */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "30px 30px" }}
          >
            <path d="M30 10 L32 30 L30 50 L28 30 Z" fill="#F2C94C" opacity="0.6" />
            <path d="M30 10 L32 30 L30 50 L28 30 Z" fill="#4FB6C6" opacity="0.4" transform="rotate(180 30 30)" />
          </motion.g>
          
          <circle cx="30" cy="30" r="3" fill="white" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Floating location pins */}
      {[
        { x: "20%", y: "30%", delay: 0, color: "#F2C94C" },
        { x: "75%", y: "45%", delay: 2, color: "#4FB6C6" },
        { x: "45%", y: "70%", delay: 4, color: "#FDFEFE" }
      ].map((pin, index) => (
        <motion.div
          key={`pin-${index}`}
          className="absolute"
          style={{ left: pin.x, top: pin.y }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pin.delay
          }}
        >
          <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
            <path
              d="M15 0C8.5 0 3 5.5 3 12C3 20 15 35 15 35C15 35 27 20 27 12C27 5.5 21.5 0 15 0Z"
              fill={pin.color}
              opacity="0.3"
            />
            <circle cx="15" cy="12" r="5" fill={pin.color} opacity="0.5" />
            
            {/* Pulse effect */}
            <motion.circle
              cx="15"
              cy="12"
              r="8"
              stroke={pin.color}
              strokeWidth="1.5"
              fill="none"
              opacity="0"
              animate={{
                r: [8, 15],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: pin.delay,
                ease: "easeOut"
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating luggage/suitcase */}
      <motion.div
        className="absolute"
        style={{ left: "15%", bottom: "25%" }}
        animate={{
          y: [0, -25, 0],
          rotate: [-5, 5, -5]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <rect x="12" y="15" width="26" height="28" rx="3" fill="white" opacity="0.2" />
          <rect x="12" y="15" width="26" height="2" fill="white" opacity="0.3" />
          <rect x="12" y="30" width="26" height="1" fill="white" opacity="0.2" />
          <rect x="22" y="10" width="6" height="5" rx="1" fill="white" opacity="0.25" />
          <circle cx="18" cy="44" r="2" fill="white" opacity="0.3" />
          <circle cx="32" cy="44" r="2" fill="white" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Floating passport */}
      <motion.div
        className="absolute"
        style={{ right: "18%", top: "35%" }}
        animate={{
          y: [0, -18, 0],
          rotate: [0, 8, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <svg width="45" height="55" viewBox="0 0 45 55" fill="none">
          <rect x="5" y="5" width="35" height="45" rx="2" fill="white" opacity="0.15" />
          <rect x="5" y="5" width="35" height="45" rx="2" stroke="white" strokeWidth="0.5" opacity="0.25" />
          <circle cx="22.5" cy="22" r="8" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <rect x="12" y="35" width="21" height="2" rx="1" fill="white" opacity="0.2" />
          <rect x="12" y="40" width="16" height="2" rx="1" fill="white" opacity="0.2" />
        </svg>
      </motion.div>

      {/* Floating palm tree icon */}
      <motion.div
        className="absolute"
        style={{ left: "8%", top: "45%" }}
        animate={{
          y: [0, -12, 0],
          rotate: [-3, 3, -3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
          <rect x="18" y="20" width="4" height="25" rx="1" fill="white" opacity="0.2" />
          <path
            d="M20 15 Q 10 18, 12 25 M20 15 Q 30 18, 28 25 M20 15 Q 14 13, 8 18 M20 15 Q 26 13, 32 18"
            stroke="#F2C94C"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.3"
          />
        </svg>
      </motion.div>

      {/* Sparkles scattered around */}
      {[
        { x: "25%", y: "18%", delay: 0, size: 12 },
        { x: "65%", y: "25%", delay: 1.5, size: 10 },
        { x: "40%", y: "55%", delay: 3, size: 14 },
        { x: "80%", y: "65%", delay: 2, size: 11 },
        { x: "12%", y: "70%", delay: 0.5, size: 13 }
      ].map((sparkle, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute"
          style={{ left: sparkle.x, top: sparkle.y }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
        >
          <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 20 20" fill="none">
            <path
              d="M10 0 L11 9 L10 10 L9 9 Z M20 10 L11 11 L10 10 L11 9 Z M10 20 L9 11 L10 10 L11 11 Z M0 10 L9 9 L10 10 L9 11 Z"
              fill="white"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating camera icon */}
      <motion.div
        className="absolute"
        style={{ right: "25%", bottom: "30%" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, -8, 0]
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <svg width="45" height="40" viewBox="0 0 45 40" fill="none">
          <rect x="5" y="12" width="35" height="23" rx="3" fill="white" opacity="0.15" />
          <rect x="5" y="12" width="35" height="23" rx="3" stroke="white" strokeWidth="0.5" opacity="0.25" />
          <circle cx="22.5" cy="23" r="7" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <circle cx="22.5" cy="23" r="5" fill="white" opacity="0.15" />
          <rect x="15" y="8" width="15" height="4" rx="1" fill="white" opacity="0.2" />
          <circle cx="34" cy="17" r="2" fill="#F2C94C" opacity="0.4" />
        </svg>
      </motion.div>
    </div>
  );
}
