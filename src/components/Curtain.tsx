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
        width: "55vw",
        [isLeft ? "left" : "right"]: 0,
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
        viewBox={isLeft ? "0 0 550 1000" : "450 0 550 1000"}
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{ display: "block" }}
      >
        <defs>
          {/* Main curtain gradient - rich deep red */}
          <linearGradient
            id={`curtainGrad-${side}`}
            x1={isLeft ? "0%" : "100%"}
            y1="0%"
            x2={isLeft ? "100%" : "0%"}
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(348, 75%, 18%)" />
            <stop offset="25%" stopColor="hsl(348, 70%, 25%)" />
            <stop offset="50%" stopColor="hsl(348, 65%, 30%)" />
            <stop offset="75%" stopColor="hsl(348, 70%, 22%)" />
            <stop offset="100%" stopColor="hsl(348, 75%, 16%)" />
          </linearGradient>

          {/* Shadow gradient for inner edge */}
          <linearGradient
            id={`edgeShadow-${side}`}
            x1={isLeft ? "0%" : "100%"}
            y1="0%"
            x2={isLeft ? "100%" : "0%"}
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="70%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.35)" />
          </linearGradient>

          {/* Tieback gradient */}
          <linearGradient id={`tieback-${side}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(38, 45%, 72%)" />
            <stop offset="50%" stopColor="hsl(38, 50%, 60%)" />
            <stop offset="100%" stopColor="hsl(38, 45%, 68%)" />
          </linearGradient>
        </defs>

        {isLeft ? (
          <>
            {/* LEFT CURTAIN - Main shape: gathered at top, cinched at tieback, flows down */}
            <path
              d={`
                M 0 0 L 500 0
                L 500 20
                C 480 30, 460 25, 440 30
                C 400 50, 420 80, 380 120
                C 350 170, 390 220, 360 280
                C 340 330, 370 380, 350 420
                C 330 460, 360 490, 340 520
                C 320 550, 350 570, 380 580
                C 400 585, 420 580, 440 590
                C 460 600, 440 620, 420 650
                C 380 720, 420 780, 400 840
                C 380 900, 420 940, 430 1000
                L 0 1000 Z
              `}
              fill={`url(#curtainGrad-${side})`}
            />

            {/* Edge shadow overlay */}
            <path
              d={`
                M 350 0 L 500 0 L 500 20
                C 480 30, 460 25, 440 30
                C 400 50, 420 80, 380 120
                C 350 170, 390 220, 360 280
                C 340 330, 370 380, 350 420
                C 330 460, 360 490, 340 520
                C 320 550, 350 570, 380 580
                C 400 585, 420 580, 440 590
                C 460 600, 440 620, 420 650
                C 380 720, 420 780, 400 840
                C 380 900, 420 940, 430 1000
                L 350 1000 Z
              `}
              fill={`url(#edgeShadow-${side})`}
            />

            {/* Fabric fold lines - upper section (wide, flowing down to tieback) */}
            {Array.from({ length: 12 }, (_, i) => {
              const x = 40 + i * 38;
              const pinchX = 280 + i * 8; // converge toward tieback
              const w1 = Math.sin(i * 1.5) * 12;
              const w2 = Math.sin(i * 2.1) * 8;
              const bottomX = 30 + i * 35;
              return (
                <path
                  key={`fold-${i}`}
                  d={`
                    M ${x} 20
                    C ${x + w1} 150, ${pinchX + w2} 400, ${pinchX} 570
                    C ${pinchX - w1} 650, ${bottomX + w2} 800, ${bottomX + w1} 1000
                  `}
                  fill="none"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth={0.6 + Math.sin(i * 0.7) * 0.3}
                />
              );
            })}

            {/* Light highlight folds */}
            {Array.from({ length: 6 }, (_, i) => {
              const x = 80 + i * 70;
              const pinchX = 290 + i * 12;
              const bottomX = 60 + i * 60;
              return (
                <path
                  key={`hl-${i}`}
                  d={`
                    M ${x} 20
                    C ${x} 200, ${pinchX} 400, ${pinchX} 570
                    C ${pinchX} 700, ${bottomX} 850, ${bottomX} 1000
                  `}
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth={1.5}
                />
              );
            })}

            {/* Gathered ruffle at top (rod pocket) */}
            <rect x="0" y="0" width="510" height="22" fill="hsl(348, 75%, 16%)" />
            {Array.from({ length: 20 }, (_, i) => (
              <ellipse
                key={`ruffle-${i}`}
                cx={25 + i * 24}
                cy="22"
                rx="12"
                ry="8"
                fill="hsl(348, 70%, 22%)"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="0.5"
              />
            ))}

            {/* Golden tieback */}
            <path
              d={`M 310 565 Q 370 555, 420 580 Q 370 600, 310 590`}
              fill={`url(#tieback-${side})`}
              stroke="hsl(38, 40%, 50%)"
              strokeWidth="1"
            />
            <ellipse cx="310" cy="577" rx="6" ry="14" fill="hsl(38, 45%, 60%)" stroke="hsl(38, 35%, 45%)" strokeWidth="1" />
            <ellipse cx="420" cy="582" rx="6" ry="12" fill="hsl(38, 45%, 60%)" stroke="hsl(38, 35%, 45%)" strokeWidth="1" />

            {/* Rod finial */}
            <circle cx="0" cy="10" r="8" fill="hsl(38, 40%, 55%)" stroke="hsl(38, 30%, 40%)" strokeWidth="1" />
          </>
        ) : (
          <>
            {/* RIGHT CURTAIN - Mirror of left */}
            <path
              d={`
                M 1000 0 L 500 0
                L 500 20
                C 520 30, 540 25, 560 30
                C 600 50, 580 80, 620 120
                C 650 170, 610 220, 640 280
                C 660 330, 630 380, 650 420
                C 670 460, 640 490, 660 520
                C 680 550, 650 570, 620 580
                C 600 585, 580 580, 560 590
                C 540 600, 560 620, 580 650
                C 620 720, 580 780, 600 840
                C 620 900, 580 940, 570 1000
                L 1000 1000 Z
              `}
              fill={`url(#curtainGrad-${side})`}
            />

            {/* Edge shadow overlay */}
            <path
              d={`
                M 650 0 L 500 0 L 500 20
                C 520 30, 540 25, 560 30
                C 600 50, 580 80, 620 120
                C 650 170, 610 220, 640 280
                C 660 330, 630 380, 650 420
                C 670 460, 640 490, 660 520
                C 680 550, 650 570, 620 580
                C 600 585, 580 580, 560 590
                C 540 600, 560 620, 580 650
                C 620 720, 580 780, 600 840
                C 620 900, 580 940, 570 1000
                L 650 1000 Z
              `}
              fill={`url(#edgeShadow-${side})`}
            />

            {/* Fabric fold lines */}
            {Array.from({ length: 12 }, (_, i) => {
              const x = 960 - i * 38;
              const pinchX = 720 - i * 8;
              const w1 = Math.sin(i * 1.5) * 12;
              const w2 = Math.sin(i * 2.1) * 8;
              const bottomX = 970 - i * 35;
              return (
                <path
                  key={`fold-${i}`}
                  d={`
                    M ${x} 20
                    C ${x - w1} 150, ${pinchX - w2} 400, ${pinchX} 570
                    C ${pinchX + w1} 650, ${bottomX - w2} 800, ${bottomX - w1} 1000
                  `}
                  fill="none"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth={0.6 + Math.sin(i * 0.7) * 0.3}
                />
              );
            })}

            {/* Light highlight folds */}
            {Array.from({ length: 6 }, (_, i) => {
              const x = 920 - i * 70;
              const pinchX = 710 - i * 12;
              const bottomX = 940 - i * 60;
              return (
                <path
                  key={`hl-${i}`}
                  d={`
                    M ${x} 20
                    C ${x} 200, ${pinchX} 400, ${pinchX} 570
                    C ${pinchX} 700, ${bottomX} 850, ${bottomX} 1000
                  `}
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth={1.5}
                />
              );
            })}

            {/* Gathered ruffle at top */}
            <rect x="490" y="0" width="510" height="22" fill="hsl(348, 75%, 16%)" />
            {Array.from({ length: 20 }, (_, i) => (
              <ellipse
                key={`ruffle-${i}`}
                cx={975 - i * 24}
                cy="22"
                rx="12"
                ry="8"
                fill="hsl(348, 70%, 22%)"
                stroke="rgba(0,0,0,0.15)"
                strokeWidth="0.5"
              />
            ))}

            {/* Golden tieback */}
            <path
              d={`M 690 565 Q 630 555, 580 580 Q 630 600, 690 590`}
              fill={`url(#tieback-${side})`}
              stroke="hsl(38, 40%, 50%)"
              strokeWidth="1"
            />
            <ellipse cx="690" cy="577" rx="6" ry="14" fill="hsl(38, 45%, 60%)" stroke="hsl(38, 35%, 45%)" strokeWidth="1" />
            <ellipse cx="580" cy="582" rx="6" ry="12" fill="hsl(38, 45%, 60%)" stroke="hsl(38, 35%, 45%)" strokeWidth="1" />

            {/* Rod finial */}
            <circle cx="1000" cy="10" r="8" fill="hsl(38, 40%, 55%)" stroke="hsl(38, 30%, 40%)" strokeWidth="1" />
          </>
        )}
      </svg>
    </motion.div>
  );
};

export default Curtain;
