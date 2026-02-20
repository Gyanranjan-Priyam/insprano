import { type Metadata } from "next"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Gallery — INSPRANO 2026",
  description:
    "Relive the moments from INSPRANO 2026 — hackathons, ideation sprints, workshops, competitions and more. Browse our full photo gallery.",
  keywords: [
    "INSPRANO gallery",
    "techfest photos",
    "GCEK events gallery",
    "hackathon photos",
    "ideation sprint",
    "workshop photos",
  ],
})

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
