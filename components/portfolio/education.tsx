import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function EducationSection() {
  return (
    <Section id="education" labelledBy="education-title">
      <Reveal>
        <SectionHeading id="education-title" eyebrow="05 / Education" title="Education & Learning" />
      </Reveal>
      <ol className="grid gap-4 md:grid-cols-3">
        {education.map((item, i) => (
          <li key={item.title}>
            <Reveal delay={i * 70} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-semibold text-balance">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.institution}</p>
                {item.period ? (
                  <p className="mt-auto pt-5 font-mono text-xs text-muted-foreground">{item.period}</p>
                ) : null}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
