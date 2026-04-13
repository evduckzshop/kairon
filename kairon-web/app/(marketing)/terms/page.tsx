import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/section-wrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Kairon terms of service for website visitors and clients.",
};

export default function TermsPage() {
  return (
    <SectionWrapper variant="dark" className="pt-32">
      <div className="mx-auto max-w-3xl prose prose-invert">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-kairon-white">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-kairon-gray">Last updated: April 2026</p>

        <div className="mt-8 space-y-6 text-kairon-gray leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Agreement to Terms
            </h2>
            <p>
              By accessing our website at kairon.com, you agree to be bound by
              these terms of service. If you disagree with any part of these
              terms, you may not access the website.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Services
            </h2>
            <p>
              Kairon provides AI workflow automation consulting and
              implementation services for small businesses. Specific service
              terms, deliverables, and timelines are outlined in individual
              service agreements.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Intellectual Property
            </h2>
            <p>
              Automations and workflows built for clients become the
              client&rsquo;s property upon full payment. Kairon retains the
              right to use anonymized case study data for marketing purposes
              with client consent.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Limitation of Liability
            </h2>
            <p>
              Kairon shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of our
              services. Our total liability shall not exceed the amount paid for
              services in the preceding 12 months.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Cancellation
            </h2>
            <p>
              Monthly plans may be cancelled with 30 days written notice. All
              automations built prior to cancellation remain the client&rsquo;s
              property and will continue to function independently.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:hello@kairon.com" className="text-kairon-red hover:underline">
                hello@kairon.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
