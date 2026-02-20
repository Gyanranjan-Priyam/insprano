"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

interface NavItem {
  href: string;
  label: string;
}

interface TronHeaderProps {
  navItems?: NavItem[];
}

export function TronHeader({ navItems }: TronHeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = React.useState(false);
  const [mobileExpandedEvents, setMobileExpandedEvents] = React.useState(false);

  const eventsDropdownRef = React.useRef<HTMLDivElement>(null);

  const defaultNavItems: NavItem[] = [
    { href: "/", label: "HOME" },
    { href: "/events", label: "EVENTS" },
    { href: "/schedule", label: "SCHEDULE" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about-us", label: "ABOUT US" },
    { href: "/contact", label: "CONTACT US" },
  ];

  const eventSubmenu = [
    { href: "/events/inter-college", label: "INTER COLLEGE" },
    { href: "/events/intra-college", label: "INTRA COLLEGE" },
  ];

  const items = navItems || defaultNavItems;

  // Close menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 lg:px-6 lg:pt-3">
      {/* Main header bar */}
      <div className="relative border-b border-primary/30 bg-panel lg:header-pill lg:border-2 lg:border-primary/40 lg:bg-background/30 lg:shadow-[0_0_30px_oklch(from_var(--primary)_l_c_h/0.12),inset_0_1px_0_rgba(255,255,255,0.05)] lg:backdrop-blur-2xl lg:backdrop-saturate-150">
        {/* CRT scanline effect */}
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
        {/* Top accent line — mobile only */}
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent lg:hidden" />

        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Left section - Logo */}
            <div className="flex flex-1 justify-start">
              <Link
                href="/"
                className="flex items-center gap-3 transition-opacity hover:opacity-80"
              >
                <Image
                  src="/assets/fest-logo.png"
                  alt="Insprano GCEK Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  priority
                />
                <span className="text-xl font-bold tracking-wider text-primary [font-family:var(--font-uncial)] [text-shadow:0_0_20px_oklch(from_var(--primary)_l_c_h/0.4)]">
                  INSPRANO
                </span>
              </Link>
            </div>

            {/* Center section - Navigation (Desktop) */}
            <nav className="hidden items-center gap-1 lg:flex">
              {items.map((item) => {
                const isEvents = item.label === "EVENTS";
                const isActive = isEvents
                  ? pathname.startsWith("/events")
                  : pathname === item.href;

                if (isEvents) {
                  return (
                    <div
                      key={item.href}
                      ref={eventsDropdownRef}
                      className="relative"
                      onMouseEnter={() => setEventsDropdownOpen(true)}
                      onMouseLeave={() => setEventsDropdownOpen(false)}
                    >
                      <button
                        className={cn(
                          "group relative flex items-center gap-1 px-4 py-2 font-mono text-xs tracking-widest transition-colors",
                          isActive
                            ? "text-primary"
                            : "text-foreground hover:text-primary",
                        )}
                        onClick={() =>
                          setEventsDropdownOpen(!eventsDropdownOpen)
                        }
                      >
                        {/* Active/Hover indicator */}
                        <span
                          className={cn(
                            "absolute inset-x-2 bottom-0 h-px bg-primary transition-transform",
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100",
                          )}
                        />
                        <span>{item.label}</span>
                        <svg
                          className={cn(
                            "h-3 w-3 transition-transform",
                            eventsDropdownOpen ? "rotate-180" : "",
                          )}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {eventsDropdownOpen && (
                        <div
                          className="absolute left-0 top-full z-50 w-48 border border-primary/30 bg-panel shadow-lg pt-1"
                          onMouseEnter={() => setEventsDropdownOpen(true)}
                          onMouseLeave={() => setEventsDropdownOpen(false)}
                        >
                          {/* Scanline effect */}
                          <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
                          {/* Header */}
                          <div className="border-b border-primary/20 bg-primary/5 px-3 py-2">
                            <span className="font-mono text-[10px] tracking-widest text-primary">
                              SELECT EVENT
                            </span>
                          </div>
                          {/* Menu options */}
                          <div className="p-2">
                            {eventSubmenu.map((submenu) => (
                              <Link
                                key={submenu.href}
                                href={submenu.href}
                                onClick={() => setEventsDropdownOpen(false)}
                                className={cn(
                                  "block w-full px-3 py-2 text-left font-mono text-xs tracking-wider transition-colors rounded",
                                  pathname === submenu.href
                                    ? "bg-primary/10 text-primary"
                                    : "text-foreground hover:bg-primary/5 hover:text-primary",
                                )}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{submenu.label}</span>
                                  {pathname === submenu.href && (
                                    <span className="font-mono text-[9px] text-primary/50">
                                      ✓
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative px-4 py-2 font-mono text-xs tracking-widest transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary",
                    )}
                  >
                    {/* Active/Hover indicator */}
                    <span
                      className={cn(
                        "absolute inset-x-2 bottom-0 h-px bg-primary transition-transform",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right section - Social & Actions */}
            <div className="flex flex-1 items-center justify-end gap-3">
              {/* Get Started Button - Desktop */}
              <Link
                href="https://app.codebreakersgcek.tech/login"
                className="hidden sm:flex items-center gap-2 border-2 border-primary bg-primary/20 px-4 py-1.5 font-mono text-xs font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_var(--primary)]"
              >
                <span>GET STARTED</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center rounded border border-primary/50 p-2 font-mono text-xs tracking-wider text-primary transition-colors hover:bg-primary/10 lg:hidden"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <CloseIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity lg:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel — slides down from top */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 max-h-[85vh] w-full transform overflow-y-auto border-b border-primary/30 bg-panel transition-transform duration-300 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        {/* CRT scanline effect */}
        <div className="crt-scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />
        {/* Menu Header - Tron terminal style */}
        <div className="relative flex h-14 items-center justify-between border-b border-primary/20 px-4">
          {/* Top accent line */}
          <div className="absolute left-0 right-8 top-0 h-px bg-linear-to-r from-primary/60 via-primary/30 to-transparent" />

          <span className="font-mono text-[11px] tracking-[0.2em] text-foreground">
            NAVIGATION: <span className="text-foreground/70">00.SYS</span>
          </span>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center text-foreground/50 transition-colors hover:text-primary"
            aria-label="Close menu"
          >
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="relative flex flex-col p-4">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {items.map((item, index) => {
              const isEvents = item.label === "EVENTS";
              const isActive = isEvents
                ? pathname.startsWith("/events")
                : pathname === item.href;

              if (isEvents) {
                return (
                  <div key={item.href} className="flex flex-col gap-2">
                    <button
                      onClick={() =>
                        setMobileExpandedEvents(!mobileExpandedEvents)
                      }
                      className={cn(
                        "group relative flex items-center gap-3 rounded border px-4 py-3 font-mono text-sm tracking-widest transition-all",
                        isActive
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-primary/20 text-foreground/80 hover:border-primary/50 hover:bg-primary/5 hover:text-primary",
                      )}
                    >
                      {/* Index number */}
                      <span className="font-mono text-[10px] text-primary/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Label */}
                      <span>{item.label}</span>

                      {/* Chevron icon */}
                      <svg
                        className={cn(
                          "ml-auto h-3 w-3 transition-transform",
                          mobileExpandedEvents ? "rotate-180" : "",
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>

                      {/* Corner accents */}
                      <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary/50" />
                      <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary/50" />
                      <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-primary/50" />
                      <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-primary/50" />
                    </button>

                    {/* Submenu */}
                    {mobileExpandedEvents && (
                      <div className="ml-4 flex flex-col gap-1 border-l-2 border-primary/30 pl-3">
                        {eventSubmenu.map((submenu) => (
                          <Link
                            key={submenu.href}
                            href={submenu.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "px-3 py-2 font-mono text-xs tracking-wider transition-colors",
                              pathname === submenu.href
                                ? "text-primary"
                                : "text-foreground/70 hover:text-primary",
                            )}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-primary/50">▸</span>
                              <span>{submenu.label}</span>
                              {pathname === submenu.href && (
                                <span className="ml-auto text-[10px] text-primary">
                                  ACTIVE
                                </span>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "group relative flex items-center gap-3 rounded border px-4 py-3 font-mono text-sm tracking-widest transition-all",
                    isActive
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-primary/20 text-foreground/80 hover:border-primary/50 hover:bg-primary/5 hover:text-primary",
                  )}
                >
                  {/* Index number */}
                  <span className="font-mono text-[10px] text-primary/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Label */}
                  <span>{item.label}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <span className="ml-auto font-mono text-[10px] text-primary">
                      ACTIVE
                    </span>
                  )}

                  {/* Corner accents */}
                  <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-primary/50" />
                  <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-primary/50" />
                  <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-primary/50" />
                  <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-primary/50" />
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />

          {/* Get Started Button - Mobile */}
          <Link
            href="https://app.codebreakersgcek.tech/login"
            onClick={() => setMobileMenuOpen(false)}
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded border-2 border-primary bg-primary/20 px-6 py-4 font-mono text-sm font-bold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {/* Corner accents */}
            <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-primary transition-colors group-hover:border-primary-foreground" />
            <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-primary transition-colors group-hover:border-primary-foreground" />
            <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-primary transition-colors group-hover:border-primary-foreground" />
            <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-primary transition-colors group-hover:border-primary-foreground" />

            <span className="relative">GET STARTED</span>
            <svg
              className="relative h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>

            {/* Hover background animation */}
            <div className="absolute inset-0 -z-10 translate-y-full bg-primary transition-transform group-hover:translate-y-0" />
          </Link>

          {/* Footer */}
          <div className="mt-auto pt-6">
            <div className="rounded border border-primary/30 bg-primary/5 p-3">
              <div className="font-mono text-[10px] tracking-widest text-foreground">
                SYSTEM STATUS
              </div>
              <div className="mt-1 font-mono text-xs text-primary">
                ALL SYSTEMS OPERATIONAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
