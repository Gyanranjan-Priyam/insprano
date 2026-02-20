import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Hackathons',
  description: 'Join INSPRANO 2026 flagship hackathons including DevX and Hack Nova at GCE Kalahandi. Build innovative solutions, collaborate with talented developers, and compete for exciting prizes.',
  url: '/events/hackathon',
  keywords: [
    'hackathon GCEK',
    'INSPRANO hackathon',
    'DevX hackathon',
    'Hack Nova',
    '24-hour hackathon',
    'coding marathon',
    'tech hackathon Odisha',
    'INSPRANO 2026 hackathon',
  ],
})

export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
