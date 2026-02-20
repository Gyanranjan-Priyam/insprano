import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { kilobotsEvents } from "@/data/eventData";
import { generateSEO } from "@/lib/seo";
import { EventDetailLayout } from "@/components/website/event-detail-layout";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return kilobotsEvents.map((event) => ({ slug: event.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = kilobotsEvents.find((e) => e.id === slug);
  if (!event) return {};
  return generateSEO({
    title: `${event.title} — KiloBots`,
    description: event.shortDescription,
    url: event.viewDetailsUrl,
    keywords: ["KiloBots", "Robotics", ...(event.tags ?? [])],
  });
}

export default async function KilobotsEventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = kilobotsEvents.find((e) => e.id === slug);
  if (!event) notFound();

  return (
    <EventDetailLayout
      event={event}
      categoryLabel="KiloBots"
      backHref="/events/inter-college/kilobots"
      backLabel="Back to KiloBots"
    />
  );
}
