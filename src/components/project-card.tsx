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
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data.tsx";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [description] = useState(project.description);

  // Check if image is a URL (external) or an ID (placeholder)
  const isExternalUrl = project.image.startsWith('http');
  const imagePlaceholder = !isExternalUrl ?
    PlaceHolderImages.find((p) => p.id === project.image) as ImagePlaceholder :
    undefined;

  return (
    <Card className="group flex flex-col h-full overflow-hidden glass transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_28px_60px_-24px_rgba(16,185,129,0.25)]">
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={isExternalUrl ? project.image : imagePlaceholder?.imageUrl || ''}
          alt={`${project.title} — built by Kelechi Nwachukwu`}
          className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          data-ai-hint={!isExternalUrl ? imagePlaceholder?.imageHint || '' : 'external image'}
          loading="lazy"
          onError={(e) => {
            // Fallback to a placeholder if external image fails
            if (isExternalUrl) {
              e.target.src = imagePlaceholder?.imageUrl || '';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
      </div>
      <CardHeader>
        <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono-ui text-[11px] tracking-tight">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-col items-start gap-3">
        <Button variant="outline" asChild className="active:scale-[0.98]">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
