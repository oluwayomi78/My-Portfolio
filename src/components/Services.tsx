import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaCubes, FaLink, FaSlidersH, FaMobileAlt } from 'react-icons/fa';

const Services: React.FC = () => {
    const uniqueId = useId();
    const services = [
        { title: 'Frontend Development', desc: 'Crafting responsive single-page visual environments with optimized rendering speeds and interactive layers.', icon: <FaLaptopCode /> },
        { title: 'Backend Development', desc: 'Architecting computational logic, database models, and secure enterprise processing environments.', icon: <FaServer /> },
        { title: 'Full-Stack Development', desc: 'End-to-end platform deployment connecting high-speed data handling layers directly to UI components.', icon: <FaCubes /> },
        { title: 'API Integration', desc: 'Structuring resilient external microservice frameworks and secure programmatic standard API bridges.', icon: <FaLink /> },
        { title: 'Website Optimization', desc: 'Auditing bundle payloads, optimizing image arrays, and setting optimal infrastructure responses.', icon: <FaSlidersH /> },
        { title: 'Responsive Web Design', desc: 'Ensuring structural consistency across diverse display ratios and varied mobile screen configurations.', icon: <FaMobileAlt /> },
    ];

    return (
        <section id="services" className="py-12 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Professional Services</h2>
                <div className="w-16 h-1 bg-[#06b6d4] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={`${uniqueId}-service-${index}`}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#06b6d4]/30 transition-all duration-300 group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#06b6d4] group-hover:text-[#050816] transition-all duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;