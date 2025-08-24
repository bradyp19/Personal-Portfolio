'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { 
  FiMail, FiGithub, FiLinkedin, FiDownload, FiExternalLink, 
  FiCode, FiDatabase, FiLayers, FiTrendingUp, FiAward,
  FiSun, FiMoon, FiMenu, FiX, FiArrowUp, FiFilter
} from 'react-icons/fi'
import {
  Calendar, MapPin, Star, Clock, Users, Target,
  BookOpen, Briefcase, Trophy, Heart
} from 'lucide-react'

// Data structures
const trustedBy = [
  { name: 'UVA', src: '/logos/uva.svg', alt: 'University of Virginia' },
  { name: 'Strategy One', src: '/logos/strategy.svg', alt: 'Strategy One (MicroStrategy)' },
  { name: 'TSG', src: '/logos/tsg.svg', alt: 'TSG' }
]

const skills = [
  { name: 'Pitching New Ideas', level: 88, category: 'Creativity' },
  { name: 'Product Storytelling', level: 80, category: 'Communication' },
  { name: 'Running Sprints', level: 75, category: 'Process' },
  { name: 'Learning a New Stack', level: 75, category: 'Technical' },
  { name: 'Designing Wireframes', level: 65, category: 'Design' },
  { name: 'Negotiating with Clients', level: 50, category: 'Business' }
]
const projects = [
  {
    id: 1,
    title: 'DiffSentry',
    description: 'DiffSentry was built to help developers automatically catch vulnerabilities before they hit production. The platform integrates directly with GitHub Actions to scan open-source code in real time, using REST APIs for dynamic code classification and security analysis. I engineered a full-stack solution with FastAPI (Python) and React.js, deploying it with a streamlined CI/CD workflow using Heroku and Cloudflare Pages. DiffSentry analyzes around 1,000 code snippets per run, hitting over 97% detection accuracy. The project won 2nd place overall at the Google Developer Group showcase at UVA, competing among 700+ participants.',
    subtitle: 'OSS repository vulnerability scanner',
    tech: ['Python', 'FastAPI', 'React.js', 'GitHub Actions', 'Heroku', 'Cloudflare Pages'],
    category: 'Security',
    github: 'https://github.com/asatpathy314/diff-sentry',
    image: '/previews/diffsentry.png'
  },
  {
    id: 2,
    title: 'SunnyGlasses',
    description: 'SunnyGlasses is an AI-powered tool designed to bridge communication gaps for the Deaf and hard-of-hearing community. Built during HooHacks, it converts American Sign Language gestures into spoken language using a custom-trained recognition model with OpenCV and TensorFlow on Google Cloud. I developed the full pipeline—from real-time gesture detection to speech output—achieving 98%+ accuracy on a dataset of about 1,000 samples. SunnyGlasses won 3rd place in the Accessibility Track out of 750+ hackers, reflecting its real-world potential and innovative approach.',
    subtitle: 'AI-Driven Sign Language Interpreter @ HooHacks',
    tech: ['OpenCV', 'TensorFlow', 'Google Cloud', 'Python', 'AI/ML'],
    category: 'AI/ML',
    github: 'https://github.com/bradyp19/sunnyglasses',
    image: '/previews/sunnyglasses.jpg'
  },
  {
    id: 3,
    title: 'SOC-in-a-Box',
    description: 'A plug-and-play security lab for threat detection and response. Built during my GuidePoint Security internship, SOC-in-a-Box brings together real-time monitoring, advanced detection, centralized logging, and incident response—all in a streamlined, easy-to-deploy package. It gives teams a functional SOC without the overhead, making cybersecurity accessible, fast, and scalable.',
    subtitle: 'Plug-and-play security lab for threat detection',
    tech: ['Python', 'ELK Stack', 'Docker', 'SIEM', 'Threat Detection', 'Security'],
    category: 'Security',
    github: 'https://github.com/bradyp19/soc-in-a-box',
    image: '/previews/socinabox.png'
  },
  {
    id: 4,
    title: 'Market Intelligence Agent',
    description: 'Built for my Strategy internship, the project turns product news into actionable insights automatically. An automated Python agent that scrapes, summarizes, and formats product announcements from top AI/BI vendors. With feature extraction, theme grouping, and markdown export, it\'s built for market intelligence posts that keep teams up to speed—minus the manual work.',
    subtitle: 'Automated product news intelligence agent',
    tech: ['Python', 'Web Scraping', 'NLP', 'Automation', 'Data Analysis'],
    category: 'AI/ML',
    github: 'https://github.com/bradyp19/market-intelligence-agent',
    image: '/previews/strategy.png'
  },
  {
    id: 5,
    title: 'Personal Portfolio',
    description: 'A living sandbox for design, code, and storytelling. More than a portfolio, this site is where I experiment with new ideas, rethink my story, and push my skills in React, Tailwind, and product design. Every update is part late-night experiment, part reflection on how I build and share work.',
    subtitle: 'Living sandbox for design and development',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    category: 'Development',
    github: 'https://github.com/bradyp19/personal-portfolio',
    image: '/previews/personalportfolio.png'
  },  
  {
    id: 6,
    title: 'Ouroboros',
    description: 'A multimedia meditation on cycles and renewal, filmed at Morven Field. Created with Adobe Express Suite, Ouroboros weaves together video, photography, and sound to explore how endings feed new beginnings. The looping, arching tree at its center echoes the eternal return of nature—an invitation to see how every stillness is just part of a larger cycle.',
    subtitle: 'Multimedia meditation on cycles and renewal',
    tech: ['Adobe Express Suite', 'Video Production', 'Photography', 'Sound Design'],
    category: 'Creative',
    github: 'https://drive.google.com/file/d/1wxUD_flf0ClRwm5Y4BftPSBpgpQNGZbu/view?usp=drivesdk',
    image: '/previews/ourosboros.png'
  }
]

