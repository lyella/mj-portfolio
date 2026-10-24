import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-brand-mint bg-brand-mint/10 border border-brand-mint/20 mb-3"
          >
            <Compass size={14} />
            <span>The Growth Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
          >
            My <span className="font-cursive text-brand-cherry text-4xl sm:text-6xl">Journey</span> & Milestones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
          >
            Started from scratch with a humble vision, continually pushing limits and discovering that consistency and positive energy create breakthroughs.
          </motion.p>
        </div>

        {/* Timeline Stream */}
        <div className="relative mx-auto max-w-4xl">
          
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-mint via-brand-cherry to-sky-400 opacity-30" />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.type === 'career' ? Briefcase : item.type === 'learning' ? GraduationCap : Sparkles;

              return (
                <div
                  key={item.year + item.title}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Glow */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border-2 border-brand-mint text-brand-mint shadow-md shadow-brand-mint/30 z-10">
                    <Icon size={14} />
                  </div>

                  {/* Spacer for Alternate Columns on Desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Milestone Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-slate-300/40 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-brand-mint/40 transition-all">
                      
                      {/* Year Chip & Organization */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold bg-brand-mint/15 text-brand-mint border border-brand-mint/30">
                          <Calendar size={12} />
                          <span>{item.year}</span>
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {item.organization}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg px-2.5 py-1 text-xs font-medium bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
