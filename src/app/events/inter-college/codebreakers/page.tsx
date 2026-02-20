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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { interCollegeEvents, codebreakersEvents } from "@/data/eventData";
import { ChevronLeft } from "lucide-react";

const category = interCollegeEvents.find((e) => e.id === "inter-codebreakers")!;

export default function CodebreakersPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <CRTEffect />
      <GridScanOverlay />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 pt-6">
        <Link href="/events/inter-college">
          <Button
            variant="ghost"
            className="font-mono text-xs tracking-wider text-primary hover:bg-primary/10"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            BACK TO INTER-COLLEGE EVENTS
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-primary/30 bg-panel">
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

        <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left – Text */}
            <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="font-mono text-[10px] tracking-widest text-primary sm:text-xs">
                    INTER-COLLEGE EVENT
                  </span>
                </div>

                <h1 className="font-display text-4xl font-bold tracking-wider text-foreground sm:text-5xl lg:text-6xl">
                  CODE
                  <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                    BREAKERS
                  </span>
                </h1>

                <div className="h-px w-32 bg-linear-to-r from-primary to-transparent" />
              </div>

              <p className="font-mono text-xs leading-relaxed text-foreground/80 sm:text-sm">
                {category.shortDescription}
              </p>

              <GlowContainer className="border-l-2 border-primary/50 bg-primary/5 pl-4">
                <p className="font-mono text-xs italic text-primary">
                  Only the sharpest cryptographers survive to the final round.
                </p>
              </GlowContainer>

              {/* Tags */}
              {category.tags && (
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, idx) => (
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

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Stat label="EVENTS" value={codebreakersEvents.length.toString()} unit="TOTAL" />
                <Stat label="FORMAT" value="Team" unit="BASED" />
                <Stat label="DOMAIN" value="Crypto" unit="+ CODING" />
                <Stat label="PRIZES" value="TBA" unit="AMOUNT" />
              </div>
            </div>

            {/* Right – Image */}
            <div className="relative hidden min-h-80 lg:block">
              <div className="relative h-full w-full overflow-hidden border border-primary/30 bg-primary/5">
                <Image
                  src={category.thumbnail}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-panel via-panel/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="relative py-10 md:py-16">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-6 space-y-2 border-l-4 border-primary/50 bg-panel px-4 py-3 sm:mb-8 sm:px-6 sm:py-4">
            <h2 className="font-display text-xl font-bold tracking-wider text-foreground sm:text-3xl">
              ALL EVENTS
            </h2>
            <p className="font-mono text-xs text-foreground/70 sm:text-sm">
              {codebreakersEvents.length} event{codebreakersEvents.length !== 1 ? "s" : ""} under Codebreakers
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {codebreakersEvents.map((event) => (
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
        </div>
      </section>
    </div>
  );
}
