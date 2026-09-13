"use client";

import { useState } from "react";
import { Briefcase, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const typeColors: Record<string, string> = {
  "Full Time":  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  "Internship": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  "Freelance":  "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
};

const experiences = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Justwalkinrooms",
    period: "May 2026 – Present",
    description: "Working on a full-stack hospitality booking platform for hotel discovery, destination pages, supplier inventory management, bookings, payments, user dashboards, and AI-assisted travel experiences. Refactoring large frontend modules into scalable feature-based architecture, improving responsive UI with Tailwind CSS, optimizing API usage, and integrating backend services for supplier operations, availability, OTA sync, authentication, and booking workflows.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma", "TanStack Query", "Axios", "Google Maps API", "Razorpay"],
    type: "Full Time",
  },
  {
    id: 2,
    title: "Agentic AI Intern",
    company: "Innomatics Research Labs",
    period: "Feb 2026 – May 2026",
    description: "Working on building autonomous AI systems that can plan, reason, and take actions across tools and workflows. Focus is on designing agent-based architectures, integrating LLMs with real-world applications, and developing intelligent pipelines for tasks like automation, data analysis, and decision support. Turning complex problems into practical AI-driven solutions.",
    technologies: ["Python", "FastAPI", "AWS", "LangChain", "OpenAI", "LangGraph"],
    type: "Internship",
  },
  {
    id: 3,
    title: "Freelance Full‑Stack Engineer",
    company: "Independent / Freelance",
    period: "Aug 2025 – Present",
    description: "Available for freelance contracts. I build production-ready full‑stack applications with real‑time features, role-based access, and secure payment integration. Recently delivered a multi‑booking platform with real‑time availability checks, multi‑role scheduling, and Razorpay payment processing.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Razorpay", "Tailwind CSS", "Redis", "Prisma"],
    type: "Freelance",
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      key={exp.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="py-5 space-y-3"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="mt-0.5 shrink-0 w-9 h-9 rounded-md bg-muted flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-semibold leading-snug">{exp.title}</h3>
              <span className={`px-2 py-0.5 text-xs font-medium rounded-md ${typeColors[exp.type]}`}>
                {exp.type}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0 mt-1">
          {exp.period}
        </span>
      </div>

      {/* Description with expand */}
      <div className="pl-12">
        <AnimatePresence initial={false}>
          <p className={`text-sm text-muted-foreground leading-relaxed ${!expanded ? "line-clamp-3" : ""}`}>
            {exp.description}
          </p>
        </AnimatePresence>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1.5 flex items-center gap-1 text-xs text-foreground/60 hover:text-foreground transition-colors"
        >
          {expanded ? (
            <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
          ) : (
            <><ChevronDown className="w-3.5 h-3.5" /> Show more</>
          )}
        </button>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 pl-12">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <div className="divide-y divide-border">
      {experiences.map((exp, index) => (
        <ExperienceCard key={exp.id} exp={exp} index={index} />
      ))}
      <motion.div
        className="pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="/about">
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            See all experience
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
