import React, { useId } from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaEnvira,
    FaCode,
    FaGithub,
    FaTerminal,
    FaExpandArrowsAlt,
    FaGlobe,
} from "react-icons/fa";

const Skills: React.FC = () => {
    const uniqueId = useId();
    const skills = [
        {
            name: "React.js",
            icon: <FaReact />,
            color: "group-hover:text-[#61dafb]",
        },
        {
            name: "Node.js",
            icon: <FaNodeJs />,
            color: "group-hover:text-[#339933]",
        },
        {
            name: "Express.js",
            icon: <FaTerminal />,
            color: "group-hover:text-gray-400",
        },
        {
            name: "MongoDB",
            icon: <FaEnvira />,
            color: "group-hover:text-[#47a248]",
        },
        {
            name: "TypeScript",
            icon: <FaCode />,
            color: "group-hover:text-[#3178c6]",
        },
        {
            name: "JavaScript",
            icon: <FaCode />,
            color: "group-hover:text-[#f7df1e]",
        },
        {
            name: "Tailwind CSS",
            icon: <FaExpandArrowsAlt />,
            color: "group-hover:text-[#38bdf8]",
        },
        {
            name: "Git & GitHub",
            icon: <FaGithub />,
            color: "group-hover:text-white",
        },
        {
            name: "REST APIs",
            icon: <FaGlobe />,
            color: "group-hover:text-[#06b6d4]",
        },
        {
            name: "Responsive Design",
            icon: <FaExpandArrowsAlt />,
            color: "group-hover:text-[#6366f1]",
        },
    ];

    return (
        <section id="skills" className="py-12 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Tech Constellation</h2>
                <div className="w-16 h-1 bg-[#6366f1] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={`${uniqueId}-skill-${index}`}
                        className="group relative bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 backdrop-blur-md transition-all duration-300 hover:border-[#06b6d4]/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className={`text-4xl text-gray-400 transition-colors duration-300 ${skill.color}`}>
                            {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
