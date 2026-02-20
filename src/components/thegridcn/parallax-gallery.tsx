"use client"

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  type CSSProperties,
} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

export interface ParallaxGalleryProps {
  images: string[]
  /** Accent colour for glows / borders (default "#FF7A18") */
  accentColor?: string
  /** Secondary glow colour (default "#00F5D4") */
  glowColor?: string
  /** Background colour for vignette (default "#121212") */
  bgColor?: string
}

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

/** Distribute images into columns for masonry layout */
function distributeToColumns(images: string[], cols: number): string[][] {
  const columns: string[][] = Array.from({ length: cols }, () => [])
  images.forEach((img, i) => columns[i % cols].push(img))
  return columns
}

/** Get a pseudo-random parallax speed based on column index */
function getParallaxSpeed(colIndex: number, totalCols: number): number {
  const speeds = [-120, -80, -200, -60, -160, -100]
  return speeds[colIndex % speeds.length]
}

/** Get a pseudo-random initial Y offset for stagger */
function getInitialOffset(colIndex: number): number {
  const offsets = [40, 80, 20, 100, 50, 70]
  return offsets[colIndex % offsets.length]
}

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function Lightbox({
  src,
  onClose,
  accentColor,
  glowColor,
}: {
  src: string
  onClose: () => void
  accentColor: string
  glowColor: string
}) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    )
    tl.fromTo(
      frameRef.current,
      { scale: 0.8, opacity: 0, rotateX: 8 },
      { scale: 1, opacity: 1, rotateX: 0, duration: 0.5, ease: "back.out(1.4)" },
      "-=0.15"
    )
    // Corner brackets animate in
    tl.fromTo(
      ".lightbox-bracket",
      { scaleX: 0, scaleY: 0 },
      { scaleX: 1, scaleY: 1, duration: 0.3, stagger: 0.05, ease: "power3.out" },
      "-=0.3"
    )
    // Scanline sweep
    tl.fromTo(
      ".lightbox-scanline",
      { y: "-100%" },
      { y: "200%", duration: 0.8, ease: "none" },
      "-=0.4"
    )
  }, [])

  const handleClose = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: onClose,
    })
    tl.to(frameRef.current, {
      scale: 0.85,
      opacity: 0,
      rotateX: -5,
      duration: 0.35,
      ease: "power2.in",
    })
    tl.to(overlayRef.current, { opacity: 0, duration: 0.25 }, "-=0.15")
  }, [onClose])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [handleClose])

  return (
    <div
      ref={overlayRef}
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center"
      style={{
        zIndex: 9999,
        background: "rgba(18, 18, 18, 0.88)",
        backdropFilter: "blur(12px)",
        cursor: "pointer",
        perspective: "1200px",
      }}
    >
      <div
        ref={frameRef}
        onClick={(e) => e.stopPropagation()}
        className="relative"
        style={{
          maxWidth: "85vw",
          maxHeight: "85vh",
          cursor: "default",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Corner brackets — HUD style */}
        {[
          { top: -6, left: -6, borderTop: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}` },
          { top: -6, right: -6, borderTop: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}` },
          { bottom: -6, left: -6, borderBottom: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}` },
          { bottom: -6, right: -6, borderBottom: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}` },
        ].map((style, i) => (
          <span
            key={i}
            className="lightbox-bracket pointer-events-none absolute"
            style={{
              ...style,
              width: 20,
              height: 20,
              zIndex: 2,
            } as CSSProperties}
          />
        ))}

        {/* Glow border */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            border: `1px solid ${accentColor}40`,
            boxShadow: `0 0 30px ${accentColor}20, inset 0 0 30px ${accentColor}08`,
          }}
        />

        {/* Scanline sweep effect */}
        <div
          className="lightbox-scanline pointer-events-none absolute left-0 right-0"
          style={{
            height: 2,
            background: `linear-gradient(90deg, transparent, ${glowColor}80, transparent)`,
            zIndex: 3,
          }}
        />

        {/* CRT scanline overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
            zIndex: 2,
          }}
        />

        <img
          ref={imgRef}
          src={src}
          alt=""
          draggable={false}
          style={{
            display: "block",
            maxWidth: "85vw",
            maxHeight: "85vh",
            objectFit: "contain",
          }}
        />

        {/* Close hint */}
        <div
          className="absolute -top-8 right-0 font-mono text-[10px] uppercase tracking-widest"
          style={{ color: `${accentColor}80` }}
        >
          ESC / CLICK TO CLOSE
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SINGLE IMAGE CARD
   ═══════════════════════════════════════════════════════════════ */

