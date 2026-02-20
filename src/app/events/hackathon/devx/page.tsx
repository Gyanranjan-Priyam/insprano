"use client";

import * as React from "react";
import Image from "next/image";
import {
  GlowContainer,
  CRTEffect,
  GridScanOverlay,
  UplinkHeader,
  Stat,
  StatusBar,
} from "@/components/thegridcn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
// import { DevXImageLinks } from "@/data/galleryItems";

export default function DevXPage() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

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
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Header */}
              <div className="space-y-4 mt-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="font-mono text-xs tracking-widest text-primary">
                    INSPRANO TECHFEST {new Date().getFullYear()}-
                    {String(new Date().getFullYear() + 1).slice(-2)} EDITION
                  </span>
                </div>

                <h1 className="font-display text-5xl font-bold tracking-wider text-foreground lg:text-6xl">
                  DEV
                  <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                    X
                  </span>
                </h1>

                <div className="h-px w-32 bg-linear-to-r from-primary to-transparent" />
              </div>

              {/* Description */}
              <div className="space-y-4 mt-2">
                <p className="font-mono text-sm leading-relaxed text-foreground/80">
                  Join our monthly hackathon at CodeBreakers Club, where
                  innovation and collaboration come together. Work alongside
                  fellow members to develop creative and practical solutions in
                  a structured, competitive environment. Open to both beginners
                  and experienced programmers, this event provides a valuable
                  opportunity to strengthen your skills, exchange ideas, and
                  present your work to the community.
                </p>

                <GlowContainer className="border-l-2 border-primary/50 bg-primary/5 pl-4 mt-2">
                  <p className="font-mono text-xs italic text-primary">
                    Prizes and recognition await the most inventive projects!
                  </p>
                </GlowContainer>
              </div>

              {/* Status Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Stat label="DURATION" value="1" unit="MONTH" />
                <Stat label="TEAMS" value="5+" unit="MAX" />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="https://drive.google.com/drive/folders/1e-GWWtrRuA1paMuF-J4nepd7G7RjAL0R?usp=sharing" className="group relative inline-block">
                  <Button
                    size="lg"
                    className="cursor-pointer group relative overflow-hidden border-2 border-primary bg-primary/20 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_var(--primary)]"
                  >
                    <span className="relative z-10 text-white">
                      VIEW PROBLEM STATEMENTS
                    </span>
                    <div className="absolute inset-0 z-0 -translate-x-full bg-primary transition-transform group-hover:translate-x-0" />
                  </Button>
                </Link>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/50 font-mono text-sm tracking-wider text-foreground hover:border-primary hover:bg-primary/10"
                    >
                      VIEW DETAILS
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-7xl w-[98vw] sm:w-[95vw] lg:w-[90vw] max-h-[75vh] overflow-y-auto border-primary/30 bg-panel">
                    <DialogHeader>
                      <DialogTitle className="font-display text-2xl font-bold tracking-wider text-foreground">
                        DEVX{" "}
                        <span className="text-primary [text-shadow:0_0_20px_oklch(from_var(--primary)_l_c_h/0.6)]">
                          RULES & REGULATIONS
                        </span>
                      </DialogTitle>
                      <DialogDescription className="font-mono text-xs text-foreground/70">
                        Please read the following guidelines carefully before participating
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                      {/* Rules Section - Accordion */}
                      <Accordion type="single" collapsible className="space-y-2">
                        {/* General Rules */}
                        <AccordionItem value="general-rules" className="border border-primary/30 bg-primary/5 rounded-sm">
                          <AccordionTrigger className="font-mono text-sm font-bold tracking-wider text-primary hover:no-underline">
                            📋 GENERAL RULES
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 font-mono text-xs text-foreground/80">
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Team size: 2-5 members per team</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>All team members must be registered CodeBreakers Club members</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Projects must be original work completed during the hackathon period</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Use of pre-existing code libraries and frameworks is allowed</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Plagiarism will result in immediate disqualification</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Technical Requirements */}
                        <AccordionItem value="technical-requirements" className="border border-primary/30 bg-primary/5 rounded-sm">
                          <AccordionTrigger className="font-mono text-sm font-bold tracking-wider text-primary hover:no-underline">
                            💻 TECHNICAL REQUIREMENTS
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 font-mono text-xs text-foreground/80">
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Code must be hosted on a public GitHub repository</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Include a comprehensive README with setup instructions</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Project must have a working demo (deployed or local)</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Documentation should include tech stack and architecture details</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Presentation Guidelines */}
                        <AccordionItem value="presentation-guidelines" className="border border-primary/30 bg-primary/5 rounded-sm">
                          <AccordionTrigger className="font-mono text-sm font-bold tracking-wider text-primary hover:no-underline">
                            📊 PRESENTATION GUIDELINES
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 font-mono text-xs text-foreground/80">
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Presentation duration: 5-7 minutes per team</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Followed by 2-3 minutes Q&A session</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Live demo is mandatory and must showcase key features</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Use the official PPT template provided below</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Clearly explain problem statement, solution, and impact</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Judging Criteria */}
                        <AccordionItem value="judging-criteria" className="border border-primary/30 bg-primary/5 rounded-sm">
                          <AccordionTrigger className="font-mono text-sm font-bold tracking-wider text-primary hover:no-underline">
                            🏆 JUDGING CRITERIA
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 font-mono text-xs text-foreground/80">
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Innovation & Creativity (25%)</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Technical Implementation (25%)</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Design & User Experience (20%)</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Presentation Quality (15%)</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Feasibility & Impact (15%)</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>

                        {/* Important Notes */}
                        <AccordionItem value="important-notes" className="border border-primary/30 bg-primary/5 rounded-sm">
                          <AccordionTrigger className="font-mono text-sm font-bold tracking-wider text-primary hover:no-underline">
                            ⚠️ IMPORTANT NOTES
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 font-mono text-xs text-foreground/80">
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Submissions after deadline will not be accepted</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Internet access will be provided, but bring backup resources</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Decisions of judges and organizers are final</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>Code of conduct must be followed at all times</span>
                              </li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      {/* Download PPT Template Button */}
                      <div className="pt-4 border-t border-primary/30">
                        <GlowContainer className="bg-primary/5 p-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="space-y-1">
                              <h4 className="font-mono text-sm font-bold text-primary">
                                📎 PRESENTATION TEMPLATE
                              </h4>
                              <p className="font-mono text-xs text-foreground/70">
                                Download the official PPT template for your presentation
                              </p>
                            </div>
                            <Button
                              size="sm"
                              className="cursor-pointer group relative overflow-hidden border-2 border-primary bg-primary/20 font-mono text-xs font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_var(--primary)] shrink-0"
                              onClick={() => {
                                // Add your download logic here
                                // For now, it will open a link or trigger a download
                                const link = document.createElement('a');
                                link.href = 'https://drive.google.com/drive/folders/14FJDIIh1xSKRrIXe1W6i1p6LR34lSOu9?usp=sharing'; // Update with actual path
                                link.download = 'DevX_Presentation_Template.pptx';
                                link.click();
                              }}
                            >
                              <span className="relative z-10">DOWNLOAD</span>
                              <div className="absolute inset-0 z-0 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
                            </Button>
                          </div>
                        </GlowContainer>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[400px] lg:min-h-[500px]">
              <div className="relative h-full overflow-hidden rounded-sm border border-primary/30 bg-background/50 backdrop-blur-sm">
                <Image
                  src="https://res.cloudinary.com/dw47ib0sh/image/upload/v1771087514/fpmqtotrun0wzflyr8rw.png"
                  alt="DevX Hackathon"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />

                {/* HUD Corner markers */}
                <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />

                {/* Inner corner accents */}
                <div className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* Event Info Section */}
      <section className="relative border-b border-primary/30 bg-background py-16">
        <div className="container mx-auto px-4">
          <UplinkHeader
            leftText="EVENT OVERVIEW"
            rightText="MISSION PARAMETERS"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Info Card 1 */}
            <GlowContainer className="group relative border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50 hover:bg-primary/5">
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <h3 className="font-mono text-sm tracking-widest text-primary">
                    ORGANIZED BY
                  </h3>
                </div>
                <p className="font-mono text-2xl font-bold text-foreground">
                  CODEBREAKERS
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  Government College of Engineering, KALAHANDI
                </p>
              </div>
            </GlowContainer>

            {/* Info Card 2 */}
            <GlowContainer className="group relative border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50 hover:bg-primary/5">
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <h3 className="font-mono text-sm tracking-widest text-primary">
                    FREQUENCY
                  </h3>
                </div>
                <p className="font-mono text-2xl font-bold text-foreground">
                  MONTHLY
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  Regular Coding Challenges
                </p>
              </div>
            </GlowContainer>

            {/* Info Card 3 */}
            <GlowContainer className="group relative border border-primary/30 bg-panel p-6 transition-all hover:border-primary/50 hover:bg-primary/5">
              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
              <div className="relative space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <h3 className="font-mono text-sm tracking-widest text-primary">
                    ELIGIBILITY
                  </h3>
                </div>
                <p className="font-mono text-2xl font-bold text-primary">
                  ALL LEVELS
                </p>
                <p className="font-mono text-xs text-foreground/70">
                  Beginners to Experts Welcome
                </p>
              </div>
            </GlowContainer>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section className="relative border-b border-primary/30 bg-panel py-16">
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

        <div className="container relative mx-auto px-4">
          <UplinkHeader
            leftText="WHY PARTICIPATE"
            rightText="TACTICAL ADVANTAGES"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "SKILL ENHANCEMENT",
                description:
                  "Push your coding abilities to the limit. Learn new technologies and frameworks through hands-on experience.",
                icon: (
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "NETWORKING",
                description:
                  "Connect with like-minded developers, mentors, and industry professionals. Build relationships that last beyond the event.",
                icon: (
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                ),
              },
              {
                title: "PRIZES & RECOGNITION",
                description:
                  "Win exciting prizes, certificates, and gain recognition for your innovative solutions and hard work.",
                icon: (
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                ),
              },
              {
                title: "REAL-WORLD PROBLEMS",
                description:
                  "Work on challenging problem statements that mirror industry scenarios. Make a real impact with your solutions.",
                icon: (
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative border border-primary/30 bg-background p-6 transition-all hover:border-primary/50 hover:bg-primary/5"
              >
                {/* Corner accents */}
                <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary/50" />
                <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary/50" />

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="font-mono text-sm tracking-widest text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="font-mono text-xs leading-relaxed text-foreground/70">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom corner accents */}
                <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary/50" />
                <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary/50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Marquee */}
      {/* COMMENTED OUT: Photos not available yet - will be updated in future */}
      {/* 
      <section className="relative border-b border-primary/30 bg-background py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <UplinkHeader
            leftText="PAST EDITIONS"
            rightText="MEMORY ARCHIVE"
          />

          <div className="mt-12 relative">
            <div className="relative overflow-hidden">
              <div className="flex gap-4 animate-marquee">
                {DevXImageLinks.map((imageUrl, index) => (
                  <div
                    key={`first-${index}`}
                    className="group relative flex-shrink-0 overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    <div className="relative h-full w-full border border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)]">
                      <Image
                        src={imageUrl}
                        alt={`DevX Memory ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="320px"
                        unoptimized
                      />
                      
                      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
                      
                      <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05]" />
                      
                      <div className="absolute bottom-2 left-2 font-mono text-xs tracking-wider text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        #{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                ))}
                {DevXImageLinks.map((imageUrl, index) => (
                  <div
                    key={`second-${index}`}
                    className="group relative flex-shrink-0 overflow-hidden"
                    style={{ width: '320px', height: '320px' }}
                  >
                    <div className="relative h-full w-full border border-primary/30 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/70 group-hover:shadow-[0_0_20px_var(--primary)]">
                      <Image
                        src={imageUrl}
                        alt={`DevX Memory ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="320px"
                        unoptimized
                      />
                      
                      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
                      
                      <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.05]" />
                      
                      <div className="absolute bottom-2 left-2 font-mono text-xs tracking-wider text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        #{String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-background to-transparent" />
          </div>

          <div className="mt-8 border border-primary/30 bg-primary/5 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-foreground/70">
                ARCHIVE: {DevXImageLinks.length} MEMORIES LOADED
              </span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-mono text-xs tracking-wider text-primary">
                  SYSTEM ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 40s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
      */}

      {/* CTA Section */}
      <section className="relative bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-2xl space-y-8">
            <h2 className="font-display text-3xl font-bold tracking-wider text-foreground lg:text-4xl">
              READY TO{" "}
              <span className="text-primary [text-shadow:0_0_30px_oklch(from_var(--primary)_l_c_h/0.6)]">
                INNOVATE?
              </span>
            </h2>

            <p className="font-mono text-sm text-foreground/70">
              Secure your spot in DevX and be part of something extraordinary.
              Registration opens soon!
            </p>

            <StatusBar
              leftContent={
                <>
                  <span className="text-primary">EVENT: DEVX</span>
                  <span className="text-foreground/60">|</span>
                  <span>STATUS: UPCOMING</span>
                </>
              }
              rightContent={<span>SLOTS: LIMITED</span>}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
