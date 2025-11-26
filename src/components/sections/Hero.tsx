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
  Code2,
  Layers,
  Database,
  Server,
  Cloud,
  Box,
  Palette,
  Zap,
  GitBranch,
  Container,
  Wrench,
  MapPin,
  Calendar,
  Link2,
  Star,
  Award,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { EmailButton } from "./EmailButton";
import { BlogPosts } from "./BlogPosts";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import Projects  from "./Projects";


const techStack = [
  {
    title: "Frontend",
    icon: Palette,
    items: [
      { name: "Next.js", icon: Code2 },
      { name: "React", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Framer Motion", icon: Zap },
      { name: "Vite", icon: Zap },
      { name: "Redux", icon: Layers },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma", icon: Database },
      { name: "Firebase", icon: Cloud },
      { name: "REST", icon: Layers },
      { name: "GraphQL", icon: Layers },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    items: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "AWS", icon: Cloud },
      { name: "CI/CD", icon: GitBranch },
      { name: "Upstash", icon: Database },
      { name: "Railway", icon: Cloud },
      { name: "Postman", icon: Box },
    ],
  },
];

const experiences = [
  {
    id: 1,
    title: "Property Booking Website",
    company: "Freelance Project",
    period: "Aug 2024",
    description: "Developing a full-stack property booking platform with real-time availability checking and secure payment integration. Built with Next.js, TypeScript, and MongoDB for seamless user experience.",
    technologies: ["Next.js", "TypeScript", "Express", "PostgreSql", "Razorpay", "Tailwind CSS"],
    type: "Freelance"
  },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<"posts" | "projects" | "about" | "experience">("posts");

  return (
    <section className="flex flex-col items-center relative w-full max-w-4xl mx-auto">
      <EmailButton />
      
      <div className="w-full mt-0 sm:mt-8">
        {/* Cover Image */}
        <motion.div 
          className="w-full h-34 sm:h-48 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 sm:rounded-t-xl relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/projects/rog3.jpg"
            alt="Cover"
            fill
            className="object-cover object-center sm:object-cover"
            priority
            sizes="(max-width: 640px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
        </motion.div>
        
        <div className="relative px-4 sm:px-6 pb-4 sm:border-x sm:border-b border-muted sm:rounded-b-xl">
          <motion.div 
            className="absolute -top-12 sm:-top-16 left-4 sm:left-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-background hover:scale-105 transition-transform cursor-pointer shadow-lg overflow-hidden relative bg-muted">
              <Image
                src="/projects/rog.jpg"
                alt="Rohan Vernekar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <div className="flex justify-end items-center gap-1 pt-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://github.com/Rohanvernekarr", "_blank", "noopener,noreferrer")}
            >
              <Github className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://linkedin.com/in/rohan-vernekar", "_blank", "noopener,noreferrer")}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-9 w-9 hover:bg-primary/10 hover:text-primary"
              onClick={() => window.open("https://x.com/Rohanvrnkr", "_blank", "noopener,noreferrer")}
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1" />
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 text-sm rounded-full px-6 h-9"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>View Resume</DialogTitle>
                  <DialogDescription>
                    This will redirect you to Google Drive to view my resume.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-3 mt-6">
                  <Button
                    className="flex-1"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/18twTvQCue_jpJPytl6fmwww9bdt1kBz4/view?usp=drive_link",
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
          </div>
          
          {/* Name and Bio */}
          <motion.div 
            className="mt-4 sm:mt-4 space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <h1 className="text-2xl sm:text-xl font-bold tracking-tight">Rohan Vernekar</h1>
              <p className="text-muted-foreground text-sm">@Rohanvrnkr</p>
            </div>
            
            <p className=" leading-relaxed text-sm text-foreground/90">
              <span className="font-semibold text-sm text-foreground">Full-Stack Developer</span> crafting innovative experiences 🚀
              <br />
              Building with Next.js, React, TypeScript & AI • Passionate about clean code & user experience
            </p>
            
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <MapPin className="h-3.5 w-3.5" />
                Bengaluru, India
              </span>
              <span className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Briefcase className="h-3.5 w-3.5" />
                Freelance Developer
              </span>
              <span className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Calendar className="h-3.5 w-3.5" />
                Building since 2024
              </span>
            </div>
            
            {/* Stats */}
            <div className="flex gap-4 pt-2 text-sm">
              <div>
                <span className="font-bold text-foreground">13</span>
                <span className="text-muted-foreground ml-1">Projects</span>
              </div>
              <div>
                <span className="font-bold text-foreground">{techStack.reduce((acc, curr) => acc + curr.items.length, 0)}</span>
                <span className="text-muted-foreground ml-1">Skills</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex border-b border-muted mt-2">
          <button
            onClick={() => setActiveTab("posts")}
            className={`flex-1 px-4 py-3 text-sm font-semibold transition-all relative hover:bg-muted/50 ${
              activeTab === "posts"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {/* <Sparkles className="h-4 w-4" /> */}
              Posts
            </span>
            {activeTab === "posts" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>

             <button
            onClick={() => setActiveTab("experience")}
            className={`flex-1 px-4 py-4 text-sm font-semibold transition-all relative hover:bg-muted/50 ${
              activeTab === "experience"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {/* <Award className="h-4 w-4" /> */}
              Experience
            </span>
            {activeTab === "experience" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex-1 px-4 py-4 text-sm font-semibold transition-all relative hover:bg-muted/50 ${
              activeTab === "projects"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {/* <Briefcase className="h-4 w-4" /> */}
              Projects
            </span>
            {activeTab === "projects" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab("about")}
            className={`flex-1 px-4 py-4 text-sm font-semibold transition-all relative hover:bg-muted/50 ${
              activeTab === "about"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {/* <Code2 className="h-4 w-4" /> */}
              Tech
            </span>
            {activeTab === "about" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full mt-6 pb-16 px-4 sm:px-0"
        >
          {/* Posts Tab */}
          {activeTab === "posts" && (
            <div className="space-y-4">
              <BlogPosts />
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <Projects/>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted px-3 py-1 rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      {exp.type}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === "about" && (
            <div className="space-y-4">
              {techStack.map((stack, index) => {
                const IconComponent = stack.icon;
                return (
                  <motion.div
                    key={stack.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-muted rounded-xl p-5 hover:border-primary/30 hover:bg-muted/5 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-sans tracking-tight">{stack.title}</h3>
                      <span className="ml-auto text-sm text-muted-foreground">{stack.items.length} skills</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.span
                            key={item.name}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-muted/50 hover:bg-muted hover:border-primary/20 transition-all border border-transparent cursor-default"
                          >
                            <ItemIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium text-xs">{item.name}</span>
                          </motion.span>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
