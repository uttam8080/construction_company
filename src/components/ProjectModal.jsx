import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Maximize2, Shield, Layers, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0D1522] text-white rounded-sm shadow-2xl border border-white/15 overflow-hidden z-10 my-auto"
        >
          {/* Top Bar / Close Button */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#0D1522]/80 hover:bg-[#E8892D] text-white transition-colors backdrop-blur-md border border-white/20"
              aria-label="Close Project Details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Image & Headline */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center filter contrast-110 brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1522] via-[#0D1522]/40 to-black/30" />
            
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#E8892D] text-white text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm">
                  {project.category}
                </span>
                <span className="bg-[#162238]/90 backdrop-blur-md text-[#CBD5E1] text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-sm border border-white/10">
                  {project.year}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-[#CBD5E1]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E8892D]" />
                  {project.location}
                </span>
                <span className="flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-[#E8892D]" />
                  {project.area}
                </span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E8892D] mb-2">
                PROJECT OVERVIEW & ENGINEERING SCOPE
              </h4>
              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architectural Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.stats?.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#162238] p-3.5 rounded-sm border border-white/5"
                >
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">
                    {stat.label}
                  </span>
                  <span className="text-base font-bold text-white mt-0.5 block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Technical Features */}
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-white mb-3">
                KEY TECHNICAL SPECIFICATIONS & HIGHLIGHTS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features?.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-[#162238] p-2.5 rounded-sm border border-white/5 text-xs text-[#CBD5E1]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E8892D] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client & Timeline Details */}
            <div className="bg-[#162238] p-4 rounded-sm border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Lead Architect / Partner</span>
                <span className="text-white font-semibold">{project.leadArchitect}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Client Entity</span>
                <span className="text-white font-semibold">{project.client}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Execution Timeline</span>
                <span className="text-[#E8892D] font-bold">{project.timeline}</span>
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="p-4 sm:p-6 bg-[#162238] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              Reference Blueprint ID: #VN-{project.id.toUpperCase().slice(0, 8)}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-sm bg-[#0D1522] hover:bg-white/10 text-xs font-semibold uppercase text-slate-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="px-5 py-2.5 rounded-sm bg-[#E8892D] hover:bg-[#d97b20] text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center gap-2"
              >
                <span>Request Similar Project Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
