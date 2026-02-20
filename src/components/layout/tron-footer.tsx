"use client";

import Link from "next/link";
import { UplinkHeader } from "@/components/thegridcn";

export function TronFooter() {
  return (
    <footer className="relative z-10 border-t border-primary/30 bg-panel">
      {/* CRT scanline effect */}
      <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

      {/* Footer uplink bar */}
      <UplinkHeader
        leftText="SYSTEM: INSPRANO v2026"
        rightText="STATUS: ACTIVE — END OF LINE"
      />

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
          {/* Left - Connect Section */}
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <div className="relative inline-block border border-primary/30 bg-primary/5 px-3 py-1">
              <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
              <h3 className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                CONNECT
              </h3>
            </div>

            <div className="space-y-2 font-mono text-xs text-foreground/80">
              <p className="leading-relaxed">
                Government College of Engineering Kalahandi,
                <br />
                Bhawanipatna, Odisha,
                <br />
                India
              </p>
              <div className="space-y-1 pt-2">
                <a
                  href="mailto:info@codebreakers.tech"
                  className="block transition-colors hover:text-primary"
                >
                  info@codebreakers.tech
                </a>
                <a
                  href="mailto:codebreakerscse@gcekbpatna.ac.in"
                  className="block transition-colors hover:text-primary"
                >
                  codebreakerscse@gcekbpatna.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Center - Branding */}
          <div className="flex flex-col items-center justify-center space-y-4 md:mt-50 lg:mt-50">
            <div className="text-center font-mono text-[10px] tracking-[0.3em] text-foreground/60">
              POWERED BY
            </div>
            <div className="relative flex flex-col items-center gap-4">
              <h2 className="text-4xl font-black tracking-tight text-primary [font-family:var(--font-uncial)] sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_0_40px_rgba(246,130,58,0.6)]">
                INSPRANO
              </h2>
              <div className="font-mono text-xs tracking-[0.4em] text-foreground/60">
                ANNUAL TECHNO-CULTURAL FEST
              </div>
              <div className="absolute inset-0 -z-10 bg-primary/10 blur-2xl" />
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex flex-col items-center space-y-4 md:items-end">
            <div className="relative inline-block border border-primary/30 bg-primary/5 px-3 py-1">
              <div className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-px -top-px h-2 w-2 border-r-2 border-t-2 border-primary" />
              <h3 className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                FOLLOW
              </h3>
            </div>

            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/codebreakers-gce-kalahandi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
              >
                <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <svg className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/gcek.codebreakers"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
              >
                <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <svg className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/codebreakers-gcek"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
              >
                <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <svg className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Mail */}
              <a
                href="mailto:codebreakersgcek@gmail.com"
                className="group relative flex h-12 w-12 items-center justify-center border border-primary/30 bg-card/30 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--primary)]"
              >
                <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                <div className="absolute -right-px -bottom-px h-3 w-3 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                <svg className="h-5 w-5 text-foreground/80 transition-colors group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 border-t border-primary/20 pt-6 md:mt-12 md:pt-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
            <div className="hidden h-px flex-1 bg-linear-to-r from-transparent to-primary/30 sm:block" />
            <span className="font-mono text-[9px] tracking-widest text-foreground/60">
              © {new Date().getFullYear()} INSPRANO — GCE Kalahandi. All Rights Reserved.
            </span>
            <div className="hidden h-px flex-1 bg-linear-to-l from-transparent to-primary/30 sm:block" />
          </div>
        </div>
      </div>
    </footer>
  );
}
