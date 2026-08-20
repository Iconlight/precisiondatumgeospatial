/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroContent } from './components/HeroContent';
import { HeroBottomBar } from './components/HeroBottomBar';
import { CultivaLegacySection } from './components/CultivaLegacySection';
import { SmartFarmingSolutionsSection } from './components/SmartFarmingSolutionsSection';
import { SmartSolutionsHorizontalSection } from './components/SmartSolutionsHorizontalSection';
import { SmartFarmingHowItWorksSection } from './components/SmartFarmingHowItWorksSection';
import { CommonFarmerQuestionsSection } from './components/CommonFarmerQuestionsSection';
import { AgroviaFooterCtaSection } from './components/AgroviaFooterCtaSection';
import { InvestModal, FarmersModal, ContactModal } from './components/Modals';
import heroBgImage from './assets/images/cadastral_aerial_clouds_1787148095039.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [capabilitiesModalOpen, setCapabilitiesModalOpen] = useState(false);

  const whereLandMeetsDataRef = useRef<HTMLDivElement>(null);
  const capabilitiesSectionRef = useRef<HTMLDivElement>(null);
  const technologySectionRef = useRef<HTMLDivElement>(null);
  const approachSectionRef = useRef<HTMLDivElement>(null);
  const stakeholdersSectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToWhereLandMeetsData = () => {
    whereLandMeetsDataRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCapabilities = () => {
    capabilitiesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTabNavigation = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    if (tab === 'about') whereLandMeetsDataRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'capabilities') capabilitiesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'technology') technologySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'approach') approachSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070e06] text-white flex flex-col selection:bg-[#D2F835] selection:text-black no-scrollbar">
      {/* HERO CONTAINER */}
      <section 
        id="hero-section"
        className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
      >
        {/* Background Image with Fallback and Smooth Scaling */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBgImage}
            alt="Aerial photography of land parcels professionally mapped with cadastral survey boundaries with soft clouds blending into the white background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[center_35%] sm:object-center select-none transform scale-102 transition-transform duration-1000 ease-out"
          />
          {/* Precise Contrast Gradients: deep legibility on left text, high clarity on mapped parcels */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 sm:via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent pointer-events-none" />
          {/* Seamless Cloud & White Mist Bottom Blend into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-60 md:h-72 bg-gradient-to-t from-[#fbfdfa] via-[#fbfdfa]/85 to-transparent pointer-events-none z-10" />
        </div>

        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleTabNavigation}
          onContactClick={() => setSurveyModalOpen(true)}
        />

        {/* Hero Main Content */}
        <HeroContent
          onInvestClick={() => setSurveyModalOpen(true)}
          onFarmersClick={handleScrollToCapabilities}
        />

        {/* Bottom Bar with Scroll Indicator & Nairobi Geodetic Credential Badge */}
        <HeroBottomBar
          onScrollClick={handleScrollToWhereLandMeetsData}
          onRatingClick={() => setCapabilitiesModalOpen(true)}
        />
      </section>

      {/* WHERE LAND MEETS DATA SECTION */}
      <div ref={whereLandMeetsDataRef}>
        <CultivaLegacySection />
      </div>

      {/* OUR CAPABILITIES SECTION */}
      <div ref={capabilitiesSectionRef}>
        <SmartFarmingSolutionsSection />
      </div>

      {/* SPECIALIZED POSITIONING & GEOSPATIAL TECHNOLOGY SECTION (NOW DIRECTLY ABOVE APPROACH) */}
      <div ref={technologySectionRef}>
        <SmartSolutionsHorizontalSection />
      </div>

      {/* OUR APPROACH: FROM THE GROUND TO THE FINAL DELIVERABLE SECTION */}
      <div ref={approachSectionRef}>
        <SmartFarmingHowItWorksSection />
      </div>

      {/* FOR THE PEOPLE BUILDING WHAT COMES NEXT & CORE PRINCIPLES SECTION */}
      <div ref={stakeholdersSectionRef}>
        <CommonFarmerQuestionsSection />
      </div>

      {/* CALL TO ACTION & COMPREHENSIVE PRECISION DATUM GEOSPATIAL FOOTER SECTION */}
      <AgroviaFooterCtaSection
        onContactClick={() => setSurveyModalOpen(true)}
        onNavigateTab={handleTabNavigation}
      />

      {/* Interactive Request a Survey Modal */}
      <InvestModal
        isOpen={surveyModalOpen}
        onClose={() => setSurveyModalOpen(false)}
      />

      {/* Capabilities Overview Modal */}
      <FarmersModal
        isOpen={capabilitiesModalOpen}
        onClose={() => setCapabilitiesModalOpen(false)}
      />
    </div>
  );
}
