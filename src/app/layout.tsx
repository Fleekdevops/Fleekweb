import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'FleekTech AI Solutions | The Best AI Company in Africa',
  description: 'FleekTech AI Solutions - The Best AI Company in Africa. Based in Nairobi, Kenya with the finest team of AI experts, research lab, and premium AI services. Custom chatbots, machine learning, automation.',
  keywords: ['AI', 'Artificial Intelligence', 'Chatbots', 'Machine Learning', 'Automation', 'Kenya', 'Nairobi', 'Best AI Company Africa', 'FleekTech AI Solutions'],
  authors: [{ name: 'FleekTech AI Solutions' }],
  openGraph: {
    title: 'FleekTech AI Solutions | The Best AI Company in Africa',
    description: 'Transform your business with cutting-edge AI solutions from the best AI company in Africa. Based in Nairobi, Kenya.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FleekTech AI Solutions | The Best AI Company in Africa',
    description: 'Transform your business with cutting-edge AI solutions from the best AI company in Africa.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a0a18',
              color: '#f8f9ff',
              border: '1px solid rgba(0, 102, 255, 0.2)',
            },
          }}
        />
      </body>
    </html>
  )
}
