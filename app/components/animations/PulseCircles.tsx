import { motion } from "motion/react";

export function PulseCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      {/* Main ripple circles with enhanced glow */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full"
        style={{
          border: '3px solid rgba(79, 182, 198, 0.3)',
          boxShadow: '0 0 40px rgba(79, 182, 198, 0.4), inset 0 0 40px rgba(79, 182, 198, 0.2)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.15, 0.4],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          border: '3px solid rgba(242, 201, 76, 0.35)',
          boxShadow: '0 0 35px rgba(242, 201, 76, 0.5), inset 0 0 35px rgba(242, 201, 76, 0.25)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          border: '2px solid rgba(126, 205, 215, 0.4)',
          boxShadow: '0 0 30px rgba(126, 205, 215, 0.6), inset 0 0 30px rgba(126, 205, 215, 0.3)'
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.25, 0.6],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      />

      {/* Expanding ripple waves */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={`ripple-${index}`}
          className="absolute rounded-full"
          style={{
            border: '2px solid rgba(79, 182, 198, 0.5)',
            boxShadow: '0 0 20px rgba(79, 182, 198, 0.4)'
          }}
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{
            width: [0, 1000, 1200],
            height: [0, 1000, 1200],
            opacity: [0.8, 0.3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Particle burst from center */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const distance = 250;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(79, 182, 198, 0.9), rgba(79, 182, 198, 0.3))' 
                : 'radial-gradient(circle, rgba(242, 201, 76, 0.9), rgba(242, 201, 76, 0.3))',
              boxShadow: `0 0 10px ${i % 2 === 0 ? 'rgba(79, 182, 198, 0.8)' : 'rgba(242, 201, 76, 0.8)'}`
            }}
            animate={{
              x: [
                0,
                Math.cos((angle * Math.PI) / 180) * distance,
                Math.cos((angle * Math.PI) / 180) * (distance * 1.2)
              ],
              y: [
                0,
                Math.sin((angle * Math.PI) / 180) * distance,
                Math.sin((angle * Math.PI) / 180) * (distance * 1.2)
              ],
              opacity: [0, 0.9, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeOut"
            }}
          />
        );
      })}

      {/* Orbital particles */}
      {[0, 1, 2].map((orbit) => {
        const radius = 200 + orbit * 100;
        
        return (
          <motion.div
            key={`orbit-${orbit}`}
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: orbit % 2 === 0 
                ? 'radial-gradient(circle, #F2C94C, transparent)' 
                : 'radial-gradient(circle, #4FB6C6, transparent)',
              boxShadow: orbit % 2 === 0 
                ? '0 0 15px rgba(242, 201, 76, 0.9)' 
                : '0 0 15px rgba(79, 182, 198, 0.9)'
            }}
            animate={{
              rotate: orbit % 2 === 0 ? [0, 360] : [360, 0]
            }}
            transition={{
              duration: 8 - orbit,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="absolute"
              style={{
                width: radius * 2,
                height: radius * 2,
                left: -radius,
                top: -radius
              }}
              animate={{
                rotate: orbit % 2 === 0 ? [0, 360] : [360, 0]
              }}
              transition={{
                duration: 8 - orbit,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div
                className="absolute top-0 left-1/2 w-4 h-4 -ml-2 rounded-full"
                style={{
                  background: orbit % 2 === 0 
                    ? 'radial-gradient(circle, #F2C94C, rgba(242, 201, 76, 0.3))' 
                    : 'radial-gradient(circle, #4FB6C6, rgba(79, 182, 198, 0.3))',
                  boxShadow: orbit % 2 === 0 
                    ? '0 0 20px #F2C94C' 
                    : '0 0 20px #4FB6C6'
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center glow */}
      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(242, 201, 76, 0.4), rgba(79, 182, 198, 0.3), transparent)',
          filter: 'blur(20px)'
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}