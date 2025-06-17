'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

// Trusted by logos data
const trustedBy = [
  { name: 'UVA', src: '/logos/uva.svg', alt: 'University of Virginia' },
  { name: 'Strategy One', src: '/logos/strategy.svg', alt: 'Strategy One (MicroStrategy)' },
  { name: 'TSG', src: '/logos/tsg.svg', alt: 'TSG' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row overflow-hidden">
        {/* Left Panel - Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:w-[42%] h-[50vh] lg:h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800"
        >
          <div className="relative w-full h-full">
            <Image
              src="/portrait.jpg"
              alt="Brady Park"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover object-left transition-all duration-500"
              priority
            />
          </div>
        </motion.div>

        {/* Right Panel - Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-7/12 p-12 flex flex-col justify-center relative"
        >
          {/* Background Accent */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 dark:from-blue-900 dark:to-purple-900" />
            <svg
              className="absolute right-0 top-0 w-full h-full opacity-5"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M100 0L0 100L0 0Z"
                className="fill-current text-blue-500 dark:text-blue-400"
              />
            </svg>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-purple-200 dark:bg-purple-800 blur-3xl" />
              <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-blue-200 dark:bg-blue-800 blur-3xl" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: 0.1 
            }}
            className="relative shadow-xl shadow-gray-200/20 dark:shadow-black/20 rounded-2xl p-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 mb-6"
            >
              Brady Park
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8"
            >
              Product Strategy meets Technical Execution
            </motion.p>

            {/* Hero Callout */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
            >
              Completely self-made immigrant turned full-ride Echols Scholar at UVA, now building AI-driven and full-stack solutions that scale.
            </motion.p>

            {/* Personal Motto */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base italic text-gray-500 dark:text-gray-500 mb-10"
            >
              I build scalable products that blend data, design, and real-world impact.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12"
            >
              <a
                href="mailto:apu9pz@virginia.edu"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Let's Connect
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.7,
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-2 gap-4 mt-6 ml-4"
            >
              {[
                {
                  title: 'About',
                  subtitle: 'Personal background and vision'
                },
                {
                  title: 'Experience',
                  subtitle: 'Work, leadership, and growth'
                },
                {
                  title: 'Projects',
                  subtitle: 'End-to-end product & tech builds'
                },
                {
                  title: 'Achievements',
                  subtitle: 'Awards and recognition'
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
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 cursor-pointer"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {card.subtitle}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted By Section */}
      <div className="w-full py-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center mb-8">
            Where I'm Working Right Now
          </p>
          <div className="grid grid-cols-3 gap-3 items-center">
            <motion.div
              key={trustedBy[0].name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-24 w-full flex items-center justify-center"
            >
              <Image
                src={trustedBy[0].src}
                alt={trustedBy[0].alt}
                width={0}
                height={0}
                className="h-20 w-auto object-contain max-w-full"
                style={{ width: 'auto', height: '100px' }}
                priority
              />
            </motion.div>
            <motion.div
              key={trustedBy[1].name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-20 w-full flex items-center justify-center"
            >
              <Image
                src={trustedBy[1].src}
                alt={trustedBy[1].alt}
                width={0}
                height={0}
                className="h-16 w-auto object-contain max-w-full"
                style={{ width: 'auto', height: '64px' }}
                priority
              />
            </motion.div>
            <motion.div
              key={trustedBy[2].name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-24 w-full flex items-center justify-center"
            >
              <Image
                src={trustedBy[2].src}
                alt={trustedBy[2].alt}
                width={0}
                height={0}
                className="h-20 w-auto object-contain max-w-full"
                style={{ width: 'auto', height: '130px' }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex items-center gap-12">
            <a
              href="mailto:apu9pz@virginia.edu"
              className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <FiMail className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/bradyp19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <FiGithub className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/brady-park-9a5469208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <FiLinkedin className="h-8 w-8" />
            </a>
          </div>
          <p className="text-sm">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
} 