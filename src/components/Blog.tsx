'use client'

import Link from 'next/link'
import { ArrowRight, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    title: 'How AI Chatbots Are Revolutionizing Customer Support in 2025',
    excerpt: 'Discover how AI chatbots are transforming customer support and reducing costs by up to 70%.',
    category: 'AI Technology',
    date: 'Dec 17, 2025',
    author: 'Fleek AI Team',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    slug: 'ai-chatbots-revolutionizing-customer-support',
  },
  {
    title: 'Getting Started with Machine Learning: A Business Guide',
    excerpt: 'A practical guide to implementing machine learning in your business operations.',
    category: 'Machine Learning',
    date: 'Oct 20, 2025',
    author: 'Fleek AI Team',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    slug: 'getting-started-machine-learning',
  },
  {
    title: 'Process Automation: The Key to Scaling Your Business',
    excerpt: 'Learn how to scale your business operations through strategic automation.',
    category: 'Automation',
    date: 'Oct 15, 2025',
    author: 'Fleek AI Team',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80',
    slug: 'process-automation-scaling-business',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">News & Insights</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Latest from Our <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group card-bg rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                <button
                  onClick={() => alert('Blog page coming soon!')}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all cursor-pointer"
                >
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => alert('More blog posts coming soon!')}
            className="btn-secondary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
          >
            View All Posts
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
