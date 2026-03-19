import { Metadata } from "next";
import { HeroSection } from "@/components/features/home/HeroSection";
import { ProjectGallery } from "@/components/features/portfolio/ProjectGallery";

export const metadata: Metadata = {
  title: "Harry Winchester",
  description: "Specializing in high-performance web applications, Neural Engines, and real-time analytics. Explore my 2026 portfolio.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen transition-colors duration-500">
      <HeroSection />

      <main className="max-w-5xl mx-auto px-6 py-24 space-y-16">
        <ProjectGallery />
      </main>
    </div>
  );
}
