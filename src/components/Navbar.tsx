import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Volume2, VolumeX, Sparkles, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { playClick, playPop, getSoundEnabled, setSoundEnabled } from '../utils/audio';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Thoughts', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    setSoundOn(getSoundEnabled());

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playPop();
  };

  const handleNavClick = (href: string) => {
    playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 ${
              isScrolled
                ? 'glass-nav shadow-lg shadow-black/20'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center gap-2 text-left"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-brand-mint to-brand-cherry text-slate-950 font-bold shadow-md shadow-brand-mint/20 transition-transform duration-300 group-hover:scale-105">
                <span className="font-display tracking-tight text-sm">MJ</span>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-900 bg-brand-mint" />
              </div>
              <div className="hidden xs:block">
                <span className="block font-display text-base font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                  MJ Brown
                </span>
                <span className="block font-cursive text-sm text-brand-mint -mt-1 capitalize">
                  journey
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 rounded-full p-1 bg-slate-200/50 dark:bg-slate-900/60 border border-slate-300/40 dark:border-white/5 backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'text-slate-950 dark:text-white font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-white dark:bg-brand-surface shadow-sm border border-slate-200/80 dark:border-white/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Utility Actions (Sound, Theme, CTA) */}
            <div className="flex items-center gap-2">
              {/* Sound Toggle */}
              <button
                onClick={toggleSound}
                aria-label={soundOn ? 'Mute audio' : 'Enable interactive audio feedback'}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/50 dark:border-white/10 bg-slate-100/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-brand-mint dark:hover:text-brand-mint hover:scale-105 active:scale-95 transition-all"
                title={soundOn ? 'Mute audio' : 'Enable interactive audio'}
              >
                {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => {
                  playPop();
                  toggleTheme();
                }}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/50 dark:border-white/10 bg-slate-100/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-300 hover:scale-105 active:scale-95 transition-all"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Contact Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-mint to-teal-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-brand-mint/20 hover:shadow-brand-mint/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={14} />
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => {
                  playPop();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                aria-label="Toggle navigation menu"
                className="flex md:hidden h-9 w-9 items-center justify-center rounded-full border border-slate-300/50 dark:border-white/10 bg-slate-100/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden overflow-hidden rounded-2xl glass-nav p-6 shadow-2xl border border-slate-300/60 dark:border-white/10"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                      isActive
                        ? 'bg-brand-mint/15 text-brand-mint font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles size={16} className="text-brand-mint" />}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-mint to-teal-400 py-3 text-sm font-semibold text-slate-950 shadow-md"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
