"use client";

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

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-white pt-36">
      {/* Hero banner - gradient with heading and subheading */}
      <div className="bg-gradient-to-r from-[#16353E] to-[#76B94C] px-4 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Comprehensive IT Solutions for Your Business
          </h1>
          <p className="max-w-2xl text-lg text-white">
            From managed services to cybersecurity, we provide the complete IT support your organization needs to thrive.
          </p>
        </div>
      </div>

      {/* Our Services section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-[#212133] md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-[#425574]">
              Tailored IT solutions designed to meet the unique needs of your business.
            </p>
          </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#80bb55]/15 text-2xl">
                {serviceIcons[service.slug] || "📋"}
              </div>
              <h2 className="mb-2 text-2xl font-bold text-[#212133]">{service.title}</h2>
              <p className="mb-6 text-[#6C757D]">{service.tagline}</p>
              <div className="mb-6">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#80bb55]">
                  Key Benefits
                </h3>
                <ul className="space-y-1">
                  {service.keyBenefits.slice(0, 4).map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-[#595966]">
                      <span className="text-green-500">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 font-semibold text-[#128b55] hover:text-[#0f7347]"
              >
                Learn More
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
