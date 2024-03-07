import backroads from "@/public/backroads.png";
import imaginify from "@/public/imaginify.png";
import expenseT from "@/public/expenseT.png";
import { link } from "fs";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "imaginify",
    description:
      "Real Software-as-a-Service app with AI features and a payments and credits system.",
    tags: ["React", "Typescript", "Next.js", "Clerk", "Stripe"],
    imageUrl: imaginify,
    projectUrl: "https://imaginify-eta-three.vercel.app/",
  },

  {
    title: "backroads",
    description:
      " Small Project for travelers for booking hotels in every corner of the world.",
    tags: ["React", "Javascript", "Next.js", "Redux"],
    imageUrl: backroads,
    projectUrl: "https://hassankane.github.io/backroads-app/",
  },
  {
    title: "expenseT",
    description: " Small Project to track expenses.",
    tags: ["React", "Express", "Node.js", "MongoDB", "Typescript"],
    imageUrl: expenseT,
    projectUrl: "https://pwa-expense-tracker-typescript-2cv2dquh1.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Clerk",
  "Stripe",
  "Redux",
  "GraphQL",
  "Express",
  "Framer Motion",
] as const;
