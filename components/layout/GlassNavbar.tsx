"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";

export default function GlassNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = NAV_LINKS.map((link) => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        const id = href.substring(1);
        scrollToElement(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? "border-b border-purple-200 bg-white/80 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        onClick={() => scrollToElement("about")}
                        className="text-xl font-bold text-gray-900"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        RSK
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 md:flex">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`relative text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
                                    ? "text-gray-900"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                                {activeSection === link.href.substring(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500"
                                    />
                                )}
                            </button>
                        ))}
                        <a
                            href={PERSONAL_INFO.resumeUrl}
                            download
                            className="rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                        >
                            Download Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-900 md:hidden"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-purple-200 bg-white/95 backdrop-blur-md md:hidden"
                >
                    <div className="space-y-1 px-4 py-4">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
                                    ? "bg-purple-100 text-purple-700"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <a
                            href={PERSONAL_INFO.resumeUrl}
                            download
                            className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-purple-600 hover:bg-purple-50"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
