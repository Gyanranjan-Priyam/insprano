"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, type Easing } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GridScanOverlay,
  PixelBlast,
} from "@/components/thegridcn";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  StatusStrip,
  GridMap,
  ScrollReveal,
  useHeroReveal,
  EventsMarquee,
} from "@/components/website";

// Dynamic import for Spline 3D scene (client-side only)
const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((mod) => ({ default: mod.SplineScene })),
  { ssr: false, loading: () => <div className="flex h-full w-full items-center justify-center"><span className="loader" /></div> },
);

// const Grid3D = dynamic(
//   () => import("@/components/thegridcn/grid").then((mod) => mod.Grid3D),
//   { ssr: false },
// );

// Flagship event showcase items
const eventShowcaseItems = [
  {
    id: "robowars",
    title: "ROBOWARS",
    tag: "ROBOTICS",
    description:
      "Build, battle, and dominate. Unleash your engineering prowess in the ultimate robot combat arena where machines clash.",
    image: "/assets/robodesktop.webp",
    href: "/events/robowars",
  },
  {
    id: "hackathon",
    title: "HACKATHON",
    tag: "CODE",
    description:
      "48 hours. One challenge. Infinite possibilities. Code your way to victory in our flagship coding marathon.",
    image: null,
    href: "/events/hackathon",
  },
  {
    id: "game-arena",
    title: "GAME ARENA",
    tag: "ESPORTS",
    description:
      "Show off your skills and conquer the arena at the Gaming Conclave, where only the best rise to the top.",
    image: "/assets/gaming_hero.webp",
    href: "/events/game-arena",
  },
];

// Highlights/features of INSPRANO
const highlights = [
  {
    title: "50+ Events",
    description: "A massive lineup spanning tech, culture, sports, and literature — something for everyone.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "2000+ Participants",
    description: "Students from colleges across Odisha and beyond converge for an unforgettable experience.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Star Nights",
    description: "Electrifying DJ nights and celebrity performances that light up the campus like never before.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "₹5L+ Prizes",
    description: "Massive prize pools across competitions — your talent deserves recognition and rewards.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Talks",
    description: "Industry leaders and tech visionaries share insights on cutting-edge technologies and career growth.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Networking",
    description: "Connect with peers, mentors, startups, and recruiters — building relationships that last beyond the fest.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

// Status strips
const STATUS_STRIP_EVENTS = [
  { label: "SECTION", value: "EVENTS", highlighted: true },
  { label: "CATEGORIES", value: "6 ACTIVE" },
  { label: "STATUS", value: "OPEN" },
];

const STATUS_STRIP_HIGHLIGHTS = [
  { label: "SECTION", value: "HIGHLIGHTS", highlighted: true },
  { label: "FEATURES", value: "6 LISTED" },
  { label: "EXCITEMENT", value: "MAX" },
];

const STATUS_STRIP_FAQ = [
  { label: "SECTION", value: "FAQ", highlighted: true },
  { label: "QUERIES", value: "8 INDEXED" },
  { label: "STATUS", value: "ANSWERED" },
];

// ── Counter hook ──────────────────────────────────────────
function useCountUp(end: number, duration = 1800, startOnView = true) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    if (!startOnView) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            // easeOut cubic: slows near the end
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };

          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
}

function StatCounter({
  end,
  prefix = "",
  suffix = "",
  label,
  duration = 1800,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const { count, ref } = useCountUp(end, duration);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-xl font-black text-primary md:text-2xl">
        {prefix}{count}{suffix}
      </div>
      <div className="font-mono text-[8px] tracking-[0.3em] text-foreground/40 md:text-[9px]">
        {label}
      </div>
    </div>
  );
}

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as Easing,
    },
  }),
};

