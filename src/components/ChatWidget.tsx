"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const waUrl = `https://wa.me/2349130132959?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl md:w-96"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#80bb55]/20">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#212133]">Chat with us</h3>
                <p className="text-xs text-[#6C757D]">We typically reply within minutes</p>
              </div>
            </div>
            <form onSubmit={handleSend}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#212133] placeholder-[#6C757D] outline-none focus:border-[#128b55]"
                rows={3}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 w-full rounded-lg bg-[#80bb55] py-3 font-semibold text-white hover:bg-[#6ba347]"
              >
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#212133] text-white shadow-lg hover:bg-[#2d2e4a]"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us"
      >
        <motion.span
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
          transition={{ duration: 0.2 }}
        >
          💬
        </motion.span>
      </motion.button>
    </div>
  );
}
