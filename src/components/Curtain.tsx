import { motion } from "framer-motion";
import curtainTexture from "@/assets/curtain-texture.png";

interface CurtainProps {
  side: "left" | "right";
  isOpen: boolean;
}

const Curtain = ({ side, isOpen }: CurtainProps) => {
  const isLeft = side === "left";

  return (
    <motion.div
      className="fixed top-0 bottom-0 z-50 overflow-hidden"
      style={{
        width: "55vw",
        [isLeft ? "left" : "right"]: 0,
      }}
      initial={{ x: 0 }}
      animate={{
        x: isOpen ? (isLeft ? "-70%" : "70%") : 0,
      }}
      transition={{
        duration: 1.6,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <img
        src={curtainTexture}
        alt=""
        className="w-full h-full object-cover"
        style={{
          objectPosition: isLeft ? "right center" : "left center",
          transform: isLeft ? "none" : "scaleX(-1)",
        }}
        draggable={false}
      />
    </motion.div>
  );
};

export default Curtain;
