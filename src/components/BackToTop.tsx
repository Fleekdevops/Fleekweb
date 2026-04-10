'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      
      setScrollProgress(progress)
      setIsVisible(scrollTop > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 gradient-bg z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </>
  )
}
