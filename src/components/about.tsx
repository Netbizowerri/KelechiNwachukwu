"use client";

import { useMemo } from "react";
import { skills } from "@/lib/data.tsx";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const aboutMe = useMemo(
    () =>
      "Full-stack engineer blending solid architecture with polished UI. I move fast, automate relentlessly, and obsess over clean DX so teams can ship confidently.",
    []
  );

  return (
    <section id="about" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">About</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Builder of fast, resilient, beautiful products.
            </h2>
            <p className="text-muted-foreground md:text-lg leading-relaxed">
              {aboutMe}
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
