"use client";

import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import Accordion from "@/components/ui/accordion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const tiers = [
  {
    id: "starter",
    name: "Starter",
    price: "$1,500",
    priceLabel: "one-time",
    popular: false,
    description: "Perfect for solo operators testing automation",
    features: [
      "Full workflow audit",
      "1 custom automation built",
      "30-day post-launch support",
      "Training documentation",
      "Email & chat support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "$3,500",
    priceLabel: "/mo",
    popular: true,
    description: "For growing teams with multiple workflows",
    features: [
      "Up to 5 automations",
      "Monthly optimization reviews",
      "Priority support (4hr response)",
      "Custom integrations",
      "Performance dashboard",
      "Dedicated Slack channel",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceLabel: "",
    popular: false,
    description: "Businesses going all-in on automation",
    features: [
      "Unlimited automations",
      "Dedicated account manager",
      "SLA guarantee (99.9% uptime)",
      "Custom AI agents",
      "On-call engineering support",
      "Quarterly strategy reviews",
    ],
  },
];

const addOns = [
  { name: "AI Chatbot Setup", price: "$800" },
  { name: "Email Sequence Automation", price: "$600" },
  { name: "CRM Integration", price: "$1,200" },
  { name: "Custom Dashboard", price: "$1,500" },
];

const faqItems = [
  {
    id: "1",
    title: "How long does setup take?",
    content:
      "Starter projects typically launch within 1-2 weeks. Growth engagements begin delivering automations in the first week, with full rollout within 30 days.",
  },
  {
    id: "2",
    title: "What tools do you work with?",
    content:
      "We work with Make, Zapier, OpenAI, Google Workspace, HubSpot, Slack, Twilio, Airtable, and dozens more. If you use it, we can likely automate it.",
  },
  {
    id: "3",
    title: "Do I need technical knowledge?",
    content:
      "Not at all. We handle all the technical setup. You'll receive training docs and a walkthrough so you understand how your automations work.",
  },
  {
    id: "4",
    title: "What if I want to cancel?",
    content:
      "Growth and Enterprise plans can be cancelled anytime with 30 days notice. All automations you've paid for continue to run — we don't hold your workflows hostage.",
  },
  {
    id: "5",
    title: "What happens after the Starter project?",
    content:
      "Many Starter clients upgrade to Growth once they see the ROI. There's no pressure — the automation we build is yours to keep regardless.",
  },
];

export default function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper variant="dark" className="pt-32">
        <ScrollReveal>
          <h1 className="text-center font-[family-name:var(--font-display)] text-4xl font-bold text-kairon-white md:text-5xl">
            Automation Packages Built for Small Business
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-kairon-gray">
            No jargon, no fluff — just workflows that work. Pick a plan or
            let&rsquo;s talk about what fits your business.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      {/* Pricing Tiers */}
      <SectionWrapper variant="gradient">
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 0.1}>
              <div
                id={tier.id}
                className={`relative rounded-xl border p-8 h-full flex flex-col ${
                  tier.popular
                    ? "border-kairon-red bg-kairon-navy shadow-lg shadow-kairon-red/10"
                    : "border-kairon-gray/10 bg-kairon-navy/50"
                }`}
              >
                {tier.popular && (
                  <Badge variant="metric" className="absolute -top-3 left-6">
                    Most Popular
                  </Badge>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-kairon-gray">{tier.description}</p>
                <div className="mt-4">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-kairon-white">
                    {tier.price}
                  </span>
                  {tier.priceLabel && (
                    <span className="ml-1 text-kairon-gray">{tier.priceLabel}</span>
                  )}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-kairon-gray">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-kairon-success" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/book"
                  variant={tier.popular ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {tier.id === "enterprise" ? "Contact Us" : "Get Started"}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Add-Ons */}
      <SectionWrapper variant="dark">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
            Add-Ons
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-kairon-gray">
            Enhance any package with these optional services.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((addon, i) => (
            <ScrollReveal key={addon.name} delay={i * 0.08}>
              <div className="rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-6 text-center">
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-kairon-white">
                  {addon.name}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-kairon-red">
                  {addon.price}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="gradient">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="dark">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
              Not sure which plan?
            </h2>
            <p className="mt-2 text-kairon-gray">
              Let&rsquo;s talk about what fits your business.
            </p>
            <Button href="/book" size="lg" className="mt-8">
              Book a Free Strategy Call
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
