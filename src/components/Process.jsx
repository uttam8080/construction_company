import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react';
import { 
  FileSearch, 
  CalendarCheck, 
  Layers, 
  HardHat, 
  CheckCheck, 
  KeyRound, 
  ArrowRight,
  Clock,
  CheckCircle
} from 'lucide-react';
import { processSteps } from '../data/process';
import TextReveal from './TextReveal';

const stepIcons = [
  FileSearch,
  CalendarCheck,
  Layers,
  HardHat,
  CheckCheck,
  KeyRound
];

export default function Process({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "92%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Sync the active step perfectly with the progress line's physical position
    const step = Math.round(latest * (processSteps.length - 1));
    setActiveStep(Math.min(processSteps.length - 1, Math.max(0, step)));
  });

  return (
    <>
      {/* Normal Scrolling Header Section */}
      <section className="relative z-10 bg-[#F1F5F9] text-[#171717] pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#E8892D]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E8892D]">
                METHODOLOGY & LIFECYCLE
              </span>
              <span className="w-6 h-0.5 bg-[#E8892D]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0D1522] tracking-tight">
              <TextReveal text="FROM VISION TO REALITY" delay={0.1} />
            </h2>

            <p className="text-sm sm:text-base text-neutral-600">
              A disciplined 6-stage construction lifecycle engineered to eliminate risk, guarantee cost certainty, and achieve architectural precision.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll-Driven Animation Section */}
      <section
        id="process"
        ref={containerRef}
        className="relative z-10 bg-[#F1F5F9]"
        style={{ height: "600vh" }}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Background Subtle Blueprint Grid */}
          <div className="absolute inset-0 bg-blueprint-grid-light opacity-50 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Desktop Interactive Horizontal Timeline Switcher */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connecting Base Line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-neutral-300 -translate-y-1/2 z-0" />
            
            {/* Active Progress Fill Line */}
            <motion.div
              className="absolute top-1/2 left-8 h-1 bg-[#E8892D] -translate-y-1/2 z-0 origin-left"
              style={{
                width: progressWidth
              }}
            />

            {/* Step Nodes */}
            <div className="relative z-10 flex justify-between items-center">
              {processSteps.map((step, idx) => {
                const Icon = stepIcons[idx] || HardHat;
                const isActive = activeStep === idx;
                const isCompleted = activeStep > idx;

                return (
                  <div
                    key={step.step}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 border-2 ${
                        isActive
                          ? 'bg-[#E8892D] text-white border-[#E8892D] shadow-lg shadow-[#E8892D]/30 scale-110'
                          : isCompleted
                          ? 'bg-[#0D1522] text-white border-[#0D1522]'
                          : 'bg-white text-neutral-500 border-neutral-300 hover:border-[#E8892D]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider mt-3 transition-colors ${
                        isActive ? 'text-[#E8892D]' : 'text-neutral-600'
                      }`}
                    >
                      {step.step}. {step.title.split(' ')[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Step Feature Box on Desktop */}
        <div className="hidden lg:block">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-8 rounded-sm shadow-xl border border-neutral-200 grid grid-cols-12 gap-8 items-center"
          >
            <div className="col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#0D1522] text-white text-xs font-mono font-bold uppercase px-3 py-1 rounded-sm">
                  PHASE {processSteps[activeStep].step}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#E8892D] font-mono font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  {processSteps[activeStep].duration}
                </span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-[#0D1522]">
                {processSteps[activeStep].title}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
                {processSteps[activeStep].description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-2">
                  KEY MILESTONES IN THIS PHASE
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {processSteps[activeStep].keyActions.map((action, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 bg-neutral-50 p-2.5 rounded-sm border border-neutral-200">
                      <CheckCircle className="w-4 h-4 text-[#E8892D] flex-shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-4 bg-[#0D1522] text-white p-6 rounded-sm space-y-4">
              <span className="text-[10px] font-mono text-[#E8892D] uppercase tracking-widest block">
                DELIVERABLE CERTAINTY
              </span>
              <h4 className="text-lg font-heading font-bold">
                Zero Surprise Guarantee
              </h4>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Every deliverable in Phase {processSteps[activeStep].step} is locked into our contractual schedule with real-time auditability.
              </p>
              <button
                onClick={onOpenQuote}
                className="w-full bg-[#E8892D] hover:bg-[#d97b20] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Phase Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Mobile & Tablet Vertical Timeline Layout */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || HardHat;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-sm shadow-md border-l-4 border-l-[#E8892D] border-neutral-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0D1522] text-white flex items-center justify-center text-xs font-mono font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#0D1522]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#E8892D] font-semibold">
                    {step.duration}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                  {step.keyActions.map((action, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-neutral-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#E8892D] flex-shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        </div>
        </div>
      </section>
    </>
  );
}
