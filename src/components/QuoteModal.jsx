import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Calculator, ShieldCheck, ArrowRight, Building, Clock, MapPin, DollarSign } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('commercial');
  const [sqft, setSqft] = useState(75000);
  const [timeline, setTimeline] = useState('18-24 Months');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Realistically calculate cost range based on industry parameters
  const costPerSqFtMap = {
    commercial: 280,
    residential: 320,
    industrial: 160,
    infrastructure: 410,
    renovation: 195,
    management: 45
  };

  const baseRate = costPerSqFtMap[projectType] || 250;
  const estimatedMin = Math.round((sqft * baseRate * 0.9) / 1000000 * 10) / 10;
  const estimatedMax = Math.round((sqft * baseRate * 1.15) / 1000000 * 10) / 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0D1522] text-white p-6 sm:p-8 rounded-sm shadow-2xl border border-white/15 z-10 my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 p-2 rounded-sm bg-[#162238] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="text-[10px] font-mono text-[#E8892D] uppercase tracking-widest block">
                  CAPITAL PROJECT PLANNING & ESTIMATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1">
                  Request a Comprehensive Proposal
                </h3>
                <p className="text-xs text-[#CBD5E1] mt-1">
                  Provide your initial project parameters for a targeted feasibility & budget model.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Project Type Selector */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    1. Select Asset Sector
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'commercial', label: 'Commercial Complex' },
                      { id: 'residential', label: 'Luxury Residential' },
                      { id: 'industrial', label: 'Industrial & Logistics' },
                      { id: 'infrastructure', label: 'Civil Infrastructure' },
                      { id: 'renovation', label: 'Adaptive Renovation' },
                      { id: 'management', label: 'BIM & Management' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setProjectType(item.id)}
                        className={`p-2.5 rounded-sm text-xs font-semibold text-left transition-all border ${
                          projectType === item.id
                            ? 'bg-[#E8892D] text-white border-[#E8892D]'
                            : 'bg-[#162238] text-[#CBD5E1] border-white/10 hover:border-white/20'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Scope & Footage Slider */}
                <div className="bg-[#162238] p-4 rounded-sm border border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-300 uppercase">Estimated Area (Sq Ft)</span>
                    <span className="font-mono font-bold text-[#E8892D] text-sm">
                      {sqft.toLocaleString()} sq ft
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-1.5 bg-[#0D1522] rounded-lg appearance-none cursor-pointer accent-[#E8892D]"
                  />

                  {/* Real-time budget estimate preview */}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Preliminary Benchmark Cost Model:</span>
                    <span className="font-mono font-bold text-white">
                      ${estimatedMin}M – ${estimatedMax}M USD
                    </span>
                  </div>
                </div>

                {/* 3. Contact & Location Information */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    2. Primary Developer / Client Details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#162238] border border-white/10 rounded-sm p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E8892D]"
                    />
                    <input
                      type="text"
                      placeholder="Organization / Company *"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-[#162238] border border-white/10 rounded-sm p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E8892D]"
                    />
                    <input
                      type="email"
                      placeholder="Corporate Email *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#162238] border border-white/10 rounded-sm p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E8892D]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#162238] border border-white/10 rounded-sm p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E8892D]"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Project Municipality / Site Location (City, State)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full mt-3 bg-[#162238] border border-white/10 rounded-sm p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E8892D]"
                  />

                  <textarea
                    rows={3}
                    placeholder="Brief architectural scope, special constraints, or expected start date..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full mt-3 bg-[#162238] border border-white/10 rounded-sm p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E8892D]"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#E8892D]" />
                    <span>Non-Disclosure & Confidentiality Assured</span>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#E8892D] hover:bg-[#d97b20] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm transition-all shadow-lg shadow-[#E8892D]/20 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Submit RFP Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* Submission Success State */
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#E8892D]/20 text-[#E8892D] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#E8892D] tracking-widest uppercase">
                  RFP REFERENCE: #VG-2026-{Math.floor(1000 + Math.random() * 9000)}
                </span>
                <h3 className="text-2xl font-heading font-extrabold text-white">
                  Proposal Inquiry Received
                </h3>
                <p className="text-xs text-[#CBD5E1] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our senior structural estimating partner will review your project requirements for <strong className="text-white">{formData.company || 'your organization'}</strong> and deliver a preliminary assessment within 24 business hours.
                </p>
              </div>

              <div className="bg-[#162238] p-4 rounded-sm border border-white/5 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Selected Sector:</span>
                  <span className="text-white capitalize">{projectType}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Project Scope:</span>
                  <span className="text-white">{sqft.toLocaleString()} sq ft</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Estimated Budget:</span>
                  <span className="text-[#E8892D] font-bold">${estimatedMin}M – ${estimatedMax}M</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#162238] hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider px-8 py-3 rounded-sm border border-white/10 transition-colors"
              >
                Return to Website
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
