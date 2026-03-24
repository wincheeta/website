"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[25%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] dark:bg-primary/10" />
        <div className="absolute -bottom-[25%] -right-[10%] h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px] dark:bg-accent/10" />
      </div>

      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-4 py-1.5 text-sm font-medium backdrop-blur-md dark:border-white/10 dark:bg-white/5"
        >
          {/* <Sparkles className="h-4 w-4 text-accent" /> */}
          <span className="text-zinc-600 dark:text-zinc-400">Available for 2026 roles</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-black tracking-tight text-black dark:text-white sm:text-6xl md:text-7xl"
        >
          Engineering the Future of <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Web Experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-lg leading-8 text-zinc-800 dark:text-zinc-200 sm:text-xl"
        >
          Senior Full-Stack Engineer & Creative Developer. I build high-performance, 
          accessible, and visually stunning applications that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#work"
            className={cn(
              "group flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/contact"
            className={cn(
              "flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-8 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
