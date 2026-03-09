import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Spicebridge Consulting. Contact us for IT services, support, or a free consultation. Lagos, Nigeria - info@spicebridge.com, +234 813 635 0642.",
  openGraph: {
    title: "Contact Us | Spicebridge",
    description:
      "Contact Spicebridge for IT services and support. We typically respond within 24 hours.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
