import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Kaden Hyatt',
  description: 'Thoughts, ideas, and insights from Kaden Hyatt.',
}

interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  readTime: string
}

// Example blog posts - replace with your actual blog posts data
const blogPosts: BlogPost[] = [
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

export default function Blog() {
  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        {/* Blog Posts List */}
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article 
              key={post.slug}
              className="border-b border-gray-200 pb-12 last:border-b-0"
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center text-gray-600 text-sm space-x-4">
                    <time>{post.date}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  {post.description}
                </p>
                <div className="mt-4">
                  <span className="text-blue-600 group-hover:text-blue-800 transition-colors">
                    Read more →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
} 