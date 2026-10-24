/**
 * Replace the YOUR_* placeholders with your real details.
 * Links with a placeholder value render as inert anchors until updated.
 */
export const siteConfig = {
  name: 'Rahul Kumar',
  title: 'Frontend Developer',
  siteUrl: 'https://YOUR_DOMAIN.com',
  email: 'YOUR_EMAIL',
  github: 'YOUR_GITHUB_URL',
  linkedin: 'YOUR_LINKEDIN_URL',
  resume: '/Rahul_Kumar_Frontend_Developer_Resume.pdf',
} as const

export function isPlaceholder(value: string) {
  return value.includes('YOUR_')
}

export function linkProps(url: string) {
  if (isPlaceholder(url)) {
    return { href: '#contact', title: `Placeholder: set ${url} in lib/site-config.ts` }
  }
  return { href: url, target: '_blank', rel: 'noopener noreferrer' }
}

export function mailHref(email: string) {
  return isPlaceholder(email) ? '#contact' : `mailto:${email}`
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const
