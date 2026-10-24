import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Clock, Calendar, ArrowRight, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import { playClick } from '../utils/audio';

export const Blog: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-brand-mint bg-brand-mint/10 border border-brand-mint/20 mb-3"
          >
            <BookOpen size={14} />
            <span>Reflections & Insights</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
          >
            Thoughts, Articles & <span className="font-cursive text-brand-cherry text-4xl sm:text-6xl">Notes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
          >
            Reflecting on design principles, animation performance, and the lessons learned building things from the ground up.
          </motion.p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => {
                playClick();
                setActiveArticle(post);
              }}
              className="group cursor-pointer flex flex-col justify-between rounded-3xl glass-panel p-7 border border-slate-300/40 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-brand-mint/40 transition-all"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span className="font-semibold text-brand-mint uppercase tracking-wider text-[11px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-mint transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </span>
                
                <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-mint group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Read Article Modal */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  playClick();
                  setActiveArticle(null);
                }}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 w-full max-w-2xl rounded-3xl glass-panel bg-slate-900/95 border border-slate-700/60 p-6 sm:p-10 shadow-2xl my-8 max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => {
                    playClick();
                    setActiveArticle(null);
                  }}
                  aria-label="Close article"
                  className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full glass-panel text-white hover:bg-brand-mint hover:text-slate-950 transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 text-xs text-brand-mint font-semibold uppercase tracking-wider mb-3">
                  <span>{activeArticle.category}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-6 leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="space-y-4 text-slate-300 leading-relaxed text-base">
                  {activeArticle.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-brand-mint flex items-center justify-center text-slate-950 font-bold text-xs">
                      MJ
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">Written by MJ Brown</span>
                      <span className="block text-[11px] text-brand-cherry font-cursive">Journey & Reflections</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      playClick();
                      setActiveArticle(null);
                    }}
                    className="rounded-xl px-4 py-2 text-xs font-semibold glass-panel text-white hover:bg-brand-mint hover:text-slate-950 transition-colors"
                  >
                    Done Reading
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
