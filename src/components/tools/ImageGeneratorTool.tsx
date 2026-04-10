'use client'

import { useState } from 'react'
import { Send, Loader2, Download, Sparkles } from 'lucide-react'

const sampleImages = [
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80',
  'https://images.unsplash.com/photo-1684487747720-1ba29cda82f0?w=400&q=80',
  'https://images.unsplash.com/photo-1686191128892-3b37add4c844?w=400&q=80',
]

export default function ImageGeneratorTool() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [style, setStyle] = useState('realistic')

  const generateImage = async () => {
    if (!prompt.trim()) return
    setIsGenerating(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const randomImage = sampleImages[Math.floor(Math.random() * sampleImages.length)]
    setGeneratedImage(randomImage)
    setIsGenerating(false)
  }

  return (
    <div className="card-bg rounded-3xl p-6 h-[500px] flex flex-col">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold">AI Image Generator</h3>
          <p className="text-xs text-gray">Create images with AI</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        <div className="grid grid-cols-4 gap-2">
          {['realistic', 'artistic', '3D', 'anime'].map((s) => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              className={`px-2 py-1 rounded-lg text-xs font-medium transition-colors capitalize ${
                style === s ? 'gradient-bg text-white' : 'bg-white/5 text-gray hover:text-light'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to generate... (e.g., 'A futuristic cityscape at sunset with flying cars')"
          className="w-full h-20 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none text-sm resize-none"
        />

        <div className="flex-1 bg-darker rounded-xl overflow-hidden flex items-center justify-center">
          {generatedImage ? (
            <div className="relative w-full h-full">
              <img
                src={generatedImage}
                alt="Generated"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-3 right-3 px-3 py-2 rounded-lg bg-darker/80 text-white text-sm flex items-center gap-2 hover:bg-darker transition-colors">
                <Download size={16} />
                Download
              </button>
            </div>
          ) : (
            <div className="text-center text-gray">
              <div className="text-4xl mb-2">🎨</div>
              <p className="text-sm">Generated images will appear here</p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={generateImage}
        disabled={!prompt.trim() || isGenerating}
        className="mt-4 btn-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles size={18} />
            Generate Image
          </>
        )}
      </button>
    </div>
  )
}
