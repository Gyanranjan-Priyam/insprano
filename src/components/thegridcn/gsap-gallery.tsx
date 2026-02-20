"use client"

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type CSSProperties,
} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

export interface GsapGalleryProps {
  images: string[]
  accentColor?: string
  glowColor?: string
  bgColor?: string
}

/* ═══════════════════════════════════════════════════════════════
   LIGHTBOX
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
      { scale: 0.75, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.3)" },
      "-=0.15"
    )
    tl.fromTo(
      ".lb-bracket",
      { scale: 0 },
      { scale: 1, duration: 0.25, stagger: 0.04, ease: "power3.out" },
      "-=0.2"
    )
    tl.fromTo(
      ".lb-scanline",
      { y: "-100%" },
      { y: "300%", duration: 0.8, ease: "none" },
      "-=0.2"
    )
  }, [])

  const close = useCallback(() => {
    const tl = gsap.timeline({ onComplete: onClose })
    tl.to(frameRef.current, {
      scale: 0.85,
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
    })
    tl.to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1")
  }, [onClose])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [close])

  const bracketPositions: CSSProperties[] = [
    { top: -8, left: -8, borderTop: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}` },
    { top: -8, right: -8, borderTop: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}` },
    { bottom: -8, left: -8, borderBottom: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}` },
    { bottom: -8, right: -8, borderBottom: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}` },
  ]

  return (
    <div
      ref={overlayRef}
      onClick={close}
      className="fixed inset-0 flex items-center justify-center"
      style={{
        zIndex: 9999,
        background: "rgba(18,18,18,0.92)",
        backdropFilter: "blur(16px)",
        cursor: "pointer",
      }}
    >
      <div
        ref={frameRef}
        onClick={(e) => e.stopPropagation()}
        className="relative"
        style={{ maxWidth: "90vw", maxHeight: "85vh", cursor: "default" }}
      >
        {bracketPositions.map((pos, i) => (
          <span
            key={i}
            className="lb-bracket pointer-events-none absolute"
            style={{ ...pos, width: 24, height: 24, zIndex: 2 }}
          />
        ))}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            border: `1px solid ${accentColor}50`,
            boxShadow: `0 0 40px ${accentColor}15, inset 0 0 30px ${accentColor}05`,
          }}
        />

        <div
          className="lb-scanline pointer-events-none absolute left-0 right-0"
          style={{
            height: 2,
            background: `linear-gradient(90deg, transparent, ${glowColor}90, transparent)`,
            zIndex: 3,
          }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
            zIndex: 2,
          }}
        />

        <img
          src={src}
          alt=""
          draggable={false}
          className="block"
          style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }}
        />

        <div
          className="absolute -top-7 right-0 font-mono text-[10px] uppercase tracking-widest"
          style={{ color: `${accentColor}80` }}
        >
          ESC / CLICK TO CLOSE
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL CARD
   ═══════════════════════════════════════════════════════════════ */

function ScrollCard({
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
  onOpen: (s: string) => void
}) {
  const bracketPositions: CSSProperties[] = [
    { top: 0, left: 0, borderTop: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}`, zIndex: 5 },
    { top: 0, right: 0, borderTop: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}`, zIndex: 5 },
    { bottom: 0, left: 0, borderBottom: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}`, zIndex: 5 },
    { bottom: 0, right: 0, borderBottom: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}`, zIndex: 5 },
  ]

  return (
    <div
      className="scroll-card group relative shrink-0 cursor-pointer overflow-hidden"
      onClick={() => onOpen(src)}
      style={{
        width: "clamp(280px, 22vw, 400px)",
        height: "60vh",
        border: `1px solid ${accentColor}20`,
      }}
    >
      {bracketPositions.map((pos, i) => (
        <span
          key={i}
          className="pointer-events-none absolute h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={pos}
        />
      ))}

      <img
        src={src}
        alt=""
        loading="lazy"
        draggable={false}
        className="scroll-card-img h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Hover gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "linear-gradient(to top, rgba(18,18,18,0.8), transparent 50%)",
          zIndex: 2,
        }}
      />

      {/* CRT scanlines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
          zIndex: 3,
        }}
      />

      {/* Edge glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 25px ${accentColor}12, 0 0 20px ${accentColor}08`,
          zIndex: 2,
        }}
      />

      {/* Bottom HUD */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 font-mono text-[10px] uppercase tracking-widest opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ color: accentColor, zIndex: 4 }}
      >
        <span>FRAME_{String(index + 1).padStart(3, "0")}</span>
        <span className="flex items-center gap-1">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full animate-pulse"
            style={{ background: glowColor }}
          />
          VIEW
        </span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE CARD  (vertical scroll, slides in from right)
   ═══════════════════════════════════════════════════════════════ */

