"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CRTEffect,
  GridScanOverlay,
  GlowContainer,
  Stat,
} from "@/components/thegridcn";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { interCollegeEvents, kilobotsEvents, codebreakersEvents } from "@/data/eventData";

export default function InterCollegePage() {
  const sections = [
    {
      category: interCollegeEvents.find((e) => e.id === "inter-codebreakers")!,
      events: codebreakersEvents,
      href: "/events/inter-college/codebreakers",
    },
    {
      category: interCollegeEvents.find((e) => e.id === "inter-kilobots")!,
      events: kilobotsEvents,
      href: "/events/inter-college/kilobots",
    },
  ];

  const totalEvents = codebreakersEvents.length + kilobotsEvents.length;
  return (
    <div className="relative min-h-screen bg-background">
      {/* CRT Effect Overlay */}
      <CRTEffect />

      {/* Grid Scan Overlay */}
      <GridScanOverlay />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-primary/30 bg-panel">
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

        <div className="container relative z-10 mx-auto px-4 py-12 sm:py-20">
          <div className="mx-auto max-w-4xl space-y-6 text-center sm:space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-mono text-[10px] tracking-widest text-primary sm:text-xs">
                  INSPRANO TECHFEST {new Date().getFullYear()}-
                  {String(new Date().getFullYear() + 1).slice(-2)} EDITION
                </span>
              </div>

              <h1 className="font-display text-4xl font-bold tracking-wider text-foreground sm:text-5xl lg:text-6xl">
                INTER
                <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                  -COLLEGE
                </span>{" "}
                EVENTS
              </h1>

              <div className="mx-auto h-px w-32 bg-linear-to-r from-transparent via-primary to-transparent" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                Go head-to-head with the sharpest minds from colleges across the
                region. These flagship competitions push teams to their limits in
                cryptography, programming, and autonomous robotics.
              </p>

              <GlowContainer className="border-l-2 border-primary/50 bg-primary/5 pl-4 text-left">
                <p className="font-mono text-xs italic text-primary">
                  Represent your college. Outcode. Outbuild. Outlast.
                </p>
              </GlowContainer>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
              <Stat label="EVENTS" value={String(totalEvents)} unit="TOTAL" />
              <Stat label="CATEGORIES" value="2" unit="GROUPS" />
              <Stat label="FORMAT" value="Team" unit="BASED" />
              <Stat label="PRIZES" value="TBA" unit="AMOUNT" />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-10 md:py-16">
        <div className="container relative z-10 mx-auto px-4">
          <Tabs defaultValue="codebreakers" className="w-full">
            <TabsList className="mb-6 grid h-auto w-full grid-cols-2 gap-1 rounded-none border border-primary/30 bg-panel p-1 md:mb-8">
              {sections.map(({ category }) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id.replace("inter-", "")}
                  className="group flex flex-col gap-0.5 rounded-sm border border-transparent py-2 font-mono text-xs tracking-wider transition-all data-[state=active]:border-primary/50 data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-none sm:py-3"
                >
                  <span className="text-xs font-bold sm:text-sm">{category.title}</span>
                  <span className="hidden text-[10px] text-foreground/50 group-data-[state=active]:text-primary/70 sm:block">
                    {category.tags?.join(" · ")}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {sections.map(({ category, events, href }) => (
              <TabsContent
                key={category.id}
                value={category.id.replace("inter-", "")}
                className="space-y-6 sm:space-y-8"
              >
                {/* Category Header */}
                <div className="space-y-2 border-l-4 border-primary/50 bg-panel px-4 py-3 sm:px-6 sm:py-4">
                  <h2 className="font-display text-xl font-bold tracking-wider text-foreground sm:text-3xl">
                    {category.title.toUpperCase()}
                  </h2>
                  <p className="font-mono text-xs text-foreground/60 sm:text-sm">
                    {category.shortDescription}
                  </p>
                  <p className="font-mono text-[10px] text-foreground/40 sm:text-xs">
                    {events.length} event{events.length !== 1 ? "s" : ""} available
                  </p>
                </div>

                {/* Events Grid */}
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {events.map((event) => (
                    <Card
                      key={event.id}
                      className="group relative overflow-hidden border-primary/30 bg-panel transition-all hover:border-primary hover:shadow-[0_0_30px_var(--primary)]/20"
                    >
                      <div className="relative h-44 w-full overflow-hidden bg-primary/5 sm:h-48">
                        <Image
                          src={event.thumbnail}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-panel via-panel/50 to-transparent" />
                      </div>

                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle className="font-display text-lg tracking-wider sm:text-xl">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="font-mono text-xs text-foreground/60">
                          {event.shortDescription}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="px-4 pb-2 sm:px-6">
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

                      <CardFooter className="p-4 sm:p-6">
                        <Button
                          variant="outline"
                          className="w-full cursor-pointer border-primary/50 font-mono text-xs tracking-wider hover:border-primary hover:bg-primary/10"
                          disabled
                        >
                          COMING SOON
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {/* View All Link */}
                <div className="mt-6 text-center sm:mt-8">
                  <Link href={href}>
                    <Button
                      size="lg"
                      className="group relative w-full overflow-hidden border-2 border-primary bg-primary/20 font-mono text-xs font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_var(--primary)] sm:w-auto sm:text-sm"
                    >
                      <span className="relative z-10">
                        EXPLORE ALL {category.title.toUpperCase()} EVENTS →
                      </span>
                      <div className="absolute inset-0 z-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
