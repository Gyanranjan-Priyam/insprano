import type { Metadata } from "next"
import Image from "next/image"
import { VT323, Share_Tech_Mono, Uncial_Antiqua } from "next/font/google"
import { ThemeProvider } from "@/components/theme"
import { Toaster } from "@/components/ui/sonner"
import { TronHeader, TronFooter, LenisProvider } from "@/components/layout"
import "./globals.css"
import "@/styles/tron-style.css"
import { Analytics } from '@vercel/analytics/next';

// Uncial Antiqua — used exclusively for INSPRANO brand text
const uncialAntiqua = Uncial_Antiqua({
  variable: "--font-uncial",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

// Retro terminal font for body text
const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

// Retro monospace for code/mono elements
const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.insprano.tech'),
  title: {
    template: "%s | INSPRANO 2026 - Techno-Cultural Fest | GCE Kalahandi",
    default: "INSPRANO 2026 - Annual Techno-Cultural Fest | GCE Kalahandi, Bhawanipatna"
  },
  description: "INSPRANO 2026 is the annual techno-cultural fest of Government College of Engineering Kalahandi (GCEK), Bhawanipatna, Odisha. 50+ events, hackathons, robowars, cultural performances, DJ nights, workshops, esports, and ₹5L+ in prizes. Join 2000+ participants across 30+ colleges.",
  applicationName: "INSPRANO 2026",
  referrer: 'origin-when-cross-origin',
  keywords: [
    "INSPRANO",
    "INSPRANO 2026",
    "INSPRANO GCEK",
    "INSPRANO GCE Kalahandi",
    "techno-cultural fest",
    "techno cultural fest Odisha",
    "college fest",
    "annual fest GCEK",
    "GCE Kalahandi fest",
    "Government College of Engineering Kalahandi",
    "Kalahandi Engineering College",
    "tech fest Kalahandi",
    "tech fest Odisha 2026",
    "cultural fest Odisha",
    "hackathon Odisha",
    "hackathon 2026",
    "robowars",
    "robo wars college",
    "coding competition",
    "cultural events",
    "tech exhibitions",
    "college festival India",
    "engineering fest Odisha",
    "tech events Kalahandi",
    "cultural performances",
    "workshops",
    "innovation fest",
    "student festival",
    "Bhawanipatna fest",
    "Odisha college fest 2026",
    "best college fest Odisha",
    "DJ night college fest",
    "esports college",
    "game arena",
    "ideathon",
    "star night",
    "GCEK Bhawanipatna",
    "inter college competition Odisha",
    "intra college events",
  ],
  authors: [
    { name: "INSPRANO - GCE Kalahandi", url: "https://www.insprano.tech" },
    { name: "CodeBreakers GCEK", url: "https://www.codebreakersgcek.tech" },
  ],
  creator: "CodeBreakers GCEK",
  publisher: "Government College of Engineering Kalahandi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.insprano.tech",
    siteName: "INSPRANO 2026 - GCE Kalahandi",
    title: "INSPRANO 2026 - Annual Techno-Cultural Fest | GCE Kalahandi, Bhawanipatna",
    description: "50+ events. 2000+ participants. ₹5L+ prizes. Three epic days of tech, culture, innovation & art at GCE Kalahandi. Hackathons, robowars, cultural nights, esports, workshops & more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "INSPRANO 2026 - Annual Techno-Cultural Fest of GCE Kalahandi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INSPRANO 2026 - Annual Techno-Cultural Fest | GCE Kalahandi",
    description: "50+ events, hackathons, robowars, cultural nights, esports & ₹5L+ prizes. The ultimate techno-cultural fest of GCE Kalahandi.",
    creator: "@insprano_gcek",
    site: "@insprano_gcek",
    images: ["/twitter-image"],
  },
  appleWebApp: {
    capable: true,
    title: "INSPRANO 2026",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: '/assets/fest-logo.png', sizes: 'any', type: 'image/png' },
      { url: '/assets/fest-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/fest-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/fest-logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/assets/fest-logo.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.insprano.tech",
    languages: {
      'en-IN': 'https://www.insprano.tech',
      'en-US': 'https://www.insprano.tech',
    },
  },
  manifest: "/manifest.json",
  category: "Education",
  other: {
    'theme-color': '#FF7A18',
    'color-scheme': 'dark',
  },
}

// Inline script to set intensity before React hydrates
const intensityInitScript = `
(function() {
  try {
    var intensities = ['none','light','medium','heavy'];
    var intensity = localStorage.getItem('insprano-theme-intensity');
    intensity = intensities.indexOf(intensity) > -1 ? intensity : 'medium';
    if (intensity !== 'none') {
      document.documentElement.setAttribute('data-tron-intensity', intensity);
    }
  } catch(e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${uncialAntiqua.variable} ${vt323.variable} ${shareTechMono.variable}`} suppressHydrationWarning>
      <head>
        <script id="intensity-init" dangerouslySetInnerHTML={{ __html: intensityInitScript }} />
        <meta name="theme-color" content="#FF7A18" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#FF7A18" media="(prefers-color-scheme: light)" />
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.insprano.tech/#organization",
                  "name": "INSPRANO 2026 - GCE Kalahandi",
                  "alternateName": ["INSPRANO", "INSPRANO GCEK", "INSPRANO 2026", "Techno-Cultural Fest GCE Kalahandi"],
                  "url": "https://www.insprano.tech",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.insprano.tech/assets/fest-logo.png",
                    "width": 512,
                    "height": 512,
                  },
                  "description": "INSPRANO is the annual techno-cultural fest of Government College of Engineering Kalahandi, Bhawanipatna. 50+ events, hackathons, robowars, cultural performances, DJ nights, esports, workshops, and ₹5L+ in prizes.",
                  "parentOrganization": {
                    "@type": "EducationalOrganization",
                    "name": "Government College of Engineering Kalahandi",
                    "url": "https://www.gcekbpatna.ac.in",
                  },
                  "sameAs": [
                    "https://www.instagram.com/gcek.insprano",
                    "https://www.linkedin.com/company/insprano-gce-kalahandi",
                    "https://github.com/codebreakers-gcek",
                  ],
                },
                {
                  "@type": "Event",
                  "name": "INSPRANO 2026",
                  "description": "INSPRANO 2026 - Annual Techno-Cultural Fest of Government College of Engineering Kalahandi. 50+ events, 2000+ participants, ₹5L+ prizes.",
                  "organizer": {
                    "@id": "https://www.insprano.tech/#organization"
                  },
                  "location": {
                    "@type": "Place",
                    "name": "Government College of Engineering Kalahandi",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Bhawanipatna",
                      "addressRegion": "Odisha",
                      "addressCountry": "India",
                      "postalCode": "766002",
                    }
                  },
                  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.insprano.tech/#website",
                  "url": "https://www.insprano.tech",
                  "name": "INSPRANO 2026 - GCE Kalahandi",
                  "description": "Annual Techno-Cultural Fest of GCE Kalahandi - Tech, Culture, Innovation & Art",
                  "publisher": {
                    "@id": "https://www.insprano.tech/#organization"
                  },
                  "inLanguage": "en-IN",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.insprano.tech/events?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  },
                },
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <LenisProvider>
            <TronHeader />
            <main>
              {children}
            </main>
            
            {/* Footer */}
            <TronFooter />

            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                },
              }}
            />
            <Analytics />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
