"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { serviceNavItems } from "@/data/services";

const topBarLinks = [
  {
    href: "/faq",
    label: "FAQ",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/contact", label: "Contact" },
  { href: "/case-studies", label: "Case Studies" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full">
      {/* Top info bar - dark blue, increased height */}
      <div className="border-b border-white/5 bg-[#0f1729] py-3">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="tel:+2348136350642"
              className="flex items-center gap-2 text-white/90 transition hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact sales +234 813 635 0642
            </a>
            <a
              href="mailto:info@spicebridge.com"
              className="flex items-center gap-2 text-white/90 transition hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Have a question? info@spicebridge.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            {topBarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex flex-col items-center gap-0.5 text-sm text-white/90 transition hover:text-white"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav bar - white, full width content */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#212133] md:text-2xl">
              SPICEBRIDGE
            </span>
            <span className="text-xs font-medium text-[#212133]/70">CONSULTING</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {mainNavLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`relative flex items-center py-2 text-sm font-medium text-[#212133] transition hover:text-[#128b55] ${
                      pathname?.startsWith("/services") ? "text-[#128b55]" : ""
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`ml-0.5 h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {pathname?.startsWith("/services") && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#128b55]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="absolute left-0 top-full z-50 mt-1 w-80 min-w-[280px] rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
                      >
                        {serviceNavItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
                            className={`block px-4 py-2 text-sm text-[#212133] hover:bg-gray-50 hover:text-[#128b55] ${item.label === "View All Services" ? "font-bold" : ""}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium text-[#212133] transition hover:text-[#128b55] ${
                    pathname === link.href ? "text-[#128b55]" : ""
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#128b55]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-[#212133] hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-gray-200 bg-white lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {mainNavLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-[#212133] hover:text-[#128b55]"
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <div className="ml-4 flex flex-col border-l-2 border-gray-100 pl-4">
                        {serviceNavItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`py-2 text-sm text-[#6C757D] hover:text-[#128b55] ${item.label === "View All Services" ? "font-bold" : ""}`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="tel:+2348136350642" className="py-3 text-[#128b55]">
                  +234 813 635 0642
                </a>
                <a href="mailto:info@spicebridge.com" className="py-3 text-[#212133]/80">
                  info@spicebridge.com
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
