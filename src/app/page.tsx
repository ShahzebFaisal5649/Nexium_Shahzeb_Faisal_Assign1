export default function Home() {
  return (
    <div className="space-y-6 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to Next.js 15 Fundamentals
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Nexium Internship - Day 2: Mastering Next.js 15 Core Concepts
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            🚀 App Router
          </h2>
          <p className="text-gray-600">
            Using the new App Router for improved performance and developer experience.
            File-based routing makes creating pages intuitive.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-green-600">
            📁 File-based Routing
          </h2>
          <p className="text-gray-600">
            Routes are created automatically based on folder structure.
            No need for manual route configuration.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-purple-600">
            ⚡ Server Components
          </h2>
          <p className="text-gray-600">
            React Server Components by default for better performance.
            Reduced JavaScript bundle size and faster loading.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-3 text-orange-600">
            🎨 Tailwind CSS
          </h2>
          <p className="text-gray-600">
            Utility-first CSS framework for rapid UI development.
            Responsive design made simple.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Learning Progress - Day 2
        </h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
            <span className="text-gray-700">Project structure understanding</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
            <span className="text-gray-700">App Router implementation</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></span>
            <span className="text-gray-700">Server Components concepts</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
            <span className="text-gray-700">Routing and navigation (Next: Create about & contact pages)</span>
          </div>
        </div>
      </div>
    </div>
  );
}