"use client"

import Link from "next/link"
import { Github, ExternalLink, ArrowLeft, LoaderCircle, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

const projects = [
  {
    title: "Githive",
    description: "GitHub-powered project hub to manage, tag, and search repos easily. Built with Next.js + GitHub API.",
    github: "https://github.com/Rohanvernekarr/githive",
    demo: "https://githive.vercel.app/",
    status: "deployed",
  },
  {
    title: "SmartCV",
    description: "Full-stack AI web platform that helps users to create, customize, and optimize professional resumes. With built-in templates, live editing and AI-driven resume analysis.Nextjs+Tailwindcss+Supabase.",
    github: "https://github.com/Rohanvernekarr/smartcv",
    demo: "https://smartcv-eta.vercel.app/",
    status: "deployed",
  },
  {
    title: "ContestTracker",
    description: "Track competitive programming contests from Codeforces, LeetCode, AtCoder and more. Alerts and calendar integration.Pure MERN stack.",
    github: "https://github.com/Rohanvernekarr/contesttracker",
    demo: "https://contesttracker-ruby.vercel.app/",
    status: "deployed",
  },
  {
    title: "SystemDesign.ai",
    description: " A freehand tool where you can create your system design with AI.Nextjs",
    github: "https://github.com/Rohanvernekarr/sketchai",
    demo: "",
    status: "in-progress",
  },
  {
    title: "FusionChat",
    description: "Real-time chat app built using Socket.io and MongoDB with custom avatars and group support.React+Web-sockets",
    github: "https://github.com/Rohanvernekarr/FusionChat",
    demo: "https://fusion-chat-plum.vercel.app/",
    status: "deployed",
  },
  {
    title: "NewsReader",
    description: "Minimalist Hacker News reader built for focus and speed. Keyboard-first UX with search and filters.Nextjs",
    github: "https://github.com/Rohanvernekarr/hackernewsreader",
    demo: "https://hackernewsreader.vercel.app/",
    status: "deployed",
  },
  {
    title: "CollegeAdmissionPortal",
    description: "An Application with three different roles for colleges to admit students to their courses.Fully vibe coded. Django+React+Bootstrap  ",
    github: "https://github.com/Rohanvernekarr/collegeadmission",
    demo: "",
    status: "deployed",
  },
  {
    title: "BioMLStudio",
    description: "AI-based no-code bioinformatics platform for protein & DNA sequence analysis. React + Python + MongoDB.",
    github: "https://github.com/Rohanvernekarr/biomlstudio",
    demo: "",
    status: "in-progress",
  },
  {
    title: "Coinly",
    description: "Crypto dashboard and portfolio tracker using MERN stack and CoinGecko API. Graphs and real-time price updates.",
    github: "https://github.com/Rohanvernekarr/coinlycrypto",
    demo: "",
    status: "in-progress",
  },
 
  {
    title: "Vibeoo",
    description: "Vibeoo is an AI-powered extension that summarizes videos and generates smart timestamps for faster, focused viewing.",
    github: "https://github.com/Rohanvernekarr/vibeoo",
    demo: "",
    status: "in-progress",
  },
  {
    title: "TruthLens",
    description: "Fake news detection extension using AI and fact-check APIs. Built with Python and Flask.",
    github: "https://github.com/Rohanvernekarr/truthlens",
    demo: "",
    status: "in-progress",
  },
  {
    title: "NeonVerse",
    description: "3D cosmic experience using React Three Fiber, Drei, and GSAP. A storytelling journey through the stars.",
    github: "https://github.com/Rohanvernekarr/NeonVerse",
    demo: "",
    status: "in-progress",
  },
]

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Go back
      </button>

      <h1 className="text-2xl font-serif text-center mb-12">🚀 Projects Showcase</h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative group rounded-xl bg-muted/10 border border-muted backdrop-blur-md p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2 flex items-center justify-between">
                {project.title}
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full ${
                    project.status === "deployed"
                      ? " text-green-700"
                      : " text-yellow-800"
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
              </h2>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
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
    </div>
  )
}
