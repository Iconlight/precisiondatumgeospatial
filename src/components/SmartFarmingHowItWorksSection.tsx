import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  MapPin, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Target,
  FileSpreadsheet
} from 'lucide-react';
import surveyHeroSiteImg from '../assets/images/kenya_total_station_1787154701294.jpg';

interface StepItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  toolInfo: string;
}

const steps: StepItem[] = [
  {
    id: 'understand',
    number: '01',
    title: 'Understand',
    subtitle: 'Scope & Requirements',
    description: 'We begin by understanding the property, title history, zoning constraints, project requirements and intended outcome.',
    icon: <Target className="w-4 h-4 text-emerald-800" />,
    toolInfo: 'Client Brief & Cadastral Records',
  },
  {
    id: 'plan',
    number: '02',
    title: 'Plan',
    subtitle: 'Methodology & Control',
    description: 'We determine the appropriate survey methodology, field requirements, geodetic survey control network and expected deliverables.',
    icon: <Compass className="w-4 h-4 text-emerald-800" />,
    toolInfo: 'Control Network Design',
  },
  {
    id: 'capture',
    number: '03',
    title: 'Capture',
    subtitle: 'Field Positioning',
    description: 'Spatial information is collected on-site using GNSS/RTK receivers, robotic total stations, and precision digital levels.',
    icon: <Layers className="w-4 h-4 text-emerald-800" />,
    toolInfo: 'GNSS / RTK & Total Station',
  },
  {
    id: 'process',
    number: '04',
    title: 'Process',
    subtitle: 'Analysis & QA/QC',
    description: 'Field data is rigorously processed, coordinate-transformed, analyzed, and quality-checked to ensure sub-centimeter accuracy.',
    icon: <Cpu className="w-4 h-4 text-emerald-800" />,
    toolInfo: 'CAD & GIS Analytical Engine',
  },
  {
    id: 'deliver',
    number: '05',
    title: 'Deliver',
    subtitle: 'Technical Deliverable',
    description: 'We provide clear, usable technical information, certified survey plans, and spatial files designed to support your next project stage.',
    icon: <FileSpreadsheet className="w-4 h-4 text-emerald-800" />,
    toolInfo: 'Certified Plans & Spatial Data',
  },
];

export const SmartFarmingHowItWorksSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('capture');

  const activeStep = steps.find((s) => s.id === activeStepId) || steps[2];

  return (
    <section 
      id="approach-section"
      className="relative z-10 w-full bg-[#fbfdfa] text-zinc-900 border-t border-zinc-200/60 px-4 sm:px-6 md:px-10 lg:px-16 pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-20 md:pb-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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
              id="our-approach-badge"
              className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-medium bg-emerald-900/5 border border-emerald-800/15 text-emerald-950 shadow-xs mb-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span className="tracking-tight text-emerald-900/90 font-medium">Our Approach</span>
            </div>

            {/* Heading */}
            <h2 
              id="approach-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#0d2818] tracking-tight leading-[1.14]"
            >
              From the Ground to the
              <span className="block font-editorial italic font-normal text-[#0d2818] mt-0.5 text-[1.06em]">
                Final Deliverable
              </span>
            </h2>
          </div>

          {/* Header Subtitle */}
          <p 
            id="approach-subtext"
            className="text-zinc-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md lg:pt-8 font-normal"
          >
            Every project is different. The standard of accuracy should not be. Our disciplined 5-stage workflow ensures dependable spatial integrity.
          </p>
        </motion.div>

        {/* 5 Interactive Step Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-6 sm:mb-8"
        >
          {steps.map((step) => {
            const isActive = activeStepId === step.id;
            return (
              <button
                key={step.id}
                id={`step-tab-${step.id}`}
                onClick={() => setActiveStepId(step.id)}
                className={`p-3 sm:p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-zinc-100/95 border-zinc-300 shadow-sm ring-1 ring-emerald-600/10'
                    : 'bg-zinc-50/70 hover:bg-zinc-100/60 border-zinc-200/70 text-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-[10px] font-mono text-zinc-400">{step.number}</span>
                  <div className="w-6 h-6 rounded-lg bg-white border border-zinc-200/80 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-semibold truncate ${isActive ? 'text-zinc-950' : 'text-zinc-800'}`}>
                    {step.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 truncate mt-0.5">
                    {step.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Showcase Panoramic Card with Live Active Step Details */}
        <motion.div 
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 bg-zinc-900 min-h-[380px] sm:min-h-[440px] md:min-h-[480px] flex flex-col justify-between p-4 sm:p-6 md:p-8"
        >
          {/* Background Surveyor Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={surveyHeroSiteImg}
              alt="Geospatial surveyor operating total station in the field"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center select-none transform scale-102 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 pointer-events-none" />
          </div>

          {/* Top Status Bar inside showcase */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="backdrop-blur-md bg-black/40 border border-white/20 text-white rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D2F835] animate-pulse" />
              <span>Modern Tools • Professional Judgement</span>
            </div>

            <div className="backdrop-blur-md bg-black/45 border border-white/20 text-white rounded-full px-3.5 py-1.5 text-xs font-medium flex items-center gap-1.5 shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-[#D2F835]" />
              <span>Nairobi & Regional Operations</span>
            </div>
          </div>

          {/* Bottom Area: Active Step Expanded Glass Panel */}
          <div className="relative z-10 flex flex-col md:flex-row items-end justify-between gap-4 mt-auto">
            {/* Left badge */}
            <div className="backdrop-blur-md bg-black/50 border border-white/20 text-white rounded-2xl p-3.5 max-w-sm hidden sm:block">
              <span className="text-[11px] uppercase tracking-wider text-[#D2F835] font-bold block mb-1">
                Precision In Every Point
              </span>
              <p className="text-xs text-white/85 leading-snug">
                We translate physical ground into dependable technical spatial information.
              </p>
            </div>

            {/* Dynamic Card for Selected Step (Right side) */}
            <div className="w-full max-w-sm sm:max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="backdrop-blur-xl bg-white/90 border border-white/40 rounded-2xl p-4 sm:p-5 shadow-2xl text-zinc-900"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Step {activeStep.number}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-950">
                        {activeStep.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-medium text-zinc-500">
                      {activeStep.toolInfo}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-normal mt-1">
                    {activeStep.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-zinc-200/80 flex items-center justify-between text-xs">
                    <span className="text-zinc-500">Verified Technical Deliverable</span>
                    <span className="font-semibold text-emerald-900 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Quality Checked
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
