import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Sparkles, Star } from "lucide-react";
import avatarImage from "@/assets/avatar.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle paper">
      {/* doodle squiggles */}
      <svg className="absolute top-24 left-10 w-24 h-24 text-primary/40 hidden md:block" viewBox="0 0 100 100" fill="none">
        <path d="M5 50 Q 20 20 35 50 T 65 50 T 95 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <Star className="absolute top-32 right-16 w-8 h-8 text-accent/60 rotate-12 hidden md:block" />
      <Sparkles className="absolute bottom-40 left-20 w-10 h-10 text-primary/50 -rotate-12 hidden md:block" />
      <svg className="absolute bottom-32 right-24 w-32 h-16 text-accent/40 hidden md:block" viewBox="0 0 120 40" fill="none">
        <path d="M5 20 C 25 5, 45 35, 65 20 S 105 5, 115 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Avatar with tape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative p-3 bg-card sticker">
              <span className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
              <img
                src={avatarImage}
                alt="Berhan"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-handwritten text-3xl md:text-4xl text-primary rotate-tiny-left inline-block"
          >
            hi there, welcome in ✿
          </motion.p>

          {/* Main heading */}
          <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            i'm{" "}
            <span className="text-gradient wiggle-underline">Berhan</span>
          </h1>

          {/* Typing animation */}
          <div className="h-12 md:h-16 flex items-center justify-center">
            <span className="text-2xl md:text-3xl text-muted-foreground font-light font-handwritten">
              currently a{" "}
              <TypeAnimation
                sequence={[
                  "developer",
                  2000,
                  "tinkerer",
                  2000,
                  "designer",
                  2000,
                  "daydreamer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-foreground font-semibold"
              />
            </span>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-xl mx-auto text-muted-foreground text-lg leading-relaxed"
          >
            i make small internet things with care, coffee, and a slightly chaotic
            sketchbook. pull up a chair — let's build something weird & wonderful.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-semibold rounded-xl border-2 border-foreground hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_hsl(var(--primary))]"
            >
              see my stuff →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-card font-semibold rounded-xl border-2 border-dashed border-foreground/40 hover:rotate-1 transition-transform"
            >
              say hi
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-handwritten text-lg"
          >
            <span>scroll!</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
