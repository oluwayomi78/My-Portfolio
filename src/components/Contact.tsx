import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <section id="contact" className="py-12 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Establish Connection</h2>
                <div className="w-16 h-1 bg-[#6366f1] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto items-start">
                <div className="md:col-span-2 space-y-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                        <h3 className="text-xl font-bold text-white mb-4">Contact Channels</h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Transmit systemic inquiries regarding architectural software components, contract developments, or active deployment consulting work lines.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:precious@example.com" className="flex items-center gap-3 text-gray-300 hover:text-[#06b6d4] transition-colors">
                                <FaEnvelope className="text-lg" />
                                <span className="text-sm">preciousenoch459@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://github.com/oluwayomi78" target="_blank" rel="noreferrer" className="flex-1 p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl text-gray-300 hover:text-[#06b6d4] hover:border-[#06b6d4]/30 transition-all backdrop-blur-md">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/precious-enoch-5b9a04377/" target="_blank" rel="noreferrer" className="flex-1 p-4 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl text-gray-300 hover:text-[#06b6d4] hover:border-[#06b6d4]/30 transition-all backdrop-blur-md">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <motion.form
                    onSubmit={handleFormSubmit}
                    className="md:col-span-3 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                            <input
                                type="text"
                                required
                                placeholder="John Doe"
                                className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#06b6d4] transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                            <input
                                type="email"
                                required
                                placeholder="johndoe@example.com"
                                className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#06b6d4] transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Transmission Content</label>
                        <textarea
                            rows={5}
                            required
                            placeholder="Provide transaction context or descriptive details..."
                            className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#06b6d4] transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white font-bold tracking-wider hover:opacity-90 active:scale-[0.99] transition-all"
                    >
                        SEND TRANSMISSION
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
