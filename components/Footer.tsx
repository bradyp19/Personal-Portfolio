'use client'

import React, { useState } from 'react'
import { PROFILE } from '@/data/portfolio'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <footer id="contact" className="py-20 text-xs font-mono text-zinc-400">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <h2 className="text-xl font-serif text-white tracking-tight font-normal">
            Get in touch
          </h2>
          <p className="text-sm font-sans text-zinc-300">
            Open to conversations with founders, engineers, and builders.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-white border-b border-zinc-500 hover:border-white pb-0.5 transition-colors text-sm"
            >
              {PROFILE.email}
            </a>
            <button
              onClick={handleCopy}
              className="px-2 py-0.5 rounded border border-[#22242B] bg-[#121418] hover:bg-[#1A1D24] text-zinc-400 hover:text-white transition-colors"
            >
              {copied ? 'copied' : 'copy'}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#1E2026] text-zinc-500">
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              github
            </a>
            <span>/</span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              linkedin
            </a>
            <span>/</span>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              resume (pdf)
            </a>
          </div>

          <div>
            <span>© 2026 Brady Park</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
