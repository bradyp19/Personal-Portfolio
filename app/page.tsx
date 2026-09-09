import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FlagshipSystems from '@/components/FlagshipSystems'
import InteractiveTimeline from '@/components/InteractiveTimeline'
import TechMatrix from '@/components/TechMatrix'
import OperatorNote from '@/components/OperatorNote'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans">
      <Header />
      <main>
        <Hero />
        <FlagshipSystems />
        <InteractiveTimeline />
        <TechMatrix />
        <OperatorNote />
      </main>
      <Footer />
    </div>
  )
}