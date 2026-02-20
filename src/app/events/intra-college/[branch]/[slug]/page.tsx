import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { intraBranches, intraCollegeEvents } from "@/data/eventData";
import { generateSEO } from "@/lib/seo";
import { EventDetailLayout } from "@/components/website/event-detail-layout";

type Props = {
  params: Promise<{ branch: string; slug: string }>;
};

export async function generateStaticParams() {
  return intraBranches.flatMap((branch) =>
    branch.events.map((event) => ({
      branch: branch.id,
      slug: event.id,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = intraCollegeEvents.find((e) => e.id === slug);
  if (!event) return {};
  return generateSEO({
    title: event.title,
    description: event.shortDescription,
    url: event.viewDetailsUrl,
    keywords: event.tags ?? [],
  });
}

export default async function IntraEventDetailPage({ params }: Props) {
  const { branch, slug } = await params;

  const event = intraCollegeEvents.find((e) => e.id === slug);
  const branchData = intraBranches.find((b) => b.id === branch);

  if (!event || !branchData) notFound();

  return (
    <EventDetailLayout
      event={event}
      categoryLabel={branchData.fullName}
      backHref="/events/intra-college"
      backLabel="Back to Events"
    />
  );
}
