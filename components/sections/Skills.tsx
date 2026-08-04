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
        <svg viewBox="0 0 128 128" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
            <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" />
            <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" />
            <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z" />
            <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" />
        </svg>
    ),
    React: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>
    ),
    JavaScript: (
        <svg viewBox="0 0 128 128" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
            <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
        </svg>
    ),
    TypeScript: (
        <svg viewBox="0 0 128 128" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
            <path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z" />
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
    NodeJS: (
        <svg viewBox="0 0 128 128" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <path fill="#339933" d="M64 4 L116 34 V94 L64 124 L12 94 V34 Z" />
            <g fill="#ffffff">
                <rect x="46" y="40" width="9" height="48" />
                <rect x="73" y="40" width="9" height="48" />
                <polygon points="46,40 55,40 82,88 73,88" />
            </g>
        </svg>
    ),
    SpringBoot: (
        <svg viewBox="0 0 128 128" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="64" cy="64" r="60" fill="#6DB33F" />
            <path
                fill="#ffffff"
                d="M96 34c-14 18-40 12-56 26-10 9-12 22-8 30 1-4 4-9 9-12-3 6-4 14-1 20 8-18 24-22 38-30 12-7 20-18 18-34zM40 96c-2-6-2-13 1-19 3 8 10 13 18 15 12 3 24 0 32-8-8 14-24 20-38 18-5-1-10-3-13-6z"
            />
        </svg>
    ),
};


type SkillGroup = {
    category: string;
    skills: Skill[];
};

type ConceptGroup = {
    category: string;
    concepts: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: Icons.React, color: "bg-cyan-50 text-cyan-700 border-cyan-200", description: "Frontend Library" },
            { name: "TypeScript", icon: Icons.TypeScript, color: "bg-blue-50 text-blue-800 border-blue-300", description: "Type-Safe Web" },
            { name: "JavaScript", icon: Icons.JavaScript, color: "bg-yellow-50 text-yellow-700 border-yellow-200", description: "Web Development" },
        ],
    },
    {
        category: "Programming Language",
        skills: [
            { name: "Java", icon: Icons.Java, color: "bg-red-50 text-red-700 border-red-200", description: "Core Language" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: Icons.NodeJS, color: "bg-green-50 text-green-700 border-green-200", description: "Runtime & APIs" },
            { name: "Spring Boot", icon: Icons.SpringBoot, color: "bg-green-50 text-green-700 border-green-200", description: "Java Backend Framework" },
        ],
    },
    {
        category: "Database",
        skills: [
            { name: "SQL", icon: Icons.SQL, color: "bg-orange-50 text-orange-700 border-orange-200", description: "Database Management" },
        ],
    },
];

const CORE_CS_GROUP: ConceptGroup = {
    category: "Core CS Concepts",
    concepts: ["Data Structures and Algorithms", "Object Oriented Programming", "System Design"],
};

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

                    <div className="space-y-12">
                        {SKILL_GROUPS.map((group) => (
                            <div key={group.category}>
                                <motion.h3
                                    variants={fadeInUp}
                                    className="mb-6 text-xl font-semibold text-purple-600"
                                >
                                    {group.category}
                                </motion.h3>
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {group.skills.map((skill) => (
                                        <motion.div key={skill.name} variants={fadeInUp}>
                                            <FloatingCard enableHover={true} className={`h-full border ${skill.color} bg-opacity-40 backdrop-blur-sm`}>
                                                <div className="flex flex-col items-center text-center">
                                                    <div className="mb-4 flex h-16 w-16 items-center justify-center p-2">
                                                        {skill.icon}
                                                    </div>
                                                    <h4 className="mb-2 text-xl font-bold text-gray-900">{skill.name}</h4>
                                                    <p className="text-sm text-gray-600">{skill.description}</p>
                                                </div>
                                            </FloatingCard>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Core CS Concepts — no brand logos, shown as tags */}
                        <div>
                            <motion.h3
                                variants={fadeInUp}
                                className="mb-6 text-xl font-semibold text-purple-600"
                            >
                                {CORE_CS_GROUP.category}
                            </motion.h3>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                                {CORE_CS_GROUP.concepts.map((concept) => (
                                    <span
                                        key={concept}
                                        className="rounded-full border border-purple-200 bg-purple-50 px-5 py-2.5 text-sm font-medium text-purple-700"
                                    >
                                        {concept}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
