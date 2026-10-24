'use client'

import { ArrowUpRight, Check, ExternalLink, X } from 'lucide-react'
import { useRef } from 'react'
import type { Project } from '@/lib/portfolio-data'
import { GitHubIcon } from './brand-icons'
import { TechBadge, buttonClass } from './primitives'

function ProjectDialog({ project, dialogRef }: { project: Project; dialogRef: React.RefObject<HTMLDialogElement | null> }) {
  const titleId = `${project.slug}-dialog-title`
  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl border border-border bg-popover p-0 text-popover-foreground shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-primary">{project.category}</p>
            <h3 id={titleId} className="mt-2 text-xl font-semibold">
              {project.name}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">{project.type}</p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close project details"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-5 leading-relaxed text-pretty text-muted-foreground">{project.description}</p>
        {project.features?.length ? (
          <>
            <h4 className="mt-6 text-sm font-medium">Key features</h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <h4 className="mt-6 text-sm font-medium">Technologies</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li key={t}>
              <TechBadge>{t}</TechBadge>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonClass('outline', 'sm')}>
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          ) : null}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonClass('primary', 'sm')}>
              <ExternalLink className="size-4" aria-hidden="true" />
              Live Demo
            </a>
          ) : null}
          {!project.githubUrl && !project.liveUrl ? (
            <p className="text-xs text-muted-foreground">
              Source code and demo are not publicly available for this project.
            </p>
          ) : null}
        </div>
      </div>
    </dialog>
  )
}

export function ProjectDetailsButton({ project, className }: { project: Project; className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={className ?? buttonClass('outline', 'sm')}
        aria-haspopup="dialog"
      >
        View Details
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </button>
      <ProjectDialog project={project} dialogRef={dialogRef} />
    </>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_8px_30px_-12px] hover:shadow-primary/30">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs text-primary">{project.category}</p>
        <span className="text-[11px] text-muted-foreground">{project.type}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">{project.description}</p>
      {project.features?.length ? (
        <ul className="mt-4 flex flex-col gap-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-3.5 shrink-0 text-highlight" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      ) : null}
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.technologies.map((t) => (
          <li key={t}>
            <TechBadge>{t}</TechBadge>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <ProjectDetailsButton project={project} />
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonClass('ghost', 'sm')}>
            <GitHubIcon className="size-4" />
            GitHub
          </a>
        ) : null}
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonClass('ghost', 'sm')}>
            <ExternalLink className="size-4" aria-hidden="true" />
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  )
}
