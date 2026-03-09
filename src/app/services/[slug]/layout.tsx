import type { Metadata } from "next";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.tagline,
    openGraph: {
      title: `${service.title} | Spicebridge`,
      description: service.tagline,
      url: `/services/${slug}`,
    },
  };
}

export default function ServiceSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
