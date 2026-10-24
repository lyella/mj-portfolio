import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Award, Zap, Code } from 'lucide-react';
import { Project } from '../types';
import { playClick } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playClick();
            onClose();
          }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl glass-panel bg-slate-900/90 border border-slate-700/60 shadow-2xl my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Image with Close Button */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              aria-label="Close dialog"
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full glass-panel bg-slate-900/80 text-white hover:bg-brand-mint hover:text-slate-950 transition-colors shadow-lg"
            >
              <X size={20} />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-mint text-slate-950 mb-2">
                {project.category} • {project.year}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                {project.title}
              </h2>
              <p className="text-sm text-slate-300 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Full Description */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                Overview
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Metrics Chips if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-800/60 border border-white/5">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-brand-mint font-display">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Challenge & Solution */}
            {project.challenge && (
              <div className="space-y-4 p-5 rounded-2xl bg-slate-800/40 border border-white/5">
                <div>
                  <div className="flex items-center gap-2 text-brand-cherry text-sm font-bold mb-1">
                    <Zap size={16} />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                {project.solution && (
                  <div>
                    <div className="flex items-center gap-2 text-brand-mint text-sm font-bold mb-1">
                      <Award size={16} />
                      <span>The Solution</span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Architectural Highlights
                </h3>
                <div className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-brand-mint shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <Code size={16} />
                <span>Technologies & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg px-3 py-1 text-xs font-semibold bg-brand-surface text-brand-mint border border-brand-mint/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-mint to-teal-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md hover:scale-[1.02] transition-transform"
                >
                  <ExternalLink size={16} />
                  <span>View Live Deployment</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="inline-flex items-center gap-2 rounded-xl glass-panel bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
                >
                  <Github size={16} />
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
