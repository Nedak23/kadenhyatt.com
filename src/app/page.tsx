import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm Kaden Hyatt
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Welcome to my corner of the web. I'm passionate about [your interests/profession] 
              and love to [what you do/create].
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/projects"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project One</h3>
                <p className="text-gray-600 mb-4">
                  Brief description of your first featured project.
                </p>
                <Link 
                  href="/projects/1"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                <p className="text-gray-600 mb-4">
                  Brief description of your second featured project.
                </p>
                <Link 
                  href="/projects/2"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                <p className="text-gray-600 mb-4">
                  Brief description of your third featured project.
                </p>
                <Link 
                  href="/projects/3"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Add your skills here */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">Skill Category 1</h3>
              <p className="text-gray-600">Description of your expertise</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">Skill Category 2</h3>
              <p className="text-gray-600">Description of your expertise</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">Skill Category 3</h3>
              <p className="text-gray-600">Description of your expertise</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">Skill Category 4</h3>
              <p className="text-gray-600">Description of your expertise</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 