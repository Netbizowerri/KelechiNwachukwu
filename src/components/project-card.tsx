"use client";

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
import { Link as LinkIcon } from "lucide-react";
import type { Project } from "@/lib/data.tsx";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [description] = useState(project.description);

  const imagePlaceholder = PlaceHolderImages.find(
    (p) => p.id === project.image
  ) as ImagePlaceholder;

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 glass">
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={imagePlaceholder.imageUrl}
          alt={project.title}
          className="object-cover w-full h-full"
          data-ai-hint={imagePlaceholder.imageHint}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
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
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col items-start gap-3">
        <Button variant="outline" asChild>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <LinkIcon className="mr-2" /> Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
