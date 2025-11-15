"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Briefcase,
  User,
  Sparkles,
  Github,
  ExternalLink,
  LoaderCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { EmailButton } from "./EmailButton";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const links = [
  { name: "About", icon: User, section: "about" as const },
  { name: "Projects", icon: Briefcase, section: "projects" as const },
  { name: "Blog", icon: Sparkles, section: "blog" as const },
];

const projects = [
  {
    title: "Githive",
    description:
      "GitHub-powered project hub to manage, tag, and search repos easily. Built with Next.js + GitHub API.",
    github: "https://github.com/Rohanvernekarr/githive",
    demo: "https://githive.vercel.app/",
    status: "deployed",
  },
  {
    title: "SmartCV",
    description:
      "Full-stack AI web platform that helps users to create, customize, and optimize professional resumes.",
    github: "https://github.com/Rohanvernekarr/smartcv",
    demo: "https://smartcv-eta.vercel.app/",
    status: "deployed",
  },
  {
    title: "ContestTracker",
    description:
      "Track competitive programming contests from Codeforces, LeetCode, AtCoder and more.",
    github: "https://github.com/Rohanvernekarr/contesttracker",
    demo: "https://contesttracker-ruby.vercel.app/",
    status: "deployed",
  },
  {
    title: "FusionChat",
    description:
      "Real-time chat app built using Socket.io and MongoDB with custom avatars and group support.",
    github: "https://github.com/Rohanvernekarr/FusionChat",
    demo: "https://fusion-chat-plum.vercel.app/",
    status: "deployed",
  },
];

const techStack = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Redux",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "REST",
      "GraphQL",
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      "Git & GitHub",
      "Docker",
      "AWS",
      "CI/CD",
      "Upstash",
      "Railway",
      "Postman",
    ],
  },
];

export function Hero() {
  const [activeSection, setActiveSection] = useState<
    "about" | "projects" | "blog" | null
  >(null);

  const toggleSection = (section: "about" | "projects" | "blog") => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="flex flex-col items-center text-center px-4 relative">
      {/* Fixed Hero Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] space-y-10 w-full">
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
          {links.map((link) => (
            <Button
              key={link.section}
              variant={activeSection === link.section ? "default" : "outline"}
              className="gap-2 transition-all hover:shadow-lg hover:scale-105"
              onClick={() => toggleSection(link.section)}
            >
              <link.icon className="h-4 w-4" />
              {link.name}
            </Button>
          ))}

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 transition-all hover:shadow-lg hover:scale-105"
              >
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>View Resume</DialogTitle>
                <DialogDescription>
                  Are you sure you want to open my resume? This will redirect you to Google Drive.
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-3 mt-6">
            
                <Button
                  className="flex-1"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1WL0zuMnuF8aa1TM-D2QH8elR46BPmMzl/view?usp=drive_link",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  Open Resume
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-6xl mx-auto pb-16 px-4"
          >
            {activeSection === "about" && (
              <div className="space-y-8">
                <div className="relative w-full h-20 rounded-xl overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-3xl font-serif tracking-tight text-black dark:text-white text-center px-4">
                      Crafting Code, Shaping Tomorrow&apos;s Web ✨
                    </h2>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
                  I&apos;m a{" "}
                  <span className="text-primary font-medium">
                    Full-Stack Developer
                  </span>{" "}
                  based in <span className="font-medium">Bengaluru</span>,
                  currently pursuing my Bachelor&apos;s in Information Science.
                  I build fast, responsive, and intelligent web applications
                  using modern tech stacks and{" "}
                  <span className="font-medium">AI tools</span>.
                  <br />
                  <br />
                  Since <span className="font-medium">August 2025</span>,
                  I&apos;ve been working as a{" "}
                  <span className="text-primary font-medium">
                    freelance developer
                  </span>
                  , collaborating with clients to bring their ideas to life
                  through custom web solutions, API integrations, and full-stack
                  applications.
                  <br />
                  <br />
                  Beyond the screen, I&apos;m passionate about sports -
                  especially <span className="font-medium">football</span>,{" "}
                  <span className="font-medium">cricket</span>, and{" "}
                  <span className="font-medium">volleyball</span>.
                </p>

                <div className="space-y-6">
                  <h3 className="text-2xl font-serif text-center mb-8">
                    ⚒️ Tech Stack
                  </h3>
                  <div className="max-w-4xl mx-auto space-y-4">
                    {techStack.map((stack) => (
                      <div
                        key={stack.title}
                        className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6"
                      >
                        <h4 className="text-sm font-semibold mb-4 text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                          {stack.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {stack.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 text-sm rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "projects" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif text-center">
                  🚀 Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="relative group rounded-xl bg-muted/10 border border-muted backdrop-blur-md p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div>
                        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between gap-2">
                          <span>{project.title}</span>
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full ${
                              project.status === "deployed"
                                ? "text-green-700"
                                : "text-yellow-800"
                            }`}
                          >
                            {project.status === "deployed" ? (
                              <>
                                <CheckCircle2 className="w-3 h-3" /> Deployed
                              </>
                            ) : (
                              <>
                                <LoaderCircle className="w-3 h-3 animate-spin" />{" "}
                                In Progress
                              </>
                            )}
                          </span>
                        </h3>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex gap-4 mt-2">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition"
                        >
                          <Github className="h-4 w-4" /> Code
                        </Link>
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition"
                          >
                            <ExternalLink className="h-4 w-4" /> Demo
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Link href="/projects">
                    <Button variant="link" className="text-primary">
                      View All Projects →
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {activeSection === "blog" && (
              <div className="space-y-6 text-center">
                <h2 className="text-2xl font-serif">📝 Blog Posts</h2>
                <p className="text-muted-foreground">
                  Coming soon! Stay tuned for articles on web development, AI,
                  and tech insights.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <div className="rounded-xl bg-muted/20 border backdrop-blur-md p-6 max-w-sm">
                    <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Blog Coming Soon</h3>
                    <p className="text-sm text-muted-foreground">
                      I&apos;ll be sharing insights on full-stack development,
                      AI integration, and my coding journey.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
