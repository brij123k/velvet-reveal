import { motion } from "framer-motion";

interface InvitationContentProps {
  isVisible: boolean;
}

const InvitationContent = ({ isVisible }: InvitationContentProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
    >
      {/* Pre-text */}
   

{/* Main message */}
<motion.div
  className="mb-4 sm:mb-5 md:mb-6"
  initial={{ opacity: 0, y: 20 }}
  animate={isVisible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.9 }}
>
  <p className="font-serif-elegant text-sm sm:text-base md:text-lg tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] text-muted-foreground leading-tight uppercase text-[10px] sm:text-xs md:text-sm">
    SHREE SHANKESHWARA PARSHWANATHAYA NAMAH ||
  </p>
  <p className="font-serif-elegant text-sm sm:text-base md:text-lg tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] text-foreground leading-tight">
    Smt. Rasilaben & Shri. Chimanlal Doshi
  </p>
  <p className="font-serif-elegant text-sm sm:text-base md:text-lg tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] text-foreground leading-tight">
    Solicits Your Blessings for the
  </p>
  <p className="font-serif-elegant text-sm sm:text-base md:text-lg tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] text-foreground leading-tight">
    Engagement Ceremony of their Grand Daughter
  </p>
</motion.div>

      {/* Bride */}
      <motion.div
        className="mb-2 sm:mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <motion.h1
          className="font-calligraphy text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent leading-tight mb-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
        >
          Maitri
        </motion.h1>
        <motion.p
          className="font-serif-elegant text-xs sm:text-sm md:text-base tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          D/o Smt. Nipaben Viren Doshi
        </motion.p>
      </motion.div>

      {/* Ampersand */}
      <motion.span
        className="font-calligraphy text-2xl sm:text-3xl md:text-4xl text-accent block my-2 sm:my-2.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        &
      </motion.span>

      {/* Groom */}
      <motion.div
        className="mt-2 sm:mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.7 }}
      >
        <motion.h1
          className="font-calligraphy text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent leading-tight mb-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
        >
          Moksh
        </motion.h1>
        <motion.p
          className="font-serif-elegant text-xs sm:text-sm md:text-base tracking-[0.1em] sm:tracking-[0.12em] md:tracking-[0.15em] text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.9 }}
        >
          S/o Smt. Binaben Ankurbhai Shah
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default InvitationContent;