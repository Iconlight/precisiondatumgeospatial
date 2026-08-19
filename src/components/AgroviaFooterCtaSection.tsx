import React from 'react';
import { Phone, MapPin, Mail, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import bgLandscapeImg from '../assets/images/kenya_footer_skyline_1787154767469.jpg';
import { CompanyLogo } from './CompanyLogo';

interface AgroviaFooterCtaSectionProps {
  onContactClick: () => void;
  onNavigateTab?: (tab: string) => void;
}

export const AgroviaFooterCtaSection: React.FC<AgroviaFooterCtaSectionProps> = ({
  onContactClick,
  onNavigateTab,
}) => {
  return (
    <section 
      id="cta-footer-section"
      className="relative z-10 w-full min-h-screen bg-cover bg-center bg-no-repeat pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: `url(${bgLandscapeImg})` }}
    >
      {/* Top subtle white/light gradient overlay for gentle contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbfdfa] via-white/50 to-black/35 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col justify-between flex-1">
        {/* Top Call to Action Block with Slide-in Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 md:mb-24"
        >
          <div 
            id="footer-cta-badge"
            className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-900/10 border border-emerald-800/20 text-emerald-950 shadow-xs mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Have a Project in Mind?</span>
          </div>

          <h2 
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium text-[#0d2818] tracking-tight leading-[1.12]"
          >
            Precision that supports progress,
            <span className="block font-editorial italic font-normal text-[#0d2818] mt-1 text-[1.06em]">
              confidence in every decision
            </span>
          </h2>

          <p 
            id="cta-subtext"
            className="text-zinc-800 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto mt-3.5 sm:mt-4 font-normal"
          >
            Tell us what you need and our team will help determine the appropriate geospatial solution for your land, property, or development.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              id="cta-contact-btn"
              onClick={onContactClick}
              className="inline-flex items-center justify-center bg-[#D2F835] hover:bg-[#c2ea27] text-zinc-950 font-bold text-xs sm:text-sm px-7 py-3 rounded-full shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Request a Survey
            </button>
            <a
              href="tel:0741275825"
              className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-zinc-900 font-semibold text-xs sm:text-sm px-5 py-3 rounded-full shadow-md border border-zinc-200/80 transition-all duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>0741 275 825</span>
            </a>
          </div>
        </motion.div>

        {/* Floating Comprehensive Footer Card with Slide-in Animation */}
        <motion.div 
          id="agrovia-footer-card"
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[28px] sm:rounded-[36px] bg-[#f8faf7]/95 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-6 sm:p-10 md:p-12 lg:p-14 text-zinc-900"
        >
          {/* Main Footer Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-zinc-200/70">
            {/* Column 1: Brand & Contact (5 cols) */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Brand Logo */}
                <div className="mb-3.5">
                  <CompanyLogo variant="footer" />
                </div>

                {/* Subtext */}
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-sm mb-4 font-normal">
                  Professional surveying, mapping and geospatial solutions for land, property, construction and infrastructure.
                </p>

                {/* Tagline & Location Pill Badges */}
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs text-zinc-700 shadow-2xs w-fit">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Nairobi, Kenya • P.O. Box 525 – Nairobi</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="tel:0741275825"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-semibold text-zinc-800 hover:text-emerald-800 hover:border-emerald-600/40 transition shadow-2xs w-fit"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>0741 275 825</span>
                    </a>
                    <a
                      href="mailto:precisiondatumgeospatial@gmail.com"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/90 text-xs font-semibold text-zinc-800 hover:text-emerald-800 hover:border-emerald-600/40 transition shadow-2xs w-fit"
                    >
                      <Mail className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>precisiondatumgeospatial@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Capabilities (4 cols) */}
            <div className="md:col-span-3 lg:col-span-4">
              <h4 className="text-xs sm:text-sm font-semibold text-zinc-950 mb-3 sm:mb-4">
                Capabilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 font-normal">
                <li><button onClick={() => onNavigateTab?.('capabilities')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">Cadastral & Land Surveying</button></li>
                <li><button onClick={() => onNavigateTab?.('capabilities')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">Sectional Property Surveys</button></li>
                <li><button onClick={() => onNavigateTab?.('capabilities')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">Topographical Surveys</button></li>
                <li><button onClick={() => onNavigateTab?.('capabilities')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">Engineering & Construction</button></li>
                <li><button onClick={() => onNavigateTab?.('technology')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">GNSS & Geospatial Data</button></li>
                <li><button onClick={() => onNavigateTab?.('technology')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">GIS & Digital Mapping</button></li>
              </ul>
            </div>

            {/* Column 3: Company (3 cols) */}
            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="text-xs sm:text-sm font-semibold text-zinc-950 mb-3 sm:mb-4">
                Company & Tech
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 font-normal">
                <li><button onClick={() => onNavigateTab?.('about')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">Where Land Meets Data</button></li>
                <li><button onClick={() => onNavigateTab?.('approach')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">Our 5-Stage Approach</button></li>
                <li><button onClick={() => onNavigateTab?.('technology')} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">Modern Tools & Equipment</button></li>
                <li><button onClick={onContactClick} className="hover:text-emerald-900 transition-colors text-left cursor-pointer">Request a Survey</button></li>
              </ul>
            </div>
          </div>

          {/* Sub-footer Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
            <p>© 2026 Precision Datum Geospatial. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-zinc-600">Land • Surveying • Mapping • Data</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
