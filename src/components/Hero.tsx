import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaFileDownload, FaEnvelope } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section id="home" className="pt-20 min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-between gap-12 relative">
            <motion.div
                className="flex-1 space-y-6 text-center lg:text-left"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-[#06b6d4] text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
                    Mission Status: Active in 2026
                </div>

                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none">
                    Hi, I'm <span className="bg-gradient-to-r from-[#6366f1] via-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">Precious Abiodun</span>
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-gray-300">
                    MERN Stack Developer | Transforming Ideas into Exceptional Digital Experiences
                </p>

                <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    I architecture highly performant full-stack ecosystems using MongoDB, Express, React, and Node.js with secure processing configurations and glassmorphism layouts.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                    <a href="#projects" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#3b82f6] font-medium shadow-lg hover:shadow-[#6366f1]/30 transition-all duration-300 transform hover:-translate-y-1">
                        <FaRocket /> View Projects
                    </a>
                    <a href="/Resume.pdf" download="Resume.pdf" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                        <FaFileDownload /> Download Resume
                    </a>
                    <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent border border-[#06b6d4]/50 font-medium text-[#06b6d4] hover:bg-[#06b6d4]/10 transition-all duration-300">
                        <FaEnvelope /> Contact Me
                    </a>
                </div>
            </motion.div>

            <motion.div
                className="flex-1 flex justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full flex items-center justify-center">
                    <motion.div
                        className="absolute inset-0 rounded-full border border-dashed border-[#06b6d4]/40"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute inset-4 rounded-full border border-double border-[#6366f1]/30"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.2)] bg-gradient-to-b from-[#050816] to-[#6366f1]/20">
                        <img
                            src="https://avatars.githubusercontent.com/u/202946970?v=4"
                            alt="Precious Abiodun"
                            className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;