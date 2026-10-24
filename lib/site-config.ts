/** 
 * PERSONAL DETAILS — Replace the placeholders below with your real information.
 * 
 * GitHub:  go to https://github.com/YOUR_USERNAME and copy your profile URL
 * LinkedIn: go to https://linkedin.com/in/YOUR_USERNAME and copy your profile URL
 * Email:  use your real email address
 * Site URL: your live domain (e.g. https://yourname.com)
 */

export const siteConfig = {
  name: 'Rahul Kumar',
  title: 'Frontend Developer',
  siteUrl: 'https://rahul-portfolio-phi-amber.vercel.app/',
  email: 'rahulkumar2001son@gmail.com',
  github: 'https://github.com/Rahul7268x',
  linkedin: 'https://www.linkedin.com/in/rahul-kumar-066795218',
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
