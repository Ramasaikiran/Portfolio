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
    cgpa: "8.35",
    graduation: "2026",
    resumeUrl: "/resume.pdf",
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
        id: "Idea Audit",
        title: "Idea Audit",
        description: "Idea Audit is a simple tool to evaluate and validate ideas using structured scoring criteria. It helps founders, developers, and creators make better decisions before investing time and resources.",
        Features :
 "Structured idea evaluation
 "Scoring system for decision making
 "Customizable criteria
 "Quick and repeatable analysis
 "Useful for startups, projects, and product ideas
    
 "Use Cases :Startup idea validation
"Product feature prioritization
"Hackathon project selection
"Business strategy evaluationing APIs.
"Implemented a scoring algorithm that weighs multiple signals to produce a credibility score with explanations.",
        techStack: [
            "Python",
            "ClaudeAPI",
            "React",
            "SQL",
        ],
       github: "https://github.com/Ramasaikiran/Idea-audit",
        liveUrl: "https://idea-audit.vercel.app/",
        metrics: [
            { label: "Accuracy", value: "87%" },
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
            "SQL",
        ],
        github: "https://github.com/Ramasaikiran/AI-Powered-Misinformation-Detection-platform",
        metrics: [
            { label: "Accuracy", value: "87%" },
        ],
    },
    {
        id: "collaborative-workspace",
        title: "Collaborative Workspace",
        description: "Real-time collaboration platform for distributed teams",
        challenge:
            "Building a seamless real-time collaboration platform where distributed teams can work together on projects, share resources, and communicate effectively without latency issues or data conflicts.",
        solution:
            "Developed a collaborative workspace using WebSocket for real-time synchronization, implemented operational transformation for conflict-free editing, and created an intuitive UI for project management. Added features like role-based access control, activity tracking, and integrated file sharing.",
        techStack: [
            "React",
            "Node.js",
            "SQL",
        ],
        github: "https://github.com/Ramasaikiran/Collaborative-Workspace-",
        liveUrl: "https://collaborative-workspace-8ruz.vercel.app/",
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
        skills: ["Java", "Python"],
    },
    {
        category: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "ResponsiveUI"],
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express", "FastAPI", "API Design"],
    },
    {
        category: "DataBase",
        skills: ["SQL", "MongoDB"],
    },
    {
        category: "AI & ML",
        skills: [
            "Generative AI",
            "LangChain",
            "Langgraph",
            "promptEngineering",
        ],
    },
    {
        category: "Tools & Platforms",
        skills: [
            "Git",
            "Firebase",
            "Cursor",
        ],
    },
    {
        category: "Core CS",
        skills: [
            "Data Structures & Algorithms",
            "System Design Fundamentals",
            "OOPs",
        ],
    },
];

/**
 * Achievements and Certifications
 */
export const ACHIEVEMENTS: Achievement[] = [
    {
        id: "buildathon",
        title: "OpenAI Buildathon Finalist",
        issuer: "OpenAI & NxtWave",
        date: "2025",
        description: "OpenAI Buildathon State Finalist",
    },
    {
        id: "google-hackathon",
        title: "Google Gen AI Hackathon",
        issuer: "Google",
        date: "2025",
        description: "Google Gen AI Hackathon SemiFinalist(National Level)",
    },
    {
        id: "Newsletter",
        title: "Author of AI With RSK",
        issuer: "Linkedin",
        date: "2025",
        description: "Author of AI With RSK Linkedin Newsletter(500+ followers)",
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
