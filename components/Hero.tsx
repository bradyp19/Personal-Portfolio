'use client'

import React from 'react'
import Image from 'next/image'
import { PROFILE } from '@/data/portfolio'

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 border-b border-[#1E2026]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8">
          <div className="max-w-2xl space-y-5">
            <div>
              <p className="text-xs font-mono text-zinc-500 mb-2 lowercase">
                charlottesville / nyc
              </p>
              <h1 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight text-white">
                {PROFILE.name}
              </h1>
              <p className="text-sm font-mono text-zinc-400 mt-2">
                CS @ University of Virginia · Incoming @ GitHub & IBM
              </p>
            </div>

            <p className="text-base text-zinc-300 leading-relaxed font-sans">
              {PROFILE.intro}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1 text-zinc-400">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-zinc-200 hover:text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-colors"
              >
                email
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-colors"
              >
                github
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-colors"
              >
                linkedin
              </a>
              <span className="text-zinc-700">/</span>
              <a
                href={PROFILE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-colors"
              >
                resume (pdf)
              </a>
            </div>
          </div>

          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#2A2D36] flex-shrink-0 relative">
            <Image
              src="/portrait.jpg"
              alt="Brady Park"
              fill
              priority
              sizes="112px"
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
