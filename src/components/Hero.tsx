import { motion } from "framer-motion";

import PhoneTrio from "@/components/PhoneTrio";

const Hero = () => {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-8 px-[18px] pb-14 pt-9 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex min-w-0 flex-[999_1_480px] flex-col gap-5 sm:gap-6"
      >
        <span className="flex items-center gap-2 self-start rounded-full bg-white px-3.5 py-2 text-[0.95rem] font-extrabold shadow-soft">
          <span className="h-2 w-2 rounded-full bg-gold" />
          Developer &amp; designer · Edmonton
        </span>
        <h1 className="text-[2.5rem] font-black leading-[1.06] tracking-[-0.035em] sm:text-[clamp(2.8rem,6vw,4.8rem)] sm:leading-[1.02]">
          Hi, I’m Berhan.
          <br />
          <span className="text-gold-ink">I make apps that feel good to use.</span>
        </h1>
        <p className="max-w-[33rem] text-lg font-semibold leading-relaxed text-copy sm:text-xl">
          Mobile apps, websites, bots and AI tools. I design the screens, write the code and set up
          the backend — then keep polishing until it feels just right.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="rounded-full bg-cocoa px-6 py-4 text-center text-[1.05rem] font-black text-cream shadow-lift transition-transform hover:-translate-y-0.5"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-4 text-center text-[1.05rem] font-black text-ink shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>
      </motion.div>

      <PhoneTrio />
    </section>
  );
};

export default Hero;
