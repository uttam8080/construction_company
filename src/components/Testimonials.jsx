import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star, Building, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative z-10 bg-[#0D1522] text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Blueprint Grid and Radial Glow */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8892D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-0.5 bg-[#E8892D]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E8892D]">
              CLIENT TESTIMONIALS & TRUST
            </span>
            <span className="w-6 h-0.5 bg-[#E8892D]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Endorsements from Capital Leaders
          </h2>
        </div>

        {/* Testimonial Stage */}
        <div className="relative bg-[#162238] border border-white/10 p-8 sm:p-12 lg:p-16 rounded-sm shadow-2xl">
          
          {/* Subtle Decorative Quote Icon */}
          <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
            <Quote className="w-24 h-24 sm:w-36 sm:h-36 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 space-y-8"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-[#E8892D]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E8892D]" />
                ))}
                <span className="text-xs font-mono text-[#CBD5E1] ml-2">
                  Verified Enterprise Partner
                </span>
              </div>

              {/* Large Quote */}
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-[#F8FAFC] leading-relaxed">
                "{current.quote}"
              </blockquote>

              {/* Author & Project Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E8892D]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-base text-white">
                      {current.author}
                    </h4>
                    <p className="text-xs text-[#CBD5E1]/80">
                      {current.role} — <span className="text-white font-medium">{current.company}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-[#0D1522] px-4 py-2 rounded-sm border border-white/5 flex items-center gap-2 text-xs text-[#E8892D] font-mono">
                  <Building className="w-4 h-4" />
                  <span>{current.project}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/5">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#E8892D]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-sm bg-[#0D1522] hover:bg-[#E8892D] text-white transition-colors border border-white/10 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-sm bg-[#0D1522] hover:bg-[#E8892D] text-white transition-colors border border-white/10 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
