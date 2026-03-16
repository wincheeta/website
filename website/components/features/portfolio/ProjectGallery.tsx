"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export const ProjectGallery = () => {
  return (
    <section id="work" className="space-y-12 scroll-mt-24">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-center sm:text-left"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Featured Projects
        </h2>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A selection of technical challenges and architectural feats I&apos;ve tackled recently.
        </p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={project.featured ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"}
          >
            <ProjectCard {...project} className="h-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
