export default function About() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">About This Project</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Learning Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Understanding Next.js 15 project structure</li>
          <li>Mastering file-based routing</li>
          <li>Working with App Router</li>
          <li>Implementing Server Components</li>
          <li>Styling with Tailwind CSS</li>
        </ul>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3 text-blue-800">
          Next.js 15 New Features
        </h2>
        <p className="text-gray-700">
          Next.js 15 introduces React 19 support, improved performance, 
          better caching strategies, and enhanced developer experience.
        </p>
      </div>
    </div>
  )
}