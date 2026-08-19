import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, CheckCircle, ShieldCheck, Clock, Award, Eye, Briefcase } from 'lucide-react';

interface StakeholderFAQ {
  id: string;
  role: string;
  question: string;
  answer: string;
  benefit: string;
}

const stakeholdersList: StakeholderFAQ[] = [
  {
    id: 'landowners',
    role: 'Landowners',
    question: 'How do our geospatial & boundary services assist Landowners?',
    answer:
      'Understand your property, boundaries and spatial information before making important decisions. We conduct boundary identification, beacon reinstatement, mutation surveys, and subdivision verification so you can develop or transact with complete confidence.',
    benefit: 'Clear Title Boundaries & Dispute Prevention',
  },
  {
    id: 'developers',
    role: 'Property Developers',
    question: 'How do we support Property Developers and Commercial Projects?',
    answer:
      'Build your development decisions on reliable site and land information. From sectional property measurements for apartments to topography for master planning, we deliver actionable spatial datasets that prevent costly encroachment and design revisions.',
    benefit: 'Accurate Site Feasibility & Sectional Documentation',
  },
  {
    id: 'real-estate',
    role: 'Real Estate Companies',
    question: 'How do our boundary & spatial verification services support Real Estate Companies?',
    answer:
      'Accelerate transactions and eliminate acquisition risks with verified boundary certificates, subdivision plans, beacon confirmations, and digital property maps that give buyers and investors absolute certainty.',
    benefit: 'Certified Boundary Due Diligence & Clean Titles',
  },
  {
    id: 'property-managers',
    role: 'Property Managers',
    question: 'How do our sectional property and site plans assist Property Managers?',
    answer:
      'Maintain precise spatial records of built assets, common areas, unit boundaries, utility networks, and sectional property allocations for smooth facility operations and conflict-free property administration.',
    benefit: 'Precise Asset Inventories & Common Property Demarcation',
  },
  {
    id: 'architects',
    role: 'Architects & Designers',
    question: 'What precision site data do Architects receive before design?',
    answer:
      'Start the design process with accurate information about the existing site. We provide high-density contour mapping, spot heights, tree/structure coordinates, perimeter setbacks, and digital terrain CAD files formatted directly for BIM and architectural drafting.',
    benefit: 'Exact 3D Terrain & Existing Feature Mapping',
  },
  {
    id: 'engineers',
    role: 'Engineers & Infrastructure Planners',
    question: 'How do Engineers benefit from our geodetic & vertical control?',
    answer:
      'Work from dependable coordinates, elevations and spatial control. We establish reliable geodetic benchmarks, traverse networks, road cross-sections, and drainage slope models to ensure civil infrastructure is built to exact design tolerances.',
    benefit: 'Sub-Centimeter Geodetic & Vertical Datum Control',
  },
  {
    id: 'construction',
    role: 'Construction Companies',
    question: 'How do we ensure precision during active construction?',
    answer:
      'Translate designs into physical reality with accurate setting out and verification. We provide gridline setting out, column alignment, level checks, and as-built surveys throughout every phase of the construction lifecycle.',
    benefit: 'Precise Setting Out & As-Built Verification',
  },
  {
    id: 'institutions',
    role: 'Institutions',
    question: 'How do we help Institutions manage expansive spatial assets & landholdings?',
    answer:
      'Capture, manage and protect large landholdings, institutional campuses, utility corridors, and municipal assets through enterprise GIS databases, cadastral mapping, and systematic boundary audits.',
    benefit: 'Enterprise GIS & Campus Land Asset Inventories',
  },
  {
    id: 'legal-professionals',
    role: 'Legal and Property Professionals',
    question: 'How do our certified survey reports support Legal & Property Professionals?',
    answer:
      'Provide authoritative cadastral survey plans, title deed boundary verifications, encroachment reports, and court-ready spatial evidence for conveyance, land dispute resolution, and estate regularisation.',
    benefit: 'Authoritative Cadastral Evidence & Title Verification',
  },
];

