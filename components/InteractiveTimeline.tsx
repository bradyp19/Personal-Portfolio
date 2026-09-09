'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { TIMELINE_ENTRIES } from '@/data/portfolio'

export default function InteractiveTimeline() {
  const [filter, setFilter] = useState<'all' | 'work' | 'milestone'>('all')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const entries = TIMELINE_ENTRIES.filter(
    (e) => filter === 'all' || e.category === filter
  )

  return (
    <section id="experience" className="py-16 border-b border-[#1E2026]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
          <h2 className="text-xl font-serif text-white tracking-tight">
            Experience & Milestones
          </h2>

          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
            {(['all', 'work', 'milestone'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`transition-colors lowercase ${
                  filter === tab
                    ? 'text-white font-medium border-b border-white pb-0.5'
                    : 'hover:text-zinc-300'
                }`}
              >
                {tab === 'all' ? 'all' : tab === 'work' ? 'work' : 'milestones'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {entries.map((entry, idx) => {
            const isHovered = hoveredIndex === idx

            return (
              <div
                key={`${entry.org}-${entry.period}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-4 rounded-lg border transition-all duration-150 ${
                  isHovered
                    ? 'bg-[#121418] border-[#2E313C]'
                    : 'bg-transparent border-[#18191F] hover:border-[#22242B]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    {entry.logo && (
                      <div className="w-8 h-8 rounded bg-[#16181F] border border-[#22252F] flex items-center justify-center p-1.5 flex-shrink-0 mt-0.5">
                        <Image
                          src={entry.logo}
                          alt={entry.org}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-sm font-medium text-white">
                          {entry.org}
                        </span>
                        <span className="text-xs text-zinc-400 font-mono">
                          — {entry.role}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                        {entry.detail}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="text-xs font-mono text-zinc-500 block">
                      {entry.period}
                    </span>
                    {entry.highlight && (
                      <span className="text-[11px] font-mono text-zinc-400 block mt-1">
                        {entry.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
