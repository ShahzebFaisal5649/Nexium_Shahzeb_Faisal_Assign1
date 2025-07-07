import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'QuoteGen AI | Professional Quote Generator',
  description: 'Industry-level AI-powered quote generator built with Next.js 15, featuring beautiful UI and inspiring quotes from history\'s greatest minds.',
  keywords: 'quotes, motivation, inspiration, AI, Next.js, professional',
  authors: [{ name: 'Shahzeb Faisal', url: 'https://github.com/ShahzebFaisal5649' }],
  openGraph: {
    title: 'QuoteGen AI | Professional Quote Generator',
    description: 'Discover inspiring quotes with our AI-powered generator',
    type: 'website',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8b5cf6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}