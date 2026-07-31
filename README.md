# Kelechi Nwachukwu — Website & Web App Developer

![Developer](https://img.shields.io/badge/Developer-Kelechi%20Nwachukwu-blueviolet)
![Tech](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite-informational)

A modern, single-page portfolio and resume application for **Kelechi Nwachukwu**, a website and web app developer based in Owerri, Imo State, Nigeria — building responsive, SEO-optimised websites and web applications for businesses across Nigeria.

Live site: [https://kelechi-nwachukwu.vercel.app/](https://kelechi-nwachukwu.vercel.app/)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts / Commands](#available-scripts--commands)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Developer](#developer)
- [License](#license)

---

## Tech Stack

### Core

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| **React 19**     | UI library                           |
| **TypeScript**   | Typed JavaScript                     |
| **Vite 5**       | Build tool & dev server              |
| **Tailwind CSS** | Utility-first styling                |
| **React Router** | Client-side routing (react-router-dom v6) |

### UI & Styling

| Technology              | Purpose                          |
| ----------------------- | -------------------------------- |
| **shadcn/ui**           | Component system (built on Radix) |
| **Radix UI**            | Accessible primitives (dialogs, menus, tabs, tooltips, etc.) |
| **tailwindcss-animate** | Animation utilities              |
| **class-variance-authority** | Variant-aware component styling |
| **tailwind-merge**      | Tailwind class merging           |
| **clsx**                | Conditional class names          |
| **lucide-react**        | Icons                            |

### Forms & Data

| Technology            | Purpose                       |
| --------------------- | ----------------------------- |
| **react-hook-form**   | Form state & validation       |
| **zod**               | Schema validation             |
| **@hookform/resolvers** | Zod resolver for RHF        |

### Visualisation & Motion

| Technology          | Purpose                |
| ------------------- | ---------------------- |
| **recharts**        | Data visualisation     |
| **embla-carousel-react** | Carousels         |

### Utilities

| Technology   | Purpose            |
| ------------ | ------------------ |
| **date-fns** | Date manipulation  |
| **Radix UI Slot** | Component composition |

### Tooling & Dev

| Technology          | Purpose              |
| ------------------- | -------------------- |
| **TypeScript 5**    | Type checking (`tsc --noEmit`) |
| **PostCSS**         | CSS processing       |
| **Autoprefixer**    | Vendor prefixes      |
| **@vitejs/plugin-react** | React fast-refresh for Vite |
| **@types/node**     | Node type definitions |

---

## Features

- Responsive, mobile-first portfolio & resume SPA
- SEO-optimised with Open Graph, Twitter Card, JSON-LD structured data (Person / ProfessionalService / WebSite)
- Local GEO meta tags for local search visibility
- Reusable shadcn/ui component library
- Type-safe forms validated with Zod
- Data visualisation with Recharts
- Built with a performance-focused asset pipeline (self-hosted Geist fonts, Vite bundling)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (LTS recommended)
- npm (ships with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Netbizowerri/kelechi-nwachukwu.git
cd kelechi-nwachukwu

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

---

## Available Scripts / Commands

| Command            | Description                                        |
| ------------------ | -------------------------------------------------- |
| `npm run dev`      | Start the Vite dev server (default `http://localhost:5173`) |
| `npm run build`    | Build the production bundle into `dist/`           |
| `npm run preview`  | Preview the production build locally               |
| `npm run lint`     | Type-check the project (`tsc --noEmit`)            |

---

## Project Structure

```
kelechi-nwachukwu/
├── public/              # Static assets (fonts, favicon, images)
├── src/
│   ├── ai/              # AI-related flows
│   ├── app/             # Application entry & routes
│   ├── components/      # UI components (shadcn/ui + custom)
│   │   └── ui/          # shadcn/ui primitives
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utilities & helpers
├── index.html           # HTML entry with SEO meta tags
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── components.json      # shadcn/ui configuration
└── package.json         # Project manifest & scripts
```

---

## Deployment

The site is configured for deployment on **Vercel** (see `vercel.json`) and is live at `https://kelechi-nwachukwu.vercel.app/`.

To deploy manually:

```bash
# 1. Build the production bundle
npm run build

# 2. Preview locally (optional)
npm run preview

# 3. Deploy via Vercel
vercel --prod
```

The repository also includes Firebase Studio configuration (`apphosting.yaml`) for alternative hosting on Firebase App Hosting.

---

## Developer

**Kelechi Nwachukwu** — Website & Web App Developer

Based in Owerri, Imo State, Nigeria. Serving clients nationwide, building custom websites, e-commerce platforms, and SEO-optimised web applications.

- **Email:** [netbizowerri@gmail.com](mailto:netbizowerri@gmail.com)
- **GitHub:** [github.com/Netbizowerri](https://github.com/Netbizowerri)
- **LinkedIn:** [linkedin.com/in/netbizowerri](https://www.linkedin.com/in/netbizowerri/)
- **Facebook:** [facebook.com/netbizowerri](https://facebook.com/netbizowerri)
- **Instagram:** [instagram.com/netbizowerri](https://instagram.com/netbizowerri)
- **X (Twitter):** [x.com/NetBizOwerri](https://x.com/NetBizOwerri)

---

## License

All rights reserved. © 2026 Kelechi Nwachukwu.
