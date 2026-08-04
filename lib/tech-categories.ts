/**
 * Maps individual tech-stack items to a display category so project
 * tech stacks can be grouped consistently across the site.
 */

export type TechCategory = "Frontend" | "Backend" | "Database" | "Core CS";

const CATEGORY_MAP: Record<string, TechCategory> = {
    // Frontend
    React: "Frontend",
    TypeScript: "Frontend",
    JavaScript: "Frontend",
    HTML: "Frontend",
    CSS: "Frontend",
    Tailwind: "Frontend",

    // Backend
    "Node.js": "Backend",
    "Spring Boot": "Backend",
    Java: "Backend",
    Python: "Backend",
    ClaudeAPI: "Backend",
    "REST APIs": "Backend",
    Express: "Backend",
    FastAPI: "Backend",

    // Database
    SQL: "Database",
    Supabase: "Database",
    MongoDB: "Database",
    MySQL: "Database",

    // Core CS (algorithms, architecture, and other foundational concepts
    // that show up as part of a tech stack)
    "System Design": "Core CS",
    "Data Structures & Algorithms": "Core CS",
    "Microservices Architecture": "Core CS",
};

const CATEGORY_ORDER: TechCategory[] = ["Frontend", "Backend", "Database", "Core CS"];

/**
 * Groups a flat tech-stack array into ordered category buckets.
 * Anything not in the map falls into "Backend" as the safest default
 * for a build/runtime dependency.
 */
export function groupTechStack(techStack: string[]): { category: TechCategory; items: string[] }[] {
    const buckets: Record<TechCategory, string[]> = {
        Frontend: [],
        Backend: [],
        Database: [],
        "Core CS": [],
    };

    for (const tech of techStack) {
        const category = CATEGORY_MAP[tech] ?? "Backend";
        buckets[category].push(tech);
    }

    return CATEGORY_ORDER
        .map((category) => ({ category, items: buckets[category] }))
        .filter((group) => group.items.length > 0);
}
