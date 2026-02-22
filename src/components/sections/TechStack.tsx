import { motion } from "framer-motion";
import {
  FileText,
  Briefcase,
  Github,
  Container,
   Palette, Code2, Zap, Layers, Server, Database, Cloud, GitBranch, Box,
  Globe, Cpu, Network, Braces, TerminalSquare, Boxes, Hammer,
  MapPin,
  Calendar,
  Linkedin,
  Twitter,
} from "lucide-react";

const techStack = [
  {
    title: "Frontend",
    icon: Palette,
    items: [
      { name: "Next.js", icon: Globe },               
      { name: "React", icon: Braces },                
      { name: "TypeScript", icon: Code2 },            
      { name: "Tailwind CSS", icon: Palette },        
      { name: "Framer Motion", icon: Zap },           
      { name: "Vite", icon: TerminalSquare },         
      { name: "Redux", icon: Boxes },                 
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: Server },              
      { name: "Express", icon: Network },             
      { name: "MongoDB", icon: Database },            
      { name: "PostgreSQL", icon: Database },         
      { name: "Prisma", icon: Cpu },                  
      { name: "Firebase", icon: Cloud },              
      { name: "REST", icon: Layers },                 
      { name: "GraphQL", icon: Layers },              
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Hammer,
    items: [
      { name: "Git & GitHub", icon: GitBranch },      
      { name: "Docker", icon: Container },            
      { name: "AWS", icon: Cloud },                   
      { name: "CI/CD", icon: GitBranch },             
      { name: "Upstash", icon: Database },            
      { name: "Railway", icon: Server },              
      { name: "Postman", icon: Box },                 
    ],
  },
];

export function TechStack() {  
    return (
         <div className="space-y-4">
              {techStack.map((stack, index) => {
                const IconComponent = stack.icon;
                return (
                  <motion.div
                    key={stack.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className=" rounded-xl p-5 hover:bg-muted/5 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-sans tracking-tight">{stack.title}</h3>
                      <span className="ml-auto text-sm text-muted-foreground">{stack.items.length} skills</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {stack.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <motion.span
                            key={item.name}
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-muted/50 hover:bg-muted hover:border-primary/20 transition-all border border-transparent cursor-default"
                          >
                            <ItemIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium text-xs">{item.name}</span>
                          </motion.span>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
    );
}