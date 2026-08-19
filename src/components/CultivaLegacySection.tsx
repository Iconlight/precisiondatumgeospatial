import React, { useState } from 'react';
import { motion } from 'motion/react';
import surveyorPillImg from '../assets/images/kenya_surveyor_tablet_1787154669189.jpg';
import { Layers, MapPin, CheckCircle2 } from 'lucide-react';

export const CultivaLegacySection: React.FC = () => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <section 
      id="where-land-meets-data-section"
      className="relative z-10 w-full bg-[#fbfdfa] text-zinc-900 px-4 sm:px-6 md:px-10 lg:px-16 pt-[56px] sm:pt-[68px] pb-[56px] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Spatial Solutions Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8"
        >
          <div 
            id="spatial-data-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-emerald-900/5 border border-emerald-800/15 text-emerald-950 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="tracking-tight text-emerald-900/90 font-medium">Where Land Meets Data</span>
          </div>
        </motion.div>

        {/* Large Statement with Inline Image Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 
            id="geospatial-statement"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal leading-[1.38] sm:leading-[1.32] md:leading-[1.28] tracking-[-0.015em] max-w-5xl"
          >
            <span className="text-zinc-950 font-medium">
              Land decisions begin with knowing exactly what is there.
            </span>{' '}
            <span className="text-zinc-500 font-normal">
              From property boundaries and terrain to construction coordinates and spatial information, we transform physical environments
            </span>{' '}
            {/* Inline Media Pill */}
            <span 
              className="inline-flex items-center align-middle mx-1 sm:mx-2 rounded-full overflow-hidden border border-zinc-300/80 shadow-md w-12 h-6 sm:w-16 sm:h-8 md:w-20 md:h-9 lg:w-24 lg:h-10 bg-zinc-200 transform -translate-y-0.5 sm:-translate-y-1 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              <img
                src={surveyorPillImg}
                alt="Kenyan surveyor tablet measurement"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
            </span>{' '}
            <span className="text-zinc-500 font-normal">
              into accurate data that can be measured, understood and acted upon.
            </span>
          </h2>

          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 pt-6 border-t border-zinc-200/60 max-w-3xl"
          >
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Our work combines professional surveying practice, modern positioning technologies and geospatial data processing to deliver dependable information for the projects that depend on precision.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
