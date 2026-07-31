"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { skills } from "@/lib/data.tsx";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export function About() {
  const aboutMe = useMemo(
    () =>
      "Kelechi Nwachukwu is a website and web app developer in Nigeria with 8+ years of experience building digital products for businesses across the country. I design and develop custom websites, e-commerce platforms, and web applications that are responsive, fast, and built to rank on Google — whether you're a startup in Lagos, a retailer in Abuja, or a growing brand in Owerri. My work covers business websites, e-commerce stores, real estate portals, hotel booking sites, food delivery apps, travel and tours platforms, and bespoke web applications.",
    []
  );

  return (
    <section id="about" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <Reveal>
              <p className="eyebrow">About</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-[1.1] text-balance">
                About Kelechi — Trusted Web Developer in Nigeria
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-muted-foreground md:text-lg leading-relaxed max-w-[65ch]">{aboutMe}</p>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-muted-foreground md:text-lg leading-relaxed">
                Over the years, I've worked with clients who needed:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground mt-4">
                {["Business websites", "E-commerce platforms", "Real Estate Website", "Hotel Websites", "Food Delivery Websites", "Travels & Tours Websites", "Portfolio websites", "Landing pages", "Custom web applications"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 transition-colors active:scale-[0.98]">
                  <a href="#contact" target="_self" rel="noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="space-y-6">
            <Reveal>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Toolbox</h3>
              <p className="text-muted-foreground mt-2 max-w-[65ch]">
                The tools I use to design, build, and ship reliable websites and web applications for Nigerian businesses.
              </p>
            </Reveal>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <Reveal key={skill.name} delay={index * 40}>
                  <Card className="flex flex-col items-center justify-center p-4 aspect-square glass transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.25)]">
                    <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                      <div className="w-10 h-10 text-primary transition-transform duration-300 group-hover:scale-110">{skill.icon}</div>
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
