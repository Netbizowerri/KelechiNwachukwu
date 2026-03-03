"use client";

import { useState, useEffect } from "react";
import { Gem } from "lucide-react";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "education", label: "Education" },
  { href: "contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 80; // account for sticky header height + breathing room
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/70 backdrop-blur-lg shadow-lg border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-18 items-center justify-between px-4 md:px-6">
        <button
          onClick={() => scrollToId("home")}
          className="flex items-center gap-2 font-bold text-lg md:text-xl text-foreground hover:text-primary transition-colors"
        >
          <Gem className="h-6 w-6 text-primary" />
          <span>Kelechi Nwachukwu</span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToId(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}
