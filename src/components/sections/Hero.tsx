"use client"

import Link from "next/link"
import { FileText, Briefcase, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Briefcase,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: FileText,
  },
]

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          A full-stack developer passionate about building modern web applications
          and creating exceptional user experiences.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button variant="outline" className="gap-2">
              <link.icon className="h-4 w-4" />
              {link.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
} 