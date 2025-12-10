"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import FloatingCard from "@/components/ui/FloatingCard";
import { ACHIEVEMENTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Achievements() {
    return (
        <section id="achievements" className="relative z-10 px-4 py-20">
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
                        <Award className="text-purple-600" size={40} />
                        Achievements
                    </motion.h2>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {ACHIEVEMENTS.map((achievement) => (
                            <motion.div key={achievement.id} variants={fadeInUp}>
                                <FloatingCard enableHover={true} className="h-full bg-white/50 backdrop-blur-sm border-purple-100 flex flex-col justify-between">
                                    <div>
                                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                                            {achievement.title}
                                        </h3>
                                        <p className="mb-3 text-sm font-semibold text-purple-600">
                                            {achievement.issuer} • {achievement.date}
                                        </p>
                                    </div>
                                    {achievement.description && (
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {achievement.description}
                                        </p>
                                    )}
                                </FloatingCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
