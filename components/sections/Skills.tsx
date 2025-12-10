"use client";

import { motion } from "framer-motion";
import FloatingCard from "@/components/ui/FloatingCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type Skill = {
    name: string;
    icon: React.ReactNode;
    color: string;
    description: string;
};

// Simple inline SVGs for logos
const Icons = {
    Java: (
        <svg viewBox="0 0 380 380" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M192.45 0C86.136 0 0 86.138 0 192.454C0 298.77 86.136 384.908 192.45 384.908C298.766 384.908 384.902 298.77 384.902 192.454C384.902 86.138 298.766 0 192.45 0ZM249.778 288.796C237.94 294.948 214.542 299.872 191.222 299.872C151.01 299.872 135.012 284.18 135.012 258.952C135.012 238.442 153.164 220.598 186.298 220.598C197.682 220.598 206.912 221.826 211.528 222.75V161.218C211.528 141.22 197.682 135.682 181.684 135.682C167.532 135.682 157.686 139.682 149.07 144.298L134.912 108.61C145.988 102.148 165.992 94.764 191.222 94.764C236.446 94.764 259.212 114.762 259.212 154.142V231.674C259.212 240.29 260.442 245.828 262.596 251.058V291.564C258.904 290.95 254.596 290.026 249.778 288.796ZM211.528 259.668V249.822C207.526 248.898 201.372 247.974 194.91 247.974C179.834 247.974 173.374 254.128 173.374 262.336C173.374 271.258 179.526 276.182 193.372 276.182C201.064 276.182 208.756 274.028 211.528 271.566V259.668Z" fill="#ff2400" />
        </svg>
    ),
    Python: (
        <svg viewBox="0 0 128 128" className="h-full w-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M63.02 9.006c-13.882.043-26.608 1.996-26.608 11.455v11.72h27.14v3.864H27.135c-11.238 0-20.916 7.64-20.916 20.354 0 13.792 7.749 22.868 20.916 22.868h4.63V73.33c0-7.854 6.843-14.7 14.697-14.7H86.27V42.74c0-11.238-9.874-20.732-21.72-20.732H63.02V9.006zm-7.642 6.757a3.951 3.951 0 0 1 3.953 3.952 3.951 3.951 0 0 1-3.953 3.952 3.951 3.951 0 0 1-3.953-3.952 3.951 3.951 0 0 1 3.953-3.952zm43.344 26.969c13.883-.043 26.609-1.996 26.609-11.455V19.557H98.191v-3.864h36.417c11.238 0 20.916-7.64 20.916-20.354 0-13.792-7.749-22.868-20.916-22.868h-4.63v5.939c0 7.854-6.843 14.7-14.697 14.7H75.922v15.892c0 11.238 9.874 20.732 21.72 20.732h1.528v13.007h-.45z" transform="matrix(1 0 0 -1 0 132)" fill="#3776AB" />
            <path d="M63.02 9.006c-13.882.043-26.608 1.996-26.608 11.455v11.72h27.14v3.864H27.135c-11.238 0-20.916 7.64-20.916 20.354 0 13.792 7.749 22.868 20.916 22.868h4.63V73.33c0-7.854 6.843-14.7 14.697-14.7H86.27V42.74c0-11.238-9.874-20.732-21.72-20.732H63.02V9.006zm-7.642 6.757a3.951 3.951 0 0 1 3.953 3.952 3.951 3.951 0 0 1-3.953 3.952 3.951 3.951 0 0 1-3.953-3.952zm-12.87 96.696a3.951 3.951 0 0 1 3.953 3.952 3.951 3.951 0 0 1-3.953 3.952 3.951 3.951 0 0 1-3.953-3.952 3.951 3.951 0 0 1 3.953-3.952z" fill="#FFD43B" />
        </svg>
    ),
    JavaScript: (
        <svg viewBox="0 0 128 128" className="h-full w-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F0DB4F" d="M3.6 3.6h120.8v120.8H3.6z" />
            <path fill="#323330" d="M78.6 96.1c-3.1 5.3-7.5 8.1-14.6 8.1-11.6 0-16.7-6.2-16.7-14.9V59.4h-10v29.3c0 14.4 9.1 23.9 25.8 23.9 10.6 0 18.2-4.9 22.4-12.7l-6.9-3.8zM111.4 59.4h-10v30.4c0 6.6-2.1 9.9-7.3 9.9-4.2 0-6.9-2.1-8.5-4.8l-7.7 4.8c3 5.4 8.7 8.9 16.5 8.9 12 0 17-6.6 17-18.4V59.4z" />
        </svg>
    ),
    TypeScript: (
        <svg viewBox="0 0 128 128" className="h-full w-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill="#007ACC" d="M2 2h124v124H2z" />
            <path fill="#FFF" d="M68.8 52.2h15.2v8.2h-4.8v37.1h-5.6V60.4h-4.8v-8.2zM94.7 75.8c.8-5.3 4.2-7.8 11.2-8 6.5-.1 10.4 2.8 10.9 6.8l5.2-1.3c-.9-6.3-7.2-10.4-16.1-10.3-9.5-.1-15.9 4.8-16.2 12.8 0 8.3 6.1 11.6 13.5 12.9 6.3 1.1 7.2 2.8 7.2 5.9 0 3-2.6 4.9-7.4 4.9-5.9 0-9.4-2.8-10.2-7.6l-5.3 1.2c1.3 7 7.7 11.2 15.6 11.2 8.4 0 12.7-5.1 12.7-10.4 0-8.2-6.2-11.2-13.8-12.6-6.6-1.1-7-2.9-7-5.7 0-3.3 2.7-5.1 6.5-5.1 4.5 0 7.4 2.1 7.9 5.3l5.3-1.1z" />
        </svg>
    ),
    SQL: (
        <svg viewBox="0 0 128 128" className="h-full w-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00758F" d="M43.6 10.2c-7.9 0-14.8 1.8-19.8 4.8-5 3-7.6 7.1-7.6 11.8 0 4.7 2.6 8.8 7.6 11.8 5 3 11.9 4.8 19.8 4.8s14.8-1.8 19.8-4.8c5-3 7.6-7.1 7.6-11.8 0-4.7-2.6-8.8-7.6-11.8-5-3-11.9-4.8-19.8-4.8z" />
            <path fill="#F29111" d="M43.6 49.8c-13.5 0-25.5-5.3-25.5-12.8v16.1c0 7.5 12 13.8 25.5 13.8 13.5 0 25.5-6.3 25.5-13.8V37c0 7.5-12 12.8-25.5 12.8z" />
            <path fill="#00758F" d="M43.6 72c-13.5 0-25.5-5.3-25.5-12.8v16.1c0 7.5 12 13.8 25.5 13.8s25.5-6.3 25.5-13.8V59.2c0 7.5-12 12.8-25.5 12.8z" />
            <path fill="#4296AD" d="M84.4 10.2c-7.9 0-14.8 1.8-19.8 4.8-5 3-7.6 7.1-7.6 11.8 0 4.7 2.6 8.8 7.6 11.8 5 3 11.9 4.8 19.8 4.8s14.8-1.8 19.8-4.8c5-3 7.6-7.1 7.6-11.8 0-4.7-2.6-8.8-7.6-11.8-5-3-11.9-4.8-19.8-4.8z" />
            <path fill="#B5B5B5" d="M84.4 49.8c-13.5 0-25.5-5.3-25.5-12.8v16.1c0 7.5 12 13.8 25.5 13.8 13.5 0 25.5-6.3 25.5-13.8V37c0 7.5-12 12.8-25.5 12.8z" />
            <path fill="#4296AD" d="M84.4 72c-13.5 0-25.5-5.3-25.5-12.8v16.1c0 7.5 12 13.8 25.5 13.8 13.5 0 25.5-6.3 25.5-13.8V59.2c0 7.5-12 12.8-25.5 12.8z" />
        </svg>
    ),
    GenAI: (
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
            <polyline points="7.5 19.79 7.5 14.6 3 12" />
            <polyline points="21 12 16.5 14.6 16.5 19.79" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    )
};


