"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data.tsx";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Sparkles, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/2349067180824?text=Hello%20Kelechi.%20I%20just%20visited%20your%20personal%20website.%20I%20am%20interested%20in%20your%20service.";

export function Hero() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const avatar = PlaceHolderImages.find((img) => img.id === "avatar");
    if (avatar) setAvatarUrl(avatar.imageUrl);
  }, []);

  const subtitle = useMemo(
    () =>
      "Hi, I'm Kelechi Nwachukwu - a professional Website Designer in Owerri and Full Stack Web Developer in Imo State helping businesses build modern, fast, and conversion-focused websites.",
    []
  );

  return (
    <section id="home" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold text-primary mb-4 md:mb-2">
              <Sparkles className="h-4 w-4" />
              Affordable & Trusted Web Developer in Owerri, Imo State
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Affordable & Trusted Web Developer in Owerri, Imo State
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              If you're looking for an Affordable Website Designer in Owerri or a Trusted Web Developer in Imo State, you're in the right place. I build responsive, SEO-optimized, and scalable websites that help brands grow online.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-5">
              <Button
                size="lg"
                className="inline-flex md:hidden shadow-lg shadow-primary/30"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with me
                </a>
              </Button>
              <Button
                size="lg"
                className="hidden md:inline-flex shadow-lg shadow-primary/30"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Hire Me Today
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hidden md:inline-flex border-foreground text-foreground"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get a Free Consultation
              </Button>
            </div>
            
            {/* Social Media Icons - app-like tray */}
            <div className="w-full flex justify-start mt-24 mb-14 sm:mt-14 sm:mb-12">
              <div className="w-full max-w-xl lg:max-w-lg px-1">
                <div className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-primary/12 via-background/70 to-accent/10 shadow-lg backdrop-blur-xl px-4 py-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-12 w-12 lg:h-10 lg:w-10 rounded-full hover:bg-primary/15 p-0 transition-transform duration-150 hover:scale-105"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.name}
                        className="flex items-center justify-center h-full w-full"
                      >
                        <span className="h-7 w-7 lg:h-6 lg:w-6 [&_svg]:h-full [&_svg]:w-full">
                          {link.icon}
                        </span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full" aria-hidden />
            <div className="glass relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl w-full max-w-lg">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="A portrait of Kelechi Nwachukwu."
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
              <div className="absolute bottom-0 w-full p-6 flex items-center justify-between text-sm text-muted-foreground">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">Experience</p>
                  <p className="font-semibold text-foreground">8+ Years shipping products</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">Location</p>
                  <p className="font-semibold text-foreground">Owerri, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
