"use client";

import { motion } from "framer-motion";
import FloatingCard from "@/components/ui/FloatingCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type Skill = {
    name: string;
    icon?: string;
    color: string;
    description: string;
};

const PROGRAMMING_SKILLS: Skill[] = [
    { name: "Java", color: "bg-red-50 text-red-700 border-red-200", description: "Core Language" },
    { name: "Python", color: "bg-blue-50 text-blue-700 border-blue-200", description: "AI & Scripting" },
    { name: "JavaScript", color: "bg-yellow-50 text-yellow-700 border-yellow-200", description: "Web Development" },
    { name: "TypeScript", color: "bg-blue-50 text-blue-800 border-blue-300", description: "Type-Safe Web" },
    { name: "SQL", color: "bg-orange-50 text-orange-700 border-orange-200", description: "Database Management" },
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
                        {PROGRAMMING_SKILLS.map((skill, index) => (
                            <motion.div key={skill.name} variants={fadeInUp}>
                                <FloatingCard enableHover={true} className={`h-full border ${skill.color} bg-opacity-40 backdrop-blur-sm`}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${skill.color} bg-opacity-20 text-xl font-bold`}>
                                            {skill.name.substring(0, 2).toUpperCase()}
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
