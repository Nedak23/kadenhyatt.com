import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  readTime: string
}

// Example featured blog posts - replace with your actual blog posts
const featuredPosts: BlogPost[] = [
  {
    slug: 'example-post-1',
    title: 'Example Blog Post 1',
    date: 'January 1, 2024',
    description: 'This is a brief description of what this blog post is about. It should give readers a quick overview of the content.',
    readTime: '5 min read'
  },
  {
    slug: 'example-post-2',
    title: 'Example Blog Post 2',
    date: 'January 5, 2024',
    description: 'Another example blog post description. Make it engaging to encourage readers to click through.',
    readTime: '3 min read'
  },
]

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
              Welcome to my corner of the web. I'm passionate about Game Design and Data Science.
              and love to discuss whatever my mind is on.
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

      {/* Current Project Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Project</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg aspect-video relative">
              {/* Replace with actual project image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Project Screenshot
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Race to Kepler</h2>
              <h3 className="text-2xl font-semibold mb-4">About the Project</h3>
              <p className="text-gray-600 mb-6">
                Race to Kepler is an innovative deck-building game where players compete to be the first to reach Kepler 452-b. Game includes: strategic resource management, bidding for powerful titan cards, and many unique ships players adding replayability.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
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
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Blog Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  className="block group p-6"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm space-x-4 mb-4">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {post.description}
                  </p>
                  <span className="text-blue-600 group-hover:text-blue-800 transition-colors">
                    Read more →
                  </span>
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Add your skills here */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">Python</h3>
              <p className="text-gray-600">I have a strong understanding of Python and its libraries, and I'm proficient in using it for data analysis, machine learning, and web development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">R</h3>
              <p className="text-gray-600">Gained experience with R through my work in academia. Both creating models and graphs as well as translating between R and Python.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">SQL</h3>
              <p className="text-gray-600">Basic experience with SQL through classes and personal projects. Used to interfacing with databases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="font-semibold mb-2">Game Design</h3>
              <p className="text-gray-600">I have a deep love for Game Design and through my work on Race to Kepler, I have learned a tremendous amount.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 