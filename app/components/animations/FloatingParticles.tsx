import { motion } from "motion/react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  blur: number;
}

export function FloatingParticles({ count = 30 }: { count?: number }) {
  const colors = [
    "rgba(79, 182, 198, 0.4)",   // Ocean Teal
    "rgba(242, 201, 76, 0.5)",    // Soft Sun Yellow
    "rgba(126, 205, 215, 0.35)",  // Light Teal
    "rgba(255, 223, 128, 0.4)",   // Light Yellow
    "rgba(255, 255, 255, 0.3)"    // White
  ];

  const particles: Particle[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 16 + 6,
    duration: Math.random() * 15 + 20,
    delay: Math.random() * 8,
    color: colors[Math.floor(Math.random() * colors.length)],
    blur: Math.random() * 8 + 4
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            filter: `blur(${particle.blur}px)`,
            boxShadow: `0 0 ${particle.blur * 2}px ${particle.color}`
          }}
          animate={{
            y: [0, -80, 20, -60, 0],
            x: [0, 40, -30, 30, 0],
            opacity: [0.3, 0.8, 0.4, 0.7, 0.3],
            scale: [1, 1.5, 0.8, 1.3, 1],
            rotate: [0, 180, 90, 270, 360]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}