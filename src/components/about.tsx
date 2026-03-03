"use client";

import { useMemo } from "react";
import { skills } from "@/lib/data.tsx";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const aboutMe = useMemo(
    () =>
      "I'm Kelechi Nwachukwu, a passionate and results-driven Web Developer in Owerri, Imo State with strong expertise in full stack development and modern website design. As an Affordable Web Developer in Imo State, I specialize in helping startups, small businesses, and growing brands establish a powerful online presence without breaking their budget.",
    []
  );

  return (
    <section id="about" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">About</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About Kelechi - Trusted Web Developer in Owerri
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">{aboutMe}</p>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              Over the years, I've worked with clients who needed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              {["Business websites", "E-commerce platforms", "Real Estate Website", "Hotel Websites", "Food Delivery Websites", "Travels & Tours Websites", "Portfolio websites", "Landing pages", "Custom web applications"].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              My approach is simple - combine clean design, fast performance, and SEO best practices to deliver websites that not only look good but rank well on Google. If you need a Trusted Website Designer in Owerri who understands both design and development, I'm ready to help.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Toolbox</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="flex flex-col items-center justify-center p-4 aspect-square glass transition-transform hover:scale-105">
                  <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                    <div className="w-10 h-10 text-primary">{skill.icon}</div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
