import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import Stats from './Stats';
import TextReveal from './TextReveal';

export default function Hero({ onOpenQuote, onExploreProjects }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black pt-20 sm:pt-24 lg:pt-28 pb-0"
    >
      {/* Background Hero Photography with Black Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.06, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2560&q=85"
            alt="Towering skyscraper structural engineering and crane at golden hour"
            className="w-full h-full object-cover object-center filter brightness-85 contrast-110"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Multi-layered Cinematic Black Gradients for Optimal Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/70" />

        {/* Subtle Blueprint Grid Overlay */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          
          {/* Left Column: Typography, CTA & Trust Badges */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 pb-8 sm:pb-12 lg:pb-14">
            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.85rem] font-heading font-extrabold tracking-tight text-white leading-[1.08]">
                <TextReveal text="WE BUILD" delay={0.1} /> <br />
                <span className="text-[#CBD5E1]">
                  <TextReveal text="WHAT LASTS." delay={0.2} />
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-xs sm:text-sm md:text-base text-[#CBD5E1]/90 max-w-xl font-normal leading-relaxed"
            >
              From complex civil infrastructure to landmark commercial towers, we engineer high-performance construction solutions built on uncompromising safety, structural integrity, and enduring craft.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="group relative overflow-hidden bg-[#E8892D] hover:bg-[#d97b20] text-white font-bold text-xs sm:text-sm tracking-wide uppercase px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm transition-all duration-200 shadow-lg shadow-[#E8892D]/25 flex items-center justify-center gap-2.5 cursor-pointer w-fit"
              >
                <span>Explore Our Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Pill Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-5 text-[11px] sm:text-xs text-[#CBD5E1]/85 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8892D] flex-shrink-0" />
                <span>Zero LTI Safety Record</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8892D] flex-shrink-0" />
                <span>LEED Platinum Accredited</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E8892D] flex-shrink-0" />
                <span>Bonded up to $500M</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Animated & Elevated Engineer Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative self-end">
            <motion.div
              initial={{ opacity: 0, x: 120, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 1.45, 
                ease: [0.22, 1, 0.36, 1], 
                delay: 0.15 
              }}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl flex justify-center lg:justify-end items-end"
            >
              {/* Backlight Ambient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#E8892D]/35 via-[#E8892D]/15 to-transparent blur-3xl rounded-full transform -translate-y-8 -z-10 pointer-events-none" />

              {/* Foreground Engineer Visual */}
              <img
                src="/engineer.png"
                alt="Construction Engineer Specialist"
                className="w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[690px] max-h-[500px] sm:max-h-[580px] lg:max-h-[670px] object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] filter contrast-105 select-none block align-bottom origin-bottom"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Integrated Stats Bar overlapping the bottom of the Hero */}
        <div className="-mt-4 sm:-mt-8 lg:-mt-16 pb-16 sm:pb-20 lg:pb-28 relative z-30">
          <Stats />
        </div>
      </div>
    </section>
  );
}
