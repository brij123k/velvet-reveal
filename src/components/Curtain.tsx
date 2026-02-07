import { motion } from "framer-motion";

interface CurtainProps {
  side: "left" | "right";
  isOpen: boolean;
}

const Curtain = ({ side, isOpen }: CurtainProps) => {
  const isLeft = side === "left";

  // Generate fabric fold lines with slight irregularity
  const foldLines = Array.from({ length: 22 }, (_, i) => {
    const baseX = 10 + i * (330 / 22);
    const wobble = Math.sin(i * 1.7) * 4;
    const x = baseX + wobble;
    return {
      x1: x,
      y1: 60,
      x2: x + Math.sin(i * 0.8) * 10,
      y2: 1200,
      opacity: 0.06 + Math.sin(i * 0.9) * 0.06,
      strokeWidth: 0.6 + Math.sin(i * 1.2) * 0.5,
    };
  });

  // Deeper, more dramatic fold highlights
  const highlightFolds = Array.from({ length: 8 }, (_, i) => {
    const baseX = 30 + i * (280 / 8);
    return {
      x: baseX + Math.sin(i * 2.1) * 5,
      opacity: 0.04 + Math.sin(i * 1.3) * 0.03,
      width: 8 + Math.sin(i * 0.7) * 4,
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
        viewBox="0 0 340 1200"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ display: "block" }}
      >
        <defs>
          {/* Main curtain gradient - richer, deeper red */}
          <linearGradient
            id={`curtainGrad-${side}`}
            x1={isLeft ? "0%" : "100%"}
            y1="0%"
            x2={isLeft ? "100%" : "0%"}
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(348, 70%, 18%)" />
            <stop offset="20%" stopColor="hsl(348, 65%, 24%)" />
            <stop offset="45%" stopColor="hsl(348, 60%, 28%)" />
            <stop offset="65%" stopColor="hsl(348, 65%, 24%)" />
            <stop offset="80%" stopColor="hsl(348, 60%, 27%)" />
            <stop offset="100%" stopColor="hsl(348, 70%, 20%)" />
          </linearGradient>

          {/* Inner edge shadow */}
          <linearGradient
            id={`innerShadow-${side}`}
            x1={isLeft ? "70%" : "30%"}
            y1="0%"
            x2={isLeft ? "100%" : "0%"}
            y2="0%"
          >
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
          </linearGradient>

          {/* Top shadow for depth */}
          <linearGradient id={`topShadow-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.2)" />
            <stop offset="8%" stopColor="transparent" />
          </linearGradient>

          {/* Highlight gradient for fold shine */}
          <linearGradient
            id={`foldHighlight-${side}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* Full rectangle base - ensures complete coverage */}
        <rect x="0" y="0" width="340" height="1200" fill={`url(#curtainGrad-${side})`} />

        {/* Inner edge shadow overlay */}
        <rect
          x={isLeft ? 240 : 0}
          y="0"
          width="100"
          height="1200"
          fill={`url(#innerShadow-${side})`}
        />

        {/* Top shadow */}
        <rect x="0" y="0" width="340" height="200" fill={`url(#topShadow-${side})`} />

        {/* Fabric fold highlight strips */}
        {highlightFolds.map((fold, i) => (
          <rect
            key={`highlight-${i}`}
            x={fold.x}
            y={60}
            width={fold.width}
            height={1140}
            fill={`url(#foldHighlight-${side})`}
            opacity={fold.opacity}
          />
        ))}

        {/* Fabric fold lines - thin dark lines */}
        {foldLines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(0,0,0,0.25)"
            strokeWidth={line.strokeWidth}
            opacity={line.opacity}
          />
        ))}

        {/* Light fold lines */}
        {foldLines.filter((_, i) => i % 3 === 0).map((line, i) => (
          <line
            key={`light-${i}`}
            x1={line.x1 + 3}
            y1={line.y1}
            x2={line.x2 + 3}
            y2={line.y2}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={0.8}
            opacity={line.opacity}
          />
        ))}

        {/* Top gathered/rod area - valance */}
        <rect x="0" y="0" width="340" height="55" fill="hsl(348, 70%, 16%)" />
        
        {/* Gathered fabric bumps at top */}
        {Array.from({ length: 14 }, (_, i) => {
          const cx = 12 + i * (320 / 14);
          return (
            <ellipse
              key={`gather-${i}`}
              cx={cx}
              cy={52}
              rx={12}
              ry={8}
              fill="hsl(348, 65%, 22%)"
            />
          );
        })}
        
        {/* Rod line */}
        <line x1="0" y1="12" x2="340" y2="12" stroke="hsl(38, 40%, 55%)" strokeWidth="5" />
        <line x1="0" y1="12" x2="340" y2="12" stroke="hsl(38, 50%, 65%)" strokeWidth="2" />

        {/* Bottom wavy edge */}
        <path
          d={
            isLeft
              ? `M 0 1170 
                 Q 50 1155, 85 1180 
                 Q 120 1205, 160 1185 
                 Q 200 1165, 240 1190 
                 Q 280 1210, 340 1185
                 L 340 1200 L 0 1200 Z`
              : `M 340 1170 
                 Q 290 1155, 255 1180 
                 Q 220 1205, 180 1185 
                 Q 140 1165, 100 1190 
                 Q 60 1210, 0 1185
                 L 0 1200 L 340 1200 Z`
          }
          fill="hsl(348, 70%, 18%)"
        />
      </svg>
    </motion.div>
  );
};

export default Curtain;
