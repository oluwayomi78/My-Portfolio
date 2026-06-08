import React, { useId } from 'react';
import { motion } from 'framer-motion';

const SolarSystemBackground: React.FC = () => {
    const uniqueId = useId();
    const starLayers = [
        { size: '1px', duration: '120s', count: 40 },
        { size: '2px', duration: '180s', count: 25 },
    ];

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050816]">
            {starLayers.map((layer, index) => (
                <motion.div
                    key={`${uniqueId}-star-layer-${index}`}
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: parseInt(layer.duration), repeat: Infinity, ease: "linear" }}
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) ${layer.size}, transparent ${layer.size})`,
                        backgroundSize: '160px 160px',
                    }}
                />
            ))}

            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6366f1]/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#3b82f6]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '9s' }} />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm shadow-[0_0_40px_rgba(234,179,8,0.5)]" />

                <motion.div
                    className="absolute top-1/2 left-1/2 border border-white/5 rounded-full w-[280px] h-[280px]"
                    style={{ x: '-50%', y: '-50%' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#06b6d4] rounded-full shadow-[0_0_15px_#06b6d4]" />
                </motion.div>

                <motion.div
                    className="absolute top-1/2 left-1/2 border border-white/5 rounded-full w-[520px] h-[520px]"
                    style={{ x: '-50%', y: '-50%' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#6366f1] rounded-full shadow-[0_0_20px_#6366f1]" />
                </motion.div>
            </div>
        </div>
    );
};

export default SolarSystemBackground;