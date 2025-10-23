"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Github, Link as LinkIcon } from "lucide-react";
import type { Project } from "@/lib/data.tsx";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [description, setDescription] = useState(project.description);

  const imagePlaceholder = PlaceHolderImages.find(
    (p) => p.id === project.image
  ) as ImagePlaceholder;

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-xl hover:scale-[1.02]">
      <div className="relative w-full aspect-video">
        <Image
          src={imagePlaceholder.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={imagePlaceholder.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex w-full justify-between">
            <div className="flex gap-2">
                <Button variant="outline" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2" /> Live Demo
                    </Link>
                </Button>
            </div>
        </div>
      </CardFooter>
    </Card>
  );
}
