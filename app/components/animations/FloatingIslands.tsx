import { motion } from "motion/react";

export function FloatingIslands() {
  const islands = [
    {
      id: 1,
      x: "15%",
      y: "20%",
      size: 180,
      duration: 20,
      delay: 0,
      color: "#4FB6C6"
    },
    {
      id: 2,
      x: "65%",
      y: "15%",
      size: 140,
      duration: 25,
      delay: 2,
      color: "#F2C94C"
    },
    {
      id: 3,
      x: "40%",
      y: "60%",
      size: 160,
      duration: 22,
      delay: 4,
      color: "#7ECDD7"
    },
    {
      id: 4,
      x: "80%",
      y: "55%",
      size: 120,
      duration: 18,
      delay: 1,
      color: "#FFD966"
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {islands.map((island) => (
        <motion.div
          key={island.id}
          className="absolute"
          style={{
            left: island.x,
            top: island.y
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 3, 0, -3, 0]
          }}
          transition={{
            duration: island.duration,
            delay: island.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Island base */}
          <svg
            width={island.size}
            height={island.size * 0.8}
            viewBox="0 0 200 160"
            fill="none"
          >
            <defs>
              <filter id={`island-shadow-${island.id}`}>
                <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                <feOffset dx="0" dy="15" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.3" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id={`island-gradient-${island.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={island.color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={island.color} stopOpacity="0.15" />
              </linearGradient>

              <radialGradient id={`glow-${island.id}`}>
                <stop offset="0%" stopColor={island.color} stopOpacity="0.3" />
                <stop offset="100%" stopColor={island.color} stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Glow effect */}
            <ellipse
              cx="100"
              cy="80"
              rx="90"
              ry="60"
              fill={`url(#glow-${island.id})`}
              opacity="0.6"
            />

            {/* Main island shape */}
            <path
              d="M 30 80 Q 20 60, 40 50 Q 60 40, 80 45 Q 100 35, 120 40 Q 140 38, 160 50 Q 180 60, 170 80 Q 165 100, 150 110 Q 130 120, 100 115 Q 70 120, 50 110 Q 35 100, 30 80 Z"
              fill={`url(#island-gradient-${island.id})`}
              filter={`url(#island-shadow-${island.id})`}
              opacity="0.8"
            />

            {/* Highlights */}
            <ellipse
              cx="80"
              cy="60"
              rx="25"
              ry="15"
              fill="white"
              opacity="0.2"
            />
            <ellipse
              cx="130"
              cy="70"
              rx="20"
              ry="12"
              fill="white"
              opacity="0.15"
            />
          </svg>

          {/* Palm trees */}
          {[
            { x: island.size * 0.3, y: island.size * 0.25 },
            { x: island.size * 0.6, y: island.size * 0.3 }
          ].map((tree, treeIndex) => (
            <motion.div
              key={`tree-${island.id}-${treeIndex}`}
              className="absolute"
              style={{
                left: tree.x,
                top: tree.y
              }}
              animate={{
                rotate: [-2, 2, -2],
                x: [0, 2, 0, -2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: treeIndex * 0.5,
                ease: "easeInOut"
              }}
            >
              <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
                {/* Trunk */}
                <rect x="8" y="12" width="4" height="18" fill="#8B7355" opacity="0.6" />
                {/* Leaves */}
                <path
                  d="M10 5 Q 5 10, 6 15 M10 5 Q 15 10, 14 15 M10 5 Q 7 8, 3 10 M10 5 Q 13 8, 17 10"
                  stroke="#7ECDD7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </svg>
            </motion.div>
          ))}

          {/* Floating particles around island */}
          {Array.from({ length: 6 }).map((_, pIndex) => {
            const angle = (pIndex * 360) / 6;
            const distance = island.size * 0.5;

            return (
              <motion.div
                key={`particle-${island.id}-${pIndex}`}
                className="absolute rounded-full"
                style={{
                  width: 6,
                  height: 6,
                  background: island.color,
                  boxShadow: `0 0 10px ${island.color}`,
                  left: island.size / 2,
                  top: island.size / 2
                }}
                animate={{
                  x: [
                    0,
                    Math.cos((angle * Math.PI) / 180) * distance,
                    0
                  ],
                  y: [
                    0,
                    Math.sin((angle * Math.PI) / 180) * distance,
                    0
                  ],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: pIndex * 0.3,
                  ease: "easeInOut"
                }}
              />
            );
          })}

          {/* Birds flying around */}
          {island.id % 2 === 0 && (
            <motion.div
              className="absolute"
              style={{
                left: island.size * 0.2,
                top: -20
              }}
              animate={{
                x: [0, island.size * 0.6, 0],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                <path
                  d="M 2 6 Q 6 2, 12 6 Q 18 2, 22 6"
                  stroke={island.color}
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.4"
                />
              </svg>
            </motion.div>
          )}

          {/* Sparkle effect */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 8,
              height: 8,
              background: `radial-gradient(circle, white, ${island.color})`,
              left: island.size * 0.7,
              top: island.size * 0.2,
              boxShadow: '0 0 15px white'
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: island.delay + 1,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}

      {/* Ambient light rays */}
      {[0, 1, 2].map((rayIndex) => (
        <motion.div
          key={`ray-${rayIndex}`}
          className="absolute top-0 left-1/2"
          style={{
            width: 2,
            height: '100%',
            background: `linear-gradient(to bottom, ${rayIndex % 2 === 0 ? 'rgba(242, 201, 76, 0.2)' : 'rgba(79, 182, 198, 0.15)'}, transparent)`,
            transformOrigin: 'top center',
            transform: `translateX(-50%) rotate(${rayIndex * 15 - 15}deg)`
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: rayIndex * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}