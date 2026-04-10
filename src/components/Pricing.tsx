'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bot, Sparkles, ArrowRight, Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    description: 'Perfect for small businesses getting started with AI',
    features: [
      '1 AI Chatbot',
      '1,000 AI Conversations/month',
      'Basic Analytics',
      'Email Support',
      '3rd Party Integrations',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$4,999',
    description: 'For growing businesses that need more power',
    features: [
      '3 AI Chatbots',
      '10,000 AI Conversations/month',
      'Advanced Analytics',
      'Priority Support',
      'Custom Training',
      'CRM/ERP Integration',
      'API Access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited AI Chatbots',
      'Unlimited Conversations',
      'Custom ML Models',
      'Dedicated Account Manager',
      '24/7 Phone Support',
      'On-premise Deployment',
      'Custom Integrations',
      'SLA Guarantee',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-3 mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-bg rounded-3xl p-8 relative animate-fade-in hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-black gradient-text mb-2">{plan.price}</div>
                {plan.price !== 'Custom' && (
                  <div className="text-gray text-sm">one-time setup</div>
                )}
                <p className="text-gray mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-center block transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray mb-4">Need a custom solution?</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            Contact us for custom pricing
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
