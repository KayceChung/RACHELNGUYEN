import { motion } from "motion/react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
  type: 'star' | 'circle' | 'diamond';
  color: string;
}

export function SparkleEffect({ count = 25 }: { count?: number }) {
  const colors = ["#4FB6C6", "#F2C94C", "#7ECDD7", "#FFD966", "#FFFFFF"];
  const types: Array<'star' | 'circle' | 'diamond'> = ['star', 'circle', 'diamond'];
  
  const sparkles: Sparkle[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 2.5 + 2,
    size: Math.random() * 12 + 8,
    type: types[Math.floor(Math.random() * types.length)],
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  const renderShape = (sparkle: Sparkle) => {
    switch (sparkle.type) {
      case 'star':
        return (
          <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill={sparkle.color}
              opacity="0.8"
            />
            {/* Glow effect */}
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill={sparkle.color}
              opacity="0.3"
              style={{ filter: 'blur(4px)' }}
            />
          </svg>
        );
      case 'circle':
        return (
          <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill={sparkle.color} opacity="0.7" />
            <circle cx="12" cy="12" r="10" fill={sparkle.color} opacity="0.2" style={{ filter: 'blur(3px)' }} />
            <circle cx="12" cy="12" r="6" fill="white" opacity="0.5" />
          </svg>
        );
      case 'diamond':
        return (
          <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 24 24">
            <path
              d="M12 2L22 12L12 22L2 12Z"
              fill={sparkle.color}
              opacity="0.75"
            />
            <path
              d="M12 2L22 12L12 22L2 12Z"
              fill={sparkle.color}
              opacity="0.25"
              style={{ filter: 'blur(4px)' }}
            />
          </svg>
        );
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0],
            rotate: [0, 180, 360],
            y: [0, -20, -10, 0]
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2 + 1,
            ease: "easeInOut"
          }}
        >
          {renderShape(sparkle)}
          
          {/* Particle trail effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full"
            style={{
              background: sparkle.color,
              marginLeft: -2,
              marginTop: -2
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0.8, 0.4, 0],
              y: [0, 15]
            }}
            transition={{
              duration: sparkle.duration * 0.6,
              delay: sparkle.delay + 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 1,
              ease: "easeOut"
            }}
          />
        </motion.div>
      ))}
      
      {/* Additional floating glow orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 30 + 20,
            height: Math.random() * 30 + 20,
            background: `radial-gradient(circle, ${colors[i % colors.length]}88, transparent)`,
            filter: 'blur(10px)'
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: Math.random() * 8 + 10,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}