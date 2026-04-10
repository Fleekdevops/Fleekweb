'use client'

import { Mail, Phone, Linkedin, Twitter } from 'lucide-react'

const teamMembers = [
  {
    name: 'Carlos K. Koilai',
    role: 'Chief AI Architect',
    bio: 'Visionary leader with 15+ years in AI/ML. Pioneering the next generation of intelligent systems.',
    image: 'https://i.ibb.co/67HQfKYW/Zingri.jpg',
    linkedin: '#',
    email: 'smartjinxkimani@gmail.com',
    phone: '+254797132940',
  },
  {
    name: 'Nelson M. Macharia',
    role: 'Chief Executive Officer',
    bio: 'Strategic leader driving AI adoption across enterprises. Expert in scaling AI operations.',
    image: 'https://i.ibb.co/XkkjwmSP/Nelson.jpg',
    linkedin: '#',
    email: 'Machariamainanelson@gmail.com',
    phone: '+254111839718',
  },
  {
    name: 'Godfrey K. Nduati',
    role: 'Chief AI Marketing Officer',
    bio: 'AI marketing pioneer. Helping businesses leverage AI for growth and brand building.',
    image: 'https://i.ibb.co/nq7jr7hn/gody.jpg',
    linkedin: '#',
    email: 'Godfreynduati20@gmail.com',
    phone: '0700059980',
  },
  {
    name: 'Eustace Mutua',
    role: 'Head of Customer Success',
    bio: 'Ensuring client success with AI implementations. Building lasting partnerships.',
    image: 'https://i.ibb.co/209cDJrq/Mutua.jpg',
    linkedin: 'https://linkedin.com/in/eustace-muteru',
    email: 'mutuaeustace@gmail.com',
    twitter: '#',
    phone: '+254114882510',
  },
  {
    name: 'Josphat Wachira',
    role: 'AI Marketing Lead',
    bio: 'Digital marketing expert with deep AI expertise. Driving engagement through intelligent campaigns.',
    image: 'https://i.ibb.co/DyFS4bR/IMG-20251028-WA0011.jpg',
    linkedin: '#',
    email: 'josphatwachira33@gmail.com',
  },
  {
    name: 'Salome Wairimu',
    role: 'Customer Success Manager',
    bio: 'Client advocate ensuring seamless AI integration. Coordinating teams for optimal delivery.',
    image: 'https://i.ibb.co/vCVKXpQN/IMG-20251103-WA0029.jpg',
    linkedin: '#',
    email: 'khalifasallie55@gmail.com',
  },
  {
    name: 'Tracy Risancho',
    role: 'AI Design Lead',
    bio: 'Creative AI specialist blending aesthetics with intelligence. Creating beautiful AI experiences.',
    image: 'https://i.ibb.co/5g29nLns/IMG-20251208-WA0022.jpg',
    linkedin: '#',
  },
  {
    name: 'Caleb Juma',
    role: 'AI Frontend Engineer',
    bio: 'Building intuitive interfaces for AI applications. Making complex AI accessible to everyone.',
    image: 'https://i.ibb.co/RkDbJjZL/IMG-20251215-WA0017.jpg',
    linkedin: '#',
    email: 'cjuma@example.com',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 relative bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16 animate-fade-in"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4">
            Meet Our <span className="gradient-text">AI Experts</span>
          </h2>
          <p className="text-gray text-lg max-w-2xl mx-auto">
            The brilliant minds behind our AI innovations. Experts dedicated to transforming businesses through intelligent technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="card-bg rounded-3xl overflow-hidden card-hover group hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <span className="text-accent text-sm font-semibold">{member.role}</span>
                <p className="text-gray text-sm mt-3 mb-4 line-clamp-2">{member.bio}</p>

                <div className="flex items-center gap-2">
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Mail size={16} />
                    </a>
                  )}
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Phone size={16} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
