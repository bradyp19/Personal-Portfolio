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
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-gray-900 dark:text-white"
            >
              Brady Park
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

      {/* Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-16 left-0 right-0 h-1 bg-blue-600 transform origin-left z-40"
      />

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Panel - Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2 mb-8 lg:mb-0"
            >
              <div className="relative w-96 h-96 mx-auto">
                <Image
                  src="/portrait.jpg"
                  alt="Brady Park"
                  fill
                  quality={100}
                  className="object-cover rounded-full shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20" />
              </div>
            </motion.div>

            {/* Right Panel - Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-1/2 lg:pl-12 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 mb-6"
              >
                Brady Park
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8"
              >
                Product Strategy meets Technical Execution
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
              >
                Self-made immigrant turned full-ride Echols Scholar at UVA, now building AI-driven and full-stack solutions that scale.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  Let's Connect
                  <FiMail className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
                >
                  View Projects
                  <FiExternalLink className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From immigrant to Echols Scholar to product strategist - my journey is driven by the belief that technology should solve real problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Born in South Korea, I immigrated to the United States with a dream and determination to make an impact. 
                  Through hard work and perseverance, I earned a full-ride Echols Scholarship to the University of Virginia.
                </p>
                <p>
                  Today, I bridge the gap between technical innovation and business strategy, building products that scale 
                  and solve real-world problems. My experience spans from AI/ML implementations to full-stack development.
                </p>
                <p>
                  I believe in the power of technology to create positive change, and I'm passionate about mentoring others 
                  who share this vision.
                </p>
              </div>
            </motion.div>            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Target, label: "Mission-Driven", value: "Impact First" },
                { icon: Users, label: "Team Player", value: "Collaborative" },
                { icon: BookOpen, label: "Continuous Learning", value: "Growth Mindset" },
                { icon: Heart, label: "Passionate", value: "About Technology" }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center">
                    <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.label}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              A journey of growth, leadership, and impact
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{exp.period}</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{exp.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                    </div>
                  ))}
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
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              End-to-end solutions that blend innovation with impact
            </p>
            
            {/* Project Filter */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white dark:bg-gray-900 rounded-lg p-1 shadow-lg">
                {['All', 'AI/ML', 'Web Development', 'Data Science'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedFilter === filter
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiCode className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i}>
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-center py-2 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors text-sm font-semibold"
                    >
                      Code
                    </a>
                  </div>
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
              A comprehensive toolkit for building impactful solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.category}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full"
                  />
                </div>
                <div className="text-right text-sm text-gray-600 dark:text-gray-400">{skill.level}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Feedback from colleagues and mentors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Recognition and milestones along the journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center mb-8">
            Currently Working With
          </p>
          <div className="grid grid-cols-3 gap-8 items-center">
            {trustedBy.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-16"
              >
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={0}
                  height={0}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ width: 'auto', height: '48px' }}
                  priority
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Brady Park</h3>
              <p className="text-gray-400 mb-4">
                Building the future, one line of code at a time.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:apu9pz@virginia.edu" className="text-gray-400 hover:text-white transition-colors">
                  <FiMail className="w-5 h-5" />
                </a>
                <a href="https://github.com/bradyp19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FiGithub className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/brady-park-9a5469208/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FiLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <p className="text-gray-400 mb-2">Ready to collaborate?</p>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FiMail className="w-4 h-4 mr-2" />
                Let's Talk
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Brady Park. Built with Next.js & Tailwind CSS.
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