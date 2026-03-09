import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import WelcomeToast from "@/components/WelcomeToast";

export const metadata: Metadata = {
  title: "Spicebridge | Expert IT Services & Consulting Nigeria",
  description:
    "Spicebridge - A leading Nigerian technology solutions company. Managed IT services, cloud solutions, cyber security, and software development.",
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
