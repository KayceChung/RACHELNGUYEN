import { motion } from "motion/react";

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Teal Blob - Top Left */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79, 182, 198, 0.25) 0%, rgba(79, 182, 198, 0.1) 40%, transparent 70%)",
          filter: "blur(40px)"
        }}
        animate={{
          x: [0, 150, -50, 100, 0],
          y: [0, -80, 50, -60, 0],
          scale: [1, 1.3, 0.9, 1.2, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ top: "-10%", left: "-5%" }}
      />
      
      {/* Sun Yellow Blob - Top Right */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(242, 201, 76, 0.3) 0%, rgba(242, 201, 76, 0.15) 40%, transparent 70%)",
          filter: "blur(50px)"
        }}
        animate={{
          x: [0, -120, 80, -100, 0],
          y: [0, 80, -40, 70, 0],
          scale: [1, 1.4, 1.1, 1.3, 1],
          rotate: [0, -90, -180, -270, -360]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        initial={{ top: "5%", right: "-5%" }}
      />
      
      {/* Light Teal Blob - Center */}
      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(126, 205, 215, 0.22) 0%, rgba(126, 205, 215, 0.12) 40%, transparent 70%)",
          filter: "blur(45px)"
        }}
        animate={{
          x: [0, 70, -80, 60, 0],
          y: [0, -60, 80, -50, 0],
          scale: [1.2, 1, 1.4, 1.1, 1.2],
          rotate: [0, 120, 240, 360, 0]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        initial={{ top: "35%", left: "25%" }}
      />

      {/* Golden Blob - Bottom Left */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 223, 128, 0.28) 0%, rgba(255, 223, 128, 0.14) 40%, transparent 70%)",
          filter: "blur(38px)"
        }}
        animate={{
          x: [0, 100, -60, 90, 0],
          y: [0, -70, 40, -55, 0],
          scale: [1, 1.25, 0.95, 1.2, 1],
          rotate: [0, -60, -120, -180, 0]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        initial={{ bottom: "10%", left: "5%" }}
      />
      
      {/* Teal Accent - Bottom Right */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79, 182, 198, 0.26) 0%, rgba(79, 182, 198, 0.13) 35%, transparent 65%)",
          filter: "blur(42px)"
        }}
        animate={{
          x: [0, -90, 70, -80, 0],
          y: [0, 60, -50, 55, 0],
          scale: [1.1, 1.35, 1, 1.25, 1.1],
          rotate: [360, 270, 180, 90, 0]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        initial={{ bottom: "5%", right: "10%" }}
      />

      {/* Small accent blobs for extra depth */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(242, 201, 76, 0.2) 0%, transparent 60%)",
          filter: "blur(30px)"
        }}
        animate={{
          x: [0, -50, 50, -40, 0],
          y: [0, 50, -50, 40, 0],
          opacity: [0.4, 0.7, 0.4, 0.6, 0.4],
          scale: [0.8, 1.2, 0.9, 1.1, 0.8]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        initial={{ top: "50%", left: "60%" }}
      />
    </div>
  );
}