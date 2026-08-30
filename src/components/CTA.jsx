import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, PhoneCall, ShieldCheck, Mail, Building } from 'lucide-react';

export default function CTA({ onOpenQuote }) {
  return (
    <section
      id="contact"
      className="relative z-10 py-24 sm:py-32 lg:py-36 overflow-hidden bg-[#0D1522] text-white"
    >
      {/* Background Hero Construction Image with Atmospheric Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=2400&q=80"
          alt="Night construction tower with safety lighting and steel structure"
          className="w-full h-full object-cover object-center filter brightness-30 contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient & Blueprint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1522] via-[#0D1522]/80 to-[#0D1522]/90" />
        <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#162238]/80 border border-white/10 backdrop-blur-md"
        >
          <div className="w-2 h-2 rounded-full bg-[#E8892D]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#CBD5E1] uppercase">
            LET'S SHAPE TOMORROW'S SKYLINE
          </span>
        </motion.div>

        {/* Large Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.08]"
        >
          READY TO BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F8FAFC] to-[#E8892D]">
            SOMETHING GREAT?
          </span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#CBD5E1]/90 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Let's turn your architectural vision into an enduring structure built for safety, efficiency, and timeless performance. Connect with our engineering estimators today.
        </motion.p>

        {/* Buttons Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            id="cta-start-project-btn"
            onClick={onOpenQuote}
            className="w-full sm:w-auto bg-[#E8892D] hover:bg-[#d97b20] text-white font-bold text-xs uppercase tracking-wider px-9 py-4 rounded-sm transition-all duration-200 shadow-2xl shadow-[#E8892D]/30 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            id="cta-call-team-btn"
            href="tel:+18005558264"
            className="w-full sm:w-auto bg-[#162238] hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-sm border border-white/20 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#E8892D]" />
            <span>Talk to Our Team (+1 800 555-VANG)</span>
          </a>
        </motion.div>

        {/* Quick Contact Micro-Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-xs text-left"
        >
          <div className="bg-[#162238]/80 p-4 rounded-sm border border-white/5">
            <span className="text-slate-400 font-mono block text-[10px] uppercase">Corporate Headquarters</span>
            <span className="text-white font-bold text-sm block mt-1">450 Lexington Ave, Suite 3200</span>
            <span className="text-slate-400 text-xs">New York, NY 10017</span>
          </div>

          <div className="bg-[#162238]/80 p-4 rounded-sm border border-white/5">
            <span className="text-slate-400 font-mono block text-[10px] uppercase">Direct Tender RFP Inquiries</span>
            <span className="text-[#E8892D] font-bold text-sm block mt-1">proposals@vanguardbuild.com</span>
            <span className="text-slate-400 text-xs">Monitored 24/7 by Senior Estimators</span>
          </div>

          <div className="bg-[#162238]/80 p-4 rounded-sm border border-white/5">
            <span className="text-slate-400 font-mono block text-[10px] uppercase">Emergency & Field Hotline</span>
            <span className="text-white font-bold text-sm block mt-1">+1 (800) 555-8264</span>
            <span className="text-slate-400 text-xs">24/7 Rapid Response Dispatch</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
