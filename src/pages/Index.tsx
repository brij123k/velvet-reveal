import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Curtain from "@/components/Curtain";
import InvitationContent from "@/components/InvitationContent";
import TapPrompt from "@/components/TapPrompt";
import Home from "./Home"
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleReveal = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
    }
  }, [isOpen]);

  return (
    <div
      className="relative min-h-screen bg-background overflow-hidden cursor-pointer select-none"
      onClick={handleReveal}
      onTouchStart={handleReveal}
    >
      {/* SEO */}
      <h1 className="sr-only"> Maitri & Moksh — Engagement Invitation</h1>

      {/* Invitation content behind curtains */}
      <InvitationContent isVisible={isOpen} />

      {/* Curtains */}
      <Curtain side="left" isOpen={isOpen} />
      <Curtain side="right" isOpen={isOpen} />

      {/* Tap prompt */}
      <AnimatePresence>
        {!isOpen && <TapPrompt isVisible={!isOpen} />}
      </AnimatePresence>
      <Home/>
    </div>
  );
};

export default Index;
