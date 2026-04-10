import { NextRequest, NextResponse } from 'next/server'

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

    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    
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

    await prisma.$disconnect()
    return NextResponse.json({ success: true, data: contact })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ success: true, message: 'Thank you! We will contact you soon.' })
  }
}

export async function GET() {
  try {
    const { PrismaClient } = await import('@prisma/client')
    const prisma = new PrismaClient()
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
    })
    await prisma.$disconnect()
    return NextResponse.json({ success: true, data: contacts })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return NextResponse.json({ success: true, data: [] })
  }
}
