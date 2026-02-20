"use client"

import dynamic from "next/dynamic"

import {
  HackathonImageLinks,
  IdeationImageLinks,
  SessionImageLinks,
  CodeCheafImageLinks,
  WorkshopImageLinks,
  NineLockChallengeImageLinks,
  DevXImageLinks,
} from "@/data/galleryItems"

const GsapGallery = dynamic(
  () =>
    import("@/components/thegridcn/gsap-gallery").then((m) => ({
      default: m.GsapGallery,
    })),
  { ssr: false }
)

const ALL_IMAGES = [
  ...HackathonImageLinks,
  ...IdeationImageLinks,
  ...SessionImageLinks,
  ...CodeCheafImageLinks,
  ...WorkshopImageLinks,
  ...NineLockChallengeImageLinks,
  ...DevXImageLinks,
]

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* ── HUD Header (sticky) ─────────────────────────────────────── */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="px-4 pt-20 pb-4 sm:px-8 sm:pt-24">
          <div className="relative mx-auto max-w-5xl border border-primary/20 bg-background/60 backdrop-blur-sm">
            {/* Corner brackets */}
            <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
            <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary" />

            <div className="px-6 py-4">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-primary/60">
                    INSPRANO 2026 &nbsp;/&nbsp; GRID ARCHIVE
                  </p>
                  <h1 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl">
                    GALLERY
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    {ALL_IMAGES.length} FRAMES
                  </span>
                  <span className="h-px w-6 bg-primary/30" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                    SCROLL &nbsp;·&nbsp; CLICK TO ENLARGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── GSAP Gallery ─────────────────────────────────────────────── */}
      <GsapGallery
        images={ALL_IMAGES}
        accentColor="#FF7A18"
        glowColor="#00F5D4"
        bgColor="#121212"
      />

      {/* ── Bottom status strip ──────────────────────────────────────── */}
      <div className="relative z-20 border-t border-primary/20 px-6 py-2 bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/30">
            INSPRANO &copy; 2026
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-accent/60">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            ARCHIVE ONLINE
          </span>
        </div>
      </div>
    </div>
  )
}
