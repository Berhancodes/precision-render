import { motion } from "framer-motion";
import { Code2, Palette, Lightbulb, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "building things",
    description: "react, typescript, and a love for tiny details that make stuff feel alive.",
    tilt: "rotate-tiny-left",
  },
  {
    icon: Palette,
    title: "designing things",
    description: "interfaces that feel friendly — never sterile, never shouting.",
    tilt: "rotate-tiny-right",
  },
  {
    icon: Lightbulb,
    title: "figuring things out",
    description: "i like messy problems and the quiet 'aha' when they finally click.",
    tilt: "rotate-tiny-left",
  },
  {
    icon: Zap,
    title: "making it fast",
    description: "snappy pages, smooth scrolls, no spinning wheels of doom.",
    tilt: "rotate-tiny-right",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-handwritten text-2xl text-primary mb-2 rotate-tiny-right inline-block">a little</p>
          <h2 className="font-display italic text-4xl md:text-6xl font-black mb-6">
            about <span className="text-gradient wiggle-underline">me</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            i'm just a person who really enjoys making things on the internet.
            half engineer, half collage artist, all in.
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
              className={`relative group p-6 sticker hover:rotate-0 hover:-translate-y-1 transition-all duration-300 ${skill.tilt}`}
            >
              <span className="tape -top-3 left-6 rotate-[-6deg]" />
              <div className="w-14 h-14 rounded-xl bg-gradient-warm flex items-center justify-center mb-5">
                <skill.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display italic text-2xl font-bold mb-3">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
