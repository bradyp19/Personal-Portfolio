'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '@/data/portfolio'

export default function FlagshipSystems() {
  return (
    <section id="projects" className="py-16 border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 font-semibold">[01]</span>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Selected Systems & Projects
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
            0-to-1 Systems & Production Tooling
          </span>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((proj, idx) => (
            <motion.article
              key={proj.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="group p-5 sm:p-6 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-xs transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-2">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 tracking-tight">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">
                    — {proj.subtitle}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500 self-start sm:self-auto bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200/60">
                  {proj.year}
                </span>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed max-w-3xl mb-4">
                {proj.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs font-mono">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-zinc-50 border border-zinc-200/80 text-zinc-600 text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-700 hover:text-zinc-950 font-medium inline-flex items-center gap-1 group/link"
                    >
                      <span>source code</span>
                      <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-700 hover:text-zinc-950 font-medium inline-flex items-center gap-1 group/link"
                    >
                      <span>live demo</span>
                      <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
