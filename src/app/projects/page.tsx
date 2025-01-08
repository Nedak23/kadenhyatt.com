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
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Race to Kepler */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/KeplerTitleImage.png"
                alt="Race to Kepler - A space-themed deck-building game"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Race to Kepler</h2>
              <p className="text-gray-600 mb-6">
                Race to Kepler is an innovative deck-building game where players compete to be the first to reach Kepler 452-b.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Strategic deck building and resource management</li>
                    <li>Competitive bidding for powerful Titan cards</li>
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
              </div>
            </div>
          </div>

          {/* Personal Website */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden h-fit">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Personal Website</h2>
              <p className="text-gray-600 mb-6">
                The website you are looking at now! Built with Next.js and Tailwind CSS.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Git
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
                <div>
                  <a 
                    href="https://github.com/Nedak23/kadenhyatt.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                  >
                    View Source →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 