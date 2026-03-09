import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((s) => s.slug === slug);
  if (!caseStudy) return { title: "Case Study Not Found" };

  return {
    title: `${caseStudy.company} - ${caseStudy.title}`,
    description: `See how Spicebridge helped ${caseStudy.company} with ITIL-compliant service management.`,
    openGraph: {
      title: `${caseStudy.company} | Spicebridge Case Study`,
      description: caseStudy.title,
      url: `/case-studies/${slug}`,
    },
  };
}

export default function CaseStudySlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
