import { motion } from "framer-motion";

interface InvitationContentProps {
  isVisible: boolean;
  currentPage: number; // Add currentPage prop
}

const InvitationContent = ({ isVisible, currentPage }: InvitationContentProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-3 sm:px-6 md:px-8 py-2 sm:py-12 md:py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: currentPage > 0 ? "-100vh" : 0 // Move up with curtains on mobile
      }}
      transition={{ 
        opacity: { duration: 1.2, delay: 0.4, ease: "easeOut" },
        y: { duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }
      }}
    >

      {/* Main message */}
      <motion.div
        className="mb-4 sm:mb-6 md:mb-8 space-y-0.5"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <p className="font-serif-elegant text-[10px] sm:text-xs md:text-sm tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.15em] text-gray-700 sm:text-muted-foreground leading-[1.2] uppercase">
          || SHREE SHANKESHWARA PARSHWANATHAYA NAMAH ||
        </p>
      </motion.div>
      
      {/* Main message */}
      <motion.div
        className="mb-2 sm:mb-5 md:mb-6 space-y-0.5"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <p className="font-serif-elegant text-[11px] sm:text-base md:text-lg tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.15em] text-gray-900 sm:text-foreground leading-[1.3]">
          Smt. Rasilaben & Shri. Chimanlal Doshi
        </p>
        <p className="font-serif-elegant text-[11px] sm:text-base md:text-lg tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.15em] text-gray-900 sm:text-foreground leading-[1.3]">
          Solicits Your Blessings for the
        </p>
        <p className="font-serif-elegant text-[11px] sm:text-base md:text-lg tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.15em] text-gray-900 sm:text-foreground leading-[1.3]">
          Engagement Ceremony of their Grand Daughter
        </p>
      </motion.div>

      {/* Bride */}
      <motion.div
        className="mb-1 sm:mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <motion.h1
          className="font-calligraphy text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent leading-[1.1] mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
        >
          Maitri
        </motion.h1>
        <motion.p
          className="font-serif-elegant text-xs sm:text-sm md:text-base tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.15em] text-gray-900 sm:text-foreground leading-[1.3]"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          D/o Smt. Nipaben Viren Bhai Doshi
        </motion.p>
      </motion.div>

      {/* Ampersand */}
      <motion.span
        className="font-calligraphy text-2xl sm:text-3xl md:text-4xl text-accent block my-1 sm:my-2.5"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        &
      </motion.span>

      {/* Groom */}
      <motion.div
        className="mt-1 sm:mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.7 }}
      >
        <motion.h1
          className="font-calligraphy text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent leading-[1.1] mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
        >
          Moksh
        </motion.h1>
        <motion.p
          className="font-serif-elegant text-xs sm:text-sm md:text-base tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.15em] text-gray-900 sm:text-foreground leading-[1.3]"
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