import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.bio,
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Machine Learning",
    "MAANG",
    "Software Engineer",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: "https://ramasaikiran.github.io/portfolio/" }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramasaikiran.com",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.bio,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.bio,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7c3aed" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to Content Link for Accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        {children}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: PERSONAL_INFO.name,
              jobTitle: PERSONAL_INFO.title,
              url: "https://ramasaikiran.com",
              email: PERSONAL_INFO.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: PERSONAL_INFO.location,
              },
              sameAs: [
                "https://github.com/Ramasaikiran",
                "https://www.linkedin.com/in/ramasaikiranmedam/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
