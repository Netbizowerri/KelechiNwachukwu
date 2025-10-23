"use client";

import { useState } from "react";
import { skills } from "@/lib/data.tsx";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const [aboutMe, setAboutMe] = useState(
    "I am a passionate and creative full-stack developer with a knack for building beautiful, responsive, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, elegant solutions. I'm always eager to learn new things and stay up-to-date with the latest industry trends."
  );

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="flex items-center gap-4">
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {aboutMe}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">My Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="flex flex-col items-center justify-center p-4 aspect-square transition-transform hover:scale-105 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                    <div className="w-10 h-10">{skill.icon}</div>
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
