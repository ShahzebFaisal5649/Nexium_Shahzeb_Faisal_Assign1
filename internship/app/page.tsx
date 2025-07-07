import QuoteForm from './components/QuoteForm' 

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 py-8">
      <div className="container mx-auto px-4">
        <QuoteForm />
      </div>
    </main>
  )
}