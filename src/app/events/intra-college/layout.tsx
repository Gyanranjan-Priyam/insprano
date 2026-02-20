import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Intra-College Events',
  description: 'Explore department-wise intra-college events at INSPRANO 2026. Compete with your branch peers in specialized technical competitions, quizzes, hackathons, and more across CE, CSE, EE, and ME departments.',
  url: '/events/intra-college',
  keywords: [
    'intra-college events',
    'INSPRANO 2026',
    'department events GCEK',
    'CSE events',
    'mechanical engineering events',
    'electrical engineering events',
    'civil engineering events',
    'branch-wise competitions',
    'technical events Kalahandi',
  ],
})

export default function IntraCollegeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
