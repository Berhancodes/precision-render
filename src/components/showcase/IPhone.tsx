import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/** iPhone Pro screen in points; the frame adds a 12pt bezel and metal band. */
const SCREEN_WIDTH = 402;
const SCREEN_HEIGHT = 874;
const BEZEL = 12;
const DEVICE_WIDTH = SCREEN_WIDTH + BEZEL * 2;
const DEVICE_HEIGHT = SCREEN_HEIGHT + BEZEL * 2;

export type PhoneFinish = "desert" | "blush" | "sky";

/** Brushed-metal gradients for the frame band, one per finish. */
const FINISHES: Record<PhoneFinish, { band: string; button: string }> = {
  desert: {
    band: "linear-gradient(135deg,#E9D8C2 0%,#C9B293 22%,#F3E6D3 48%,#B99D7B 74%,#E2CDB2 100%)",
    button: "#BFA383",
  },
  blush: {
    band: "linear-gradient(135deg,#F5DCD5 0%,#D7B0A6 24%,#FBEAE4 50%,#C99D92 76%,#EED3CB 100%)",
    button: "#CFA59A",
  },
  sky: {
    band: "linear-gradient(135deg,#DDE7F1 0%,#AFC0D2 24%,#EEF3F8 50%,#9FB2C6 76%,#D3DEEA 100%)",
    button: "#A9BBCD",
  },
};

const StatusBar = ({ dark = false }: { dark?: boolean }) => (
  <div
    className="absolute inset-x-0 top-0 z-20 flex h-[54px] items-center justify-between px-[38px] pt-[6px] text-[17px] font-bold"
    style={{ color: dark ? "#FFFFFF" : "#1C1310", fontFamily: "-apple-system, system-ui, sans-serif" }}
  >
    <span>9:41</span>
    <span className="flex items-center gap-[6px]">
      {/* Signal */}
      <svg width="19" height="12" viewBox="0 0 19 12" fill="currentColor">
        <rect x="0" y="8" width="3.2" height="4" rx="1" />
        <rect x="5" y="5.5" width="3.2" height="6.5" rx="1" />
        <rect x="10" y="3" width="3.2" height="9" rx="1" />
        <rect x="15" y="0" width="3.2" height="12" rx="1" />
      </svg>
      {/* Wi-Fi */}
      <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
        <path d="M8.5 2.4c2.4 0 4.6.9 6.3 2.5l1.2-1.3A10.6 10.6 0 0 0 8.5.6 10.6 10.6 0 0 0 1 3.6l1.2 1.3a8.8 8.8 0 0 1 6.3-2.5Zm0 3.6c1.4 0 2.7.5 3.7 1.4l1.2-1.3a7.2 7.2 0 0 0-9.8 0l1.2 1.3c1-.9 2.3-1.4 3.7-1.4Zm0 3.5c.5 0 1 .2 1.3.5L8.5 11.8 7.2 10c.3-.3.8-.5 1.3-.5Z" />
      </svg>
      {/* Battery */}
      <svg width="27" height="13" viewBox="0 0 27 13">
        <rect x="0.5" y="0.5" width="23" height="12" rx="3.6" fill="none" stroke="currentColor" opacity="0.4" />
        <rect x="2" y="2" width="20" height="9" rx="2.2" fill="currentColor" />
        <path d="M25 4.5v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2Z" fill="currentColor" opacity="0.5" />
      </svg>
    </span>
  </div>
);

type IPhoneProps = {
  finish: PhoneFinish;
  children: ReactNode;
  /** White status bar text for dark screens. */
  darkStatusBar?: boolean;
  /** Blur the screen and show a "Coming soon" badge over it. */
  comingSoon?: boolean;
};

/**
 * A modern iPhone Pro drawn in CSS at real point size (metal band, black
 * bezel, Dynamic Island, side buttons), scaled to fill its container's width.
 * Children render on a 402×874pt screen, so mock screens use plain px.
 */
const IPhone = ({ finish, children, darkStatusBar, comingSoon }: IPhoneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const { band, button } = FINISHES[finish];

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setScale(entry.contentRect.width / DEVICE_WIDTH);
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ aspectRatio: `${DEVICE_WIDTH} / ${DEVICE_HEIGHT}` }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT, transform: `scale(${scale})` }}
      >
        {/* Side buttons: action + volume on the left, power + camera control on the right */}
        {[
          { side: "left", top: 168, height: 34 },
          { side: "left", top: 228, height: 64 },
          { side: "left", top: 306, height: 64 },
          { side: "right", top: 250, height: 104 },
          { side: "right", top: 560, height: 70 },
        ].map((sideButton) => (
          <span
            key={`${sideButton.side}-${sideButton.top}`}
            className="absolute w-[5px] rounded-full"
            style={{
              top: sideButton.top,
              height: sideButton.height,
              [sideButton.side]: -3,
              background: button,
            }}
          />
        ))}
        {/* Metal band */}
        <div
          className="absolute inset-0 rounded-[70px] p-[3px]"
          style={{
            background: band,
            boxShadow:
              "0 50px 90px -20px rgba(70,40,20,0.35), 0 18px 36px -12px rgba(70,40,20,0.25)",
          }}
        >
          {/* Black bezel */}
          <div className="h-full w-full rounded-[67px] bg-[#0B0807] p-[9px]">
            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[58px] bg-white">
              <span className="absolute left-1/2 top-[11px] z-30 h-[37px] w-[124px] -translate-x-1/2 rounded-full bg-black" />
              <StatusBar dark={darkStatusBar} />
              {comingSoon ? (
                <>
                  <div className="h-full w-full scale-110 blur-[14px]">{children}</div>
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/25">
                    <span className="rounded-full bg-white/90 px-[30px] py-[16px] text-[30px] font-black tracking-[-0.01em] text-[#3A2112] shadow-[0_12px_30px_rgba(58,33,18,0.18)]">
                      Coming soon
                    </span>
                  </div>
                </>
              ) : (
                children
              )}
              {/* Home indicator */}
              <span
                className="absolute bottom-[8px] left-1/2 z-30 h-[5px] w-[140px] -translate-x-1/2 rounded-full"
                style={{ background: darkStatusBar ? "#FFFFFF" : "#1C1310" }}
              />
              {/* Glass sheen */}
              <span className="pointer-events-none absolute inset-0 z-40 bg-[linear-gradient(115deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_32%)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone;
