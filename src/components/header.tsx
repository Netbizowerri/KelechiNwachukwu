"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, Gem, User, Briefcase, GraduationCap, Mail } from "lucide-react";

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

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-xl">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gradient-to-b from-background via-background/95 to-background">
              <div className="space-y-5 p-4">
                <div className="flex items-center gap-3 font-bold text-xl">
                  <Gem className="h-7 w-7 text-primary" />
                  <span>Kelechi Nwachukwu</span>
                </div>
                <div className="grid gap-3">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <button
                        onClick={() => scrollToId(link.href)}
                        className="flex items-center gap-3 rounded-2xl bg-card/70 hover:bg-primary/10 border border-border/60 px-4 py-3 text-left transition-all duration-150 shadow-sm hover:shadow-md"
                      >
                        <span className="h-5 w-5 text-primary opacity-90">
                          {link.href === "about" && <User className="h-5 w-5" />}
                          {link.href === "projects" && <Briefcase className="h-5 w-5" />}
                          {link.href === "education" && <GraduationCap className="h-5 w-5" />}
                          {link.href === "contact" && <Mail className="h-5 w-5" />}
                          {link.href === "home" && <Gem className="h-5 w-5" />}
                        </span>
                        <span className="font-semibold text-foreground">{link.label}</span>
                      </button>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
