import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const PortfolioContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="relative min-h-screen selection:bg-brand-mint selection:text-slate-950">
      {/* Interactive Cursor Follower */}
      <CustomCursor />

      {/* Dynamic 60fps Particle Constellation Background */}
      <ParticleCanvas isDark={isDark} />

      {/* Floating Glass Navigation Header */}
      <Navbar />

      {/* Main Portfolio Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default App;
