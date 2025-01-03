import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface BlogPost {
  slug: string
  title: string
  date: string
  content: string
  readTime: string
}

// Example blog post data - replace with your actual blog post data or API call
const blogPost: BlogPost = {
  slug: 'example-post-1',
  title: 'Example Blog Post 1',
  date: 'January 1, 2024',
  content: `
    This is an example blog post content. Replace this with your actual blog post content.
    You can use markdown or any other format you prefer for your blog posts.
    
    This is just a placeholder to show the layout and styling of a blog post page.
  `,
  readTime: '5 min read'
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real application, you would fetch the blog post data here
  // and generate the metadata based on the actual post
  return {
    title: `${blogPost.title} | Kaden Hyatt`,
    description: blogPost.content.slice(0, 160) + '...',
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data here
  // based on the slug parameter
  if (params.slug !== blogPost.slug) {
    notFound()
  }

  return (
    <main className="py-20">
      <article className="max-w-3xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <time>{blogPost.date}</time>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {blogPost.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </article>
    </main>
  )
} 