"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { useAppStore } from "@/store/appStore";

// Guard against double toast (e.g. React Strict Mode runs effects twice in dev)
let hasShownWelcomeThisSession = false;

export default function WelcomeToast() {
  const pathname = usePathname();
  const hasSeenWelcomeToast = useAppStore((s) => s.hasSeenWelcomeToast);
  const setHasSeenWelcomeToast = useAppStore((s) => s.setHasSeenWelcomeToast);

  useEffect(() => {
    if (pathname !== "/" || hasSeenWelcomeToast || hasShownWelcomeThisSession) return;
    hasShownWelcomeThisSession = true;
    toast("Welcome to Spicebridge! 👋 We're here to help with your IT needs.", {
      duration: 5000,
      icon: "🌿",
      style: {
        background: "#212133",
        color: "#fff",
      },
    });
    setHasSeenWelcomeToast(true);
  }, [pathname, hasSeenWelcomeToast, setHasSeenWelcomeToast]);

  return null;
}
