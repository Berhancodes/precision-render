import { motion } from "framer-motion";

import gentlyResetHome from "@/assets/screens/gentlyreset-home.jpg";

import IPhone, { type PhoneFinish } from "./IPhone";
import KidsScreen from "./KidsScreen";
import CouplesScreen from "./CouplesScreen";

type Slot = {
  name: string;
  description: string;
  comingSoon: boolean;
  finish: PhoneFinish;
  screen: JSX.Element;
  tilt: number;
  delay: number;
  className: string;
  /** Caption column width, so captions line up under the phones without overlapping. */
  captionWidth: string;
};

const SLOTS: Slot[] = [
  {
    name: "Couples app",
    description: "A cozy app for couples",
    comingSoon: true,
    finish: "blush",
    screen: <CouplesScreen />,
    tilt: -7,
    delay: 0.3,
    className: "z-0 w-[31%] -mr-[3%] mt-[9%]",
    captionWidth: "w-[29%]",
  },
  {
    name: "Gently Reset",
    description: "Out now on the App Store",
    comingSoon: false,
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
    name: "Kids learning",
    description: "Playful learning for kids",
    comingSoon: true,
    finish: "sky",
    screen: <KidsScreen />,
    tilt: 7,
    delay: 0.45,
    className: "z-0 w-[31%] -ml-[3%] mt-[9%]",
    captionWidth: "w-[29%]",
  },
];

/** Three iPhones: a couples app, Gently Reset (center) and the kids learning app. */
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
          <IPhone finish={slot.finish} comingSoon={slot.comingSoon}>
            {slot.screen}
          </IPhone>
        </motion.div>
      ))}
    </div>
    <div className="relative mt-5 flex justify-center sm:mt-8">
      {SLOTS.map((slot) => (
        <p key={slot.name} className={`text-center ${slot.captionWidth}`}>
          <span className="block text-[0.8rem] font-black leading-tight text-ink sm:text-lg">
            {slot.name}
          </span>
          <span className="mt-0.5 block text-[0.68rem] font-bold leading-snug text-muted-ink sm:text-sm">
            {slot.description}
          </span>
        </p>
      ))}
    </div>
  </div>
);

export default PhoneTrio;
