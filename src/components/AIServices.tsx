'use client'

import { 
  Bot, Brain, Workflow, BarChart3, Wand2, Database,
  Shield, Eye, Cpu, ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const aiServices = [
  {
    icon: Bot,
    title: 'AI Chatbot Development',
    description: 'Custom conversational AI chatbots for customer support, sales automation, and lead generation.',
    features: ['Multi-platform Deployment', 'Natural Language Processing', 'CRM Integration', 'Custom Training'],
    price: 'From $2,000',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Build and deploy custom ML models for prediction, classification, and optimization.',
    features: ['Predictive Analytics', 'Image Recognition', 'NLP Solutions', 'Recommendation Engines'],
    price: 'From $5,000',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows using AI. Reduce costs and increase efficiency.',
    features: ['Document Processing', 'Data Entry Automation', 'Email Management', 'Report Generation'],
    price: 'From $3,000',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: BarChart3,
    title: 'AI Analytics & Insights',
    description: 'Transform data into actionable insights with AI-powered dashboards and real-time reporting.',
    features: ['Real-time Dashboards', 'Trend Analysis', 'Custom Reports', 'API Integration'],
    price: 'From $2,500',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Wand2,
    title: 'Generative AI Content',
    description: 'Create content at scale with AI. From marketing copy to product descriptions.',
    features: ['Article Writing', 'Image Generation', 'Video Creation', 'Social Media'],
    price: 'From $1,500',
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: Database,
    title: 'AI Data Processing',
    description: 'Clean, structure, and analyze your data with AI. Turn messy data into business intelligence.',
    features: ['Data Cleaning', 'ETL Pipelines', 'Quality Assurance', 'Cloud Storage'],
    price: 'From $2,000',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Shield,
    title: 'AI Security Solutions',
    description: 'Protect your business with AI-powered threat detection and fraud prevention.',
    features: ['Threat Detection', 'Fraud Prevention', 'Access Control', 'Compliance'],
    price: 'From $4,000',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Deploy AI vision systems for quality control, object detection, and facial recognition.',
    features: ['Quality Inspection', 'Object Detection', 'Facial Recognition', 'Medical Imaging'],
    price: 'From $6,000',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: 'Custom AI Development',
    description: 'Full-stack AI solutions built from scratch. From concept to deployment.',
    features: ['Custom Models', 'API Development', 'Cloud Deployment', 'Ongoing Support'],
    price: 'Custom',
    color: 'from-yellow-500 to-green-500',
  },
]

export default function AIServices() {
  return (
    <section id="services" className="py-24 relative bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-3 mb-4">
            High-Performance <span className="gradient-text">AI Architecture</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            We engineer AI solutions that are fast, secure, and built to transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div
              key={service.title}
              className="group card-bg rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray">
                    <span className="text-accent">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-sm text-gray">Starting at</span>
                <span className="text-lg font-bold gradient-text">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2"
          >
            Get Custom AI Solution
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
