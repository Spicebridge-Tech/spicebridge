"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const serviceIcons: Record<string, string> = {
  "managed-it-services": "🖥️",
  "cloud-services": "☁️",
  "it-consultancy": "📋",
  "cybersecurity": "🔒",
  "vapt": "🔍",
  "backup-disaster-recovery": "💾",
  "infrastructure-endpoint-management": "⚙️",
};

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const icon = serviceIcons[service.slug] || "📋";

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-36">
      {/* Hero - gradient background (dark teal to vibrant green, matching Promethean) */}
      <div
        className="bg-gradient-to-r from-[#16353E] to-[#76B94C] px-4 py-20 md:px-6 lg:px-8"
        style={{ minHeight: "320px" }}
      >
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="mb-8 inline-block text-white/90 hover:text-white"
          >
            ← Back to All Services
          </Link>
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 text-4xl">
            {icon}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            {service.title}
          </h1>
          <p className="max-w-2xl text-lg text-white">{service.tagline}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 text-2xl font-bold text-[#212133]">Overview</h2>
          <p className="text-[#6C757D] leading-relaxed">{service.overview}</p>
        </motion.section>

        {/* Key Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-[#212133]">Key Benefits</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.keyBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 text-[#80bb55]">✓</span>
                <span className="text-[#595966]">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Features & Capabilities */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-[#212133]">Features & Capabilities</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4"
              >
                <span className="mt-0.5 shrink-0 text-[#80bb55]">✓</span>
                <span className="text-[#595966]">{feature}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Ideal For */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-[#212133]">Ideal For</h2>
          <ul className="space-y-3">
            {service.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-[#80bb55]">✓</span>
                <span className="text-[#595966]">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* CTA - gradient matching Promethean (dark teal to vibrant green) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-[#1E404F] to-[#76B94C] px-8 py-16 text-center shadow-lg"
        >
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to Get Started?</h2>
          <p className="mb-8 text-white/90">
            Let&apos;s discuss how {service.title.toLowerCase()} can benefit your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-white px-8 py-3 font-semibold text-[#1A365D] shadow-md transition hover:bg-white/95"
          >
            Request a Consultation
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
