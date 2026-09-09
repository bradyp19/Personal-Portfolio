'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '@/data/portfolio'

export default function TechMatrix() {
  return (
    <section id="stack" className="py-16 border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 font-semibold">[03]</span>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Tools & Primitives
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
            Engineering & Strategic Toolkit
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="p-5 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-xs transition-all duration-200"
            >
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-50 border border-zinc-200/70 text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 hover:bg-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
