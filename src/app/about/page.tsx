"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Icons - eye/target, heart, leaf, people (teal/green outline)
const MissionIcon = () => (
  <svg className="h-12 w-12 text-[#128b55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);
const HeartIcon = () => (
  <svg className="h-12 w-12 text-[#128b55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const LeafIcon = () => (
  <svg className="h-12 w-12 text-[#128b55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const TargetIcon = () => (
  <svg className="h-12 w-12 text-[#128b55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const PeopleIcon = () => (
  <svg className="h-12 w-12 text-[#128b55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const missionCards = [
  {
    icon: MissionIcon,
    title: "Our Mission",
    text: "We empower businesses through innovative technology solutions, driving digital transformation and sustainable growth.",
  },
  {
    icon: MissionIcon,
    title: "Our Vision",
    text: "To be the leading technology partner that enables businesses to thrive in the digital age.",
  },
  {
    icon: HeartIcon,
    title: "Our Approach & Culture",
    text: "Our drive for exceptional service delivery is built on the belief that we are nothing if you are not satisfied with us. Our passion for helping you achieve your goals, no matter what, is what truly differentiates us from our competitors.",
  },
];

const valueCards = [
  { icon: LeafIcon, title: "Integrity", text: "Building trust through transparency" },
  { icon: TargetIcon, title: "Excellence", text: "Delivering exceptional quality" },
  { icon: PeopleIcon, title: "Collaboration", text: "Working together for success" },
];

const storyParagraphs = [
  "Spicebridge is one of Nigeria's leading IT Service providers. We provide Intelligent Technology solutions and services, that help companies implement, innovate, and improve business performance.",
  "Spicebridge was founded as a response to the need for a technology company focused on providing enterprise-class solutions and IT services to SMEs.",
  "We understand how critical it is for your business in Nigeria to get the right solutions so our services are tailored to suit your requirements.",
  "Offering products from top vendors like Cisco, Acronis, HP, Sophos, ManageEngine, Microsoft, Lenovo, IBM, Barracuda, Dell, VMware, Fortigate, and Fortinet.",
  "Our mission is to exceed your expectations and form a long-term, mutually beneficial relationship with you.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-36">
      {/* Hero - gradient banner */}
      <div className="bg-gradient-to-r from-[#16353E] to-[#76B94C] px-4 py-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
            About Us
          </h1>
          <p className="text-lg text-white/90">
            Your Trusted Technology Partner
          </p>
        </div>
      </div>

      {/* Mission, Vision, Approach & Culture - 3 cards */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {missionCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-md"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#128b55]/30 bg-[#128b55]/5">
                <card.icon />
              </div>
              <h2 className="mb-4 text-xl font-bold text-[#212133]">{card.title}</h2>
              <p className="text-[#6C757D] leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 mb-20"
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-[#212133]">
            Our Story
          </h2>
          <div className="mx-auto max-w-3xl border-b border-gray-200 pb-1" aria-hidden="true" />
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center">
            {storyParagraphs.map((para, i) => (
              <p key={i} className="text-[#6C757D] leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-[#212133]">
            Our Values
          </h2>
          <div className="mx-auto max-w-3xl border-b border-gray-200 pb-1" aria-hidden="true" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {valueCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-md"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#128b55]/30 bg-[#128b55]/5">
                  <card.icon />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#212133]">{card.title}</h3>
                <p className="text-[#6C757D]">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
