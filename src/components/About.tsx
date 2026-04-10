'use client'

import Link from 'next/link'
import { Bot, Cpu, Sparkles, ArrowRight, Globe, Shield, Users, Zap } from 'lucide-react'

const features = [
  { icon: Bot, title: 'AI-First Approach', desc: 'Every solution we build is powered by cutting-edge AI technology' },
  { icon: Cpu, title: 'Custom Solutions', desc: 'Tailored AI models designed specifically for your business needs' },
  { icon: Users, title: 'Expert Team', desc: '50+ AI specialists with deep expertise in machine learning' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security for your data and AI systems' },
  { icon: Zap, title: 'Fast Deployment', desc: 'Quick implementation without compromising on quality' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving clients in 30+ countries worldwide' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl blur-2xl opacity-20" />
              <div className="relative card-bg rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  alt="AI Technology"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Pioneering AI Excellence</div>
                      <div className="text-gray text-sm">200+ AI Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 card-bg rounded-2xl p-4 border border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">98%</div>
                  <div className="text-xs text-gray">Client Satisfaction</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 card-bg rounded-2xl p-4 border border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">15+</div>
                  <div className="text-xs text-gray">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in order-1 lg:order-2">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-6">
              Behind the <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-gray text-lg mb-6 leading-relaxed">
              At Fleek AI, we operate at the intersection of technical rigor and creative strategy. 
              We are not just a service provider; we are your AI engineering partners.
            </p>
            <p className="text-gray text-lg mb-8 leading-relaxed">
              Our mission is to strip away the complexity of the AI world and replace it with 
              high-performance solutions that work—flawlessly.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 card-bg rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
            >
              Partner With Us
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
