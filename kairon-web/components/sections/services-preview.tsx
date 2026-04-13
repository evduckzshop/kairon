"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { ServiceCard } from "@/components/ui/card";
import Button from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import type { Service } from "@/types";

// Fallback data when Sanity is not connected
const fallbackServices: Service[] = [
  {
    _id: "1",
    title: "Starter",
    slug: { current: "starter" },
    tier: "starter",
    price: "$1,500",
    priceType: "one-time",
    features: [
      "Workflow audit",
      "1 automation built",
      "30-day support",
      "Training documentation",
    ],
    popular: false,
    order: 1,
  },
  {
    _id: "2",
    title: "Growth",
    slug: { current: "growth" },
    tier: "growth",
    price: "$3,500",
    priceType: "monthly",
    features: [
      "Up to 5 automations",
      "Monthly optimization",
      "Priority support",
      "Custom integrations",
    ],
    popular: true,
    order: 2,
  },
  {
    _id: "3",
    title: "Enterprise",
    slug: { current: "enterprise" },
    tier: "enterprise",
    price: "Custom",
    priceType: "custom",
    features: [
      "Unlimited automations",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom AI agents",
    ],
    popular: false,
    order: 3,
  },
];

export default function ServicesPreview({
  services,
}: {
  services?: Service[];
}) {
  const data = services?.length ? services : fallbackServices;

  return (
    <SectionWrapper variant="gradient">
      <ScrollReveal>
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white md:text-4xl">
          Automation Packages
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-kairon-gray">
          No jargon, no fluff — just workflows that work.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {data.map((service, i) => (
          <ScrollReveal key={service._id} delay={i * 0.1}>
            <ServiceCard service={service} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary">
            View Full Pricing
          </Button>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
