"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { scrollToElement } from "@/lib/utils";

export default function Hero() {
    return (
        <section
            id="about"
            className="relative flex min-h-screen items-center justify-center px-4 pt-16"
        >
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="mx-auto max-w-4xl text-center"
            >
                {/* Name */}
                <motion.h1
                    variants={fadeInUp}
                    className="mb-4 text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
                >
                    {PERSONAL_INFO.name}
                </motion.h1>

                {/* Title */}
                <motion.p
                    variants={fadeInUp}
                    className="mb-6 text-xl text-purple-200 sm:text-2xl"
                >
                    {PERSONAL_INFO.title}
                </motion.p>

                {/* Tagline */}
                <motion.h2
                    variants={fadeInUp}
                    className="mb-8 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                >
                    {PERSONAL_INFO.tagline}
                </motion.h2>

                {/* Bio */}
                <motion.p
                    variants={fadeInUp}
                    className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/80"
                >
                    {PERSONAL_INFO.bio}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => scrollToElement("work")}
                    >
                        View Work
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => scrollToElement("contact")}
                    >
                        Get In Touch
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = PERSONAL_INFO.resumeUrl;
                            link.download = 'Rama_Sai_Kiran_Medam_Resume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        <Download size={20} className="mr-2" />
                        Resume
                    </Button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={fadeInUp}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.button
                        onClick={() => scrollToElement("work")}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-white/60 transition-colors hover:text-white"
                        aria-label="Scroll to next section"
                    >
                        <ArrowDown size={32} />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
