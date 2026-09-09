'use client'

import React from 'react'
import { SKILL_GROUPS } from '@/data/portfolio'

export default function TechMatrix() {
  return (
    <section id="stack" className="py-16 border-b border-[#1E2026]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-serif text-white mb-8 tracking-tight">
          Tools & Primitives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div key={group.name} className="space-y-2">
              <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                {group.name}
              </h3>
              <p className="text-sm text-zinc-300 font-mono">
                {group.skills.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
