"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { blogPosts } from "../static/Blog";

export function BlogPosts() {
  return (
    <div className="divide-y divide-border">
      {blogPosts.slice(0, 3).map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="flex gap-4 px-1 py-5 rounded-lg transition-colors hover:bg-muted/40 group"
          >
            {/* Avatar */}
            <div className="shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-border">
                <Image
                  src="/projects/rog.jpg"
                  alt="Rohan Vernekar"
                  width={36}
                  height={36}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm font-semibold whitespace-nowrap">Rohan Vernekar</span>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">@Rohanvrnkr</span>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">{post.date}</span>
              </div>

              <h3 className="text-base font-semibold leading-snug text-foreground group-hover:underline decoration-muted-foreground/40 underline-offset-2">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      #{tag.toLowerCase().replace(/\s+/g, "")}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}

      <motion.div
        className="flex justify-center pt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="/blog">
          <Button variant="outline" className="gap-2 w-full sm:w-auto">
            View all {blogPosts.length} posts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
