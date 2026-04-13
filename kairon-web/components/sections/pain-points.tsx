"use client";

import { FileSpreadsheet, Mail, AlertCircle, Receipt } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import ScrollReveal from "@/components/ui/scroll-reveal";

const painPoints = [
  {
    icon: FileSpreadsheet,
    text: "Still copying data between spreadsheets?",
  },
  {
    icon: Mail,
    text: "Sending the same follow-up emails manually?",
  },
  {
    icon: AlertCircle,
    text: "Missing leads because nobody responded fast enough?",
  },
  {
    icon: Receipt,
    text: "Spending hours on invoicing instead of growing?",
  },
];

export default function PainPoints() {
  return (
    <SectionWrapper variant="gradient">
      <ScrollReveal>
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white md:text-4xl">
          Sound familiar?
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {painPoints.map((point, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-6 text-center transition-all hover:border-kairon-red/30">
              <point.icon className="mx-auto h-10 w-10 text-kairon-red" />
              <p className="mt-4 font-[family-name:var(--font-display)] text-lg font-medium text-kairon-white">
                {point.text}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <p className="mt-12 text-center text-xl text-kairon-gray italic">
          You didn&rsquo;t start a business to do busywork.
        </p>
      </ScrollReveal>
    </SectionWrapper>
  );
}
