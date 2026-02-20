import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind INSPRANO 2026 — the Principal, Faculty Coordinators, Dev Team and Event Coordinators of GCE Kalahandi's annual techno-cultural fest.",
  openGraph: {
    title: "About Us | INSPRANO 2026",
    description:
      "Meet the team behind INSPRANO 2026 — the Principal, Faculty Coordinators, Dev Team and Event Coordinators.",
  },
}

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
