'use client'

import { FileText, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { linkProps, navItems, siteConfig } from '@/lib/site-config'
import { GitHubIcon, LinkedInIcon } from './brand-icons'
import { buttonClass } from './primitives'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || open
          ? 'border-border bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#home" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="font-semibold tracking-tight">{siteConfig.name}</span>
          <span className="font-mono text-[11px] text-muted-foreground">{siteConfig.title}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? 'true' : undefined}
                className={cn(
                  'rounded-md px-3 py-2 text-sm transition-colors',
                  active === item.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            {...linkProps(siteConfig.github)}
            aria-label="GitHub profile"
            className="hidden size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            {...linkProps(siteConfig.linkedin)}
            aria-label="LinkedIn profile"
            className="hidden size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:inline-flex"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <ThemeToggle />
          <a
            href={siteConfig.resume}
            download
            className={buttonClass('primary', 'sm', 'ml-1 hidden sm:inline-flex')}
          >
            <FileText className="size-4" aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg text-foreground hover:bg-accent lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-md px-3 py-3 text-base transition-colors hover:bg-accent',
                  active === item.href ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-5 pb-5 sm:px-8">
          <a href={siteConfig.resume} download className={buttonClass('primary', 'md', 'flex-1')}>
            <FileText className="size-4" aria-hidden="true" />
            Download Resume
          </a>
          <a
            {...linkProps(siteConfig.github)}
            aria-label="GitHub profile"
            className={buttonClass('outline', 'md', 'px-3')}
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            {...linkProps(siteConfig.linkedin)}
            aria-label="LinkedIn profile"
            className={buttonClass('outline', 'md', 'px-3')}
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
