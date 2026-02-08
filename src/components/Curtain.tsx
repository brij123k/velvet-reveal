import { motion } from "framer-motion";
import curtainLeft from "@/assets/curtain-left.png";
import curtainRight from "@/assets/curtain-right.png";

interface CurtainProps {
  side: "left" | "right";
  isOpen: boolean;
}

const Curtain = ({ side, isOpen }: CurtainProps) => {
  const isLeft = side === "left";

  return (
    <motion.div
<<<<<<< HEAD
      className="fixed top-0 bottom-0 z-50 overflow-hidden"
=======
      className="fixed top-0 bottom-0 z-50 overflow-hidden pointer-events-none"
>>>>>>> c9e17e9 (chanegs in the animatation)
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
<<<<<<< HEAD
        src={isLeft ? curtainLeft : curtainRight}
        alt=""
        className="w-full h-full object-cover"
        style={{
          objectPosition: isLeft ? "right center" : "left center",
        }}
        draggable={false}
=======
        src={isOpen 
          ? (isLeft ? "/src/assets/1.png" : "/src/assets/2.png")
          : "/src/assets/Untitled design (55).png"
        }
        alt={`${side} curtain`}
        className="w-full h-full object-cover"
>>>>>>> c9e17e9 (chanegs in the animatation)
      />
    </motion.div>
  );
};

export default Curtain;