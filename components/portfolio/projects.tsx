import { Check, ImageIcon, Star } from 'lucide-react'
import { featuredProject, projects } from '@/lib/portfolio-data'
import { ProjectCard, ProjectDetailsButton } from './project-card'
import { Section, SectionHeading, TechBadge } from './primitives'
import { Reveal } from './reveal'

function NeutralMockup() {
  return (
    <div
      role="img"
      aria-label="Neutral UI mockup placeholder — approved project screenshot to be added"
      className="relative flex h-full min-h-64 flex-col overflow-hidden rounded-lg border border-border bg-background"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 h-2 w-32 rounded bg-muted" />
      </div>
      <div className="flex flex-1">
        <div className="hidden w-24 flex-col gap-2 border-r border-border p-3 sm:flex">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={`h-2 rounded ${i === 1 ? 'bg-primary/50' : 'bg-muted'}`} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md border border-border p-2.5">
                <span className="block h-1.5 w-10 rounded bg-muted" />
                <span className={`mt-2 block h-3 w-8 rounded ${i === 0 ? 'bg-primary/40' : 'bg-muted-foreground/25'}`} />
              </div>
            ))}
          </div>
          <div className="flex flex-1 flex-col gap-2 rounded-md border border-border p-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-muted-foreground/30" />
                <span className="h-1.5 flex-1 rounded bg-muted" />
                <span className={`h-1.5 w-10 rounded ${i % 2 ? 'bg-highlight/40' : 'bg-muted'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-background via-background/90 to-transparent pt-10 pb-3 text-xs text-muted-foreground">
        <ImageIcon className="size-3.5" aria-hidden="true" />
        Approved screenshot coming soon
      </div>
    </div>
  )
}

function FeaturedProject() {
  return (
    <article className="grid gap-8 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
      <div className="flex flex-col">
        <p className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/12 px-2.5 py-1 text-xs font-medium text-primary">
          <Star className="size-3.5" aria-hidden="true" />
          Featured Project
        </p>
        <p className="mt-5 font-mono text-xs text-muted-foreground">{featuredProject.category}</p>
        <h3 className="mt-2 text-3xl font-semibold tracking-tight">{featuredProject.name}</h3>
        <p className="mt-3 leading-relaxed text-pretty text-muted-foreground">{featuredProject.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Highlights">
          {featuredProject.highlights.map((h) => (
            <li key={h}>
              <TechBadge className="border-primary/25 bg-primary/8 text-foreground">{h}</TechBadge>
            </li>
          ))}
        </ul>
        <h4 className="mt-7 text-sm font-medium">Key features</h4>
        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {featuredProject.features?.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-3 pt-1">
          <ProjectDetailsButton project={featuredProject} />
          <span className="text-xs text-muted-foreground">Proprietary product — no public repo or demo.</span>
        </div>
      </div>
      <NeutralMockup />
    </article>
  )
}

export function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title" className="border-y border-border bg-secondary/30">
      <Reveal>
        <SectionHeading
          id="projects-title"
          eyebrow="04 / Projects"
          title="Selected Projects"
          description="Product applications I have worked on professionally, along with demo and learning projects."
        />
      </Reveal>
      <Reveal>
        <FeaturedProject />
      </Reveal>
      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={(i % 3) * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
