import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive IT solutions - Managed IT Services, Cloud, Cybersecurity, IT Consultancy, VAPT, Backup & Disaster Recovery. Tailored for businesses in Nigeria.",
  openGraph: {
    title: "Our Services | Spicebridge",
    description:
      "From managed services to cybersecurity, we provide the complete IT support your organization needs to thrive.",
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
