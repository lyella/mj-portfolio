import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { playClick } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/60 dark:border-white/10 bg-slate-100/40 dark:bg-slate-950/80 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200/60 dark:border-white/10">
          
          {/* Logo & Manifesto */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-mint text-slate-950 font-bold text-xs">
                MJ
              </div>
              <span className="font-display text-lg font-bold text-slate-900 dark:text-white">
                MJ Brown
              </span>
              <span className="font-cursive text-brand-cherry text-base">
                journey
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Built from scratch with positive energy, dedication, and modern animation standards.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <a href="#home" onClick={playClick} className="hover:text-brand-mint transition-colors">Home</a>
            <a href="#about" onClick={playClick} className="hover:text-brand-mint transition-colors">About</a>
            <a href="#projects" onClick={playClick} className="hover:text-brand-mint transition-colors">Works</a>
            <a href="#skills" onClick={playClick} className="hover:text-brand-mint transition-colors">Skills</a>
            <a href="#journey" onClick={playClick} className="hover:text-brand-mint transition-colors">Journey</a>
            <a href="#blog" onClick={playClick} className="hover:text-brand-mint transition-colors">Blog</a>
            <a href="#contact" onClick={playClick} className="hover:text-brand-mint transition-colors">Contact</a>
          </div>

          {/* Back To Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-mint hover:border-brand-mint/40 transition-all shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="text-brand-mint" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} MJ Brown. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart size={13} className="text-brand-cherry fill-brand-cherry" />
            <span>using React, Vite & Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
