import { z } from "zod";

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
