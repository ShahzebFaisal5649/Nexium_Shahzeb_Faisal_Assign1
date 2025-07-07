'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Quote, quotes } from '@/app/lib/quotes'

export default function EnhancedQuoteForm() {
  const [topic, setTopic] = useState('')
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [favoriteQuotes, setFavoriteQuotes] = useState<Set<number>>(new Set())

  const quickTopics = ['success', 'motivation', 'life', 'dreams', 'perseverance', 'wisdom', 'courage']

  const generateQuotes = async () => {
    if (!topic.trim()) return
    
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
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

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8" data-theme="nexium">
      {/* Hero Section with DaisyUI */}
      <div className="hero min-h-[200px] bg-gradient-to-r from-primary to-secondary rounded-box shadow-2xl">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-white mb-4">✨ Quote Generator</h1>
            <p className="text-xl text-white/90">
              Discover inspiring quotes tailored to your chosen topics
            </p>
          </div>
        </div>
      </div>

      {/* Input Section - ShadCN + DaisyUI Hybrid */}
      <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-white text-2xl font-bold flex items-center justify-center gap-3">
            <div className="badge badge-accent badge-lg">AI-Powered</div>
            Generate Inspiring Quotes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input with DaisyUI styling */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white/90 font-semibold">What inspires you today?</span>
            </label>
            <div className="input-group">
              <Input
                type="text"
                placeholder="Enter a topic (e.g., success, motivation, life...)"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && generateQuotes()}
                className="input input-bordered w-full bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-accent"
              />
              <Button 
                onClick={generateQuotes}
                disabled={!topic.trim() || isLoading}
                className="btn btn-accent btn-square"
              >
                {isLoading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  '✨'
                )}
              </Button>
            </div>
          </div>

          {/* Progress bar when loading */}
          {isLoading && (
            <progress className="progress progress-accent w-full"></progress>
          )}

          {/* Quick Topics with DaisyUI badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="badge badge-ghost text-white">Quick topics:</div>
            {quickTopics.map((quickTopic) => (
              <button
                key={quickTopic}
                className="badge badge-outline badge-primary hover:badge-primary cursor-pointer transition-all duration-200 capitalize"
                onClick={() => handleQuickTopic(quickTopic)}
              >
                {quickTopic}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          {displayedQuotes.length > 0 && (
            <div className="flex gap-3 justify-center">
              <Button 
                onClick={generateQuotes}
                className="btn btn-outline btn-accent"
              >
                🔄 Get New Quotes
              </Button>
              <Button 
                onClick={clearAll}
                className="btn btn-outline btn-error"
              >
                ✨ Clear All
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats Section */}
      {displayedQuotes.length > 0 && (
        <div className="stats shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
          <div className="stat">
            <div className="stat-figure text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="stat-title text-white/70">Topic</div>
            <div className="stat-value text-white capitalize">{topic}</div>
            <div className="stat-desc text-white/60">Current inspiration theme</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <div className="stat-title text-white/70">Quotes Generated</div>
            <div className="stat-value text-white">{displayedQuotes.length}</div>
            <div className="stat-desc text-white/60">Fresh inspirations</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-warning">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <div className="stat-title text-white/70">Favorites</div>
            <div className="stat-value text-white">{favoriteQuotes.size}</div>
            <div className="stat-desc text-white/60">Saved for later</div>
          </div>
        </div>
      )}

      {/* Quotes Display with DaisyUI Cards */}
      {displayedQuotes.length > 0 && (
        <div className="grid gap-6 md:grid-cols-3">
          {displayedQuotes.map((quote, index) => (
            <div
              key={index}
              className="card bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in"
            >
              <div className="card-body">
                <div className="flex justify-between items-start mb-4">
                  <div className="badge badge-accent">Quote #{index + 1}</div>
                  <button
                    onClick={() => toggleFavorite(index)}
                    className={`btn btn-ghost btn-circle btn-sm ${
                      favoriteQuotes.has(index) ? 'text-warning' : 'text-white/50'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={favoriteQuotes.has(index) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <blockquote className="text-white text-lg font-medium leading-relaxed mb-4">
                  "{quote.text}"
                </blockquote>
                
                <div className="divider divider-accent"></div>
                
                <cite className="text-white/80 text-sm font-semibold flex items-center gap-2">
                  <div className="avatar placeholder">
                    <div className="bg-accent text-accent-content rounded-full w-8">
                      <span className="text-xs">{quote.author.charAt(0)}</span>
                    </div>
                  </div>
                  {quote.author}
                </cite>

                {/* Action buttons */}
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-ghost btn-xs">Share</button>
                  <button className="btn btn-ghost btn-xs">Copy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty state with DaisyUI */}
      {!isLoading && displayedQuotes.length === 0 && topic && (
        <div className="text-center py-12">
          <div className="alert alert-info shadow-lg max-w-md mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>No quotes found for "{topic}". Try a different topic!</span>
          </div>
        </div>
      )}
    </div>
  )
}