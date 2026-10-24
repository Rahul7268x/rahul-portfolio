import { Briefcase, MapPin } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'
import { Section, SectionHeading, TechBadge } from './primitives'
import { Reveal } from './reveal'

export function ExperienceSection() {
  return (
    <Section id="experience" labelledBy="experience-title">
      <Reveal>
        <SectionHeading
          id="experience-title"
          eyebrow="03 / Experience"
          title="Professional Experience"
          description="Product-based frontend development for B2B, FinTech and tax technology platforms."
        />
      </Reveal>
      <ol className="relative flex flex-col gap-8 border-l border-border pl-6 sm:pl-10">
        {experiences.map((exp, i) => (
          <li key={exp.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-6 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2.5rem+5px)]"
            />
            <Reveal delay={i * 80}>
              <article className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-primary">
                      <Briefcase className="size-4" aria-hidden="true" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:items-end">
                    <span className="font-mono">{exp.period}</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="mt-5 flex flex-col gap-3 leading-relaxed text-pretty text-muted-foreground">
                  {exp.summary.map((s, j) => (
                    <p key={j}>{s}</p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Technologies used at ${exp.company}`}>
                  {exp.technologies.map((t) => (
                    <li key={t}>
                      <TechBadge>{t}</TechBadge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
