import { NextRequest, NextResponse } from 'next/server'

interface CodeRequest {
  prompt: string
  language: string
}

interface ImageRequest {
  prompt: string
  style: string
}

const codeExamples: Record<string, string> = {
  javascript: `// JavaScript Function
function processData(input) {
  return input.map(item => ({
    ...item,
    processed: true,
    timestamp: Date.now()
  }));
}

// Usage
const result = processData(data);
console.log(result);`,
  python: `# Python Function
def process_data(input_list):
    return [
        {**item, 'processed': True, 'timestamp': time.time()}
        for item in input_list
    ]

# Usage
result = process_data(data)
print(result)`,
  react: `// React Component
import { useState, useEffect } from 'react';

export default function DataProcessor({ initialData }) {
  const [data, setData] = useState(initialData);
  
  useEffect(() => {
    // Process data on mount
    setData(prev => prev.map(item => ({
      ...item,
      processed: true
    })));
  }, []);
  
  return (
    <div className="processor">
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`,
  typescript: `// TypeScript Interface & Function
interface DataItem {
  id: string;
  name: string;
  value: number;
}

function processData(items: DataItem[]): ProcessedItem[] {
  return items.map(item => ({
    ...item,
    processed: true,
    processedAt: new Date()
  }));
}

type ProcessedItem = DataItem & {
  processed: boolean;
  processedAt: Date;
};`
}

async function generateWithAI(prompt: string, task: string): Promise<string | null> {
  const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY
  
  if (!apiKey || apiKey === 'demo-key' || apiKey === 'your-openai-api-key' || apiKey === '') {
    return null
  }

  try {
    const isOpenRouter = !!process.env.OPENROUTER_API_KEY
    const endpoint = isOpenRouter 
      ? 'https://openrouter.ai/api/v1/chat/completions'
      : 'https://api.openai.com/v1/chat/completions'
    
    const model = isOpenRouter 
      ? 'meta-llama/llama-3.2-3b-instruct:free'
      : 'gpt-3.5-turbo'

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: `You are a code generator. ${task}. Return ONLY code, no explanations.` },
          { role: 'user', content: prompt }
        ],
        max_tokens: 800,
        temperature: 0.7
      })
    })

    if (!response.ok) throw new Error('API error')
    
    const data = await response.json()
    return data.choices?.[0]?.message?.content || ''
  } catch (error) {
    console.error('AI generation error:', error)
    return null
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, prompt, language, style } = body

    if (type === 'code') {
      const lang = language || 'javascript'
      const baseCode = codeExamples[lang] || codeExamples.javascript
      
      const generated = await generateWithAI(
        `Write ${lang} code for: ${prompt}\n\nRequirements:\n- Clean, production-ready code\n- Include comments\n- Follow best practices`,
        'code generation'
      )

      return NextResponse.json({
        success: true,
        code: generated || `// Generated ${lang} code for: ${prompt}\n\n${baseCode}`,
        language: lang
      })
    }

    if (type === 'analyze') {
      const generated = await generateWithAI(
        `Analyze this document and provide:\n1. Key points\n2. Summary (3 sentences)\n3. Action items\n\nContent: ${prompt}`,
        'document analysis'
      )

      return NextResponse.json({
        success: true,
        analysis: generated || 'Document analysis requires an API key. Please configure your OpenRouter API key in the .env file.',
        prompt
      })
    }

    if (type === 'translate') {
      const generated = await generateWithAI(
        `Translate the following text to ${style || 'Spanish'} and provide:\n1. Translation\n2. Tone assessment\n3. Cultural notes if relevant\n\nText: ${prompt}`,
        'translation'
      )

      return NextResponse.json({
        success: true,
        translation: generated || 'Translation requires an API key. Please configure your OpenRouter API key.',
        targetLanguage: style || 'Spanish'
      })
    }

    return NextResponse.json({ error: 'Unknown type' }, { status: 400 })
  } catch (error) {
    console.error('AI Tools API error:', error)
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
  }
}
