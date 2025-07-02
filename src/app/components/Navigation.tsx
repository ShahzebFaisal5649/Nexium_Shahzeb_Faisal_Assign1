import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="space-x-4">
      <Link 
        href="/" 
        className="text-white hover:text-blue-200 transition-colors"
      >
        Home
      </Link>
      <Link 
        href="/about" 
        className="text-white hover:text-blue-200 transition-colors"
      >
        About
      </Link>
      <Link 
        href="/contact" 
        className="text-white hover:text-blue-200 transition-colors"
      >
        Contact
      </Link>
    </nav>
  )
}