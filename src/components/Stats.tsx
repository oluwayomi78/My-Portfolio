import React, { useId } from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
    const uniqueId = useId();
    const stats = [
        { val: '40+', label: 'Projects Completed' },
        { val: '25+', label: 'Happy Clients' },
        { val: '2+', label: 'Years of Experience' },
        { val: '12+', label: 'Technologies Used' },
    ];

    return (
        <section className="py-12 bg-gradient-to-r from-[#6366f1]/10 to-[#3b82f6]/10 rounded-3xl border border-white/5 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                    <motion.div
                        key={`${uniqueId}-stat-${index}`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] bg-clip-text text-transparent">
                            {stat.val}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-400 mt-2 tracking-wider uppercase">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;