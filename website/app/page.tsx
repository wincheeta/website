import { Metadata } from "next";
import { HeroSection } from "@/components/features/home/HeroSection";
import { ProjectGallery } from "@/components/features/portfolio/ProjectGallery";

export const metadata: Metadata = {
  title: "Harry Winchester",
  description: "Specializing in high-performance web applications, Neural Engines, and real-time analytics. Explore my 2026 portfolio.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      
      <HeroSection />

      <main className="max-w-5xl mx-auto px-6 py-24 space-y-16">
        <ProjectGallery />
      </main>
    </div>
  );
}
