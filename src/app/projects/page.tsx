"use client"

import Link from "next/link"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"

import { useRouter } from "next/navigation"

const projects = [
  {
    title: "BioMLStudio",
    description: "AI-based no-code bioinformatics platform for protein & DNA sequence analysis. Built with React, MongoDB, Python APIs.",
    github: "https://github.com/yourusername/biomlstudio",
    demo: "https://biomlstudio.example.com",
  },
  {
    title: "SkillShare Hub",
    description: "Peer-to-peer skill learning platform using Supabase Auth and Next.js. Clean UI and session bookings.",
    github: "https://github.com/yourusername/skillshare-hub",
    demo: "https://skillshare-hub.example.com",
  },
  {
    title: "Coinly",
    description: "Crypto dashboard and portfolio manager using MERN and CoinGecko API. Real-time price updates with graphs.",
    github: "https://github.com/yourusername/coinly",
    demo: "https://coinly.example.com",
  },
  {
    title: "Polymarket Clone",
    description: "Prediction market built on Solana, enabling users to bet on events with on-chain transactions.",
    github: "https://github.com/yourusername/polymarket-clone",
    demo: "https://polymarket-clone.example.com",
  },
]

export default function ProjectsPage() {
    const router = useRouter()
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
         {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Go back
      </button>
      <h1 className="text-4xl font-serif text-center mb-8">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl bg-muted/20 border backdrop-blur-md p-6 shadow-md transition hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4">{project.description}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                <Github className="h-4 w-4" /> Code
              </Link>
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 