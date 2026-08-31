import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, HardHat, Compass, Leaf, X } from 'lucide-react';
import CursorGrid from './CursorGrid';
import ClickSpark from './ClickSpark';
import TiltedCard from './TiltedCard';

export default function About({ onOpenQuote }) {
  const [activeModalTab, setActiveModalTab] = useState(null);

  const features = [
    { title: 'Quality Engineering', desc: 'Rigorous structural analysis and premium Grade-A materials that exceed building code standards.' },
    { title: 'Experienced Professionals', desc: 'Over 450 certified civil engineers, structural architects, and master tradespeople.' },
    { title: 'Safety First Culture', desc: 'Zero compromise on site protocols, with ISO 45001 certified occupational safety systems.' },
    { title: 'On-Time Delivery', desc: 'Real-time 4D BIM tracking and critical path management ensure project schedule integrity.' }
  ];

  return (
    <section
      id="about"
      className="relative z-10 bg-[#F1F5F9] text-[#0F172A] py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Subtle Architectural Blueprint Lines */}
      <div className="absolute inset-0 bg-blueprint-grid-light opacity-60 pointer-events-none" />

      {/* CursorGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <CursorGrid
          cellSize={70}
          color="#E8892D"
          radius={140}
          falloff="smooth"
          holdTime={400}
          fadeDuration={800}
          lineWidth={1.2}
          maxOpacity={0.5}
          fillOpacity={0.1}
          gridOpacity={0}
          cellRadius={0}
          clickPulse
          pulseSpeed={600}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Architectural Imagery & Floating EST Badge */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-2xl shadow-2xl border-4 border-white bg-white w-full h-[460px] sm:h-[560px]">
                <TiltedCard
                  imageSrc="/construction.png"
                  altText="Construction site"
                  captionText=""
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-[15px]" />
                      <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                        <div className="text-[10px] font-mono tracking-widest uppercase text-[#E8892D]">
                          SITE ARCHITECTURE & QUALITY ASSURANCE
                        </div>
                        <div className="text-sm font-semibold mt-1">
                          Metropolitan Tower 3 — Grade A Structural Concrete Pour
                        </div>
                      </div>
                    </>
                  }
                />
              </div>

              {/* Floating EST Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-6 -right-4 sm:-right-8 bg-[#0D1522] text-white p-5 sm:p-6 rounded-sm shadow-2xl border border-white/10 flex flex-col items-center justify-center text-center"
              >
                <span className="text-[10px] font-mono tracking-widest text-[#E8892D] uppercase">
                  ESTABLISHED
                </span>
                <span className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mt-0.5">
                  2001
                </span>
                <span className="text-[11px] text-gray-300 mt-1 font-medium">
                  25 Years of Legacy
                </span>
              </motion.div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#E8892D] pointer-events-none hidden sm:block" />
            </motion.div>
          </div>

          {/* Right Column: Company Story & Features */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <span className="w-8 h-0.5 bg-[#E8892D]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E8892D]">
                WHO WE ARE
              </span>
            </motion.div>

            {/* Main Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0D1522] leading-[1.12]"
            >
              Built on Experience. <br className="hidden sm:inline" />
              <span className="text-[#E8892D]">Driven by Excellence.</span>
            </motion.h2>

            {/* Paragraph Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal"
            >
            </motion.p>

            {/* Feature Checklist */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative overflow-hidden bg-white/90 backdrop-blur-md p-2.5 sm:p-3 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-[#E8892D]/40 transition-all group cursor-pointer"
                >
                  {/* Decorative corner glow */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#E8892D]/10 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-2 mb-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E8892D]/20 to-[#E8892D]/5 text-[#E8892D] flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <h4 className="font-bold text-[13px] sm:text-sm text-[#0D1522] group-hover:text-[#E8892D] transition-colors duration-300">{item.title}</h4>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 pl-8 leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <ClickSpark sparkColor="#E8892D" sparkSize={10} sparkRadius={20} sparkCount={10} duration={500}>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    id="about-learn-more-btn"
                    onClick={() => setActiveModalTab('history')}
                    className="bg-[#0D1522] hover:bg-[#162238] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all duration-200 flex items-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Read Full Company Profile</span>
                    <ArrowRight className="w-4 h-4 text-[#E8892D]" />
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold uppercase tracking-wider text-[#0D1522] hover:text-[#E8892D] transition-colors underline underline-offset-4 cursor-pointer py-2"
                  >
                    Schedule Site Evaluation →
                  </button>
                </div>
              </ClickSpark>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Company Profile Modal */}
      <AnimatePresence>
        {activeModalTab && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalTab(null)}
              className="fixed inset-0 bg-[#090E17]/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0D1522] text-white p-6 sm:p-8 rounded-sm shadow-2xl border border-white/10 z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#E8892D] tracking-widest uppercase">
                    CORPORATE ARCHIVE & CREDENTIALS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-1">
                    Vanguard Engineering Group
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalTab(null)}
                  className="p-2 rounded-sm bg-[#162238] text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-5 text-sm text-[#CBD5E1]">
                <p>
                  Established in 2001, Vanguard has expanded from a specialized structural concrete subcontractor into a comprehensive Tier-1 infrastructure and master construction entity with over $4.8 Billion in completed capital assets.
                </p>

                <div className="grid grid-cols-2 gap-4 bg-[#162238] p-4 rounded-sm border border-white/5 font-mono text-xs">
                  <div>
                    <span className="text-gray-400 block">Bonding Capacity</span>
                    <span className="text-white font-bold text-sm">$500,000,000 Single / $1.2B Aggregate</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">EMR Safety Rating</span>
                    <span className="text-[#E8892D] font-bold text-sm">0.68 (Industry Benchmark)</span>
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white uppercase tracking-wider pt-2">
                  Quality Management & Certification Standards
                </h4>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E8892D]" />
                    <span>ISO 9001:2015 Quality Management Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E8892D]" />
                    <span>ISO 14001:2015 Environmental Stewardship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E8892D]" />
                    <span>US Green Building Council (USGBC) Gold Member</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveModalTab(null)}
                  className="bg-[#E8892D] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-[#d97b20]"
                >
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
