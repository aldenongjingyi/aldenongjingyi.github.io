"use client";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { ScrollToTop } from "@/components/scroll-to-top";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />
      <Navbar />
      <main className="lg:ml-[256px]">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
}
