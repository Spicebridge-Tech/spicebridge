import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ChatData {
  name: string;
  email: string;
  question: string;
  serviceArea: string;
  additionalDetails: string[];
  isComplete: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  companyName: string;
  service: string;
  orgSize: string;
  industry: string;
}

export interface SubscriptionData {
  email: string;
}

interface AppState {
  // First-time visitor flag for welcome toast
  hasSeenWelcomeToast: boolean;
  setHasSeenWelcomeToast: (value: boolean) => void;

  // Chat data
  chatData: ChatData | null;
  setChatData: (data: ChatData | null) => void;

  // Form submissions (stored for future EmailJS integration)
  contactSubmissions: ContactFormData[];
  quoteSubmissions: QuoteFormData[];
  subscriptionEmails: SubscriptionData[];

  addContactSubmission: (data: ContactFormData) => void;
  addQuoteSubmission: (data: QuoteFormData) => void;
  addSubscription: (data: SubscriptionData) => void;
}

const initialChatData: ChatData = {
  name: "",
  email: "",
  question: "",
  serviceArea: "",
  additionalDetails: [],
  isComplete: false,
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      hasSeenWelcomeToast: false,
      setHasSeenWelcomeToast: (value) => set({ hasSeenWelcomeToast: value }),

      chatData: null,
      setChatData: (data) => set({ chatData: data }),

      contactSubmissions: [],
      quoteSubmissions: [],
      subscriptionEmails: [],

      addContactSubmission: (data) =>
        set((state) => ({
          contactSubmissions: [...state.contactSubmissions, data],
        })),

      addQuoteSubmission: (data) =>
        set((state) => ({
          quoteSubmissions: [...state.quoteSubmissions, data],
        })),

      addSubscription: (data) =>
        set((state) => ({
          subscriptionEmails: [...state.subscriptionEmails, data],
        })),
    }),
    { name: "spicebridge-store" }
  )
);
