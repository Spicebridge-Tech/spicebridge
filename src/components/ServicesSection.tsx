"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    icon: "🖥️",
    title: "Managed IT Services",
    desc: "24/7 maintenance and monitoring that keeps your computers, servers, and systems up and running.",
  },
  {
    icon: "💾",
    title: "Backup and Recovery",
    desc: "Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity.",
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    desc: "Protect your business from malware, hackers, viruses, and most commonly security threats.",
  },
  {
    icon: "☁️",
    title: "Cloud Service",
    desc: "We offer a comprehensive range of cloud service packages for all business sizes.",
  },
  {
    icon: "🔍",
    title: "VAPT",
    desc: "Explore how to support your cyber and data security by identifying potential vulnerabilities.",
  },
  {
    icon: "📋",
    title: "IT Consultancy",
    desc: "Our IT consulting team will provide you with the highly available technology platform that you need.",
  },
];

export default function ServicesSection() {
  const [visibleStart, setVisibleStart] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const showCount = 3;
  const canGoLeft = visibleStart > 0;
  const canGoRight = visibleStart < services.length - showCount;

  const goLeft = () => setVisibleStart((s) => Math.max(0, s - 1));
  const goRight = () => setVisibleStart((s) => Math.min(services.length - showCount, s + 1));

  const visibleServices = services.slice(visibleStart, visibleStart + showCount);

  return (
    <section className="bg-white px-4 py-20 md:px-6 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-[#212133] md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-[#6C757D]">
            Comprehensive technology solutions designed to drive your business forward.
          </p>
        </motion.div>

        {/* Carousel with arrows */}
        <div className="relative flex items-center gap-4">
          <motion.button
            onClick={goLeft}
            disabled={!canGoLeft}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#212133]/20 text-[#212133] transition hover:border-[#128b55] hover:bg-[#128b55]/5 disabled:opacity-30"
            whileHover={canGoLeft ? { scale: 1.05 } : {}}
            whileTap={canGoLeft ? { scale: 0.95 } : {}}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <div ref={scrollRef} className="flex-1 overflow-hidden">
            <motion.div
              key={visibleStart}
              initial={{ opacity: 0.8, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visibleServices.map((service) => (
                <motion.div
                  key={service.title}
                  className="glass-card group"
                  whileHover={{ y: -8 }}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#80bb55]/15 text-2xl">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#212133]">{service.title}</h3>
                  <p className="text-[#6C757D]">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.button
            onClick={goRight}
            disabled={!canGoRight}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#212133]/20 text-[#212133] transition hover:border-[#128b55] hover:bg-[#128b55]/5 disabled:opacity-30"
            whileHover={canGoRight ? { scale: 1.05 } : {}}
            whileTap={canGoRight ? { scale: 0.95 } : {}}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link href="/services">
            <motion.span
              className="inline-flex items-center gap-2 rounded-lg bg-[#80bb55] px-6 py-3 font-semibold text-white hover:bg-[#6ba347]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Services
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
