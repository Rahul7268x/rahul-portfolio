import { BarChart3, Bot, Code2, Database, Server, Wrench, type LucideIcon } from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { Section, SectionHeading, TechBadge } from './primitives'
import { Reveal } from './reveal'

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  'API / Backend': Server,
  Database: Database,
  Tools: Wrench,
  Data: BarChart3,
  'AI-Assisted Development': Bot,
}

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" className="border-y border-border bg-secondary/30">
      <Reveal>
        <SectionHeading
          id="skills-title"
          eyebrow="02 / Skills"
          title="Technical Skills"
          description="The technologies and tools I use to design, build and ship frontend applications."
        />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = categoryIcons[group.category] ?? Code2
          const isPrimary = group.category === 'Frontend'
          return (
            <Reveal key={group.category} delay={i * 60} className={isPrimary ? 'sm:col-span-2 lg:col-span-2' : undefined}>
              <article className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <TechBadge className={isPrimary ? 'text-sm' : undefined}>{item}</TechBadge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
