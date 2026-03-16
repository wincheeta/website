"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Cpu, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string; // The "Hook"
  challenge: string; // Key Challenge to reveal on hover
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  slug,
  description,
  challenge,
  tech,
  githubUrl,
  liveUrl,
  imageUrl,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300",
        "dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md",
        "hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-white/5",
        className
      )}
    >
      <div className="flex flex-col h-full gap-4">
        {/* Project Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <Link href={`/projects/${slug}`} className="group/link inline-flex items-center gap-1">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 group-hover/link:text-primary transition-colors">
                {title}
              </h3>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
            </Link>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 italic">
              {description}
            </p>
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Project Image Placeholder / Image */}
        <Link href={`/projects/${slug}`}>
          {imageUrl ? (
            <div className="relative aspect-video overflow-hidden rounded-lg border border-zinc-200 dark:border-white/10">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 dark:border-white/20 dark:bg-white/5">
              <Cpu className="h-10 w-10 text-zinc-300 dark:text-white/20" />
            </div>
          )}
        </Link>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-white/10 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover-to-reveal Challenge Section */}
        <div className="relative mt-auto pt-4 border-t border-zinc-100 dark:border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-500" />
            Key Challenge
          </div>
          
          <div className="relative mt-2 min-h-[40px]">
            {/* Base Hint */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 transition-opacity duration-300 group-hover:opacity-0">
              Hover to reveal the technical hurdles overcome...
            </p>

            {/* Revealed Challenge Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto"
            >
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                {challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
