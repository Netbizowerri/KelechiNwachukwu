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
  { name: "MySQL", icon: <Icons.MySQL /> },
  { name: "N8N", icon: <Icons.N8N /> },
];

export const projects: Project[] = [
  {
    title: "Beauty Contest Web Application",
    description: "A Web Application for a beauty contest for ladies",
    image: "https://i.ibb.co/xSVHJB0K/Delight-Empowerment.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://delight-empowerment.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Travels & Tours Web Application",
    description: "A Travels & Tours Booking Web Application",
    image: "https://i.ibb.co/5hjLBcw9/Lagos-Accra-Tours.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://lagosaccratour.com/",
    githubUrl: "#",
  },
  {
    title: "E-commerce Web Application",
    description: "An E-commerce Web Application for a ladies fashion store",
    image: "https://i.ibb.co/tw2T4Tps/Nuhafrik-Clothings.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://nuhafrik.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Vehicle Multi-Vendor Marketplace",
    description: "A multi-vendor marketplace for vehicles.",
    image: "project-7",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://marketmotors.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "E-commerce Platform",
    description: "A full stack e-commerce website for an apparel company",
    image: "project-1",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://tsamzzapparel.vercel.app/",
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
    liveUrl: "https://beautyfuncuisine.netlify.app/",
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
  {
    title: "E-commerce Platform",
    description: "A full stack web application for a luxury perfume brand",
    image: "project-8",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Node.js"],
    liveUrl: "https://sariaperfume.netlify.app/",
    githubUrl: "#",
  },
  {
    title: "E-Book Platform",
    description: "An e-book publishing and storefront experience",
    image: "project-9",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Node.js"],
    liveUrl: "https://ojogbajacobspublishers.com.ng/",
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
    
