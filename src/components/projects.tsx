import { projects } from "@/lib/data.tsx";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
          <Reveal>
            <p className="eyebrow">Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-[1.1] text-balance">
              Recent Highlights
            </h2>
            <p className="text-muted-foreground text-lg max-w-[65ch] mx-auto">
              A selection of platforms shipped across commerce, mobility, finance, and non-profit sectors.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={index} delay={(index % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
