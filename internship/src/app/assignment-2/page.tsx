'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/component/ui/button'
import { Input } from '@/component/ui/input'
import { Label } from '@/component/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/component/ui/card'

export default function Assignment2Page() {
  const [blogUrl, setBlogUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate loading
    setTimeout(() => {
      setLoading(false)
      alert('Assignment 2 coming soon! This is just a preview.')
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-8 px-4">
        {/* Navigation */}
        <nav className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 dark:bg-orange-900 px-4 py-2 rounded-full text-sm font-medium text-orange-800 dark:text-orange-200 mb-4">
            Assignment 2 • Coming Soon (July 8-14)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI Blog Summarizer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform any blog post into concise summaries with AI-powered analysis and translation to Urdu. 
            Coming soon with full database integration!
          </p>
        </div>

        {/* Preview Form */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg border-2 border-orange-200 dark:border-orange-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                📝 Blog Summarizer Preview
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Experience the future of content summarization with AI-powered insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="blogUrl" className="text-base font-medium">
                    Enter Blog URL
                  </Label>
                  <Input
                    id="blogUrl"
                    placeholder="https://example.com/blog-post"
                    value={blogUrl}
                    onChange={(e) => setBlogUrl(e.target.value)}
                    className="w-full h-12 text-base"
                    disabled={loading}
                  />
                  <p className="text-sm text-muted-foreground flex items-center">
                    <span className="mr-2">🔗</span>
                    Paste any blog URL to get an AI-powered summary and Urdu translation
                  </p>
                </div>
                
                <Button 
                  type="submit"
                  disabled={loading || !blogUrl.trim()}
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing Blog...
                    </>
                  ) : (
                    '🤖 Summarize Blog (Preview)'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Features Preview */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🧠</span>
                  <span>AI-Powered Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced AI algorithms will extract key insights, main topics, and essential information 
                  from any blog post or article.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🔄</span>
                  <span>Urdu Translation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automatic translation of summaries to Urdu, making content accessible 
                  to a wider audience with cultural context.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🗄️</span>
                  <span>Database Integration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Summaries stored in Supabase, full content archived in MongoDB, 
                  with user history and analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🚀</span>
                  <span>Fast Processing</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Optimized scraping and processing pipeline with real-time progress 
                  indicators and error handling.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tech Stack Preview */}
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-2 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                🛠️ Planned Tech Stack
              </CardTitle>
              <CardDescription className="text-center text-lg">
                Assignment 2 will be built with these powerful technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🗄️</span>
                  </div>
                  <h4 className="font-semibold">Supabase</h4>
                  <p className="text-xs text-muted-foreground">Summary Storage</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <h4 className="font-semibold">MongoDB</h4>
                  <p className="text-xs text-muted-foreground">Full Content</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h4 className="font-semibold">AI APIs</h4>
                  <p className="text-xs text-muted-foreground">Text Analysis</p>
                </div>
                <div className="space-y-2">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-semibold">n8n</h4>
                  <p className="text-xs text-muted-foreground">Automation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl">📅 Development Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full">
                    Day 8-11
                  </span>
                  <span className="text-muted-foreground">Backend & Database Setup</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full">
                    Day 12-14
                  </span>
                  <span className="text-muted-foreground">AI Integration & Testing</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                    Day 14
                  </span>
                  <span className="text-muted-foreground">Demo & Deployment</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}