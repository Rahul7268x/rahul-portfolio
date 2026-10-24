import { Download, FileText } from 'lucide-react'
import { linkProps, siteConfig } from '@/lib/site-config'
import { GitHubIcon } from './brand-icons'
import { buttonClass } from './primitives'
import { Reveal } from './reveal'

export function GitHubSection() {
  return (
    <section aria-labelledby="github-title" className="pb-6">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                <GitHubIcon className="size-6" />
              </span>
              <div>
                <h2 id="github-title" className="text-2xl font-semibold tracking-tight">
                  Explore My Code
                </h2>
                <p className="mt-2 max-w-xl leading-relaxed text-pretty text-muted-foreground">
                  I use GitHub to build, experiment, learn and showcase frontend and software development projects.
                </p>
              </div>
            </div>
            <a {...linkProps(siteConfig.github)} className={buttonClass('outline', 'lg', 'shrink-0')}>
              <GitHubIcon className="size-4" />
              View GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ResumeSection() {
  return (
    <section aria-labelledby="resume-title" className="py-6">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/8 p-7 sm:p-10">
            <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_left,black,transparent_60%)]" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <FileText className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 id="resume-title" className="text-2xl font-semibold tracking-tight text-balance">
                    Want to know more about my experience?
                  </h2>
                  <p className="mt-2 max-w-xl leading-relaxed text-pretty text-muted-foreground">
                    Download my resume to see my professional experience, technical skills, projects and education.
                  </p>
                </div>
              </div>
              <a href={siteConfig.resume} download className={buttonClass('primary', 'lg', 'shrink-0')}>
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
