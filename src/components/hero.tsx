import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data.tsx";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download } from "lucide-react";

export function Hero() {
  const avatar = PlaceHolderImages.find((img) => img.id === "avatar");

  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Kelechi Nwachukwu
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A Full Stack Developer passionate about creating modern and
                responsive web applications.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="/cv.pdf" download>
                  <Download className="mr-2" />
                  Download CV
                </a>
              </Button>
              <div className="flex items-center gap-2">
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
            {avatar && (
              <Image
                src="https://i.ibb.co/Z1BwqgH/Kaycee-Nwachukwu.jpg"
                alt={avatar.description}
                width={450}
                height={450}
                className="rounded-full object-cover border-4 border-primary shadow-lg"
                data-ai-hint={avatar.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
