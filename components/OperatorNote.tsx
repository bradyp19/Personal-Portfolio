'use client'

import React from 'react'
import Image from 'next/image'
import { PROFILE } from '@/data/portfolio'

export default function OperatorNote() {
  return (
    <section id="about" className="py-16 border-b border-[#1E2026]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl font-serif text-white mb-8 tracking-tight">
          Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
            {PROFILE.story.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="md:col-span-4">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[#22242B] relative max-w-[220px]">
              <Image
                src="/joelgrad.jpg"
                alt="Brady Park"
                fill
                sizes="220px"
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
