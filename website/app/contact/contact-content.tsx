"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 transition-colors duration-500">
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
              Let&apos;s <span className="text-primary">Connect.</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Have a high-impact project in mind or looking for a senior engineer to join your team? 
              I&apos;m currently open to new opportunities for 2026.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-zinc-200 dark:bg-white/5 dark:border-white/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Email</p>
                <a href="mailto:alex@example.com" className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">
                  alex@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm border border-zinc-200 dark:bg-white/5 dark:border-white/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Location</p>
                <p className="text-zinc-600 dark:text-zinc-400">San Francisco, CA (Remote Friendly)</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 dark:border-white/10 flex gap-4">
            <a href="#" className="p-3 rounded-xl bg-white border border-zinc-200 dark:bg-white/5 dark:border-white/10 hover:border-primary transition-all">
              <Linkedin className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white border border-zinc-200 dark:bg-white/5 dark:border-white/10 hover:border-primary transition-all">
              <Github className="h-6 w-6 text-zinc-600 dark:text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-3xl border border-zinc-200 bg-white/50 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50"
        >
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-accent/20 p-4">
                <Send className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Message Sent!</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <Button 
                variant="ghost"
                onClick={() => setSubmitted(false)}
                className="mt-4"
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Name</label>
                  <Input
                    {...register("name")}
                    placeholder="John Doe"
                    className={cn(errors.name && "border-red-500 focus:ring-red-500")}
                  />
                  {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Email</label>
                  <Input
                    {...register("email")}
                    placeholder="john@example.com"
                    className={cn(errors.email && "border-red-500 focus:ring-red-500")}
                  />
                  {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Subject</label>
                <Input
                  {...register("subject")}
                  placeholder="Project Inquiry"
                  className={cn(errors.subject && "border-red-500 focus:ring-red-500")}
                />
                {errors.subject && <p className="text-xs text-red-500 font-medium">{errors.subject.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Message</label>
                <Textarea
                  {...register("message")}
                  placeholder="Tell me about your project..."
                  className={cn(errors.message && "border-red-500 focus:ring-red-500")}
                />
                {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
              </div>
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </motion.div>
      </main>
    </div>
  );
}
