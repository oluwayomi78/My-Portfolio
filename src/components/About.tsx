import React, { useId } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const uniqueId = useId();
    const timeline = [
        { year: '2024 - Present', title: 'Senior Full-Stack Engineer', desc: 'Designing architectural pipelines and implementing microservices environments.' },
        { year: '2022 - 2024', title: 'MERN Stack Developer', desc: 'Crafting responsive single page applications and structuring optimized REST APIs.' },
        { year: '2021', title: 'Frontend Developer Specialist', desc: 'Focused on UI design implementations and state management optimizations.' },
    ];

    return (
        <section id="about" className="py-12 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">About My Journey</h2>
                <div className="w-16 h-1 bg-[#06b6d4] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                    <h3 className="text-2xl font-semibold text-[#06b6d4]">Creating Reliable Space Architectures</h3>
                    <p className="text-gray-300 leading-relaxed">
                        As a MERN Stack Developer, I design scalable, responsive, and highly reliable web software applications. My core engineering practices prioritize optimized schema construction, seamless data pipelines, and pixel-perfect responsive layer implementation.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        I bridges the gap between high-speed backend execution layers and visually intuitive glassmorphic dashboard views to match modern production demands.
                    </p>
                </div>

                <div className="relative border-l-2 border-white/10 pl-6 space-y-8 ml-4">
                    {timeline.map((item, index) => (
                        <motion.div
                            key={`${uniqueId}-timeline-${index}`}
                            className="relative"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#06b6d4] shadow-[0_0_10px_#06b6d4]" />
                            <span className="text-sm font-semibold text-[#6366f1]">{item.year}</span>
                            <h4 className="text-lg font-bold text-white mt-1">{item.title}</h4>
                            <p className="text-gray-400 mt-2 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;