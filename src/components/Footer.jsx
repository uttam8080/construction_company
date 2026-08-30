import React, { useState } from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-[#090E17] text-[#CBD5E1] border-t border-white/10 pt-16 sm:pt-20 pb-12 overflow-hidden">
      
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#162238] border border-white/15 flex items-center justify-center">
                <span className="font-mono font-bold text-lg text-[#E8892D]">V</span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight flex items-center gap-1">
                  VANGUARD
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8892D] inline-block" />
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block -mt-1">
                  Infrastructure & Construction
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Shaping high-performance commercial landmarks, civil transit networks, and master residential complexes engineered for endurance and structural excellence.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#E8892D]" />
              <span>Licensed General Contractor #GC-849204</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {[
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-sm bg-[#162238] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#E8892D] hover:bg-[#E8892D]/10 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About', 'Projects', 'Services', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-[#E8892D] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#E8892D] transition-colors" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Construction Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Specialized Sectors
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                'General Construction',
                'Commercial Complexes',
                'Luxury Residential',
                'Civil Infrastructure',
                'Historic Renovation',
                'BIM & Project Controls'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-[#E8892D] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Industry Insights
            </h4>
            <p className="text-xs text-slate-400 leading-normal">
              Subscribe to our quarterly architectural engineering journal & quarterly cost forecasts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#162238] border border-white/10 rounded-sm py-2.5 pl-3 pr-10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E8892D]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#E8892D] text-white rounded-sm hover:bg-[#d97b20] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#E8892D] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscription confirmed. Thank you!</span>
                </div>
              )}
            </form>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E8892D]" />
                <span>+1 (800) 555-8264</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E8892D]" />
                <span>contact@vanguardbuild.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8892D]" />
                <span>New York • Miami • Chicago • San Francisco</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Vanguard Infrastructure & Construction Company. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#about" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">Terms of Engineering</a>
            <a href="#about" className="hover:text-slate-300 transition-colors">Safety Protocols</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-[#E8892D] transition-colors cursor-pointer ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
