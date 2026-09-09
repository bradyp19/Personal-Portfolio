'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PROFILE } from '@/data/portfolio'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8"
        >
          <div className="max-w-2xl space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                <span className="text-zinc-900 font-semibold">[00]</span>
                <span>SYSTEMS & PRODUCT STRATEGY</span>
                <span className="text-zinc-300">/</span>
                <span>CHARLOTTESVILLE & NYC</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
                {PROFILE.name}
              </h1>

              <p className="text-sm font-mono text-zinc-600">
                CS @ University of Virginia · Incoming @ GitHub & IBM
              </p>
            </div>

            <p className="text-base text-zinc-600 leading-relaxed font-sans">
              {PROFILE.intro}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono pt-1 text-zinc-600">
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-zinc-900 hover:border-zinc-900 transition-colors shadow-xs"
              >
                email ↗
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-zinc-900 hover:border-zinc-900 transition-colors shadow-xs"
              >
                github ↗
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-white border border-zinc-200 text-zinc-900 hover:border-zinc-900 transition-colors shadow-xs"
              >
                linkedin ↗
              </a>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs"
              >
                resume (pdf) ↗
              </a>
            </div>
          </div>

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-xs flex-shrink-0 relative group">
            <Image
              src="/portrait.jpg"
              alt="Brady Park"
              fill
              priority
              sizes="112px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
