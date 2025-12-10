import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedData = contactFormSchema.parse(body);

        // In production, you would send an email here using a service like:
        // - Resend (resend.com)
        // - SendGrid
        // - Amazon SES
        // - Nodemailer with SMTP

        // For now, we'll just log it and return success
        console.log("Contact form submission:", validatedData);

        // Simulate email sending delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // TODO: Replace this with actual email sending logic
        // Example with Resend:
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'portfolio@yourdomain.com',
        //   to: 'ramasaikiranm@gmail.com',
        //   subject: `Portfolio Contact: ${validatedData.name}`,
        //   html: `
        //     <p><strong>From:</strong> ${validatedData.name}</p>
        //     <p><strong>Email:</strong> ${validatedData.email}</p>
        //     <p><strong>Message:</strong></p>
        //     <p>${validatedData.message}</p>
        //   `,
        // });

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
