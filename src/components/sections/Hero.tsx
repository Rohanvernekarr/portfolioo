"use client";

import Link from "next/link";
import { FileText, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { EmailButton } from "./EmailButton";

const links = [
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Briefcase },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1WL0zuMnuF8aa1TM-D2QH8elR46BPmMzl/view?usp=drive_link",
    icon: FileText,
    target: "_blank",
    rel: "noopener noreferrer",
    external: true,
  },
];

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center space-y-10 px-4">
      <EmailButton />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-zinc-700 bg-clip-text text-transparent leading-[1.2]"
      >
        Code that speaks Imagination
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
      >
        I&apos;m{" "}
        <span className="text-primary font-medium">Rohan Vernekar</span>, a{" "}
        <span className="bg-muted px-2 py-1 rounded text-foreground font-semibold">
          Full-Stack Developer
        </span>{" "}
        from Bengaluru who loves to code, experiment with AI, and build the
        future one app at a time.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        {links.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target={link.target}
              rel={link.rel}
            >
              <Button
                variant="outline"
                className="gap-2 transition-all hover:shadow-lg hover:scale-105"
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Button>
            </a>
          ) : (
            <Link key={link.href} href={link.href}>
              <Button
                variant="outline"
                className="gap-2 transition-all hover:shadow-lg hover:scale-105"
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Button>
            </Link>
          ),
        )}
      </motion.div>
    </section>
  );
}
