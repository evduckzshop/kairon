const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kairon.com";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kairon",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "AI-powered workflow automation for small businesses. Transform repetitive tasks into automatic workflows.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@kairon.com",
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Kairon",
    url: siteUrl,
    description:
      "AI workflow automation agency for small businesses.",
    priceRange: "$$",
    areaServed: "US",
  };
}

export function serviceJsonLd(
  name: string,
  description: string,
  price: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: "Kairon",
    },
    offers: {
      "@type": "Offer",
      price: price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
    },
  };
}

export function faqPageJsonLd(
  items: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
