import QuoteForm from './components/QuoteForm'

export default function HomePage() {
  // This is a Server Component - it runs on the server
  console.log('Quote Generator - Server Component loaded') // Check your terminal, not browser console
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <h1 className="text-6xl font-bold text-gray-800 mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Quote Generator
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover powerful quotes that inspire, motivate, and transform your mindset. 
              Enter any topic and unlock wisdom from great minds.
            </p>
          </div>

          {/* Main Quote Generator Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 mb-16 border border-white/20">
            <div className="max-w-2xl mx-auto">
              <QuoteForm />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-6 group-hover:animate-bounce">💡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Instant Inspiration</h3>
              <p className="text-gray-600 leading-relaxed">
                Get 3 carefully selected motivational quotes instantly based on your chosen topic
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-6 group-hover:animate-bounce">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Topic-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose from success, motivation, life, or any topic that resonates with your current goals
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-6 group-hover:animate-bounce">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Curated Wisdom</h3>
              <p className="text-gray-600 leading-relaxed">
                Handpicked quotes from renowned thought leaders, philosophers, and successful individuals
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <p className="text-gray-500 text-sm">
              Built with ❤️ for Nexium Assignment 1 - Day 3: App Router & Server Components
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}