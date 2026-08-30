import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

export default function Services({ onOpenQuote }) {
  const [activeServiceModal, setActiveServiceModal] = useState(null);

  return (
    <section
      id="services"
      className="relative z-10 bg-[#162238] text-white py-20 sm:py-28 lg:py-32"
    >
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#E8892D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#E8892D]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E8892D]">
              WHAT WE DO
            </span>
            <span className="w-6 h-0.5 bg-[#E8892D]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Comprehensive Construction Services. <br />
            <span className="text-[#CBD5E1]">Engineered for Performance.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#CBD5E1]/80">
            From initial ground-breaking to high-rise verticality, our specialized engineering divisions operate under the most stringent safety, schedule, and budgetary benchmarks.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconComponents[service.iconName] || Building2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => setActiveServiceModal(service)}
                className="group relative bg-[#0D1522] p-7 sm:p-8 rounded-sm border border-white/10 hover:border-[#E8892D]/80 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-xl"
              >
                {/* Top Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-500 group-hover:text-[#E8892D] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-sm bg-[#162238] border border-white/10 flex items-center justify-center text-[#E8892D] group-hover:bg-[#E8892D] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#F8FAFC] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1]/80 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Metric Tag */}
                  <div className="mt-4 inline-block bg-[#162238] text-[#E8892D] text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-sm border border-[#E8892D]/20">
                    {service.metric}
                  </div>
                </div>

                {/* Bottom Action / Orange Accent Line */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">
                    Explore Scope
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-[#162238] flex items-center justify-center text-slate-400 group-hover:bg-[#E8892D] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Hover Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E8892D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* Banner CTA for Custom Engineering */}
        <div className="mt-14 bg-[#0D1522] p-6 sm:p-8 rounded-sm border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#E8892D]/15 text-[#E8892D] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need a Specialized Engineering Solution?</h4>
              <p className="text-xs text-[#CBD5E1] mt-0.5">
                Our in-house structural estimators and BIM specialists provide preliminary feasibility modeling within 48 hours.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuote}
            className="w-full md:w-auto bg-[#E8892D] hover:bg-[#d97b20] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-sm transition-colors flex-shrink-0 shadow-lg shadow-[#E8892D]/20 cursor-pointer"
          >
            Request Technical RFP
          </button>
        </div>

      </div>

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
