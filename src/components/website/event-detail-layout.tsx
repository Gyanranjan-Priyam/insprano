"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  IndianRupee,
  Trophy,
  Clock,
  Phone,
  ChevronLeft,
  Share2,
  Circle,
} from "lucide-react";
import { CRTEffect, GridScanOverlay } from "@/components/thegridcn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { EventItem } from "@/data/eventData";

type Props = {
  event: EventItem;
  categoryLabel: string;         // e.g. "KiloBots" or "Civil Engineering"
  backHref: string;
  backLabel: string;
};

export function EventDetailLayout({ event, categoryLabel, backHref, backLabel }: Props) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: event.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <CRTEffect />
      <GridScanOverlay />

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <section className="relative h-[55vw] min-h-64 max-h-[480px] w-full overflow-hidden bg-primary/5">
        <Image
          src={event.thumbnail}
          alt={event.title}
          fill
          priority
          className="object-cover"
        />
        {/* dark gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-background/40 via-transparent to-transparent" />

        {/* Top bar: back + share */}
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 pt-4 sm:px-6">
          <Link href={backHref}>
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 bg-background/60 font-mono text-[10px] text-foreground backdrop-blur-sm hover:bg-background/80 sm:text-xs"
            >
              <ChevronLeft className="mr-1 h-3 w-3" />
              {backLabel}
            </Button>
          </Link>
          <Button
            size="sm"
            variant="outline"
            onClick={handleShare}
            className="border-white/30 bg-background/60 font-mono text-[10px] text-foreground backdrop-blur-sm hover:bg-background/80 sm:text-xs"
          >
            <Share2 className="mr-1 h-3 w-3" />
            Share
          </Button>
        </div>

        {/* Bottom: category badge + title */}
        <div className="absolute bottom-0 left-0 px-4 pb-5 sm:px-8 sm:pb-7">
          <p className="mb-2 font-mono text-[10px] tracking-widest text-primary/80 sm:text-xs">
            {categoryLabel.toUpperCase()}
          </p>
          <h1 className="font-display text-3xl font-bold tracking-wider text-foreground drop-shadow-lg sm:text-4xl lg:text-5xl">
            {event.title}
          </h1>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">

          {/* ── Left Column ───────────────────────────────────────────── */}
          <main className="flex-1 min-w-0 space-y-10">
            {/* Tags */}
            {event.tags && event.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className="border-primary/50 font-mono text-[10px] text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* About the Event */}
            <section className="space-y-3">
              <h2 className="font-display text-xl font-bold tracking-wider text-foreground sm:text-2xl">
                About the Event
              </h2>
              <div className="h-0.5 w-16 bg-primary/60" />
              <p className="font-mono text-xs leading-relaxed text-foreground/75 sm:text-sm">
                {event.description ?? event.shortDescription}
              </p>
            </section>

            {/* Specifications */}
            {event.specifications && event.specifications.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wider text-foreground sm:text-2xl">
                  Bot Specifications
                </h2>
                <div className="h-0.5 w-16 bg-primary/60" />
                <ul className="space-y-2">
                  {event.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-xs text-foreground/75 sm:text-sm">
                      <Circle className="mt-1.5 h-2 w-2 shrink-0 fill-primary text-primary" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Rules & Guidelines */}
            {event.rules && event.rules.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wider text-foreground sm:text-2xl">
                  Rules &amp; Guidelines
                </h2>
                <div className="h-0.5 w-16 bg-primary/60" />
                <ul className="space-y-2">
                  {event.rules.map((rule, i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-xs text-foreground/75 sm:text-sm">
                      <Circle className="mt-1.5 h-2 w-2 shrink-0 fill-primary text-primary" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Event Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <section className="space-y-3">
                <h2 className="font-display text-xl font-bold tracking-wider text-foreground sm:text-2xl">
                  Event Gallery
                </h2>
                <div className="h-0.5 w-16 bg-primary/60" />
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {event.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square overflow-hidden border border-primary/20 bg-primary/5"
                    >
                      <Image
                        src={img}
                        alt={`${event.title} gallery ${i + 1}`}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* ── Right Sidebar ──────────────────────────────────────────── */}
          <aside className="w-full space-y-5 lg:w-80 lg:shrink-0 lg:self-start lg:sticky lg:top-24">

            {/* Event Details card */}
            <div className="space-y-3 border border-primary/25 bg-panel p-5">
              <h3 className="font-display text-base font-bold tracking-wider text-foreground">
                Event Details
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {event.eventDate && (
                  <div className="flex items-start gap-3 text-foreground/70">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <span className="block font-semibold text-foreground">{event.eventDate}</span>
                      {event.eventTime && <span className="text-foreground/50">{event.eventTime}</span>}
                    </span>
                  </div>
                )}
                {event.venue && (
                  <div className="flex items-start gap-3 text-foreground/70">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="font-semibold text-foreground">{event.venue}</span>
                  </div>
                )}
                {event.teamSize && (
                  <div className="flex items-start gap-3 text-foreground/70">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <span className="block text-foreground/50 tracking-widest text-[10px]">Team Size</span>
                      <span className="font-semibold text-foreground">{event.teamSize}</span>
                    </span>
                  </div>
                )}
                {event.entryFees && (
                  <div className="flex items-start gap-3 text-foreground/70">
                    <IndianRupee className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <span className="block text-foreground/50 tracking-widest text-[10px]">Entry Fees</span>
                      <span className="font-semibold text-foreground">{event.entryFees}</span>
                    </span>
                  </div>
                )}

                {/* Placeholder rows when data is TBA */}
                {!event.eventDate && (
                  <div className="flex items-center gap-3 text-foreground/40">
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>Date — TBA</span>
                  </div>
                )}
                {!event.venue && (
                  <div className="flex items-center gap-3 text-foreground/40">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>Venue — TBA</span>
                  </div>
                )}
              </div>

              {event.registrationUrl ? (
                <Link href={event.registrationUrl} target="_blank" className="mt-2 block">
                  <Button className="w-full border-2 border-primary bg-primary/20 font-mono text-xs tracking-wider text-primary hover:bg-primary hover:text-primary-foreground">
                    Register Now ↗
                  </Button>
                </Link>
              ) : (
                <Button
                  disabled
                  className="mt-2 w-full cursor-not-allowed border border-primary/20 bg-primary/5 font-mono text-xs tracking-wider text-primary/40"
                >
                  Registration Opening Soon
                </Button>
              )}
            </div>

            {/* Event Prizes card */}
            {event.prizes && event.prizes.length > 0 && (
              <div className="space-y-3 border border-primary/25 bg-panel p-5">
                <h3 className="font-display text-base font-bold tracking-wider text-foreground">
                  Event Prizes
                </h3>
                <div className="space-y-2">
                  {event.prizes.map((prize, i) => (
                    <div key={i} className="flex items-center gap-3 font-mono text-xs">
                      <Trophy
                        className={`h-4 w-4 shrink-0 ${
                          i === 0
                            ? "text-yellow-400"
                            : i === 1
                            ? "text-slate-300"
                            : "text-amber-600"
                        }`}
                      />
                      <span className="font-semibold text-foreground">
                        {prize.position} — {prize.reward}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Event Timeline card */}
            {event.timeline && event.timeline.length > 0 && (
              <div className="space-y-3 border border-primary/25 bg-panel p-5">
                <h3 className="font-display text-base font-bold tracking-wider text-foreground">
                  Event Timeline
                </h3>
                <div className="space-y-2">
                  {event.timeline.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-mono text-xs">
                      <Clock className="h-4 w-4 shrink-0 text-primary" />
                      <span>
                        <span className="text-foreground/50 tracking-widest text-[10px] block">{item.label}</span>
                        <span className="font-semibold text-foreground">{item.time}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact card */}
            {event.contacts && event.contacts.length > 0 && (
              <div className="space-y-3 border border-primary/25 bg-panel p-5">
                <h3 className="font-display text-base font-bold tracking-wider text-foreground">
                  Contact
                </h3>
                <div className="space-y-3">
                  {event.contacts.map((c, i) => (
                    <div key={i} className="flex items-start gap-3 font-mono text-xs">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>
                        <span className="block font-semibold text-foreground">{c.name}</span>
                        <a
                          href={`tel:${c.phone}`}
                          className="text-foreground/50 hover:text-primary transition-colors"
                        >
                          {c.phone}
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
