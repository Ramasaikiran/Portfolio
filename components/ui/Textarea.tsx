"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, error, label, id, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={id}
                        className="mb-2 block text-sm font-medium text-gray-700"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    id={id}
                    ref={ref}
                    className={cn(
                        "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400",
                        "focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50",
                        "transition-all duration-200 resize-none",
                        error && "border-red-500 focus:border-red-500 focus:ring-red-500/50",
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-600" role="alert">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export default Textarea;
