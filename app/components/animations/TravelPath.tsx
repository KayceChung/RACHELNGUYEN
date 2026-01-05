import { motion } from "motion/react";

export function TravelPath() {
  // Create curved path points for airplane trajectory
  const pathPoints = [
    { x: "5%", y: "20%" },
    { x: "25%", y: "15%" },
    { x: "45%", y: "25%" },
    { x: "65%", y: "18%" },
    { x: "85%", y: "22%" },
    { x: "95%", y: "15%" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradient for path */}
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4FB6C6" stopOpacity="0" />
            <stop offset="50%" stopColor="#4FB6C6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F2C94C" stopOpacity="0" />
          </linearGradient>

          {/* Dashed line pattern */}
          <pattern id="dash-pattern" patternUnits="userSpaceOnUse" width="20" height="4">
            <rect width="12" height="2" fill="#4FB6C6" opacity="0.3" />
          </pattern>
        </defs>

        {/* Flight path - curved dashed line */}
        <motion.path
          d="M 50 200 Q 300 100, 600 180 T 1200 160 T 1800 200"
          stroke="url(#path-gradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="15 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1]
          }}
        />

        {/* Secondary path */}
        <motion.path
          d="M 100 400 Q 400 320, 800 380 T 1400 350 T 2000 420"
          stroke="url(#path-gradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.4, 0.4, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </svg>

      {/* Animated airplanes */}
      {[0, 1].map((planeIndex) => (
        <motion.div
          key={`plane-${planeIndex}`}
          className="absolute"
          style={{
            left: "5%",
            top: planeIndex === 0 ? "20%" : "40%"
          }}
          animate={{
            left: ["5%", "25%", "45%", "65%", "85%", "105%"],
            top: planeIndex === 0 
              ? ["20%", "15%", "25%", "18%", "22%", "15%"]
              : ["40%", "32%", "38%", "35%", "42%", "35%"]
          }}
          transition={{
            duration: planeIndex === 0 ? 12 : 15,
            repeat: Infinity,
            ease: "linear",
            delay: planeIndex * 6
          }}
        >
          {/* Airplane icon */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <motion.g
              animate={{
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path
                d="M20.56 3.91C21.15 4.5 21.15 5.45 20.56 6.03L16.67 9.92L18.79 19.11L17.38 20.53L13.5 13.1L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L11.37 11L3.94 7.09L5.36 5.68L14.55 7.8L18.44 3.91C19.02 3.33 19.98 3.33 20.56 3.91Z"
                fill={planeIndex === 0 ? "#4FB6C6" : "#F2C94C"}
                opacity="0.8"
              />
              {/* Shadow/glow effect */}
              <path
                d="M20.56 3.91C21.15 4.5 21.15 5.45 20.56 6.03L16.67 9.92L18.79 19.11L17.38 20.53L13.5 13.1L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L11.37 11L3.94 7.09L5.36 5.68L14.55 7.8L18.44 3.91C19.02 3.33 19.98 3.33 20.56 3.91Z"
                fill={planeIndex === 0 ? "#4FB6C6" : "#F2C94C"}
                opacity="0.3"
                style={{ filter: 'blur(4px)' }}
              />
            </motion.g>
          </svg>

          {/* Contrail/vapor trail */}
          <motion.div
            className="absolute top-1/2 right-full mr-2 h-0.5 rounded-full"
            style={{
              background: `linear-gradient(to left, ${planeIndex === 0 ? 'rgba(79, 182, 198, 0.4)' : 'rgba(242, 201, 76, 0.4)'}, transparent)`,
              width: '80px'
            }}
            animate={{
              opacity: [0.6, 0.3, 0.6],
              scaleX: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}

      {/* Floating clouds */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 80 + 10}%`
          }}
          animate={{
            x: [-100, window.innerWidth + 100],
            y: [0, Math.random() * 30 - 15, 0]
          }}
          transition={{
            duration: Math.random() * 30 + 40,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        >
          <svg width={Math.random() * 40 + 60} height="30" viewBox="0 0 100 50" fill="none">
            <ellipse cx="25" cy="30" rx="20" ry="15" fill="rgba(255, 255, 255, 0.3)" />
            <ellipse cx="50" cy="25" rx="25" ry="18" fill="rgba(255, 255, 255, 0.4)" />
            <ellipse cx="75" cy="30" rx="20" ry="15" fill="rgba(255, 255, 255, 0.3)" />
          </svg>
        </motion.div>
      ))}

      {/* Destination pins with pulse */}
      {[
        { x: "20%", y: "30%" },
        { x: "50%", y: "40%" },
        { x: "80%", y: "25%" }
      ].map((pos, i) => (
        <motion.div
          key={`pin-${i}`}
          className="absolute"
          style={{ left: pos.x, top: pos.y }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
              fill={i === 1 ? "#F2C94C" : "#4FB6C6"}
            />
            <path
              d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
              fill={i === 1 ? "#F2C94C" : "#4FB6C6"}
              opacity="0.3"
              style={{ filter: 'blur(3px)' }}
            />
          </svg>
          
          {/* Pulse ring around pin */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{
              borderColor: i === 1 ? "#F2C94C" : "#4FB6C6"
            }}
            initial={{ width: 32, height: 32, opacity: 0.8 }}
            animate={{
              width: [32, 60, 32],
              height: [32, 60, 32],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
