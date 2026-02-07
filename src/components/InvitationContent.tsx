import { motion } from "framer-motion";

interface InvitationContentProps {
  isVisible: boolean;
}

const InvitationContent = ({ isVisible }: InvitationContentProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-8 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
    >
      {/* Decorative top ornament */}
      <motion.div
        className="mb-8 text-accent"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <svg width="60" height="30" viewBox="0 0 60 30" className="mx-auto">
          <path
            d="M 0 28 Q 15 0, 30 15 Q 45 0, 60 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Pre-text */}
      <motion.p
        className="font-serif-elegant text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        You are cordially invited to
        <br />
        celebrate the wedding of
      </motion.p>

      {/* Names */}
      <motion.h1
        className="font-calligraphy text-7xl sm:text-8xl text-primary leading-tight mb-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
      >
        Sam
      </motion.h1>

      <motion.span
        className="font-calligraphy text-4xl text-accent block my-2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        &
      </motion.span>

      <motion.h1
        className="font-calligraphy text-7xl sm:text-8xl text-primary leading-tight mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      >
        Sofia
      </motion.h1>

      {/* Divider */}
      <motion.div
        className="w-16 h-px bg-accent mb-8"
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.4 }}
      />

      {/* Date & Venue */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <p className="font-serif-elegant text-lg tracking-[0.15em] text-foreground">
          Saturday, the Twenty-First of June
        </p>
        <p className="font-serif-elegant text-lg tracking-[0.15em] text-foreground">
          Two Thousand and Twenty-Six
        </p>
        <p className="font-serif-elegant text-sm tracking-[0.2em] text-muted-foreground mt-4">
          at half past four in the afternoon
        </p>
      </motion.div>

      {/* Venue */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.7 }}
      >
        <p className="font-serif-elegant text-base tracking-[0.15em] text-foreground italic">
          Villa del Balbianello
        </p>
        <p className="font-serif-elegant text-sm tracking-[0.2em] text-muted-foreground mt-1">
          Lake Como, Italy
        </p>
      </motion.div>

      {/* Bottom ornament */}
      <motion.div
        className="mt-12 text-accent"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.9 }}
      >
        <svg width="60" height="30" viewBox="0 0 60 30" className="mx-auto rotate-180">
          <path
            d="M 0 28 Q 15 0, 30 15 Q 45 0, 60 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* RSVP text */}
      <motion.p
        className="font-serif-elegant text-xs tracking-[0.3em] uppercase text-muted-foreground mt-10"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2.1 }}
      >
        Kindly respond by the first of May
      </motion.p>
    </motion.div>
  );
};

export default InvitationContent;
