/**
 * Project/Case Study type definition
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    challenge: string;
    solution: string;
    techStack: string[];
    github?: string;
    liveUrl?: string;
    metrics?: {
        label: string;
        value: string;
    }[];
    image?: string;
}

/**
 * Lab experiment type
 */
export interface LabExperiment {
    id: string;
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
}

/**
 * Skill category type
 */
export interface SkillCategory {
    category: string;
    skills: string[];
}

/**
 * Achievement type
 */
export interface Achievement {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description?: string;
    link?: string;
}

/**
 * Social link type
 */
export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

/**
 * Contact form data
 */
export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}
