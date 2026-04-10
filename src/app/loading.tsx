export default function Loading() {
  return (
    <div className="min-h-screen bg-darker flex items-center justify-center">
      <div className="text-center">
        <div
          className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 animate-spin"
        >
          <span className="text-4xl">🤖</span>
        </div>
        <div className="space-y-2 animate-fade-in">
          <h2 className="text-2xl font-bold gradient-text">Loading Fleek AI</h2>
          <div className="flex items-center justify-center gap-1">
            <span className="text-gray animate-pulse">Initializing AI systems</span>
            <span className="text-gray animate-pulse delay-100">.</span>
            <span className="text-gray animate-pulse delay-200">.</span>
            <span className="text-gray animate-pulse delay-300">.</span>
          </div>
        </div>
      </div>
    </div>
  )
}