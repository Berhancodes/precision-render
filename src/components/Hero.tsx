import { motion } from "framer-motion";

import PhoneTrio from "@/components/showcase/PhoneTrio";

const Hero = () => {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[1160px] flex-col items-center gap-12 overflow-hidden px-[18px] pb-16 pt-10 sm:gap-16 sm:px-6 sm:pb-24 sm:pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex max-w-[46rem] flex-col items-center gap-5 text-center sm:gap-6"
      >
        <span className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[0.95rem] font-extrabold shadow-soft ring-1 ring-salmon-soft/60">
          <span aria-hidden="true">👋</span>
          Developer &amp; designer
        </span>
        <h1 className="text-[2.6rem] font-black leading-[1.04] tracking-[-0.035em] sm:text-[clamp(3rem,6.4vw,5.2rem)]">
          Hi, I’m Berhan.
          <br />
          <span className="text-salmon">I make apps that feel good to use.</span>
        </h1>
        <p className="max-w-[36rem] text-lg font-semibold leading-relaxed text-copy sm:text-xl">
          Cozy, thoughtful iPhone apps, designed, built and polished by me. Here’s what’s on my
          desk right now.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#apps"
            className="rounded-full bg-salmon px-7 py-4 text-center text-[1.05rem] font-black text-white shadow-press transition-transform hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
          >
            See my apps
          </a>
          <a
            href="#contact"
            className="rounded-full bg-white px-7 py-4 text-center text-[1.05rem] font-black text-ink shadow-soft transition-transform hover:-translate-y-0.5"
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
