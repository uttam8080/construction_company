import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HardHat, Award, Clock, MessageSquare, Cpu, Check } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const [activeItem, setActiveItem] = useState(0);

  const benefits = [
    {
      number: "01",
      title: "Proven Experience",
      short: "Over 25 years erecting complex structural and civic infrastructure projects.",
      details: "More than $4.8 Billion in completed capital assets with zero project abandonments, navigating multi-tier zoning, geotechnical complexities, and demanding schedules.",
      icon: Award
    },
    {
      number: "02",
      title: "Quality Materials",
      short: "Certified Grade-A mill-sourced structural steel and high-durability low-carbon concrete.",
      details: "Every batch of raw material undergoes rigorous third-party ultrasonic testing, core compression testing, and full environmental origin traceability.",
      icon: Cpu
    },
    {
      number: "03",
      title: "Safety First",
      short: "Uncompromising job site culture with an industry-leading 0.68 EMR safety rating.",
      details: "Comprehensive daily toolbox talks, dedicated safety officers for every 20 field personnel, and full ISO 45001 occupational health certification.",
      icon: ShieldCheck
    },
    {
      number: "04",
      title: "Skilled Workforce",
      short: "Over 450 master craftsmen, licensed professional engineers (PE), and BIM modelers.",
      details: "Continuous in-house apprenticeships, certified rigging supervisors, and licensed crane operators backed by extensive continuing education programs.",
      icon: HardHat
    },
    {
      number: "05",
      title: "Transparent Communication",
      short: "Real-time client dashboard with 24/7 site camera feeds and cloud accounting.",
      details: "Open-book contingency tracking, weekly drone photogrammetry reports, and zero hidden billing items throughout the lifecycle.",
      icon: MessageSquare
    },
    {
      number: "06",
      title: "On-Time Delivery",
      short: "99.4% historical milestone adherence powered by 4D critical path management.",
      details: "We utilize advanced predictive analytics to foresee material supply chain bottlenecks and weather disruptions weeks before they impact the job site.",
      icon: Clock
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="relative z-10 py-24 sm:py-32 overflow-hidden bg-[#0D1522]"
    >
      {/* Background Architectural Construction Image with Heavy Dark Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
          alt="Heavy structural steel construction assembly"
          className="w-full h-full object-cover object-center filter brightness-25 contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0D1522]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-blueprint-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#E8892D]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E8892D]">
              CORE COMPETENCIES & ADVANTAGES
            </span>
            <span className="w-6 h-0.5 bg-[#E8892D]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            WHY BUILD WITH US?
          </h2>

          <p className="text-sm sm:text-base text-[#CBD5E1]/85">
            We operate with the financial strength of an international contractor and the craftsmanship agility of a dedicated master builder.
          </p>
        </div>

        {/* Translucent Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeItem === index;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setActiveItem(index)}
                className={`p-7 rounded-sm border transition-all duration-300 cursor-pointer backdrop-blur-xl relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#162238]/95 border-[#E8892D] shadow-2xl shadow-[#E8892D]/15'
                    : 'bg-[#162238]/70 border-white/10 hover:border-white/25 hover:bg-[#162238]/85'
                }`}
              >
                <div>
                  {/* Top Bar: Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xl font-mono font-bold text-[#E8892D]">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#0D1522] border border-white/10 flex items-center justify-center text-[#E8892D]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-[#CBD5E1]/80 leading-relaxed">
                    {item.short}
                  </p>

                  {/* Expanded detail */}
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-300 leading-normal bg-[#090E17]/60 p-3 rounded-sm">
                    {item.details}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#E8892D]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Guaranteed Vanguard Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Consultation Ribbon */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-3 bg-[#E8892D] hover:bg-[#d97b20] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-sm shadow-xl shadow-[#E8892D]/20 transition-all cursor-pointer"
          >
            <span>Discuss Your Project Requirements</span>
            <span className="font-mono text-sm">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
