import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Terminal, Sparkles, Lightbulb, CheckCircle2 } from 'lucide-react';
import { playClick } from '../utils/audio';

type Tab = 'story' | 'philosophy' | 'approach';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: Compass },
    { id: 'philosophy', label: 'Design Philosophy', icon: Lightbulb },
    { id: 'approach', label: 'Engineering Craft', icon: Terminal },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accents */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-mint/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-brand-mint bg-brand-mint/10 border border-brand-mint/20 mb-4"
          >
            <Sparkles size={14} />
            <span>Behind The Screen</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
          >
            About My <span className="font-cursive text-brand-cherry text-4xl sm:text-6xl">Website</span> & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
          >
            A dedicated sanctuary built to record progress, celebrate works, and explore the limitless boundary between creative intuition and software craftsmanship.
          </motion.p>
        </div>

        {/* Highlight Quote Banner (Inspired by MJ Brown's original statement) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl glass-panel p-8 sm:p-12 mb-16 border border-slate-300/40 dark:border-white/10 shadow-xl overflow-hidden"
        >
          {/* Subtle colored accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-mint via-brand-cherry to-sky-400" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-4xl text-brand-mint font-serif leading-none opacity-60">“</span>
              <p className="text-lg sm:text-2xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed font-display">
                I created my website to show my world and preserve memories. This site is not only about my journey—it is also for my works and how dedicated I am. Starting from scratch, I don't know where my feet will lead me, but I always choose to think positively and push forward.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-0.5 w-8 bg-brand-mint" />
                <span className="font-display font-bold text-slate-900 dark:text-white text-sm">
                  MJ Brown
                </span>
                <span className="text-xs text-brand-cherry font-cursive text-base">
                  Creator & Developer
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                <CheckCircle2 size={18} className="text-brand-mint shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">100% Focused on Quality & Polish</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                <CheckCircle2 size={18} className="text-brand-mint shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Constant Hunger to Learn & Improve</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-white/5">
                <CheckCircle2 size={18} className="text-brand-mint shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Embracing Minimalist Elegance</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Tabbed Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playClick();
                    setActiveTab(tab.id as Tab);
                  }}
                  className={`flex items-center gap-4 rounded-2xl p-4 text-left transition-all ${
                    isSelected
                      ? 'glass-panel bg-brand-mint/10 dark:bg-brand-mint/15 border-brand-mint/40 shadow-md'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-900/60 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                    isSelected
                      ? 'bg-brand-mint text-slate-950 font-bold shadow-md shadow-brand-mint/20'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className={`text-base font-bold font-display ${
                      isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                    }`}>
                      {tab.label}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {tab.id === 'story' && 'How this path began'}
                      {tab.id === 'philosophy' && 'Form follows function'}
                      {tab.id === 'approach' && 'Quality and speed'}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display Area */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl glass-panel p-6 sm:p-10 border border-slate-300/40 dark:border-white/10 min-h-[320px]">
              <AnimatePresence mode="wait">
                {activeTab === 'story' && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-brand-mint font-semibold text-sm">
                      <Compass size={18} />
                      <span>The Origin & Evolution</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                      Starting with Curiosity & Courage
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      Every great journey starts with a simple step. When I started coding, everything was unfamiliar territory. But rather than being discouraged, I embraced the thrill of transforming ideas into tangible interactive software.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      Today, that same persistence drives my projects. Whether building a full e-commerce interface, crafting silky smooth 60fps animations, or fine-tuning micro-interactions, I treat every project as an opportunity to raise my benchmark.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'philosophy' && (
                  <motion.div
                    key="philosophy"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-brand-cherry font-semibold text-sm">
                      <Lightbulb size={18} />
                      <span>Harmonizing Emotion & Restraint</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                      Minimalism is Not Emptiness
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      Some people think minimalism is simply having fewer elements on screen. True minimalism is the intentional harmony where every pixel, line of whitespace, and subtle shadow serves a purpose.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      Motion should guide the eye, not distract it. By pairing responsive physics with clean typography and balanced palettes, I aim to create interfaces that feel calm, natural, and memorable.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'approach' && (
                  <motion.div
                    key="approach"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                      <Terminal size={18} />
                      <span>Speed, Accessibility & Reliability</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                      Engineering Built to Last
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      Behind every beautiful aesthetic lies rigorous code. I believe in strict TypeScript type safety, modular component architectures, comprehensive keyboard accessibility (WAI-ARIA), and zero-waste bundles.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                      Animations are hardware-accelerated (`transform: translate3d` and `opacity`) to guarantee that mobile devices never drop a single frame or burn excessive battery life.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
