import QuoteForm from './components/QuoteForm'
import Navigation from './components/Navigation'

export default function Assignment1Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto py-8 px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200 mb-4">
              Assignment 1 • Day 4 Progress
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Daily Inspiration Hub
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover powerful quotes that resonate with your current mindset and goals. 
              Let wisdom from great minds inspire your journey and fuel your ambitions.
            </p>
          </div>
          
          {/* Quote Form Component */}
          <QuoteForm />
          
          {/* Footer Section */}
          <div className="mt-16 text-center">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                🚀 Built with Modern Tech Stack
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  Next.js 15
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                  ShadCN UI
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Assignment 1 - Quote Generator | Nexium AI-First Web Development Internship
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}