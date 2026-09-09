export interface Project {
  title: string
  subtitle: string
  year: string
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
  location: 'NYC / Charlottesville, VA',
  school: 'University of Virginia',
  degree: 'B.A. Computer Science, 2027',
  email: 'bradywpk211@gmail.com',
  github: 'https://github.com/bradyp19',
  linkedin: 'https://www.linkedin.com/in/brady-park-9ab3bb212/',
  resume: '/resume.pdf',
  
  status: 'Incoming at GitHub & IBM · UVA Echols & QuestBridge Scholar',

  // Grounded, direct intro (Excetera / Vrathi style)
  intro:
    "I'm a computer science student at the University of Virginia. I build systems, automated data pipelines, and developer tooling. Raised in a single-mother, low-income household, I came from nothing and learned early to build with whatever I had—starting with Scratch games at age 10 and eventually earning a full-ride QuestBridge scholarship to UVA.",

  story: [
    "Growing up with an autistic brother and no financial safety net, I learned to be resourceful and take responsibility early. I taught myself to program on Scratch when I was 10, hacking together games until they reached 70,000+ plays on the front page.",
    "Winning a full-ride QuestBridge Match scholarship to UVA changed my trajectory. Today, I split my time between technical execution (writing scrapers, APIs, and ML models) and product strategy (translating user friction into technical roadmaps).",
    "Outside of work, I play church pickup basketball, play electric guitar, watch Christopher Nolan movies, and play pickleball."
  ]
}

export const PROJECTS: Project[] = [
  {
    title: 'DiffSentry',
    subtitle: 'Automated CI/CD Vulnerability Scanner',
    year: '2025',
    description:
      'A real-time vulnerability detection pipeline integrated with GitHub Actions and FastAPI. Scans pull request diffs using AST parsing and signature analysis to catch security flaws before production deployment. Analyzed ~1,000 code snippets per run with 97%+ accuracy.',
    tech: ['Python', 'FastAPI', 'GitHub Actions', 'Cloudflare Pages', 'React'],
    github: 'https://github.com/asatpathy314/diff-sentry',
    demo: 'https://diff-sentry.tech/'
  },
  {
    title: 'Market Intelligence Agent',
    subtitle: 'Automated Competitor Scraper & NLP Pipeline',
    year: '2025',
    description:
      'Built at Strategy (MicroStrategy) to eliminate manual competitor research. An automated Python scraper and NLP pipeline that ingests 500+ competitor reports weekly and outputs 40 concise markdown briefs directly to internal channels, cutting manual analysis effort by 90%.',
    tech: ['Python', 'Web Scraping', 'NLP', 'Pipelines', 'Markdown Synthesis'],
    github: 'https://github.com/bradyp19/market-intelligence-agent'
  },
  {
    title: 'SunnyGlasses',
    subtitle: 'Real-Time ASL to Speech Interpreter',
    year: '2024',
    description:
      'An accessibility tool translating American Sign Language into spoken voice in real time. Built at HooHacks using OpenCV for hand gesture tracking and a TensorFlow model trained on GCP. Achieved 98%+ accuracy on ~1,000 test samples and won 3rd place in the Accessibility Track.',
    tech: ['OpenCV', 'TensorFlow', 'Python', 'Google Cloud Platform'],
    github: 'https://github.com/bradyp19/sunnyglasses'
  }
]

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    period: 'Aug 2026 – Dec 2026',
    org: 'IBM',
    role: 'Customer Success Engineer Co-Op',
    detail: 'Joining the NYC Financial Markets team to help enterprise clients deploy IBM AI and data software using agentic tools and technical proof-of-concepts.',
    category: 'work',
    logo: '/logos/ibm.svg'
  },
  {
    period: 'May 2026 – Aug 2026',
    org: 'GitHub',
    role: 'Product Manager Intern',
    detail: 'Core Migration Engine moving 200K+ repos/month. Defining FY27 roadmap from F500 user research, designing a checksum validation tool for top 100 enterprise clients, and prototyping agentic Copilot/MCP workflows that cut manual migration overhead by 75%.',
    highlight: '200K+ repos/mo',
    category: 'work',
    logo: '/logos/github.svg'
  },
  {
    period: 'May 2026 – Present',
    org: 'The Collective',
    role: 'Founding Fellow',
    detail: 'Founding fellow in a community of founders, operators, and investors partnering with Ramp, a16z/speedrun, MongoDB, Stripe, and AngelList.',
    category: 'work'
  },
  {
    period: 'Jun 2025 – Aug 2025',
    org: 'Strategy (MicroStrategy)',
    role: 'Sales Engineering Intern',
    detail: 'Built an automated competitor intelligence scraper cutting team manual analysis by 90%. Independently architected a cross-region cloud POC with 99.9% projected availability.',
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
    org: 'Technology Strategy Group',
    role: 'Director of Operations',
    detail: 'Scaled project capacity 86% (7 to 13 clients/semester) by introducing Jira workflows for 50+ student consultants. Co-launched partnerships with Oracle and Palantir.',
    category: 'work',
    logo: '/logos/tsg.svg'
  },
  {
    period: 'Jan 2025 – Apr 2025',
    org: 'GuidePoint Security',
    role: 'Security Engineering Intern',
    detail: 'Built a 5+ VM security lab using Kubernetes and Docker. Automated Bash log ingestion pipelines handling 50k+ daily logs with 30% lower delivery latency.',
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
    skills: ['Python', 'TypeScript', 'Java', 'C/C++', 'SQL', 'Bash']
  },
  {
    name: 'Pipelines & Automation',
    skills: ['Playwright', 'GitHub Actions', 'FastAPI', 'MCP / Agents', 'Web Scraping']
  },
  {
    name: 'Infrastructure & Security',
    skills: ['Docker', 'Kubernetes', 'AWS', 'SIEM / Logging', 'CI/CD']
  },
  {
    name: 'Product & Execution',
    skills: ['Technical PRDs', 'User Discovery', 'Jira / Sprints', 'POC Benchmarks']
  }
]
