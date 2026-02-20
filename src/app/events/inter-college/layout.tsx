import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Inter-College Events",
  description:
    "Compete with the best minds across colleges at INSPRANO 2026. Join Codebreakers and KiloBots — premier inter-college technical competitions at GCE Kalahandi.",
  url: "/events/inter-college",
  keywords: [
    "inter-college events",
    "INSPRANO 2026",
    "Codebreakers",
    "KiloBots",
    "inter-college competition",
    "college tech fest Odisha",
    "robotics competition",
    "cryptography challenge",
    "GCEK techfest",
  ],
});

export default function InterCollegeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
