"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import FloatingCard from "@/components/ui/FloatingCard";
import Badge from "@/components/ui/Badge";
import { PERSONAL_INFO, SKILLS, ACHIEVEMENTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function About() {
    return (
        <section className="relative z-10 px-4 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid gap-12 lg:grid-cols-2"
                >
                    {/* Left Column: Journey & Education */}
                    <div>
                        <motion.h2
                            variants={fadeInUp}
                            className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl"
                        >
                            My Journey
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="space-y-6">
                            <FloatingCard enableHover={false} className="bg-white/50 backdrop-blur-sm border-purple-100">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-purple-100 p-3">
                                        <GraduationCap className="text-purple-600" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                            {PERSONAL_INFO.college}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Computer Science Engineering
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            CGPA: {PERSONAL_INFO.cgpa} • Graduating {PERSONAL_INFO.graduation}
                                        </p>
                                    </div>
                                </div>
                            </FloatingCard>

                            <FloatingCard enableHover={false} className="bg-white/50 backdrop-blur-sm border-purple-100">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-lg bg-purple-100 p-3">
                                        <MapPin className="text-purple-600" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="mb-1 text-lg font-semibold text-gray-900">
                                            {PERSONAL_INFO.location}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            Open to remote opportunities and relocation
                                        </p>
                                    </div>
                                </div>
                            </FloatingCard>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div variants={fadeInUp} className="mt-12">
                            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                                <Award className="text-purple-600" size={28} />
                                Achievements
                            </h3>
                            <div className="space-y-4">
                                {ACHIEVEMENTS.map((achievement) => (
                                    <FloatingCard key={achievement.id} enableHover={false} className="bg-white/50 backdrop-blur-sm border-purple-100">
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            {achievement.title}
                                        </h4>
                                        <p className="mb-2 text-sm text-purple-600">
                                            {achievement.issuer} • {achievement.date}
                                        </p>
                                        {achievement.description && (
                                            <p className="text-sm text-gray-600">
                                                {achievement.description}
                                            </p>
                                        )}
                                    </FloatingCard>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Skills */}
                    <div>
                        <motion.h2
                            variants={fadeInUp}
                            className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl"
                        >
                            Technical Skills
                        </motion.h2>

                        <motion.div variants={fadeInUp} className="space-y-6">
                            {SKILLS.map((skillCategory) => (
                                <FloatingCard key={skillCategory.category} enableHover={false} className="bg-white/50 backdrop-blur-sm border-purple-100">
                                    <h3 className="mb-4 text-lg font-semibold text-purple-600">
                                        {skillCategory.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillCategory.skills.map((skill) => (
                                            <Badge key={skill} className="bg-white text-gray-800 border-gray-200">{skill}</Badge>
                                        ))}
                                    </div>
                                </FloatingCard>
                            ))}
                        </motion.div>

                        {/* Philosophy */}
                        <motion.div variants={fadeInUp} className="mt-12">
                            <FloatingCard enableHover={false} className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
                                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                                    Engineering Philosophy
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    I believe in writing clean, maintainable code that scales. Every
                                    line should serve a purpose, every component should be
                                    reusable, and every system should be built with the end user in
                                    mind. My goal is to create technology that not only works
                                    flawlessly but also provides genuine value to people's lives.
                                </p>
                            </FloatingCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
