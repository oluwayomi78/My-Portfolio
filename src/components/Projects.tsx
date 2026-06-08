import React, { useId } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
    title: string;
    desc: string;
    tags: string[];
    image: string;
    github: string;
    live: string;
}

const Projects: React.FC = () => {
    const uniqueId = useId();
    const projects: Project[] = [
        {
            title: "School Website",
            desc: "A modern school management and information platform designed to showcase school activities, admissions, courses, and student resources.",
            image: "/public/image.png",
            tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
            live: "https://school-website-delta-green.vercel.app",
            github: "https://github.com/oluwayomi78/school-website",
        },
        {
            title: "Saarcle - Connect, Learn, Grow",
            desc: "A social networking platform designed for students and professionals to connect, share knowledge, and grow their networks.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics1.png&w=1920&q=75",
            tags: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
            live: "https://saarcle-azure.vercel.app",
            github: "https://github.com/oluwayomi78/Saarcle",
        },
        {
            title: "LuxeMart",
            desc: "A premium e-commerce shopping experience featuring product filtering, cart functionality, and secure checkout integration.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics2.png&w=1920&q=75",
            tags: [
                "React",
                "Firebase",
                "Node.js",
                "Express",
                "Tailwind CSS",
                "Redux",
            ],
            live: "https://luxemart-eta.vercel.app",
            github: "https://github.com/oluwayomi78/luxemart",
        },
        {
            title: "FinTracker",
            desc: "A comprehensive financial tracking application to monitor expenses, income, and savings goals with visual analytics.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics3.png&w=1920&q=75",
            tags: ["React", "Chart.js", "Firebase", "Material UI"],
            live: "https://fintracker-etuf.vercel.app/",
            github: "https://github.com/oluwayomi78/FinTracker",
        },
        {
            title: "PreciousBank",
            desc: "A modern banking interface simulation allowing users to view transactions, transfer funds, and manage accounts securely.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics4.png&w=1920&q=75",
            tags: ["JavaScript", "DOM Manipulation", "CSS3", "React", "Node.js"],
            live: "https://precious-bank.vercel.app",
            github: "https://github.com/oluwayomi78/my-app",
        },
        {
            title: "Quiz App",
            desc: "An interactive quiz platform with timer logic, score tracking, and multiple question categories to test user knowledge.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics5.png&w=1920&q=75",
            tags: ["React", "Node.js", "Tailwind CSS"],
            live: "https://quiz-app-gamma-wine.vercel.app",
            github: "https://github.com/oluwayomi78/Quiz-App",
        },
        {
            title: "Recipe Finder",
            desc: "A culinary application that helps users discover recipes based on ingredients they have at home using external food APIs.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics6.png&w=1920&q=75",
            tags: ["React", "Edamam API", "Styled Components"],
            live: "https://recipe-finder-nine-eta.vercel.app",
            github: "https://github.com/oluwayomi78/Recipe-Finder",
        },
        {
            title: "Genius Calculator",
            desc: "A feature-rich calculator handling complex mathematical operations with a sleek, user-friendly design.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics7.png&w=1920&q=75",
            tags: ["JavaScript", "CSS Grid", "Math Logic"],
            live: "https://genius-calculator.vercel.app",
            github: "https://github.com/oluwayomi78/Genius-Calculator",
        },
        {
            title: "Precious Weather App",
            desc: "Real-time weather forecasting tool providing temperature, humidity, and conditions for any city worldwide.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics8.png&w=1920&q=75",
            tags: ["React", "OpenWeatherMap", "Axios"],
            live: "https://frontend-five-dun-16.vercel.app",
            github: "https://github.com/oluwayomi78/frontend",
        },
        {
            title: "Precious Keep App",
            desc: "A note-taking application inspired by Google Keep, allowing users to create, archive, and delete notes dynamically.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics9.png&w=1920&q=75",
            tags: ["Html", "JavaScript", "Firebase", "Local Storage", "CSS Modules"],
            live: "https://precious-keep.vercel.app",
            github: "https://github.com/oluwayomi78/precious-keep",
        },
        {
            title: "Chat Room App",
            desc: "A real-time messaging application supporting multiple users in a shared chat room environment.",
            image:
                "https://portfolio-eosin-kappa-zmi2w1dit9.vercel.app/_next/image?url=%2Fpics10.png&w=1920&q=75",
            tags: ["Html", "JavaScript", "Firebase", "CSS Modules"],
            live: "https://chat-room-chi-rose.vercel.app/",
            github: "https://github.com/oluwayomi78/chat-room",
        },
    ];

    return (
        <section id="projects" className="py-12 scroll-mt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                <div className="w-16 h-1 bg-[#3b82f6] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={`${uniqueId}-project-${index}`}
                        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md flex flex-col group hover:border-[#3b82f6]/40 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-[#050816]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a
                                    href={project.github}
                                    className="p-3 bg-[#050816]/80 rounded-full text-white hover:text-[#06b6d4] transition-colors"
                                >
                                    <FaGithub size={20} />
                                </a>
                                <a
                                    href={project.live}
                                    className="p-3 bg-[#050816]/80 rounded-full text-white hover:text-[#06b6d4] transition-colors"
                                >
                                    <FaExternalLinkAlt size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-white group-hover:text-[#3b82f6] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
