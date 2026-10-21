import { Bell, CalendarHeart, Heart, Home, Send, Sparkles } from "lucide-react";

const LOVE_NOTES = [
  { emoji: "💌", label: "Miss you", tint: "#FFE1DC" },
  { emoji: "🤗", label: "Hug later", tint: "#FFEFD6" },
  { emoji: "☕", label: "Coffee?", tint: "#F1E6FF" },
  { emoji: "⭐", label: "Proud of you", tint: "#E3F3E6" },
];

const TABS = [
  { Icon: Home, label: "Home", active: true },
  { Icon: Send, label: "Notes", active: false },
  { Icon: CalendarHeart, label: "Plans", active: false },
  { Icon: Heart, label: "Us", active: false },
];

/** Mock home screen for the upcoming couples app (402×874pt). */
const CouplesScreen = () => (
  <div className="relative flex h-full flex-col bg-[linear-gradient(180deg,#FFE4DE_0%,#FFF4EF_38%,#FFFAF7_100%)] px-[22px] pt-[66px] text-[#3B1F1A]">
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-[8px] text-[26px] font-black tracking-[-0.02em]">
        <span className="flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-[#F07C74] text-white">
          <Heart size={20} fill="currentColor" strokeWidth={0} />
        </span>
        us two
      </span>
      <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(240,124,116,0.18)]">
        <Bell size={20} strokeWidth={2.2} />
        <span className="absolute ml-[18px] mt-[-18px] h-[9px] w-[9px] rounded-full bg-[#F07C74]" />
      </span>
    </div>

    {/* Couple */}
    <div className="mt-[22px] flex items-center gap-[14px] rounded-[26px] bg-white p-[16px] shadow-[0_10px_26px_rgba(240,124,116,0.14)]">
      <div className="flex">
        <span className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-white bg-[#FFD9B8] text-[30px]">
          🐻
        </span>
        <span className="-ml-[16px] flex h-[56px] w-[56px] items-center justify-center rounded-full border-[3px] border-white bg-[#FCE3EC] text-[30px]">
          🐰
        </span>
      </div>
      <div className="flex-1">
        <p className="text-[19px] font-black leading-tight">You &amp; Sam</p>
        <p className="mt-[2px] text-[14px] font-bold text-[#9A766F]">Sam is feeling cozy ☕</p>
      </div>
      <span className="rounded-full bg-[#FFF0E6] px-[12px] py-[7px] text-[14px] font-black text-[#D2603F]">
        🔥 48
      </span>
    </div>

    {/* Today's question */}
    <div className="relative mt-[16px] overflow-hidden rounded-[28px] bg-[linear-gradient(140deg,#F58C80_0%,#EE6F7E_100%)] p-[20px] text-white shadow-[0_16px_30px_rgba(238,111,126,0.35)]">
      <span className="absolute -right-[18px] -top-[22px] h-[110px] w-[110px] rounded-full bg-white/15" />
      <span className="absolute right-[34px] top-[52px] h-[40px] w-[40px] rounded-full bg-white/10" />
      <p className="flex items-center gap-[6px] text-[12px] font-black uppercase tracking-[0.12em] text-white/85">
        <Sparkles size={14} /> Today’s question
      </p>
      <p className="mt-[10px] text-[23px] font-black leading-[1.18] tracking-[-0.01em]">
        What’s a small thing I do that makes your day better?
      </p>
      <div className="mt-[16px] flex items-center justify-between">
        <span className="flex items-center gap-[6px] rounded-full bg-white/20 px-[12px] py-[7px] text-[13px] font-extrabold">
          🐰 Sam answered
        </span>
        <span className="rounded-full bg-white px-[18px] py-[10px] text-[15px] font-black text-[#E8606F]">
          Answer
        </span>
      </div>
    </div>

    {/* Quick love notes */}
    <div className="mt-[22px] flex items-baseline justify-between">
      <p className="text-[19px] font-black">Send some love</p>
      <p className="text-[14px] font-extrabold text-[#E8606F]">See all</p>
    </div>
    <div className="mt-[12px] grid grid-cols-4 gap-[10px]">
      {LOVE_NOTES.map((note) => (
        <div key={note.label} className="flex flex-col items-center gap-[7px]">
          <span
            className="flex h-[70px] w-full items-center justify-center rounded-[22px] text-[30px] shadow-[0_6px_14px_rgba(59,31,26,0.06)]"
            style={{ background: note.tint }}
          >
            {note.emoji}
          </span>
          <span className="text-center text-[12px] font-extrabold leading-tight">{note.label}</span>
        </div>
      ))}
    </div>

    {/* Next plan */}
    <div className="mt-[18px] flex items-center gap-[14px] rounded-[22px] bg-white p-[14px] shadow-[0_8px_20px_rgba(59,31,26,0.06)]">
      <span className="flex h-[52px] w-[52px] flex-col items-center justify-center rounded-[16px] bg-[#FFF0E6] leading-none">
        <span className="text-[11px] font-black uppercase text-[#D2603F]">Fri</span>
        <span className="text-[21px] font-black">24</span>
      </span>
      <div className="flex-1">
        <p className="text-[16px] font-black">Pasta night 🍝</p>
        <p className="text-[13px] font-bold text-[#9A766F]">7:30 pm · Sam’s pick</p>
      </div>
      <span className="text-[13px] font-black text-[#E8606F]">2 days</span>
    </div>

    {/* Tab bar */}
    <div className="absolute inset-x-[16px] bottom-[26px] flex justify-around rounded-[30px] bg-white/95 py-[12px] shadow-[0_10px_30px_rgba(59,31,26,0.12)]">
      {TABS.map(({ Icon, label, active }) => (
        <span
          key={label}
          className={`flex flex-col items-center gap-[3px] text-[11px] font-extrabold ${
            active ? "text-[#E8606F]" : "text-[#B9A19B]"
          }`}
        >
          <Icon size={23} strokeWidth={2.3} fill={active ? "currentColor" : "none"} />
          {label}
        </span>
      ))}
    </div>
  </div>
);

export default CouplesScreen;
