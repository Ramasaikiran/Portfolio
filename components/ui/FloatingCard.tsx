"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    enableHover?: boolean;
    onClick?: () => void;
}

export default function FloatingCard({
    children,
    className,
    delay = 0,
    enableHover = true,
    onClick,
}: FloatingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
            whileHover={enableHover ? { y: -8, scale: 1.02 } : undefined}
            onClick={onClick}
            className={cn(
                "group relative rounded-2xl border border-purple-200 bg-white/70 p-6 backdrop-blur-md",
                "shadow-[0_8px_32px_rgba(124,58,237,0.08)] transition-all duration-300",
                "hover:border-purple-300 hover:shadow-[0_8px_32px_rgba(124,58,237,0.15)]",
                className
            )}
        >
            {/* Gradient glow on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

            {children}
        </motion.div>
    );
}
