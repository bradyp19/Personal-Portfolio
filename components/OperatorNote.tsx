'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PROFILE } from '@/data/portfolio'

export default function OperatorNote() {
  return (
    <section id="about" className="py-16 border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 font-semibold">[04]</span>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Background & Story
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
            Foundations & Perspective
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
            {PROFILE.story.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="md:col-span-4">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-zinc-200 bg-white shadow-xs relative max-w-[220px] group">
              <Image
                src="/joelgrad.jpg"
                alt="Brady Park"
                fill
                sizes="220px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
