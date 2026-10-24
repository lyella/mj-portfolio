import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderKanban, ArrowRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { playClick, playPop } from '../utils/audio';

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'web-apps', label: 'Web Applications' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'creative', label: 'Creative & Audio' },
  { id: 'open-source', label: 'Open Source' },
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-brand-mint bg-brand-mint/10 border border-brand-mint/20 mb-3"
            >
              <FolderKanban size={14} />
              <span>Selected Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
            >
              Featured <span className="text-gradient">Creations</span> & Code
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md"
          >
            Click any project to explore the interactive case study, architectural decisions, and performance metrics.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playPop();
                  setSelectedCategory(cat.id);
                }}
                className={`relative rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'text-slate-950 shadow-md shadow-brand-mint/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white glass-panel hover:bg-slate-200/50 dark:hover:bg-slate-800/60'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="projectFilterPill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-mint to-teal-400"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  playClick();
                  setActiveProject(project);
                }}
                className="group relative cursor-pointer flex flex-col overflow-hidden rounded-3xl glass-panel border border-slate-300/40 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-brand-mint/50 transition-all duration-300"
              >
                {/* Image Banner Container */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider glass-nav text-white border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold glass-nav text-slate-300 border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Quick Inspect Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                    <div className="flex items-center gap-2 rounded-full bg-brand-mint px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
                      <Eye size={14} />
                      <span>View Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-mint transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-mint mt-0.5 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10">
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md px-2 py-0.5 text-[11px] font-medium bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="rounded-md px-1.5 py-0.5 text-[11px] font-medium text-slate-400">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer Row */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-mint group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <ArrowRight size={14} />
                      </span>

                      <div className="flex items-center gap-3 text-slate-400" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-slate-900 dark:hover:text-white transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-brand-mint transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Window */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};
