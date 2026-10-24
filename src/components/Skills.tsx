import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Sparkles, Layers, CheckCircle2, LucideIcon } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillCategory } from '../types';
import { playClick } from '../utils/audio';

const CATEGORY_ICONS: Record<SkillCategory, LucideIcon> = {
  Frontend: Layout,
  'Animation & Design': Sparkles,
  'Backend & Tools': Cpu,
  Architecture: Layers,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const categories: (SkillCategory | 'All')[] = ['All', 'Frontend', 'Animation & Design', 'Backend & Tools', 'Architecture'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-slate-900/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-brand-mint bg-brand-mint/10 border border-brand-mint/20 mb-3"
          >
            <Cpu size={14} />
            <span>Technical Arsenal</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
          >
            Skills, Tools & <span className="font-cursive text-brand-cherry text-4xl sm:text-6xl">Craftsmanship</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
          >
            Focused on modern standards, rapid iterations, fluid frame-rates, and pixel-perfect design executions.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playClick();
                  setSelectedCategory(cat);
                }}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-brand-mint text-slate-950 shadow-md shadow-brand-mint/20 scale-105'
                    : 'glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = CATEGORY_ICONS[skill.category] || Sparkles;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-2xl glass-panel p-5 border border-slate-300/40 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-brand-mint/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-surface text-brand-mint border border-brand-mint/20 group-hover:bg-brand-mint group-hover:text-slate-950 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold font-display text-sm sm:text-base text-slate-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-bold font-display text-brand-mint">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-mint via-teal-400 to-sky-400 shadow-sm"
                  />
                </div>

                {skill.highlight && (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-brand-cherry">
                    <CheckCircle2 size={12} />
                    <span>Primary Core Competency</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
