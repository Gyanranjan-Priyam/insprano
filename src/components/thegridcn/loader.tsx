"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the loader
   * @default "md"
   */
  size?: "sm" | "md" | "lg" | "xl"
  /**
   * Optional label text
   */
  label?: string
  /**
   * Show pulsing background
   * @default false
   */
  showBackground?: boolean
}

const sizeClasses = {
  sm: "size-8",
  md: "size-16",
  lg: "size-24",
  xl: "size-32",
}

const ringWidthClasses = {
  sm: "border-2",
  md: "border-[3px]",
  lg: "border-4",
  xl: "border-[5px]",
}

/**
 * Tron-themed animated loader component
 * 
 * Features:
 * - Adapts to current theme colors (tron, ares, clu, athena, aphrodite, poseidon)
 * - Responds to tron-intensity levels (none, light, medium, heavy)
 * - Multiple rotating rings with glow effects
 * - Scanlines and grid patterns at higher intensities
 * 
 * @example
 * ```tsx
 * <Loader />
 * <Loader size="lg" label="Loading Program..." />
 * <Loader size="xl" showBackground />
 * ```
 */
export function Loader({
  size = "md",
  label,
  showBackground = false,
  className,
  ...props
}: LoaderProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        "relative inline-flex flex-col items-center justify-center gap-4",
        className
      )}
      {...props}
    >
      {/* Main loader container */}
      <div className={cn("relative", sizeClasses[size])}>
        {/* Pulsing background glow */}
        {showBackground && (
          <div className="tron-loader-background absolute inset-0 rounded-full bg-glow/5 animate-pulse" />
        )}

        {/* Outer rotating ring */}
        <div
          className={cn(
            "tron-loader-ring-outer absolute inset-0 rounded-full border-transparent animate-spin",
            "border-t-glow border-r-glow/40",
            ringWidthClasses[size]
          )}
          style={{ animationDuration: "1.2s" }}
        />

        {/* Middle counter-rotating ring */}
        <div
          className={cn(
            "tron-loader-ring-middle absolute inset-[15%] rounded-full border-transparent animate-spin",
            "border-b-glow border-l-glow/60",
            ringWidthClasses[size]
          )}
          style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
        />

        {/* Inner rotating ring */}
        <div
          className={cn(
            "tron-loader-ring-inner absolute inset-[30%] rounded-full border-transparent animate-spin",
            "border-t-glow/80 border-r-glow/30",
            ringWidthClasses[size]
          )}
          style={{ animationDuration: "1s" }}
        />

        {/* Center pulse dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "tron-loader-core rounded-full bg-glow animate-pulse",
              size === "sm" && "size-1.5",
              size === "md" && "size-2",
              size === "lg" && "size-3",
              size === "xl" && "size-4"
            )}
            style={{ animationDuration: "1.5s" }}
          />
        </div>

        {/* Scanline effect (visible at medium+ intensity) */}
        <div className="tron-loader-scanline absolute inset-0 overflow-hidden rounded-full opacity-0 [.tron-loader:is([data-tron-intensity='medium'],[data-tron-intensity='heavy'])_&]:opacity-100">
          <div
            className="absolute inset-x-0 h-0.5 bg-linear-to-r from-transparent via-glow to-transparent animate-[tron-scan-line_2s_ease-in-out_infinite]"
            style={{ top: "-2px" }}
          />
        </div>

        {/* Corner brackets (visible at heavy intensity) */}
        <div className="tron-loader-corners pointer-events-none absolute inset-0 opacity-0 [.tron-loader:is([data-tron-intensity='heavy']_*,[data-tron-intensity='heavy'])_&]:opacity-100">
          {/* Top-left */}
          <div className="absolute left-0 top-0 h-[20%] w-[20%] border-l-2 border-t-2 border-glow/60" />
          {/* Top-right */}
          <div className="absolute right-0 top-0 h-[20%] w-[20%] border-r-2 border-t-2 border-glow/60" />
          {/* Bottom-left */}
          <div className="absolute bottom-0 left-0 h-[20%] w-[20%] border-b-2 border-l-2 border-glow/60" />
          {/* Bottom-right */}
          <div className="absolute bottom-0 right-0 h-[20%] w-[20%] border-b-2 border-r-2 border-glow/60" />
        </div>
      </div>

      {/* Label text */}
      {label && (
        <div className="tron-loader-label relative font-mono text-sm uppercase tracking-wider text-foreground/80">
          <span className="relative z-10">{label}</span>
          {/* Glowing text shadow at higher intensities */}
          <span
            className="absolute inset-0 z-0 opacity-0 blur-sm [.tron-loader:is([data-tron-intensity='medium'],[data-tron-intensity='heavy'])_&]:opacity-50"
            style={{ color: "var(--glow)" }}
            aria-hidden="true"
          >
            {label}
          </span>
        </div>
      )}
    </div>
  )
}

Loader.displayName = "Loader"

/**
 * Full-screen loading overlay with Tron-themed loader
 * 
 * @example
 * ```tsx
 * <LoaderOverlay />
 * <LoaderOverlay label="Initializing Grid..." />
 * ```
 */
export function LoaderOverlay({
  label = "Loading...",
  className,
  ...props
}: Omit<LoaderProps, "size" | "showBackground">) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <div className="tron-loader" data-tron-intensity="medium">
        <Loader size="xl" label={label} showBackground />
      </div>
    </div>
  )
}

LoaderOverlay.displayName = "LoaderOverlay"

/**
 * Inline spinner for buttons and compact spaces
 * 
 * @example
 * ```tsx
 * <Button disabled>
 *   <LoaderSpinner />
 *   Loading
 * </Button>
 * ```
 */
export function LoaderSpinner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-block size-4 animate-spin rounded-full border-2 border-transparent border-t-current border-r-current/40",
        className
      )}
      style={{ animationDuration: "0.8s" }}
      role="status"
      aria-label="Loading"
      {...props}
    />
  )
}

LoaderSpinner.displayName = "LoaderSpinner"
