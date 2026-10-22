import iconImage from "@/assets/icon.png";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-[1160px] px-4 pb-6 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-7 overflow-hidden rounded-[32px] bg-salmon-deep p-[clamp(32px,6vw,64px)] text-white sm:rounded-[44px]">
        <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-3">
          <h2 className="text-[clamp(2.1rem,5vw,3.6rem)] font-black leading-[1.05] tracking-[-0.03em]">
            Have an idea? Let’s build it.
          </h2>
          <p className="text-lg font-semibold text-white/85">
            Apps, websites, tools: I’d love to hear what you’re working on.
          </p>
          <div className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:berh3n@gmail.com"
              className="rounded-full bg-cream px-6 py-[15px] text-center font-black text-ink transition-transform hover:-translate-y-0.5"
            >
              berh3n@gmail.com
            </a>
            <a
              href="https://github.com/berhancodes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream/15 px-6 py-[15px] text-center font-black text-cream transition-transform hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/a-berhan-7158a5278"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cream/15 px-6 py-[15px] text-center font-black text-cream transition-transform hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <img
          src={iconImage}
          alt=""
          className="h-[110px] w-[110px] flex-none animate-bob self-center rounded-full border-4 border-cream/30 object-cover sm:h-[160px] sm:w-[160px]"
        />
      </div>
    </section>
  );
};

export default Contact;
