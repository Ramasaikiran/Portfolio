"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import FloatingCard from "@/components/ui/FloatingCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";
import { Project } from "@/types";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Lock body scroll when modal is open
    if (typeof window !== "undefined") {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }

    return (
        <section id="projects" className="relative z-10 overflow-hidden bg-white px-4 py-24">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        className="mb-12 text-lg text-gray-600"
                    >
                        Case studies showcasing problem-solving approach and technical depth
                    </motion.p>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {PROJECTS.map((project, index) => (
                            <FloatingCard
                                key={project.id}
                                delay={index * 0.1}
                                className="cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-gray-600">{project.description}</p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 4).map((tech) => (
                                        <Badge key={tech}>{tech}</Badge>
                                    ))}
                                    {project.techStack.length > 4 && (
                                        <Badge>{`+${project.techStack.length - 4}`}</Badge>
                                    )}
                                </div>

                                {project.metrics && (
                                    <div className="grid grid-cols-2 gap-3 border-t border-purple-200 pt-4">
                                        {project.metrics.slice(0, 2).map((metric) => (
                                            <div key={metric.label}>
                                                <p className="text-sm text-gray-500">{metric.label}</p>
                                                <p className="text-lg font-semibold text-purple-600">
                                                    {metric.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-4 text-sm font-medium text-purple-600">
                                    View Case Study →
                                </div>
                            </FloatingCard>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-4 z-[60] overflow-y-auto rounded-2xl border border-purple-200 bg-white/95 p-6 backdrop-blur-md sm:inset-8 lg:inset-16"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 text-gray-500 transition-colors hover:text-gray-900"
                                aria-label="Close modal"
                            >
                                <X size={24} />
                            </button>

                            <div className="mx-auto max-w-3xl">
                                <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                                    {selectedProject.title}
                                </h2>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {selectedProject.techStack.map((tech) => (
                                        <Badge key={tech}>{tech}</Badge>
                                    ))}
                                </div>

                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold text-purple-600">
                                            Overview
                                        </h3>
                                        <p className="leading-relaxed">{selectedProject.description}</p>
                                    </div>

                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold text-purple-600">
                                            Technical Challenge
                                        </h3>
                                        <p className="leading-relaxed">{selectedProject.challenge}</p>
                                    </div>

                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold text-purple-600">
                                            Solution Architecture
                                        </h3>
                                        <p className="leading-relaxed">{selectedProject.solution}</p>
                                    </div>

                                    {selectedProject.metrics && (
                                        <div>
                                            <h3 className="mb-3 text-xl font-semibold text-purple-600">
                                                Impact & Results
                                            </h3>
                                            <div className="grid gap-4 sm:grid-cols-3">
                                                {selectedProject.metrics.map((metric) => (
                                                    <div
                                                        key={metric.label}
                                                        className="rounded-lg border border-purple-200 bg-purple-50 p-4"
                                                    >
                                                        <p className="text-sm text-gray-600">{metric.label}</p>
                                                        <p className="text-2xl font-bold text-purple-600">
                                                            {metric.value}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    {selectedProject.github && (
                                        <Button
                                            variant="primary"
                                            onClick={() => window.open(selectedProject.github, "_blank")}
                                        >
                                            <Github size={20} className="mr-2" />
                                            View Code
                                        </Button>
                                    )}
                                    {selectedProject.liveUrl && (
                                        <Button
                                            variant="secondary"
                                            onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                                        >
                                            <ExternalLink size={20} className="mr-2" />
                                            Live Demo
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
