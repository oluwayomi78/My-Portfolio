import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGlobeAmericas } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'];

    return (
        <nav className="sticky top-0 z-40 w-full bg-[#050816]/60 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <motion.a
                    href="#home"
                    className="flex items-center gap-2 text-xl font-bold tracking-wider text-white"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaGlobeAmericas
                        className="text-[#06b6d4] animate-spin"
                        style={{ animationDuration: '12s' }}
                    />
                    <span>
                        PRECIOUS
                        <span className="text-[#6366f1]">.DEV</span>
                    </span>
                </motion.a>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-300 hover:text-[#06b6d4] transition-colors duration-300 relative group"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#06b6d4] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-gray-300 hover:text-[#06b6d4] transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;