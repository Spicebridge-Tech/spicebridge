"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "⚡",
    title: "Quick response",
    desc: "We can log in to your PC or server remotely and resolve many issues immediately without the wait for a technician to travel to your location.",
  },
  {
    icon: "🎯",
    title: "Experienced",
    desc: "With years of IT outsourcing, we have gained experience in a wide spectrum of technologies, industries, and application types.",
  },
  {
    icon: "💬",
    title: "No geek speak",
    desc: "You deserve to have your questions answered in plain English. Our technicians will clearly explain what is happening so you understand.",
  },
  {
    icon: "📊",
    title: "Business savvy",
    desc: "We design, evaluate and justify technology solutions from a thorough understanding of the business benefit for your company.",
  },
  {
    icon: "🏪",
    title: "One Stop Shop",
    desc: "We handle all aspects of your IT infrastructure including hardware, software management and any other related technology needs.",
  },
  {
    icon: "✅",
    title: "100% Satisfaction Guarantee",
    desc: "We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading - pre-headline left, main headline, intro text right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#80bb55]">
              Why Choose Spicebridge?
            </p>
            <h2 className="text-3xl font-bold text-[#212133] md:text-4xl lg:text-5xl">
              Why Choose Spicebridge?
            </h2>
          </div>
          <p className="max-w-md text-[#6C757D] lg:text-right">
            We deliver exceptional IT services that set us apart from the competition.
          </p>
        </motion.div>

        {/* 2x3 grid of feature cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={item}
              className="glass-card flex gap-4"
              whileHover={{ y: -6 }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[#f0f0f0] text-2xl">
                {reason.icon}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-[#212133]">{reason.title}</h3>
                <p className="text-[#595966] leading-relaxed">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
