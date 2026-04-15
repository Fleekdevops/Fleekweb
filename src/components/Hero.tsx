'use client'

import Link from 'next/link'
import { Bot, ArrowRight, Sparkles, Cpu, Brain, Zap } from 'lucide-react'

const stats = [
  { number: '200+', label: 'AI Projects' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'AI Experts' },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <Sparkles size={16} />
                <span className="font-semibold text-sm">The Best AI Company in Africa</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                Engineering
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
                AI Excellence
              </h1>

              <p className="text-xl text-gray max-w-xl mb-8 leading-relaxed">
                We build high-performance AI ecosystems for brands that refuse to settle for the ordinary. Based in Nairobi, Kenya with the finest team of AI experts, state-of-the-art research lab, and premium AI services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="#contact"
                  className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="#services"
                  className="btn-secondary px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 text-lg"
                >
                  Explore Services
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-black gradient-text">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-3xl blur-2xl opacity-20 transform rotate-6" />
                <div className="relative card-bg rounded-3xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray text-sm ml-2">freezer-ai.js</span>
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center gap-2">
                      <Brain className="text-accent" size={20} />
                      <span className="text-gray">// AI Model Active</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="text-green-400">const response = await freez</div>
                    <div className="text-primary pl-4">.analyze(userInput)</div>
                    <div className="text-primary pl-4">.predict(trends)</div>
                    <div className="text-primary pl-4">.automate(process)</div>
                    <div className="text-accent pl-4">.execute();</div>
                    <div className="h-px bg-white/10" />
                    <div className="text-green-400">// Accuracy: 98.7%</div>
                    <div className="text-secondary">// Latency: 45ms</div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="text-accent" size={16} />
                      <span className="text-sm font-semibold text-accent">AI Processing</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="text-xs">
                        <div className="text-primary font-bold">45ms</div>
                        <div className="text-gray">Latency</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-accent font-bold">99.2%</div>
                        <div className="text-gray">Uptime</div>
                      </div>
                      <div className="text-xs">
                        <div className="text-secondary font-bold">24/7</div>
                        <div className="text-gray">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray text-sm text-center mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {['OpenAI', 'Anthropic', 'Google AI', 'Microsoft', 'AWS'].map((brand) => (
                <span key={brand} className="text-lg font-bold text-gray hover:text-light transition-colors cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
