"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
    const iconMap = {
        github: Github,
        linkedin: Linkedin,
        mail: Mail,
    };

    return (
        <footer className="relative z-10 border-t border-purple-200 bg-white/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
                    </p>

                    <div className="flex items-center space-x-6">
                        {SOCIAL_LINKS.map((link) => {
                            const Icon = iconMap[link.icon as keyof typeof iconMap];
                            return (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 transition-colors hover:text-gray-900"
                                    aria-label={link.name}
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
}

