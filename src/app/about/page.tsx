import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Kaden Hyatt',
  description: 'Learn more about Kaden Hyatt, my background, and professional journey.',
}

export default function About() {
  return (
    <main className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bio Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6">
                [Your compelling introduction goes here. Write about who you are,
                what drives you, and what you're passionate about.]
              </p>
              <p className="text-lg mb-6">
                [Add more details about your journey, experiences, and what makes
                you unique in your field.]
              </p>
              <p className="text-lg">
                [Conclude with your current focus and what you're looking forward
                to in the future.]
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg">
              {/* Placeholder for your image */}
              <div className="aspect-square"></div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-12">Professional Journey</h2>
          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="flex">
              <div className="w-24 flex-shrink-0">
                <span className="text-gray-600">2023</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Current Position</h3>
                <p className="text-gray-600 mb-4">Company Name</p>
                <p>
                  Description of your role and key achievements. Highlight specific
                  projects or initiatives you've led.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex">
              <div className="w-24 flex-shrink-0">
                <span className="text-gray-600">2021</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8 pb-8">
                <h3 className="text-xl font-semibold mb-2">Previous Role</h3>
                <p className="text-gray-600 mb-4">Company Name</p>
                <p>
                  Description of your responsibilities and accomplishments in this
                  position.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex">
              <div className="w-24 flex-shrink-0">
                <span className="text-gray-600">2019</span>
              </div>
              <div className="border-l-2 border-blue-600 pl-8">
                <h3 className="text-xl font-semibold mb-2">Earlier Position</h3>
                <p className="text-gray-600 mb-4">Company Name</p>
                <p>
                  Overview of your early career experiences and key learnings from
                  this role.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 