const experience = [
  {
    title: 'Campus Ambassador',
    company: 'Opennote',
    period: 'August 2025 - Current',
    location: 'Remote',
    description: 'Scaling YC AI note taking company to east coast as Virginia\'s sole ambassador.',
    achievements: [
      'Coming soon...'
    ],
    logo: '/logos/opennotelogo.png'
  },
  {
    title: 'Campus Partner',
    company: 'Perplexity',
    period: 'August 2025 - Current',
    location: 'Remote',
    description: 'Scaling YC AI company to east coast as Virginia\'s sole ambassador.',
    achievements: [
      'Coming soon...'
    ],
    logo: '/logos/Perplexity-Logo.png'
  },
  {
    title: 'Sales Engineering Intern',
    company: 'Strategy (NASDAQ: MSTR)',
    period: 'June 2025 - Aug 2025',
    location: 'Tysons, VA',
    description: 'Working with Fortune 500 companies to demonstrate enterprise analytics solutions and build custom proofs-of-concept.',
    achievements: [
      'Building custom demos and POCs for clients like Netflix, Visa, and USPS',
      'Collaborating with AWS and Google engineers on platform integrations',
      'Demonstrating business value through data analytics solutions'
    ],
    logo: '/logos/strategy.svg'
  },
  {
    title: 'Security Engineering Intern',
    company: 'GuidePoint Security',
    period: 'Jan 2025 - Apr 2025',
    location: 'Remote',
    description: 'Built and optimized security operations infrastructure and automation solutions part of a project-based learning program (CCI).',
    achievements: [
      'Developed simulated SOC environment using Kubernetes and Docker',
      'Integrated Splunk and automated security log processing',
      'Improved threat detection efficiency through automation'
    ],
    logo: '/logos/guidepoint.png'
  },
  {
    title: 'Director of Operations',
    company: 'Technology Strategy Group',
    period: 'Jan 2025 - Present',
    location: 'Charlottesville, VA',
    description: 'Scaled student-run tech consulting organization through operational improvements and partnerships. (100+ clients, 50+ consultants)',
    achievements: [
      'Implemented JIRA for project management',
      'Launched new organization website',
      'Expanded client and consultant base significantly'
    ],
    logo: '/logos/tsg.svg'
  },  {
    title: 'Technology Consultant Intern',
    company: 'INTEREL',
    period: 'Dec 2024 - Jan 2025',
    location: 'Dubai, UAE',
    description: 'Developed AI-based IoT solutions for the smart building hospitality industry (100,000+ units, 300+ countries',
    achievements: [
      'Built smart occupancy detection system without hardware dependencies',
      'Implemented POC in 250-room hotel',
      'Scaled solution for large-scale deployments'
    ],
    logo: '/logos/interel.jpg'
  },  {
    title: 'Technology Consultant Intern',
    company: 'Sentiont LLC',
    period: 'Aug 2024 - Dec 2024',
    location: 'Remote',
    description: 'Led AI access control implementations and compliance initiatives.',
    achievements: [
      'Launched AI-powered access control systems',
      'Developed internal compliance dashboard',
      'Streamlined regulatory compliance processes'
    ],
    logo: '/logos/sentiont.jpg'
  },
  {
    title: 'Data Structures and Algorithms Teaching Assistant',
    company: 'University of Virginia',
    period: 'Jan 2024 - Present',
    location: 'Charlottesville, VA',
    description: 'Supporting 500+ students in DSA courses through instruction and mentorship.',
    achievements: [
      'Lead weekly lab sessions',
      'Provide one-on-one student mentoring',
      'Grade and review student code submissions'
    ],
    logo: '/logos/uva.svg'
  }
]

