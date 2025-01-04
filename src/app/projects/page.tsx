import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects | Kaden Hyatt',
  description: 'Explore my portfolio of projects and work.',
}

export default function Projects() {
  return (
    <main className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">My Projects</h1>
        
        {/* Race to Kepler */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/race-to-kepler.jpg"
                alt="Race to Kepler - A space-themed deck-building game"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Race to Kepler</h2>
              <p className="text-gray-600 mb-6">
                Race to Kepler is an innovative deck-building game where players compete to be the first to reach Kepler 452-b.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Strategic deck building and resource management</li>
                    <li>Competitive bidding for powerful titan cards</li>
                    <li>Multiple unique ships for high replayability</li>
                    <li>Space-themed adventure racing game</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Figma
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Excel
                    </span>
                  </div>
                </div>
                <div>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Projects Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">More Coming Soon</h3>
            <p className="text-gray-600">
              I'm always working on new projects. Check back later for updates!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 