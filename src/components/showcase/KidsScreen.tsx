import { BookOpen, Check, Home, Lock, Puzzle, Smile } from "lucide-react";

const SUBJECTS = [
  { emoji: "🔤", label: "ABC", tint: "#FFE7A8" },
  { emoji: "🔢", label: "123", tint: "#C9F0D2" },
  { emoji: "🔺", label: "Shapes", tint: "#FFD6CF" },
  { emoji: "🌱", label: "Nature", tint: "#D6E8FF" },
];

type PathStep = { state: "done" | "current" | "locked"; offset: number };

/** A winding lesson path, top to bottom. */
const PATH: PathStep[] = [
  { state: "done", offset: -70 },
  { state: "done", offset: 10 },
  { state: "current", offset: 70 },
  { state: "locked", offset: 0 },
];

const TABS = [
  { Icon: Home, label: "Home", active: true },
  { Icon: BookOpen, label: "Learn", active: false },
  { Icon: Puzzle, label: "Games", active: false },
  { Icon: Smile, label: "Me", active: false },
];

/** Mock home screen for the (unnamed) kids learning app (402×874pt). */
const KidsScreen = () => (
  <div className="relative flex h-full flex-col overflow-hidden bg-[linear-gradient(180deg,#BFE3FF_0%,#E3F3FF_40%,#F6FBFF_100%)] px-[22px] pt-[66px] text-[#1F2D4A]">
    {/* Clouds */}
    <span className="absolute left-[-30px] top-[150px] h-[46px] w-[130px] rounded-full bg-white/70" />
    <span className="absolute right-[-20px] top-[118px] h-[36px] w-[100px] rounded-full bg-white/60" />

    {/* Header */}
    <div className="relative flex items-center justify-between">
      <span className="flex items-center gap-[10px]">
        <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-[3px] border-white bg-[#FFB870] text-[27px]">
          🦊
        </span>
        <span>
          <span className="block text-[14px] font-extrabold text-[#5A6B8C]">Good morning</span>
          <span className="block text-[24px] font-black leading-none">Hi, Lily!</span>
        </span>
      </span>
      <span className="flex gap-[6px]">
        <span className="rounded-full bg-white px-[11px] py-[7px] text-[15px] font-black text-[#E2A100] shadow-[0_4px_10px_rgba(31,45,74,0.08)]">
          ⭐ 128
        </span>
        <span className="rounded-full bg-white px-[11px] py-[7px] text-[15px] font-black text-[#FF7A45] shadow-[0_4px_10px_rgba(31,45,74,0.08)]">
          🔥 6
        </span>
      </span>
    </div>

    {/* Continue card */}
    <div className="relative mt-[22px] overflow-hidden rounded-[28px] bg-[linear-gradient(140deg,#FFD25E_0%,#FFB443_100%)] p-[20px] shadow-[0_14px_0_#E99A22,0_22px_34px_rgba(233,154,34,0.35)]">
      <span className="absolute -right-[6px] bottom-[-10px] text-[96px] leading-none">🦉</span>
      <p className="text-[12px] font-black uppercase tracking-[0.12em] text-[#7A4B00]">Up next</p>
      <p className="mt-[6px] max-w-[210px] text-[25px] font-black leading-[1.1] text-[#3B2600]">
        Counting to 10 with Ollie
      </p>
      <div className="mt-[12px] h-[12px] w-[200px] overflow-hidden rounded-full bg-white/50">
        <span className="block h-full w-[60%] rounded-full bg-white" />
      </div>
      <span className="mt-[14px] inline-block rounded-full bg-[#3B2600] px-[22px] py-[11px] text-[16px] font-black text-white">
        Keep playing ▶
      </span>
    </div>

    {/* Subjects */}
    <div className="mt-[30px] grid grid-cols-4 gap-[10px]">
      {SUBJECTS.map((subject) => (
        <span key={subject.label} className="flex flex-col items-center gap-[6px]">
          <span
            className="flex h-[66px] w-full items-center justify-center rounded-[22px] text-[30px] shadow-[0_5px_0_rgba(31,45,74,0.08)]"
            style={{ background: subject.tint }}
          >
            {subject.emoji}
          </span>
          <span className="text-[13px] font-black">{subject.label}</span>
        </span>
      ))}
    </div>

    {/* Lesson path */}
    <div className="relative mt-[14px] flex flex-col items-center gap-[12px]">
      {PATH.map((step, index) => (
        <span
          key={index}
          className="flex items-center justify-center rounded-full"
          style={{
            transform: `translateX(${step.offset}px)`,
            width: step.state === "current" ? 74 : 58,
            height: step.state === "current" ? 74 : 58,
            background:
              step.state === "done" ? "#7BD88F" : step.state === "current" ? "#4DA3FF" : "#DCE5F0",
            boxShadow:
              step.state === "done"
                ? "0 6px 0 #4FB867"
                : step.state === "current"
                  ? "0 6px 0 #2A7FDB, 0 0 0 8px rgba(77,163,255,0.22)"
                  : "0 6px 0 #C2CEDD",
            color: step.state === "locked" ? "#9AAAC0" : "#FFFFFF",
          }}
        >
          {step.state === "done" ? (
            <Check size={28} strokeWidth={3.5} />
          ) : step.state === "current" ? (
            <span className="text-[30px] font-black">5</span>
          ) : (
            <Lock size={22} strokeWidth={3} />
          )}
        </span>
      ))}
    </div>

    {/* Tab bar */}
    <div className="absolute inset-x-[16px] bottom-[26px] flex justify-around rounded-[30px] bg-white py-[12px] shadow-[0_10px_30px_rgba(31,45,74,0.14)]">
      {TABS.map(({ Icon, label, active }) => (
        <span
          key={label}
          className={`flex flex-col items-center gap-[3px] text-[11px] font-extrabold ${
            active ? "text-[#2A7FDB]" : "text-[#A3B1C6]"
          }`}
        >
          <Icon size={23} strokeWidth={2.4} />
          {label}
        </span>
      ))}
    </div>
  </div>
);

export default KidsScreen;
