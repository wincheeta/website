"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Code2, Cpu, Globe2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const skills = [
    { name: "Frontend Architecture", icon: Globe2, description: "Next.js, React, Tailwind, Framer Motion" },
    { name: "Backend Systems", icon: Cpu, description: "Node.js, Go, Python, PostgreSQL, Redis" },
    { name: "Technical Leadership", icon: Rocket, description: "System Design, Mentorship, Agile Workflows" },
    { name: "Performance Optimization", icon: Code2, description: "Core Web Vitals, WASM, Edge Runtime" },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-24 transition-colors duration-500">
      <main className="max-w-4xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-black tracking-tight text-black dark:text-white sm:text-6xl">
              About <span className="text-primary">Me.</span>
            </h1>
            <p className="text-xl text-zinc-800 dark:text-zinc-200 leading-relaxed">
              I am a Senior Full-Stack Engineer with over 8 years of experience building scalable, 
              high-performance web applications. My focus is on the intersection of technical 
              rigor and creative user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a
              href="/resume.pdf"
              download
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
                "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              )}
            >
              <FileText className="h-4 w-4" />
              Download Resume / CV
            </a>
          </motion.div>
        </section>

        {/* Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-200 dark:border-white/10 pt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-black dark:text-white">Professional Philosophy</h2>
            <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
              I believe that software should be invisible—so fast and intuitive that it 
              simply facilitates human intent without friction. Performance is not a 
              feature; it is a foundational requirement for accessibility and user trust.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-black dark:text-white">The Technical Edge</h2>
            <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
              From low-level CUDA optimizations to high-level React architecture, I bridge 
              the gap between complex backend systems and polished frontend interfaces. 
              I specialize in making the &quot;impossible&quot; performant.
            </p>
          </motion.div>
        </section>

        {/* Core Expertise */}
        <section className="space-y-12">
          <h2 className="text-3xl font-black text-center text-black dark:text-white">Core Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 transition-all hover:border-primary/50"
              >
                <skill.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-zinc-800 dark:text-zinc-200 mt-2">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
