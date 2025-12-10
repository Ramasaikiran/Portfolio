"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FloatingCard from "@/components/ui/FloatingCard";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Github, Linkedin, Mail } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
    const [formStatus, setFormStatus] = useState<FormStatus>("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setFormStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus("success");
                reset();
                setTimeout(() => setFormStatus("idle"), 5000);
            } else {
                setFormStatus("error");
                setTimeout(() => setFormStatus("idle"), 5000);
            }
        } catch (error) {
            setFormStatus("error");
            setTimeout(() => setFormStatus("idle"), 5000);
        }
    };

    const iconMap = {
        github: Github,
        linkedin: Linkedin,
        mail: Mail,
    };

    return (
        <section id="contact" className="relative z-10 px-4 py-24">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="mb-4 text-center text-4xl font-bold text-gray-900 sm:text-5xl"
                    >
                        Let's Connect
                    </motion.h2>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Contact Form */}
                        <motion.div variants={fadeInUp}>
                            <FloatingCard enableHover={false}>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <Input
                                        id="name"
                                        label="Name"
                                        placeholder="Your name"
                                        error={errors.name?.message}
                                        {...register("name")}
                                    />

                                    <Input
                                        id="email"
                                        type="email"
                                        label="Email"
                                        placeholder="your.email@example.com"
                                        error={errors.email?.message}
                                        {...register("email")}
                                    />

                                    <Textarea
                                        id="message"
                                        label="Message"
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        error={errors.message?.message}
                                        {...register("message")}
                                    />

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="w-full"
                                        disabled={formStatus === "submitting"}
                                    >
                                        {formStatus === "submitting" ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                <Send size={20} className="mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>

                                    {/* Status Messages */}
                                    {formStatus === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 rounded-lg bg-green-50 border border-green-200 p-4 text-green-700"
                                        >
                                            <CheckCircle size={20} />
                                            <p>Message sent successfully! I'll get back to you soon.</p>
                                        </motion.div>
                                    )}

                                    {formStatus === "error" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700"
                                        >
                                            <XCircle size={20} />
                                            <p>Failed to send message. Please try again or email directly.</p>
                                        </motion.div>
                                    )}
                                </form>
                            </FloatingCard>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <FloatingCard enableHover={false}>
                                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a
                                            href={`mailto:${PERSONAL_INFO.email}`}
                                            className="text-lg text-purple-600 hover:text-purple-700"
                                        >
                                            {PERSONAL_INFO.email}
                                        </a>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="text-lg text-gray-900">{PERSONAL_INFO.location}</p>
                                    </div>
                                </div>
                            </FloatingCard>

                            <FloatingCard enableHover={false}>
                                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                                    Social Links
                                </h3>
                                <div className="space-y-3">
                                    {SOCIAL_LINKS.map((link) => {
                                        const Icon = iconMap[link.icon as keyof typeof iconMap];
                                        return (
                                            <a
                                                key={link.name}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 text-gray-600 transition-colors hover:text-purple-600"
                                            >
                                                <Icon size={20} />
                                                <span>{link.name}</span>
                                            </a>
                                        );
                                    })}
                                </div>
                            </FloatingCard>


                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
