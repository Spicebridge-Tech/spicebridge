"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What services does Spicebridge offer?",
    a: "We offer Managed IT Services, IT Consultancy, Cloud Services, Cybersecurity, VAPT, Backup & Disaster Recovery, and Infrastructure & Endpoint Management.",
  },
  {
    q: "How can I request a quote for your services?",
    a: "Fill out the quote form on our homepage, call +234 813 635 0642, or email info@spicebridge.com. We typically respond within 24 hours.",
  },
  {
    q: "Do you provide support for small businesses?",
    a: "Yes. We tailor our services to businesses of all sizes, from startups to enterprises, with flexible solutions to fit your budget.",
  },
  {
    q: "What is your response time for technical support?",
    a: "We aim to respond within 2–4 hours for standard requests. Critical issues receive immediate attention with 24/7 support available for managed clients.",
  },
  {
    q: "Do you offer cybersecurity assessments?",
    a: "Yes. We provide Vulnerability Assessment & Penetration Testing (VAPT), security audits, and compliance reviews to strengthen your security posture.",
  },
  {
    q: "Can you help with cloud migration?",
    a: "Absolutely. We offer seamless cloud migration with minimal disruption, including planning, execution, and post-migration support.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve finance, healthcare, education, retail, manufacturing, and other sectors across Nigeria and beyond.",
  },
  {
    q: "Do you provide training for IT staff?",
    a: "Yes. We offer training on our deployed solutions, best practices, and security awareness to help your team work effectively.",
  },
  {
    q: "What are your business hours?",
    a: "Our office hours are Monday–Friday, 8am–6pm WAT. Technical support and monitoring are available 24/7 for managed service clients.",
  },
  {
    q: "How do I get started with your services?",
    a: "Contact us for a free consultation. We'll discuss your needs, assess your current setup, and recommend a tailored solution.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-36">
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-[#80bb55] md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-[#6C757D]">
            Find answers to common questions about our services, support, and how we can help your business succeed.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-[#212133] hover:bg-gray-100/80"
              >
                <span className="font-medium">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-gray-200 px-6 py-4 text-[#6C757D]">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
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
