import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/wincheeta", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/harry-winchester-bb855a245/", icon: Linkedin },
  // { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:winchesterh@gmail.com", icon: Mail },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-12 dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright & Brand */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link 
              href="/" 
              className="text-lg font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
            >
              harrywinchester<span className="text-primary">.com</span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              © {currentYear} Harry Winchester. Built with Next.js & Framer Motion.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-zinc-600 transition-all hover:bg-zinc-100 hover:text-primary dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-primary"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar (Optional) */}
        <div className="mt-8 border-t border-zinc-100 pt-8 text-center dark:border-white/5">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Available for new opportunities in 2026.
          </p>
        </div>
      </div>
    </footer>
  );
};
