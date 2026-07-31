import { projects } from "@/lib/data.tsx";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.08),transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="container relative px-4 md:px-6">
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
