import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Icons } from "@/components/icons";
import type { ReactNode } from "react";

export type Skill = {
  name: string;
  icon: ReactNode;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

export const skills: Skill[] = [
  { name: "React", icon: <Icons.React /> },
  { name: "Next.js", icon: <Icons.NextJS /> },
  { name: "TypeScript", icon: <Icons.TypeScript /> },
  { name: "Node.js", icon: <Icons.NodeJS /> },
  { name: "JavaScript", icon: <Icons.JavaScript /> },
  { name: "WordPress", icon: <Icons.WordPress /> },
  { name: "Figma", icon: <Icons.Figma /> },
  { name: "Tailwind CSS", icon: <Icons.TailwindCSS /> },
  { name: "Firebase", icon: <Icons.Firebase /> },
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce website with features like product browsing, cart management, and a checkout process, built with the MERN stack.",
    image: "project-1",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media App",
    description:
      "A responsive social media application where users can post updates, follow other users, and engage with content. Built with Next.js and Firebase.",
    image: "project-2",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Manager",
    description:
      "A productivity tool for managing tasks and projects. Features include drag-and-drop functionality, due dates, and collaboration.",
    image: "project-3",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Netbizowerri",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/netbizowerri/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "X",
    url: "https://x.com/netbizowerri",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Facebook",
    url: "https://web.facebook.com/netbizowerri",
    icon: <Facebook className="h-5 w-5" />,
  },
];
