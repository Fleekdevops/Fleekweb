import { NextRequest, NextResponse } from 'next/server'

const systemPrompt = `You are Freezer, an AI assistant created by Fleek AI (a division of Fleek Tech Inc.) in Nairobi, Kenya. You are a knowledgeable AI expert specializing in:
- AI Chatbots and Conversational AI
- Machine Learning Solutions
- Process Automation
- AI Analytics and Business Intelligence
- Computer Vision
- Generative AI

Always be helpful, friendly, and promote Fleek AI's services when relevant. Highlight our expertise in building custom AI solutions for businesses. If users ask about pricing, guide them to schedule a consultation. Be concise but informative.`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const fallbackResponses = [
  {
    keywords: ['price', 'cost', 'pricing', 'budget', 'how much'],
    response: "Our AI solutions range from $1,500 to $50,000+ depending on complexity. For a custom quote, I'd recommend scheduling a free consultation at our contact page. We'll discuss your needs and provide a detailed proposal!"
  },
  {
    keywords: ['chatbot', 'bot', 'conversational'],
    response: "We specialize in building custom AI chatbots! Whether you need customer support automation, sales bots, or internal assistants, our team can create a solution tailored to your needs. Want to learn more about our chatbot development services?"
  },
  {
    keywords: ['ml', 'machine learning', 'prediction', 'model'],
    response: "Machine learning is at the core of what we do! From predictive analytics to custom ML models, we help businesses unlock the power of their data. Our ML solutions have helped clients reduce costs by up to 40%."
  },
  {
    keywords: ['automation', 'automate', 'workflow'],
    response: "Process automation can transform your business! We help automate repetitive tasks, saving time and reducing errors. Common automations include document processing, data entry, and approval workflows. What's holding your team back currently?"
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'talk'],
    response: "You can reach us at Fleektechinc@gmail.com or call +254 758 175 057. We're based in Nairobi, Kenya, and serve clients globally. Would you like me to help you explore our services while you prepare to reach out?"
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings'],
    response: "Hello! 👋 I'm Freezer, your AI assistant from Fleek AI. I specialize in helping businesses discover the right AI solutions. What brings you here today? Are you exploring AI for your business or do you have a specific project in mind?"
  },
  {
    keywords: ['help', 'what can you do', 'services'],
    response: "I can help you with:\n\n🤖 AI Chatbots\n📊 Machine Learning\n⚡ Process Automation\n👁️ Computer Vision\n📝 Content Generation\n🔮 Predictive Analytics\n\nWhat area interests you most?"
  },
  {
    keywords: ['thank', 'thanks', 'appreciate'],
    response: "You're welcome! Is there anything else about AI solutions I can help clarify? Feel free to explore our services or reach out to our team for a personalized consultation."
  }
]

function getSmartFallback(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()
  
  for (const item of fallbackResponses) {
    if (item.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return item.response
    }
  }
  
  const defaultResponses = [
    "That's a great question! At Fleek AI, we specialize in building custom AI solutions tailored to your business needs. Would you like me to explain more about our AI services?",
    "I'd be happy to help you explore AI solutions for your business. We offer services ranging from chatbots to full machine learning implementations. What specific challenge are you looking to solve?",
    "Thanks for your interest in AI! Our team at Fleek AI has expertise in areas like natural language processing, predictive analytics, and process automation. How can we help transform your business?",
    "That's an interesting AI topic! Our experts at Fleek AI can help you implement cutting-edge AI solutions. Would you like to schedule a free consultation to discuss your project?",
    "Great question! AI is transforming businesses across all industries. Whether you're looking to automate processes, gain insights from data, or improve customer experience, we have solutions. What's your biggest challenge right now?"
  ]
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

async function chatWithOpenRouter(messages: { role: string; content: string }[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY
  const openaiKey = process.env.OPENAI_API_KEY
  
  let endpoint = 'https://openrouter.ai/api/v1/chat/completions'
  let headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  let body: Record<string, unknown> = {
    model: 'meta-llama/llama-3.2-3b-instruct:free',
    messages,
    max_tokens: 500,
    temperature: 0.7,
  }

  if (apiKey && apiKey !== 'your-openai-api-key') {
    headers['Authorization'] = `Bearer ${apiKey}`
  } else if (openaiKey && openaiKey !== 'demo-key' && openaiKey !== 'your-openai-api-key') {
    endpoint = 'https://api.openai.com/v1/chat/completions'
    headers['Authorization'] = `Bearer ${openaiKey}`
    body.model = 'gpt-3.5-turbo'
  } else {
    throw new Error('No API key available')
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('AI API error:', response.status, errorText)
    throw new Error(`API error: ${response.status}`)
  }

  const data = await response.json()
  return data.choices?.[0]?.message?.content || getSmartFallback('')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, history } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const cleanMessage = message.trim()
    if (cleanMessage.length === 0) {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 })
    }

    const hasApiKey = (process.env.OPENROUTER_API_KEY && process.env.OPENROUTER_API_KEY !== 'your-openai-api-key') ||
                     (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'demo-key' && process.env.OPENAI_API_KEY !== 'your-openai-api-key')

    if (hasApiKey) {
      const messages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
        { role: 'system', content: systemPrompt },
        ...(history || []).slice(-10).map((msg: Message) => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
        })),
        { role: 'user', content: cleanMessage },
      ]

      const response = await chatWithOpenRouter(messages)
      return NextResponse.json({ response })
    } else {
      await new Promise(resolve => setTimeout(resolve, 300))
      const response = getSmartFallback(cleanMessage)
      return NextResponse.json({ response })
    }
  } catch (error) {
    console.error('Chat API error:', error)
    const response = getSmartFallback('')
    return NextResponse.json({ response })
  }
}
