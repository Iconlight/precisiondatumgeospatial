import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map, 
  Building2, 
  Mountain, 
  HardHat, 
  Radio, 
  Layers, 
  Plus, 
  Minus, 
  CheckCircle2 
} from 'lucide-react';
import cadastralImg from '../assets/images/kenya_surveyor_tablet_1787154669189.jpg';
import sectionalImg from '../assets/images/kenya_sectional_towers_1787154736221.jpg';
import topographicImg from '../assets/images/kenya_topographic_dem_1787154718364.jpg';
import engineeringImg from '../assets/images/kenya_total_station_1787154701294.jpg';
import gnssImg from '../assets/images/kenya_gnss_rtk_field_1787154688718.jpg';
import gisImg from '../assets/images/kenya_gis_data_center_1787154749766.jpg';

interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  badge: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: 'cadastral',
    number: '01',
    title: 'Cadastral & Land Surveying',
    tagline: 'Define your land with confidence.',
    description:
      'Accurate spatial definition for land ownership, subdivision, title regularisation, and property development across Kenya.',
    bullets: [
      'Boundary surveys & verification',
      'Boundary identification & re-establishment',
      'Land subdivision & mutation surveys',
      'Amalgamation & re-parcellation',
      'Beacon establishment & reinstatement',
      'Title-related survey support',
    ],
    image: cadastralImg,
    imageAlt: 'Land surveyor establishing boundary beacon with optical prism and tripod',
    icon: <Map className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    iconBg: 'bg-[#D2F835]',
    iconColor: 'text-[#12240b]',
    badge: 'Land Ownership & Title',
  },
  {
    id: 'sectional-property',
    number: '02',
    title: 'Sectional Property',
    tagline: 'From building footprint to individual unit.',
    description:
      'Precise spatial information for residential apartments, mixed-use developments, and commercial sectional property projects.',
    bullets: [
      'Sectional property surveys',
      'Unit identification & volumetric measurement',
      'Floor & building architectural measurements',
      'Common property spatial demarcation',
      'Survey documentation for Sectional Titles',
    ],
    image: sectionalImg,
    imageAlt: 'Engineering surveyor working on sectional property and building setting out',
    icon: <Building2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    iconBg: 'bg-emerald-100/80',
    iconColor: 'text-emerald-900',
    badge: 'Apartments & Developments',
  },
  {
    id: 'topographical',
    number: '03',
    title: 'Topographical Surveys',
    tagline: 'Know the ground before you build on it.',
    description:
      'Understand the terrain before you design, build or develop. Our topographical surveys capture the exact physical characteristics of a site for informed engineering decisions.',
    bullets: [
      'High-resolution contour mapping',
      'Spot heights & ground elevation models',
      'Existing natural & built feature mapping',
      'Terrain slope & catchment analysis',
      'Architectural & engineering site plans',
    ],
    image: topographicImg,
    imageAlt: 'Surveyor analyzing 3D topographical contour map on rugged field tablet',
    icon: <Mountain className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    iconBg: 'bg-zinc-100',
    iconColor: 'text-zinc-800',
    badge: 'Terrain & Elevation Models',
  },
  {
    id: 'engineering-construction',
    number: '04',
    title: 'Engineering & Construction Surveys',
    tagline: 'Translate designs into physical reality with accuracy.',
    description:
      'Accurate positioning throughout the construction lifecycle to ensure structures, roads, and civil works are erected to exact architectural specifications.',
    bullets: [
      'Construction setting out',
      'Building setting out',
      'Road and infrastructure surveys',
      'Profile and cross-section surveys',
      'As-built surveys',
      'Construction control surveys',
      'Level and elevation determination',
    ],
    image: engineeringImg,
    imageAlt: 'Engineering surveyor conducting construction setting out on civil infrastructure site',
    icon: <HardHat className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-900',
    badge: 'Setting Out & As-Built',
  },
  {
    id: 'gnss-geospatial',
    number: '05',
    title: 'GNSS & Geospatial Data Services',
    tagline: 'High-order positioning and geodetic datum control.',
    description:
      'Reliable satellite-based spatial positioning, georeferencing, and coordinate management for engineering networks and regional projects.',
    bullets: [
      'GNSS/RTK positioning',
      'Survey control establishment',
      'Coordinate collection',
      'Georeferencing',
      'Spatial data capture',
      'Coordinate transformation and data processing',
    ],
    image: gnssImg,
    imageAlt: 'GNSS RTK positioning receiver capturing high-precision coordinates in the field',
    icon: <Radio className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-900',
    badge: 'Sub-Centimeter RTK',
  },
  {
    id: 'gis-mapping',
    number: '06',
    title: 'GIS & Mapping',
    tagline: 'Turn spatial information into actionable intelligence.',
    description:
      'Capture, manage, analyze, and visualize spatial data across properties, estates, municipal infrastructure, and regional assets.',
    bullets: [
      'Digital mapping',
      'GIS data collection and processing',
      'Spatial database development',
      'Digitization',
      'Map production',
      'Geospatial analysis',
      'Property and land information mapping',
    ],
    image: gisImg,
    imageAlt: 'Geographic Information System interface showing multi-layer digital mapping and parcel analytics',
    icon: <Layers className="w-4 h-4 sm:w-4.5 sm:h-4.5" />,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-900',
    badge: 'Spatial Intelligence',
  },
];

