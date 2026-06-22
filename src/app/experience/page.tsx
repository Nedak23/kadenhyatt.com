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
        <section>
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>

          {/* Experience Timeline */}
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-12">
            {/* Conductor - Software Engineering Intern */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Mar 2026 - Present</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Software Engineering Intern</h3>
                <p className="text-gray-600 mb-4">Conductor · San Francisco, California</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>One of 6 engineers building an AI agent orchestration platform (+100% DAU since March)</li>
                  <li>Built harness syncing between Claude Code and Codex</li>
                  <li>Identified and implemented various performance improvements (−50% average CPU usage)</li>
                  <li>Worked on frontend components to improve agent configuration and workflow visualization</li>
                </ul>
              </div>
            </div>

            {/* Conduit Games - Co-Founder */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jan 2023 - Present</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Co-Founder</h3>
                <p className="text-gray-600 mb-4">Conduit Games Company · Berkeley, California</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Crowdfunded ~$90k from 1,000+ backers in a Kickstarter campaign that fully funded in 2 hours</li>
                  <li>Designed and iteratively balanced the core mechanics of Race to Kepler through 3+ years of playtesting</li>
                  <li>Built the graphic layout and design in Figma for cards, game boxes, and marketing materials</li>
                  <li>Coordinated manufacturing and shipping with overseas partners for fulfillment</li>
                  <li>Showcased Race to Kepler at PAX West 2024 and Gen Con 2025</li>
                </ul>
              </div>
            </div>

            {/* Replit - Product & Data Intern */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jul 2025 - Sep 2025</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Product &amp; Data Intern</h3>
                <p className="text-gray-600 mb-4">Replit · Foster City, California</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Analyzed user price sensitivity to determine optimal pricing (+10% ARR)</li>
                  <li>Identified and implemented key growth funnel optimization (+12% Initial Active Users)</li>
                  <li>Developed a DAG to classify user messages using LLMs for A/B tests</li>
                  <li>Built a system to analyze LLM traces and identify common issues to inform prompt tuning</li>
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

          {/* Research Timeline */}
          <h2 className="text-3xl font-bold mb-8 mt-16">Research</h2>
          <div className="space-y-12">
            {/* Radiology - Karczmar Lab */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Mar 2026 - Jun 2026</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Department of Radiology, University of Chicago</h3>
                <p className="text-gray-600 mb-4">Karczmar Lab · Chicago, Illinois</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Worked with the Karczmar Lab on breast cancer treatment using ML</li>
                  <li>Developed Graph Neural Networks to predict treatment response from MRI data</li>
                  <li>Increased model AUC from 0.53 to 0.67</li>
                </ul>
              </div>
            </div>

            {/* Data Science Institute */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Sep 2025 - Dec 2025</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Data Science Institute, University of Chicago</h3>
                <p className="text-gray-600 mb-4">Chicago, Illinois</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Won the poster presentation for our research &ldquo;Political Bias Drift in Post-Trained LLMs&rdquo;</li>
                  <li>Sourced and compiled diverse datasets with specific biases</li>
                  <li>Constructed an LLM post-training pipeline to train Llama 3 models</li>
                </ul>
              </div>
            </div>

            {/* Department of Social Sciences */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jan 2024 - Oct 2024</span>
              </div>
              <div className="border-l-2 border-gray-300 pl-8">
                <h3 className="text-xl font-semibold mb-2">Department of Social Sciences, University of Chicago</h3>
                <p className="text-gray-600 mb-4">Chicago, Illinois</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Co-author on{' '}
                    <a
                      href="https://journals.sagepub.com/doi/10.1177/20531680251414927"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      &ldquo;Which frame fits? Policy learning with framing for climate change policy attitudes&rdquo;
                    </a>
                    , published in <em>Research &amp; Politics</em> (2026)
                  </li>
                  <li>Built machine learning models in Python to predict effective policy framing based on demographic information</li>
                  <li>Used Pandas and StatsModels to code Linear Regression and Random Forest models in Python</li>
                  <li>Translated code from Python to R and encoded output into LaTeX</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}