import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'projects', 'services', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleOpenQuote = () => {
    setQuoteModalOpen(true);
  };

  const handleExploreProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1522] text-[#F8FAFC] flex flex-col selection:bg-[#E8892D] selection:text-white font-sans antialiased overflow-x-clip">
      {/* Sticky Header Navbar */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        activeSection={activeSection}
      />

      {/* Main Page Flow:
          Hero -> Stats -> About -> Projects -> Services -> Why Us -> Process -> Testimonials -> CTA -> Footer
      */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onExploreProjects={handleExploreProjects}
        />



        {/* Curved Transition: Hero (Black) -> Light Slate (#F1F5F9) */}
        <SectionDivider
          variant="light"
          type="convex-arch"
          className="bg-black"
        />

        {/* 3. About Company Section (Light #F1F5F9) */}
        <About onOpenQuote={handleOpenQuote} />

        {/* Curved Transition: Light Slate (#F1F5F9) -> Deep Navy (#0D1522) */}
        <SectionDivider
          variant="dark"
          type="slope-right"
          className="bg-[#F1F5F9]"
        />

        {/* 4. Projects Showcase Section (Deep Navy #0D1522) */}
        <Projects onOpenQuote={handleOpenQuote} />

        {/* Curved Transition: Deep Navy (#0D1522) -> Secondary Deep Slate (#162238) */}
        <SectionDivider
          variant="secondaryDark"
          type="wave-architectural"
          className="bg-[#0D1522]"
        />

        {/* 5. Services Section (#162238) */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* Curved Transition: Secondary Deep Slate (#162238) -> Light Slate (#F1F5F9) */}
        <SectionDivider
          variant="light"
          type="steep-curve"
          className="bg-[#162238]"
        />

        {/* 7. Construction Process & Timeline (Light Slate #F1F5F9) */}
        <Process onOpenQuote={handleOpenQuote} />

        {/* Curved Transition: Light Slate (#F1F5F9) -> Deep Navy (#0D1522) */}
        <SectionDivider
          variant="dark"
          type="slope-left"
          className="bg-[#F1F5F9]"
        />

        {/* 8. Testimonials Section (Deep Navy #0D1522) */}
        <Testimonials />

        {/* 9. Dramatic Call to Action Section (#0D1522 with overlay) */}
        <CTA onOpenQuote={handleOpenQuote} />

        {/* Curved Transition: Deep Navy CTA -> Deepest Midnight (#090E17) */}
        <SectionDivider
          variant="deepest"
          type="convex-arch"
          className="bg-[#0D1522]"
        />
      </main>

      {/* 10. Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Interactive Consultation / Quote Estimator Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </div>
  );
}
