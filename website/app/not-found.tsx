"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MoveLeft, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-50 px-6 dark:bg-zinc-950 transition-colors duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <main className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01]
          }}
          className="relative inline-block"
        >
          <span className="text-[12rem] font-black leading-none tracking-tighter text-zinc-200 dark:text-zinc-900 selection:bg-primary/30">
            404
          </span>
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-zinc-200 bg-white/50 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <Terminal className="h-12 w-12 text-primary" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 space-y-4"
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Endpoint Not Found.
          </h1>
          <p className="mx-auto max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            Looks like you&apos;ve requested a route that doesn&apos;t exist in the current deployment. 
            The server returned a 404 status.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className={cn(
              "group flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-bold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            <Home className="h-4 w-4" />
            Back to Safety
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className={cn(
              "flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-8 text-sm font-bold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            )}
          >
            <MoveLeft className="h-4 w-4" />
            Go Back
          </button>
        </motion.div>
      </main>

      {/* Footer Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 text-xs font-mono text-zinc-400 dark:text-zinc-600"
      >
        [ERROR_CODE: ROUTE_NOT_RESOLVED]
      </motion.div>
    </div>
  );
}
