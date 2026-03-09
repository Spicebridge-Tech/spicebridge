"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#f8f9fa] px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - light grey bg, text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="mb-4 text-3xl font-bold text-[#212133] md:text-4xl">
              Spicebridge
            </h2>
            <p className="mb-4 text-[#6C757D] leading-relaxed">
              A leading Nigerian technology solutions company, specializing in comprehensive IT
              services including communications and integration, infrastructure services, managed
              services, cloud solutions, and software development.
            </p>
            <p className="mb-8 text-[#6C757D] leading-relaxed">
              With a strong footprint across Nigeria, we leverage robust partnerships to connect
              businesses, enterprises, and consumers. Through our value-added services, we help
              clients streamline operations, enhance efficiency, and drive meaningful growth.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg bg-[#80bb55] px-6 py-3 font-semibold text-white hover:bg-[#6ba347]"
              >
                Learn More About Us
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - image with overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl lg:order-2"
          >
            <Image
              src="/assets/ed-hardie-1C5F88Af9ZU-unsplash.jpg"
              alt="Spicebridge team"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-lg font-bold text-white">Trusted Technology Partner</p>
              <p className="text-sm text-white/90">Empowering Business Growth</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
