import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter, CheckCircle2, Clock, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClick, playChime } from '../utils/audio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    playClick();

    // Simulate rapid smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playChime();

      // Trigger celebratory confetti burst
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#29c59c', '#FFBCBC', '#38bdf8', '#ffffff'],
        });
      } catch {
        // Fallback
      }
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-mint/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-brand-mint bg-brand-mint/10 border border-brand-mint/20 mb-3"
          >
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white"
          >
            Let's Build Something <span className="text-gradient">Memorable</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
          >
            Have a project in mind, a freelance inquiry, or just want to discuss modern animation and design? Drop a message below.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Contact Cards & Live Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Availability Status Card */}
            <div className="rounded-3xl glass-panel p-6 border border-slate-300/40 dark:border-white/10 shadow-lg">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                  Current Status
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-2">
                Available for New Projects
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Open for high-impact frontend development, interactive animation design, and full-stack engagements.
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock size={13} />
                  <span>Local Time:</span>
                </div>
                <span className="font-mono text-slate-700 dark:text-slate-200 font-semibold">
                  {currentTime || 'Loading...'}
                </span>
              </div>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="rounded-3xl glass-panel p-6 border border-slate-300/40 dark:border-white/10 shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm sm:text-base text-slate-900 dark:text-white truncate font-medium">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-surface text-brand-mint hover:bg-brand-mint hover:text-slate-950 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              {copiedEmail && (
                <span className="block mt-2 text-xs font-semibold text-brand-mint">
                  ✓ Copied to clipboard!
                </span>
              )}
            </div>

            {/* Social Links Card */}
            <div className="rounded-3xl glass-panel p-6 border border-slate-300/40 dark:border-white/10 shadow-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Social Profiles & Repos
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl glass-panel text-slate-700 dark:text-slate-300 hover:text-brand-mint hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl glass-panel text-slate-700 dark:text-slate-300 hover:text-sky-400 hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl glass-panel text-slate-700 dark:text-slate-300 hover:text-brand-cherry hover:scale-105 active:scale-95 transition-all shadow-sm"
                  aria-label="Twitter Profile"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-slate-300/40 dark:border-white/10 shadow-xl">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-mint/20 text-brand-mint border border-brand-mint/40">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                      Message Dispatched!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out, {formData.name}. I'll review your note and respond promptly.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          playClick();
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="rounded-xl px-6 py-2.5 text-xs font-semibold glass-panel text-slate-900 dark:text-white hover:bg-brand-mint hover:text-slate-950 transition-colors"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full rounded-xl px-4 py-3 text-sm bg-slate-100/70 dark:bg-slate-900/60 border border-slate-300/60 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="w-full rounded-xl px-4 py-3 text-sm bg-slate-100/70 dark:bg-slate-900/60 border border-slate-300/60 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry / Collaboration"
                        className="w-full rounded-xl px-4 py-3 text-sm bg-slate-100/70 dark:bg-slate-900/60 border border-slate-300/60 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-all"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Your Message *
                        </label>
                        <span className="text-[11px] text-slate-400">
                          {formData.message.length} / 500
                        </span>
                      </div>
                      <textarea
                        required
                        rows={4}
                        maxLength={500}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your idea, timeline, or question..."
                        className="w-full rounded-xl px-4 py-3 text-sm bg-slate-100/70 dark:bg-slate-900/60 border border-slate-300/60 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-mint focus:ring-1 focus:ring-brand-mint transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-mint to-teal-400 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-brand-mint/25 hover:shadow-brand-mint/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Transmission...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
