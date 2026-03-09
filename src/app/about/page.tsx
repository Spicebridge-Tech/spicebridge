"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-36 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl py-20"
      >
        <h1 className="mb-6 text-4xl font-bold text-[#212133]">About Us</h1>
        <p className="mb-8 text-[#6C757D]">
          Spicebridge - A leading Nigerian technology solutions company.
        </p>
        <Link href="/" className="inline-flex rounded-lg bg-[#80bb55] px-6 py-3 font-semibold text-white hover:bg-[#6ba347]">
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
