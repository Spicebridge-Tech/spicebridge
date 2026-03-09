"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const HERO_IMAGES = [
  "/assets/dan-nelson-ah-HeguOe9k-unsplash.jpg",
  "/assets/ed-hardie-1C5F88Af9ZU-unsplash.jpg",
  "/assets/jefferson-santos-9SoCnyQmkzI-unsplash.jpg",
  "/assets/philipp-katzenberger-iIJrUoeRoCQ-unsplash.jpg",
  "/assets/rubaitul-azad-ZIPFteu-R8k-unsplash.jpg",
  "/assets/shubham-dhage-Vtm64FggqeQ-unsplash.jpg",
  "/assets/steve-johnson-luT1PtFOWZU-unsplash.jpg",
  "/assets/zulfugar-karimov--nBClEqKKVM-unsplash.jpg",
  "/assets/zulfugar-karimov-PmVlOIClaVo-unsplash.jpg",
];

const HERO_WORDS = ["Security", "Managed", "Cloud", "Growth"];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentWord = HERO_WORDS[currentIndex % HERO_WORDS.length];

  return (
    <section className="relative min-h-[100dvh] h-screen overflow-hidden">
      {/* Carousel images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt="Hero background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Glass overlay */}
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            background: "linear-gradient(to right, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero content - left-aligned like Promethean */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 py-20 md:px-12 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-2 text-sm font-medium uppercase tracking-widest text-white/90 md:text-base"
        >
          We&apos;re Spicebridge
        </motion.p>
        <motion.h1
          key={currentWord}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-5xl font-bold uppercase tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          {currentWord}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8 max-w-xl text-lg text-white/90 md:text-xl"
        >
          We help great companies simplify and take control of their IT
        </motion.p>
        <motion.a
          href="#quote"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#80bb55] px-8 py-4 text-base font-semibold text-white shadow-lg transition-shadow md:text-lg"
        >
          Get a free consultation
        </motion.a>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-wrap justify-center gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="group"
            aria-label={`Go to slide ${i + 1}`}
          >
            <motion.div
              className="h-2 rounded-full"
              initial={false}
              animate={{
                width: i === currentIndex ? 24 : 8,
                backgroundColor: i === currentIndex ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
