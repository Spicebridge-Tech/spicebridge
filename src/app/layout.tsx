import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import WelcomeToast from "@/components/WelcomeToast";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://spicebridge.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spicebridge | Expert IT Services & Consulting Nigeria",
    template: "%s | Spicebridge",
  },
  description:
    "Spicebridge - A leading Nigerian technology solutions company. Managed IT services, cloud solutions, cyber security, and software development. Your trusted technology partner.",
  keywords: [
    "IT services Nigeria",
    "managed IT services",
    "cloud solutions",
    "cybersecurity",
    "IT consultancy Lagos",
    "Spicebridge",
    "technology consulting",
  ],
  authors: [{ name: "Spicebridge", url: siteUrl }],
  creator: "Spicebridge Consulting",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Spicebridge Consulting",
    title: "Spicebridge | Expert IT Services & Consulting Nigeria",
    description:
      "Your trusted technology partner. Managed IT services, cloud solutions, cyber security, and software development in Nigeria.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Spicebridge Consulting - Expert IT Services & Consulting Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spicebridge | Expert IT Services & Consulting Nigeria",
    description:
      "Your trusted technology partner. Managed IT services, cloud solutions, cyber security in Nigeria.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <WelcomeToast />
        <ToastProvider />
      </body>
    </html>
  );
}
