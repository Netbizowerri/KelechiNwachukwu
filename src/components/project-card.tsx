"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";
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
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { Github, Link as LinkIcon, Loader2, Sparkles } from "lucide-react";
import type { Project } from "@/lib/data.tsx";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [description, setDescription] = useState(project.description);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const imagePlaceholder = PlaceHolderImages.find(
    (p) => p.id === project.image
  ) as ImagePlaceholder;

  const handleGenerateDescription = async () => {
    setIsLoading(true);
    try {
      const result = await generateProjectDescription({
        projectName: project.title,
        projectDetails: `A project using ${project.tags.join(", ")}. ${project.description}`,
        template: "Generate a professional, one-paragraph project description that highlights its purpose and key technologies used.",
      });
      if (result.description) {
        setDescription(result.description);
        toast({
          title: "Success",
          description: "New project description generated!",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate content.",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
        <Button onClick={handleGenerateDescription} disabled={isLoading} size="sm">
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          {isLoading ? "Generating..." : "Generate with AI"}
        </Button>
        <div className="flex w-full justify-between">
            <div className="flex gap-2">
                <Button variant="outline" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2" /> Live Demo
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" /> GitHub
                    </Link>
                </Button>
            </div>
        </div>
      </CardFooter>
    </Card>
  );
}