function GalleryCard({
  src,
  index,
  accentColor,
  glowColor,
  onOpen,
}: {
  src: string
  index: number
  accentColor: string
  glowColor: string
  onOpen: (src: string) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  // Mouse-tilt parallax on each card
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(card, {
        rotateY: x * 12,
        rotateX: -y * 8,
        duration: 0.4,
        ease: "power2.out",
      })
      // Inner image slight shift for depth
      gsap.to(imgRef.current, {
        x: x * 10,
        y: y * 10,
        scale: 1.08,
        duration: 0.4,
        ease: "power2.out",
      })
      // Move glow to cursor
      gsap.to(glowRef.current, {
        x: x * rect.width * 0.3,
        y: y * rect.height * 0.3,
        opacity: 0.7,
        duration: 0.4,
      })
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    })
    gsap.to(imgRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
    })
    gsap.to(glowRef.current, { opacity: 0, duration: 0.4 })
  }, [])

  return (
    <div
      ref={cardRef}
      onClick={() => onOpen(src)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="gallery-card group relative cursor-pointer overflow-hidden"
      style={{
        perspective: "600px",
        transformStyle: "preserve-3d",
        willChange: "transform",
        marginBottom: 12,
        border: `1px solid ${accentColor}20`,
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = `${accentColor}60`
      }}
      onMouseOut={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = `${accentColor}20`
      }}
    >
      {/* Corner brackets */}
      <span
        className="pointer-events-none absolute left-0 top-0 h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          borderLeft: `2px solid ${accentColor}`,
          borderTop: `2px solid ${accentColor}`,
          zIndex: 3,
        }}
      />
      <span
        className="pointer-events-none absolute right-0 top-0 h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          borderRight: `2px solid ${accentColor}`,
          borderTop: `2px solid ${accentColor}`,
          zIndex: 3,
        }}
      />
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          borderBottom: `2px solid ${accentColor}`,
          borderLeft: `2px solid ${accentColor}`,
          zIndex: 3,
        }}
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          borderBottom: `2px solid ${accentColor}`,
          borderRight: `2px solid ${accentColor}`,
          zIndex: 3,
        }}
      />

      {/* Hover glow blob */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}30, transparent 70%)`,
          opacity: 0,
          zIndex: 2,
          filter: "blur(20px)",
        }}
      />

      {/* CRT scanlines overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)",
          zIndex: 2,
        }}
      />

      {/* Edge glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 20px ${accentColor}15, 0 0 20px ${accentColor}10`,
          zIndex: 2,
        }}
      />

      {/* Image with parallax-ready wrapper */}
      <div className="overflow-hidden">
        <img
          ref={imgRef}
          src={src}
          alt=""
          loading="lazy"
          draggable={false}
          className="block w-full"
          style={{
            display: "block",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      </div>

      {/* Bottom HUD info bar on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-2 py-1 font-mono text-[9px] uppercase tracking-widest opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `linear-gradient(transparent, ${accentColor}15)`,
          color: `${accentColor}90`,
          zIndex: 3,
        }}
      >
        <span>FRAME_{String(index + 1).padStart(3, "0")}</span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block h-1 w-1 rounded-full animate-pulse"
            style={{ background: glowColor }}
          />
          ENLARGE
        </span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PARALLAX GALLERY COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export function ParallaxGallery({
  images,
  accentColor = "#FF7A18",
  glowColor = "#00F5D4",
  bgColor = "#121212",
}: ParallaxGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<(HTMLDivElement | null)[]>([])
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [colCount, setColCount] = useState(4)

  // Responsive column count
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w < 640) setColCount(2)
      else if (w < 1024) setColCount(3)
      else if (w < 1440) setColCount(4)
      else setColCount(5)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const columns = useMemo(
    () => distributeToColumns(images, colCount),
    [images, colCount]
  )

  // ── GSAP Scroll-driven parallax ────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      // Each column scrolls at a different parallax speed
      columnsRef.current.forEach((col, i) => {
        if (!col) return
        const speed = getParallaxSpeed(i, colCount)

        gsap.to(col, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        })
      })

      // Stagger-reveal each card as it enters viewport
      const cards = container.querySelectorAll(".gallery-card")
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.94,
            rotateX: 4,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, container)

    return () => ctx.revert()
  }, [columns, colCount])

  // ── Initial entrance animation ──────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      // Animate the grid lines
      gsap.fromTo(
        ".gallery-grid-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.2,
        }
      )
    }, container)

    return () => ctx.revert()
  }, [colCount])

  return (
    <>
      {/* ── Scrollable parallax grid ────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{
          paddingTop: 40,
          paddingBottom: 200,
        }}
      >
        {/* Background grid pattern */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${accentColor}08 1px, transparent 1px),
              linear-gradient(90deg, ${accentColor}08 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            zIndex: 0,
          }}
        />

        {/* Masonry columns */}
        <div
          className="relative mx-auto flex gap-3 px-3 sm:gap-4 sm:px-6 lg:px-8"
          style={{
            maxWidth: 1600,
            zIndex: 1,
            alignItems: "flex-start",
          }}
        >
          {columns.map((col, colIndex) => (
            <div
              key={colIndex}
              className="relative flex-1"
              style={{ minWidth: 0 }}
            >
              {/* Vertical grid line on left edge */}
              {colIndex > 0 && (
                <div
                  className="gallery-grid-line pointer-events-none absolute -left-1.5 top-0 bottom-0 sm:-left-2"
                  style={{
                    width: 1,
                    background: `linear-gradient(to bottom, transparent, ${accentColor}15 20%, ${accentColor}15 80%, transparent)`,
                    transformOrigin: "top",
                    zIndex: 0,
                  }}
                />
              )}

              <div
                ref={(el) => { columnsRef.current[colIndex] = el }}
                style={{
                  paddingTop: getInitialOffset(colIndex),
                  willChange: "transform",
                }}
              >
                {col.map((src, imgIdx) => (
                  <GalleryCard
                    key={`${colIndex}-${imgIdx}`}
                    src={src}
                    index={colIndex * Math.ceil(images.length / colCount) + imgIdx}
                    accentColor={accentColor}
                    glowColor={glowColor}
                    onOpen={setLightboxSrc}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Top vignette */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-0"
          style={{
            height: 120,
            background: `linear-gradient(to bottom, ${bgColor}, transparent)`,
            zIndex: 2,
          }}
        />

        {/* Bottom vignette */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0"
          style={{
            height: 200,
            background: `linear-gradient(to top, ${bgColor}, transparent)`,
            zIndex: 2,
          }}
        />
      </div>

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          onClose={() => setLightboxSrc(null)}
          accentColor={accentColor}
          glowColor={glowColor}
        />
      )}
    </>
  )
}
