"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Full-Stack Applications with Next.js",
    excerpt: "Learn how to architect and build production-ready full-stack applications using Next.js, TypeScript, and modern best practices.",
    date: "November 14, 2025",
    readTime: "8 min read",
    slug: "building-scalable-fullstack-apps-nextjs",
    tags: ["Next.js", "TypeScript", "Full-Stack"],
  },
  {
    id: 2,
    title: "AI Integration in Modern Web Development",
    excerpt: "Exploring how to integrate AI capabilities into your web applications, from OpenAI APIs to custom ML models.",
    date: "November 7, 2025",
    readTime: "10 min read",
    slug: "ai-integration-web-development",
    tags: ["AI", "Web Development", "API"],
  },
  {
    id: 3,
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Deep dive into React optimization techniques including memoization, lazy loading, and efficient state management.",
    date: "November 2, 2025",
    readTime: "6 min read",
    slug: "optimizing-react-performance",
    tags: ["React", "Performance", "Optimization"],
  },
];

export function BlogPosts() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif text-center">📝 Latest Blog Posts</h2>
      
      <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-left hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed text-left">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="gap-1 text-xs" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="text-sm text-muted-foreground">
          More posts coming soon! Follow my journey in full-stack development and AI.
        </p>
      </div>
    </div>
  );
}
