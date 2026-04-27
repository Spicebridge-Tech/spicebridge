"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const problems = [
  {
    number: "1",
    title: "Poor IT Performance & Service Delivery",
    desc: "Poorly performing IT services reduce productivity and risk the integrity of your business.",
  },
  {
    number: "2",
    title: "Controlling IT Costs",
    desc: "IT Services are one of the largest sunken costs in any business. It's important to manage them.",
  },
  {
    number: "3",
    title: "Distraction from Business Priorities",
    desc: "Our typical customer doesn't want to be distracted by IT Services that don't add direct value to their customers.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ProblemSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - headline, paragraph, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#212133] md:text-4xl lg:text-[2.5rem]">
              Spicebridge Resolves
              <br />
              <span className="text-[#212133]">3 Key Problems for Business</span>
            </h2>
            <p className="mb-8 max-w-lg text-[#6C757D] leading-relaxed">
              We&apos;ve always known that for businesses large and small, IT can be a real challenge to
              manage. Staying on top of your technology includes controlling the costs associated with
              keeping in-house staff up-to-date with training, certifications and current trends.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-lg bg-[#80bb55] px-6 py-3 font-semibold uppercase text-white hover:bg-[#6ba347]"
                >
                  Discover Our Services
                </Link>
              </motion.div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200">
                  <svg className="h-5 w-5 text-[#212133]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a
                    href="mailto:info@spicebridge.tech"
                    className="block font-semibold text-[#212133] hover:text-[#128b55]"
                  >
                    info@spicebridge.tech
                  </a>
                  <span className="text-sm text-[#6C757D]">Contact Sales</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - 3 problems */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {problems.map((problem) => (
              <motion.div
                key={problem.number}
                variants={item}
                className="glass-card flex gap-6"
                whileHover={{ y: -4 }}
              >
                <span className="text-5xl font-bold text-gray-300">{problem.number}</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-[#212133]">{problem.title}</h3>
                  <p className="text-[#6C757D]">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
