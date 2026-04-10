'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Bot, Phone, Mail } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#tools', label: 'AI Tools' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark/98 backdrop-blur-xl py-3 shadow-lg border-b border-white/5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-black gradient-text">Fleek AI</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light/80 hover:text-accent font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+254758175057" className="flex items-center gap-2 text-gray hover:text-light transition-colors">
              <Phone size={16} />
              <span className="text-sm font-medium">+254 758 175 057</span>
            </a>
            <Link
              href="#contact"
              className="btn-primary px-6 py-3 rounded-full font-bold"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-light p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-light/80 hover:text-accent font-medium transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 py-2 border-t border-white/10 mt-2 pt-4">
                <a href="tel:+254758175057" className="flex items-center gap-2 text-gray">
                  <Phone size={16} />
                  <span className="text-sm">+254 758 175 057</span>
                </a>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary px-6 py-3 rounded-full font-bold text-center mt-2"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
