import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message, budget, timeline } = body

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Name, email, and service are required' },
        { status: 400 }
      )
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || '',
        company: company || '',
        service,
        message: message || '',
        budget: budget || '',
        timeline: timeline || '',
        status: 'new',
      },
    })

    await prisma.analytics.upsert({
      where: { type: 'consultations' },
      update: { count: { increment: 1 } },
      create: { type: 'consultations', count: 1 },
    })

    return NextResponse.json({ success: true, data: contact })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ success: true, data: contacts })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}
