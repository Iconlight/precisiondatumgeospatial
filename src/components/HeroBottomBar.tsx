import React from 'react';
import { ArrowDown, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroBottomBarProps {
  onScrollClick?: () => void;
  onRatingClick?: () => void;
}

export const HeroBottomBar: React.FC<HeroBottomBarProps> = ({
  onScrollClick,
  onRatingClick,
}) => {
  return (
    <div className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-3.5 sm:py-4 md:py-5 flex items-center justify-between">
        {/* Scroll Indicator */}
        <button
          id="scroll-indicator-btn"
          onClick={onScrollClick}
          className="group flex items-center gap-2 backdrop-blur-md bg-black/40 hover:bg-black/55 border border-white/20 rounded-full px-4 py-1.5 sm:py-2 text-white transition-all duration-200 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-95"
          aria-label="Scroll down"
        >
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white/95">
            Scroll to explore
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-[#D2F835] transition-transform duration-300 group-hover:translate-y-0.5 animate-bounce-slow" />
        </button>

        {/* Professional Geospatial Credential Badge */}
        <motion.div
          id="geospatial-credential-badge"
          onClick={onRatingClick}
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2 sm:gap-3 backdrop-blur-md bg-black/40 hover:bg-black/55 border border-white/20 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 transition duration-200 cursor-pointer shadow-lg"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D2F835]" />
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">Nairobi, Kenya</span>
          </div>

          <div className="h-3 w-px bg-white/25 hidden xs:block" />

          <div className="hidden xs:flex items-center gap-1.5 text-white/90 text-[11px] sm:text-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D2F835]" />
            <span>Licensed Surveying & GIS</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
