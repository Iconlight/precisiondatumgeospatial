import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Compass, CheckCircle2 } from 'lucide-react';
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

  // Vertical scroll height so vertical scrolling smoothly drives horizontal movement through all 6 cards
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Smooth spring physics for fluid movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    restDelta: 0.001,
  });

  // As the user scrolls vertically through this section, the card container translates horizontally
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-72%']);

  return (
    <section 
      ref={targetRef} 
      id="smart-solutions-horizontal-section"
      className="relative h-[380vh] bg-[#fbfdfa] text-zinc-900 border-t border-zinc-200/60"
    >
      {/* Sticky Viewport Container with responsive spacing for all screen heights */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 pt-3 sm:pt-4 md:pt-5 pb-3 sm:pb-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-2 sm:gap-4 shrink-0 pb-1.5 border-b border-zinc-200/50"
        >
          <div className="max-w-xl">
            {/* Pill Badge */}
            <div 
              id="precision-solutions-badge"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-900/5 border border-emerald-800/15 text-emerald-950 shadow-2xs mb-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="tracking-tight text-emerald-900/90">Positioning & Geospatial Tech</span>
            </div>

            {/* Section Heading */}
            <h2 
              id="horizontal-solutions-heading"
              className="text-lg sm:text-2xl md:text-3xl font-medium text-[#0d2818] tracking-tight leading-tight"
            >
              Specialized Positioning &{' '}
              <span className="font-editorial italic font-normal text-[#0d2818]">
                Geospatial Technology
              </span>
            </h2>
          </div>

          {/* Subtitle Description */}
          <div className="md:max-w-sm lg:max-w-md">
            <p 
              id="horizontal-solutions-subtext"
              className="text-zinc-600 text-xs leading-relaxed font-normal"
            >
              High-order geodetic instruments, GNSS constellations, and enterprise GIS platforms translating physical ground into verified technical intelligence.
            </p>
          </div>
        </motion.div>

        {/* Horizontally Scrolling Cards Track */}
        <div className="relative w-full overflow-hidden my-auto py-1 sm:py-2">
          <motion.div 
            style={{ x }} 
            className="flex gap-4 sm:gap-6 md:gap-8 items-stretch will-change-transform"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                id={`card-${card.id}`}
                className="w-[270px] sm:w-[310px] md:w-[340px] lg:w-[370px] shrink-0 group flex flex-col justify-between bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-zinc-200/90 shadow-sm hover:shadow-md hover:border-emerald-600/30 transition-all duration-300 select-none cursor-grab active:cursor-grabbing"
              >
                {/* Responsive Image Container - compact height so details below are always 100% visible */}
                <div className="relative w-full h-[18vh] sm:h-[20vh] md:h-[22vh] max-h-[175px] min-h-[125px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xs border border-zinc-200/80 bg-zinc-100 mb-2.5 transition-all duration-300 group-hover:scale-[1.01]">
                  <img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  />
                  {/* Gradient & Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  
                  {card.badge && (
                    <div className="absolute top-2 right-2 backdrop-blur-md bg-black/60 border border-white/20 text-white text-[10px] font-medium px-2 py-0.5 rounded-full shadow-2xs">
                      {card.badge}
                    </div>
                  )}

                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                    <span className="text-white text-[10px] font-mono font-bold backdrop-blur-md bg-black/60 px-2 py-0.5 rounded-md border border-white/10">
                      {card.number}
                    </span>
                  </div>
                </div>

                {/* Card Title & Full Description */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1.5 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-zinc-950 tracking-tight leading-snug group-hover:text-emerald-900 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    
                    <p 
                      id={`card-${card.id}-desc`}
                      className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal"
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Specs Pill Tag */}
                  <div className="mt-2.5 pt-2 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span className="truncate">{card.specs}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Indicator Bar */}
        <div className="shrink-0 flex items-center justify-between pt-2.5 pb-1 border-t border-zinc-200/60 max-w-md sm:max-w-lg mx-auto w-full gap-4">
          <span className="text-[11px] font-semibold text-zinc-600 shrink-0 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>06 Specialized Technologies</span>
          </span>
          <div className="flex-1 h-1.5 bg-zinc-200/80 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              style={{ scaleX: smoothProgress, transformOrigin: 'left' }}
              className="h-full bg-[#0d2818] rounded-full"
            />
          </div>
          <span className="text-[11px] font-mono font-bold text-zinc-700 shrink-0">
            01 → 06
          </span>
        </div>
      </div>
    </section>
  );
};
