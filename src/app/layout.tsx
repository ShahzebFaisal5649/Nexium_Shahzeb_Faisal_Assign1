import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quote Generator | Nexium Assignment 1',
  description: 'AI-powered quote generator built with Next.js 15, ShadCN UI, and DaisyUI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="nexium">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-primary via-secondary to-accent`}>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}