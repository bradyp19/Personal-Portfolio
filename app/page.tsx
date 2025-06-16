'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-6 py-12">
      {/* Hero Text */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Brady Park
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Product Strategy meets Technical Execution
      </motion.p>

      {/* Feature Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {[
          {
            href: '/about',
            title: 'About',
            subtitle: 'Personal background and vision'
          },
          {
            href: '/experience',
            title: 'Experience',
            subtitle: 'Work, leadership, and growth'
          },
          {
            href: '/projects',
            title: 'Projects',
            subtitle: 'End-to-end product & tech builds'
          },
          {
            href: '/achievements',
            title: 'Achievements',
            subtitle: 'Awards and recognition'
          }
        ].map((card, idx) => (
          <motion.div
            key={card.title}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }
            }}
          >
            <Link href={card.href} className="block">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {card.subtitle}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 