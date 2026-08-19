import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroContentProps {
  onInvestClick: () => void;
  onFarmersClick: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onInvestClick,
  onFarmersClick,
}) => {
  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col justify-center flex-1 pt-12 sm:pt-16 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl md:max-w-2xl lg:max-w-3xl mt-[19px]"
      >
        {/* Pill Badge */}
        <div 
          id="hero-badge"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-black/40 border border-white/20 text-[#D2F835] backdrop-blur-md shadow-xs mb-4 sm:mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D2F835] animate-pulse" />
          <span className="tracking-wide uppercase text-[11px] text-white/90">Precision Datum Geospatial</span>
        </div>

        {/* Main Headline - WE MAP THE GROUND BEHIND BIG DECISIONS */}
        <h1 
          id="hero-headline"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[66px] font-normal sm:font-medium text-white tracking-[-0.02em] leading-[1.12] sm:leading-[1.10] md:leading-[1.06] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]"
        >
          We Map the Ground Behind
          <span className="block mt-1 sm:mt-1.5 md:mt-2">
            BIG <span className="font-editorial italic font-normal text-white font-serif tracking-normal text-[1.14em] ml-0.5 sm:ml-1">Decisions.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p 
          id="hero-description"
          className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 text-white/90 text-xs sm:text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
        >
          Precision Datum Geospatial provides professional surveying, mapping and geospatial solutions for land development, construction, infrastructure and property.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 md:mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            id="start-investing-btn"
            onClick={onInvestClick}
            className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-[#D2F835] hover:bg-[#c2ea27] text-zinc-950 font-bold text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-full transition-all duration-200 shadow-xl hover:shadow-[0_10px_25px_rgba(210,248,53,0.35)] hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Request a Survey</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            id="meet-farmers-btn"
            onClick={onFarmersClick}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/35 text-white font-medium text-xs sm:text-sm md:text-base px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-full transition-all duration-200 shadow-lg hover:border-white/60 active:scale-95 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D2F835]" />
            <span>Explore Our Capabilities</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
