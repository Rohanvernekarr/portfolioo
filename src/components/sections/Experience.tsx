import {
  Briefcase, Calendar,
 
} from "lucide-react";
import { motion } from "framer-motion";


const experiences = [
  {
    id: 1,
    title: "Property Booking Application",
    company: "Freelance Project",
    period: "Aug 2025",
    description: "Developing a full-stack Multi booking platform with real-time availability checking multiple roles and secure payment integration. Built with Next.js, TypeScript, and Postgresql for seamless user experience.",
    technologies: ["Next.js", "TypeScript", "Express", "PostgreSql", "Razorpay", "Tailwind CSS"],
    type: "Freelance"
  },
];


export function Experience() {
    return (
       <div className="space-y-3">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative  rounded-xl p-2 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-muted px-3 py-1 rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                      {exp.type}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
    );
}