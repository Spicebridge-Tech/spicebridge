"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support" },
  { value: "Global", label: "Reach" },
];

export default function CloudSection() {
  return (
    <section className="bg-[#f8f9fa] px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]"
            >
              <Image
                src="/assets/philipp-katzenberger-iIJrUoeRoCQ-unsplash.jpg"
                alt="Cloud infrastructure"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#212133]/70 to-transparent" />
            </motion.div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-2 text-[#80bb55] font-medium"
              >
                Award-Winning Platform
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-3xl font-bold text-[#212133] md:text-4xl"
              >
                Enterprise Cloud Infrastructure
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 text-[#6C757D]"
              >
                Scale your business with our comprehensive cloud services. From virtual machines to
                dedicated servers, manage everything through our award-winning CloudCore portal.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-8 flex flex-wrap gap-6"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-gray-100 bg-gray-50 px-6 py-4"
                  >
                    <div className="text-2xl font-bold text-[#212133]">{stat.value}</div>
                    <div className="text-sm text-[#6C757D]">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href="https://pcis.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-[#80bb55] px-6 py-3 font-semibold text-white hover:bg-[#6ba347]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Cloud Services
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
