'use client' // This directive makes it a Client Component

import { useState } from 'react'
import { quotes } from '../lib/quotes'

export default function QuoteForm() {
  const [topic, setTopic] = useState('')
  const [displayedQuotes, setDisplayedQuotes] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const generateQuotes = async () => {
    if (!topic.trim()) return
    
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Get quotes for the topic (or random if topic not found)
    const topicQuotes = quotes[topic.toLowerCase()] || quotes.general
    
    // Select 3 random quotes
    const selectedQuotes = topicQuotes
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
    
    setDisplayedQuotes(selectedQuotes)
    setIsLoading(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      generateQuotes()
    }
  }

  return (
    <div className="space-y-8">
      {/* Quote Input Form */}
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/30">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Enter Your Topic</h3>
          <p className="text-gray-600">What inspires you today?</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="e.g., success, motivation, life, dreams..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 px-6 py-4 text-gray-800 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 placeholder-gray-500"
          />
          <button
            onClick={generateQuotes}
            disabled={isLoading || !topic.trim()}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </span>
            ) : (
              'Generate Quotes ✨'
            )}
          </button>
        </div>
        
        {/* Quick Topic Suggestions */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {['success', 'motivation', 'life', 'dreams', 'happiness'].map((suggestedTopic) => (
            <button
              key={suggestedTopic}
              onClick={() => setTopic(suggestedTopic)}
              className="px-4 py-2 text-sm text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 border border-blue-200"
            >
              {suggestedTopic}
            </button>
          ))}
        </div>
      </div>

      {/* Display Generated Quotes */}
      {displayedQuotes.length > 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Your Inspirational Quotes</h3>
            <p className="text-gray-600">Let these words fuel your journey</p>
          </div>
          
          <div className="grid gap-6">
            {displayedQuotes.map((quote, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-white/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="flex items-start">
                  <div className="text-4xl text-blue-500 mr-4 mt-2">&ldquo;</div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 font-medium leading-relaxed italic mb-4">
                      {quote}
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="ml-3 text-sm text-gray-500 font-medium">Quote #{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => generateQuotes()}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              🔄 Get New Quotes
            </button>
            <button
              onClick={() => setDisplayedQuotes([])}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
            >
              ✨ Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
