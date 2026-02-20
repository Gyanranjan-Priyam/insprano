import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'INSPRANO 2026 - Annual Techno-Cultural Fest | GCE Kalahandi, Bhawanipatna',
  description: 'INSPRANO 2026 is the annual techno-cultural fest of Government College of Engineering Kalahandi (GCEK), Bhawanipatna, Odisha. 50+ events including hackathons, robowars, cultural performances, DJ nights, workshops, esports, and ₹5L+ in prizes. Join 2000+ participants from 30+ colleges.',
  keywords: [
    "INSPRANO",
    "INSPRANO 2026",
    "INSPRANO GCEK",
    "INSPRANO GCE Kalahandi",
    "techno-cultural fest",
    "techfest GCE Kalahandi",
    "techfest GCEK",
    "college fest Odisha",
    "annual fest Kalahandi",
    "Government College of Engineering Kalahandi",
    "GCEK fest",
    "GCE Kalahandi fest",
    "hackathon",
    "robowars",
    "coding competition",
    "cultural fest Odisha",
    "esports tournament",
    "DJ night college fest",
    "workshops",
    "tech events Kalahandi",
    "Bhawanipatna college fest",
    "Odisha engineering college fest",
    "inter college fest Odisha",
    "college events 2026",
    "tech club Odisha",
    "engineering students Kalahandi",
    "best techfest Odisha"
  ],
})

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
