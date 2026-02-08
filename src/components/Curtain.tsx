import { motion } from "framer-motion";

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
        x: isOpen ? (isLeft ? "0%" : "30%") : 0,
      }}
      transition={{
        duration: 1.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Desktop images */}
      <img
        src={isOpen 
          ? (isLeft ? "/src/assets/1.png" : "/src/assets/2.png")
          : "/src/assets/Untitled design (55).png"
        }
        alt={`${side} curtain`}
        className="hidden md:block w-full h-full object-cover"
      />
      
      {/* Mobile images */}
      <img
        src={isOpen 
          ? (isLeft ? "/src/assets/6.png" : "/src/assets/7.png")
          : "/src/assets/Untitled design (55).png"
        }
        alt={`${side} curtain`}
        className="block md:hidden w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default Curtain;