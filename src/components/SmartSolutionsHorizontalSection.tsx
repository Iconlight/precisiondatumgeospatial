import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import gnssImg from '../assets/images/kenya_gnss_rtk_field_1787154688718.jpg';
import engineeringImg from '../assets/images/kenya_total_station_1787154701294.jpg';
import topographicImg from '../assets/images/kenya_topographic_dem_1787154718364.jpg';
import cadastralImg from '../assets/images/kenya_surveyor_tablet_1787154669189.jpg';
import gisImg from '../assets/images/kenya_gis_data_center_1787154749766.jpg';

interface SolutionCard {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  specs: string;
}

const cards: SolutionCard[] = [
  {
    id: 'gnss-rtk',
    number: '01',
    title: 'GNSS/RTK Surveying',
    description: 'High-precision satellite-based positioning, real-time kinematic survey control, and geodetic coordinate collection.',
    image: gnssImg,
    badge: 'Sub-Centimeter RTK',
    specs: 'Multi-constellation satellite positioning',
  },
  {
    id: 'total-station',
    number: '02',
    title: 'Total Station Surveying',
    description: 'High-precision electronic distance measurement and angular observation for boundary demarcation, alignment, and setting out.',
    image: engineeringImg,
    badge: 'Millimeter Angular Control',
    specs: 'Robotic optical & reflectorless measurement',
  },
  {
    id: 'digital-level',
    number: '03',
    title: 'Digital Level Surveying',
    description: 'Precise elevation determination, vertical benchmark networks, profile leveling, and vertical control for civil infrastructure.',
    image: topographicImg,
    badge: 'Vertical Datum Control',
    specs: 'Bar-code electronic height determination',
  },
  {
    id: 'cad-processing',
    number: '04',
    title: 'CAD-Based Survey Processing',
    description: 'Transforming field coordinates into structured CAD survey plans, architectural overlays, subdivision schemes, and BIM models.',
    image: cadastralImg,
    badge: 'CAD & BIM Integration',
    specs: 'AutoCAD, Civil 3D, and coordinate geometry',
  },
  {
    id: 'gis-analysis',
    number: '05',
    title: 'GIS Software & Spatial Analysis',
    description: 'Spatial database development, multi-layer spatial analysis, attribute querying, property mapping, and geospatial modeling.',
    image: gisImg,
    badge: 'Spatial Intelligence',
    specs: 'Enterprise GIS & spatial databases',
  },
  {
    id: 'digital-mapping',
    number: '06',
    title: 'Digital Mapping & Data Management',
    description: 'Comprehensive spatial data capture, digitization, georeferencing, land parcel inventories, and asset information mapping.',
    image: gisImg,
    badge: 'Geospatial Data Management',
    specs: 'Orthomosaics, georeferencing & asset maps',
  },
];

export const SmartSolutionsHorizontalSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Generous scroll height for a calm, comfortable horizontal scrolling pace across all 6 tech cards
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Balanced, buttery smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 28,
    restDelta: 0.001,
  });

  // Smoothly scrolls across cards with a relaxed progression
  const x = useTransform(smoothProgress, [0, 0.85, 1], ['0%', '-80%', '-80%']);

  return (
    <section 
      ref={targetRef} 
      id="smart-solutions-horizontal-section"
      style={{ height: '600px' }}
      className="relative h-[600px] bg-[#fbfdfa] text-zinc-900 border-t border-zinc-200/60 overflow-hidden"
    >
      {/* Container with guaranteed fit inside 600px height */}
      <div className="h-full w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 pt-5 pb-5 max-w-7xl mx-auto">
        {/* Compact, Adaptive Header */}
        <motion.div 
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 sm:gap-6 shrink-0"
        >
          <div className="max-w-xl">
            {/* Pill Badge */}
            <div 
              id="precision-solutions-badge"
              className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium bg-emerald-900/5 border border-emerald-800/15 text-emerald-950 shadow-xs mb-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="tracking-tight text-emerald-900/90 font-medium">Positioning & Geospatial Tech</span>
            </div>

            {/* Section Heading */}
            <h2 
              id="horizontal-solutions-heading"
              className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-medium text-[#0d2818] tracking-tight leading-[1.14]"
            >
              Specialized Positioning &
              <span className="block font-editorial italic font-normal text-[#0d2818] mt-0.5 text-[1.04em]">
                Geospatial Technology
              </span>
            </h2>
          </div>

          {/* Subtitle Description */}
          <p 
            id="horizontal-solutions-subtext"
            className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-md lg:pt-5 font-normal"
          >
            We combine high-order geodetic instruments, GNSS constellations, and GIS platforms to translate physical ground into actionable technical intelligence.
          </p>
        </motion.div>

        {/* Horizontally Scrolling Cards Track with Adaptive Height */}
        <div className="relative w-full overflow-x-auto no-scrollbar my-auto py-2 pb-[8px]">
          <div className="flex gap-5 sm:gap-7 md:gap-9 items-stretch pb-2">
            {cards.map((card) => (
              <div
                key={card.id}
                id={`card-${card.id}`}
                className="w-[260px] sm:w-[300px] md:w-[330px] lg:w-[360px] shrink-0 group flex flex-col justify-between cursor-pointer select-none"
              >
                {/* Responsive Image Container constrained to viewport height */}
                <div className="relative w-full h-[28vh] sm:h-[32vh] md:h-[34vh] max-h-[290px] min-h-[170px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200/80 bg-zinc-100 mb-3 transition-all duration-300 group-hover:shadow-2xl group-hover:border-emerald-600/30">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  />
                  {/* Subtle Gradient & Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  {card.badge && (
                    <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 backdrop-blur-md bg-black/55 border border-white/20 text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full shadow-xs">
                      {card.badge}
                    </div>
                  )}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="text-white/90 text-[10px] font-mono backdrop-blur-sm bg-black/50 px-2 py-0.5 rounded-md">
                      {card.number}
                    </span>
                    <span className="text-[#D2F835] text-[10px] font-semibold backdrop-blur-sm bg-black/50 px-2 py-0.5 rounded-md hidden sm:inline-block">
                      {card.specs}
                    </span>
                  </div>
                </div>

                {/* Card Title & Description - Guaranteed 100% visible */}
                <div className="shrink-0">
                  <h3 className="text-base sm:text-lg font-medium text-zinc-950 tracking-tight leading-snug group-hover:text-emerald-900 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-snug sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Indicator Bar - Perfectly Centered */}
        <div className="shrink-0 flex items-center justify-between pt-2 border-t border-zinc-200/50 max-w-sm sm:max-w-md mx-auto w-full gap-4">
          <span className="text-[11px] font-medium text-zinc-500 shrink-0">
            6 Specialized Technologies
          </span>
          <div className="flex-1 h-1.5 bg-zinc-200/80 rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
              className="h-full bg-emerald-700 rounded-full"
            />
          </div>
          <span className="text-[11px] font-mono text-zinc-500 shrink-0">
            01 – 06
          </span>
        </div>
      </div>
    </section>
  );
};
