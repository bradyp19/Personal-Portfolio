import React from 'react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brady William Park — Systems & Product Strategy',
  description:
    'Full-stack systems, operational tooling, and technical product strategy. Echols & QuestBridge Scholar at the University of Virginia.',
  keywords: [
    'Brady Park',
    'Brady William Park',
    'Product Strategy',
    'Full-Stack Developer',
    'Systems Engineering',
    'University of Virginia',
    'QuestBridge Scholar',
    'Echols Scholar',
    'GitHub',
    'IBM'
  ],
  authors: [{ name: 'Brady William Park' }],
  creator: 'Brady William Park',
  openGraph: {
    title: 'Brady William Park — Systems & Product Strategy',
    description: 'Full-stack systems and operational tooling. 0-to-1 builder.',
    url: 'https://bradypark.dev',
    siteName: 'Brady William Park Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brady William Park — Systems & Product Strategy',
    description: 'Full-stack systems and operational tooling. 0-to-1 builder.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.ico`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#090a0c" />
      </head>
      <body className="bg-[#090A0C] text-[#EDEDED] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}