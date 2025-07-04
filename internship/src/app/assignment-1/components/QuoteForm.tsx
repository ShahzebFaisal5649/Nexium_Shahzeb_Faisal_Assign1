'use client'

import { useState, ChangeEvent } from 'react'
import { Button } from '@/component/ui/button'
import { Input } from '@/component/ui/input'
import { Label } from '@/component/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/component/ui/card'
import quotesData from '../data/quotes.json'

interface Quote {
  id: number
  text: string
  author: string
  category: string
  tags: string[]
}

export default function QuoteForm() {
  const [topic, setTopic] = useState<string>('')
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false)

  const generateQuotes = async (): Promise<void> => {
    setLoading(true)
    setSearchPerformed(true)
    
    // Simulate API call delay for better UX
    setTimeout(() => {
      let quotesToShow: Quote[] = []
      
      if (!topic.trim()) {
        // If no topic provided, show 3 random quotes
        const shuffled = quotesData.quotes.sort(() => 0.5 - Math.random())
        quotesToShow = shuffled.slice(0, 3)
      } else {
        const searchTerm = topic.toLowerCase().trim()
        
        // Filter quotes based on topic (search in category, tags, text, or author)
        const filteredQuotes = quotesData.quotes.filter(quote => 
          quote.category.toLowerCase().includes(searchTerm) ||
          quote.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
          quote.text.toLowerCase().includes(searchTerm) ||
          quote.author.toLowerCase().includes(searchTerm)
        )

        // If no matches found, show random quotes
        const quotesSource = filteredQuotes.length > 0 ? filteredQuotes : quotesData.quotes

        // Get 3 random quotes from the filtered/all quotes
        const shuffled = quotesSource.sort(() => 0.5 - Math.random())
        quotesToShow = shuffled.slice(0, 3)
      }

      setQuotes(quotesToShow)
      setLoading(false)
    }, 1200) // Slightly longer delay for better perceived value
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    generateQuotes()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTopic(e.target.value)
  }

  const handleGenerateNew = (): void => {
    generateQuotes()
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Main Form Card */}
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🌟 Quote Generator
          </CardTitle>
          <CardDescription className="text-lg mt-2">
            Discover inspirational quotes that resonate with your current mindset and aspirations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="topic" className="text-base font-medium">
                What inspires you today?
              </Label>
              <Input
                id="topic"
                placeholder="e.g., motivation, success, dreams, life, innovation, leadership..."
                value={topic}
                onChange={handleInputChange}
                className="w-full h-12 text-base"
                disabled={loading}
              />
              <p className="text-sm text-muted-foreground flex items-center">
                <span className="mr-2">💡</span>
                Leave empty for random quotes, or enter a keyword to find related inspiration.
              </p>
            </div>
            
            <Button 
              type="submit"
              disabled={loading}
              className="w-full h-12 text-lg font-semibold"
              size="lg"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Generating Your Quotes...
                </>
              ) : (
                '✨ Generate Inspiring Quotes'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results Section */}
      {quotes.length > 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Your Daily Inspiration
            </h2>
            <p className="text-muted-foreground">
              {topic.trim() ? `Quotes about "${topic}"` : 'Random inspirational quotes'}
            </p>
          </div>
          
          <div className="grid gap-6">
            {quotes.map((quote, index) => (
              <Card 
                key={quote.id} 
                className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <blockquote className="text-lg font-medium leading-relaxed flex-1 text-gray-700 dark:text-gray-200">
                        &quot;{quote.text}&quot;
                      </blockquote>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <footer className="text-base font-semibold text-gray-600 dark:text-gray-300">
                        — {quote.author}
                      </footer>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
                          {quote.category}
                        </span>
                        {quote.tags.slice(0, 3).map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs bg-secondary/60 text-secondary-foreground px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-4">
            <Button 
              variant="outline" 
              onClick={handleGenerateNew}
              disabled={loading}
              className="px-8 py-2"
            >
              🔄 Generate New Quotes
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Found these quotes inspiring? Generate new ones or try a different topic!
            </p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {searchPerformed && quotes.length === 0 && !loading && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="space-y-4">
              <div className="text-4xl">🎯</div>
              <h3 className="text-xl font-semibold">Ready to Get Inspired?</h3>
              <p className="text-muted-foreground">
                Click the button above to generate some amazing quotes!
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}