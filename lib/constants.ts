import { Project, SkillCategory, Achievement, SocialLink, LabExperiment } from "@/types";

/**
 * Personal Information
 */
export const PERSONAL_INFO = {
    name: "Rama Sai Kiran Medam",
    title: "AI Generalist & Full-Stack Engineer",
    tagline: "Building scalable systems & intuitive interfaces",
    bio: "I'm a driven Computer Science student passionate about AI, scalable systems, and clean code. Currently pursuing my degree at ACE Engineering College with a focus on building production-ready applications that solve real-world problems. My goal is to join a MAANG company where I can contribute to impactful engineering while continuously learning from the best.",
    email: "ramasaikiranm@gmail.com",
    location: "Hyderabad, India",
    college: "ACE Engineering College",
    cgpa: "8.34",
    graduation: "2026",
    resumeUrl: "/_SDE Intern.pdf",
} as const;

/**
 * Social Links
 */
export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/Ramasaikiran",
        icon: "github",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ramasaikiranmedam/",
        icon: "linkedin",
    },
    {
        name: "Email",
        url: "mailto:ramasaikiranm@gmail.com",
        icon: "mail",
    },
];

/**
 * Navigation Links
 */
export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
] as const;

/**
 * Projects / Case Studies
 */
export const PROJECTS: Project[] = [
    {
        id: "ai-translator",
        title: "AI-Powered Speech and Document Translator",
        description: "Multilingual translation system with document upload and speech recognition",
        challenge:
            "Supporting multilingual workflows for users who need to translate documents (PDF, DOCX) and convert speech to text across 20+ languages. The system needed to handle various file formats, maintain formatting integrity, and provide real-time speech translation with high accuracy.",
        solution:
            "Built a robust translation API pipeline with Google Cloud Translation API for text for document parsing, for speech-to-text conversion. Implemented intelligent chunking for large documents, parallel processing for faster translation, and comprehensive error handling for edge cases.",
        techStack: [
            "Node.js",
            "Express",
            "Google Cloud Translation",
            "React",
            "TailwindCSS",
        ],
        github: "https://github.com/Ramasaikiran/AI-POWERED-SPEECH-AND-DOCUMENT-TRANSLATOR",
        metrics: [
            { label: "Languages", value: "20+" },
            { label: "File Formats", value: "PDF, DOCX, TXT" },
        ],
    },
    {
        id: "misinformation-detection",
        title: "AI-Powered Tool For Misinformation",
        description: "Full-stack credibility analysis system for detecting fake text and media",
        challenge:
            "Combating the spread of fake news across multiple content formats (text, images, videos) while providing real-time verification results. The challenge was to build a system that could analyze content credibility with high accuracy while maintaining fast response times for user queries.",
        solution:
            "Developed a full-stack AI pipeline that integrates multiple verification layers: NLP-based text classification using fine-tuned transformers, reverse image search for media verification, and integration with third-party fact-checking APIs. Implemented a scoring algorithm that weighs multiple signals to produce a credibility score with explanations.",
        techStack: [
            "Python",
            "FastAPI",
            "React",
            "PostgreSQL",
        ],
        github: "https://github.com/Ramasaikiran/AI-Powered-Tool-For-Misinformation",
        metrics: [
            { label: "Accuracy", value: "87%" },
        ],
    },
    {
        id: "collaborative-workspace",
        title: "Collaborative Workspace for Projects",
        description: "Real-time collaboration platform for distributed teams",
        challenge:
            "Building a seamless real-time collaboration platform where distributed teams can work together on projects, share resources, and communicate effectively without latency issues or data conflicts.",
        solution:
            "Developed a collaborative workspace using WebSocket for real-time synchronization, implemented operational transformation for conflict-free editing, and created an intuitive UI for project management. Added features like role-based access control, activity tracking, and integrated file sharing.",
        techStack: [
            "React",
            "Node.js",
            "MongoDB",
        ],
        github: "https://github.com/Ramasaikiran/Collaborative_Workspace_for_Project",
        metrics: [
            { label: "Sync Latency", value: "<100ms" },
        ],
    },
];

/**
 * Skills grouped by category
 */
export const SKILLS: SkillCategory[] = [
    {
        category: "Languages",
        skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
        category: "Frameworks & Libraries",
        skills: ["React", "Node.js", "Express", "FastAPI"],
    },
    {
        category: "AI & ML",
        skills: [
            "Generative AI",
            "LangChain",
            "TensorFlow",
        ],
    },
    {
        category: "Tools & Platforms",
        skills: [
            "Git",
            "Firebase",
            "PostgreSQL",
            "MongoDB",
        ],
    },
    {
        category: "Core CS",
        skills: [
            "Data Structures & Algorithms",
            "System Design",
            "OOP",
            "REST APIs",
        ],
    },
];

/**
 * Achievements and Certifications
 */
export const ACHIEVEMENTS: Achievement[] = [
    {
        id: "buildathon",
        title: "Selected for OpenAI Buildathon",
        issuer: "OpenAI & NxtWave",
        date: "2025",
        description: "Selected for Round 2 nationwide among thousands of participants",
    },
    {
        id: "google-hackathon",
        title: "Google Gen AI Hackathon",
        issuer: "Google",
        date: "2025",
        description: "Selected for refinement phase",
    },
    {
        id: "leetcode",
        title: "LeetCode Top 13%",
        issuer: "LeetCode",
        date: "2025",
        description: "Consistent problem-solving excellence",
    },
    {
        id: "english-proficiency",
        title: "Pearson English Proficiency Level 10 (GSE)",
        issuer: "Pearson",
        date: "2025",
        description: "Advanced English proficiency certification",
    },
];

/**
 * Color Palette (Antigravity Theme)
 */
export const COLORS = {
    background: {
        start: "#0f172a", // Midnight Blue
        end: "#7c3aed", // Violet
    },
    glass: {
        background: "rgba(255, 255, 255, 0.1)",
        border: "rgba(255, 255, 255, 0.2)",
    },
    accent: {
        primary: "#7c3aed", // Violet
        secondary: "#a78bfa", // Light Purple
        glow: "#c4b5fd", // Lighter Purple for glows
    },
} as const;
