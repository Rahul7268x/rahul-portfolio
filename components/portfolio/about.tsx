import { Check } from 'lucide-react'
import { aboutParagraphs, industries, whatIDo } from '@/lib/portfolio-data'
import { Section, SectionHeading } from './primitives'
import { Reveal } from './reveal'

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Reveal>
        <SectionHeading id="about-title" eyebrow="01 / About" title="About Me" />
      </Reveal>
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="flex flex-col gap-5 text-pretty leading-relaxed text-muted-foreground">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-lg text-foreground' : undefined}>
              {p}
            </p>
          ))}
          <div className="mt-2">
            <h3 className="mb-3 text-sm font-medium text-foreground">Industry experience</h3>
            <ul className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-7">
            <h3 className="font-semibold">What I Do</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {whatIDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
