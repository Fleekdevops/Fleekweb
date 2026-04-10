'use client'

import { useState } from 'react'
import { Bot, Code, Image, FileText, X, ArrowRight } from 'lucide-react'
import ChatTool from './tools/ChatTool'
import CodeAssistantTool from './tools/CodeAssistantTool'
import ImageGeneratorTool from './tools/ImageGeneratorTool'

const aiTools = [
  {
    id: 'chat',
    icon: Bot,
    name: 'AI Chat',
    description: 'Conversational AI assistant for any question',
    color: 'from-blue-500 to-cyan-500',
    component: ChatTool,
  },
  {
    id: 'code',
    icon: Code,
    name: 'Code Assistant',
    description: 'Generate code in multiple languages',
    color: 'from-green-500 to-emerald-500',
    component: CodeAssistantTool,
  },
  {
    id: 'image',
    icon: Image,
    name: 'Image Generator',
    description: 'Create stunning images from text',
    color: 'from-purple-500 to-pink-500',
    component: ImageGeneratorTool,
  },
  {
    id: 'document',
    icon: FileText,
    name: 'Document Analyzer',
    description: 'Extract insights from documents',
    color: 'from-orange-500 to-amber-500',
    component: null,
  },
]

export default function AITools() {
  const [activeTool, setActiveTool] = useState<string | null>(null)
  const activeToolData = aiTools.find(t => t.id === activeTool)

  return (
    <section id="tools" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Live Demo</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            Try Our <span className="gradient-text">AI Tools</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Experience the power of AI firsthand. Our tools are live and ready for you to try.
          </p>
        </div>

        {!activeTool ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {aiTools.map((tool, index) => (
                <button
                  key={tool.id}
                  onClick={() => tool.component && setActiveTool(tool.id)}
                  className={`card-bg rounded-3xl p-6 text-left hover:-translate-y-2 transition-all duration-300 animate-fade-in ${
                    !tool.component ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  disabled={!tool.component}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                    <tool.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                  <p className="text-gray text-sm mb-4">{tool.description}</p>
                  {tool.component ? (
                    <span className="text-primary text-sm font-semibold flex items-center gap-1">
                      Try Now <ArrowRight size={14} />
                    </span>
                  ) : (
                    <span className="text-gray text-sm">Coming Soon</span>
                  )}
                </button>
              ))}
            </div>

            <div className="card-bg rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Want a Custom AI Solution?</h3>
              <p className="text-gray mb-6 max-w-xl mx-auto">
                Our AI tools are just the beginning. We build custom AI solutions tailored to your specific business needs.
              </p>
              <a href="#contact" className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2">
                Get Custom AI
                <ArrowRight size={20} />
              </a>
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <button
              onClick={() => setActiveTool(null)}
              className="flex items-center gap-2 text-gray hover:text-light mb-6 transition-colors"
            >
              <X size={20} />
              Back to Tools
            </button>
            
            {activeToolData?.component && (
              <activeToolData.component />
            )}
          </div>
        )}
      </div>
    </section>
  )
}
