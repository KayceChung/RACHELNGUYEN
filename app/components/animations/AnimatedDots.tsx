import { motion } from "motion/react";

export function AnimatedDots() {
  const rows = 10;
  const cols = 15;
  const dots = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dots.push({ row: i, col: j, id: i * cols + j });
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-full" style={{ minWidth: '100%', minHeight: '100%' }}>
          <defs>
            {/* Glow effect for dots */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Gradient for connections */}
            <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4FB6C6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F2C94C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4FB6C6" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Connection lines between nearby dots */}
          {dots.map((dot, i) => {
            const connections = [];
            // Connect to right neighbor
            if (dot.col < cols - 1) {
              const nextDot = dots[i + 1];
              connections.push(
                <motion.line
                  key={`h-${dot.id}`}
                  x1={(dot.col * 80) + 40}
                  y1={(dot.row * 80) + 40}
                  x2={(nextDot.col * 80) + 40}
                  y2={(nextDot.row * 80) + 40}
                  stroke="url(#connection-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: (dot.row + dot.col) * 0.08,
                    ease: "easeInOut"
                  }}
                />
              );
            }
            // Connect to bottom neighbor
            if (dot.row < rows - 1) {
              const bottomDot = dots[i + cols];
              connections.push(
                <motion.line
                  key={`v-${dot.id}`}
                  x1={(dot.col * 80) + 40}
                  y1={(dot.row * 80) + 40}
                  x2={(bottomDot.col * 80) + 40}
                  y2={(bottomDot.row * 80) + 40}
                  stroke="url(#connection-gradient)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.35, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: (dot.row + dot.col) * 0.08 + 0.5,
                    ease: "easeInOut"
                  }}
                />
              );
            }
            return connections;
          })}

          {/* Animated dots */}
          {dots.map((dot) => {
            const isEdgeDot = dot.row === 0 || dot.row === rows - 1 || 
                             dot.col === 0 || dot.col === cols - 1;
            const baseColor = (dot.row + dot.col) % 2 === 0 ? "#4FB6C6" : "#F2C94C";
            
            return (
              <motion.circle
                key={dot.id}
                cx={(dot.col * 80) + 40}
                cy={(dot.row * 80) + 40}
                r="4"
                fill={baseColor}
                filter="url(#glow)"
                initial={{ scale: 0.8, opacity: 0.3 }}
                animate={{
                  scale: [0.8, 1.8, 0.8],
                  opacity: [0.3, 0.9, 0.3],
                  r: [3, 6, 3]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: (dot.row + dot.col) * 0.08,
                  ease: "easeInOut"
                }}
              />
            );
          })}

          {/* Traveling pulse effect */}
          {[0, 1, 2].map((pulseIndex) => (
            <motion.circle
              key={`pulse-${pulseIndex}`}
              r="8"
              fill="none"
              stroke="#F2C94C"
              strokeWidth="2"
              opacity="0.6"
              filter="url(#glow)"
              animate={{
                cx: [40, cols * 80, 40],
                cy: [40, rows * 80, 40],
                scale: [1, 1.5, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: pulseIndex * 2.5,
                ease: "linear"
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}