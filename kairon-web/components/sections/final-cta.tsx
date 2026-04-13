"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import Button from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function FinalCTA() {
  return (
    <SectionWrapper variant="dark" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-kairon-red/10 blur-3xl" />
      </div>

      <div className="relative text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white md:text-5xl">
            Ready to Stop Doing Busywork?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-kairon-gray">
            Let&rsquo;s find the workflows costing you the most time — and automate them.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/book" size="lg">
              Book a Free Call
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              See Pricing
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
