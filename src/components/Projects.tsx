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
    <section id="projects" className="py-24 md:py-32 bg-gradient-subtle paper">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-handwritten text-2xl text-primary mb-2 rotate-tiny-left inline-block">stuff i've made</p>
          <h2 className="font-display italic text-4xl md:text-6xl font-black mb-6">
            the <span className="text-gradient wiggle-underline">projects</span> shelf
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            a little gallery of things i've built, broken, and (mostly) shipped.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const tilt = index % 2 === 0 ? "rotate-tiny-left" : "rotate-tiny-right";
            return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative group sticker overflow-hidden hover:rotate-0 hover:-translate-y-2 transition-all duration-500 ${tilt}`}
            >
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg] z-20" />
              <div className="relative overflow-hidden">
                {project.currentlyBuilding && (
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 font-handwritten text-base font-bold bg-accent text-accent-foreground rounded-full border-2 border-foreground rotate-[-6deg] shadow-[2px_2px_0_0_hsl(var(--foreground))]">
                    currently building!
                  </span>
                )}
                <div className={`w-full h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${project.currentlyBuilding ? 'bg-[hsl(35,45%,90%)]' : ''}`}>
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
                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-semibold rounded-lg border-2 border-foreground hover:-translate-y-0.5 transition shadow-[3px_3px_0_0_hsl(var(--primary))]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    live demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-card text-sm font-semibold rounded-lg border-2 border-dashed border-foreground/40 hover:rotate-2 transition"
                  >
                    <Github className="w-4 h-4" />
                    code
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display italic text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-handwritten text-base bg-secondary text-secondary-foreground rounded-full border border-foreground/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Projects;
