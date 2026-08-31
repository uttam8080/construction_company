import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Hammer, 
  Building2, 
  Home, 
  Layers, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconComponents = {
  Hammer,
  Building2,
  Home,
  Layers,
  Sparkles,
  Compass
};

const ServiceCard = ({ service, idx, totalItems, scrollYProgress, onClick }) => {
  const Icon = iconComponents[service.iconName] || Building2;
  
  // We use mathematical callbacks to guarantee no framer-motion array extrapolation crashes
  const delay = 0.15;
  const activeSpace = 1 - delay;
  const step = activeSpace / totalItems;
  
  const height = useTransform(scrollYProgress, (pos) => {
    if (pos <= delay) return "56px"; // Dead zone at the start
    
    const peak = delay + ((idx + 0.5) * step);
    const dist = Math.abs(pos - peak);
    // Expand when within 1 step distance
    const progress = Math.max(0, 1 - (dist / step));
    return `${56 + (progress * (240 - 56))}px`;
  });

  const expandedOpacity = useTransform(scrollYProgress, (pos) => {
    if (pos <= delay) return 0;
    
    const peak = delay + ((idx + 0.5) * step);
    const dist = Math.abs(pos - peak);
    // Use the exact same threshold (step) as height so it fades in immediately
    const progress = Math.max(0, 1 - (dist / step));
    return progress;
  });

  const collapsedOpacity = useTransform(scrollYProgress, (pos) => {
    if (pos <= delay) return 1;
    
    const peak = delay + ((idx + 0.5) * step);
    const dist = Math.abs(pos - peak);
    // Inverse of expanded
    const progress = Math.min(1, dist / step);
    return progress;
  });

  return (
    <motion.div
      onClick={onClick}
      className="relative overflow-hidden shadow-lg rounded-[2rem] sm:rounded-[2.5rem] flex flex-col justify-end cursor-pointer"
      style={{ height }}
    >
      {/* Base Background (Collapsed State) */}
      <div className="absolute inset-0 bg-[#F1F5F9] pointer-events-none" />

      {/* Expanded Background Overlay */}
      <motion.div 
        className="absolute inset-0 bg-[#0D1522] pointer-events-none"
        style={{ opacity: expandedOpacity }}
      />
      {/* Active Expanded State: Background Image */}
      <motion.div
        style={{ opacity: expandedOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center filter brightness-75 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1522] via-[#0D1522]/40 to-transparent" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {/* Collapsed State Layout */}
        <motion.div 
          style={{ opacity: collapsedOpacity }}
          className="absolute inset-0 flex items-center justify-between px-6 sm:px-8 pointer-events-none"
        >
          <div className="flex items-center gap-4">
            <div className="text-[#0D1522]/50">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[#0D1522] text-sm sm:text-base">{service.title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-[10px] font-mono text-[#0D1522]/50 tracking-wider">
              {service.metric}
            </div>
            <div className="w-8 h-8 rounded-full bg-[#0D1522]/5 flex items-center justify-center">
              <ChevronDown className="w-4 h-4 text-[#0D1522]" />
            </div>
          </div>
        </motion.div>

        {/* Expanded State Layout */}
        <motion.div
          style={{ opacity: expandedOpacity }}
          className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 pointer-events-none"
        >
          <div className="flex items-end justify-between gap-6 pointer-events-auto">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-[#CBD5E1]/90 leading-relaxed">
                {service.shortDesc}
              </p>
            </div>
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white flex-shrink-0 hover:bg-[#E8892D] hover:border-[#E8892D] transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Services({ onOpenQuote }) {
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // We dedicate the first chunk of scrolling to fading out the header and sliding the accordion up.
  // Then the remaining space is divided among the 6 cards.
  const headerFadeEnd = 0.15;
  const activeSpace = 1 - headerFadeEnd;
  const step = activeSpace / 6;

  // Header Animation
  const headerOpacity = useTransform(scrollYProgress, [0, headerFadeEnd * 0.8], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, headerFadeEnd * 0.8], ["0%", "-50%"]);
  
  // Accordion Wrapper Animation (slides up to take the header's space)
  const accordionY = useTransform(scrollYProgress, [0, headerFadeEnd], ["0px", "-120px"]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative z-10 bg-[#162238] text-white"
      style={{ height: "600vh" }} 
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Architectural Patterns */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E8892D]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
          
          {/* Animated Section Header */}
          <motion.div 
            style={{ opacity: headerOpacity, y: headerY }}
            className="text-center max-w-3xl mx-auto mb-10 space-y-3"
          >
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#E8892D]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E8892D]">
                WHAT WE DO
              </span>
              <span className="w-6 h-0.5 bg-[#E8892D]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              Comprehensive Construction Services. <br />
            </h2>
          </motion.div>

          {/* Vertical Accordion Stack (Slides up as header fades) */}
          <motion.div 
            style={{ y: accordionY }}
            className="flex flex-col gap-2 max-w-4xl mx-auto w-full"
          >
              {servicesData.map((service, idx) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  idx={idx}
                  totalItems={servicesData.length}
                  scrollYProgress={scrollYProgress}
                  onClick={() => setActiveServiceModal(service)}
                />
              ))}
            </motion.div>
          </div>
        </div>

      {/* Banner CTA positioned at the bottom of the 600vh section */}
      x

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveServiceModal(null)}
              className="fixed inset-0 bg-[#090E17]/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#0D1522] text-white p-6 sm:p-8 rounded-sm shadow-2xl border border-white/15 z-10"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#E8892D] uppercase tracking-widest block">
                    SERVICE CAPABILITY {activeServiceModal.number}
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold text-white mt-1">
                    {activeServiceModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="p-2 rounded-sm bg-[#162238] text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-5 space-y-4 text-xs sm:text-sm text-[#CBD5E1]">
                <p className="leading-relaxed">
                  {activeServiceModal.fullDesc}
                </p>

                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white pt-2">
                  CORE DELIVERABLES & METHODS
                </h4>

                <div className="space-y-2.5">
                  {activeServiceModal.deliverables?.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-[#162238] p-2.5 rounded-sm border border-white/5 text-xs text-[#F8FAFC]">
                      <CheckCircle2 className="w-4 h-4 text-[#E8892D] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="text-xs text-gray-400 hover:text-white uppercase font-semibold"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveServiceModal(null);
                    onOpenQuote();
                  }}
                  className="bg-[#E8892D] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm hover:bg-[#d97b20]"
                >
                  Inquire For This Service
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
