"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, CheckCircle, MessageSquare, Target } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Button from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { bookingFormSchema, type BookingFormData } from "@/lib/validations";
import { submitBookingForm } from "@/lib/actions/leads";

const industries = [
  "Trades & Home Services",
  "Auto Repair",
  "Insurance",
  "Accounting",
  "Professional Services",
  "Other",
];

const painPoints = [
  "Manual data entry",
  "Slow follow-ups",
  "Scheduling chaos",
  "Invoicing headaches",
  "Document processing",
  "Other",
];

const tools = [
  "Google Workspace",
  "Microsoft 365",
  "QuickBooks",
  "HubSpot",
  "Slack",
  "Zapier",
  "Spreadsheets",
  "Other",
];

const referralSources = [
  "Google Search",
  "Social Media",
  "Referral",
  "Blog/Article",
  "Other",
];

export default function BookPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema) as any,
    defaultValues: { currentTools: [] },
  });

  async function onSubmit(data: BookingFormData) {
    setServerError("");
    const result = await submitBookingForm(data);
    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error || "Something went wrong.");
    }
  }

  return (
    <>
      <SectionWrapper variant="dark" className="pt-32">
        <ScrollReveal>
          <h1 className="text-center font-[family-name:var(--font-display)] text-4xl font-bold text-kairon-white md:text-5xl">
            Let&rsquo;s Talk About Your Workflows
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-kairon-gray">
            Fill out the intake form below, then pick a time for your free
            strategy call.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper variant="gradient">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form (3 cols) */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {submitted ? (
                <div className="rounded-xl border border-kairon-success/30 bg-kairon-success/10 p-8 text-center">
                  <CheckCircle className="mx-auto h-12 w-12 text-kairon-success" />
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-success">
                    Intake Received!
                  </h3>
                  <p className="mt-2 text-kairon-gray">
                    Book your strategy call using the calendar below, or we&rsquo;ll
                    reach out within 24 hours.
                  </p>
                  {/* Cal.com embed fallback */}
                  <a
                    href="https://cal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-kairon-red hover:underline"
                  >
                    Open booking calendar &rarr;
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <input
                    type="text"
                    {...register("honeypot")}
                    className="absolute -left-[9999px] opacity-0"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-kairon-white">
                        Name *
                      </label>
                      <input
                        id="name"
                        {...register("name")}
                        className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white placeholder-kairon-gray/50 focus:border-kairon-red focus:outline-none"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-kairon-red">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-kairon-white">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white placeholder-kairon-gray/50 focus:border-kairon-red focus:outline-none"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-kairon-red">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-kairon-white">
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      {...register("businessName")}
                      className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white placeholder-kairon-gray/50 focus:border-kairon-red focus:outline-none"
                      placeholder="Your business name"
                    />
                    {errors.businessName && <p className="mt-1 text-sm text-kairon-red">{errors.businessName.message}</p>}
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-kairon-white">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        {...register("industry")}
                        className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white focus:border-kairon-red focus:outline-none"
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                      {errors.industry && <p className="mt-1 text-sm text-kairon-red">{errors.industry.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="painPoint" className="block text-sm font-medium text-kairon-white">
                        Biggest Challenge *
                      </label>
                      <select
                        id="painPoint"
                        {...register("painPoint")}
                        className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white focus:border-kairon-red focus:outline-none"
                      >
                        <option value="">Select challenge</option>
                        {painPoints.map((pp) => (
                          <option key={pp} value={pp}>{pp}</option>
                        ))}
                      </select>
                      {errors.painPoint && <p className="mt-1 text-sm text-kairon-red">{errors.painPoint.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-kairon-white mb-2">
                      Current Tools
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {tools.map((tool) => (
                        <label key={tool} className="flex items-center gap-2 text-sm text-kairon-gray cursor-pointer">
                          <input
                            type="checkbox"
                            value={tool}
                            {...register("currentTools")}
                            className="rounded border-kairon-gray/30 bg-kairon-navy/50 text-kairon-red focus:ring-kairon-red"
                          />
                          {tool}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="referralSource" className="block text-sm font-medium text-kairon-white">
                      How did you hear about us?
                    </label>
                    <select
                      id="referralSource"
                      {...register("referralSource")}
                      className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white focus:border-kairon-red focus:outline-none"
                    >
                      <option value="">Select (optional)</option>
                      {referralSources.map((src) => (
                        <option key={src} value={src}>{src}</option>
                      ))}
                    </select>
                  </div>

                  {serverError && <p className="text-sm text-kairon-red">{serverError}</p>}

                  <Button type="submit" loading={isSubmitting} className="w-full">
                    Submit Intake Form
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Sidebar (2 cols) */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.2}>
              <div className="rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-8 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
                  What to Expect
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-kairon-red" />
                    <div>
                      <p className="font-medium text-kairon-white">30 Minutes</p>
                      <p className="text-sm text-kairon-gray">Quick, focused, no fluff</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Target className="mt-0.5 h-5 w-5 shrink-0 text-kairon-red" />
                    <div>
                      <p className="font-medium text-kairon-white">Custom Recommendations</p>
                      <p className="text-sm text-kairon-gray">
                        We&rsquo;ll identify your top automation opportunities
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-kairon-red" />
                    <div>
                      <p className="font-medium text-kairon-white">No Obligation</p>
                      <p className="text-sm text-kairon-gray">
                        Walk away with actionable insights, even if we don&rsquo;t
                        work together
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
