import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Spicebridge IT services - quotes, support, cybersecurity, cloud migration, industries we serve, and more.",
  openGraph: {
    title: "FAQ | Spicebridge",
    description:
      "Common questions about our IT services, pricing, support, and how we can help your business.",
    url: "/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
