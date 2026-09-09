'use client'

import React from 'react'
import Link from 'next/link'
import { PROFILE } from '@/data/portfolio'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0B0C0E]/90 backdrop-blur-sm border-b border-[#1E2026]">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="#home"
          className="text-sm font-medium tracking-tight text-white hover:text-zinc-300 transition-colors"
        >
          {PROFILE.name.toLowerCase()}
        </Link>

        <nav className="flex items-center gap-6 text-xs text-zinc-400 font-mono">
          <Link href="#projects" className="hover:text-white transition-colors">
            projects
          </Link>
          <Link href="#experience" className="hover:text-white transition-colors">
            experience
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            about
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            contact
          </Link>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-200 hover:text-white border-b border-zinc-600 hover:border-white pb-0.5 transition-colors"
          >
            resume
          </a>
        </nav>
      </div>
    </header>
  )
}
