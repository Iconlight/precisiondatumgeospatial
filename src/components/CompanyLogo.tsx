import React from 'react';
import logoImg from '../assets/images/precision_datum_official_v2_1787157695429.jpg';

interface CompanyLogoProps {
  variant?: 'navbar' | 'modal' | 'footer' | 'full';
  className?: string;
  showTagline?: boolean;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'navbar',
  className = '',
  showTagline = false,
}) => {
  if (variant === 'navbar') {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <div className="bg-white rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border border-white/95 flex items-center justify-center transition-all duration-300 hover:scale-105">
          <img
            src={logoImg}
            alt="Precision Datum Geospatial Ltd"
            referrerPolicy="no-referrer"
            className="h-10 sm:h-12 md:h-14 lg:h-15 w-auto object-contain select-none"
          />
        </div>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <div className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-xs border border-zinc-200/80 flex items-center justify-center">
          <img
            src={logoImg}
            alt="Precision Datum Geospatial Ltd"
            referrerPolicy="no-referrer"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain select-none"
          />
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <div className="bg-white rounded-2xl p-2.5 sm:p-3 shadow-md border border-zinc-200/90 flex items-center justify-center">
          <img
            src={logoImg}
            alt="Precision Datum Geospatial Ltd"
            referrerPolicy="no-referrer"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain select-none"
          />
        </div>
      </div>
    );
  }

  // Standalone Full Variant
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-zinc-200 flex items-center justify-center mb-2">
        <img
          src={logoImg}
          alt="Precision Datum Geospatial Ltd"
          referrerPolicy="no-referrer"
          className="h-24 sm:h-32 md:h-36 w-auto object-contain select-none"
        />
      </div>
      {showTagline && (
        <p className="text-xs sm:text-sm text-zinc-600 italic font-editorial mt-1">
          Accurate Information. Precise Decisions.
        </p>
      )}
    </div>
  );
};
