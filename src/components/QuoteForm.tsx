"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { services } from "@/data/services";
import { useAppStore } from "@/store/appStore";

const steps = [
  { num: "1", icon: "👥", title: "Tell Us About Your Business", desc: "Share your IT challenges and requirements with us." },
  { num: "2", icon: "✓", title: "Get Custom Solutions", desc: "Our experts will design tailored solutions for your needs." },
  { num: "3", icon: "⚡", title: "Start Your Journey", desc: "Implement solutions and watch your business thrive." },
];

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [orgSize, setOrgSize] = useState("");
  const addQuoteSubmission = useAppStore((s) => s.addQuoteSubmission);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orgSize) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    setLoading(true);
    setTimeout(() => {
      const data = {
        fullName: String(formData.get("fullName") || ""),
        email: String(formData.get("email") || ""),
        companyName: String(formData.get("companyName") || ""),
        service: String(formData.get("service") || ""),
        orgSize,
        industry: String(formData.get("industry") || ""),
      };
      addQuoteSubmission(data);
      setLoading(false);
      setSubmitted(true);
      toast.success("Quote request received! We'll contact you shortly.");
    }, 1500);
  };

  return (
    <section id="quote" className="bg-[#f8f9fa]">
      {/* CTA Banner - centered with two buttons */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-[#f0faf0] to-white px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#212133] md:text-4xl">
            Get a Free Quote
          </h2>
          <p className="mb-8 text-[#6C757D]">
            We help great companies simplify and take control of their IT
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#quote-form"
              className="inline-flex items-center gap-2 rounded-lg bg-[#212133] px-6 py-3 font-semibold text-white hover:bg-[#2d2e4a]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get a free consultation
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:info@spicebridge.tech"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#212133] bg-white px-6 py-3 font-semibold text-[#212133] hover:bg-gray-50"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email sales
            </motion.a>
          </div>
        </div>
      </div>

      {/* Two-column form section */}
      <div id="quote-form" className="px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl shadow-xl lg:grid lg:grid-cols-5">
            {/* Left - Dark blue panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#212133] p-8 lg:col-span-2 lg:p-12"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/70">
                How It Works
              </p>
              <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                GET A FREE QUOTE
              </h3>
              <p className="mb-10 text-white/80">
                Share your IT challenges and requirements with us.
              </p>
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#80bb55]/30 text-lg font-bold text-white">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">{step.title}</h4>
                      <p className="text-sm text-white/70">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Light form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 lg:col-span-3 lg:p-12"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-xl bg-green-50 p-8 text-center"
                >
                  <div className="mb-4 text-4xl">✅</div>
                  <h4 className="mb-2 text-xl font-semibold text-[#128b55]">Thank you!</h4>
                  <p className="text-[#6C757D]">
                    We&apos;ve received your request. Our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#212133]">
                        Full Name *
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        required
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20"
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
                        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#212133]">
                      Company Name *
                    </label>
                    <input
                      name="companyName"
                      type="text"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#212133]">
                      IT Service You Need *
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-[#212133]">
                      Organization Size *
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {["1-10", "11-50", "51-200", "200+"].map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setOrgSize(size)}
                          className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition ${
                            orgSize === size
                              ? "border-[#128b55] bg-[#128b55]/10 text-[#128b55]"
                              : "border-gray-200 bg-white text-[#212133] hover:border-gray-300"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#212133]">
                      Industry
                    </label>
                    <select name="industry" className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-[#128b55] focus:ring-2 focus:ring-[#128b55]/20">
                      <option value="">Select your industry</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Retail">Retail</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" required className="rounded border-gray-300" />
                    <span className="text-sm text-[#6C757D]">
                      I agree to the privacy policy and terms of service
                    </span>
                  </label>

                  <motion.button
                    type="submit"
                    disabled={loading || !orgSize}
                    className="w-full rounded-lg bg-[#80bb55] py-4 text-lg font-semibold text-white hover:bg-[#6ba347] disabled:opacity-70"
                    whileHover={!loading ? { scale: 1.01 } : {}}
                    whileTap={!loading ? { scale: 0.99 } : {}}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                        />
                        Submitting...
                      </span>
                    ) : (
                      "Get Your Free Quote"
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
