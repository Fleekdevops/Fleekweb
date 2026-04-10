import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Fleek AI | AI-Powered Technology Solutions',
  description: 'Transform your business with cutting-edge AI solutions. Custom chatbots, machine learning models, automation, and intelligent tools powered by Fleek Tech.',
  keywords: ['AI', 'Artificial Intelligence', 'Chatbots', 'Machine Learning', 'Automation', 'Kenya', 'Nairobi', 'Fleek Tech'],
  authors: [{ name: 'Fleek Tech Inc.' }],
  openGraph: {
    title: 'Fleek AI | AI-Powered Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fleek AI | AI-Powered Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions.',
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
