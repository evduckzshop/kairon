"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Check } from "lucide-react";
import Badge from "./badge";
import Button from "./button";
import type { CaseStudy, Service, Testimonial, TeamMember } from "@/types";

// ---- Case Study Card ----

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const topResult = study.results?.[0];
  return (
    <motion.a
      href={`/work/${study.slug.current}`}
      className="group block rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-6 transition-all hover:border-kairon-red/30 hover:shadow-lg hover:shadow-kairon-red/5"
      whileHover={{ y: -4 }}
    >
      <Badge variant="industry">{study.industry}</Badge>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white group-hover:text-kairon-red transition-colors">
        {study.title}
      </h3>
      {topResult && (
        <p className="mt-2 text-sm text-kairon-success font-medium">
          {topResult.metric}: {topResult.after}
        </p>
      )}
      <span className="mt-4 inline-flex items-center gap-1 text-sm text-kairon-gray group-hover:text-kairon-red transition-colors">
        Read Case Study
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.a>
  );
}

// ---- Service Card ----

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className={`relative rounded-xl border p-8 ${
        service.popular
          ? "border-kairon-red bg-kairon-navy shadow-lg shadow-kairon-red/10"
          : "border-kairon-gray/10 bg-kairon-navy/50"
      }`}
    >
      {service.popular && (
        <Badge variant="metric" className="absolute -top-3 left-6">
          Most Popular
        </Badge>
      )}
      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
        {service.title}
      </h3>
      <div className="mt-3">
        <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
          {service.price}
        </span>
        {service.priceType !== "custom" && (
          <span className="ml-1 text-sm text-kairon-gray">
            {service.priceType === "monthly" ? "/mo" : " one-time"}
          </span>
        )}
      </div>
      <ul className="mt-6 space-y-3">
        {service.features?.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-kairon-gray">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-kairon-success" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href="/book"
        variant={service.popular ? "primary" : "secondary"}
        size="md"
        className="mt-8 w-full"
      >
        Get Started
      </Button>
    </div>
  );
}

// ---- Testimonial Card ----

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-6">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "fill-kairon-red text-kairon-red"
                : "text-kairon-gray/30"
            }`}
          />
        ))}
      </div>
      <blockquote className="mt-4 text-kairon-light leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-kairon-teal/30 flex items-center justify-center text-sm font-bold text-kairon-white">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-kairon-white">
            {testimonial.name}
          </p>
          <p className="text-xs text-kairon-gray">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- Team Card ----

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-6 text-center transition-all hover:border-kairon-teal/30">
      <div className="mx-auto h-24 w-24 rounded-full bg-kairon-teal/20 flex items-center justify-center text-2xl font-bold text-kairon-white">
        {member.name.charAt(0)}
      </div>
      <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-kairon-white">
        {member.name}
      </h3>
      <p className="text-sm text-kairon-red">{member.role}</p>
      {member.bio && (
        <p className="mt-2 text-sm text-kairon-gray line-clamp-3">
          {member.bio}
        </p>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-kairon-teal hover:text-kairon-red transition-colors"
        >
          LinkedIn &rarr;
        </a>
      )}
    </div>
  );
}
