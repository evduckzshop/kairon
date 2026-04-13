"use client";

import SectionWrapper from "@/components/ui/section-wrapper";
import { TestimonialCard } from "@/components/ui/card";
import ScrollReveal from "@/components/ui/scroll-reveal";
import type { Testimonial } from "@/types";

const placeholderTestimonials: Testimonial[] = [
  {
    _id: "t1",
    name: "James Rivera",
    company: "CoolBreeze HVAC",
    role: "Owner",
    quote:
      "Kairon saved us 12 hours a week on scheduling alone. My team can focus on actual work instead of shuffling calendars.",
    rating: 5,
    industry: "Trades & Home Services",
    featured: true,
  },
  {
    _id: "t2",
    name: "Sarah Chen",
    company: "Premier Auto",
    role: "General Manager",
    quote:
      "We went from losing leads to responding in under 5 minutes. Our close rate jumped 35% in the first month.",
    rating: 5,
    industry: "Auto Repair",
    featured: true,
  },
  {
    _id: "t3",
    name: "Michael Torres",
    company: "SafeGuard Insurance",
    role: "Principal Agent",
    quote:
      "Document processing that took my team 3 hours now takes 15 minutes. The ROI was obvious from week one.",
    rating: 5,
    industry: "Insurance",
    featured: true,
  },
];

export default function Testimonials({
  testimonials,
}: {
  testimonials?: Testimonial[];
}) {
  const data = testimonials?.length ? testimonials : placeholderTestimonials;

  return (
    <SectionWrapper variant="gradient">
      <ScrollReveal>
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white md:text-4xl">
          What Our Clients Say
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {data.map((t, i) => (
          <ScrollReveal key={t._id} delay={i * 0.1}>
            <TestimonialCard testimonial={t} />
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
