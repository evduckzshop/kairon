import Hero from "@/components/sections/hero";
import PainPoints from "@/components/sections/pain-points";
import HowItWorks from "@/components/sections/how-it-works";
import ServicesPreview from "@/components/sections/services-preview";
import CaseStudiesHighlight from "@/components/sections/case-studies-highlight";
import Testimonials from "@/components/sections/testimonials";
import Industries from "@/components/sections/industries";
import FinalCTA from "@/components/sections/final-cta";
import { organizationJsonLd } from "@/lib/json-ld";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <ServicesPreview />
      <CaseStudiesHighlight />
      <Testimonials />
      <Industries />
      <FinalCTA />
    </>
  );
}
