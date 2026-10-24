import { ArrowRight, Download, MapPin } from 'lucide-react'
import { heroBadges, quickStats } from '@/lib/portfolio-data'
import { linkProps, siteConfig } from '@/lib/site-config'
import { GitHubIcon, LinkedInIcon } from './brand-icons'
import { TechBadge, buttonClass } from './primitives'
import { ProfilePhoto } from './ProfilePhoto'

const codeLines: { indent: number; tokens: { text: string; tone?: 'key' | 'str' | 'kw' | 'dim' }[] }[] = [
  { indent: 0, tokens: [{ text: 'const ', tone: 'kw' }, { text: 'developer' }, { text: ' = {', tone: 'dim' }] },
  { indent: 1, tokens: [{ text: 'name', tone: 'key' }, { text: ': ', tone: 'dim' }, { text: "'Rahul Kumar'", tone: 'str' }, { text: ',', tone: 'dim' }] },
  { indent: 1, tokens: [{ text: 'role', tone: 'key' }, { text: ': ', tone: 'dim' }, { text: "'Frontend Developer'", tone: 'str' }, { text: ',', tone: 'dim' }] },
  { indent: 1, tokens: [{ text: 'experience', tone: 'key' }, { text: ': ', tone: 'dim' }, { text: "'3+ years'", tone: 'str' }, { text: ',', tone: 'dim' }] },
  { indent: 1, tokens: [{ text: 'stack', tone: 'key' }, { text: ': [', tone: 'dim' }, { text: "'Angular'", tone: 'str' }, { text: ', ', tone: 'dim' }, { text: "'React'", tone: 'str' }, { text: ', ', tone: 'dim' }, { text: "'TypeScript'", tone: 'str' }, { text: '],', tone: 'dim' }] },
  { indent: 1, tokens: [{ text: 'domains', tone: 'key' }, { text: ': [', tone: 'dim' }, { text: "'FinTech'", tone: 'str' }, { text: ', ', tone: 'dim' }, { text: "'Tax Tech'", tone: 'str' }, { text: ', ', tone: 'dim' }, { text: "'Mobility'", tone: 'str' }, { text: '],', tone: 'dim' }] },
  { indent: 1, tokens: [{ text: 'openToWork', tone: 'key' }, { text: ': ', tone: 'dim' }, { text: 'true', tone: 'kw' }, { text: ',', tone: 'dim' }] },
  { indent: 0, tokens: [{ text: '}', tone: 'dim' }] },
]

const toneClass = {
  key: 'text-primary',
  str: 'text-highlight',
  kw: 'text-foreground font-medium',
  dim: 'text-muted-foreground',
} as const

function CodeWindow() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">developer.ts</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-6 sm:p-5 sm:text-[13px]">
        <code>
          {codeLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 w-4 shrink-0 text-right text-muted-foreground/50 select-none">
                {i + 1}
              </span>
              <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                {line.tokens.map((token, j) => (
                  <span key={j} className={token.tone ? toneClass[token.tone] : 'text-foreground'}>
                    {token.text}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-highlight" aria-hidden="true" />
            Open to Frontend / Angular Developer roles
          </p>
          <p className="text-lg text-muted-foreground">{"Hi, I'm Rahul Kumar"}</p>
          <h1 id="hero-title" className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Frontend Developer
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-foreground/90">
            Building modern, responsive and data-driven web applications with Angular, React and TypeScript.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-pretty text-muted-foreground">
            3+ years of experience building product-based web applications across FinTech, taxation, workforce
            mobility, immigration, invoicing and business management.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Core technologies">
            {heroBadges.map((badge) => (
              <li key={badge}>
                <TechBadge>{badge}</TechBadge>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#projects" className={buttonClass('primary', 'lg')}>
              View My Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href={siteConfig.resume} download className={buttonClass('outline', 'lg')}>
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              <a {...linkProps(siteConfig.github)} className={buttonClass('ghost', 'md')}>
                <GitHubIcon className="size-4" />
                GitHub
              </a>
              <a {...linkProps(siteConfig.linkedin)} className={buttonClass('ghost', 'md')}>
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="mb-[-3.5rem] flex justify-end pr-6 sm:pr-8">
            <div className="relative z-10">
              <ProfilePhoto />
            </div>
          </div>
          <CodeWindow />
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            Gurugram, India
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 bg-card p-5 sm:p-6">
              <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="order-1 text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
