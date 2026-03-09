"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#212133",
          color: "#fff",
        },
        success: {
          iconTheme: {
            primary: "#80bb55",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#e74c3c",
            secondary: "#fff",
          },
        },
      }}
    />
  );
}
