import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, FolderGit2, ExternalLink, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClick, playChime } from '../utils/audio';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle background glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-mint/15 blur-[128px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-brand-cherry/15 blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Kinetic Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 glass-panel text-xs font-medium text-slate-700 dark:text-slate-300 mb-6 shadow-sm border border-slate-300/40 dark:border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mint"></span>
              </span>
              <span className="font-semibold text-slate-900 dark:text-white">MJ Brown</span>
              <span className="text-slate-400">•</span>
              <span className="text-brand-mint font-medium">{PERSONAL_INFO.availability}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2 mb-6"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight font-display leading-[1.1]">
                <span className="block text-slate-900 dark:text-white">
                  Crafting code that
                </span>
                <span className="flex flex-wrap items-baseline gap-3 justify-center lg:justify-start">
                  <span className="text-gradient">breathes life</span>
                  <span className="font-cursive text-4xl sm:text-6xl text-brand-cherry font-normal">
                    & memories.
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Bio summary paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              {PERSONAL_INFO.tagline} Driven by curiosity and dedication, I build high-performance web applications, fluid animations, and digital journeys that leave an impression.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button
                onClick={() => {
                  playChime();
                  handleScrollTo('projects');
                }}
                className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-mint to-teal-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-brand-mint/25 hover:shadow-brand-mint/40 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <FolderGit2 size={18} className="transition-transform group-hover:rotate-12" />
                <span>Explore Works</span>
              </button>

              <button
                onClick={() => handleScrollTo('journey')}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 glass-panel hover:bg-slate-200/50 dark:hover:bg-slate-800/80 hover:scale-[1.03] active:scale-[0.98] transition-all border border-slate-300/50 dark:border-white/10"
              >
                <Compass size={18} className="text-brand-mint" />
                <span>My Journey</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Code2 size={18} />
                <span>GitHub</span>
                <ExternalLink size={14} className="opacity-60" />
              </a>
            </motion.div>

            {/* Live Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60 dark:border-white/10"
            >
              {PERSONAL_INFO.stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white">
                    <span className="text-gradient-cyan">{stat.value}</span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 3D Magnetic Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-72 sm:w-80 md:w-96">
              
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-mint via-brand-cherry to-sky-400 opacity-40 blur-lg transition duration-500 group-hover:opacity-75" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl glass-panel p-4 shadow-2xl border border-white/10 dark:border-white/15 overflow-hidden">
                <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-brand-obsidian to-slate-900">
                  <img
                    src="/images/homepage-01.jpg"
                    alt="MJ Brown - Journey"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Bottom Card Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-brand-mint text-slate-950 mb-1">
                      Creative Developer
                    </span>
                    <h3 className="text-xl font-bold text-white font-display">
                      MJ Brown
                    </h3>
                    <p className="text-xs text-slate-300 font-cursive text-brand-cherry">
                      The Journey from scratch
                    </p>
                  </div>
                </div>

                {/* Floating Micro-Badge 1: Clean Code */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3 rounded-2xl glass-nav px-3.5 py-2 shadow-lg border border-white/20 flex items-center gap-2"
                >
                  <Sparkles size={16} className="text-brand-mint" />
                  <span className="text-xs font-bold text-slate-800 dark:text-white">Clean Code & UI</span>
                </motion.div>

                {/* Floating Micro-Badge 2: Minimalist */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-3 -left-3 rounded-2xl glass-nav px-3.5 py-2 shadow-lg border border-white/20 flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 dark:text-white">Minimalist Aesthetic</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => handleScrollTo('about')}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-brand-mint transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <ArrowDown size={16} className="group-hover:text-brand-mint" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
};
