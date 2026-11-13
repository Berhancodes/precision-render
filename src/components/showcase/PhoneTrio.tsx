import { motion } from "framer-motion";

import gentlyResetHome from "@/assets/screens/gentlyreset-home.jpg";
import leafnestWelcome from "@/assets/screens/leafnest-welcome.jpg";
import nudgibooWelcome from "@/assets/screens/nudgiboo-welcome.jpg";

import IPhone, { type PhoneFinish } from "./IPhone";

type Slot = {
  name: string;
  /** One word on what the app is, shown above the name. */
  category: string;
  live: boolean;
  finish: PhoneFinish;
  screen: JSX.Element;
  /** The screenshot already shows its own status bar, so the frame skips drawing one. */
  hasStatusBar?: boolean;
  tilt: number;
  delay: number;
  className: string;
  /** Caption column width, so captions line up under the phones without overlapping. */
  captionWidth: string;
};

const SLOTS: Slot[] = [
  {
    name: "Nudgiboo",
    category: "Couples",
    live: false,
    finish: "blush",
    screen: (
      <img
        src={nudgibooWelcome}
        alt="Nudgiboo welcome screen"
        className="h-full w-full object-cover object-top"
      />
    ),
    hasStatusBar: true,
    tilt: -7,
    delay: 0.3,
    className: "z-0 w-[31%] -mr-[3%] mt-[9%]",
    captionWidth: "w-[29%]",
  },
  {
    name: "Gently Reset",
    category: "Wellness",
    live: true,
    finish: "desert",
    screen: (
      <img
        src={gentlyResetHome}
        alt="Gently Reset home screen"
        className="h-full w-full object-cover object-top"
      />
    ),
    tilt: 0,
    delay: 0.15,
    className: "z-10 w-[35%]",
    captionWidth: "w-[33%]",
  },
  {
    name: "LeafNest",
    category: "Kids",
    live: false,
    finish: "sky",
    screen: (
      <img
        src={leafnestWelcome}
        alt="LeafNest welcome screen"
        className="h-full w-full object-cover object-top"
      />
    ),
    tilt: 7,
    delay: 0.45,
    className: "z-0 w-[31%] -ml-[3%] mt-[9%]",
    captionWidth: "w-[29%]",
  },
];

/** Three iPhones: Nudgiboo, Gently Reset (center) and LeafNest. */
const PhoneTrio = () => (
  <div id="apps" className="relative mx-auto w-full max-w-[940px] scroll-mt-24">
    {/* Soft glow behind the phones */}
    <span
      aria-hidden="true"
      className="absolute inset-x-[6%] bottom-[8%] top-[12%] rounded-[50%] bg-butter blur-3xl"
    />
    <div className="relative flex items-start justify-center">
      {SLOTS.map((slot) => (
        <motion.div
          key={slot.name}
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: slot.tilt }}
          transition={{ duration: 0.9, delay: slot.delay, ease: [0.22, 1, 0.36, 1] }}
          className={slot.className}
        >
          <IPhone finish={slot.finish} statusBar={!slot.hasStatusBar}>
            {slot.screen}
          </IPhone>
        </motion.div>
      ))}
    </div>
    <div className="relative mt-5 flex justify-center sm:mt-8">
      {SLOTS.map((slot) => (
        <div key={slot.name} className={`flex flex-col items-center ${slot.captionWidth}`}>
          <span className="hidden text-[0.7rem] font-black uppercase tracking-[0.16em] text-muted-ink sm:block">
            {slot.category}
          </span>
          <span className="text-[0.95rem] font-black leading-tight tracking-[-0.02em] text-ink sm:mt-1 sm:text-[1.4rem]">
            {slot.name}
          </span>
          <span
            className={`mt-1.5 flex items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-1 text-[0.6rem] font-extrabold sm:mt-2.5 sm:px-3 sm:py-1.5 sm:text-[0.8rem] ${
              slot.live ? "bg-ink text-white" : "bg-white text-copy ring-1 ring-ink/10"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${slot.live ? "bg-salmon-soft" : "bg-muted-ink"}`}
            />
            {slot.live ? "On the App Store" : "Coming soon"}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default PhoneTrio;
