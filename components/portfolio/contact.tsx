import { Mail } from 'lucide-react'
import { linkProps, mailHref, siteConfig } from '@/lib/site-config'
import { GitHubIcon, LinkedInIcon } from './brand-icons'
import { Section, SectionHeading, buttonClass } from './primitives'
import { Reveal } from './reveal'

const channels = [
  { label: 'Email', value: siteConfig.email, href: mailHref(siteConfig.email), Icon: Mail, external: false },
  { label: 'LinkedIn', value: siteConfig.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', value: siteConfig.github, Icon: GitHubIcon, external: true },
]

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start min-w-0">
        <Reveal className="min-w-0">
          <SectionHeading
            id="contact-title"
            eyebrow="06 / Contact"
            title="Let's Build Something Together"
            description="I'm open to Frontend Developer and Angular Developer opportunities where I can contribute to real-world products and continue growing my technical skills."
          />
          <div className="-mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={mailHref(siteConfig.email)} className={buttonClass('primary', 'lg')}>
              <Mail className="size-4" aria-hidden="true" />
              Email Me
            </a>
            <a {...linkProps(siteConfig.linkedin)} className={buttonClass('outline', 'lg')}>
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
            <a {...linkProps(siteConfig.github)} className={buttonClass('outline', 'lg')}>
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <ul className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
            {channels.map(({ label, value, href, Icon, external }) => {
              const props = external ? linkProps(value) : { href }
              return (
                <li key={label}>
                  <a {...props} className="flex items-center gap-4 p-5 transition-colors hover:bg-accent/50">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted-foreground">{label}</span>
                      <span className="block truncate font-mono text-sm">{value}</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.title}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">Angular | React | TypeScript | JavaScript</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-4 md:items-end">
          <ul className="flex gap-5 text-sm">
            <li>
              <a {...linkProps(siteConfig.linkedin)} className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </a>
            </li>
            <li>
              <a {...linkProps(siteConfig.github)} className="text-muted-foreground hover:text-foreground">
                GitHub
              </a>
            </li>
            <li>
              <a href={siteConfig.resume} download className="text-muted-foreground hover:text-foreground">
                Resume
              </a>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground">© 2026 Rahul Kumar. All rights reserved.</p>
        </nav>
      </div>
    </footer>
  )
}
