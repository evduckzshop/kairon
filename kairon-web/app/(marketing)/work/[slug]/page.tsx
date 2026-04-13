import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/section-wrapper";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

// Placeholder — will be replaced with Sanity data
const placeholderStudy = {
  title: "Automated Scheduling for HVAC Company",
  client: "CoolBreeze HVAC",
  industry: "Trades & Home Services",
  heroMetric: "12 hrs/week saved",
  challenge:
    "CoolBreeze HVAC was losing 12+ hours per week on manual scheduling. Technicians were double-booked, customers received late confirmations, and the office manager spent her mornings juggling spreadsheets instead of growing the business.",
  approach:
    "We built an automated dispatch system using Make, Google Calendar, and Twilio. When a new job request comes in, the system checks technician availability, assigns the closest available tech, sends the customer a confirmation SMS, and updates the master schedule — all in under 30 seconds.",
  results: [
    { metric: "Scheduling time", before: "12 hrs/week", after: "0 (automated)" },
    { metric: "Customer confirmation", before: "2-4 hours", after: "Under 30 seconds" },
    { metric: "Double bookings", before: "3-5/week", after: "0" },
    { metric: "Customer satisfaction", before: "72%", after: "94%" },
  ],
  testimonial: {
    quote:
      "Kairon saved us 12 hours a week on scheduling alone. My team can focus on actual work instead of shuffling calendars.",
    name: "James Rivera",
    role: "Owner",
    company: "CoolBreeze HVAC",
  },
  techStack: ["Make", "Google Calendar", "Twilio", "Google Sheets"],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${placeholderStudy.title} | Case Study`,
    description: `See how ${placeholderStudy.client} saved ${placeholderStudy.heroMetric} with Kairon workflow automation.`,
    openGraph: {
      title: placeholderStudy.title,
      description: `${placeholderStudy.client} — ${placeholderStudy.heroMetric}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = placeholderStudy;

  return (
    <>
      {/* Hero */}
      <SectionWrapper variant="dark" className="pt-32">
        <Badge variant="industry">{study.industry}</Badge>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-kairon-white md:text-5xl">
          {study.title}
        </h1>
        <p className="mt-2 text-lg text-kairon-gray">{study.client}</p>
        <div className="mt-6 inline-block rounded-lg bg-kairon-red/10 px-6 py-3">
          <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-kairon-red">
            {study.heroMetric}
          </span>
        </div>
      </SectionWrapper>

      {/* Challenge */}
      <SectionWrapper variant="gradient">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-kairon-white">
          The Challenge
        </h2>
        <p className="mt-4 max-w-3xl text-kairon-gray leading-relaxed">
          {study.challenge}
        </p>
      </SectionWrapper>

      {/* Approach */}
      <SectionWrapper variant="dark">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-kairon-white">
          Our Approach
        </h2>
        <p className="mt-4 max-w-3xl text-kairon-gray leading-relaxed">
          {study.approach}
        </p>
      </SectionWrapper>

      {/* Results */}
      <SectionWrapper variant="gradient">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-kairon-white">
          The Results
        </h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full max-w-2xl">
            <thead>
              <tr className="border-b border-kairon-gray/20">
                <th className="pb-3 text-left text-sm font-semibold text-kairon-gray">
                  Metric
                </th>
                <th className="pb-3 text-left text-sm font-semibold text-kairon-gray">
                  Before
                </th>
                <th className="pb-3 text-left text-sm font-semibold text-kairon-red">
                  After
                </th>
              </tr>
            </thead>
            <tbody>
              {study.results.map((r) => (
                <tr key={r.metric} className="border-b border-kairon-gray/10">
                  <td className="py-4 text-sm font-medium text-kairon-white">
                    {r.metric}
                  </td>
                  <td className="py-4 text-sm text-kairon-gray">{r.before}</td>
                  <td className="py-4 text-sm font-semibold text-kairon-success">
                    {r.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* Testimonial */}
      <SectionWrapper variant="dark">
        <blockquote className="mx-auto max-w-2xl border-l-4 border-kairon-red pl-6">
          <p className="text-xl italic text-kairon-light leading-relaxed">
            &ldquo;{study.testimonial.quote}&rdquo;
          </p>
          <footer className="mt-4">
            <p className="font-medium text-kairon-white">
              {study.testimonial.name}
            </p>
            <p className="text-sm text-kairon-gray">
              {study.testimonial.role}, {study.testimonial.company}
            </p>
          </footer>
        </blockquote>
      </SectionWrapper>

      {/* Tech Stack */}
      <SectionWrapper variant="gradient">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-kairon-white">
          Tech Stack Used
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {study.techStack.map((tech) => (
            <Badge key={tech} variant="industry">
              {tech}
            </Badge>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper variant="dark">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-kairon-white">
            Want Similar Results?
          </h2>
          <Button href="/book" size="lg" className="mt-8">
            Book a Free Strategy Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
