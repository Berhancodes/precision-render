const tools = ["React Native", "Expo", "TypeScript", "React", "Supabase", "Python", "AI / LLMs"];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-[1160px] px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="rounded-[32px] bg-peach p-7 sm:rounded-[44px] sm:p-[clamp(28px,5vw,52px)]">
        <div className="flex min-w-0 flex-col gap-3.5">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] font-black tracking-[-0.03em]">
            A little about me
          </h2>
          <p className="max-w-[46rem] text-lg font-semibold leading-relaxed text-copy">
            I’m a developer who can’t stop making things: apps, websites, bots and AI tools. I care
            about the parts people feel: how an app greets you on a rough day, how a button responds
            under your thumb, and whether your data is truly safe.
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="rounded-full bg-white px-3.5 py-2 font-extrabold">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
