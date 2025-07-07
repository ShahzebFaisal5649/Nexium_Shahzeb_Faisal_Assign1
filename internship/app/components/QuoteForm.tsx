'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Quote, quotes } from '../lib/quotes'

export default function ProfessionalQuoteGenerator() {
  const [topic, setTopic] = useState('')
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [favoriteQuotes, setFavoriteQuotes] = useState<Set<number>>(new Set())

  const quickTopics = ['success', 'motivation', 'life', 'dreams', 'perseverance', 'wisdom', 'courage']

  const generateQuotes = async () => {
    if (!topic.trim()) return
    
    setIsLoading(true)
    
    // Simulate API call with realistic loading
    await new Promise(resolve => setTimeout(resolve, 1200))
    
    const topicQuotes = quotes[topic.toLowerCase()] || quotes['motivation']
    const shuffled = [...topicQuotes].sort(() => Math.random() - 0.5)
    setDisplayedQuotes(shuffled.slice(0, 3))
    setIsLoading(false)
  }

  const toggleFavorite = (index: number) => {
    const newFavorites = new Set(favoriteQuotes)
    if (newFavorites.has(index)) {
      newFavorites.delete(index)
    } else {
      newFavorites.add(index)
    }
    setFavoriteQuotes(newFavorites)
  }

  const clearAll = () => {
    setTopic('')
    setDisplayedQuotes([])
    setFavoriteQuotes(new Set())
  }

  const handleQuickTopic = (quickTopic: string) => {
    setTopic(quickTopic)
  }

  const copyToClipboard = (text: string, author: string) => {
    navigator.clipboard.writeText(`"${text}" — ${author}`)
  }

  const shareQuote = (text: string, author: string) => {
    if (navigator.share) {
      navigator.share({
        title: 'Inspirational Quote',
        text: `"${text}" — ${author}`,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">✨</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                QuoteGen AI
              </h1>
              <p className="text-slate-400 text-sm md:text-base font-medium">
                Powered by Nexium Intelligence
              </p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover powerful quotes that inspire action. Enter any topic and unlock wisdom from history&apos;s greatest minds.
          </p>
        </div>

        {/* Main Input Section */}
        <Card className="mb-12 bg-white/95 backdrop-blur-sm border-0 shadow-2xl shadow-purple-500/10">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🎯</span>
                </div>
                Generate Inspiration
              </CardTitle>
              <Badge variant="outline" className="bg-gradient-to-r from-violet-500 to-purple-500 text-white border-0 px-4 py-1">
                AI-Powered
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Search Input */}
            <div className="space-y-4">
              <label htmlFor="topic-input" className="block text-slate-700 font-semibold text-lg">
                What topic inspires you today?
              </label>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Input
                    id="topic-input"
                    type="text"
                    placeholder="Enter a topic like success, motivation, wisdom..."
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && generateQuotes()}
                    className="h-14 text-lg border-2 border-slate-200 rounded-xl focus:border-violet-500 focus:ring-violet-500 bg-white/90 text-slate-800 placeholder:text-slate-500 shadow-sm"
                    disabled={isLoading}
                  />
                  {isLoading && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-6 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                <Button 
                  onClick={generateQuotes}
                  disabled={!topic.trim() || isLoading}
                  size="lg"
                  className="h-14 px-8 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      ✨ Generate Quotes
                    </span>
                  )}
                </Button>
              </div>
            </div>

            {/* Quick Topics */}
            <div className="space-y-4">
              <h3 className="text-slate-700 font-semibold">Quick Topics:</h3>
              <div className="flex flex-wrap gap-3">
                {quickTopics.map((quickTopic) => (
                  <button
                    key={quickTopic}
                    onClick={() => handleQuickTopic(quickTopic)}
                    className="px-4 py-2 bg-slate-100 hover:bg-violet-100 hover:text-violet-700 text-slate-600 rounded-lg font-medium transition-all duration-200 capitalize border border-slate-200 hover:border-violet-300"
                  >
                    {quickTopic}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            {isLoading && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">Searching for inspiring quotes...</span>
                  <span className="text-slate-500 text-sm">AI Processing</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {displayedQuotes.length > 0 && (
              <div className="flex gap-4 pt-6 border-t border-slate-200">
                <Button 
                  onClick={generateQuotes}
                  variant="outline"
                  className="flex-1 h-12 border-2 border-violet-200 text-violet-700 hover:bg-violet-50 font-semibold rounded-lg"
                >
                  🔄 Get New Quotes
                </Button>
                <Button 
                  onClick={clearAll}
                  variant="outline"
                  className="flex-1 h-12 border-2 border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold rounded-lg"
                >
                  ✨ Clear All
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Statistics Dashboard */}
        {displayedQuotes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-violet-500 to-purple-600 text-white border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-violet-100 text-sm font-medium uppercase tracking-wide">Current Topic</p>
                    <p className="text-2xl font-bold capitalize">{topic}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Quotes Generated</p>
                    <p className="text-2xl font-bold text-slate-800">{displayedQuotes.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">Favorites</p>
                    <p className="text-2xl font-bold text-slate-800">{favoriteQuotes.size}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">❤️</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quotes Display Grid */}
        {displayedQuotes.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayedQuotes.map((quote, index) => (
              <Card
                key={index}
                className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Quote Header */}
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 p-4">
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        Quote #{index + 1}
                      </Badge>
                      <button
                        onClick={() => toggleFavorite(index)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          favoriteQuotes.has(index) 
                            ? 'bg-white/20 text-yellow-300' 
                            : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        <svg className="w-5 h-5" fill={favoriteQuotes.has(index) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Quote Content */}
                  <div className="p-6 space-y-6">
                    <blockquote className="text-slate-800 text-lg font-medium leading-relaxed">
                      <span className="text-4xl text-violet-400 font-serif">&quot;</span>
                      {quote.text}
                      <span className="text-4xl text-violet-400 font-serif">&quot;</span>
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {quote.author.charAt(0)}
                      </div>
                      <div>
                        <cite className="text-slate-700 font-semibold text-lg not-italic">
                          {quote.author}
                        </cite>
                        <p className="text-slate-500 text-sm">Author</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => copyToClipboard(quote.text, quote.author)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </button>
                      <button
                        onClick={() => shareQuote(quote.text, quote.author)}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-violet-100 hover:bg-violet-200 text-violet-700 rounded-lg font-medium transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && displayedQuotes.length === 0 && topic && (
          <Card className="bg-white border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">No quotes found</h3>
              <p className="text-slate-600 mb-6">
                We couldn&apos;t find quotes for &quot;{topic}&quot;. Try a different topic or select from our suggestions above.
              </p>
              <Button 
                onClick={() => setTopic('')}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold px-8"
              >
                Try Another Topic
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Welcome State */}
        {!isLoading && displayedQuotes.length === 0 && !topic && (
          <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Welcome to QuoteGen AI</h3>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                Ready to discover quotes that inspire and motivate? Enter a topic above or choose from our curated suggestions to get started.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {['Success', 'Motivation', 'Wisdom', 'Dreams'].map((topic) => (
                  <button
                    key={topic}
                    onClick={() => handleQuickTopic(topic.toLowerCase())}
                    className="p-4 bg-white border border-violet-200 rounded-xl hover:border-violet-400 hover:shadow-lg transition-all duration-200 text-slate-700 font-medium"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-slate-400">
            <span>Built with</span>
            <span className="text-red-400">❤️</span>
            <span>for Nexium Assignment 1</span>
          </div>
        </footer>
      </div>
    </div>
  )
}