import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  await prisma.teamMember.deleteMany()
  await prisma.testimonial.deleteMany()
  await prisma.blogPost.deleteMany()
  await prisma.siteSettings.deleteMany()

  const teamMembers = [
    {
      name: 'Carlos K. Koilai',
      role: 'Chief AI Architect',
      bio: 'Visionary leader with 15+ years in AI/ML. Pioneering the next generation of intelligent systems.',
      imageUrl: 'https://i.ibb.co/67HQfKYW/Zingri.jpg',
      email: 'smartjinxkimani@gmail.com',
      phone: '+254797132940',
      linkedin: '#',
      order: 1,
    },
    {
      name: 'Nelson M. Macharia',
      role: 'Chief Executive Officer',
      bio: 'Strategic leader driving AI adoption across enterprises. Expert in scaling AI operations.',
      imageUrl: 'https://i.ibb.co/XkkjwmSP/Nelson.jpg',
      email: 'Machariamainanelson@gmail.com',
      phone: '+254111839718',
      linkedin: '#',
      order: 2,
    },
    {
      name: 'Godfrey K. Nduati',
      role: 'Chief AI Marketing Officer',
      bio: 'AI marketing pioneer. Helping businesses leverage AI for growth and brand building.',
      imageUrl: 'https://i.ibb.co/nq7jr7hn/gody.jpg',
      email: 'Godfreynduati20@gmail.com',
      phone: '0700059980',
      linkedin: '#',
      order: 3,
    },
    {
      name: 'Eustace Mutua',
      role: 'Head of Customer Success',
      bio: 'Ensuring client success with AI implementations. Building lasting partnerships.',
      imageUrl: 'https://i.ibb.co/209cDJrq/Mutua.jpg',
      email: 'mutuaeustace@gmail.com',
      phone: '+254114882510',
      linkedin: 'https://linkedin.com/in/eustace-muteru',
      twitter: '#',
      order: 4,
    },
    {
      name: 'Josphat Wachira',
      role: 'AI Marketing Lead',
      bio: 'Digital marketing expert with deep AI expertise. Driving engagement through intelligent campaigns.',
      imageUrl: 'https://i.ibb.co/DyFS4bR/IMG-20251028-WA0011.jpg',
      email: 'josphatwachira33@gmail.com',
      linkedin: '#',
      order: 5,
    },
    {
      name: 'Salome Wairimu',
      role: 'Customer Success Manager',
      bio: 'Client advocate ensuring seamless AI integration. Coordinating teams for optimal delivery.',
      imageUrl: 'https://i.ibb.co/vCVKXpQN/IMG-20251103-WA0029.jpg',
      email: 'khalifasallie55@gmail.com',
      linkedin: '#',
      order: 6,
    },
    {
      name: 'Tracy Risancho',
      role: 'AI Design Lead',
      bio: 'Creative AI specialist blending aesthetics with intelligence. Creating beautiful AI experiences.',
      imageUrl: 'https://i.ibb.co/5g29nLns/IMG-20251208-WA0022.jpg',
      linkedin: '#',
      order: 7,
    },
    {
      name: 'Caleb Juma',
      role: 'AI Frontend Engineer',
      bio: 'Building intuitive interfaces for AI applications. Making complex AI accessible to everyone.',
      imageUrl: 'https://i.ibb.co/RkDbJjZL/IMG-20251215-WA0017.jpg',
      email: 'cjuma@example.com',
      linkedin: '#',
      order: 8,
    },
  ]

  for (const member of teamMembers) {
    await prisma.teamMember.create({ data: member })
  }

  const testimonials = [
    {
      name: 'Nelly Cheboi',
      role: 'CEO',
      company: 'TechLit Africa Kenya',
      content: 'Fleek AI transformed our educational platform with their custom chatbot. The AI support system they built handles 60% of student inquiries, freeing our team to focus on quality education. Absolutely game-changing!',
      imageUrl: 'https://i.ibb.co/fz2Msp9M/IMG-7563.jpg',
      rating: 5,
      order: 1,
    },
    {
      name: 'Tonny Reilley',
      role: 'Founder',
      company: 'HealthPlus',
      content: 'The AI-powered analytics dashboard Fleek AI developed has revolutionized how we approach patient care. Real-time insights have improved our decision-making dramatically.',
      imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      order: 2,
    },
    {
      name: 'Sarah Kimani',
      role: 'CTO',
      company: 'FinServe Kenya',
      content: 'Implementing machine learning models for fraud detection with Fleek AI reduced our false positives by 75%. Their expertise in AI security is unmatched.',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      order: 3,
    },
    {
      name: 'James Mwangi',
      role: 'Director',
      company: 'RetailMax',
      content: 'The predictive inventory system Fleek AI built has saved us millions in reduced stockouts and overstocking. Their AI solutions deliver real ROI.',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      order: 4,
    },
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial })
  }

  const blogPosts = [
    {
      title: 'How AI Chatbots Are Revolutionizing Customer Support in 2025',
      slug: 'ai-chatbots-revolutionizing-customer-support-2025',
      content: 'AI chatbots have evolved from simple scripted responders to sophisticated conversational agents capable of handling complex customer queries. In this article, we explore how businesses are leveraging AI to transform their customer support operations.\n\nKey benefits include 24/7 availability, instant response times, and the ability to handle multiple conversations simultaneously. Companies implementing AI chatbots have reported up to 70% reduction in support costs while improving customer satisfaction scores.',
      excerpt: 'Discover how AI chatbots are transforming customer support and reducing costs by up to 70%.',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      category: 'AI Technology',
      author: 'Fleek AI Team',
      published: true,
    },
    {
      title: 'Getting Started with Machine Learning: A Business Guide',
      slug: 'getting-started-machine-learning-business-guide',
      content: 'Machine learning can seem intimidating, but with the right approach, any business can start leveraging its power. This guide walks you through the basics of ML and how to identify use cases in your organization.\n\nWe cover data preparation, model selection, and deployment strategies that work for businesses of all sizes.',
      excerpt: 'A practical guide to implementing machine learning in your business operations.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
      category: 'Machine Learning',
      author: 'Fleek AI Team',
      published: true,
    },
    {
      title: 'Process Automation: The Key to Scaling Your Business',
      slug: 'process-automation-scaling-business',
      content: 'As your business grows, manual processes become bottlenecks. Process automation allows you to scale operations without proportionally increasing headcount. Learn which processes are best suited for automation and how to get started.',
      excerpt: 'Learn how to scale your business operations through strategic automation.',
      imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
      category: 'Automation',
      author: 'Fleek AI Team',
      published: true,
    },
  ]

  for (const post of blogPosts) {
    await prisma.blogPost.create({ data: post })
  }

  await prisma.siteSettings.upsert({
    where: { key: 'site_title' },
    update: {},
    create: {
      key: 'site_title',
      value: 'Fleek AI | AI-Powered Technology Solutions',
    },
  })

  await prisma.siteSettings.upsert({
    where: { key: 'contact_email' },
    update: {},
    create: {
      key: 'contact_email',
      value: 'Fleektechinc@gmail.com',
    },
  })

  await prisma.siteSettings.upsert({
    where: { key: 'contact_phone' },
    update: {},
    create: {
      key: 'contact_phone',
      value: '+254 758 175 057',
    },
  })

  console.log('Database seeded successfully!')
  console.log(`Created ${teamMembers.length} team members`)
  console.log(`Created ${testimonials.length} testimonials`)
  console.log(`Created ${blogPosts.length} blog posts`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
