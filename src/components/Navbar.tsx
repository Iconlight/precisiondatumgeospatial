import React, { useState } from 'react';
import { Home, Menu, X, ArrowRight, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavItem } from '../types';
import { CompanyLogo } from './CompanyLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  onContactClick: () => void;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', isHome: true },
  { id: 'about', label: 'About' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'technology', label: 'Technology' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onContactClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full pt-4 sm:pt-6 md:pt-7 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto flex items-center justify-between">
      {/* Brand Logo - Official Precision Datum Geospatial Logo */}
      <div 
        id="brand-logo"
        className="cursor-pointer shrink-0"
        onClick={() => setActiveTab('home')}
      >
        <CompanyLogo variant="navbar" />
      </div>

      {/* Floating Center Navigation Capsule (Desktop & Tablet) */}
      <nav 
        id="desktop-nav"
        className="hidden md:flex items-center backdrop-blur-xl bg-black/25 border border-white/20 rounded-full p-1 lg:p-1.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] mx-2"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`relative px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                isActive
                  ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                  : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.isHome && (
                <span className={`transition-colors ${isActive ? 'text-[#12240b]' : 'text-white/85'}`}>
                  <Home className="w-3.5 h-3.5 lg:w-4 lg:h-4 fill-current" />
                </span>
              )}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Contact Button (Desktop/Tablet) & Mobile Hamburger */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          id="contact-us-btn"
          onClick={onContactClick}
          className="hidden sm:inline-flex items-center justify-center bg-[#D2F835] hover:bg-[#c3ec29] text-zinc-950 font-bold text-xs sm:text-sm px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap"
        >
          Request a Survey
        </button>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-black/30 border border-white/20 text-white backdrop-blur-md"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 sm:top-20 left-4 right-4 z-40 p-4 sm:p-5 rounded-2xl backdrop-blur-2xl bg-zinc-950/95 border border-white/15 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-left font-medium transition text-sm ${
                    activeTab === item.id
                      ? 'bg-white text-zinc-950 font-bold'
                      : 'text-white/80 hover:bg-white/10 text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.isHome && <Home className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </div>
                  {activeTab === item.id && <ArrowRight className="w-4 h-4" />}
                </button>
              ))}
              <div className="pt-2.5 border-t border-white/15 mt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full bg-[#D2F835] text-zinc-950 font-bold py-2.5 rounded-xl text-center shadow-md text-sm"
                >
                  Request a Survey
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
