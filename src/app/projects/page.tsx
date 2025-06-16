"use client"

import Link from "next/link"
import { Github, ExternalLink, ArrowLeft, LoaderCircle, CheckCircle2 } from "lucide-react"
import { useRouter } from "next/navigation"

const projects = [
  {
    title: "Githive",
    description: "GitHub-powered project hub to manage, tag, and search repos easily. Built with Next.js + GitHub API.",
    github: "https://github.com/yourusername/githive",
    demo: "https://biomlstudio.example.com",
    status: "deployed",
  },
  {
    title: "ContestTracker",
    description: "Track competitive programming contests from Codeforces, LeetCode, AtCoder and more. Alerts and calendar integration.",
    github: "https://github.com/yourusername/contesttracker",
    demo: "https://biomlstudio.example.com",
    status: "deployed",
  },
  {
    title: "FusionChat",
    description: "Real-time chat app built using Socket.io and MongoDB with custom avatars and group support.",
    github: "https://github.com/yourusername/fusionchat",
    demo: "https://biomlstudio.example.com",
    status: "deployed",
  },
  {
    title: "NewsReader",
    description: "Minimalist Hacker News reader built for focus and speed. Keyboard-first UX with search and filters.",
    github: "https://github.com/yourusername/hackernewsreader.vi",
    demo: "https://biomlstudio.example.com",
    status: "deployed",
  },
  {
    title: "BioMLStudio",
    description: "AI-based no-code bioinformatics platform for protein & DNA sequence analysis. React + Python + MongoDB.",
    github: "https://github.com/yourusername/biomlstudio",
    demo: "",
    status: "in-progress",
  },
  {
    title: "Coinly",
    description: "Crypto dashboard and portfolio tracker using MERN stack and CoinGecko API. Graphs and real-time price updates.",
    github: "https://github.com/yourusername/coinly",
    demo: "",
    status: "in-progress",
  },
 
  {
    title: "Vibeoo",
    description: "A curated link-saving app for organizing bookmarks, articles, and tools. Built with Next.js and Supabase.",
    github: "https://github.com/yourusername/beoo",
    demo: "",
    status: "in-progress",
  },
  {
    title: "TruthLens",
    description: "Fake news detection tool using AI and fact-check APIs. Built with Python and Flask.",
    github: "https://github.com/yourusername/truthlens",
    demo: "",
    status: "in-progress",
  },
  {
    title: "Neoneverse",
    description: "3D cosmic experience using React Three Fiber, Drei, and GSAP. A storytelling journey through the stars.",
    github: "https://github.com/yourusername/neoneverse",
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

      <h1 className="text-4xl font-serif text-center mb-12">🚀 Projects Showcase</h1>

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
