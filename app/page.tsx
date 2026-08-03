"use client";

import GlassNavbar from "@/components/layout/GlassNavbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import Image from "next/image";
import { Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/lib/constants";
import { scrollToElement } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <GlassNavbar />

      {/* Main Content */}
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Hero Section - Inline */}
        <section
          id="about"
          className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-16"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-48 sm:w-48">
                <Image
                  src="/profile.jpg"
                  alt="Rama Sai Kiran Medam"
                  fill
                  priority
                  sizes="(min-width: 640px) 192px, 160px"
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
              {PERSONAL_INFO.name}
            </h1>
            <p className="mb-6 text-xl text-purple-600 sm:text-2xl">
              {PERSONAL_INFO.title}
            </p>
            <h2 className="mb-8 text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
              {PERSONAL_INFO.tagline}
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              {PERSONAL_INFO.bio}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToElement("projects")}
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToElement("contact")}
              >
                Get In Touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = PERSONAL_INFO.resumeUrl;
                  link.download = "Rama_Sai_Kiran_Medam_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download size={20} className="mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Achievements Section */}
        <Achievements />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
