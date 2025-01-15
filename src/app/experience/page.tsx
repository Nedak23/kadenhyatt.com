import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience | Kaden Hyatt',
  description: 'Professional experience and journey of Kaden Hyatt.',
}

export default function Experience() {
  return (
    <main className="py-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Coding</h3>
              <p className="text-gray-600">Proficient in Python and R for data analysis, visualizations, and development.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-gray-600">Experience with supervised/unsupervised learning through libraries like scikit-learn and statsmodels.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">SQL</h3>
              <p className="text-gray-600">Basic experience with SQL through classes and personal projects.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Game Design</h3>
              <p className="text-gray-600">I have a deep love for Game Design and am working on my own game, Race to Kepler.</p>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-12">
            {/* Co-Founder, Chief Game Designer */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jan 2023 - Present</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Co-Founder, Chief Game Designer</h3>
                <p className="text-gray-600 mb-4">Conduit Games Company · Self-employed · Remote</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Designed the mechanics for the card game Race to Kepler</li>
                  <li>Graphic layout and design in Figma for cards, game boxes, and marketing materials</li>
                  <li>Organized marketing campaign via social media/Substack in preparation for crowdfunding</li>
                  <li>Showcased Race to Kepler at PAX West 2024</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Figma</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Social Media Marketing</span>
                </div>
              </div>
            </div>

            {/* Research Assistant */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Jun 2024 - Oct 2024</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Research Assistant</h3>
                <p className="text-gray-600 mb-4">University of Chicago Division of the Social Sciences · Part-time · Remote</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Co-author on "Which frame fits? Policy learning with framing for climate change policy attitudes"</li>
                  <li>Created machine learning algorithms to predict effective policy framings based on demographic information</li>
                  <li>Used Pandas and StatsModels to code Linear Regression and Random Forest models in Python</li>
                  <li>Created figures and plots in R using ggplot2</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">R</span>
                </div>
              </div>
            </div>

            {/* Senior Sound Technician */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">Aug 2022 - Sep 2023</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Senior Sound Technician</h3>
                <p className="text-gray-600 mb-4">Oakland Interstake Theatre · Part-time · On-site</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Ran sound system for over 20 graduations, musicals, dance shows, etc.</li>
                  <li>Mixing sound levels of 30+ live inputs using Yamaha CL5</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Sound and Audio Equipment</span>
                </div>
              </div>
            </div>

            {/* Tournament Organizer */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">2019 - 2020</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Tournament Organizer & Moderator</h3>
                <p className="text-gray-600 mb-4">Legends of Runeterra Community · Remote</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Organized and ran over 20 grassroots tournaments with 100+ players each</li>
                  <li>Managed tournament brackets, player communications, and event moderation</li>
                  <li>Built and maintained an active competitive community</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Event Management</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Community Building</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Tournament Organization</span>
                </div>
              </div>
            </div>

            {/* Competitive Card Game Player */}
            <div className="flex">
              <div className="w-32 flex-shrink-0">
                <span className="text-gray-600">2013 - 2022</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8">
                <h3 className="text-xl font-semibold mb-2">Professional Card Game Player</h3>
                <p className="text-gray-600 mb-4">Competitive Gaming · International</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>6-time Pokémon Trading Card Game World Championships Competitor</li>
                  <li>5-time Pokémon Trading Card Game Regional Champion</li>
                  <li>Top 32 finish in Legends of Runeterra Duels of Runeterra Tournament</li>
                  <li>Extensive experience in high-level strategic gameplay and deck building</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Strategic Analysis</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Tournament Play</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 