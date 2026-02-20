"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

export type FocusCard = {
  title: string
  src: string
  subtitle?: string
  email?: string
}

export const FocusCardItem = React.memo(function FocusCardItem({
  card,
  index,
  hovered,
  setHovered,
}: {
  card: FocusCard
  index: number
  hovered: number | null
  setHovered: React.Dispatch<React.SetStateAction<number | null>>
}) {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative overflow-hidden aspect-3/4 w-full transition-all duration-300 ease-out cursor-pointer",
        "border border-primary/20 bg-background/40",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {/* Corner brackets */}
      <span className="pointer-events-none absolute left-0 top-0 z-20 h-3 w-3 border-l-2 border-t-2 border-primary/60 transition-colors duration-300 group-hover:border-primary" />
      <span className="pointer-events-none absolute right-0 top-0 z-20 h-3 w-3 border-r-2 border-t-2 border-primary/60" />
      <span className="pointer-events-none absolute bottom-0 left-0 z-20 h-3 w-3 border-b-2 border-l-2 border-primary/60" />
      <span className="pointer-events-none absolute bottom-0 right-0 z-20 h-3 w-3 border-b-2 border-r-2 border-primary/60" />

      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
        style={{
          transform: hovered === index ? "scale(1.05)" : "scale(1)",
        }}
        draggable={false}
      />

      {/* CRT scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
        }}
      />

      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0 z-10 flex flex-col items-start justify-end p-5 transition-opacity duration-300",
          "bg-linear-to-t from-black/80 via-black/40 to-transparent",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent/80 mb-1">
          {card.subtitle || "MEMBER"}
        </div>
        <div className="text-lg md:text-xl font-medium text-foreground">
          {card.title}
        </div>
        {card.email && (
          <a
            href={`mailto:${card.email}`}
            onClick={(e) => e.stopPropagation()}
            className="mt-1 font-mono text-[10px] tracking-wider text-primary/80 hover:text-primary transition-colors"
          >
            {card.email}
          </a>
        )}
      </div>

      {/* Glow edge on hover */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-20 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
        style={{
          boxShadow:
            "inset 0 0 20px rgba(255,122,24,0.15), inset 0 0 60px rgba(255,122,24,0.05)",
        }}
      />
    </div>
  )
})

export function FocusCards({ cards }: { cards: FocusCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
      {cards.map((card, index) => (
        <FocusCardItem
          key={`${card.title}-${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  )
}
