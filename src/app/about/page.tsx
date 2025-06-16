"use client"

import { Sparkles, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const router = useRouter()

  const techStack = [
    {
      title: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Redux"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "Firebase", "REST", "GraphQL"],
    },
    {
      title: "DevOps & Tools",
      items: ["Git & GitHub", "Docker", "AWS", "CI/CD", "Upstash", "Railway", "Postman"],
    },
  ]

  const featuredProjects = [
    {
      title: "BioMLStudio",
      description: "AI-based no-code bioinformatics platform for protein & DNA sequence analysis. Built with React, MongoDB, Python APIs.",
    },
    {
      title: "SkillShare Hub",
      description: "Peer-to-peer skill learning platform using Supabase Auth and Next.js. Clean UI and session bookings.",
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
     

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Go back
      </button>

       {/* Banner Image */}
      <div className="relative w-full h-60 md:h-72 lg:h-80 rounded-xl overflow-hidden mb-4">
        <Image
          src="/about-banner.jpg"
          alt="About Rohan Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <h1 className="text-4xl font-serif tracking-tight text-foreground text-center px-4">
            <span className="text-primary">Crafting Code</span>, Shaping Tomorrow’s Web ✨
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-serif tracking-tight text-foreground">
          <span className="text-primary">Rohan Vernekar</span> 
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A <span className="text-primary font-medium">Full-Stack Developer</span> based in{" "}
          <span className="font-medium">Bengaluru</span> who crafts fast, responsive, and intelligent web apps.
          I build <span className="font-medium">AI tools</span> and love making the web more beautiful.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">⚒️ Tech Stack</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((stack) => (
            <div
              key={stack.title}
              className="rounded-xl bg-muted/20 border backdrop-blur-md p-6 shadow-md transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{stack.title}</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">🚀 Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl bg-muted/20 border backdrop-blur-md p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" /> {project.title}
              </h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Link to All Projects */}
        <div className="text-center">
          <Link href="/projects">
            <button className="text-sm font-medium text-primary hover:underline mt-4">
              View All Projects →
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
