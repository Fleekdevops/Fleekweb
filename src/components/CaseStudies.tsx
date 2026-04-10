'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Zap, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    title: 'TechLit Africa Kenya',
    industry: 'EdTech',
    service: 'AI Chatbot Development',
    challenge: 'Needed to handle 60% of student inquiries automatically to reduce support burden.',
    solution: 'Custom AI chatbot trained on educational content with multi-language support.',
    results: [
      { icon: TrendingUp, value: '60%', label: 'Inquiries Automated' },
      { icon: Users, value: '10K+', label: 'Students Served' },
      { icon: Zap, value: '24/7', label: 'Availability' },
      { icon: DollarSign, value: '40%', label: 'Cost Reduction' },
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
  },
  {
    title: 'FinServe Kenya',
    industry: 'FinTech',
    service: 'Machine Learning Solutions',
    challenge: 'High rate of false positives in fraud detection was affecting customer experience.',
    solution: 'Custom ML model for real-time fraud detection with adaptive learning.',
    results: [
      { icon: TrendingUp, value: '75%', label: 'Less False Positives' },
      { icon: DollarSign, value: '$2M+', label: 'Fraud Prevented' },
      { icon: Users, value: '500K', label: 'Users Protected' },
      { icon: Zap, value: '50ms', label: 'Detection Speed' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    title: 'RetailMax',
    industry: 'Retail',
    service: 'AI Analytics & Insights',
    challenge: 'Inventory management issues causing stockouts and overstocking losses.',
    solution: 'Predictive inventory system with real-time demand forecasting.',
    results: [
      { icon: DollarSign, value: '$5M', label: 'Losses Saved' },
      { icon: TrendingUp, value: '95%', label: 'Forecast Accuracy' },
      { icon: Zap, value: '30%', label: 'Efficiency Gain' },
      { icon: Users, value: '200+', label: 'Stores Deployed' },
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    title: 'HealthPlus',
    industry: 'Healthcare',
    service: 'Process Automation',
    challenge: 'Manual patient data entry consuming 40% of administrative time.',
    solution: 'AI-powered document processing and data entry automation.',
    results: [
      { icon: TrendingUp, value: '85%', label: 'Time Saved' },
      { icon: Zap, value: '99.5%', label: 'Data Accuracy' },
      { icon: Users, value: '50+', label: 'Staff Reassigned' },
      { icon: DollarSign, value: '$500K', label: 'Annual Savings' },
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-3 mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            See how we've helped businesses transform with AI-powered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className="card-bg rounded-3xl overflow-hidden group animate-fade-in hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-semibold">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">{study.service}</div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                
                <div className="mb-4">
                  <div className="text-sm text-gray mb-1">
                    <span className="font-semibold">Challenge:</span> {study.challenge}
                  </div>
                  <div className="text-sm text-gray">
                    <span className="font-semibold">Solution:</span> {study.solution}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-white/10">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <result.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                      <div className="text-lg font-black gradient-text">{result.value}</div>
                      <div className="text-xs text-gray">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
          >
            Start Your Success Story
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
