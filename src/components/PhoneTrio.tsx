import type { ReactNode } from "react";
import { motion } from "framer-motion";

import gentlyResetHome from "@/assets/screens/gentlyreset-home.jpg";

type PhoneProps = {
  children: ReactNode;
  className?: string;
  delay: number;
  tilt: number;
};

/**
 * A cream phone frame. The screen is a size container, so mock screens use
 * `cqw` units and stay in proportion at any phone width.
 */
const Phone = ({ children, className = "", delay, tilt }: PhoneProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: 0 }}
    animate={{ opacity: 1, y: 0, rotate: tilt }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={`rounded-[2.4rem] bg-cream-soft p-[6px] shadow-phone ring-1 ring-sand ${className}`}
  >
    <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.05rem] bg-cream [container-type:inline-size]">
      <span className="absolute left-1/2 top-[3.5cqw] z-10 h-[8cqw] w-[34%] -translate-x-1/2 rounded-full bg-bezel" />
      {children}
    </div>
  </motion.div>
);

const NudgibooScreen = () => (
  <div className="flex h-full flex-col gap-[3.5cqw] bg-blush/60 px-[6cqw] pb-[6cqw] pt-[17cqw] text-ink">
    <p className="text-[5.5cqw] font-extrabold text-muted-ink">Good morning, you two</p>
    <p className="text-[9cqw] font-black leading-tight">Nudge your person 💛</p>
    <div className="flex items-center justify-center gap-[3cqw] rounded-[7cqw] bg-white p-[5cqw] shadow-soft">
      <span className="flex h-[17cqw] w-[17cqw] items-center justify-center rounded-full bg-peach text-[9cqw]">
        🐻
      </span>
      <span className="text-[9cqw] text-rose">♥</span>
      <span className="flex h-[17cqw] w-[17cqw] items-center justify-center rounded-full bg-butter text-[9cqw]">
        🐰
      </span>
    </div>
    <p className="text-center text-[5.5cqw] font-extrabold text-rose">12 days in sync</p>
    {["Send a sweet note", "Plan Friday date", "Ask about their day"].map((text, index) => (
      <div
        key={text}
        className="flex items-center gap-[3cqw] rounded-[5cqw] bg-white px-[4cqw] py-[3.5cqw] text-[5.5cqw] font-extrabold shadow-soft"
      >
        <span
          className={`h-[5cqw] w-[5cqw] shrink-0 rounded-full border-[1.2cqw] border-rose ${index === 0 ? "bg-rose" : ""}`}
        />
        {text}
      </div>
    ))}
    <span className="mt-auto rounded-full bg-rose py-[4cqw] text-center text-[6cqw] font-black text-white">
      Send a nudge
    </span>
  </div>
);

const KIDS_LESSONS = [
  { glyph: "Aa", name: "Letters", tint: "bg-butter" },
  { glyph: "123", name: "Numbers", tint: "bg-mint" },
  { glyph: "🔺", name: "Shapes", tint: "bg-peach" },
  { glyph: "🎨", name: "Colours", tint: "bg-blush" },
];

const KidsScreen = () => (
  <div className="flex h-full flex-col gap-[4cqw] bg-sky/70 px-[6cqw] pb-[6cqw] pt-[17cqw] text-ink">
    <div className="flex items-center justify-between">
      <p className="text-[9cqw] font-black leading-tight">Let’s learn!</p>
      <span className="rounded-full bg-white px-[3cqw] py-[1cqw] text-[5.5cqw] font-black text-gold-ink">
        ⭐ 24
      </span>
    </div>
    <div className="grid grid-cols-2 gap-[4cqw]">
      {KIDS_LESSONS.map((lesson) => (
        <div
          key={lesson.name}
          className={`flex aspect-square flex-col items-center justify-center gap-[1cqw] rounded-[7cqw] ${lesson.tint} shadow-soft`}
        >
          <span className="text-[10cqw] font-black leading-none">{lesson.glyph}</span>
          <span className="text-[5cqw] font-extrabold">{lesson.name}</span>
        </div>
      ))}
    </div>
    <div className="rounded-[5cqw] bg-white p-[4cqw] shadow-soft">
      <p className="text-[5cqw] font-extrabold text-muted-ink">Today’s adventure</p>
      <div className="mt-[2cqw] h-[3.5cqw] overflow-hidden rounded-full bg-sand">
        <div className="h-full w-3/5 rounded-full bg-gold" />
      </div>
    </div>
    <span className="mt-auto rounded-full bg-cocoa py-[4cqw] text-center text-[6cqw] font-black text-cream">
      Play
    </span>
  </div>
);

const LABELS = [
  { name: "Nudgiboo", note: "For couples · soon" },
  { name: "Gently Reset", note: "On the App Store" },
  { name: "Kids learning", note: "Name coming soon" },
];

/** Three apps side by side: Nudgiboo, Gently Reset (center) and the kids app. */
const PhoneTrio = () => (
  <div
    aria-label="Apps I'm building: Nudgiboo, Gently Reset, and a kids learning app"
    className="flex min-w-0 flex-[1_1_420px] flex-col gap-5 rounded-[32px] bg-butter px-3 pb-6 pt-10 sm:rounded-[44px] sm:px-6 sm:pt-12"
  >
    <div className="flex items-end justify-center">
      <Phone tilt={-6} delay={0.25} className="z-0 -mr-[4%] mb-3 w-[31%]">
        <NudgibooScreen />
      </Phone>
      <Phone tilt={0} delay={0.1} className="z-10 w-[38%]">
        <img
          src={gentlyResetHome}
          alt="Gently Reset home screen"
          className="h-full w-full object-cover object-top"
        />
      </Phone>
      <Phone tilt={6} delay={0.4} className="z-0 -ml-[4%] mb-3 w-[31%]">
        <KidsScreen />
      </Phone>
    </div>
    <div className="grid grid-cols-3 gap-2 text-center">
      {LABELS.map((label) => (
        <div key={label.name} className="rounded-2xl bg-cream-soft/80 px-2 py-2">
          <span className="block text-[0.8rem] font-black leading-tight text-ink sm:text-sm">
            {label.name}
          </span>
          <span className="block text-[0.7rem] font-bold leading-tight text-muted-ink sm:text-xs">
            {label.note}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default PhoneTrio;
