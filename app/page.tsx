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
  { name: 'Full-Stack Development', level: 95, category: 'Technical' },
  { name: 'Product Strategy', level: 90, category: 'Business' },
  { name: 'AI/ML Implementation', level: 85, category: 'Technical' },
  { name: 'Team Leadership', level: 88, category: 'Leadership' },
  { name: 'Data Analytics', level: 92, category: 'Technical' },
  { name: 'UI/UX Design', level: 80, category: 'Design' }
]

const projects = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'Built end-to-end ML pipeline for predictive analytics with 94% accuracy',
    tech: ['Python', 'TensorFlow', 'React', 'AWS'],
    category: 'AI/ML',
    image: '/projects/ai-platform.jpg',
    demo: 'https://demo.example.com',
    github: 'https://github.com/bradyp19',
    metrics: { users: '10K+', performance: '40% faster', impact: '$2M saved' }
  },
  {
    id: 2,
    title: 'Full-Stack E-commerce Solution',
    description: 'Scalable marketplace with real-time features and payment processing',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Web Development',
    image: '/projects/ecommerce.jpg',
    demo: 'https://demo.example.com',
    github: 'https://github.com/bradyp19',
    metrics: { transactions: '50K+', uptime: '99.9%', revenue: '$500K+' }
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for business intelligence and reporting',
    tech: ['D3.js', 'React', 'Python', 'FastAPI'],
    category: 'Data Science',
    image: '/projects/dashboard.jpg',
    demo: 'https://demo.example.com',
    github: 'https://github.com/bradyp19',
    metrics: { insights: '200+', efficiency: '60% faster', adoption: '95%' }
  }
]

const experience = [
  {
    title: 'Product Strategy Intern',
    company: 'Strategy One (MicroStrategy)',
    period: 'Summer 2024',
    location: 'Tysons, VA',
    description: 'Led product strategy initiatives and cross-functional collaboration',
    achievements: ['Improved user engagement by 25%', 'Launched 3 new features', 'Led team of 5 developers']
  },
  {
    title: 'Full-Stack Developer',
    company: 'TSG',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Built scalable web applications and managed development lifecycle',
    achievements: ['Deployed 10+ applications', 'Reduced load time by 40%', 'Mentored junior developers']
  },
  {
    title: 'Echols Scholar',
    company: 'University of Virginia',
    period: '2022 - Present',
    location: 'Charlottesville, VA',
    description: 'Full-ride scholarship recipient with focus on Computer Science and Business',
    achievements: ['Dean\'s List 4 semesters', 'Founded tech club', 'Research publications']
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Product Manager',
    company: 'Strategy One',
    content: 'Brady consistently delivered exceptional results and showed remarkable leadership skills. His technical depth combined with strategic thinking made him invaluable to our team.',
    avatar: '/testimonials/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'TSG',
    content: 'Working with Brady was transformative for our development process. He brought both innovation and reliability to every project he touched.',
    avatar: '/testimonials/michael.jpg'
  }
]

