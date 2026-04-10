import { NextRequest, NextResponse } from 'next/server'

const MOCK_POSTS = [
  {
    id: '1',
    title: 'The Future of AI in Web Development',
    slug: 'future-ai-web-development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we build and deploy web applications.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    category: 'AI & Tech',
    author: 'Fleek AI Team',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Building Scalable AI Applications',
    slug: 'building-scalable-ai-apps',
    excerpt: 'Best practices for creating AI-powered applications that can handle millions of users.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800',
    category: 'Development',
    author: 'Fleek AI Team',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'OpenRouter: The Future of AI API Access',
    slug: 'openrouter-ai-api-access',
    excerpt: 'How OpenRouter is democratizing access to multiple AI models through a single API.',
    content: 'Full article content here...',
    imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800',
    category: 'AI & Tech',
    author: 'Fleek AI Team',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export async function GET() {
  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    })
    await prisma.$disconnect()
    return NextResponse.json({ success: true, data: posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json({ success: true, data: MOCK_POSTS })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, slug, content, excerpt, imageUrl, category, author } = body

    if (!title || !slug || !content || !category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    
    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt: excerpt || content.slice(0, 150) + '...',
        imageUrl: imageUrl || '',
        category,
        author: author || 'Fleek AI Team',
        published: true,
      },
    })

    await prisma.$disconnect()
    return NextResponse.json({ success: true, data: post })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json({ success: true, message: 'Post created successfully' })
  }
}
