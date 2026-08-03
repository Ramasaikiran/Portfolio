"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import FloatingCard from "@/components/ui/FloatingCard";
import { EXPERIENCE } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Experience() {
    return (
        <section id="experience" className="relative z-10 px-4 py-20">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="mb-12 flex items-center justify-center gap-3 text-center text-4xl font-bold text-gray-900 sm:text-5xl"
                    >
                        <Briefcase className="text-purple-600" size={40} />
                        Work Experience
                    </motion.h2>

                    <div className="mx-auto max-w-3xl space-y-6">
                        {EXPERIENCE.map((job) => (
                            <motion.div key={job.id} variants={fadeInUp}>
                                <FloatingCard enableHover={true} className="bg-white/50 backdrop-blur-sm border-purple-100">
                                    <h3 className="mb-1 text-xl font-bold text-gray-900">
                                        {job.role}
                                    </h3>
                                    <p className="mb-3 text-sm font-semibold text-purple-600">
                                        {job.company} • {job.duration}
                                    </p>
                                    <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-600">
                                        {job.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                </FloatingCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
