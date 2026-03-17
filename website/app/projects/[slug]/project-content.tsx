"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Cpu, Code2, Zap, CheckCircle2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectContent() {
  const { slug } = useParams();
  const router = useRouter();
  
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-32 pb-24 transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />

      <main className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-bold text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </motion.button>

        {/* Header */}
        <header className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="text-xl text-primary font-medium italic">
                {project.description}
              </p>
            </div>
            
            <div className="flex gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-6 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  <Github className="h-5 w-5" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center gap-2 rounded-xl bg-zinc-900 px-6 text-sm font-bold text-white transition-all hover:bg-zinc-800 dark:bg-primary dark:hover:bg-primary/80"
                >
                  <ExternalLink className="h-5 w-5" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video w-full overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-white/5 shadow-2xl"
        >
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Cpu className="h-20 w-20 text-zinc-300 dark:text-white/10" />
            </div>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
          {/* Main Case Study */}
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                The Key Challenge
              </h2>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 dark:bg-primary/10">
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-200 font-medium">
                  {project.challenge}
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Project Overview</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {project.overview}
              </p>
            </section>

            {/* Key Results */}
            <section className="space-y-6 pt-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Key Results & Impact
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 rounded-xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 font-medium">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Metadata */}
          <aside className="space-y-8">
            <section className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-bold text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                  >
                    <Code2 className="h-3 w-3" />
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-4 p-6 rounded-2xl border border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Project Metrics</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-zinc-500">Role</span>
                  <span className="font-medium dark:text-zinc-300">{project.role}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-500">Timeline</span>
                  <span className="font-medium dark:text-zinc-300">{project.timeline}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-zinc-500">Impact</span>
                  <span className="font-medium text-primary">{project.impact}</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>

        {/* Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-8 pt-12">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Project Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                    <ImageIcon className="h-12 w-12 text-zinc-400" />
                  </div>
                  {/* Placeholder for actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
