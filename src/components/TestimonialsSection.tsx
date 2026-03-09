"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Being back with Spicebridge just gives me peace of mind knowing that my technology is functioning seamlessly behind the scenes without it interfering with and disrupting our day-to-day operations.",
    author: "Kingsley Oti",
    role: "Send.ng, Lagos",
  },
  {
    quote:
      "Finally, an IT partner that speaks our language. No complicated jargon, just solutions that work.",
    author: "Michael Adebayo",
    role: "Operations Manager, FinServe Nigeria",
  },
  {
    quote:
      "ManageEngine Desktop Central has increased our efficiency and enabled us manage our patch deployment better. Our workstations are now more secured and better managed with transparency. When we combined this with the functionality of OpManger also by ManageEngine, we become more efficient at our daily task for the company. Thank you to Spicebridge for recommending and deploying ManageEngine for us.",
    author: "Olayemi Enibiyi",
    role: "Honda, Nigeria",
  },
];

const Stars = () => (
  <div className="flex gap-1 text-[#fbbf24]">
    {[...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.05 }}
      >
        ★
      </motion.span>
    ))}
  </div>
);

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-[#6C757D]">
            Hear from businesses that have transformed their IT with our solutions.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm"
            >
              <div className="mb-6 flex justify-center">
                <Stars />
              </div>
              <blockquote className="mb-8 text-lg text-[#595966] md:text-xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-[#212133]">{testimonials[current].author}</div>
                <div className="text-sm text-[#6C757D]">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="group"
                aria-label={`View testimonial ${i + 1}`}
              >
                <motion.div
                  className="h-2 rounded-full"
                  animate={{
                    width: i === current ? 32 : 8,
                    backgroundColor: i === current ? "#80bb55" : "rgba(0,0,0,0.15)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
