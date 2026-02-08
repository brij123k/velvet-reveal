import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Invitation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf8f3] flex items-center justify-center">

      {/* LEFT CURTAIN */}
      <motion.img
        src="/curtain-left.png"
        alt="Left Curtain"
        className="
          absolute left-0 top-0 h-full
          w-[45%] sm:w-[35%] md:w-[30%] lg:w-[25%]
          object-cover pointer-events-none
        "
        initial={{ x: "-100%" }}
        animate={{ x: isVisible ? "0%" : "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* RIGHT CURTAIN */}
      <motion.img
        src="/curtain-right.png"
        alt="Right Curtain"
        className="
          absolute right-0 top-0 h-full
          w-[45%] sm:w-[35%] md:w-[30%] lg:w-[25%]
          object-cover pointer-events-none
        "
        initial={{ x: "100%" }}
        animate={{ x: isVisible ? "0%" : "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-12 text-center max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >

        {/* PRAYER */}
        <motion.p
          className="font-serif-elegant text-[10px] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          SHREE SHANKESHWARA PARSHWANATHAYA NAMAH ||
        </motion.p>

        {/* HOSTS */}
        <motion.p
          className="font-serif-elegant text-sm sm:text-base md:text-lg tracking-[0.15em] mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          Smt. Rasilaben & Shri. Chimanlal Doshi
        </motion.p>

        {/* MESSAGE */}
        <motion.div
          className="space-y-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1 }}
        >
          <p className="font-serif-elegant tracking-[0.15em]">
            Solicits Your Blessings for the
          </p>
          <p className="font-serif-elegant tracking-[0.15em]">
            Engagement Ceremony of their Grand Daughter
          </p>
        </motion.div>

        {/* BRIDE */}
        <motion.h1
          className="font-calligraphy text-5xl sm:text-6xl md:text-7xl text-accent mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.3 }}
        >
          Maitri
        </motion.h1>

        <motion.p
          className="font-serif-elegant tracking-[0.12em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
        >
          D/o Smt. Nipaben Viren Doshi
        </motion.p>

        {/* AMPERSAND */}
        <motion.span
          className="font-calligraphy text-4xl text-accent mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.5 }}
        >
          &
        </motion.span>

        {/* GROOM */}
        <motion.h1
          className="font-calligraphy text-5xl sm:text-6xl md:text-7xl text-accent mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.7 }}
        >
          Moksh
        </motion.h1>

        <motion.p
          className="font-serif-elegant tracking-[0.12em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
        >
          S/o Smt. Binaben Ankurbhai Shah
        </motion.p>

      </motion.div>
    </div>
  );
};

export default Invitation;
