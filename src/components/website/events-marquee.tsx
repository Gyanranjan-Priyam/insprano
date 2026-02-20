"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { allEvents, eventCategories, type EventItem } from "@/data/eventData";

// ─── Event Card ───────────────────────────────────────────────────────────────

function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={event.viewDetailsUrl}
      className="group relative flex w-70 shrink-0 flex-col overflow-hidden border border-primary/30 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/70 hover:bg-card/50 hover:shadow-[0_0_24px_rgba(0,0,0,0.4)]"
      tabIndex={-1}
    >
      {/* HUD corners */}
      <div className="pointer-events-none absolute -left-px -top-px z-10 h-4 w-4 border-l-2 border-t-2 border-primary/50 transition-colors group-hover:border-primary" />
      <div className="pointer-events-none absolute -right-px -top-px z-10 h-4 w-4 border-r-2 border-t-2 border-primary/50 transition-colors group-hover:border-primary" />
      <div className="pointer-events-none absolute -bottom-px -left-px z-10 h-4 w-4 border-b-2 border-l-2 border-primary/50 transition-colors group-hover:border-primary" />
      <div className="pointer-events-none absolute -bottom-px -right-px z-10 h-4 w-4 border-b-2 border-r-2 border-primary/50 transition-colors group-hover:border-primary" />

      {/* Thumbnail */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={event.thumbnail}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="280px"
          unoptimized
          onError={(e) => {
            // Fallback gradient when image 404s
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category badge */}
        {event.tags?.[0] && (
          <div className="absolute right-2 top-2 border border-primary/60 bg-black/60 px-2 py-0.5 backdrop-blur-sm">
            <span className="font-mono text-[9px] tracking-[0.2em] text-primary">
              {event.tags[0].toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-sm font-black uppercase tracking-wider text-foreground leading-tight group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <p className="line-clamp-3 flex-1 font-mono text-[11px] leading-relaxed text-foreground/60">
          {event.shortDescription}
        </p>

        {/* Tags */}
        {event.tags && event.tags.length > 1 && (
          <div className="flex flex-wrap gap-1">
            {event.tags.slice(1).map((tag) => (
              <span
                key={tag}
                className="border border-primary/20 bg-primary/5 px-1.5 py-0.5 font-mono text-[9px] tracking-wider text-primary/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-2 border-t border-primary/20 pt-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-primary/80 group-hover:text-primary transition-colors">
            VIEW DETAILS →
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Single Marquee Row ───────────────────────────────────────────────────────

function MarqueeRow({
  events,
  reverse = false,
  speed = 35,
  paused = false,
}: {
  events: EventItem[];
  reverse?: boolean;
  speed?: number;
  paused?: boolean;
}) {
  // Duplicate items for seamless loop
  const items = [...events, ...events];
  const duration = `${Math.round((items.length * 300) / speed)}s`;

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background to-transparent" />

      <div
        className="flex gap-5 py-2"
        style={{
          width: "max-content",
          animation: `marquee-events ${duration} linear infinite${reverse ? " reverse" : ""}`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((event, i) => (
          <EventCard key={`${event.id}-${i}`} event={event} />
        ))}
      </div>
    </div>
  );
}

// ─── Category Pill ────────────────────────────────────────────────────────────

const ALL_ID = "all";

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative shrink-0 overflow-hidden border-2 px-6 py-2.5 font-mono text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-200 ${
        active
          ? "border-primary bg-primary/20 text-primary shadow-[0_0_20px_rgba(246,130,58,0.3)]"
          : "border-primary/40 bg-card/30 text-foreground/60 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(246,130,58,0.3)]"
      }`}
    >
      <span className="relative z-10">{label}</span>
      <div
        className={`absolute cursor-pointer inset-0 -z-0 bg-primary transition-transform duration-300 ${
          active ? "translate-y-0 cursor-pointer opacity-15" : "translate-y-full cursor-pointer group-hover:translate-y-0 group-hover:opacity-15"
        }`}
      />
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function EventsMarquee() {
  const [activeCategory, setActiveCategory] = React.useState<string>(ALL_ID);
  const [paused, setPaused] = React.useState(false);

  // Build filtered list
  const filteredEvents = React.useMemo(() => {
    if (activeCategory === ALL_ID) return allEvents;
    const cat = eventCategories.find((c) => c.id === activeCategory);
    return cat ? cat.events : allEvents;
  }, [activeCategory]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <CategoryPill
          label="All Events"
          active={activeCategory === ALL_ID}
          onClick={() => setActiveCategory(ALL_ID)}
        />
        {eventCategories.map((cat) => (
          <CategoryPill
            key={cat.id}
            label={cat.label}
            active={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
          />
        ))}
      </div>

      {/* Single marquee row */}
      <MarqueeRow events={filteredEvents} speed={35} paused={paused} />

      {/* Keyframe definition */}
      <style>{`
        @keyframes marquee-events {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