export const SmartFarmingSolutionsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('cadastral');

  const activeCapability = capabilities.find((s) => s.id === activeId) || capabilities[0];

  const handleToggle = (id: string) => {
    setActiveId(id);
  };

  return (
    <section 
      id="capabilities-section"
      className="relative z-10 w-full bg-[#fbfdfa] text-zinc-900 border-t border-zinc-200/60 px-4 sm:px-6 md:px-10 lg:px-16 pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Compact Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          <div className="max-w-xl">
            {/* Pill Badge */}
            <div 
              id="our-capabilities-badge"
              className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-medium bg-emerald-900/5 border border-emerald-800/15 text-emerald-950 shadow-xs mb-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="tracking-tight text-emerald-900/90 font-medium">Our Capabilities</span>
            </div>

            {/* Section Heading */}
            <h2 
              id="capabilities-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#0d2818] tracking-tight leading-[1.14]"
            >
              Professional Surveying &
              <span className="block font-editorial italic font-normal text-[#0d2818] mt-0.5 text-[1.06em]">
                Geospatial Solutions
              </span>
            </h2>
          </div>

          {/* Header Description */}
          <p 
            id="capabilities-subtext"
            className="text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md lg:pt-8 font-normal"
          >
            Accurate, reliable and technology-driven spatial solutions that help landowners,
            developers, architects, engineers and organizations make better decisions about land and development.
          </p>
        </motion.div>

        {/* Content Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Accordion with 6 Comprehensive Capabilities */}
          <motion.div 
            initial={{ opacity: 0, y: 52 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-2 sm:space-y-2.5"
          >
            {capabilities.map((item) => {
              const isOpen = activeId === item.id;
              return (
                <div
                  key={item.id}
                  id={`capability-item-${item.id}`}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                    isOpen
                      ? 'bg-zinc-50/95 border-zinc-300 shadow-sm ring-1 ring-emerald-600/10'
                      : 'bg-zinc-50/60 hover:bg-zinc-50 border-zinc-200/70 hover:border-zinc-300 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => handleToggle(item.id)}
                    className="w-full p-3 sm:p-3.5 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor} shadow-xs`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-zinc-400 block -mb-0.5">{item.number}</span>
                        <span className={`text-xs sm:text-sm md:text-base font-medium truncate block ${isOpen ? 'text-zinc-950 font-semibold' : 'text-zinc-800'}`}>
                          {item.title}
                        </span>
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                      isOpen ? 'bg-zinc-900 text-white' : 'bg-white border border-zinc-200/80 text-zinc-600'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-3 h-3" />
                      ) : (
                        <Plus className="w-3 h-3" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60">
                          <p className="mt-1 font-normal text-zinc-700">{item.description}</p>
                          
                          {/* Bullet points */}
                          <ul className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
                            {item.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-center gap-1.5 text-xs text-zinc-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                                <span className="truncate">{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tagline callout */}
                          <div className="mt-3 flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-900 bg-emerald-50/80 w-fit px-2.5 py-1 rounded-full border border-emerald-200/60">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{item.tagline}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Dynamic Media Card tied to the active accordion item */}
          <motion.div 
            initial={{ opacity: 0, y: 52 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 sticky top-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200/80 bg-zinc-100 aspect-[4/3] w-full max-h-[380px] sm:max-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeCapability.image}
                    alt={activeCapability.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center select-none"
                  />
                  {/* Subtle bottom gradient & status chip */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white pointer-events-none">
                    <span className="text-xs font-medium backdrop-blur-md bg-black/50 px-3 py-1 rounded-full border border-white/20 truncate max-w-[65%]">
                      {activeCapability.number} — {activeCapability.title}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D2F835] backdrop-blur-md bg-black/60 px-2.5 py-1 rounded-full border border-white/15 shrink-0">
                      {activeCapability.badge}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
