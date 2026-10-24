export type SkillGroup = { category: string; items: string[] }

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  summary: string[]
  technologies: string[]
}

export type Project = {
  slug: string
  name: string
  category: string
  type: string
  description: string
  features?: string[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
}

export type Education = {
  title: string
  institution: string
  period?: string
}

export const heroBadges = ['Angular', 'React', 'TypeScript', 'JavaScript', 'REST APIs']

export const quickStats = [
  { value: '3+', label: 'Years Experience' },
  { value: 'Multiple', label: 'Product Applications' },
  { value: 'Angular', label: 'Primary Frontend' },
  { value: 'FinTech', label: 'Industry Experience' },
]

export const aboutParagraphs = [
  "I'm a Frontend Developer with 3+ years of experience building responsive, scalable and data-driven web applications.",
  'My primary expertise is Angular, TypeScript, JavaScript, HTML5, CSS3 and Bootstrap, with additional experience working with React.js and modern frontend technologies.',
  'I have worked on product-based applications in areas including FinTech, taxation, workforce mobility, immigration, invoicing and business management.',
  'I have experience working with REST APIs, role-based systems, complex business workflows, dashboards, forms, data visualization and responsive web applications.',
  "I'm currently strengthening my frontend and full-stack development skills and focusing on building reliable applications that solve real business problems.",
]

export const whatIDo = [
  'Frontend Development',
  'Angular Development',
  'React Development',
  'REST API Integration',
  'Responsive Web Design',
  'Data-driven Dashboards',
  'Business Workflow Development',
  'FinTech Applications',
]

export const industries = [
  'FinTech',
  'Tax Technology',
  'Workforce Mobility',
  'Immigration',
  'Invoicing',
  'Business Management',
  'Data Visualization',
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: [
      'Angular',
      'React.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Angular Material',
      'Responsive Web Design',
    ],
  },
  { category: 'API / Backend', items: ['REST APIs', 'API Integration', 'Django', 'Flask'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'SQL'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Jira', 'VS Code', 'Postman'] },
  { category: 'Data', items: ['Power BI', 'Data Visualization'] },
  { category: 'AI-Assisted Development', items: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'] },
]

export const experiences: Experience[] = [
  {
    role: 'Frontend Developer',
    company: 'MobilitySQR',
    period: 'July 2023 – Present',
    location: 'Gurugram, India',
    summary: [
      'Worked on B2B web applications related to workforce mobility, employee assignments, immigration, taxation, relocation, costs and compliance.',
      'Responsibilities include frontend development, responsive UI development, API integration, business workflows, role-based interfaces and data-driven application features.',
    ],
    technologies: [
      'Angular',
      'React.js',
      'TypeScript',
      'JavaScript',
      'REST APIs',
      'HTML5',
      'CSS3',
      'Bootstrap',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'TaxSQR LLC',
    period: 'June 2023 – Present',
    location: 'Gurugram, India',
    summary: [
      'Worked on a tax practice management web application designed for CPA and tax professionals.',
      'The platform includes client management, tax cases, documents, tax organizers, assignments, reviews, e-signatures and audit-related workflows.',
      'Responsibilities include frontend development, reusable UI components, forms, dashboards, API integration, role-based workflows and responsive application development.',
    ],
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'REST APIs', 'Angular Material', 'Power BI'],
  },
]

export const featuredProject: Project & { highlights: string[] } = {
  slug: 'taxsqr',
  name: 'TaxSQR',
  category: 'FinTech / Tax Technology',
  type: 'Professional · Product',
  description: 'Tax practice management platform for CPA and tax professionals.',
  features: [
    'Client management',
    'Tax workflow management',
    'Tax organizer',
    'Document management',
    'Assignments',
    'Review workflows',
    'Role-based access',
    'E-signature workflows',
    'Audit-related records',
  ],
  technologies: ['Angular', 'TypeScript', 'JavaScript', 'REST APIs', 'Angular Material', 'Power BI'],
  highlights: [
    'FinTech',
    'Angular',
    'TypeScript',
    'REST APIs',
    'Role-based workflows',
    'Business process automation',
  ],
}

export const projects: Project[] = [
  {
    slug: 'mobilitysqr',
    name: 'MobilitySQR',
    category: 'B2B / Workforce Mobility',
    type: 'Professional · Product',
    description:
      'B2B workforce mobility platform supporting employee assignments, immigration, taxation, relocation, costs and compliance workflows.',
    features: [
      'Employee assignments',
      'Immigration workflows',
      'Taxation workflows',
      'Relocation & costs',
      'Compliance workflows',
    ],
    technologies: ['Angular', 'React.js', 'TypeScript', 'REST APIs'],
  },
  {
    slug: 'invoice-management',
    name: 'Invoice Management System',
    category: 'FinTech / Business Management',
    type: 'Web Application',
    description:
      'Web-based invoice management application focused on business invoice workflows and financial data management.',
    features: ['Business invoice workflows', 'Financial data management'],
    technologies: ['Angular', 'TypeScript', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    slug: 'travel-calendar',
    name: 'Travel Calendar',
    category: 'Business Management',
    type: 'Web Application',
    description:
      'Travel and assignment management interface supporting business workflows and different assignment types.',
    features: ['Travel management', 'Multiple assignment types', 'Business workflows'],
    technologies: ['Angular', 'TypeScript', 'Angular Material', 'REST APIs'],
  },
  {
    slug: 'power-bi-dashboard',
    name: 'Power BI Dashboard',
    category: 'Data Visualization',
    type: 'Demo · Sample data',
    description:
      'Interactive dashboard and reporting project demonstrating data visualization and business reporting capabilities. Built with sample/demo data only — no confidential company data.',
    features: ['Interactive dashboards', 'Business reporting', 'Sample/demo data only'],
    technologies: ['Power BI', 'SQL', 'REST APIs'],
  },
  {
    slug: 'java-calculator',
    name: 'Java Standard Calculator',
    category: 'Learning / Java',
    type: 'Learning Project',
    description:
      'Java calculator project created while strengthening object-oriented programming and unit testing skills.',
    features: ['Object-oriented design', 'Unit tests with JUnit'],
    technologies: ['Java', 'OOP', 'JUnit'],
  },
]

export const education: Education[] = [
  {
    title: 'Master of Computer Applications',
    institution: 'Microtek College of Management & Technology',
    period: '2025 – Present',
  },
  {
    title: 'Bachelor of Science',
    institution: 'Mahatma Gandhi Kashi Vidyapith University',
    period: '2021 – 2023',
  },
  {
    title: 'Java / Software Development Learning',
    institution: 'Crio.Do',
  },
]
