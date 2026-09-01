import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  ShieldCheck, 
  ChevronRight,
  Home,
  Building2,
  Layers,
  Wrench,
  Workflow,
  Mail
} from 'lucide-react';

export default function Navbar({ onOpenQuote, activeSection = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: Building2 },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Services', href: '#services', icon: Wrench },
    { name: 'Process', href: '#process', icon: Workflow },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090E17]/95 backdrop-blur-md py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#090E17]/90 via-[#090E17]/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8892D]"
            >
              <div className="w-10 h-10 rounded-sm bg-[#162238] border border-white/15 flex items-center justify-center relative overflow-hidden group-hover:border-[#E8892D] transition-colors">
                <div className="absolute inset-0 bg-[#E8892D]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center justify-center">
                  <span className="font-mono font-extrabold text-base text-[#E8892D] tracking-tighter">V</span>
                  <div className="w-4 h-[2px] bg-[#E8892D] -mt-0.5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                  VANGUARD
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8892D] inline-block" />
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#CBD5E1]/80 uppercase -mt-1">
                  Infra & Engineering
                </span>
              </div>
            </a>

            {/* Exact Spotlight Beam Animated Navigation Pill */}
            <nav 
              id="desktop-nav" 
              className="hidden lg:flex items-center bg-[#0D1522]/95 px-2 py-1.5 rounded-2xl border border-white/15 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase();
                const IconComponent = link.icon;
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2.5 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 rounded-xl select-none z-10 cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {/* Active Spotlight Cone & Glowing Beam Overlay */}
                    {isActive && (
                      <motion.div
                        layoutId="navbarSpotlight"
                        className="absolute inset-0 pointer-events-none -z-10"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 28,
                        }}
                      >
                        {/* Top Bright Glowing Bar Indicator */}
                        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-8 h-[3.5px] bg-[#E8892D] rounded-full shadow-[0_0_12px_#E8892D,0_0_24px_#E8892D,0_0_36px_#E8892D]" />

                        {/* Downward Projecting Trapezoidal Light Spotlight Beam */}
                        <div
                          className="absolute inset-0"
                          style={{
                            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                            background:
                              'linear-gradient(180deg, rgba(232, 137, 45, 0.42) 0%, rgba(232, 137, 45, 0.16) 50%, rgba(232, 137, 45, 0.02) 95%, transparent 100%)',
                          }}
                        />

                        {/* Soft Ambient Radial Glow Around Active Item */}
                        <div className="absolute inset-0 bg-[#E8892D]/10 rounded-xl blur-[2px]" />
                      </motion.div>
                    )}

                    <IconComponent
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive 
                          ? 'text-[#E8892D] scale-110 drop-shadow-[0_0_8px_rgba(232,137,45,0.8)]' 
                          : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    />
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-sm bg-[#162238] border border-white/10 text-[#F8FAFC] hover:text-[#E8892D] hover:border-[#E8892D]/40 transition-colors focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#090E17]/85 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0D1522] border-l border-white/10 z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl"
            >
              <div>
                {/* Header in drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-sm bg-[#162238] border border-white/15 flex items-center justify-center">
                      <span className="font-mono font-bold text-[#E8892D]">V</span>
                    </div>
                    <span className="font-heading font-extrabold text-lg text-white">VANGUARD</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-sm bg-[#162238] text-gray-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="mt-8 space-y-2">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.name.toLowerCase();
                    const IconComponent = link.icon;

                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.1 }}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-sm font-semibold transition-colors border ${
                          isActive
                            ? 'bg-[#162238] text-white border-[#E8892D]/40'
                            : 'text-[#CBD5E1] hover:text-white hover:bg-[#162238]/60 border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#E8892D]' : 'text-slate-400'}`} />
                          <span>{link.name}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#E8892D]' : 'text-slate-500'}`} />
                      </motion.a>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer & CTA */}
              <div className="pt-8 border-t border-white/10 space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full bg-[#E8892D] hover:bg-[#d97b20] text-white text-sm font-bold uppercase tracking-wider py-4 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#E8892D]/20 cursor-pointer"
                >
                  <span>Request Full Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="bg-[#162238] p-4 rounded-sm border border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                    <ShieldCheck className="w-4 h-4 text-[#E8892D]" />
                    <span>ISO 9001 & OSHA 30 Certified Builder</span>
                  </div>
                  <div className="text-[11px] font-mono text-gray-400">
                    Direct Line: +1 (800) 555-8264
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
