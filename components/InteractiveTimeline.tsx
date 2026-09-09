'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { TIMELINE_ENTRIES } from '@/data/portfolio'

export default function InteractiveTimeline() {
  const [filter, setFilter] = useState<'all' | 'work' | 'milestone'>('all')

  const entries = TIMELINE_ENTRIES.filter(
    (e) => filter === 'all' || e.category === filter
  )

  const isCurrentOrIncoming = (period: string) => {
    const lower = period.toLowerCase()
    return lower.includes('present') || lower.includes('2026')
  }

  return (
    <section id="experience" className="py-16 border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header with indexed indicator & sliding filter pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 font-semibold">[02]</span>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Experience & Milestones
            </h2>
          </div>

          <div className="flex items-center p-1 rounded-full bg-zinc-100 border border-zinc-200/80 self-start sm:self-auto text-xs font-mono">
            {(['all', 'work', 'milestone'] as const).map((tab) => {
              const isActive = filter === tab
              const label = tab === 'all' ? 'all' : tab === 'work' ? 'work' : 'milestones'
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`relative px-3 py-1 rounded-full transition-colors duration-200 ${
                    isActive ? 'text-white font-medium' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTimelineTab"
                      className="absolute inset-0 bg-zinc-900 rounded-full shadow-xs"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Vertical Track Line Feed */}
        <div className="relative">
          {/* Vertical Spine Line */}
          <div className="absolute left-4 sm:left-5 top-3 bottom-4 w-px bg-zinc-200" />

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {entries.map((entry, idx) => {
                const isCurrent = isCurrentOrIncoming(entry.period)

                return (
                  <motion.div
                    key={`${entry.org}-${entry.period}`}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25, delay: idx * 0.03 }}
                    className="relative pl-11 sm:pl-14 group"
                  >
                    {/* Node Dot on Vertical Spine */}
                    <div className="absolute left-4 sm:left-5 -translate-x-1/2 top-4 z-10 flex items-center justify-center">
                      {isCurrent ? (
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600 border-2 border-white shadow-xs" />
                        </span>
                      ) : (
                        <div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-zinc-300 group-hover:border-zinc-900 transition-colors shadow-xs" />
                      )}
                    </div>

                    {/* Entry Card */}
                    <div className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-xs transition-all duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-3.5">
                          {/* Soft Squircle Logo Badge */}
                          {entry.logo ? (
                            <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200/80 p-1.5 shadow-xs flex items-center justify-center flex-shrink-0 group-hover:border-zinc-300 transition-colors">
                              <Image
                                src={entry.logo}
                                alt={entry.org}
                                width={26}
                                height={26}
                                className="object-contain max-h-6 max-w-6"
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200/80 flex items-center justify-center flex-shrink-0 text-zinc-400 text-xs font-mono font-semibold">
                              {entry.org.slice(0, 2).toUpperCase()}
                            </div>
                          )}

                          <div className="space-y-1">
                            <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                              <h3 className="text-sm sm:text-base font-semibold text-zinc-900 tracking-tight">
                                {entry.org}
                              </h3>
                              <span className="text-xs sm:text-sm font-medium text-zinc-600 font-sans">
                                — {entry.role}
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl">
                              {entry.detail}
                            </p>
                          </div>
                        </div>

                        {/* Date Period & Milestone Highlight */}
                        <div className="sm:text-right flex-shrink-0 pl-13 sm:pl-0">
                          <span className="text-xs font-mono text-zinc-500 block">
                            {entry.period}
                          </span>
                          {entry.highlight && (
                            <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono bg-zinc-100 border border-zinc-200/70 text-zinc-700 font-medium">
                              {entry.highlight}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
