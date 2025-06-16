"use client";

import { Moon, Sun, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VisitorCount } from "@/components/sections/VisitorCount";
import { TimeSpent } from "@/components/sections/TimeSpent";
import { MusicPlayer } from "@/components/sections/MusicPlayer";
import {  ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Rohanvernekarr",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rohan-vernekar-b57913283/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/Rohanvrnkr",
    icon: Twitter,
  },
];

export function Footer() {
  const { setTheme } = useTheme();

  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-4xl py-8 flex flex-col items-center">
        {/* Responsive Controls and Stats */}
        <div className="flex flex-row md:flex-row items-center justify-center gap-y-4 gap-x-6 mb-6 flex-wrap">
          <div className="flex flex-row sm:flex-row gap-4 items-center justify-center">
            <VisitorCount />
            <TimeSpent />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <MusicPlayer />
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme("light")}
                className="h-8 w-8"
              >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light mode</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme("dark")}
                className="h-8 w-8"
              >
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark mode</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <footer className="text-center text-sm text-muted-foreground py-6">
          <p>Made from scratch with 🍵 & 💻 in Hostel</p>
          <p className="mt-1">No rights reserved. Steal like an artist.</p>
           {/* Old Portfolio Link */}
      
        <a
          href="https://rohanrv.me" // replace with your real old portfolio URL
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition"
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          Visit old portfolio
        </a>
        </footer>
      </div>
      
      
    </footer>
  );
}
