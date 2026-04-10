'use client'

import Link from 'next/link'
import { Bot, Brain, Zap, Shield, Globe, Users, ArrowRight, Cpu, Database, Workflow } from 'lucide-react'

const capabilities = [
  { name: 'GPT-4 & GPT-4o', category: 'LLMs' },
  { name: 'Claude', category: 'LLMs' },
  { name: 'LangChain', category: 'Frameworks' },
  { name: 'TensorFlow', category: 'ML' },
  { name: 'PyTorch', category: 'ML' },
  { name: 'OpenCV', category: 'Vision' },
  { name: 'Rasa', category: 'Chatbots' },
  { name: 'Hugging Face', category: 'NLP' },
  { name: 'AWS SageMaker', category: 'Cloud' },
  { name: 'Azure AI', category: 'Cloud' },
  { name: 'Google Vertex AI', category: 'Cloud' },
  { name: 'Custom LLMs', category: 'Custom' },
]

const expertise = [
  { name: 'AI Chatbots', percentage: 95 },
  { name: 'Machine Learning', percentage: 90 },
  { name: 'Process Automation', percentage: 88 },
  { name: 'Data Analytics', percentage: 92 },
]

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-6">
              Turning Complexity into <span className="gradient-text">Competitive Advantage</span>
            </h2>
            <p className="text-gray text-lg mb-8 leading-relaxed">
              We engineer high-performance AI infrastructure that transforms ambitious ideas into scalable market leaders. 
              Our team combines deep technical expertise with business acumen to deliver AI that drives real results.
            </p>

            <div className="space-y-6 mb-8">
              {expertise.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-primary font-bold">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full gradient-bg rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Work With Us
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="card-bg rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Technologies We Master</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {capabilities.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-white" size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{tech.name}</div>
                      <div className="text-xs text-gray">{tech.category}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text mb-1">50+</div>
                  <div className="text-xs text-gray">AI Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text mb-1">99.9%</div>
                  <div className="text-xs text-gray">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text mb-1">45ms</div>
                  <div className="text-xs text-gray">Avg Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
