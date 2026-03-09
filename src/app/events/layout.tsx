import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming IT workshops, webinars, and industry events from Spicebridge Consulting. Stay tuned for the latest in technology and business.",
  openGraph: {
    title: "Events | Spicebridge",
    description:
      "IT workshops, webinars, and industry events. Stay updated with Spicebridge.",
    url: "/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
