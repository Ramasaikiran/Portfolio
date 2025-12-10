"use client";

import dynamic from "next/dynamic";
import GlassNavbar from "@/components/layout/GlassNavbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

// Lazy load 3D background for better performance
import Skills from "@/components/sections/Skills";

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
                <img
                  src="/profile.jpg"
                  alt="Rama Sai Kiran Medam"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl">
              Rama Sai Kiran Medam
            </h1>
            <p className="mb-6 text-xl text-purple-600 sm:text-2xl">
              AI & Software Engineer , Full Stack Developer
            </p>
            <h2 className="mb-8 text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
              Building scalable systems & intuitive interfaces
            </h2>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

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
