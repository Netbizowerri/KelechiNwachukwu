"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data.tsx";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const avatar = PlaceHolderImages.find((img) => img.id === "avatar");
    if (avatar) {
      setAvatarUrl(avatar.imageUrl);
    }
  }, []);

  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Kelechi Nwachukwu
              </h1>
              <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl">
                Full Stack Developer & Trainer
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                A Full Stack Developer passionate about creating modern and
                responsive web applications.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link
                  href="https://jumpshare.com/s/ozxUvKrPV2XQYHynWZrM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2" />
                  Download CV
                </Link>
              </Button>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt="A portrait of Kelechi Nwachukwu."
                width={400}
                height={400}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
                data-ai-hint="person portrait"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
