"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
    children: string;
    className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border border-purple-300 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700",
                "transition-colors duration-200 hover:bg-purple-100",
                className
            )}
        >
            {children}
        </span>
    );
}
