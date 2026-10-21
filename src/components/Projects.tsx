import { motion } from "framer-motion";

import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-[1160px] flex-col gap-8 px-4 pb-16 sm:px-6 sm:pb-24"
    >
      <div className="flex flex-col gap-2">
        <span className="text-sm font-black tracking-[0.08em] text-cherry">THINGS I’VE MADE</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-[-0.03em]">Projects</h2>
        <p className="max-w-xl text-lg font-semibold text-copy">
          Apps, websites, bots and AI tools. Each one built to solve a real problem.
        </p>
      </div>

      <div className="grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
              className="flex flex-col overflow-hidden rounded-[30px] bg-white text-ink shadow-card transition-shadow duration-300 hover:shadow-lift"
            >
              <div
                className="flex h-[150px] items-center justify-center sm:h-[190px]"
                style={{ backgroundColor: project.tint }}
              >
                {project.image ? (
                  <img src={project.image} alt="" className="max-h-[70%] max-w-[60%] object-contain" />
                ) : Icon ? (
                  <Icon className="h-16 w-16 text-ink" strokeWidth={1.7} />
                ) : null}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-[22px]">
                <span className="text-[0.82rem] font-black uppercase tracking-[0.06em] text-cherry">
                  {project.kind}
                </span>
                <h3 className="text-[1.35rem] font-black tracking-[-0.01em]">{project.title}</h3>
                <p className="font-semibold leading-relaxed text-copy">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cream-soft px-3 py-1 text-[0.82rem] font-extrabold text-copy"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
