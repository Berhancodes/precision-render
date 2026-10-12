import type { LucideIcon } from "lucide-react";
import { FileText, HeartPulse, Scissors } from "lucide-react";

import bookabizzImg from "@/assets/bookabizz.png";
import gentlyresetImg from "@/assets/gentlyreset.png";
import pearthreadsImg from "@/assets/pearthreads.png";

export type Project = {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  href: string;
  /** Soft colour behind the preview. */
  tint: string;
} & ({ image: string; icon?: never } | { icon: LucideIcon; image?: never });

/** Every project gets the same card; order is the only emphasis. */
export const projects: Project[] = [
  {
    title: "Gently Reset",
    kind: "iOS app",
    description:
      "A soft 30-day reset with a mascot who grows a cozy room with you. Miss a day? You just continue.",
    tags: ["React Native", "Expo", "Supabase", "RevenueCat"],
    href: "https://gentlyreset.com",
    tint: "#FCF6ED",
    image: gentlyresetImg,
  },
  {
    title: "BookaBizz",
    kind: "Web app · in progress",
    description: "Booking for small businesses. [One line on what it does best.]",
    tags: ["Web", "Booking"],
    href: "https://bookabizz.com",
    tint: "#F7E9B0",
    image: bookabizzImg,
  },
  {
    title: "PearThreads",
    kind: "Full-stack web · live",
    description: "[One line on what PearThreads is and who it’s for.]",
    tags: ["Full-stack", "Live"],
    href: "https://pearrthreads-cad1bef3bdcf.herokuapp.com",
    tint: "#E8F0DE",
    image: pearthreadsImg,
  },
  {
    title: "BarberScraper",
    kind: "Automation",
    description:
      "Watches my barber’s schedule and books a cancellation the moment it opens on the day I want.",
    tags: ["Bot", "Scheduling"],
    href: "https://github.com/Berhancodes/BarberScraper",
    tint: "#FFE3D6",
    icon: Scissors,
  },
  {
    title: "Data Query",
    kind: "AI tool",
    description:
      "Ask questions in plain English and a language model answers from your own CSVs and PDFs.",
    tags: ["LLMs", "Python"],
    href: "https://github.com/Berhancodes/Data-Query-",
    tint: "#C9E0E8",
    icon: FileText,
  },
  {
    title: "Capital Health draft",
    kind: "Health tech",
    description: "A cleaner, faster take on outdated software still used in healthcare.",
    tags: ["Web", "Healthcare"],
    href: "https://github.com/Berhancodes/Capital-Health-Draft",
    tint: "#FFF1E6",
    icon: HeartPulse,
  },
];
