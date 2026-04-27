"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useAppStore } from "@/store/appStore";

const contactItems = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@spicebridge.tech",
    href: "mailto:info@spicebridge.tech",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Lagos, Nigeria",
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const addContactSubmission = useAppStore((s) => s.addContactSubmission);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      message: String(formData.get("message") || ""),
    };
    addContactSubmission(data);
    setSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white pt-36">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Send Message Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="mb-2 text-2xl font-bold text-[#212133] md:text-3xl">Send Message</h2>
            <p className="mb-8 text-[#6C757D]">
              Have a project in mind? Let&apos;s discuss how we can help.
            </p>

            {submitted ? (
              <div className="rounded-xl bg-green-50 p-8 text-center">
                <div className="mb-4 text-5xl">✅</div>
                <h3 className="mb-2 text-xl font-semibold text-[#128b55]">Message sent!</h3>
                <p className="text-[#6C757D]">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#212133]">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#212133]">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#212133]">
                    Company Name
                  </label>
                  <input
                    name="company"
                    type="text"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#212133]">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <motion.button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#212133] px-8 py-3 font-semibold text-white hover:bg-[#2d2e4a]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0V5" />
                    </svg>
                  </motion.button>
                  <a
                    href="mailto:info@spicebridge.tech"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#80bb55] bg-transparent px-8 py-3 font-semibold text-[#80bb55] transition hover:bg-[#80bb55]/5"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email support
                  </a>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right - Contact Information & Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-2 text-2xl font-bold text-[#212133] md:text-3xl">Contact Information</h2>
              <p className="mb-6 text-[#6C757D]">
                Reach out to us through any of the following channels. We&apos;re here to help!
              </p>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <div
                    key={item.label + item.value}
                    className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#80bb55]/15 text-[#80bb55]">
                      {item.icon}
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#80bb55]">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-[#212133] hover:text-[#128b55]">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#212133]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours - dark green box */}
            <div className="rounded-xl bg-[#0d4d2b] p-6 text-white">
              <h3 className="mb-4 text-lg font-bold">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between gap-4">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-white/90">
                Emergency support available 24/7 for managed service clients
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#212133] px-6 py-3 font-semibold text-white hover:bg-[#2d2e4a]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
