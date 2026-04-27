"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { useAppStore } from "@/store/appStore";
import { services } from "@/data/services";

type ChatStep =
  | "question"
  | "service"
  | "more"
  | "is_that_all"
  | "submit";

interface ChatMessage {
  role: "bot" | "user";
  content: string;
  isThinking?: boolean;
}

const THINKING_DELAY = 1200;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<ChatStep>("question");
  const [inputValue, setInputValue] = useState("");
  const [chatData, setChatData] = useState({
    name: "",
    email: "",
    question: "",
    serviceArea: "",
    additionalDetails: [] as string[],
  });
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [hasCompletedForm, setHasCompletedForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const addContactSubmission = useAppStore((s) => s.addContactSubmission);
  const setStoredChatData = useAppStore((s) => s.setChatData);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset when opening
  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          role: "bot",
          content:
            "Hello! 👋 Welcome to Spicebridge Consulting. Chat with us — we typically reply within minutes.\n\nTo get started, please enter your name and email below.",
        },
      ]);
      setStep("question");
      setInputValue("");
      setChatData({ name: "", email: "", question: "", serviceArea: "", additionalDetails: [] });
      setShowSubmitButton(false);
      setHasCompletedForm(false);
      setFormName("");
      setFormEmail("");
    }
  }, [isOpen]);

  const addBotMessage = (content: string, afterDelay = 0) => {
    if (afterDelay > 0) {
      setTimeout(() => {
        setMessages((m) => [...m, { role: "bot", content }]);
      }, afterDelay);
    } else {
      setMessages((m) => [...m, { role: "bot", content }]);
    }
  };

  const showThinking = (then: () => void) => {
    setMessages((m) => [...m, { role: "bot", content: "Thinking...", isThinking: true }]);
    setTimeout(() => {
      setMessages((m) => m.filter((msg) => !msg.isThinking));
      then();
    }, THINKING_DELAY);
  };

  const handleSend = () => {
    const text = inputValue.trim().toLowerCase();
    if (!text) return;

    setMessages((m) => [...m, { role: "user", content: inputValue.trim() }]);
    setInputValue("");

    switch (step) {
      case "question":
        setChatData((d) => ({ ...d, question: inputValue.trim() }));
        showThinking(() => {
          addBotMessage(
            "Which of our services interests you most? Type the number or name:\n\n" +
              services.map((s, i) => `${i + 1}. ${s.title}`).join("\n")
          );
          setStep("service");
        });
        break;

      case "service": {
        const idx = parseInt(text, 10);
        const byNum = !isNaN(idx) && idx >= 1 && idx <= services.length;
        const byName = services.find((s) => s.title.toLowerCase().includes(text));
        const service = byNum ? services[idx - 1] : byName;

        if (service) {
          setChatData((d) => ({ ...d, serviceArea: service.title }));
          showThinking(() => {
            addBotMessage(
              `Great choice! ${service.title} can help with ${service.tagline}\n\nTell me more about your specific needs or timeline.`
            );
            setStep("more");
          });
        } else {
          showThinking(() => {
            addBotMessage("Please pick a service from the list (e.g. 1 or Managed IT Services).");
          });
        }
        break;
      }

      case "more":
        setChatData((d) => ({
          ...d,
          additionalDetails: [...d.additionalDetails, inputValue.trim()],
        }));
        showThinking(() => {
          addBotMessage("Thanks for sharing! Is there anything else you'd like to add?");
          setStep("is_that_all");
        });
        break;

      case "is_that_all":
        if (text === "yes" || text === "y") {
          showThinking(() => {
            addBotMessage("Perfect! I have everything I need. Click the button below to submit your request.");
            setShowSubmitButton(true);
            setStep("submit");
          });
        } else {
          setChatData((d) => ({
            ...d,
            additionalDetails: [...d.additionalDetails, inputValue.trim()],
          }));
          showThinking(() => {
            addBotMessage("Got it. Anything else? Reply with 'yes' when you're done.");
          });
        }
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim()) return;
    setChatData((d) => ({ ...d, name: formName.trim(), email: formEmail.trim() }));
    setHasCompletedForm(true);
    addBotMessage(`Nice to meet you, ${formName.trim()}! What would you like to know or what challenge can we help you with?`);
  };

  const handleSubmitChat = () => {
    const final = {
      ...chatData,
      isComplete: true,
    };
    setStoredChatData(final);
    addContactSubmission({
      name: chatData.name,
      email: chatData.email,
      company: "",
      message: `[Chat] Question: ${chatData.question}\nService: ${chatData.serviceArea}\nAdditional: ${chatData.additionalDetails.join("; ")}`,
    });
    toast.success("Message received! We'll get back to you soon.");
    setIsOpen(false);
    setStoredChatData(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-96 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-gray-200 bg-[#80bb55]/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#80bb55]/20">
                  <span className="text-lg">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#212133]">Chat with us</h3>
                  <p className="text-xs text-[#6C757D]">We typically reply within minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded p-1 text-[#6C757D] hover:bg-gray-100 hover:text-[#212133]"
                aria-label="Close chat"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex h-96 flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-[#80bb55] text-white"
                          : msg.isThinking
                          ? "bg-gray-100 text-[#6C757D] italic"
                          : "bg-gray-100 text-[#212133]"
                      }`}
                    >
                      {msg.isThinking ? (
                        <span className="flex items-center gap-2">
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            ●
                          </motion.span>
                          {msg.content}
                        </span>
                      ) : (
                        <pre className="whitespace-pre-wrap font-sans text-sm">{msg.content}</pre>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="shrink-0 px-4 py-3">
                {!hasCompletedForm ? (
                  <div className="mx-auto max-w-[300px] rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#128b55]"
                      />
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#128b55]"
                      />
                      <motion.button
                        type="submit"
                        disabled={!formName.trim() || !formEmail.trim()}
                        className="w-full rounded-lg bg-[#80bb55] py-2.5 text-sm font-semibold text-white hover:bg-[#6ba347] disabled:opacity-50"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        Continue to Chat
                      </motion.button>
                    </form>
                  </div>
                ) : showSubmitButton ? (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleSubmitChat}
                    className="w-full rounded-lg bg-[#80bb55] py-3 font-semibold text-white hover:bg-[#6ba347]"
                  >
                    Submit Request
                  </motion.button>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#128b55]"
                    />
                    <motion.button
                      type="submit"
                      disabled={!inputValue.trim()}
                      className="rounded-xl bg-[#80bb55] px-4 py-3 font-semibold text-white hover:bg-[#6ba347] disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-[#212133] px-5 py-3 text-white shadow-lg hover:bg-[#2d2e4a]"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with us"
      >
        <span className="text-xl">💬</span>
        <span className="font-semibold">Chat with us</span>
      </motion.button>
    </div>
  );
}