const PROGRAMMING_SKILLS: Skill[] = [
    { name: "Java", icon: Icons.Java, color: "bg-red-50 text-red-700 border-red-200", description: "Core Language" },
    { name: "Python", icon: Icons.Python, color: "bg-blue-50 text-blue-700 border-blue-200", description: "AI & Scripting" },
    { name: "JavaScript", icon: Icons.JavaScript, color: "bg-yellow-50 text-yellow-700 border-yellow-200", description: "Web Development" },
    { name: "TypeScript", icon: Icons.TypeScript, color: "bg-blue-50 text-blue-800 border-blue-300", description: "Type-Safe Web" },
    { name: "SQL", icon: Icons.SQL, color: "bg-orange-50 text-orange-700 border-orange-200", description: "Database Management" },
    { name: "Generative AI", icon: Icons.GenAI, color: "bg-purple-50 text-purple-700 border-purple-200", description: "LLMs & Diffusion" },
];

export default function Skills() {
    return (
        <section id="skills" className="relative z-10 px-4 py-20">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="mb-12 text-center text-4xl font-bold text-gray-900 sm:text-5xl"
                    >
                        Technical Skills
                    </motion.h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {PROGRAMMING_SKILLS.map((skill) => (
                            <motion.div key={skill.name} variants={fadeInUp}>
                                <FloatingCard enableHover={true} className={`h-full border ${skill.color} bg-opacity-40 backdrop-blur-sm`}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center p-2">
                                            {skill.icon}
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-gray-900">{skill.name}</h3>
                                        <p className="text-sm text-gray-600">{skill.description}</p>
                                    </div>
                                </FloatingCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
