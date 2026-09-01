import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Calendar, Layers, Eye } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';

import TextReveal from './TextReveal';

export default function Projects({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryKey === activeCategory);

  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0D1522] text-white py-20 sm:py-28 lg:py-32"
    >
      {/* Background Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#E8892D]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#E8892D]">
                OUR RECENT WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              <TextReveal text="Spaces Engineered to Perform." delay={0.1} /> <br />
              <span className="text-[#CBD5E1]">
                <TextReveal text="Structures Built to Inspire." delay={0.2} />
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#CBD5E1]/80 max-w-md">
            Explore a curated selection of high-profile commercial developments, civil infrastructure, and residential engineering delivered across North America.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/10">
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#162238] border border-[#E8892D]'
                    : 'text-[#CBD5E1]/70 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#E8892D] rotate-45" />
                )}
              </button>
            );
          })}
        </div>

        {/* Projects Symmetrical Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-sm overflow-hidden bg-[#162238] border border-white/10 hover:border-[#E8892D]/70 transition-all duration-300 cursor-pointer flex flex-col justify-end min-h-[380px] sm:min-h-[440px]`}
                >
                  {/* Background Image with Zoom */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter brightness-90 contrast-105 group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    {/* Multi-layered Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1522] via-[#0D1522]/60 to-black/20 group-hover:via-[#0D1522]/75 transition-colors duration-300" />
                  </div>

                  {/* Top Badge: Category & Year */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="bg-[#1C2028] text-[#E8892D] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                      {project.category}
                    </span>
                    <span className="bg-[#1C2028] text-white text-[10px] font-mono font-bold tracking-wider px-2.5 py-1.5 rounded-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="relative z-10 p-6 sm:p-7 space-y-3">
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[#CBD5E1]/80 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#E8892D]" />
                      <span>{project.location}</span>
                    </div>

                    {/* Title & Arrow */}
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white group-hover:text-white transition-colors leading-tight tracking-wide">
                        {project.title}
                      </h3>
                      <div className="w-9 h-9 rounded-sm bg-[#1C2028] flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:-translate-y-1">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-[#CBD5E1]/90 line-clamp-2 pt-1">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA / View More Action */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-4">
            Showing 6 of 180+ Completed Structural Deliverables
          </p>
          <button
            id="projects-request-portfolio-btn"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 bg-[#162238] hover:bg-[#E8892D] text-white text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-sm border border-white/10 transition-all duration-200 shadow-md"
          >
            <span>Request Full Project Portfolio & Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
}
