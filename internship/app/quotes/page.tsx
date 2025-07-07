import { quotes } from '../lib/quotes'

export default function QuotesPage() {
  // This is a Server Component - perfect for displaying static data
  const allTopics = Object.keys(quotes)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Available Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTopics.map((topic) => (
          <div key={topic} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold capitalize">{topic}</h3>
            <p className="text-sm text-gray-600">
              {quotes[topic].length} quotes available
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}