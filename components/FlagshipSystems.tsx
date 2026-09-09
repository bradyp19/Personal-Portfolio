'use client'

import React from 'react'
import { PROJECTS } from '@/data/portfolio'

export default function FlagshipSystems() {
  return (
    <section id="projects" className="py-16 border-b border-[#1E2026]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-serif text-white mb-8 tracking-tight">
          Selected Projects
        </h2>

        <div className="space-y-10">
          {PROJECTS.map((proj) => (
            <article
              key={proj.title}
              className="space-y-2.5 pb-8 border-b border-[#1A1C22] last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    {proj.title}
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">
                    {proj.subtitle}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {proj.year}
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
                {proj.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs font-mono">
                <div className="text-zinc-500">
                  {proj.tech.join(' · ')}
                </div>

                <div className="flex items-center gap-4 text-zinc-400">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-colors"
                    >
                      source code →
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-colors"
                    >
                      live demo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
