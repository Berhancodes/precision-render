import { motion } from "framer-motion";
import { Code2, Palette, Lightbulb, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Building modern web applications with React, TypeScript, and cutting-edge technologies.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive interfaces with a focus on user experience and visual aesthetics.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant, efficient solutions.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and scalability to deliver lightning-fast experiences.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            I'm passionate about creating digital experiences that make a difference. 
            With a blend of technical expertise and creative vision, I bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
                <skill.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
