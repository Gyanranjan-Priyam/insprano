import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { codebreakersEvents } from "@/data/eventData";
import { generateSEO } from "@/lib/seo";
import { EventDetailLayout } from "@/components/website/event-detail-layout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return codebreakersEvents.map((event) => ({ slug: event.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = codebreakersEvents.find((e) => e.id === slug);
  if (!event) return {};
  return generateSEO({
    title: `${event.title} — Codebreakers`,
    description: event.shortDescription,
    url: event.viewDetailsUrl,
    keywords: ["Codebreakers", "Hackathon", ...(event.tags ?? [])],
  });
}

export default async function CodebreakersEventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = codebreakersEvents.find((e) => e.id === slug);
  if (!event) notFound();

  return (
    <EventDetailLayout
      event={event}
      categoryLabel="Codebreakers"
      backHref="/events/inter-college/codebreakers"
      backLabel="Back to Codebreakers"
    />
  );
}
