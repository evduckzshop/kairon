import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kairon.com";

export const siteConfig = {
  name: "Kairon",
  description:
    "AI-powered workflow automation for small businesses. Transform repetitive tasks into automatic workflows.",
  url: siteUrl,
  ogImage: `${siteUrl}/og.png`,
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kairon — AI Workflow Automation Agency",
    template: "%s | Kairon",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Kairon — AI Workflow Automation Agency",
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kairon — AI Workflow Automation Agency",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};
