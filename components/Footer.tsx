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
    <footer id="contact" className="py-20 text-xs font-mono text-zinc-500">
      <div className="max-w-4xl mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 font-semibold">[05]</span>
            <h2 className="text-lg font-semibold text-zinc-900 tracking-tight">
              Get in touch
            </h2>
          </div>
          <p className="text-sm font-sans text-zinc-600">
            Open to conversations with founders, engineers, and builders.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-zinc-900 hover:text-zinc-600 font-medium border-b border-zinc-300 hover:border-zinc-900 pb-0.5 transition-colors text-sm font-mono"
            >
              {PROFILE.email}
            </a>
            <button
              onClick={handleCopy}
              className={`px-2.5 py-1 rounded-md border text-xs font-mono transition-all shadow-xs ${
                copied
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-medium'
                  : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300'
              }`}
            >
              {copied ? '✓ copied' : 'copy'}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-zinc-200/80 text-zinc-500">
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              github ↗
            </a>
            <span className="text-zinc-300">/</span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              linkedin ↗
            </a>
            <span className="text-zinc-300">/</span>
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              resume (pdf) ↗
            </a>
          </div>

          <div>
            <span>© 2026 Brady William Park</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
