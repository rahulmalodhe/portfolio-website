import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pawpets from "@/public/pawpets.png";
import cuppa from "@/public/cuppa.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated B.E",
    location: "Bengaluru, IND",
    description:
      "I pursed my Bachelor's degree in Computer Science and Engineering from Global Academy Of Technology. I graduated with a 9 GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Software Engineer",
    location: "Karnataka, India",
    description:
      "I worked as a Software Engineer at Capegemini where i worked on core JAVA and Spring framework, Hibernate, automation testing. I also upskilled to learn UI/UX and started working as a designer.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Senioer Software Engineer",
    location: "Karnataka, India",
    description:
      "Soon after my first year i was promoted to the position of Senior Software Engineer. I worked on multiple UI/UX projects, project on serverlets, jsp.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Paw Pets",
    description:
      "It is a Minimalist Pet Adoption app. It streamlines the process of adopting pets with features like detailed pet profiles, health history and adopter matching.",
    tags: ["Figma", "Adobe XD", "Framer", "Proto", "UI/UX"],
    imageUrl: pawpets,
  },
  {
    title: "Cuppa Corner",
    description:
      "It is a user friendly app for ordering beverages. It has features like customizing orders, tracking delivery and easy payment options.",
    tags: ["Figma", "Adobe XD", "Framer", "Proto", "UI/UX"],
    imageUrl: cuppa,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags:["Figma", "Adobe XD", "Framer", "Proto", "UI/UX"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
