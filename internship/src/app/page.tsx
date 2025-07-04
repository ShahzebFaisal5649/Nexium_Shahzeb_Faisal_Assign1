import Link from 'next/link'
import { Button } from '@/component/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/component/ui/card'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            🚀 AI-First Web Development Internship
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Nexium Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building Modern Applications with Next.js 15, TypeScript, and AI Integration
          </p>
        </div>
        
        {/* Progress Overview */}
        <div className="mb-16">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
              30-Day Learning Roadmap
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Week 1-2</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Foundations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Week 3-4</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Backend & AI Integration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">Week 5</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Capstone Project</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Assignments Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto mb-16">
          {/* Assignment 1 - Active */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🎯</span>
                  <span>Assignment 1</span>
                </CardTitle>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">
                  Active
                </span>
              </div>
              <CardDescription className="text-base">
                Quote Generator with ShadCN UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  A beautiful motivational quote generator built with Next.js 15, ShadCN UI, and TypeScript. 
                  Features topic-based filtering, responsive design, and smooth animations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-xs">
                    Next.js 15
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-md text-xs">
                    ShadCN UI
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-md text-xs">
                    TypeScript
                  </span>
                </div>
                <Link href="/assignment-1" className="block">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    View Assignment 1 →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Assignment 2 - Coming Soon */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-orange-200 dark:border-orange-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">📝</span>
                  <span>Assignment 2</span>
                </CardTitle>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </span>
              </div>
              <CardDescription className="text-base">
                Blog Summarizer with AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  AI-powered blog summarizer with URL scraping, translation to Urdu, 
                  and database integration with Supabase and MongoDB. Preview available!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-md text-xs">
                    Supabase
                  </span>
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded-md text-xs">
                    MongoDB
                  </span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-md text-xs">
                    AI Integration
                  </span>
                </div>
                <Link href="/assignment-2" className="block">
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    Preview Assignment 2 →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Progress */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                🎯 Current Progress: Day 4
              </CardTitle>
              <CardDescription className="text-center text-lg">
                ShadCN UI Setup & Quote Generator Implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500" style={{width: '13.3%'}}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Day 4 of 30 • Next: DaisyUI & Tailwind Styling (Day 5)
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ Completed</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Git workflow setup</li>
                      <li>• Next.js 15 fundamentals</li>
                      <li>• App Router & Server Components</li>
                      <li>• ShadCN UI setup & theming</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">📋 Coming Next</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• DaisyUI & Tailwind styling</li>
                      <li>• Accessibility testing</li>
                      <li>• Assignment 1 demo prep</li>
                      <li>• Peer review session</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}