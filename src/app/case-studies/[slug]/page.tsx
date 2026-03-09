"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

// Icons: target (challenge), lightbulb (solution), chart (results)
const ChallengeIcon = () => (
  <svg className="h-6 w-6 shrink-0 text-[#212133]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);
const SolutionIcon = () => (
  <svg className="h-6 w-6 shrink-0 text-[#212133]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
  </svg>
);
const ResultsIcon = () => (
  <svg className="h-6 w-6 shrink-0 text-[#212133]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
  </svg>
);

const caseStudy = {
  slug: "servicedesk-plus-itil",
  company: "Delta Distributors Ltd",
  title: "Servicedesk Plus and SupportCenter Plus Used to Solve an ITIL Compliant Service Management",
  challengeIntro:
    "Delta Distributors Ltd, a large consumer durable distribution conglomerate with over 3,000 trade partners across the country, needed an ITIL incident management system to handle:",
  challenge: [
    "Manage and track all incidents easily with a defined process across a large LAN/WAN infrastructure with many employees",
    "Automatically assign tickets based on technician expertise",
    "Ensure timely resolutions by defining response and resolution SLAs with escalation paths",
    "Get regular end-user feedback and measure satisfaction levels",
    "Account, Contact and Contract management",
    "Multi-Channel support.",
  ],
  solutionIntro:
    "Standard edition of Servicedesk Plus and Professional edition of SupportCenter Plus was the best solution for the challenges because of the benefits below; Benefits of the Solution",
  benefits: [
    "Self-service Portal, highly customizable.",
    "Knowledge Base.",
    "Web-based solution.",
    "Real-time Reports, Dashboards and KPI.",
    "ITIL Compliant.",
    "Request Tracking, Archiving, and Automation.",
  ],
  resultsImpact:
    "The implemented solution has delivered improved customer experience, enhanced satisfaction, and greater operational efficiency for IT teams over 10 years of continuous use.",
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  if (slug !== caseStudy.slug) notFound();

  const cardClass =
    "rounded-2xl border border-gray-200 bg-[#f5f5f5] p-8 md:p-10";

  return (
    <div className="min-h-screen bg-white pt-36">
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-6 lg:px-8">
        <Link
          href="/case-studies"
          className="mb-6 inline-block text-[#6C757D] hover:text-[#212133]"
        >
          ← Back to Case Studies
        </Link>

        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-[#6C757D]">
            {caseStudy.company}
          </p>
          <h1 className="text-3xl font-bold text-[#212133] md:text-4xl">
            {caseStudy.title}
          </h1>
        </div>

        {/* The Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-8 ${cardClass}`}
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[#212133]">
            <ChallengeIcon />
            The Challenge
          </h2>
          <p className="mb-6 text-[#374151] leading-relaxed">
            {caseStudy.challengeIntro}
          </p>
          <ul className="space-y-3">
            {caseStudy.challenge.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#374151]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#212133]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Our Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-8 ${cardClass}`}
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[#212133]">
            <SolutionIcon />
            Our Solution
          </h2>
          <p className="mb-6 text-[#374151] leading-relaxed">
            {caseStudy.solutionIntro}
          </p>
          <ol className="list-decimal space-y-3 pl-5 text-[#374151]">
            {caseStudy.benefits.map((item, i) => (
              <li key={i} className="pl-2">
                {item}
              </li>
            ))}
          </ol>
        </motion.section>

        {/* Results & Impact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mb-12 ${cardClass}`}
        >
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-[#212133]">
            <ResultsIcon />
            Results & Impact
          </h2>
          <p className="text-[#374151] leading-relaxed">
            {caseStudy.resultsImpact}
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-[#80bb55] px-6 py-3 font-semibold text-white hover:bg-[#6ba347]"
          >
            Get a similar solution for your business
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
