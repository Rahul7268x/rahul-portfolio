import { About } from '@/components/portfolio/about'
import { Contact, Footer } from '@/components/portfolio/contact'
import { GitHubSection, ResumeSection } from '@/components/portfolio/cta-sections'
import { EducationSection } from '@/components/portfolio/education'
import { ExperienceSection } from '@/components/portfolio/experience'
import { Hero } from '@/components/portfolio/hero'
import { Navbar } from '@/components/portfolio/navbar'
import { Projects } from '@/components/portfolio/projects'
import { Skills } from '@/components/portfolio/skills'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <EducationSection />
        <GitHubSection />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
