"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, ArrowLeft, LoaderCircle, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

const projects = [
   {
    title: "SystemDesign.ai",
    description: "A freehand tool where you can create your system design with AI.Use it to draw diagrams.",
    github: "https://github.com/Rohanvernekarr/sketchai",
    demo: "https://sketchai-xi.vercel.app/",
    status: "deployed",
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
   {
    title: "NeonVerse",
    description: "3D cosmic experience using React Three Fiber, Drei, and GSAP. A storytelling journey through the stars.",
    github: "https://github.com/Rohanvernekarr/NeonVerse",
    demo: "",
    status: "in-progress",
    image: "/projects/space.png",
    techStack: ["React Three Fiber", "GSAP", "WebGL"],
  },
   {
    title: "StrangerLoop",
    description: "Connect with random strangers, End-to-end Encrypted. Built with Next.js + WebRTC.",
    github: "https://github.com/Rohanvernekarr/StrangerLoop",
    demo: "https://stranger-loop.vercel.app/",
    status: "deployed",
    image: "/projects/loop.png",
    techStack: ["Next.js", "TypeScript", "WebRTC", "Tailwind CSS"],
  },
    {
    title: "Githive",
    description: "GitHub-powered project hub to manage, tag, and search repos easily. Built with Next.js + GitHub API.",
    github: "https://github.com/Rohanvernekarr/githive",
    demo: "https://githive.vercel.app/",
    status: "deployed",
    image: "/projects/githuve.png",
    techStack: ["Next.js", "TypeScript", "GitHub API", "Tailwind CSS"],
  },
  {
    title: "ContestTracker",
    description: "Track competitive programming contests from Codeforces, LeetCode, AtCoder and more. Alerts and calendar integration.",
    github: "https://github.com/Rohanvernekarr/contesttracker",
    demo: "https://contesttracker-ruby.vercel.app/",
    status: "deployed",
    image: "/projects/contest.png",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
  },
 
  {
    title: "FusionChat",
    description: "Real-time chat app built using Socket.io and MongoDB with custom avatars and group support.",
    github: "https://github.com/Rohanvernekarr/FusionChat",
    demo: "https://fusion-chat-plum.vercel.app/",
    status: "deployed",
    image: "/projects/rog.jpg",
    techStack: ["React", "Socket.io", "MongoDB", "Express"],
  },
  {
    title: "NewsReader",
    description: "Minimalist Hacker News reader built for focus and speed. Keyboard-first UX with search and filters.",
    github: "https://github.com/Rohanvernekarr/hackernewsreader",
    demo: "https://hackernewsreader.vercel.app/",
    status: "deployed",
    image: "/projects/news.png",
    techStack: ["Next.js", "Hacker News API", "TypeScript"],
  },
  {
    title: "CollegeAdmissionPortal",
    description: "An Application with three different roles for colleges to admit students to their courses. Fully vibe coded.",
    github: "https://github.com/Rohanvernekarr/collegeadmission",
    demo: "",
    status: "deployed",
    image: "/projects/rog1.jpg",
    techStack: ["Django", "React", "Bootstrap", "PostgreSQL"],
  },
  {
    title: "BioMLStudio",
    description: "AI-based no-code bioinformatics platform for protein & DNA sequence analysis.",
    github: "https://github.com/Rohanvernekarr/biomlstudio",
    demo: "",
    status: "in-progress",
    image: "/projects/rog2.jpg",
    techStack: ["React", "Python", "MongoDB", "ML"],
  },
  {
    title: "Coinly",
    description: "Crypto dashboard and portfolio tracker using MERN stack and CoinGecko API. Graphs and real-time price updates.",
    github: "https://github.com/Rohanvernekarr/coinlycrypto",
    demo: "",
    status: "in-progress",
    image: "/projects/crypto.png",
    techStack: ["MongoDB", "Express", "React", "Node.js", "CoinGecko API"],
  },
  {
    title: "Vibeoo",
    description: "Vibeoo is an AI-powered extension that summarizes videos and generates smart timestamps for faster, focused viewing.",
    github: "https://github.com/Rohanvernekarr/vibeoo",
    demo: "",
    status: "in-progress",
    image: "/projects/rog4.png",
    techStack: ["Chrome Extension", "AI", "JavaScript"],
  },
  {
    title: "TruthLens",
    description: "Fake news detection extension using AI and fact-check APIs. Built with Python and Flask.",
    github: "https://github.com/Rohanvernekarr/truthlens",
    demo: "",
    status: "in-progress",
    image: "/projects/cat.png",
    techStack: ["Python", "Flask", "AI", "Chrome Extension"],
  },
 
]

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-8 sm:space-y-12">
     
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Go back
      </button>

      <h1 className="text-xl sm:text-2xl font-serif text-center mb-8 sm:mb-12">🚀 Projects Showcase</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative group rounded-xl bg-muted/10 border border-muted  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            {/* Project Image */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Status Badge */}
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
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                {project.title}
              </h2>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
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
    </div>
  )
}
