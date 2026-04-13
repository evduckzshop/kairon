import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/section-wrapper";
import ScrollReveal from "@/components/ui/scroll-reveal";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Kairon",
  description:
    "Meet the team behind Kairon. We help small businesses reclaim time with AI-powered workflow automation.",
};

const values = [
  {
    title: "Simplicity Over Complexity",
    description:
      "We strip away jargon and deliver solutions that just work. No PhD required.",
  },
  {
    title: "Results Over Hype",
    description:
      "We measure success in hours saved and revenue gained — not buzzwords.",
  },
  {
    title: "Partnership Over Transactions",
    description:
      "We're invested in your long-term growth, not just the initial project.",
  },
  {
    title: "Transparency Always",
    description:
      "Clear pricing, honest timelines, and no hidden surprises. Ever.",
  },
];

const team = [
  {
    name: "Matthew Tran",
    role: "Founder & CEO",
    bio: "Building the bridge between AI and small business. Obsessed with automation that actually saves time.",
  },
];

const partners = [
  "Make",
  "Zapier",
  "OpenAI",
  "Slack",
  "HubSpot",
  "Google Workspace",
  "Twilio",
  "Airtable",
];

export default function AboutPage() {
  return (
    <>
      {/* Brand Story */}
      <SectionWrapper variant="dark" className="pt-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-kairon-white md:text-5xl">
              The Story Behind Kairon
            </h1>
            <div className="mt-8 space-y-4 text-kairon-gray leading-relaxed">
              <p>
                <span className="text-kairon-white font-semibold">改 Kai</span>{" "}
                — Change. Transformation. The catalyst that turns manual work
                into automated flow.
              </p>
              <p>
                <span className="text-kairon-white font-semibold">◌ Kairos</span>{" "}
                — The decisive moment. The perfect time to act, to automate, to
                evolve.
              </p>
              <p>
                <span className="text-kairon-red font-semibold">Kairon</span>{" "}
                was born from a simple observation: small businesses are drowning in
                repetitive tasks that steal time from what matters — serving
                customers, growing revenue, and building something meaningful.
              </p>
              <p>
                We exist to bridge the gap between powerful AI technology and
                businesses that lack the technical resources to implement it
                themselves. No jargon, no fluff — just workflows that work.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant="gradient">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
            Our Values
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-kairon-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-kairon-gray">{v.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper variant="dark">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
            Meet the Team
          </h2>
        </ScrollReveal>
        <div className="mx-auto mt-12 grid max-w-md gap-8">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="rounded-xl border border-kairon-gray/10 bg-kairon-navy/50 p-8 text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-kairon-teal/20 flex items-center justify-center text-2xl font-bold text-kairon-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-kairon-white">
                  {member.name}
                </h3>
                <p className="text-kairon-red">{member.role}</p>
                <p className="mt-3 text-sm text-kairon-gray">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Tech Partners */}
      <SectionWrapper variant="gradient">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
            Tools We Integrate With
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {partners.map((p) => (
              <Badge key={p} variant="industry">
                {p}
              </Badge>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="dark">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
              Let&rsquo;s Build Something Together
            </h2>
            <Button href="/book" size="lg" className="mt-8">
              Book a Free Strategy Call
            </Button>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </>
  );
}
