'use client'

import React from 'react'
import Link from 'next/link'
import { PROFILE } from '@/data/portfolio'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="#home"
          className="text-sm font-medium tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-2.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{PROFILE.name.toLowerCase()}</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6 text-xs text-zinc-500 font-mono">
          <Link href="#projects" className="hover:text-zinc-900 transition-colors">
            projects
          </Link>
          <Link href="#experience" className="hover:text-zinc-900 transition-colors">
            experience
          </Link>
          <Link href="#stack" className="hover:text-zinc-900 transition-colors hidden sm:inline-block">
            stack
          </Link>
          <Link href="#about" className="hover:text-zinc-900 transition-colors">
            about
          </Link>
          <Link href="#contact" className="hover:text-zinc-900 transition-colors hidden sm:inline-block">
            contact
          </Link>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 font-medium border-b border-zinc-300 hover:border-zinc-900 pb-0.5 transition-colors"
          >
            resume
          </a>
        </nav>
      </div>
    </header>
  )
}