function MobileCard({
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
  onOpen: (s: string) => void
}) {
  return (
    <div
      className="mobile-scroll-card group relative cursor-pointer overflow-hidden"
      onClick={() => onOpen(src)}
      style={{
        aspectRatio: index % 3 === 0 ? "3/4" : "4/3",
        border: `1px solid ${accentColor}15`,
      }}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover transition-transform duration-500 active:scale-105"
      />

      {/* CRT */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
          zIndex: 2,
        }}
      />

      {/* Corner brackets */}
      {[
        { top: 0, left: 0, borderTop: `2px solid ${accentColor}`, borderLeft: `2px solid ${accentColor}` },
        { bottom: 0, right: 0, borderBottom: `2px solid ${accentColor}`, borderRight: `2px solid ${accentColor}` },
      ].map((pos, j) => (
        <span
          key={j}
          className="pointer-events-none absolute h-3 w-3 opacity-40"
          style={{ ...pos, zIndex: 3 } as CSSProperties}
        />
      ))}

      {/* Frame label */}
      <div
        className="absolute bottom-0 left-0 right-0 px-2 py-1 font-mono text-[8px] uppercase tracking-widest"
        style={{
          color: `${accentColor}90`,
          background: "linear-gradient(transparent, rgba(18,18,18,0.6))",
          zIndex: 3,
        }}
      >
        FRAME_{String(index + 1).padStart(3, "0")}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN GALLERY COMPONENT  — ScrollTrigger horizontal scroll
   ═══════════════════════════════════════════════════════════════ */

export function GsapGallery({
  images,
  accentColor = "#FF7A18",
  glowColor = "#00F5D4",
  bgColor = "#121212",
}: GsapGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // ── Responsive ──────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // ── Desktop: pinned horizontal scroll (right → left) ───────
  useEffect(() => {
    if (isMobile) return
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const totalScroll = track.scrollWidth - window.innerWidth

        // Pin the section and scrub the track from right to left
        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalScroll}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // Each card gets a subtle parallax on its image
        const imgs = track.querySelectorAll(".scroll-card-img")
        imgs.forEach((img) => {
          gsap.fromTo(
            img,
            { x: -30 },
            {
              x: 30,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${totalScroll}`,
                scrub: 1,
              },
            }
          )
        })

        // Cards stagger-reveal on first enter
        const cards = track.querySelectorAll(".scroll-card")
        gsap.fromTo(
          cards,
          { opacity: 0, x: 120, scale: 0.88 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )

        // Progress bar fill
        const progressFill = section.querySelector(".scroll-progress-fill")
        if (progressFill) {
          gsap.to(progressFill, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${totalScroll}`,
              scrub: 1,
            },
          })
        }
      }, section)

      ;(section as any).__gsapCtx = ctx
    }, 120)

    return () => {
      clearTimeout(timer)
      const ctx = (sectionRef.current as any)?.__gsapCtx
      ctx?.revert()
    }
  }, [isMobile, images.length])

  // ── Mobile: vertical list, each card slides in from right ──
  useEffect(() => {
    if (!isMobile) return
    const container = mobileRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const cards = container.querySelectorAll(".mobile-scroll-card")
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: 80, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, container)

    return () => ctx.revert()
  }, [isMobile, images.length])

  return (
    <>
      <div className="relative">
        {/* Background grid pattern */}
        <div
          className="pointer-events-none fixed inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${accentColor}05 1px, transparent 1px),
              linear-gradient(90deg, ${accentColor}05 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            zIndex: 0,
          }}
        />

        {/* ── DESKTOP: horizontal scroll section ────────────── */}
        {!isMobile ? (
          <div ref={sectionRef} className="relative h-screen overflow-hidden">
            <div
              ref={trackRef}
              className="flex h-full items-center gap-6 pl-10 pr-24"
              style={{ width: "fit-content" }}
            >
              {/* Intro label */}
              <div className="flex h-full w-60 shrink-0 flex-col justify-center pr-6">
                <div className="relative">
                  <span
                    className="pointer-events-none absolute -left-3 -top-3 h-4 w-4"
                    style={{
                      borderLeft: `2px solid ${glowColor}`,
                      borderTop: `2px solid ${glowColor}`,
                    }}
                  />
                  <p
                    className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: `${glowColor}80` }}
                  >
                    GRID ARCHIVE
                  </p>
                  <div
                    className="mb-4 h-px"
                    style={{
                      background: `linear-gradient(to right, ${accentColor}, transparent)`,
                    }}
                  />
                  <p
                    className="font-mono text-[11px] leading-relaxed"
                    style={{ color: "rgba(245,245,245,0.35)" }}
                  >
                    SCROLL TO EXPLORE
                    <br />
                    {images.length} CAPTURED FRAMES
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <span
                      className="inline-block h-px w-8"
                      style={{ background: accentColor }}
                    />
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest animate-pulse"
                      style={{ color: `${accentColor}80` }}
                    >
                      SCROLL →
                    </span>
                  </div>
                </div>
              </div>

              {images.map((src, i) => (
                <ScrollCard
                  key={i}
                  src={src}
                  index={i}
                  accentColor={accentColor}
                  glowColor={glowColor}
                  onOpen={setLightboxSrc}
                />
              ))}
            </div>

            {/* Side edge vignettes */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0"
              style={{
                width: 80,
                background: `linear-gradient(to right, ${bgColor}, transparent)`,
                zIndex: 5,
              }}
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-0"
              style={{
                width: 80,
                background: `linear-gradient(to left, ${bgColor}, transparent)`,
                zIndex: 5,
              }}
            />

            {/* progress bar at the bottom */}
            <div
              className="scroll-progress pointer-events-none absolute bottom-6 left-1/2 h-px -translate-x-1/2"
              style={{
                width: "min(60vw, 400px)",
                background: `${accentColor}20`,
                zIndex: 6,
              }}
            >
              <div
                className="scroll-progress-fill h-full origin-left"
                style={{ background: accentColor, transform: "scaleX(0)" }}
              />
            </div>
          </div>
        ) : (
          /* ── MOBILE: vertical, slide-from-right ─────────── */
          <div
            ref={mobileRef}
            className="grid grid-cols-2 gap-2 px-3 py-6"
          >
            {images.map((src, i) => (
              <MobileCard
                key={i}
                src={src}
                index={i}
                accentColor={accentColor}
                glowColor={glowColor}
                onOpen={setLightboxSrc}
              />
            ))}
          </div>
        )}

        {/* Bottom vignette */}
        <div
          className="pointer-events-none fixed bottom-0 left-0 right-0"
          style={{
            height: 80,
            background: `linear-gradient(to top, ${bgColor}, transparent)`,
            zIndex: 10,
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
