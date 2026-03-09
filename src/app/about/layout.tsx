import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Spicebridge Consulting - your trusted technology partner in Nigeria. Our mission, vision, values, and approach to delivering exceptional IT services.",
  openGraph: {
    title: "About Us | Spicebridge",
    description:
      "Your trusted technology partner. Our mission is to empower businesses through innovative technology solutions and drive digital transformation.",
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
