import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import leftCurtain from "../assets/left.png";
import rightCurtain from "../assets/right.png";
import closedCurtain from "../assets/closed.png";
import leftCurtainMobile from "../assets/left1.png";
import rightCurtainMobile from "../assets/right2.png";

interface CurtainProps {
  side: "left" | "right";
  isOpen: boolean;
}

interface Confetti {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  delay: number;
  size: number;
  shape: string;
}

const Curtain = ({ side, isOpen }: CurtainProps) => {
  const isLeft = side === "left";
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen && side === "left") {
      // Only trigger confetti once from left curtain to avoid duplicates
      setShowConfetti(true);
      
      // Generate confetti pieces - more pieces for glitter effect
      const pieces: Confetti[] = [];
      const colors = ["#FFD700", "#FFC125", "#FFDF00", "#FFE55C", "#FFEA70", "#FFF4A3"];
      const shapes = ["circle", "diamond", "star", "square"];
      
      for (let i = 0; i < 150; i++) {
        pieces.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (%)
          y: -20, // Start above viewport
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.8,
          size: Math.random() * 6 + 2, // 2-8px (smaller for glitter effect)
          shape: shapes[Math.floor(Math.random() * shapes.length)],
        });
      }
      
      setConfetti(pieces);

      // Clear confetti after animation completes
      const timer = setTimeout(() => {
        setShowConfetti(false);
        setConfetti([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, side]);

  return (
    <>
      {/* Desktop curtain - stays fixed */}
      <motion.div
        className="hidden md:block fixed top-0 bottom-0 z-50 overflow-hidden pointer-events-none"
        style={{
          width: "50vw",
          [isLeft ? "left" : "right"]: 0,
        }}
        initial={{ x: 0 }}
        animate={{
          x: isOpen ? (isLeft ? "-30%" : "30%") : 0,
        }}
        transition={{
          duration: 1.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <img
          src={isOpen 
            ? (isLeft ? leftCurtain : rightCurtain)
            : closedCurtain
          }
          alt={`${side} curtain`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Mobile curtain - scrolls with content */}
      <motion.div
        className="block md:hidden absolute top-0 bottom-0 z-50 overflow-hidden pointer-events-none"
        style={{
          width: "50vw",
          [isLeft ? "left" : "right"]: 0,
          height: "100vh",
        }}
        initial={{ x: 0 }}
        animate={{
          x: isOpen ? (isLeft ? "0%" : "35%") : 0,
        }}
        transition={{
          duration: 1.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <img
          src={isOpen 
            ? (isLeft ? leftCurtainMobile : rightCurtainMobile)
            : closedCurtain
          }
          alt={`${side} curtain`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Confetti - works on both mobile and desktop */}
      {showConfetti && side === "left" && (
        <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
          {confetti.map((piece) => {
            const getShapeStyle = () => {
              switch (piece.shape) {
                case "circle":
                  return { borderRadius: "50%" };
                case "diamond":
                  return { 
                    borderRadius: "0%",
                    transform: "rotate(45deg)",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                  };
                case "star":
                  return {
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                  };
                case "square":
                default:
                  return { borderRadius: "0%" };
              }
            };

            return (
              <motion.div
                key={piece.id}
                className="absolute"
                style={{
                  left: `${piece.x}%`,
                  width: `${piece.size}px`,
                  height: `${piece.size}px`,
                  backgroundColor: piece.color,
                  boxShadow: `0 0 ${piece.size * 2}px ${piece.color}`,
                  ...getShapeStyle(),
                }}
                initial={{
                  y: piece.y,
                  rotate: 0,
                  opacity: 1,
                  scale: 0,
                }}
                animate={{
                  y: ["0vh", "120vh"],
                  rotate: [0, piece.rotation * 3, piece.rotation * 6],
                  x: [0, Math.random() * 60 - 30, Math.random() * 80 - 40],
                  opacity: [0, 1, 1, 0.8, 0],
                  scale: [0, 1, 1, 0.8, 0.5],
                }}
                transition={{
                  duration: 3.5 + Math.random() * 2.5,
                  delay: piece.delay,
                  ease: "easeIn",
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Curtain;