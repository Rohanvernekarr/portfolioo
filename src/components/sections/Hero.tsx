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


const links = [
  { name: "About", icon: User, section: "about" as const },
  { name: "Projects", icon: Briefcase, section: "projects" as const },
  { name: "Blog", icon: Sparkles, section: "blog" as const },
];

const projects = [
  {
    title: "SystemDesign.ai",
    description: "A freehand tool where you can create your system design with AI.Use it to draw diagrams.",
    github: "https://github.com/Rohanvernekarr/sketchai",
    demo: "https://sketchai-xi.vercel.app/",
    status: "in-progress",
    image: "/projects/sketch.png",
    techStack: ["Next.js", "AI", "Canvas API", "PostgreSql"],
  },
 
  {
    title: "SmartCV",
    description: "Full-stack AI web platform that helps users to create, customize, and optimize professional resumes. With built-in templates, live editing and AI-driven resume analysis.",
    github: "https://github.com/Rohanvernekarr/smartcv",
    demo: "https://smartcv-eta.vercel.app/",
    status: "deployed",
    image: "/projects/smart.png",
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "AI"],
  },
];

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

export function Hero() {
  const [activeSection, setActiveSection] = useState<
    "about" | "projects" | "blog" | null
  >(null);

  const toggleSection = (section: "about" | "projects" | "blog") => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="flex flex-col items-center text-center px-4 mt-50 relative">
     
      {/* <AnimatedInsect /> */}
      
      <div className="flex flex-col items-center justify-center space-y-6 w-full">
        <EmailButton />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl mt-25 font-extrabold tracking-tight bg-gradient-to-r from-primary to-zinc-500 bg-clip-text text-transparent leading-[1.2]"
        >
          Code that speaks Imagination
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
      </div>

      <div className="sticky top-0 z-100 w-full flex justify-center  py-10 sm:py-10 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-1 justify-center"
        >
          {links.map((link) => (
            <Button
              key={link.section}
              variant={activeSection === link.section ? "default" : "outline"}
              className="gap-1 sm:gap-2 text-xs sm:text-sm transition-all hover:shadow-lg hover:scale-105 px-3 sm:px-4"
              onClick={() => toggleSection(link.section)}
            >
              <link.icon className="h-3 w-3 sm:h-4 sm:w-4" />
              {link.name}
            </Button>
          ))}

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="gap-1 sm:gap-2 text-xs sm:text-sm transition-all hover:shadow-lg hover:scale-105 px-3 sm:px-4"
              >
                <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md z-100">
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
            className="w-full max-w-6xl mx-auto pb-16 px-4 mt-10"
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
                  <h3 className="text-3xl font-serif text-center mb-10 bg-zinc-950 dark:bg-zic-100 bg-clip-text text-transparent">
                    Tech Stack
                  </h3>
                  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {techStack.map((stack) => {
                      const IconComponent = stack.icon;
                      return (
                        <div
                          key={stack.title}
                          className="group relative rounded-2xl border border-muted/50 bg-gradient-to-br from-background via-background to-muted/20 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                          
                          <div className="relative flex items-center gap-3 mb-5">
                            <div className={`p-2.5 rounded-lg  shadow-lg`}>
                              <IconComponent className="h-5 w-5 text-black dark:text-zinc-100" />
                            </div>
                            <h4 className="text-lg font-bold text-foreground">
                              {stack.title}
                            </h4>
                          </div>
                          
                          {/* Tech items */}
                          <div className="relative flex flex-wrap gap-2">
                            {stack.items.map((item) => {
                              const ItemIcon = item.icon;
                              return (
                                <span
                                  key={item.name}
                                  className="group/item inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-muted/50 hover:bg-muted transition-all duration-200 hover:scale-105 cursor-default border border-transparent hover:border-primary/20"
                                >
                                  <ItemIcon className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-200 group-hover/item:text-primary transition-colors" />
                                  <span>{item.name}</span>
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeSection === "projects" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif text-center">
                  🚀 Featured Projects
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                       {projects.map((project) => (
                         <div
                           key={project.title}
                           className="relative group rounded-xl bg-muted/10 border border-muted  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                         >
                           <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-muted">
                             <Image
                               src={project.image}
                               alt={project.title}
                               fill
                               className="object-cover group-hover:scale-105 transition-transform duration-300"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                             
                             <span
                               className={`absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full font-medium ${
                                 project.status === "deployed"
                                   ? " text-green-700 border border-green-500/30"
                                   : " text-yellow-700 border border-yellow-500/30"
                               }`}
                             >
                               {project.status === "deployed" ? (
                                 <>
                                   <CheckCircle2 className="w-3 h-3" /> Deployed
                                 </>
                               ) : (
                                 <>
                                   <LoaderCircle className="w-3 h-3 animate-spin" /> In Progress
                                 </>
                               )}
                             </span>
                           </div>
               
                           {/* Content */}
                           <div className="p-5 sm:p-6 flex flex-col flex-grow">
                             <h2 className="text-xl text-left sm:text-2xl font-semibold mb-2">
                               {project.title}
                             </h2>
                             
                             <p className="text-muted-foreground text-left mb-4 text-sm leading-relaxed flex-grow">
                               {project.description}
                             </p>
               
                             {/* Tech Stack */}
                             <div className="flex flex-wrap gap-2 mb-4">
                               {project.techStack.map((tech) => (
                                 <span
                                   key={tech}
                                   className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20 font-medium"
                                 >
                                   {tech}
                                 </span>
                               ))}
                             </div>
               
                             {/* Links */}
                             <div className="flex gap-4 pt-2 border-t border-muted">
                               <Link
                                 href={project.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition"
                               >
                                 <Github className="h-4 w-4" /> Code
                               </Link>
                               {project.demo && (
                                 <Link
                                   href={project.demo}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition"
                                 >
                                   <ExternalLink className="h-4 w-4" /> Live Demo
                                 </Link>
                               )}
                             </div>
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

            {activeSection === "blog" && <BlogPosts />}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
