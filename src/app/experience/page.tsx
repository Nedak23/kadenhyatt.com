import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Experience | Kaden Hyatt',
  description: 'Professional experience and journey of Kaden Hyatt.',
}

export default function Experience() {
  return (
    <main className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Experience Timeline */}
        <section>
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-12">
            {/* Co-Founder */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jan 2023 - Present</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Co-Founder</h3>
                <p className="text-gray-600 mb-4">Conduit Games Company · Berkeley, California</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Designed the mechanics for the card game Race to Kepler</li>
                  <li>Built the Graphic layout and design in Figma for cards, game boxes, and marketing materials</li>
                  <li>Showcased Race to Kepler at PAX West 2024 and GenCon 2025</li>
                </ul>
              </div>
            </div>

            {/* Replit - Product, Data */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jul 2025 - Sep 2025</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Product, Data</h3>
                <p className="text-gray-600 mb-4">Replit · Foster City, California</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Analyzed user price sensitivity to determine optimal pricing (~ +10% ARR)</li>
                  <li>Identified and implemented key growth funnel optimization (~ +10% Initial Active Users)</li>
                  <li>Developed a DAG to classify user messages using LLMs for A/B tests</li>
                  <li>Built system to analyze LLM response times to common prompts to inform prompt tuning</li>
                </ul>
              </div>
            </div>

            {/* UVS Games - Marketing Strategist */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jun 2025 - Sep 2025</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Marketing Strategist</h3>
                <p className="text-gray-600 mb-4">UVS Games · Remote</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Developed ideal demo experience for the Riftbound TCG</li>
                  <li>Met with 15+ potential partners to negotiate demo partnerships</li>
                  <li>Planned and presented marketing programs</li>
                </ul>
              </div>
            </div>

            {/* Research Assistant */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jan 2024 - Oct 2024</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Research Assistant</h3>
                <p className="text-gray-600 mb-4">Department of Social Science, University of Chicago · Chicago, Illinois</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Co-author on "Which frame fits? Policy learning with framing for climate change policy attitudes"</li>
                  <li>Built machine learning models in Python to predict effective policy framing based on demographic information</li>
                  <li>Used Pandas and StatsModels to code Linear Regression and Random Forest models in Python</li>
                  <li>Translated code from Python to R and encoded output into LaTeX</li>
                </ul>
              </div>
            </div>

            {/* Competitive Card Game Player */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jan 2013 - Jun 2023</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8">
                <h3 className="text-xl font-semibold mb-2">Competitive Card Game Player</h3>
                <p className="text-gray-600 mb-4">Competitive Gaming · International</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Six-time Pokémon TCG World Championship Competitor</li>
                  <li>Five-time Pokémon TCG Regional Champion</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 