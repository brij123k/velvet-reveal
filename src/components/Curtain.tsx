import { motion } from "framer-motion";

interface CurtainProps {
  side: "left" | "right";
  isOpen: boolean;
}

const Curtain = ({ side, isOpen }: CurtainProps) => {
  const isLeft = side === "left";

  return (
    <motion.div
      className="fixed top-0 bottom-0 z-50 pointer-events-none"
      style={{
        width: "100vw",
        left: 0,
      }}
      initial={{ x: 0 }}
      animate={{
        x: isOpen ? (isLeft ? "-15vw" : "15vw") : 0,
      }}
      transition={{
        duration: 1.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <svg
        viewBox="0 0 1000 1800"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient
            id={`curtainBase-${side}`}
            x1={isLeft ? "0%" : "100%"}
            y1="0%"
            x2={isLeft ? "60%" : "40%"}
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(348, 70%, 15%)" />
            <stop offset="40%" stopColor="hsl(348, 65%, 22%)" />
            <stop offset="70%" stopColor="hsl(348, 60%, 26%)" />
            <stop offset="90%" stopColor="hsl(348, 65%, 20%)" />
            <stop offset="100%" stopColor="hsl(348, 70%, 14%)" />
          </linearGradient>
        </defs>

        {/* Main curtain shape with curved inner edge */}
        <path
          d={
            isLeft
              ? `M 0 0 
                 L 520 0
                 C 500 200, 460 400, 480 600
                 C 500 800, 470 1000, 490 1200
                 C 510 1400, 475 1600, 500 1800
                 L 0 1800 Z`
              : `M 1000 0 
                 L 480 0
                 C 500 200, 540 400, 520 600
                 C 500 800, 530 1000, 510 1200
                 C 490 1400, 525 1600, 500 1800
                 L 1000 1800 Z`
          }
          fill={`url(#curtainBase-${side})`}
        />

        {/* Fold lines for fabric texture */}
        {Array.from({ length: 16 }, (_, i) => {
          const baseX = isLeft
            ? 40 + i * 28
            : 960 - i * 28;
          const wobble1 = Math.sin(i * 1.7) * 8;
          const wobble2 = Math.sin(i * 2.3) * 6;
          return (
            <path
              key={`fold-${i}`}
              d={`M ${baseX} 0 
                  C ${baseX + wobble1} 450, ${baseX - wobble2} 900, ${baseX + wobble1} 1350
                  L ${baseX + wobble2} 1800`}
              fill="none"
              stroke="rgba(0,0,0,0.15)"
              strokeWidth={0.8 + Math.sin(i * 0.9) * 0.4}
              opacity={0.4 + Math.sin(i * 1.1) * 0.2}
            />
          );
        })}

        {/* Light highlight fold lines */}
        {Array.from({ length: 8 }, (_, i) => {
          const baseX = isLeft
            ? 55 + i * 55
            : 945 - i * 55;
          const w = Math.sin(i * 2.1) * 10;
          return (
            <path
              key={`highlight-${i}`}
              d={`M ${baseX} 0 
                  C ${baseX + w} 450, ${baseX - w} 900, ${baseX + w} 1800`}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={1.2}
              opacity={0.5}
            />
          );
        })}

        {/* Inner edge shadow for depth */}
        <path
          d={
            isLeft
              ? `M 520 0
                 C 500 200, 460 400, 480 600
                 C 500 800, 470 1000, 490 1200
                 C 510 1400, 475 1600, 500 1800
                 L 450 1800
                 C 425 1600, 460 1400, 440 1200
                 C 420 1000, 450 800, 430 600
                 C 410 400, 450 200, 470 0 Z`
              : `M 480 0
                 C 500 200, 540 400, 520 600
                 C 500 800, 530 1000, 510 1200
                 C 490 1400, 525 1600, 500 1800
                 L 550 1800
                 C 575 1600, 540 1400, 560 1200
                 C 580 1000, 550 800, 570 600
                 C 590 400, 550 200, 530 0 Z`
          }
          fill="rgba(0,0,0,0.25)"
        />

        {/* Top valance bar */}
        <rect
          x={isLeft ? 0 : 480}
          y="0"
          width={isLeft ? 520 : 520}
          height="40"
          fill="hsl(348, 70%, 14%)"
        />
        <line
          x1={isLeft ? 0 : 480}
          y1="10"
          x2={isLeft ? 520 : 1000}
          y2="10"
          stroke="hsl(38, 40%, 55%)"
          strokeWidth="4"
        />
        <line
          x1={isLeft ? 0 : 480}
          y1="10"
          x2={isLeft ? 520 : 1000}
          y2="10"
          stroke="hsl(38, 50%, 65%)"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
};

export default Curtain;
