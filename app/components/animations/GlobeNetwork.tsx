import { motion } from "motion/react";

export function GlobeNetwork() {
  // Connection points on the globe
  const nodes = [
    { id: 1, angle: 30, radius: 0.8, lat: 20 },
    { id: 2, angle: 90, radius: 0.9, lat: -10 },
    { id: 3, angle: 150, radius: 0.85, lat: 30 },
    { id: 4, angle: 210, radius: 0.9, lat: -20 },
    { id: 5, angle: 270, radius: 0.8, lat: 15 },
    { id: 6, angle: 330, radius: 0.85, lat: -5 }
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
    [0, 3], [1, 4], [2, 5]
  ];

  const baseSize = 300;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <motion.div
        className="relative"
        style={{ width: baseSize, height: baseSize }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Globe outline */}
        <svg
          width={baseSize}
          height={baseSize}
          viewBox="0 0 300 300"
          className="absolute top-0 left-0"
        >
          <defs>
            <radialGradient id="globe-gradient">
              <stop offset="0%" stopColor="#4FB6C6" stopOpacity="0.1" />
              <stop offset="70%" stopColor="#4FB6C6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#4FB6C6" stopOpacity="0.05" />
            </radialGradient>

            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4FB6C6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F2C94C" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4FB6C6" stopOpacity="0.3" />
            </linearGradient>

            <filter id="glow-effect">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main globe circle */}
          <motion.circle
            cx="150"
            cy="150"
            r="140"
            fill="url(#globe-gradient)"
            stroke="#4FB6C6"
            strokeWidth="2"
            opacity="0.3"
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Latitude lines */}
          {[-60, -30, 0, 30, 60].map((lat, i) => (
            <motion.ellipse
              key={`lat-${i}`}
              cx="150"
              cy="150"
              rx="140"
              ry={140 * Math.cos((lat * Math.PI) / 180)}
              fill="none"
              stroke="#4FB6C6"
              strokeWidth="1"
              opacity="0.15"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: [0, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                pathLength: {
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3
                },
                opacity: {
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2
                }
              }}
            />
          ))}

          {/* Longitude lines */}
          {[0, 30, 60, 90, 120, 150].map((long, i) => (
            <motion.ellipse
              key={`long-${i}`}
              cx="150"
              cy="150"
              rx={140 * Math.cos((long * Math.PI) / 180)}
              ry="140"
              fill="none"
              stroke="#F2C94C"
              strokeWidth="1"
              opacity="0.15"
              transform={`rotate(${long} 150 150)`}
              animate={{
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Connection lines between nodes */}
          {connections.map(([from, to], i) => {
            const fromNode = nodes[from];
            const toNode = nodes[to];
            const fromX = 150 + Math.cos((fromNode.angle * Math.PI) / 180) * fromNode.radius * 140;
            const fromY = 150 + Math.sin((fromNode.angle * Math.PI) / 180) * fromNode.radius * 140;
            const toX = 150 + Math.cos((toNode.angle * Math.PI) / 180) * toNode.radius * 140;
            const toY = 150 + Math.sin((toNode.angle * Math.PI) / 180) * toNode.radius * 140;

            return (
              <motion.line
                key={`connection-${i}`}
                x1={fromX}
                y1={fromY}
                x2={toX}
                y2={toY}
                stroke="url(#line-gradient)"
                strokeWidth="2"
                filter="url(#glow-effect)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.6, 0.6, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.7, 1]
                }}
              />
            );
          })}
        </svg>

        {/* Animated nodes */}
        {nodes.map((node, index) => {
          const x = 150 + Math.cos((node.angle * Math.PI) / 180) * node.radius * 140;
          const y = 150 + Math.sin((node.angle * Math.PI) / 180) * node.radius * 140;

          return (
            <motion.div
              key={node.id}
              className="absolute"
              style={{
                left: x,
                top: y,
                marginLeft: -8,
                marginTop: -8
              }}
            >
              {/* Main node */}
              <motion.div
                className="w-4 h-4 rounded-full"
                style={{
                  background: index % 2 === 0 
                    ? 'radial-gradient(circle, #F2C94C, #F2C94C88)' 
                    : 'radial-gradient(circle, #4FB6C6, #4FB6C688)',
                  boxShadow: index % 2 === 0
                    ? '0 0 20px rgba(242, 201, 76, 0.8)'
                    : '0 0 20px rgba(79, 182, 198, 0.8)'
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
              />

              {/* Pulse ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
                style={{
                  borderColor: index % 2 === 0 ? '#F2C94C' : '#4FB6C6'
                }}
                initial={{ width: 16, height: 16, opacity: 0.8 }}
                animate={{
                  width: [16, 40, 16],
                  height: [16, 40, 16],
                  opacity: [0.8, 0, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              />

              {/* Data packets traveling from node */}
              <motion.div
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: index % 2 === 0 ? '#F2C94C' : '#4FB6C6',
                  boxShadow: `0 0 10px ${index % 2 === 0 ? '#F2C94C' : '#4FB6C6'}`
                }}
                animate={{
                  x: [0, Math.random() * 60 - 30],
                  y: [0, Math.random() * 60 - 30],
                  opacity: [1, 0],
                  scale: [1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeOut"
                }}
              />
            </motion.div>
          );
        })}

        {/* Orbiting satellites */}
        {[0, 1, 2].map((satIndex) => {
          const orbitRadius = 160 + satIndex * 20;

          return (
            <motion.div
              key={`satellite-${satIndex}`}
              className="absolute"
              style={{
                left: baseSize / 2,
                top: baseSize / 2
              }}
              animate={{
                rotate: satIndex % 2 === 0 ? [0, 360] : [360, 0]
              }}
              transition={{
                duration: 15 - satIndex * 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div
                className="absolute"
                style={{
                  left: -orbitRadius,
                  top: -4
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4" fill={satIndex % 2 === 0 ? "#F2C94C" : "#4FB6C6"} />
                  <rect x="10" y="4" width="4" height="4" fill={satIndex % 2 === 0 ? "#F2C94C" : "#4FB6C6"} opacity="0.6" />
                  <rect x="10" y="16" width="4" height="4" fill={satIndex % 2 === 0 ? "#F2C94C" : "#4FB6C6"} opacity="0.6" />
                </svg>

                {/* Signal waves from satellite */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  style={{
                    borderColor: satIndex % 2 === 0 ? '#F2C94C' : '#4FB6C6'
                  }}
                  animate={{
                    width: [10, 30, 10],
                    height: [10, 30, 10],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Ambient particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`ambient-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? '#4FB6C6' : '#F2C94C',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 5px ${i % 2 === 0 ? '#4FB6C6' : '#F2C94C'}`
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
