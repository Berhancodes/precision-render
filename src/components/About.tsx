import avatarImage from "@/assets/avatar.png";

const tools = ["React Native", "Expo", "TypeScript", "React", "Supabase", "Python", "AI / LLMs"];

const About = () => {
  return (
    <section id="about" className="mx-auto max-w-[1160px] px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="flex flex-col items-start gap-6 rounded-[32px] bg-peach p-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10 sm:rounded-[44px] sm:p-[clamp(28px,5vw,52px)]">
        <img
          src={avatarImage}
          alt="Berhan"
          className="h-[110px] w-[110px] flex-none rounded-full border-4 border-white object-cover shadow-lift sm:h-[180px] sm:w-[180px] sm:border-[6px]"
        />
        <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-3.5">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] font-black tracking-[-0.03em]">
            A little about me
          </h2>
          <p className="text-lg font-semibold leading-relaxed text-copy">
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