const corePrinciples = [
  {
    title: 'ACCURATE',
    desc: 'We prioritize reliable measurements and properly captured spatial data.',
    icon: <TargetIcon />,
  },
  {
    title: 'VERIFIED',
    desc: 'Data is processed and reviewed to ensure consistency and quality.',
    icon: <ShieldCheck className="w-4 h-4 text-emerald-700" />,
  },
  {
    title: 'PROFESSIONAL',
    desc: 'Every assignment is approached with clear processes, communication and discipline.',
    icon: <Award className="w-4 h-4 text-emerald-700" />,
  },
  {
    title: 'PRACTICAL',
    desc: 'We focus on delivering information that serves the actual requirements of your project.',
    icon: <CheckCircle className="w-4 h-4 text-emerald-700" />,
  },
  {
    title: 'TIMELY',
    desc: 'We understand survey information is often the starting point for decisions with deadlines.',
    icon: <Clock className="w-4 h-4 text-emerald-700" />,
  },
  {
    title: 'INTEGRITY',
    desc: 'We handle client information, property data and project requirements with discretion.',
    icon: <Eye className="w-4 h-4 text-emerald-700" />,
  },
];

function TargetIcon() {
  return (
    <div className="w-4 h-4 rounded-full border-2 border-emerald-700 flex items-center justify-center">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
    </div>
  );
}

export const CommonFarmerQuestionsSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['landowners', 'real-estate', 'institutions']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section 
      id="stakeholders-section"
      className="relative z-10 w-full bg-[#fbfdfa] text-zinc-900 border-t border-zinc-200/60 px-4 sm:px-6 md:px-10 lg:px-16 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-28 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-12"
        >
          {/* Pill Badge */}
          <div 
            id="stakeholders-badge"
            className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-medium bg-emerald-900/5 border border-emerald-800/15 text-emerald-950 shadow-xs mb-3.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span className="tracking-tight text-emerald-900/90 font-medium">Who We Serve</span>
          </div>

          {/* Centered Heading */}
          <h2 
            id="stakeholders-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-medium text-[#0d2818] tracking-tight leading-[1.14]"
          >
            For the People Building{' '}
            <span className="font-editorial italic font-normal text-[#0d2818]">
              What Comes Next
            </span>
          </h2>

          {/* Subtitle */}
          <p 
            id="stakeholders-subtext"
            className="text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-2.5 font-normal"
          >
            Our services support landowners, developers, real estate companies, property managers, architects, engineers, construction companies, institutions, and legal and property professionals.
          </p>

          {/* Quick Category Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 max-w-3xl mx-auto">
            {[
              'Landowners',
              'Property Developers',
              'Real Estate Companies',
              'Property Managers',
              'Architects & Engineers',
              'Construction Companies',
              'Institutions',
              'Legal and Property Professionals',
            ].map((role, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium bg-zinc-100/90 text-zinc-700 px-2.5 py-0.5 rounded-full border border-zinc-200/80"
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stakeholder FAQ Accordion List */}
        <motion.div 
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-2.5 sm:space-y-3 mb-14 sm:mb-16"
        >
          {stakeholdersList.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                id={`stakeholder-item-${item.id}`}
                className={`rounded-2xl transition-all duration-200 overflow-hidden border ${
                  isOpen
                    ? 'bg-zinc-100/95 border-zinc-300 shadow-sm ring-1 ring-emerald-600/10'
                    : 'bg-zinc-100/70 hover:bg-zinc-100 border-zinc-200/80 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-3.5 sm:p-4 md:p-5 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 min-w-0">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-900/10 text-emerald-900 border border-emerald-900/15 shrink-0">
                      {item.role}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-medium text-zinc-900 leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-xs ${
                    isOpen ? 'bg-zinc-900 text-white' : 'bg-white border border-zinc-200/80 text-zinc-600'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-200/60 font-normal">
                        <p className="mt-1 text-zinc-700">{item.answer}</p>
                        <div className="mt-2.5 inline-flex items-center gap-1.5 text-emerald-900 font-semibold text-[11px] sm:text-xs bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                          <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{item.benefit}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* BUILT AROUND PRECISION - Core Principles Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pt-8 border-t border-zinc-200/80"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-medium bg-emerald-900/5 border border-emerald-800/15 text-emerald-950 shadow-xs mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="tracking-tight text-emerald-900/90 font-medium">Built Around Precision</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#0d2818] tracking-tight">
              Six Standards of Professional Excellence
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-md mx-auto mt-1">
              Every project is different. The standard of accuracy should not be.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {corePrinciples.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-300 transition shadow-xs flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-2xs">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-wide text-zinc-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