const achievements = [
  {
    title: 'Echols Scholar',
    organization: 'University of Virginia',
    year: '2022',
    description: 'Full-ride merit scholarship awarded to top 5% of incoming students'
  },
  {
    title: 'Hackathon Winner',
    organization: 'HooHacks 2023',
    year: '2023',
    description: 'First place for AI-powered sustainability solution'
  },
  {
    title: 'Dean\'s List',
    organization: 'UVA School of Engineering',
    year: '2022-2024',
    description: 'Consistent academic excellence with 3.8+ GPA'
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
  const [affiliatedRef, affiliatedInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
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
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiDownload className="w-4 h-4 mr-2" />
                Resume
              </a>
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
          >
            <div className="px-4 py-2 space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Progress Indicator */}      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-16 left-0 right-0 h-1 bg-blue-600 transform origin-left z-40"
      />
        {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center bg-white dark:bg-gray-900 pt-16">
        <div className="w-full flex">
          {/* Hero Left - Portrait */}          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-[40%] h-screen relative"
          >            <Image
              src="/portrait.jpg"
              alt="Brady Park"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, 40vw"
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
            className="w-[60%] h-screen flex flex-col justify-center px-16 relative"
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
            <div className="relative z-10 text-center px-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl font-bold text-gray-900 dark:text-white mb-8"
                style={{ 
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)', 
                  filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' 
                }}
              >
                Brady William Park
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 mb-10"
              >                <div className="flex items-center justify-center gap-4 mb-4">
                  {/* Left Knight Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="flex items-center"
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
                  <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-400">
                     Product Strategy meets Technical Execution
                  </h2>

                  {/* Right Rocket Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="flex items-center"
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
                className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8 leading-relaxed"
              >
                Self-made immigrant turned full-ride CS scholar at UVA, now supporting AI & data-driven solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-base italic text-gray-600 dark:text-gray-400 mb-20"
              >
                I build scalable products that blend data, design, and real-world impact.
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
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl mx-auto px-4"
              >                {[
                  {
                    title: 'About',
                    subtitle: 'Personal background and vision',
                    icon: '/icons/book.svg'
                  },
                  {
                    title: 'Experience',
                    subtitle: 'Work, leadership, and growth',
                    icon: '/icons/graduation.svg'
                  },
                  {
                    title: 'Projects',
                    subtitle: 'End-to-end product & tech builds',
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
                    className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl p-8 cursor-pointer transition-all duration-300 border border-gray-100/50 dark:border-gray-700/50 hover:border-blue-200/50 dark:hover:border-blue-700/50"
                  >                    {/* Card Header with Icon Space */}
                    <div className="flex items-start gap-4 mb-6">                      {/* Icon */}
                      <div className="w-10 h-10 mt-1 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Image 
                          src={card.icon}
                          alt={`${card.title} icon`}
                          width={28}
                          height={28}
                          className="opacity-70 dark:opacity-90"
                          style={{ filter: 'grayscale(0.2)' }}
                        />
                      </div>
                      
                      {/* Card Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
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
      <section ref={affiliatedRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Affiliated with
            </h2>
            <div className="w-32 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Logo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* University of Virginia */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.08,
                filter: "brightness(1.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              className="flex items-center justify-center h-28 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/logos/uva.svg"
                alt="University of Virginia"
                width={0}
                height={100}
                className="h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: 'auto', height: '96px' }}
                priority
              />
            </motion.div>

            {/* Strategy One */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.08,
                filter: "brightness(1.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              className="flex items-center justify-center h-28 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/logos/strategy.svg"
                alt="Strategy One (MicroStrategy)"
                width={0}
                height={80}
                className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: 'auto', height: '80px' }}
                priority
              />
            </motion.div>

            {/* Technology Strategy Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={affiliatedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ 
                scale: 1.08,
                filter: "brightness(1.1)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
              className="flex items-center justify-center h-28 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src="/logos/tsg.svg"
                alt="Technology Strategy Group"
                width={0}
                height={100}
                className="h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: 'auto', height: '96px' }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">        {/* Decorative Background Pattern - Puzzle & Gears */}
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
            className="text-center mb-16"
          >            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>            <div className="relative">
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                Always asking, never settling, building what’s next.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Origins */}
              <div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                  Origins
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
            >              {/* Photo placeholder - ready for joelgrad.jpg */}
              <div className="w-80 h-96 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/joelgrad.jpg"
                  alt="Brady's graduation photo"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Recognition and milestones that reflect my commitment to excellence and impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"          >
            {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{achievement.organization}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.year}</p>
                  <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                </motion.div>
              ))}
          </motion.div>
        </div>      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Building impactful solutions across diverse environments
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-4 md:mt-0">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{exp.period}</span>
                    <span className="text-gray-500 dark:text-gray-500 text-sm flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive skill set spanning technical depth and strategic thinking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{skill.category}</span>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={skillsInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              End-to-end solutions that blend technical innovation with real-world impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FiCode className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Project Preview</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <div key={metricIndex}>
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center text-sm font-medium flex items-center justify-center"
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center text-sm font-medium flex items-center justify-center"
                    >
                      <FiGithub className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Feedback from colleagues and collaborators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Ready to build something amazing together?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about technology and product strategy.
                </p>
              </div>              <div className="space-y-6">
                {[
                  { icon: FiMail, label: 'Email', value: 'apu9pz@virginia.edu', href: 'mailto:apu9pz@virginia.edu' },
                  { icon: FiGithub, label: 'GitHub', value: 'github.com/bradyp19', href: 'https://github.com/bradyp19' },
                  { icon: FiLinkedin, label: 'LinkedIn', value: 'Brady Park', href: 'https://www.linkedin.com/in/brady-park-9a5469208/' }
                ].map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                  >
                    <div className="text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{contact.label}</p>
                      <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                    </div>
                  </a>
                  )
                })}
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Let's Build Together</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Whether you're looking for a technical co-founder, product strategist, or full-stack developer, I'm here to help turn ideas into reality.
                </p>
                <div className="flex space-x-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Available for Projects</span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Open to Opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>{/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center space-y-6">
            {/* Email Link */}
            <a
              href="mailto:apu9pz@virginia.edu"
              className="text-2xl font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              apu9pz@virginia.edu
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-8">
              <a
                href="https://www.linkedin.com/in/brady-park-9a5469208/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/bradyp19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
            </div>
            
            {/* Credit */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-40"
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  )
}