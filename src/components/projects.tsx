import { projects } from "@/lib/data.tsx";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="text-muted-foreground">
            Here are some of the projects I've worked on.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
