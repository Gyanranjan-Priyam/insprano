'use client'

import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onLoadingComplete?: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('INITIALIZING SYSTEM')
  const [showContent, setShowContent] = useState(true)

  useEffect(() => {
    const loadingStages = [
      { progress: 10, text: 'INITIALIZING SYSTEM', delay: 200 },
      { progress: 25, text: 'LOADING GRID PROTOCOLS', delay: 300 },
      { progress: 40, text: 'ESTABLISHING CONNECTION', delay: 400 },
      { progress: 55, text: 'SYNCHRONIZING DATA', delay: 300 },
      { progress: 70, text: 'RENDERING INTERFACE', delay: 400 },
      { progress: 85, text: 'OPTIMIZING PERFORMANCE', delay: 300 },
      { progress: 95, text: 'FINALIZING', delay: 200 },
      { progress: 100, text: 'SYSTEM READY', delay: 500 },
    ]

    let currentStage = 0
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        const stage = loadingStages[currentStage]
        setProgress(stage.progress)
        setLoadingText(stage.text)
        currentStage++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setShowContent(false)
          setTimeout(() => {
            onLoadingComplete?.()
          }, 500)
        }, 500)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  if (!showContent) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      {/* Animated Background with CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 0%, transparent calc(100% - 1px), #00d4ff calc(100% - 1px), #00d4ff 100%),
                linear-gradient(0deg, transparent 0%, transparent calc(100% - 1px), #00d4ff calc(100% - 1px), #00d4ff 100%)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridScroll 20s linear infinite',
            }}
          />
        </div>

        {/* Animated circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-96 w-96">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full border border-[#00d4ff]/30"
                style={{
                  animation: `pulse ${3 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                  transform: `scale(${1 + i * 0.2})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Rotating hex pattern */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div 
            className="h-64 w-64 opacity-10"
            style={{
              backgroundImage: 'repeating-conic-gradient(from 0deg, #00d4ff 0deg 60deg, transparent 60deg 120deg)',
              animation: 'spin 20s linear infinite',
            }}
          />
        </div>

        {/* Particle effect with divs */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#00d4ff]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      {/* Scanlines */}
      <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.05]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mb-12 animate-pulse">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-8 rounded-full bg-[#00d4ff]/20 blur-3xl" />
            
            {/* Logo container */}
            <div className="relative">
              <div className="text-center">
                <h1 className="mb-2 font-orbitron text-6xl font-black tracking-wider text-[#00d4ff] drop-shadow-[0_0_30px_rgba(0,212,255,0.8)] md:text-8xl">
                  CODE
                  <span className="text-white">BREAKERS</span>
                </h1>
                <div className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.3em] text-[#00d4ff]/70">
                  <div className="h-px w-8 bg-[#00d4ff]/50" />
                  <span>GCEK</span>
                  <div className="h-px w-8 bg-[#00d4ff]/50" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#00d4ff] shadow-[0_0_10px_#00d4ff]" />
            <p className="font-rajdhani text-lg tracking-[0.2em] text-[#00d4ff]/90 md:text-xl">
              {loadingText}
            </p>
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#00d4ff] shadow-[0_0_10px_#00d4ff]" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-md">
          {/* Frame corners */}
          <div className="relative mb-4">
            <div className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-[#00d4ff]" />
            <div className="absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-[#00d4ff]" />
            <div className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-[#00d4ff]" />
            <div className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-[#00d4ff]" />
            
            {/* Progress container */}
            <div className="relative h-2 overflow-hidden border border-[#00d4ff]/30 bg-black/50 backdrop-blur">
              {/* Background grid */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, #00d4ff 0, #00d4ff 1px, transparent 1px, transparent 4px)',
                }}
              />
              
              {/* Progress fill */}
              <div
                className="h-full bg-gradient-to-r from-[#00d4ff] to-[#00a8cc] shadow-[0_0_20px_#00d4ff] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                {/* Scanning line */}
                <div className="absolute right-0 top-0 h-full w-1 animate-pulse bg-white shadow-[0_0_10px_#fff]" />
              </div>
            </div>
          </div>

          {/* Progress percentage */}
          <div className="flex justify-between font-mono text-xs text-[#00d4ff]/60">
            <span>PROGRESS</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* System info */}
        <div className="mt-12 grid grid-cols-3 gap-8 font-mono text-[10px] text-[#00d4ff]/40">
          <div className="text-center">
            <div className="mb-1 text-[#00d4ff]/60">VERSION</div>
            <div>v2.0.26</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-[#00d4ff]/60">BUILD</div>
            <div>{new Date().getFullYear()}.02.08</div>
          </div>
          <div className="text-center">
            <div className="mb-1 text-[#00d4ff]/60">STATUS</div>
            <div className="flex items-center justify-center gap-1">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00ff00]" />
              <span>ONLINE</span>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="font-mono text-[10px] tracking-widest text-[#00d4ff]/30">
            ENTER THE GRID • BREAK THE CODE • BUILD THE FUTURE
          </p>
        </div>
      </div>

      {/* Vignette effect */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
    </div>
  )
}
