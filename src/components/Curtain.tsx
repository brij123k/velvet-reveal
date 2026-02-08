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
}

const Curtain = ({ side, isOpen }: CurtainProps) => {
  const isLeft = side === "left";
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen && side === "left") {
      // Only trigger confetti once from left curtain to avoid duplicates
      setShowConfetti(true);
      
      // Generate confetti pieces
      const pieces: Confetti[] = [];
      const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181", "#AA96DA", "#FCBAD3"];
      
      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          x: Math.random() * 100, // Random horizontal position (%)
          y: -20, // Start above viewport
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
          size: Math.random() * 8 + 4, // 4-12px
        });
      }
      
      setConfetti(pieces);

      // Clear confetti after animation completes
      const timer = setTimeout(() => {
        setShowConfetti(false);
        setConfetti([]);
      }, 4000);

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
          {confetti.map((piece) => (
            <motion.div
              key={piece.id}
              className="absolute"
              style={{
                left: `${piece.x}%`,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                borderRadius: Math.random() > 0.5 ? "50%" : "0%",
              }}
              initial={{
                y: piece.y,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: ["0vh", "120vh"],
                rotate: [0, piece.rotation, piece.rotation * 2],
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
                opacity: [1, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: piece.delay,
                ease: "easeIn",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Curtain;