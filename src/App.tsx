import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Services from '../src/components/Services';
import Stats from '../src/components/Stats';
import Contact from '../src/components/Contact';
import SolarSystemBackground from '../src/components/SolarSystemBackground';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#050816] text-[#f8fafc] min-h-screen font-sans relative overflow-x-clip selection:bg-[#06b6d4]/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#06b6d4] z-50 shadow-[0_0_15px_#06b6d4] origin-left"
        style={{ scaleX }}
      />

      <SolarSystemBackground />

      <Navbar />
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Stats />
        <Contact />
      </main>
    </div>
  );
};

export default App;