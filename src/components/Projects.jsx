import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Calendar, Layers, Eye } from 'lucide-react';
import { projectsData, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';

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
              Spaces Engineered to Perform. <br />
              <span className="text-[#CBD5E1]">Structures Built to Inspire.</span>
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

        {/* Projects Asymmetric/Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Asymmetrical grid column spanning for an editorial feel
              // Project 0 and 3 span 7 or 8 columns on large screens
              const isLarge = idx % 3 === 0;
              const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-sm overflow-hidden bg-[#162238] border border-white/10 hover:border-[#E8892D]/70 transition-all duration-300 cursor-pointer ${colSpan} flex flex-col justify-end min-h-[380px] sm:min-h-[440px]`}
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
                    <span className="bg-[#0D1522]/80 backdrop-blur-md text-[#E8892D] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-sm border border-[#E8892D]/30">
                      {project.category}
                    </span>
                    <span className="bg-[#0D1522]/80 backdrop-blur-md text-white text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-sm border border-white/10">
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
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white group-hover:text-[#F8FAFC] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className="w-10 h-10 rounded-sm bg-[#0D1522]/80 border border-white/15 flex items-center justify-center text-white group-hover:bg-[#E8892D] group-hover:border-[#E8892D] transition-colors flex-shrink-0">
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Hidden on default, slides/fades in on hover */}
                    <p className="text-xs text-[#CBD5E1] line-clamp-2 pt-1 opacity-90 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </p>

                    {/* Orange accent line that expands on hover */}
                    <div className="w-0 group-hover:w-full h-0.5 bg-[#E8892D] transition-all duration-300 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
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
