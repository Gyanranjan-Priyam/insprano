"use client"

import { principal, faculty, devMembers, eventMembers } from "@/data/membersData"
import { FocusCards, type FocusCard } from "@/components/website/focus-cards"

/* ═══════════════════════════════════════════════════════════════
   SECTION HEADING — reusable HUD-styled heading with brackets
   ═══════════════════════════════════════════════════════════════ */
function SectionHeading({
  tag,
  title,
  count,
}: {
  tag: string
  title: string
  count?: number
}) {
  return (
    <div className="relative mx-auto max-w-5xl border border-primary/20 bg-background/60 backdrop-blur-sm mb-8">
      {/* Corner brackets */}
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary" />

      <div className="px-6 py-4 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-primary/60">
            {tag}
          </p>
          <h2 className="font-display text-2xl uppercase tracking-wider text-foreground sm:text-3xl">
            {title}
          </h2>
        </div>
        {count !== undefined && (
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            {count.toString().padStart(2, "0")} {count === 1 ? "MEMBER" : "MEMBERS"}
          </span>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function AboutUsPage() {
  // Map members to FocusCard format
  const facultyCards: FocusCard[] = faculty.map((m) => ({
    title: m.name,
    src: m.image,
    subtitle: m.role,
    email: m.email,
  }))

  const devCards: FocusCard[] = devMembers.map((m) => ({
    title: m.name,
    src: m.image,
    subtitle: m.role,
    email: m.email,
  }))

  const eventCards: FocusCard[] = eventMembers.map((m) => ({
    title: m.name,
    src: m.image,
    subtitle: m.role,
    email: m.email,
  }))

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* ── Page Header ────────────────────────────────────────── */}
      <div className="px-4 pt-24 pb-12 sm:px-8 sm:pt-28">
        <div className="relative mx-auto max-w-5xl border border-primary/20 bg-background/60 backdrop-blur-sm">
          <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary" />
          <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary" />
          <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary" />
          <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary" />

          <div className="px-6 py-5">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-primary/60">
              INSPRANO 2026 &nbsp;/&nbsp; TEAM
            </p>
            <h1 className="font-display text-3xl uppercase tracking-wider text-foreground sm:text-4xl">
              ABOUT US
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-px flex-1 bg-primary/30" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/50">
                THE PEOPLE WHO MAKE IT HAPPEN
              </span>
              <span className="h-px flex-1 bg-primary/30" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 space-y-20 pb-20">
        {/* ═══ 1. PRINCIPAL ═══════════════════════════════════════ */}
        <section className="mx-auto max-w-5xl">
          <SectionHeading tag="HEAD OF INSTITUTION" title="PRINCIPAL" count={1} />

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm overflow-hidden border border-primary/20 bg-background/40">
              {/* Corner brackets */}
              <span className="pointer-events-none absolute left-0 top-0 z-20 h-3 w-3 border-l-2 border-t-2 border-primary/60" />
              <span className="pointer-events-none absolute right-0 top-0 z-20 h-3 w-3 border-r-2 border-t-2 border-primary/60" />
              <span className="pointer-events-none absolute bottom-0 left-0 z-20 h-3 w-3 border-b-2 border-l-2 border-primary/60" />
              <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-3 w-3 border-b-2 border-r-2 border-primary/60" />

              {/* Image */}
              <div className="aspect-3/4 w-full overflow-hidden">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>

              {/* CRT scanlines */}
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
                }}
              />

              {/* Info bar */}
              <div className="border-t border-primary/20 px-5 py-4 bg-background/60 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent/80 mb-1">
                  {principal.role}
                </p>
                <p className="text-lg font-medium text-foreground">
                  {principal.name}
                </p>
                {principal.email && (
                  <a
                    href={`mailto:${principal.email}`}
                    className="mt-1 inline-block font-mono text-[10px] tracking-wider text-primary/80 hover:text-primary transition-colors"
                  >
                    {principal.email}
                  </a>
                )}
              </div>

              {/* Subtle edge glow */}
              <div
                className="pointer-events-none absolute inset-0 z-20"
                style={{
                  boxShadow:
                    "inset 0 0 30px rgba(255,122,24,0.06), inset 0 0 80px rgba(255,122,24,0.03)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ═══ 2. FACULTY ═════════════════════════════════════════ */}
        <section className="mx-auto max-w-5xl">
          <SectionHeading
            tag="FACULTY COORDINATORS"
            title="FACULTY"
            count={faculty.length}
          />
          <FocusCards cards={facultyCards} />
        </section>

        {/* ═══ 3. DEV TEAM ════════════════════════════════════════ */}
        <section className="mx-auto max-w-5xl">
          <SectionHeading
            tag="WEBSITE & TECH"
            title="DEV TEAM"
            count={devMembers.length}
          />
          <FocusCards cards={devCards} />
        </section>

        {/* ═══ 4. EVENT MEMBERS ═══════════════════════════════════ */}
        <section className="mx-auto max-w-5xl">
          <SectionHeading
            tag="CORE TEAM"
            title="EVENT COORDINATORS"
            count={eventMembers.length}
          />
          <FocusCards cards={eventCards} />
        </section>
      </div>

      {/* ── Bottom status strip ────────────────────────────────── */}
      <div className="relative z-10 border-t border-primary/20 px-6 py-2 bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/30">
            INSPRANO &copy; 2026
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-accent/60">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </div>
  )
}
