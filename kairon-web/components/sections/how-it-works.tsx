"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import ProcessStep from "@/components/ui/process-step";
import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    title: "Discover",
    description:
      "We audit your workflows and find the biggest time-wasters.",
  },
  {
    title: "Design",
    description:
      "We build custom AI automations tailored to your business.",
  },
  {
    title: "Deploy",
    description:
      "We launch, monitor, and optimize — you just watch it run.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper variant="dark">
      <ScrollReveal>
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white md:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-kairon-gray">
          Three steps from manual chaos to automated flow.
        </p>
      </ScrollReveal>

      <div className="mx-auto mt-12 max-w-xl">
        {steps.map((step, i) => (
          <ProcessStep
            key={step.title}
            number={i + 1}
            title={step.title}
            description={step.description}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
