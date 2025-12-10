import { Variants } from "framer-motion";

/**
 * Fade in from bottom with customizable delay
 */
export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

/**
 * Fade in from left
 */
export const fadeInLeft: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
};

/**
 * Fade in from right
 */
export const fadeInRight: Variants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
};

/**
 * Scale fade in
 */
export const scaleFadeIn: Variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

/**
 * Stagger children with faster timing
 */
export const staggerContainerFast: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

/**
 * Floating animation (continuous loop)
 */
export const floatAnimation: Variants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

/**
 * Glow pulse animation
 */
export const glowPulse: Variants = {
    animate: {
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

/**
 * Hover lift effect
 */
export const hoverLift = {
    rest: { y: 0, scale: 1 },
    hover: {
        y: -8,
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
};

/**
 * Smooth spring transition preset
 */
export const smoothSpring = {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
};

/**
 * Default ease transition
 */
export const easeTransition = {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
};
