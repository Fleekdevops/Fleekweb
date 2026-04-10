import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const [consultations, blogPosts, contacts] = await Promise.all([
      prisma.analytics.findUnique({ where: { type: 'consultations' } }),
      prisma.blogPost.count({ where: { published: true } }),
      prisma.contact.count(),
    ])

    return NextResponse.json({
      success: true,
      data: {
        consultations: consultations?.count || 0,
        blogPosts,
        contacts,
        visitors: Math.floor(Math.random() * 1000) + 500,
      },
    })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}
