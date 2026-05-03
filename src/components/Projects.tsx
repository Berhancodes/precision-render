import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import gentlyresetImg from "@/assets/gentlyreset.png";

const projects = [
  {
    title: "GentlyReset",
    description: "A modern web application built with React and TypeScript, featuring real-time updates and a sleek UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: gentlyresetImg,
    liveUrl: "https://gentlyreset.com",
    githubUrl: "#",
    currentlyBuilding: true,
  },
  {
    title: "Project Beta",
    description: "Full-stack e-commerce platform with seamless payment integration and inventory management.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "Mobile-first dashboard for analytics and data visualization with interactive charts.",
    tags: ["React", "D3.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gradient-subtle">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A selection of my recent work. Each project represents a unique challenge 
            and an opportunity to learn something new.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden glass shadow-card hover:shadow-glow transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                {project.currentlyBuilding && (
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full animate-pulse">
                    🚧 Currently Building
                  </span>
                )}
                <div className={`w-full h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${project.currentlyBuilding ? 'bg-[hsl(35,45%,90%)]' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={project.currentlyBuilding ? "h-40 w-auto object-contain" : "w-full h-full object-cover"}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay links */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-warm text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 glass text-sm font-medium rounded-lg hover:bg-secondary/80 transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
