import { projects } from "@/lib/data.tsx";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Work</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recent Highlights
          </h2>
          <p className="text-muted-foreground">
            A selection of platforms shipped across commerce, mobility, finance, and non-profit sectors.
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
