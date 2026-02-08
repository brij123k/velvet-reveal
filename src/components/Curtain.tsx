import { motion } from "framer-motion";
import leftCurtain from "../assets/left.png";
import rightCurtain from "../assets/right.png";
import closedCurtain from "../assets/closed.png";
import leftCurtainMobile from "../assets/left1.png";
import rightCurtainMobile from "../assets/right2.png";

interface CurtainProps {
  side: "left" | "right";
  isOpen: boolean;
}

const Curtain = ({ side, isOpen }: CurtainProps) => {
  const isLeft = side === "left";

  return (
    <motion.div
      className="fixed top-0 bottom-0 z-50 overflow-hidden pointer-events-none"
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
      {/* Desktop images */}
      <img
        src={isOpen 
          ? (isLeft ? leftCurtain : rightCurtain)
          : closedCurtain
        }
        alt={`${side} curtain`}
        className="hidden md:block w-full h-full object-cover"
      />
      
      {/* Mobile images */}
      <img
        src={isOpen 
          ? (isLeft ? leftCurtainMobile : rightCurtainMobile)
          : closedCurtain
        }
        alt={`${side} curtain`}
        className="block md:hidden w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default Curtain;