// ── Register GSAP plugins ─────────────────────────────────
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Event Showcase with GSAP ScrollTrigger ────────────────
function EventShowcase() {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-event-card]");

      cards.forEach((card) => {
        const img = card.querySelector("[data-event-img]");
        const outline = card.querySelector("[data-event-outline]");
        const info = card.querySelector("[data-event-info]");

        // Card entry — slide up + fade
        gsap.fromTo(
          card,
          { y: 120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 45%",
              scrub: 1.2,
            },
          },
        );

        // Image parallax (continuous)
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -12, scale: 1.15 },
            {
              yPercent: 12,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        // Giant outlined title drift
        if (outline) {
          gsap.fromTo(
            outline,
            { xPercent: -10, opacity: 0 },
            {
              xPercent: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 35%",
                scrub: 1,
              },
            },
          );
        }

        // Info content slide up
        if (info) {
          gsap.fromTo(
            info,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                end: "top 35%",
                scrub: 1,
              },
            },
          );
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="space-y-6 sm:space-y-10 lg:space-y-14">
      {eventShowcaseItems.map((event, i) => (
        <div
          key={event.id}
          data-event-card
          className="group relative overflow-hidden border border-primary/30 bg-card/20 backdrop-blur-sm will-change-transform"
        >
          {/* HUD corner brackets */}
          <div className="absolute -left-px -top-px z-20 h-5 w-5 border-l-2 border-t-2 border-primary/50 transition-colors group-hover:border-primary sm:h-6 sm:w-6" />
          <div className="absolute -right-px -top-px z-20 h-5 w-5 border-r-2 border-t-2 border-primary/50 transition-colors group-hover:border-primary sm:h-6 sm:w-6" />
          <div className="absolute -bottom-px -left-px z-20 h-5 w-5 border-b-2 border-l-2 border-primary/50 transition-colors group-hover:border-primary sm:h-6 sm:w-6" />
          <div className="absolute -bottom-px -right-px z-20 h-5 w-5 border-b-2 border-r-2 border-primary/50 transition-colors group-hover:border-primary sm:h-6 sm:w-6" />

          {/* Image landscape container */}
          <div className="relative h-65 overflow-hidden sm:h-80 md:h-100 lg:h-115">
            {event.image ? (
              <Image
                data-event-img
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            ) : (
              /* Hackathon — code-themed gradient fallback */
              <div
                data-event-img
                className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-primary/5"
              >
                <div className="absolute inset-0 overflow-hidden whitespace-pre font-mono text-[10px] leading-relaxed text-primary/[0.07]">
                  {Array.from({ length: 30 })
                    .map(
                      () =>
                        `function solve() { const idea = brainstorm(); return build(idea); }\nasync function hack(challenge) { while (!solved) { iterate(); } return victory; }`,
                    )
                    .join("\n")}
                </div>
                {/* Glow accent */}
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
              </div>
            )}

            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

            {/* Giant outlined title behind content */}
            <div
              data-event-outline
              className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <span className="whitespace-nowrap font-display text-[72px] font-black tracking-wider select-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] sm:text-[110px] md:text-[150px] lg:text-[200px]">
                {event.title}
              </span>
            </div>

            {/* Content overlay at bottom */}
            <div
              data-event-info
              className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6 md:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-lg">
                  <div className="mb-2 inline-block border border-primary/50 bg-primary/10 px-2.5 py-1 backdrop-blur-sm">
                    <span className="font-mono text-[9px] tracking-[0.3em] text-primary sm:text-[10px]">
                      {event.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-black tracking-wider text-white sm:text-3xl md:text-4xl lg:text-5xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-white/70 sm:text-sm md:text-base">
                    {event.description}
                  </p>
                </div>
                <Link
                  href={event.href}
                  className="inline-flex shrink-0 items-center gap-2 border border-white/30 bg-white/5 px-5 py-2.5 font-mono text-[10px] tracking-[0.2em] text-white backdrop-blur-md transition-all hover:border-primary hover:bg-primary/20 hover:text-primary hover:shadow-[0_0_20px_var(--primary)] sm:text-xs"
                >
                  LEARN MORE
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Index bar at bottom */}
          <div className="flex items-center justify-between border-t border-primary/20 bg-primary/5 px-4 py-2">
            <span className="font-mono text-[10px] tracking-widest text-primary/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 animate-pulse bg-primary" />
              <span className="font-mono text-[9px] tracking-wider text-foreground/50">
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const heroRef = useHeroReveal();

  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
          <PixelBlast />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/50 to-background" />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {/* ===== HERO SECTION ===== */}
        <section className="relative min-h-screen overflow-hidden">
          <GridMap />
          <GridScanOverlay />

          {/* HUD corner frames */}
          <div className="pointer-events-none absolute left-4 right-4 top-10 bottom-4 z-20 hidden lg:block">
            <div className="absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute right-0 top-0 h-24 w-24 border-r-2 border-t-2 border-primary/50" />
            <div className="absolute bottom-0 left-0 h-24 w-24 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-primary/50" />
          </div>

          {/* Hero content — robot centered with logo behind */}
          <div className="relative mx-auto flex min-h-screen items-center justify-center">
            {/* Logo + INSPRANO text stacked behind the robot */}
            <div className="pointer-events-none absolute inset-0 z-1 flex flex-col items-center justify-center gap-1 overflow-hidden sm:gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/fest-logo.png"
                alt=""
                className="h-[55vw] w-[55vw] select-none object-contain opacity-[0.08] sm:h-[48vw] sm:w-[48vw] md:h-[42vw] md:w-[42vw] lg:h-[20vw] lg:w-[20vw] xl:h-[22vw] xl:w-[22vw]"
                draggable={false}
              />
              <span className="select-none whitespace-nowrap text-[13vw] font-black uppercase leading-none tracking-[0.12em] text-white/9 [font-family:var(--font-uncial)] sm:text-[11vw] md:text-[9vw] lg:text-[9vw] xl:text-[10vw]">
                INSPRANO
              </span>
            </div>

            {/* Top overlay — college & fest branding */}
            <div className="absolute left-0 right-0 top-16 z-3 text-center md:top-20" ref={heroRef}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="mb-1 font-mono font-bold text-[11px] tracking-[0.6em] text-foreground/50 md:text-[14px]">
                  GOVERNMENT COLLEGE OF ENGINEERING, KALAHANDI
                </div>
                <div className="font-mono font-bold text-[11px] tracking-[0.5em] text-primary/70 md:text-[14px]">
                  PRESENTS THE ANNUAL TECHNO-CULTURAL FEST
                </div>
              </motion.div>
            </div>

            {/* 3D Robot — centered, large & responsive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
              className="relative z-2 flex w-full items-center justify-center"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-[130vw] min-h-125 w-full sm:h-[110vw] sm:min-h-150 md:h-[90vh] lg:h-[95vh] xl:h-[97vh]"
              />
            </motion.div>

            {/* Bottom gradient overlay for text readability */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-2 h-72 bg-linear-to-t from-background via-background/80 to-transparent" />

            {/* Bottom overlay — fest info */}
            <div className="absolute bottom-8 left-0 right-0 z-3 text-center md:bottom-25">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <h2 className="text-5xl font-black tracking-widest text-primary [font-family:var(--font-uncial)] md:text-7xl lg:text-8xl [text-shadow:0_0_60px_rgba(246,130,58,0.4),0_0_120px_rgba(246,130,58,0.2)]">
                  INSPRANO
                </h2>

                <div className="mt-2 font-mono text-[10px] tracking-[0.4em] text-foreground/60 md:text-xs">
                  TECH &bull; CULTURE &bull; INNOVATION &bull; ARTS
                </div>

                <p className="mx-auto mt-3 max-w-md px-4 text-sm leading-relaxed text-foreground/50 md:text-base">
                  Two days of innovation, creativity, and celebration.
                </p>

                {/* CTA Buttons */}
                <div className="mt-5 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/events"
                    className="group relative overflow-hidden border-2 border-primary bg-primary/20 px-8 py-3 font-mono text-xs font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_40px_var(--primary)] md:px-10 md:text-sm"
                  >
                    <span className="relative z-10">EXPLORE EVENTS</span>
                    <div className="absolute inset-0 -z-10 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group relative overflow-hidden border border-primary/40 bg-card/30 px-8 py-3 font-mono text-xs font-bold tracking-wider text-foreground/80 backdrop-blur-sm transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(246,130,58,0.3)] md:px-10 md:text-sm"
                  >
                    <span className="relative z-10">REGISTER NOW</span>
                  </Link>
                </div>

                {/* Stats bar */}
                <div className="mt-5 flex flex-wrap justify-center gap-5 md:gap-8">
                  <StatCounter end={50}   suffix="+"  label="EVENTS"   duration={1400} />
                  <StatCounter end={30}   suffix="+"  label="COLLEGES"  duration={1200} />
                  <StatCounter end={2000} suffix="+"  label="FOOTFALL"  duration={2000} />
                  <StatCounter end={5} prefix="₹" suffix="L+" label="PRIZES" duration={1000} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom scroll indicator */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
            <div className="flex items-center justify-center gap-8 py-3">
              <div className="h-px w-24 bg-linear-to-r from-transparent to-primary/50" />
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="font-mono text-[9px] tracking-widest text-foreground/80"
              >
                ↓ SCROLL TO EXPLORE ↓
              </motion.div>
              <div className="h-px w-24 bg-linear-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </section>

        {/* ===== EVENT SHOWCASE SECTION ===== */}
        <section className="relative border-t border-primary/20 py-16 sm:py-20 md:py-24">
          <div className="absolute inset-0 bg-linear-to-b from-background via-card/20 to-background" />
          <GridScanOverlay />

          {/* Scrolling marquee bar */}
          <div className="relative overflow-hidden border-y border-primary/20 bg-primary/5 py-2.5">
            <div className="animate-marquee flex whitespace-nowrap">
              {Array.from({ length: 16 }).map((_, idx) => (
                <span
                  key={idx}
                  className="mx-6 font-mono text-xs tracking-[0.3em] text-primary/40 sm:mx-8 sm:text-sm"
                >
                  //INSPRANO EVENTS
                </span>
              ))}
            </div>
          </div>

          <StatusStrip variant="default" items={STATUS_STRIP_EVENTS} />

          <div className="container relative mx-auto px-4 pt-8">
            <ScrollReveal className="mb-8 text-center sm:mb-12 md:mb-16">
              <div className="mb-4 inline-block border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-[10px] tracking-[0.3em] text-primary sm:text-xs">
                FLAGSHIP EVENTS
              </div>
              <h2 className="font-display text-3xl font-black leading-tight tracking-wider text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                THE<span className="text-primary">_</span>ARENA
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
                Three flagship events. One stage. Compete, create, and conquer at INSPRANO.
              </p>
            </ScrollReveal>

            <EventsMarquee />
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="relative border-t border-primary/20 py-24">
          <div className="absolute inset-0 bg-linear-to-b from-background via-card/20 to-background" />

          <StatusStrip variant="default" items={STATUS_STRIP_FAQ} />

          <div className="container relative mx-auto px-4 pt-8">
            <ScrollReveal className="mb-16 text-center">
              <div className="mb-4 font-mono text-[10px] tracking-widest text-foreground/80">
                [ KNOWLEDGE BASE ]
              </div>
              <h2 className="font-display text-3xl font-bold tracking-wider text-primary md:text-4xl lg:text-5xl [text-shadow:0_0_40px_rgba(246,130,58,0.4)]">
                FREQUENTLY ASKED
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-foreground/80">
                Everything you need to know about INSPRANO 2026
              </p>
            </ScrollReveal>

            <div className="relative mx-auto max-w-3xl overflow-hidden border border-primary/30 bg-panel">
              <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />

              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

              <div className="relative border-b border-primary/30 bg-primary/5 px-4 py-2">
                <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-primary via-primary/50 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 animate-pulse bg-primary" />
                      <div className="h-1.5 w-3 bg-primary/60" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      INSPRANO-FAQ.SYS
                    </span>
                  </div>
                  <div className="font-mono text-[9px] tracking-wider">
                    <span className="text-foreground/50">RECORDS:8</span>
                    <span className="ml-3 text-primary">[ ONLINE ]</span>
                  </div>
                </div>
              </div>

              <div className="relative p-4 md:p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      What is INSPRANO?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      INSPRANO is the annual techno-cultural fest of Government College of Engineering Kalahandi, Bhawanipatna.
                      It&apos;s a three-day celebration bringing together technology, culture, sports, and innovation.
                      Students from colleges across Odisha and beyond participate in 50+ events spanning multiple categories.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="when" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      When is INSPRANO 2026?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      INSPRANO 2026 dates will be announced soon. Stay tuned to our social media handles for the official date announcement.
                      The fest typically spans three action-packed days with events running from morning to late night.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="register" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      How can I register for INSPRANO?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      Registration will be available through our website once dates are announced.
                      You can register individually or as a team for specific events.
                      Early bird registrations often come with special discounts and perks.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="who-participate" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      Who can participate in INSPRANO?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      INSPRANO is open to students from all colleges and universities.
                      Whether you&apos;re an engineering student, arts student, or from any other discipline — everyone is welcome.
                      Some events may have specific eligibility criteria mentioned in their individual pages.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="events-types" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      What types of events are there?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      INSPRANO features events across six categories: <strong className="text-foreground">Tech Events</strong> (hackathons, coding contests, robo wars),
                      <strong className="text-foreground"> Cultural Shows</strong> (dance, music, drama),
                      <strong className="text-foreground"> Workshops</strong> (AI/ML, web dev, IoT),
                      <strong className="text-foreground"> Sports</strong> (cricket, football, esports),
                      <strong className="text-foreground"> Literary Events</strong> (debates, poetry, quizzes), and
                      <strong className="text-foreground"> Exhibitions</strong> (project showcases, startup pitches).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="prizes" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      What are the prizes?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      INSPRANO offers prize pools worth ₹5 lakhs+ across all events.
                      Winners receive cash prizes, trophies, certificates, and exciting goodies.
                      Top performers also get networking opportunities with industry sponsors and recruiters.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="accommodation" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      Is accommodation provided?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      Yes, accommodation facilities are available for outstation participants on a first-come-first-serve basis.
                      Details about accommodation, food, and transportation will be shared during the registration process.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="contact-fest" className="border-primary/20">
                    <AccordionTrigger className="font-display text-sm tracking-wider text-foreground hover:text-primary hover:no-underline">
                      How can I contact the INSPRANO team?
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">
                      Reach out to us via email at info@insprano.tech or follow our social media
                      (Instagram: @gcek.insprano, LinkedIn: insprano GCE Kalahandi).
                      You can also visit our Contact page for more ways to get in touch.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA SECTION ===== */}
        <section id="join" className="relative border-t border-primary/20 py-24">
          <GridScanOverlay />

          <div className="container relative mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto max-w-2xl overflow-hidden border border-primary/30 bg-panel"
            >
              <div className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-px -top-px h-4 w-4 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" />

              <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

              <div className="relative border-b border-primary/30 bg-primary/5 px-4 py-2">
                <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-primary via-primary/50 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 animate-pulse bg-primary" />
                      <div className="h-1.5 w-3 bg-primary/60" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                      REGISTRATION OPEN
                    </span>
                  </div>
                  <div className="font-mono text-[9px] tracking-wider">
                    <span className="text-primary">[ READY ]</span>
                  </div>
                </div>
              </div>

              <div className="relative px-8 py-12 md:px-16">
                <h2 className="mb-6 font-display text-xl font-bold tracking-wider text-primary md:text-3xl [text-shadow:0_0_40px_rgba(246,130,58,0.4)]">
                  BE PART OF IT
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-foreground/80">
                  Don&apos;t miss the biggest techno-cultural fest of GCE Kalahandi.
                  Register now and be part of something extraordinary.
                </p>
                <Link
                  href="/contact"
                  className="group relative inline-flex overflow-hidden border-2 border-primary bg-primary px-12 py-4 font-mono text-sm font-bold tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_40px_var(--primary)]"
                >
                  <span className="relative z-10">REGISTER FOR INSPRANO 2026</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
