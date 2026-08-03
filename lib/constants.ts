import { Project, SkillCategory, Achievement, SocialLink } from "@/types";

/**
 * Personal Information
 */
export const PERSONAL_INFO = {
    name: "Rama Sai Kiran Medam",
    title: "Full-Stack Engineer | AI Product Builder",
    tagline: "Shipping production AI apps that solve real problems",
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
        id: "idea-audit",
        title: "Idea Audit",
        description: "A structured idea validation tool for founders, developers, and creators to evaluate ideas using scoring criteria before investing time and resources.",
        challenge:
            "Founders and developers often invest time in ideas without structured evaluation. The challenge was to build a simple, repeatable scoring system that works across startups, products, and hackathon projects.",
        solution:
            "Built a scoring engine with customizable criteria that evaluates ideas across multiple dimensions. Integrated Claude API for AI-assisted feedback and structured the output to give clear, actionable validation results.",
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
        description: "Full-stack credibility analysis system for detecting fake text and media.",
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
        description: "Real-time collaboration platform for distributed teams.",
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
    {
        id: "safe-her",
        title: "Safe Her",
        description: "Women's travel safety platform with AI-powered SOS assistant.",
        challenge:
            "Women travellers in India lack a reliable, real-time safety net that connects them to verified guides and emergency response without friction.",
        solution:
            "Built a dual-role platform for travellers and guides with a RAG-powered AI safety assistant, OTP-based auth, SOS push notifications, and Aadhaar e-KYC scaffolding for guide verification.",
        techStack: [
            "React",
            "TypeScript",
            "Supabase",
            "Tailwind",
        ],
        github: "https://github.com/Ramasaikiran/Safe-Her",
        liveUrl: "https://safe-her-pi.vercel.app/",
        metrics: [
            { label: "Roles", value: "2 (Traveller/Guide)" },
        ],
    },
    {
        id: "nyaya-ai",
        title: "NyayaAI",
        description: "Role-based legal AI platform for petition drafting and lawyer KYC.",
        challenge:
            "Legal petition drafting is slow and inaccessible, and platforms connecting users to verified lawyers need strict role-based control.",
        solution:
            "Built a role-based access control system for lawyers, users, and admins, with AI-assisted petition drafting and a lawyer KYC pipeline.",
        techStack: [
            "React",
            "Node.js",
            "Spring Boot",
        ],
        github: "https://github.com/Ramasaikiran/NyayaAI",
        liveUrl: "https://nyaya-ai-s38w-k87qjg2qd-kirans-projects-9ede22f9.vercel.app/",
        metrics: [
            { label: "Roles", value: "3 (Lawyer/User/Admin)" },
        ],
    },
];

/**
 * Skills grouped by category
 */
export const SKILLS: SkillCategory[] = [
    {
        category: "Languages",
        skills: ["Java"],
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
        id: "google-genai-exchange",
        title: "Google GenAI Exchange Hackathon",
        issuer: "Google",
        date: "2025",
        description: "Participant, Google GenAI Exchange Hackathon",
    },
    {
        id: "openai-buildathon",
        title: "OpenAI Buildathon Runner-up",
        issuer: "OpenAI & NxtWave",
        date: "2025",
        description: "Runner-up, OpenAI Buildathon",
    },
    {
        id: "java-fullstack-cert",
        title: "Java Full-Stack Certification",
        issuer: "Wipro TalentNext",
        date: "2025",
        description: "Java Full-Stack Certification, Wipro TalentNext",
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
