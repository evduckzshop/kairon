"use client";

import {
  Wrench,
  Car,
  Shield,
  Calculator,
  Briefcase,
} from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import ScrollReveal from "@/components/ui/scroll-reveal";

const industries = [
  {
    icon: Wrench,
    title: "Trades & Home Services",
    description: "HVAC, plumbing, electrical, landscaping",
  },
  {
    icon: Car,
    title: "Auto Repair",
    description: "Scheduling, invoicing, follow-ups",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Renewals, communications, document processing",
  },
  {
    icon: Calculator,
    title: "Accounting",
    description: "Client onboarding, document processing",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Workflow optimization, client management",
  },
];

export default function Industries() {
  return (
    <SectionWrapper variant="dark">
      <ScrollReveal>
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white md:text-4xl">
          Industries We Serve
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {industries.map((ind, i) => (
          <ScrollReveal key={ind.title} delay={i * 0.08}>
            <div className="rounded-xl border border-kairon-gray/10 bg-kairon-navy/30 p-6 text-center transition-all hover:border-kairon-teal/30">
              <ind.icon className="mx-auto h-8 w-8 text-kairon-teal" />
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-sm font-semibold text-kairon-white">
                {ind.title}
              </h3>
              <p className="mt-1 text-xs text-kairon-gray">{ind.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
