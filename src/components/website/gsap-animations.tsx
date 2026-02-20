"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Hook for scroll-triggered fade-in from bottom
export function useScrollReveal(options?: {
  y?: number
  duration?: number
  stagger?: number
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const children = el.children

    gsap.set(children.length > 0 ? children : el, {
      y: options?.y ?? 60,
      opacity: 0,
    })

    const tl = gsap.to(children.length > 0 ? children : el, {
      y: 0,
      opacity: 1,
      duration: options?.duration ?? 0.8,
      stagger: options?.stagger ?? 0.15,
      delay: options?.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [options?.y, options?.duration, options?.stagger, options?.delay])

  return ref
}

// Component wrapper for scroll reveal
export function ScrollReveal({
  children,
  className,
  y = 60,
  duration = 0.8,
  stagger = 0.15,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  y?: number
  duration?: number
  stagger?: number
  delay?: number
}) {
  const ref = useScrollReveal({ y, duration, stagger, delay })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Hook for hero text reveal animation
export function useHeroReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    const tl = gsap.timeline()

    // Animate each child sequentially
    const children = Array.from(el.children)

    gsap.set(children, { y: 80, opacity: 0, scale: 0.95 })

    tl.to(children, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.3,
    })

    return () => {
      tl.kill()
    }
  }, [])

  return ref
}

// Parallax effect for backgrounds
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const el = ref.current

    gsap.to(el, {
      yPercent: -30 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [speed])

  return ref
}
