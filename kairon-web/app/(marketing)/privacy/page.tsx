import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/section-wrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kairon privacy policy. How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <SectionWrapper variant="dark" className="pt-32">
      <div className="mx-auto max-w-3xl prose prose-invert">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-kairon-white">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-kairon-gray">Last updated: April 2026</p>

        <div className="mt-8 space-y-6 text-kairon-gray leading-relaxed">
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly: name, email address,
              company name, and any messages you send through our contact or
              booking forms. We also collect anonymous usage data (page views,
              referral source) through privacy-friendly analytics that do not use
              cookies or track individuals.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              How We Use Your Information
            </h2>
            <p>
              We use your contact information solely to respond to inquiries,
              schedule consultations, and deliver services you&rsquo;ve requested.
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Data Storage & Security
            </h2>
            <p>
              Your data is stored securely using industry-standard encryption.
              We use Supabase (PostgreSQL) for data storage with row-level
              security policies, and all data transmission uses TLS encryption.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Third-Party Services
            </h2>
            <p>
              We use the following services to operate our website: Vercel
              (hosting), Supabase (database), Resend (email), Cal.com
              (scheduling), and Plausible/PostHog (privacy-friendly analytics).
              Each service has its own privacy policy governing their data handling.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us at hello@kairon.com.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
              Contact
            </h2>
            <p>
              For privacy-related questions, contact us at{" "}
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
