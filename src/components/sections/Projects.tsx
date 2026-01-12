import React from 'react'
import Image from 'next/image'
import { Github, ExternalLink, LoaderCircle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
];

function Projects() {
  return (
   <div className="space-y-6">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {projects.map((project) => (
                      <div
                        key={project.title}
                        className="relative group rounded-xl bg-muted/10 border border-muted  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-muted">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                          
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
            
                        <div className="p-5 sm:p-6 flex flex-col flex-grow">
                          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                            {project.title}
                          </h2>
                          
                          <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                            {project.description}
                          </p>
            
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
                  
                  <motion.div 
                    className="text-center pt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link href="/projects">
                      <Button variant="outline" className="gap-2 transition-colors w-full sm:w-auto">
                        View All Projects
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
            </div>
  )
}

export default Projects;