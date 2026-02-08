import React, { useState } from 'react';
import ScratchCard from '@/components/ScratchCard2';

const Home = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-background relative overflow-hidden px-4 pt-8 pb-8">
      {/* Top: Save the Date - NOW BOLD */}
      <h1 
        className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.2em] uppercase z-10 mb-4 font-bold"
        style={{ color: '#2E2E2E' }}
      >
        Save The Date
      </h1>

      {/* Center: Scratch card heart - INCREASED SIZE */}
      <div className="relative z-10 mb-4">
        <ScratchCard
          width={320}
          height={300}
          onComplete={() => setIsRevealed(true)}
        />
      </div>

      {/* Bottom: Names */}
      <p 
        className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.15em] z-10 mb-2 mt-8"
        style={{ 
          color: '#7A7A7A', 
          lineHeight: '1.2',
          fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Didot', 'Bodoni Moda', serif"
        }}
      >
        With Regards
      </p>
          
      <p 
        className="text-base sm:text-lg font-semibold tracking-wide mb-2"
        style={{ 
          color: '#000000', 
          lineHeight: '1',
          fontFamily: "'Playfair Display', 'Bodoni Moda', 'Didot', 'Cormorant Garamond', serif"
        }}
      >
        DOSHI FAMILY
      </p>
      
      <p 
        className="italic text-sm sm:text-base tracking-wide"
        style={{ 
          color: '#7A7A7A', 
          lineHeight: '1.2',
          fontFamily: "'Playfair Display', 'Cormorant Garamond', 'Didot', 'Bodoni Moda', serif"
        }}
      >
        Blessing Only
      </p>
    </div>
  );
};

export default Home;