export interface Project {
  title: string
  subtitle: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

export interface TimelineEntry {
  period: string
  org: string
  role: string
  detail: string
  highlight?: string
  category: 'work' | 'milestone'
  logo?: string
}

export const PROFILE = {
  name: 'Brady Park',
  legalName: 'Brady William Park',
  location: 'Washington, D.C.',
  school: 'University of Virginia',
  degree: 'B.A. Computer Science · May 2027 · GPA 3.8/4.0',
  email: 'bradywpk211@gmail.com',
  github: 'https://github.com/bradyp19',
  linkedin: 'https://www.linkedin.com/in/brady-park-9a5469208/',
  
  status: 'Customer Success Engineer Intern at IBM · Previously GitHub · UVA QuestBridge Scholar',

  // Grounded, direct intro (Excetera / Vrathi style)
  intro:
    "I build systems, automated data pipelines, and developer tooling. Raised in a single-mother, low-income household, I started with Scratch games at age 10 and eventually earning a full-ride QuestBridge scholarship to UVA.",

  story: [
    "Growing up with an autistic brother and no financial safety net, I learned to be resourceful and take responsibility early. I taught myself to program on Scratch when I was 10, hacking together games until they reached 70,000+ plays on the front page.",
    "Winning a full-ride QuestBridge Match scholarship to UVA changed my trajectory. Today, I split my time between technical execution (writing scrapers, APIs, and ML models) and product strategy (translating user friction into technical roadmaps).",
    "Outside of work, I enjoy church pickup basketball, Christopher Nolan films, pickleball, electric guitar covers, following LeBron James, and drawing trees and skies."
  ]
}

export const PROJECTS: Project[] = [
  {
    title: 'DiffSentry',
    subtitle: 'Git-diff analysis for CI checks',
    description:
      'Built a FastAPI/Gemini pipeline analyzing Git diffs for CI pass/fail checks via GitHub Actions. Achieved 97%+ detection accuracy across approximately 1,000 snippets and placed 2nd overall at the GDG UVA showcase.',
    tech: ['Python', 'FastAPI', 'Gemini', 'GitHub Actions'],
    github: 'https://github.com/bradyp19/diff-sentry'
  }
]

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    period: 'Aug 2026 – Dec 2026',
    org: 'IBM',
    role: 'Customer Success Engineer Internship',
    detail: 'Built a BAMOE migration plugin using reusable conversion rules and Devin for assessment and validation, providing a starting point for agentic modernization at a large financial institution. Projected $5.3M in annual engineering-cost savings across a planned 128K-repository rollout. Cut hands-on migration assessment from 20 to 8 minutes; delivered an initial prototype in one week. Designed a retrieval-first context vault for IBM Bob with source-traceable context and a GUI prototype with user-governed updates.',
    category: 'work',
    logo: '/logos/ibm.svg'
  },
  {
    period: 'May 2026 – Aug 2026',
    org: 'GitHub',
    role: 'Product Manager Intern',
    detail: 'Cut manual migration verification from 90 to 20 minutes with a Go parity-check engine spanning GitHub, GitLab, Azure DevOps, and Bitbucket, generating auditable JSON, Markdown, and HTML reports. Implemented 4 deterministic classifications, read-only reconciliation, explicit coverage status, and CI exit codes; tests passed across 9 Go packages. Built a RAG-powered agent harness for Go prototyping and test generation. Led 14 discovery sessions and authored 2 PRDs to support GitHub Enterprise and Copilot adoption.',
    highlight: '90 → 20 min verification',
    category: 'work',
    logo: '/logos/github.svg'
  },
  {
    period: 'May 2026 – Present',
    org: 'The Collective',
    role: 'Founding Fellow',
    detail: 'Founding fellow in a community of founders, operators, and investors partnering with Ramp, a16z/speedrun, MongoDB, Stripe, and AngelList.',
    category: 'work',
    logo: '/logos/thecollective.svg'
  },
  {
    period: 'Jun 2025 – Aug 2025',
    org: 'Strategy (NASDAQ: MSTR)',
    role: 'Sales Engineering Intern',
    detail: 'Cut manual analysis 90% with an AI scraper turning 500+ weekly competitor reports into 40 insights. Designed a cloud proof of concept with cross-region failover and performance benchmarks.',
    highlight: '90% manual cut',
    category: 'work',
    logo: '/logos/strategy.svg'
  },
  {
    period: 'Feb 2025',
    org: 'Jihoon Rim Foundation',
    role: 'Scholar',
    detail: '$5,000 scholarship and direct mentorship from former Kakao CEO and NYU Stern professor Jihoon Rim.',
    category: 'milestone',
    logo: '/logos/jihoon.png'
  },
  {
    period: 'Jan 2025 – Dec 2025',
    org: 'Techne Strategy Group (UVA)',
    role: 'Director of Operations',
    detail: 'Scaled UVA’s largest tech consulting club from 7 to 13 projects per semester (86%) by leading outbound for Oracle, Palantir, and AfterQuery partnerships.',
    category: 'work',
    logo: '/logos/tsg.svg'
  },
  {
    period: 'Jan 2025 – Apr 2025',
    org: 'GuidePoint Security',
    role: 'Security Engineering Intern',
    detail: 'Reduced SOC setup time 40% using infrastructure as code, Kubernetes, Docker, and 5+ virtual machines. Automated logging for 50K+ daily logs with Bash, reducing delivery latency from about 10 to 6 seconds.',
    category: 'work',
    logo: '/logos/guidepoint.png'
  },
  {
    period: '2025',
    org: 'Bain & Company x UVA',
    role: 'Case Comp Winner',
    detail: '1st place out of 20+ teams in the Bain & Company x Virginia Casing Organization competition.',
    highlight: '1st Place / 20+ Teams',
    category: 'milestone',
    logo: '/logos/bain.png'
  },
  {
    period: '2025',
    org: 'MetaCTF @ HooHacks',
    role: 'CTF Winner',
    detail: '1st place in cybersecurity collegiate CTF out of 30+ teams open to all 1,000 HooHacks participants.',
    highlight: '1st Place / 30+ Teams',
    category: 'milestone',
    logo: '/logos/metactf.jpg'
  },
  {
    period: 'Jan 2024 – Dec 2025',
    org: 'University of Virginia',
    role: 'Data Structures Teaching Assistant',
    detail: 'Mentored 500+ students in Java OOP and data structures. Led weekly labs of 100 students on a 30+ person TA staff.',
    category: 'work',
    logo: '/logos/uva.svg'
  },
  {
    period: 'Dec 2022',
    org: 'QuestBridge',
    role: 'Match Full-Ride Scholar',
    detail: 'Full four-year merit scholarship for low-income students (~1% acceptance rate). 1 of 15 Match Scholars at UVA.',
    highlight: 'Full-Ride (~1% rate)',
    category: 'milestone',
    logo: '/logos/questbridge.png'
  },
  {
    period: '2023 – Present',
    org: 'University of Virginia',
    role: 'Echols Scholar',
    detail: 'Selected for UVA’s honors program representing the top 5% of students in Arts & Sciences.',
    category: 'milestone',
    logo: '/logos/uva.svg'
  }
]

export const SKILL_GROUPS = [
  {
    name: 'Languages',
    skills: ['Python', 'SQL', 'Java', 'C/C++']
  },
  {
    name: 'Web & Cloud',
    skills: ['React', 'Node.js', 'AWS']
  },
  {
    name: 'AI',
    skills: ['Agentic AI', 'LangChain', 'Transformers']
  },
  {
    name: 'Certifications',
    skills: ['AWS Cloud Practitioner (UVA AWS Bootcamp)', 'Strategy Enterprise Analyst']
  }
]
