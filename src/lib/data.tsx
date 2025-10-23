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
  { name: "HTML", icon: <Icons.HTML /> },
  { name: "CSS", icon: <Icons.CSS /> },
  { name: "React", icon: <Icons.React /> },
  { name: "Next.js", icon: <Icons.NextJS /> },
  { name: "TypeScript", icon: <Icons.TypeScript /> },
  { name: "Node.js", icon: <Icons.NodeJS /> },
  { name: "JavaScript", icon: <Icons.JavaScript /> },
  { name: "WordPress", icon: <Icons.WordPress /> },
  { name: "Figma", icon: <Icons.Figma /> },
  { name: "Tailwind CSS", icon: <Icons.TailwindCSS /> },
  { name: "Firebase", icon: <Icons.Firebase /> },
  { name: "Git", icon: <Icons.Git /> },
];

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full stack e-commerce website for a medical equipment company",
    image: "project-1",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://www.nextoriahealth.com/",
    githubUrl: "#",
  },
  {
    title: "Loans & Investment Platform",
    description: "A full stack webapp for loans and investments.",
    image: "project-2",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://www.iprofitservices.com.ng/",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description: "A full stack webapp for property listings",
    image: "project-3",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://northerncrest.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Food Delivery Platform",
    description: "A full stack webapp for food delivery",
    image: "project-4",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    liveUrl: "https://www.facsfood.com.ng/",
    githubUrl: "#",
  },
  {
    title: "Non Profit Platform",
    description: "A webapp for an NGO based in Nigeria",
    image: "project-5",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://lodestarcare.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Multi-Services Platform",
    description: "A webapp for a multi-service business",
    image: "project-6",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://www.quanxicuzd.com.ng/",
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
    