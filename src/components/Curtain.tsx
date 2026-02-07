import { motion } from "framer-motion";

interface CurtainProps {
  side: "left" | "right";
  isOpen: boolean;
}

const Curtain = ({ side, isOpen }: CurtainProps) => {
  const isLeft = side === "left";

  // Generate fabric fold lines with slight irregularity
  const foldLines = Array.from({ length: 18 }, (_, i) => {
    const baseX = isLeft
      ? 15 + i * (280 / 18)
      : 20 + i * (280 / 18);
    const wobble = Math.sin(i * 1.7) * 3;
    const x = baseX + wobble;
    return {
      x1: x,
      y1: 0,
      x2: x + Math.sin(i * 0.8) * 8,
      y2: 1200,
      opacity: 0.08 + Math.random() * 0.12,
      strokeWidth: 0.8 + Math.random() * 0.8,
    };
  });

  return (
    <motion.div
      className="fixed top-0 bottom-0 z-50"
      style={{
        width: "55vw",
        [isLeft ? "left" : "right"]: 0,
      }}
      initial={{ x: 0 }}
      animate={{
        x: isOpen ? (isLeft ? "-100%" : "100%") : 0,
      }}
      transition={{
        duration: 1.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <svg
        viewBox={`0 0 300 1200`}
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient
            id={`curtainGrad-${side}`}
            x1={isLeft ? "0%" : "100%"}
            y1="0%"
            x2={isLeft ? "100%" : "0%"}
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(0, 55%, 22%)" />
            <stop offset="40%" stopColor="hsl(0, 55%, 29%)" />
            <stop offset="70%" stopColor="hsl(0, 50%, 32%)" />
            <stop offset="85%" stopColor="hsl(0, 55%, 29%)" />
            <stop offset="100%" stopColor="hsl(0, 55%, 24%)" />
          </linearGradient>

          {/* Shadow on inner edge */}
          <linearGradient
            id={`innerShadow-${side}`}
            x1={isLeft ? "80%" : "20%"}
            y1="0%"
            x2={isLeft ? "100%" : "0%"}
            y2="0%"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
          </linearGradient>
        </defs>

        {/* Main curtain shape with curved inner edge */}
        <path
          d={
            isLeft
              ? `M 0 0 
                 L 240 0 
                 Q 280 150, 260 300 
                 Q 240 450, 270 600 
                 Q 290 750, 255 900 
                 Q 230 1000, 250 1100
                 Q 260 1150, 240 1200
                 L 0 1200 Z`
              : `M 300 0 
                 L 60 0 
                 Q 20 150, 40 300 
                 Q 60 450, 30 600 
                 Q 10 750, 45 900 
                 Q 70 1000, 50 1100
                 Q 40 1150, 60 1200
                 L 300 1200 Z`
          }
          fill={`url(#curtainGrad-${side})`}
        />

        {/* Inner edge shadow overlay */}
        <path
          d={
            isLeft
              ? `M 200 0 
                 L 240 0 
                 Q 280 150, 260 300 
                 Q 240 450, 270 600 
                 Q 290 750, 255 900 
                 Q 230 1000, 250 1100
                 Q 260 1150, 240 1200
                 L 200 1200 Z`
              : `M 100 0 
                 L 60 0 
                 Q 20 150, 40 300 
                 Q 60 450, 30 600 
                 Q 10 750, 45 900 
                 Q 70 1000, 50 1100
                 Q 40 1150, 60 1200
                 L 100 1200 Z`
          }
          fill={`url(#innerShadow-${side})`}
        />

        {/* Fabric fold lines */}
        {foldLines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="hsl(0, 20%, 85%)"
            strokeWidth={line.strokeWidth}
            opacity={line.opacity}
          />
        ))}

        {/* Bottom wavy edge */}
        <path
          d={
            isLeft
              ? `M 0 1180 
                 Q 40 1160, 80 1185 
                 Q 120 1210, 160 1190 
                 Q 200 1170, 240 1200 
                 L 240 1200 L 0 1200 Z`
              : `M 300 1180 
                 Q 260 1160, 220 1185 
                 Q 180 1210, 140 1190 
                 Q 100 1170, 60 1200 
                 L 60 1200 L 300 1200 Z`
          }
          fill="hsl(0, 55%, 25%)"
        />
      </svg>
    </motion.div>
  );
};

export default Curtain;
