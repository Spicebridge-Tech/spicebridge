import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real-world success stories. See how Spicebridge has helped Nigerian businesses transform their IT infrastructure and achieve ITIL compliance.",
  openGraph: {
    title: "Case Studies | Spicebridge",
    description:
      "Success stories of how we've helped businesses transform their IT infrastructure.",
    url: "/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
