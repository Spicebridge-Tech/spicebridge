"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppStore } from "@/store/appStore";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const ourServices = [
  "Managed IT Services",
  "IT Consultancy",
  "Cloud Services",
  "Cybersecurity Services",
  "Backup & Disaster Recovery",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const addSubscription = useAppStore((s) => s.addSubscription);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    addSubscription({ email: email.trim() });
    toast.success("Successfully subscribed! Thank you.");
    setEmail("");
  };

  return (
    <footer className="bg-[#e8ecf1]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-2 flex flex-col">
              <span className="text-xl font-bold text-[#212133]">SPICEBRIDGE</span>
              <span className="text-xs font-medium text-[#212133]/70">CONSULTING</span>
            </div>
            <p className="mb-4 text-sm text-[#6C757D]">Technology you can trust.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-bold text-[#212133]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#6C757D] transition hover:text-[#212133]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-bold text-[#212133]">Our Services</h4>
            <ul className="space-y-2">
              {ourServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-[#6C757D] transition hover:text-[#212133]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4 font-bold text-[#212133]">Contact Us</h4>
            <ul className="space-y-3 text-[#6C757D]">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@spicebridge.com" className="hover:text-[#212133]">
                  info@spicebridge.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+2348136350642" className="hover:text-[#212133]">+234 813 635 0642 (NG)</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center border-t border-[#212133]/10 pt-12"
        >
          <div className="w-full max-w-[40%] min-w-[280px]">
            <h4 className="mb-2 font-bold text-[#212133]">Subscribe to Our Newsletter</h4>
            <p className="mb-4 text-sm text-[#6C757D]">
              Stay updated with the latest IT solutions and industry insights
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 sm:flex-row sm:gap-0"
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-l-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#212133] sm:rounded-r-none"
              />
              <button
                type="submit"
                className="rounded-r-lg bg-[#212133] px-6 py-3 font-semibold text-white hover:bg-[#2d2e4a] sm:rounded-l-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Copyright & Social */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#212133]/10 pt-8 md:flex-row"
        >
          <p className="text-sm text-[#6C757D]">
            © {new Date().getFullYear()} Spicebridge. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#212133]/70 transition hover:text-[#212133]" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="text-[#212133]/70 transition hover:text-[#212133]" aria-label="X">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
