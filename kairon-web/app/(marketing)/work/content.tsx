"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/section-wrapper";
import { CaseStudyCard } from "@/components/ui/card";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Button from "@/components/ui/button";
import type { CaseStudy } from "@/types";

const filters = ["All", "Trades & Home Services", "Auto Repair", "Insurance", "Accounting"];

const placeholderStudies: CaseStudy[] = [
  {
    _id: "p1",
    title: "Automated Scheduling for HVAC Company",
    slug: { current: "hvac-scheduling" },
    client: "CoolBreeze HVAC",
    industry: "Trades & Home Services",
    challenge: [],
    approach: [],
    results: [{ metric: "Hours saved per week", before: "0", after: "12 hrs/week saved" }],
    techStack: ["Make", "Google Calendar", "Twilio"],
    featured: true,
    publishedAt: "2026-03-01",
  },
  {
    _id: "p2",
    title: "Lead Follow-Up Pipeline for Auto Shop",
    slug: { current: "auto-lead-pipeline" },
    client: "Premier Auto",
    industry: "Auto Repair",
    challenge: [],
    approach: [],
    results: [{ metric: "Response time", before: "4 hours", after: "Under 5 min response" }],
    techStack: ["Zapier", "HubSpot", "OpenAI"],
    featured: true,
    publishedAt: "2026-02-15",
  },
  {
    _id: "p3",
    title: "Document Processing for Insurance Agency",
    slug: { current: "insurance-doc-processing" },
    client: "SafeGuard Insurance",
    industry: "Insurance",
    challenge: [],
    approach: [],
    results: [{ metric: "Processing time", before: "3 hours", after: "15 min processing" }],
    techStack: ["OpenAI", "Make", "Google Drive"],
    featured: true,
    publishedAt: "2026-01-20",
  },
  {
    _id: "p4",
    title: "Client Onboarding Automation for CPA Firm",
    slug: { current: "cpa-onboarding" },
    client: "Summit Accounting",
    industry: "Accounting",
    challenge: [],
    approach: [],
    results: [{ metric: "Onboarding time", before: "2 days", after: "2 hours" }],
    techStack: ["Zapier", "DocuSign", "QuickBooks"],
    featured: false,
    publishedAt: "2026-01-10",
  },
  {
    _id: "p5",
    title: "Automated Dispatch for Plumbing Company",
    slug: { current: "plumbing-dispatch" },
    client: "FlowMaster Plumbing",
    industry: "Trades & Home Services",
    challenge: [],
    approach: [],
    results: [{ metric: "Dispatch time", before: "45 min", after: "Instant dispatch" }],
    techStack: ["Make", "Twilio", "Google Maps"],
    featured: false,
    publishedAt: "2025-12-15",
  },
];

export default function WorkPageContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? placeholderStudies
      : placeholderStudies.filter((s) => s.industry === activeFilter);

  return (
    <>
      <SectionWrapper variant="dark" className="pt-32">
        <ScrollReveal>
          <h1 className="text-center font-[family-name:var(--font-display)] text-4xl font-bold text-kairon-white md:text-5xl">
            Real Results for Real Businesses
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-kairon-gray">
            See how small businesses are saving time and growing with Kairon.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                activeFilter === f
                  ? "bg-kairon-red text-white"
                  : "border border-kairon-gray/20 text-kairon-gray hover:text-kairon-white hover:border-kairon-gray/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient">
        {filtered.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((study, i) => (
              <ScrollReveal key={study._id} delay={i * 0.08}>
                <CaseStudyCard study={study} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-kairon-gray">
              No case studies in this category yet. Check back soon!
            </p>
          </div>
        )}

        <div className="mt-16 text-center">
          <Button href="/book" size="lg">
            Want Similar Results? Book a Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
