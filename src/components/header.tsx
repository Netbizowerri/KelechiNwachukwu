"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "education", label: "Education" },
  { href: "pricing", label: "Pricing" },
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
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 md:h-[72px] items-center justify-between px-4 md:px-6">
        <button
          onClick={() => scrollToId("home")}
          className="group text-xl md:text-2xl tracking-tight text-foreground"
          aria-label="Back to top"
        >
          <span className="font-black transition-colors group-hover:text-primary">
            Kelechi
          </span>
          <span className="font-bold text-primary/80 transition-colors group-hover:text-primary">
            Nwachukwu
          </span>
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToId(link.href)}
              aria-current={activeId === link.href ? "true" : undefined}
              className={`text-sm font-medium transition-colors ${
                activeId === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <Button
          size="sm"
          className="shadow-lg shadow-primary/20 active:scale-[0.98]"
          onClick={() => scrollToId("contact")}
        >
          <MessageCircle className="mr-1.5 h-4 w-4" />
          Get Started
        </Button>
      </div>
    </header>
  );
}
