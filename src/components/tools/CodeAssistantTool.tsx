'use client'

import { useState } from 'react'
import { Send, Loader2, Copy, Check } from 'lucide-react'

const codeExamples: Record<string, string> = {
  javascript: `// JavaScript Function Example
function processUserData(users) {
  return users
    .filter(user => user.active)
    .map(user => ({
      ...user,
      status: 'processed',
      timestamp: new Date().toISOString()
    }));
}

// Usage
const result = processUserData(userList);
console.log(result);`,
  python: `# Python Function Example
def process_user_data(users):
    return [
        {**user, 'status': 'processed', 'timestamp': datetime.now().isoformat()}
        for user in users
        if user.get('active', False)
    ]

# Usage
result = process_user_data(user_list)
print(result)`,
  react: `// React Component Example
import { useState, useEffect } from 'react';

export default function DataList({ initialData }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch or process data on mount
    setLoading(true);
    // Your logic here
    setLoading(false);
  }, []);

  return (
    <div className="data-list">
      {loading ? <p>Loading...</p> : data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`,
  typescript: `// TypeScript Interface & Function
interface User {
  id: string;
  name: string;
  active: boolean;
}

type ProcessedUser = User & {
  status: string;
  timestamp: string;
};

function processUsers(users: User[]): ProcessedUser[] {
  return users
    .filter(user => user.active)
    .map(user => ({
      ...user,
      status: 'processed',
      timestamp: new Date().toISOString()
    }));
}`
}

export default function CodeAssistantTool() {
  const [language, setLanguage] = useState('javascript')
  const [prompt, setPrompt] = useState('')
  const [generatedCode, setGeneratedCode] = useState(codeExamples.javascript)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const generateCode = async () => {
    if (!prompt.trim()) return
    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/ai-tools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'code', prompt, language })
      })
      
      const data = await response.json()
      setGeneratedCode(data.code || codeExamples[language])
    } catch {
      setGeneratedCode(`// Generated ${language} code for: ${prompt}\n\n${codeExamples[language]}`)
    }
    
    setIsGenerating(false)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card-bg rounded-3xl p-6 h-[500px] flex flex-col">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">{'</>'}</span>
        </div>
        <div>
          <h3 className="font-bold">Code Assistant</h3>
          <p className="text-xs text-gray">Powered by AI • {language}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="flex gap-2 flex-wrap">
          {Object.keys(codeExamples).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang)
                setGeneratedCode(codeExamples[lang])
              }}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                language === lang ? 'gradient-bg text-white' : 'bg-white/5 text-gray hover:text-light'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what code you need... (e.g., 'a function to process user data with timestamps')"
            className="w-full h-20 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm resize-none"
          />
          
          <div className="flex-1 bg-darker rounded-xl p-4 overflow-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray">{language.toUpperCase()}</span>
              <button
                onClick={copyCode}
                className="text-xs text-gray hover:text-primary flex items-center gap-1"
              >
                {copied ? <Check size={12} /> : <Copy size={12} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-sm font-mono text-green-400 whitespace-pre-wrap">
              {generatedCode}
            </pre>
          </div>
        </div>
      </div>

      <button
        onClick={generateCode}
        disabled={!prompt.trim() || isGenerating}
        className="mt-4 btn-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Send size={18} />
            Generate Code
          </>
        )}
      </button>
    </div>
  )
}
