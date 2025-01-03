import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Kaden Hyatt',
  description: 'Explore my portfolio of projects and work.',
}

export default function Projects() {
  return (
    <main className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Project Name</h2>
              <p className="text-gray-600 mb-4">
                Detailed description of your project, including the technologies used
                and your role in its development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Next.js
                </span>
              </div>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live →
                </a>
                <a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </div>
    </main>
  );
} 