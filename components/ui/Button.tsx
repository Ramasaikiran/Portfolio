"use client";

import { forwardRef, ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = "primary", size = "md", className, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2";

        const variants = {
            primary:
                "bg-zinc-900 text-white shadow-lg shadow-zinc-500/20 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-500/30 hover:scale-[1.02] active:scale-95",
            secondary:
                "border border-purple-300 bg-white/70 text-purple-700 backdrop-blur-md hover:border-purple-400 hover:bg-white/90",
            ghost: "text-purple-700 hover:bg-purple-100",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: variant !== "ghost" ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