const achievements = [
  {
    title: 'Full-ride QuestBridge Match Scholarship',
    organization: 'Issued by QuestBridge · Dec 2022',
    associatedOrg: 'University of Virginia',
    year: '2022',
    description: 'Full-ride merit scholarship for low-income students (~1% acceptance rate, 1/15 of UVA Questbridge Match Scholars)',
    logo: '/logos/questbridge.png',
    associatedLogo: '/logos/uva.svg',
    logoStyle: 'prominent'
  },
  {
    title: '2025 Jihoon Rim Foundation Scholarship',
    organization: 'Issued by Jihoon Rim Foundation · Feb 2025',
    associatedOrg: 'Jihoon Rim Foundation',
    year: '2025',
    description: '$5,000 scholarship and life-long mentorship from former CEO of Kakao Corp and NYU Stern Prof. Jihoon Rim.',
    logo: '/logos/jihoon.png',
    associatedLogo: '/logos/jihoon.png',
    logoStyle: 'prominent'
  }
]

const featureCards = [
  {
    title: 'Bain x UVA VCO Case Comp Grand Winner',
    description: 'First place winner among 20+ teams in Bain & Company x UVA Virginia Casing Organization Case Competition',
    icon: '/icons/strategy.svg',
    associatedOrg: 'University of Virginia & Bain',
    associatedLogo: '/logos/uva.svg',
    secondaryLogo: '/logos/bain.png'
  },
  {
    title: 'Echols Scholar',
    description: 'Awarded to the top 5% of students at UVA for academic excellence, intellectual curiosity, and leadership potential',
    icon: '/icons/medal.svg',
    associatedOrg: 'University of Virginia',
    associatedLogo: '/logos/uva.svg'
  },
  {
    title: 'MetaCTF HooHacks CTF Grand Winner',
    description: 'Placed 1st in cyber security collegiate CTF among 30+ collegiate teams @ HooHacks open to all 1000 participants of HooHacks at 2025',
    icon: '/icons/cloud.svg',
    associatedOrg: 'MetaCTF',
    associatedLogo: '/logos/metactf.jpg'
  },
  {
    title: 'Catalyst Program Scholar',
    description: 'Admitted to the selective Catalyst Program at the University of Virginia, ~30% acceptance rate',
    icon: '/icons/lightbulb.svg',
    associatedOrg: 'University of Virginia',
    associatedLogo: '/logos/uva.svg'
  }
]

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Form handling
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  // Intersection observers for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [affiliatedRef, affiliatedInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  // Initialize dark mode based on system preference and saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    let shouldUseDark = false
    
    if (savedTheme) {
      // Use saved preference
      shouldUseDark = savedTheme === 'dark'
    } else {
      // Use system preference
      shouldUseDark = systemPrefersDark
    }
    
    setDarkMode(shouldUseDark)
    
    // Apply the theme to the document
    if (shouldUseDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setDarkMode(e.matches)
        if (e.matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    }
    
    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    // Update localStorage
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
    
    // Update document class
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onSubmit = async (data: any) => {
    // Email handling would go here
    console.log('Form submitted:', data)
    reset()
  }

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-gray-900 dark:text-white flex items-center"
            >
              <span className="mr-2.5">Brady Park</span>
              <motion.div
                initial={{ opacity: 0.8, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Image 
                  src="/icons/southkoreacircle.svg"
                  alt="South Korea"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }}
                />
              </motion.div>
            </motion.div>
              {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Achievements', 'Projects', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >            <div className="px-4 py-3 space-y-1">
              {['About', 'Experience', 'Achievements', 'Projects', 'Skills'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="w-full flex items-center px-3 py-2.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                {darkMode ? <FiSun className="w-4 h-4 mr-2" /> : <FiMoon className="w-4 h-4 mr-2" />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Progress Indicator */}      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-16 left-0 right-0 h-1 bg-blue-600 transform origin-left z-40"
      />
        {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex flex-col lg:flex-row items-center bg-white dark:bg-gray-900 pt-16">
        <div className="w-full flex flex-col lg:flex-row">
          {/* Hero Left - Portrait */}          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[40%] h-[50vh] lg:h-screen relative order-1 lg:order-1"
          >            <Image
              src="/portrait.jpg"
              alt="Brady Park"
              fill
              quality={100}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
              priority
              unoptimized
            />
          </motion.div>

          {/* Hero Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="w-full lg:w-[60%] min-h-[50vh] lg:h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-8 lg:py-0 relative order-2 lg:order-2"
          >
            {/* Subtle Background Accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg
                className="absolute right-0 top-0 w-full h-full opacity-5"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="stop-color-blue-400 stop-opacity-100" />
                    <stop offset="100%" className="stop-color-transparent stop-opacity-0" />
                  </linearGradient>
                </defs>
                <path
                  d="M100 0L20 100L0 0Z"
                  fill="url(#heroGradient)"
                />
              </svg>
            </div>            {/* Main Content */}
            <div className="relative z-10 text-center px-4 sm:px-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8"
                style={{ 
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', 
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' 
                }}
              >
                Brady William 종민 Park
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-4 lg:mt-6 mb-6 lg:mb-10"
              >                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4">
                  {/* Left Knight Icon - Hidden on mobile */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="hidden sm:flex items-center"
                  >
                    <div className="relative flex items-center justify-center">
                      <Image
                        src="/icons/knight.svg"
                        alt="Knight icon"
                        width={25}
                        height={25}
                        className="object-contain opacity-70 dark:opacity-60"
                        style={{ filter: 'grayscale(1)' }}
                      />
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-600 dark:text-gray-400 text-center">
                     Product Strategy meets Technical Execution
                  </h2>

                  {/* Right Rocket Icon - Hidden on mobile */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="hidden sm:flex items-center"
                  >
                    <div className="relative flex items-center justify-center">                      <Image 
                        src="/icons/rocket.svg"
                        alt="Rocket icon"
                        width={30}
                        height={30}
                        className="object-contain opacity-70 dark:opacity-60"
                        style={{ filter: 'grayscale(1)' }}
                      />
                    </div>
                  </motion.div>
                </div>
                {/* Enhanced accent underline with gradient */}
                <div className="relative h-1 mx-auto" style={{ width: 'calc(100% - 8rem)' }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/90 to-transparent dark:via-blue-400/90 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent dark:via-blue-400/30 rounded-full blur-sm transform translate-y-1"></div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg sm:text-xl lg:text-xl text-blue-600 dark:text-blue-400 font-medium mb-6 lg:mb-8 leading-relaxed px-4"
              >
                Developer. Strategist. Pickleball enthusiast. Faith and curiosity at the core.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-base sm:text-lg italic text-gray-600 dark:text-gray-400 mb-12 lg:mb-20 px-4"
              >
                QuestBridge & Echols Scholar at UVA, crafting and scaling AI data-driven solutions.
              </motion.p>              {/* Feature Grid */}
              <motion.div
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delayChildren: 0.6,
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 max-w-3xl mx-auto px-4"
              >                {[
                  {
                    title: 'About',
                    subtitle: 'Personal background and vision',
                    icon: '/icons/book.svg'
                  },
                  {
                    title: 'Experience',
                    subtitle: 'Professional journey and roles',
                    icon: '/icons/graduation.svg'
                  },
                  {
                    title: 'Projects',
                    subtitle: 'Solo and team product developments',
                    icon: '/icons/laptop.svg'
                  },
                  {
                    title: 'Achievements',
                    subtitle: 'Awards and recognition',
                    icon: '/icons/medal.svg'
                  }
                ].map((card, idx) => (
                  <motion.div
                    key={card.title}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.95 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1]
                        }
                      }
                    }}                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 hover:border-blue-200/50 dark:hover:border-blue-700/50"
                  >                    {/* Card Header with Icon Space */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">                      {/* Icon */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 mt-1 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Image 
                          src={card.icon}
                          alt={`${card.title} icon`}
                          width={24}
                          height={24}
                          className="opacity-70 dark:opacity-90"
                          style={{ filter: 'grayscale(0.2)' }}
                        />
                      </div>
                      
                      {/* Card Content */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>      {/* Affiliated With Section */}
      <section ref={affiliatedRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Affiliated with
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Logo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              className="flex items-center justify-center h-20 sm:h-24 lg:h-28 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/logos/uva.svg"
                alt="University of Virginia"
                width={0}
                height={100}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: 'auto', height: '80px' }}
                priority
              />
            </motion.div>

            {/* Perplexity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              className="flex items-center justify-center h-20 sm:h-24 lg:h-28 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/logos/Perplexity-Logo.png"
                alt="Perplexity AI"
                width={160}
                height={100}
                className="w-auto h-auto max-h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                priority
              />
            </motion.div>

            {/* Opennote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              className="flex items-center justify-center h-20 sm:h-24 lg:h-28 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/logos/opennotelogo.png"
                alt="Opennote YC S25"
                width={160}
                height={100}
                className="w-auto h-auto max-h-24 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                priority
              />
            </motion.div>

            {/* Technology Strategy Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              className="flex items-center justify-center h-20 sm:h-24 lg:h-28 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
            >
              <Image
                src="/logos/tsg.svg"
                alt="Technology Strategy Group"
                width={0}
                height={100}
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: 'auto', height: '80px' }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Decorative Background Pattern - Puzzle & Gears */}
        <div className="absolute inset-0 pointer-events-none">          {/* Top Row */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-12 left-16 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/gears2.svg" alt="" width={45} height={45} />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-1/3 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/puzzle.svg" alt="" width={35} height={35} />
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-16 right-1/4 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/gears2.svg" alt="" width={40} height={40} />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute top-24 right-12 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/puzzle.svg" alt="" width={50} height={50} />
          </motion.div>
          
          {/* Middle Row */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-8 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/puzzle.svg" alt="" width={38} height={38} />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/gears2.svg" alt="" width={32} height={32} />
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 right-16 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/puzzle.svg" alt="" width={42} height={42} />
          </motion.div>
            {/* Bottom Row */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/gears2.svg" alt="" width={48} height={48} />
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-16 left-2/3 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/puzzle.svg" alt="" width={36} height={36} />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-24 right-20 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/gears2.svg" alt="" width={44} height={44} />
          </motion.div>
          
          {/* Additional scattered elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 left-1/4 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/puzzle.svg" alt="" width={28} height={28} />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 right-1/3 opacity-25 dark:opacity-15"
          >
            <Image src="/icons/gears2.svg" alt="" width={34} height={34} />
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="relative">
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto px-4">
                Always asking, never settling, building what's next.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6 sm:space-y-8"
            >
              {/* Origins */}
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  Origins
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  I was always that kid asking too many questions in class, pulling things apart just to see how they worked. 
                  I discovered Scratch at the age of 10 and it was game over for me. By the time I finished elementary school, 
                  I had built multiple games that hit the front page, racking up 70,000 plays and 20,000 favorites.
                </p>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full mr-3"></div>
                  Challenges
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Growing up in a single-mother household with an autistic brother, I learned early how to adapt and take on 
                  responsibility. I didn't always have the time or resources to dive deep into my passions, but it taught me to 
                  be scrappy, empathetic, and resourceful.
                </p>
              </div>

              {/* Today */}
              <div>
                <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full mr-3"></div>
                  Today
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Earning a full-ride scholarship to UVA opened the doors. There, I realized my love for tech was matched by my 
                  love for people, connecting dots between ideas and the humans behind them. I am driven by both the "how" and the 
                  "why," blending business strategy with hands-on software execution.
                </p>
              </div>              {/* Inspirational Quote */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-l-4 border-blue-500"
              >
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                  "No one knows what the future holds. That's why its potential is infinite."
                </blockquote>
                <cite className="text-sm text-gray-500 dark:text-gray-400">— Rintarou Okabe, Steins;Gate</cite>
              </motion.div>
            </motion.div>            {/* Photo Space */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1 flex flex-col items-center"
            >              {/* Photo placeholder - ready for joelgrad.jpg */}              <div className="w-96 h-[480px] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/joelgrad.jpg"
                  alt="Brady's graduation photo"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
             From one obsession to the next, here's the map so far.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4 sm:gap-6"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow relative"
              >                {exp.logo && (
                  <div className="absolute top-4 right-4">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={60}
                      height={60}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain opacity-80"
                    />
                  </div>
                )}
                <div className="pr-16 sm:pr-20">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {exp.achievements.map((achievement) => (
                        <li key={`${exp.company}-${achievement}`} className="flex items-start">
                          <Star className="w-3 h-3 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" ref={achievementsRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Boss fights won, levels completed, and badges earned.
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
              >                {achievement.logo && (
                  <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 ${achievement.logoStyle === 'prominent' ? 'opacity-30' : 'opacity-10'}`}>
                    <Image
                      src={achievement.logo}
                      alt="Organization logo"
                      width={achievement.logoStyle === 'prominent' ? 50 : 35}
                      height={achievement.logoStyle === 'prominent' ? 50 : 35}
                      className="object-contain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    />
                  </div>
                )}
                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-500 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm sm:text-base">{achievement.organization}</p>
                {achievement.associatedOrg && (
                  <div className="flex flex-col items-center justify-center gap-2 mb-2">
                    <div className="flex items-center justify-center gap-2">
                      {achievement.associatedLogo && (
                        <Image
                          src={achievement.associatedLogo}
                          alt={`${achievement.associatedOrg} logo`}
                          width={16}
                          height={16}
                          className="opacity-70 w-4 h-4"
                        />
                      )}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        Associated with {achievement.associatedOrg}
                      </p>
                    </div>
                  </div>
                )}
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={achievementsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 dark:bg-gray-700 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={24}
                    height={24}
                    className="opacity-70 dark:opacity-90 w-6 h-6 sm:w-8 sm:h-8"
                    style={{ filter: 'grayscale(0.2)' }}
                  />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{card.title}</h3>
                {card.associatedOrg && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-2">
                    {card.associatedLogo && (
                      <Image
                        src={card.associatedLogo}
                        alt="Associated organization logo"
                        width={16}
                        height={16}
                        className="opacity-70 w-4 h-4"
                      />
                    )}
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center">
                      Associated with {card.associatedOrg}
                    </p>
                    {card.secondaryLogo && (
                      <Image
                        src={card.secondaryLogo}
                        alt="Secondary organization logo"
                        width={16}
                        height={16}
                        className="opacity-70 w-4 h-4 sm:ml-1"
                      />
                    )}
                  </div>
                )}
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"> Projects</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
              Where curiosity meets Celsius & questionable sleep schedules.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-40 sm:h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className={`transition-transform duration-300 hover:scale-105 ${
                        project.id === 4 ? 'object-contain p-4' : 'object-cover'
                      }`}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <FiCode className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Project Preview</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex flex-col h-full">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-sm sm:text-base">{project.subtitle}</p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed text-sm sm:text-base line-clamp-4 flex-grow">
                    {project.description.length > 150 ? project.description.substring(0, 150) + '...' : project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-gray-500 dark:text-gray-400 text-xs">+{project.tech.length - 4} more</span>
                    )}
                  </div>
                  
                  <div className="flex justify-center mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-medium flex items-center justify-center w-full max-w-[200px] h-10"
                    >
                      {project.title === 'Ouroboros' ? (
                        <>
                          <FiExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </>
                      ) : (
                        <>
                          <FiGithub className="w-3 h-3 mr-1" />
                          {project.github === '#' ? 'Coming Soon' : 'View on GitHub'}
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Devote My Other Time To Section */}
      <section id="skills" ref={skillsRef} className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Devote My Other Time To</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
              The passions and activities I pursue in my freetime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                name: "Fellowshipping",
                icon: "/icons/cross.svg",
                description: "GCF, XA, Center Church, & ODPC Salt",
                dedication: 100,
                color: "from-indigo-500 to-purple-500",
                bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
              },
              {
                name: "Lifting Weights",
                icon: "/icons/dumbbell.svg",
                description: "6+ years & currently on PPL/Arnold",
                dedication: 95,
                color: "from-red-500 to-orange-500",
                bgColor: "bg-red-50 dark:bg-red-900/20"
              },
              {
                name: "Sports",
                icon: "/icons/basketball.svg",
                description: "Pickleball, basketball, and boxing are my favorites.",
                dedication: 83,
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
              },
              {
                name: "Practicing Instruments",
                icon: "/icons/guitar.svg",
                description: "Electric (Les Paul) & acoustic guitar, vocals, keys and drums (novice)",
                dedication: 80,
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-50 dark:bg-blue-900/20"
              },
              {
                name: "Reading Manga",
                icon: "/icons/naruto.svg",
                description: "600+ mangas read.",
                dedication: 65,
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50 dark:bg-green-900/20"
              },
              {
                name: "Choir",
                icon: "/icons/music.svg",
                description: "UVA Glee Club, low bass",
                dedication: 40,
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-50 dark:bg-purple-900/20"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative p-4 sm:p-6 ${activity.bgColor} backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${activity.color} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                      <Image
                        src={activity.icon}
                        alt={`${activity.name} icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6 sm:w-7 sm:h-7 opacity-90 filter brightness-0 invert"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {activity.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>

                  {/* Joy & Dedication Meter */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                        Joy & Dedication
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                              i < Math.floor(activity.dedication / 20)
                                ? `bg-gradient-to-r ${activity.color}`
                                : 'bg-gray-200 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 sm:h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${activity.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={skillsInView ? { width: `${activity.dedication}%` } : {}}
                        transition={{ duration: 1.2, delay: index * 0.15 + 0.3 }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating elements for extra visual interest */}
                  <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-white dark:bg-gray-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <div className={`w-full h-full bg-gradient-to-br ${activity.color} rounded-full animate-pulse`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Contact Section */}
      <section id="contact" className="py-8 sm:py-10 lg:py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-8 py-4 sm:py-6 bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl px-4"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-gray-800 dark:text-gray-100">Open to new ideas, feedback, or collaborations</h2>
          </motion.div>

          {/* Layout */}
          <div className="flex flex-col lg:flex-row gap-3 items-stretch">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[70%] bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 shadow-md"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">Valid email is required</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white resize-vertical"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">Message is required</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[30%] space-y-3"
            >
              {/* LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/brady-park-9ab3bb212/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-24 sm:h-28 lg:h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              >
                <FiLinkedin className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </motion.a>

              {/* GitHub Button */}
              <motion.a
                href="https://github.com/bradyp19"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-24 sm:h-28 lg:h-32 bg-gradient-to-br from-gray-700 to-gray-800 dark:from-gray-600 dark:to-gray-700 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
              >
                <FiGithub className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-6 sm:py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 dark:border-gray-700 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center sm:text-left">
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                © 2025 Brady Park. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                <span>Built with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-red-500"
                >
                  ❤️
                </motion.span>
                <span>using Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-blue-600 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        >
          <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      )}
    </div>
  )
}