"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { CaseStudyCard } from "@/components/ui/card";
import Button from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import type { CaseStudy } from "@/types";

// Placeholder data for when Sanity is not connected
const placeholderStudies: CaseStudy[] = [
  {
    _id: "p1",
    title: "Automated Scheduling for HVAC Company",
    slug: { current: "hvac-scheduling" },
    client: "CoolBreeze HVAC",
    industry: "Trades & Home Services",
    challenge: [],
    approach: [],
    results: [{ metric: "Hours saved per week", before: "0", after: "12" }],
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
    results: [{ metric: "Response time", before: "4 hours", after: "5 minutes" }],
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
    results: [{ metric: "Processing time reduction", before: "3 hours", after: "15 min" }],
    techStack: ["OpenAI", "Make", "Google Drive"],
    featured: true,
    publishedAt: "2026-01-20",
  },
];

export default function CaseStudiesHighlight({
  studies,
}: {
  studies?: CaseStudy[];
}) {
  const data = studies?.length ? studies : placeholderStudies;

  return (
    <SectionWrapper variant="dark">
      <ScrollReveal>
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white md:text-4xl">
          Real Results for Real Businesses
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {data.map((study, i) => (
          <ScrollReveal key={study._id} delay={i * 0.1}>
            <CaseStudyCard study={study} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 text-center">
          <Button href="/work" variant="secondary">
            View All Case Studies
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
