"use client"

import { useEffect, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "framer-motion"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

// Primary: #FF7A18 → [1, 0.478, 0.094]
// Accent:  #00F5D4 → [0, 0.961, 0.831]
const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.5,
  mapSamples: 16000,
  mapBrightness: 2.5,
  baseColor: [0.08, 0.08, 0.08],
  markerColor: [1, 0.478, 0.094],
  glowColor: [1, 0.478, 0.094],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
}

interface GlobeProps {
  className?: string
  config?: COBEOptions
  showHUD?: boolean
  label?: string
  coordinates?: string
  status?: string
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
  showHUD = true,
  label = "GRID::NETWORK",
  coordinates = "LAT 19.076° / LON 72.877°",
  status = "UPLINK ACTIVE",
}: GlobeProps) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005
        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    }, 0)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div
      data-slot="tron-globe"
      className={cn("relative", className)}
    >
      {/* HUD overlay */}
      {showHUD && (
        <>
          {/* Top-left corner bracket */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-6 w-6 border-l-2 border-t-2 border-primary" />
          {/* Top-right corner bracket */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-6 w-6 border-r-2 border-t-2 border-primary" />
          {/* Bottom-left corner bracket */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-6 w-6 border-b-2 border-l-2 border-primary" />
          {/* Bottom-right corner bracket */}
          <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-6 w-6 border-b-2 border-r-2 border-primary" />

          {/* Top label */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 flex items-center justify-center gap-2 px-8 py-1">
            <span className="h-px flex-1 bg-primary/30" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">
              {label}
            </span>
            <span className="h-px flex-1 bg-primary/30" />
          </div>

          {/* Bottom status bar */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-primary/60">
              {coordinates}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-accent/80">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              {status}
            </span>
          </div>
        </>
      )}

      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.04)_2px,rgba(0,0,0,0.04)_4px)]" />

      {/* Globe canvas */}
      <div className="relative mx-auto aspect-square w-full max-w-150">
        <canvas
          ref={canvasRef}
          className="size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX
            updatePointerInteraction(e.clientX)
          }}
          onPointerUp={() => updatePointerInteraction(null)}
          onPointerOut={() => updatePointerInteraction(null)}
          onMouseMove={(e) => updateMovement(e.clientX)}
          onTouchMove={(e) =>
            e.touches[0] && updateMovement(e.touches[0].clientX)
          }
        />
      </div>
    </div>
  )
}
