'use client'

import { useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Nelly Cheboi',
    role: 'CEO',
    company: 'TechLit Africa Kenya',
    image: 'https://i.ibb.co/fz2Msp9M/IMG-7563.jpg',
    content: 'Fleek AI transformed our educational platform with their custom chatbot. The AI support system they built handles 60% of student inquiries, freeing our team to focus on quality education. Absolutely game-changing!',
    rating: 5,
  },
  {
    name: 'Tonny Reilley',
    role: 'Founder',
    company: 'HealthPlus',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    content: 'The AI-powered analytics dashboard Fleek AI developed has revolutionized how we approach patient care. Real-time insights have improved our decision-making dramatically.',
    rating: 5,
  },
  {
    name: 'Sarah Kimani',
    role: 'CTO',
    company: 'FinServe Kenya',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Implementing machine learning models for fraud detection with Fleek AI reduced our false positives by 75%. Their expertise in AI security is unmatched.',
    rating: 5,
  },
  {
    name: 'James Mwangi',
    role: 'Director',
    company: 'RetailMax',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'The predictive inventory system Fleek AI built has saved us millions in reduced stockouts and overstocking. Their AI solutions deliver real ROI.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = testimonials[currentIndex]

  return (
    <section className="py-24 relative bg-darker/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-black mt-3 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              onClick={() => setCurrentIndex(index)}
              className={`card-bg rounded-3xl p-8 cursor-pointer hover:bg-white/5 transition-all animate-fade-in ${
                currentIndex === index ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <p className="text-gray mb-6 leading-relaxed line-clamp-4">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray">
                    {testimonial.role}, <span className="text-primary">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
