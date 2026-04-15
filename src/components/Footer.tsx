'use client'

import Link from 'next/link'
import { Bot, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#tools', label: 'AI Tools' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact Us' },
]

const aiServices = [
  { href: '#', label: 'AI Chatbots' },
  { href: '#', label: 'Machine Learning' },
  { href: '#', label: 'Process Automation' },
  { href: '#', label: 'AI Analytics' },
  { href: '#', label: 'Computer Vision' },
]

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-black gradient-text">FleekTech AI Solutions</span>
            </Link>
            <p className="text-gray mb-6 leading-relaxed">
              The Best AI Company in Africa. Located in Nairobi, Kenya. We have the finest team of AI experts, state-of-the-art research lab, and premium AI services to transform your business.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">AI Services</h4>
            <ul className="space-y-3">
              {aiServices.map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-gray hover:text-accent transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+254758175057" className="text-gray hover:text-accent transition-colors">
                  +254 758 175 057
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:Fleektechinc@gmail.com" className="text-gray hover:text-accent transition-colors">
                  Fleektechinc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray text-sm">
                © {new Date().getFullYear()} FleekTech AI Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="#" className="text-gray hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray hover:text-accent transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray hover:text-accent transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
