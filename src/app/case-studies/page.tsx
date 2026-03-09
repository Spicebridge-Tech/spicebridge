"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    slug: "servicedesk-plus-itil",
    company: "Delta Distributors Ltd",
    title: "ServiceDesk Plus & SupportCenter Plus for ITIL Compliance",
    excerpt: "How we helped a Nigerian enterprise achieve ITIL-compliant service management with ManageEngine solutions.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white pt-36">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="mb-4 text-4xl font-bold text-[#212133] md:text-5xl">
            Case Studies
          </h1>
          <p className="text-lg text-[#6C757D]">
            Real-world success stories of how we&apos;ve helped businesses transform their IT infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/case-studies/${study.slug}`}>
                <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-[#f8f9fa] transition hover:border-[#80bb55] hover:shadow-lg">
                  <div className="p-8">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#80bb55]">
                      {study.company}
                    </p>
                    <h2 className="mb-4 text-xl font-bold text-[#212133] group-hover:text-[#128b55]">
                      {study.title}
                    </h2>
                    <p className="text-[#6C757D]">{study.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 font-semibold text-[#128b55]">
                      Read case study
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Link
            href="/"
            className="inline-flex rounded-lg bg-[#80bb55] px-6 py-3 font-semibold text-white hover:bg-[#6ba347]"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
