"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin } from "lucide-react";
import SectionWrapper from "@/components/ui/section-wrapper";
import Button from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { submitContactForm } from "@/lib/actions/leads";

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setServerError("");
    const result = await submitContactForm(data);
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
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-kairon-gray">
            Have a question or ready to get started? We&rsquo;d love to hear from you.
          </p>
        </ScrollReveal>
      </SectionWrapper>

      <SectionWrapper variant="gradient">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <ScrollReveal>
            {submitted ? (
              <div className="rounded-xl border border-kairon-success/30 bg-kairon-success/10 p-8 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-success">
                  Message Sent!
                </h3>
                <p className="mt-2 text-kairon-gray">
                  We&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="absolute -left-[9999px] opacity-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-kairon-white"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white placeholder-kairon-gray/50 focus:border-kairon-red focus:outline-none"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-kairon-red">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-kairon-white"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white placeholder-kairon-gray/50 focus:border-kairon-red focus:outline-none"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-kairon-red">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-kairon-white"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    {...register("company")}
                    className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white placeholder-kairon-gray/50 focus:border-kairon-red focus:outline-none"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-kairon-white"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="mt-1 block w-full rounded-lg border border-kairon-gray/20 bg-kairon-navy/50 px-4 py-3 text-kairon-white placeholder-kairon-gray/50 focus:border-kairon-red focus:outline-none resize-none"
                    placeholder="Tell us about your workflows..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-kairon-red">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="text-sm text-kairon-red">{serverError}</p>
                )}

                <Button type="submit" loading={isSubmitting} className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-kairon-red" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-kairon-white">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@kairon.com"
                    className="text-kairon-gray hover:text-kairon-white transition-colors"
                  >
                    hello@kairon.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-kairon-red" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-kairon-white">
                    Phone
                  </h3>
                  <p className="text-kairon-gray">Available during strategy calls</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-kairon-red" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-kairon-white">
                    Service Area
                  </h3>
                  <p className="text-kairon-gray">
                    Serving small businesses nationwide (remote-first)
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-6">
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-kairon-white">
                  Prefer a call?
                </h3>
                <p className="mt-2 text-sm text-kairon-gray">
                  Book a free 30-minute strategy call and get custom
                  recommendations for your business.
                </p>
                <Button href="/book" variant="secondary" className="mt-4">
                  Book a Free Call
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
