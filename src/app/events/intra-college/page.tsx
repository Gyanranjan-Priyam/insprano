"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CRTEffect,
  GridScanOverlay,
  GlowContainer,
  Stat,
} from "@/components/thegridcn";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { intraBranches } from "@/data/eventData";

function BranchSlider({ branch }: { branch: (typeof intraBranches)[0] }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <div className="space-y-4">
      {/* Branch Heading */}
      <div className="container mx-auto space-y-1 border-l-4 border-primary/50 bg-panel px-4 py-3">
        <h2 className="font-display text-xl font-bold tracking-wider text-foreground">
          {branch.fullName}
          <span className="text-primary"> ({branch.label})</span>
        </h2>
        <p className="font-mono text-xs text-foreground/60">
          {branch.events.length} events available
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 z-10 -translate-y-1/2 rounded-sm border border-primary/40 bg-panel/90 p-1.5 text-primary backdrop-blur-sm transition hover:border-primary hover:bg-primary/20"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 z-10 -translate-y-1/2 rounded-sm border border-primary/40 bg-panel/90 p-1.5 text-primary backdrop-blur-sm transition hover:border-primary hover:bg-primary/20"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div
          ref={scrollRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-8 pb-2"
        >
          {branch.events.map((event) => (
            <div key={event.id} className="w-[72vw] max-w-68 shrink-0 snap-start">
              <Card className="group flex h-full flex-col overflow-hidden border-primary/30 bg-panel">
                <div className="relative h-36 w-full overflow-hidden bg-primary/5">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-panel via-panel/40 to-transparent" />
                </div>
                <CardHeader className="flex-1 p-3">
                  <CardTitle className="font-display text-sm leading-tight tracking-wider">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 font-mono text-[10px] text-foreground/60">
                    {event.shortDescription}
                  </CardDescription>
                </CardHeader>
                {event.tags && event.tags.length > 0 && (
                  <CardContent className="px-3 pb-2 pt-0">
                    <div className="flex flex-wrap gap-1">
                      {event.tags.slice(0, 2).map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-primary/50 font-mono text-[9px] text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
                <CardFooter className="p-3">
                  <Link href={event.viewDetailsUrl} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 font-mono text-[10px] tracking-wider hover:border-primary hover:bg-primary/10"
                    >
                      VIEW DETAILS →
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IntraCollegePage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* CRT Effect Overlay */}
      <CRTEffect />

      {/* Grid Scan Overlay */}
      <GridScanOverlay />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-primary/30 bg-panel">
        {/* Scanline effect */}
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-widest text-primary">
                  INSPRANO TECHFEST {new Date().getFullYear()}-
                  {String(new Date().getFullYear() + 1).slice(-2)} EDITION
                </span>
              </div>

              <h1 className="font-display text-5xl font-bold tracking-wider text-foreground lg:text-6xl">
                INTRA
                <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                  -COLLEGE
                </span>{" "}
                EVENTS
              </h1>

              <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-primary to-transparent" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="font-mono text-sm leading-relaxed text-foreground/80">
                Compete with your department peers in specialized technical events. Each branch brings unique challenges that test your domain knowledge, creativity, and problem-solving skills.
              </p>

              <GlowContainer className="border-l-2 border-primary/50 bg-primary/5 pl-4">
                <p className="font-mono text-xs italic text-primary">
                  Select your department below to explore branch-specific competitions!
                </p>
              </GlowContainer>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Stat label="BRANCHES" value="4" unit="DEPTS" />
              <Stat label="EVENTS" value="30+" unit="TOTAL" />
              <Stat label="CATEGORIES" value="10+" unit="TYPES" />
              <Stat label="PRIZES" value="TBA" unit="AMOUNT" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile: stacked branches with snap slider ── */}
      <section className="relative py-10 md:hidden">
        <div className="space-y-12">
          {intraBranches.map((branch) => (
            <BranchSlider key={branch.id} branch={branch} />
          ))}
        </div>
      </section>

      {/* ── Desktop: Tab navigation ── */}
      <section className="relative hidden py-16 md:block">
        <div className="container relative z-10 mx-auto px-4">
          <Tabs defaultValue="cse" className="w-full">
            <TabsList className="mb-8 grid h-auto w-full grid-cols-5 gap-1 rounded-none border border-primary/30 bg-panel p-1">
              {intraBranches.map((branch) => (
                <TabsTrigger
                  key={branch.id}
                  value={branch.id}
                  className="group flex flex-col gap-0.5 rounded-sm border border-transparent py-3 font-mono text-xs tracking-wider transition-all data-[state=active]:border-primary/50 data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-none"
                >
                  <span className="text-sm font-bold">{branch.label}</span>
                  <span className="text-[10px] text-foreground/50 group-data-[state=active]:text-primary/70">{branch.fullName}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {intraBranches.map((branch) => (
              <TabsContent key={branch.id} value={branch.id} className="space-y-8">
                {/* Branch Header */}
                <div className="space-y-2 border-l-4 border-primary/50 bg-panel px-6 py-4">
                  <h2 className="font-display text-3xl font-bold tracking-wider text-foreground">
                    {branch.fullName}
                    <span className="text-primary"> ({branch.label})</span>
                  </h2>
                  <p className="font-mono text-sm text-foreground/70">
                    {branch.events.length} events available in this department
                  </p>
                </div>

                {/* Events Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {branch.events.map((event) => (
                    <Card
                      key={event.id}
                      className="group relative overflow-hidden border-primary/30 bg-panel transition-all hover:border-primary hover:shadow-[0_0_30px_var(--primary)]/20"
                    >
                      <div className="relative h-48 w-full overflow-hidden bg-primary/5">
                        <Image
                          src={event.thumbnail}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-panel via-panel/50 to-transparent" />
                      </div>

                      <CardHeader className="p-6">
                        <CardTitle className="font-display text-xl tracking-wider">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="font-mono text-xs text-foreground/60">
                          {event.shortDescription}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-6 pb-2">
                        {event.tags && event.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="border-primary/50 font-mono text-[10px] text-primary"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>

                      <CardFooter className="p-6">
                        <Link href={event.viewDetailsUrl} className="w-full">
                          <Button
                            variant="outline"
                            className="w-full cursor-pointer border-primary/50 font-mono text-xs tracking-wider hover:border-primary hover:bg-primary/10"
                          >
                            VIEW DETAILS →
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
