import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { Icons } from "@/components/icons";
import type { ReactNode } from "react";

// Import Instagram and LekeElekee from local Icons component
const { Instagram, LekeElekee } = Icons;

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
    description: "A custom web application for a ladies' beauty contest, with contestant profiles, gallery voting and real-time results.",
    image: "https://i.ibb.co/xSVHJB0K/Delight-Empowerment.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://delight-empowerment.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Travels & Tours Web Application",
    description: "A travel and tours booking web application with trip packages, itineraries and online reservations.",
    image: "https://i.ibb.co/5hjLBcw9/Lagos-Accra-Tours.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://lagosaccratour.com/",
    githubUrl: "#",
  },
  {
    title: "E-commerce Web Application",
    description: "An e-commerce web application for a ladies' fashion store with product catalog, cart and checkout.",
    image: "https://i.ibb.co/tw2T4Tps/Nuhafrik-Clothings.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://nuhafrik.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Multi-Vendor Marketplace Web Application",
    description: "A multi-vendor marketplace where dealers list vehicles and buyers browse, compare and enquire about cars online.",
    image: "project-7",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://marketmotors.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "E-commerce Web Application",
    description: "A full-stack e-commerce website for an apparel company, including product management and secure checkout.",
    image: "project-1",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://tsamzzapparel.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Blogging Web Application",
    description: "A full-stack blog website for publishing, editing and managing articles with a rich-text editor and a secure content dashboard — ideal for news portals, magazines and content creators who need a fast, SEO-ready blog web application.",
    image: "https://i.ibb.co/97nFsfZ/Screenshot-2026-07-31-125214.png",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://thenationseyes.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Real Estate Web Application",
    description: "A full-stack web app for property listings with searchable listings and detailed property pages.",
    image: "project-3",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://northerncrest.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Food Delivery Web Application",
    description: "A full-stack web app for food delivery with restaurant menus, online ordering and order tracking.",
    image: "project-4",
    tags: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Supabase"],
    liveUrl: "https://beautyfuncuisine.netlify.app/",
    githubUrl: "#",
  },
  {
    title: "Non Profit Website",
    description: "A web app for an NGO based in Nigeria with donation and volunteer features.",
    image: "project-5",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://lodestarcare.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Multi Service Website",
    description: "A web app for a multi-service business connecting customers to services online.",
    image: "project-6",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Firebase"],
    liveUrl: "https://www.quanxicuzd.com.ng/",
    githubUrl: "#",
  },
  {
    title: "E-commerce Web Application",
    description: "A full-stack web application for a luxury perfume brand with product showcase and checkout.",
    image: "project-8",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Node.js"],
    liveUrl: "https://sariaperfume.netlify.app/",
    githubUrl: "#",
  },
  {
    title: "E-Book Web Application",
    description: "An e-book publishing and storefront platform for authors to publish and sell books online.",
    image: "project-9",
    tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Node.js"],
    liveUrl: "https://ojogbajacobspublishers.com.ng/",
    githubUrl: "#",
  },
  {
    title: "Hotel Booking Web Application",
    description: "A hotel booking and management system with invoicing.",
    image: "https://i.ibb.co/LX7kXcJX/Kelechi-Nwachukwu-1.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://famous-suites-hotel.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Invoicing & Income Web Application",
    description: "A web application for generating invoices and revenue accounting.",
    image: "https://i.ibb.co/Ld3D2R6X/Kelechi-Nwachukwu-2.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://webdevinvoice.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Lead Scraper Web Application",
    description: "LeadFlow Nigeria is the autonomous lead scraper that finds physical Nigerian businesses with no website — then prepares them for your custom web design pitch. Powered by Gemini AI.",
    image: "https://i.ibb.co/TDrVM3y6/Kelechi-Nwachukwu.jpg",
    tags: ["React.js", "Vite", "TypeScript", "Node.js", "Tailwind CSS"],
    liveUrl: "https://leadflow-nigeria.vercel.app/",
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
    name: "Facebook",
    url: "https://facebook.com/netbizowerri",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/netbizowerri",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/netbizowerri/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "X",
    url: "https://x.com/NetBizOwerri",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "LekeElekee",
    url: "https://lekeelekee.com/u/Kaycee",
    icon: <LekeElekee className="h-5 w-5" />,
  },
];
    
