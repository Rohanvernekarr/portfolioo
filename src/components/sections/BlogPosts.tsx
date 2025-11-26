"use client";

import Link from "next/link";
import { Calendar, Clock, ArrowRight, User, Heart, MessageCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Full-Stack Applications with Next.js",
    excerpt: "Learn how to architect and build production-ready full-stack applications using Next.js, TypeScript, and modern best practices.",
    date: "Nov 14 2025",
    readTime: "8 min",
    slug: "building-scalable-fullstack-apps-nextjs",
    tags: ["Next.js", "TypeScript", "Full-Stack"],
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    title: "AI Integration in Modern Web Development",
    excerpt: "Exploring how to integrate AI capabilities into your web applications, from OpenAI APIs to custom ML models.",
    date: "Nov 7 2025",
    readTime: "10 min",
    slug: "ai-integration-web-development",
    tags: ["AI", "Web Development", "API"],
    likes: 42,
    comments: 12,
  },
  {
    id: 3,
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Deep dive into React optimization techniques including memoization, lazy loading, and efficient state management.",
    date: "Nov 2 2025",
    readTime: "6 min",
    slug: "optimizing-react-performance",
    tags: ["React", "Performance", "Optimization"],
    likes: 31,
    comments: 8,
  },
];

export function BlogPosts() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleBookmark = (postId: number) => {
    setBookmarkedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-3">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-xl hover:bg-muted/5 hover:border-primary/30 transition-all"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="p-1">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm">Rohan Vernekar</span>
                      <span className="text-muted-foreground text-sm">@Rohanvrnkr</span>
                      <span className="text-muted-foreground text-xs">{post.date}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  
                </div>
                
              </div>

              {/* Content */}
              <div className="space-y-2 mb-3 ml-13">
                <h3 className="text-base font-semibold leading-snug hover:underline">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      #{tag.toLowerCase().replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>

        
        </motion.article>
      ))}

      <motion.div 
                    className="text-center pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link href="/blog">
                      <Button variant="outline" className="gap-2 transition-colors w-full sm:w-auto">
                        View All posts
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
    </div>
  );
}
