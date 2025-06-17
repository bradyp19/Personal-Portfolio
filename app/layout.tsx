import React from 'react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brady Park - Portfolio',
  description: 'Product Strategy meets Technical Execution - Self-made immigrant turned full-ride Echols Scholar at UVA, building AI-driven and full-stack solutions that scale.',
  keywords: ['Brady Park', 'Product Strategy', 'Full-Stack Developer', 'AI/ML', 'UVA', 'Echols Scholar', 'Portfolio'],
  authors: [{ name: 'Brady Park' }],
  creator: 'Brady Park',
  openGraph: {
    title: 'Brady Park - Portfolio',
    description: 'Product Strategy meets Technical Execution',
    url: 'https://bradypark.dev',
    siteName: 'Brady Park Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brady Park - Portfolio',
    description: 'Product Strategy meets Technical Execution',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}