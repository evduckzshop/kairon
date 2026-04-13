import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type {
  CaseStudy,
  FAQ,
  SanityImage,
  Service,
  TeamMember,
  Testimonial,
} from "@/types";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

// ---- GROQ Queries ----

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy"] | order(publishedAt desc) {
      _id, title, slug, client, industry, challenge, approach,
      results, testimonial->{_id, name, company, role, quote, avatar, rating},
      techStack, heroImage, gallery, featured, publishedAt
    }`
  );
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id, title, slug, client, industry, challenge, approach,
      results, testimonial->{_id, name, company, role, quote, avatar, rating},
      techStack, heroImage, gallery, featured, publishedAt
    }`,
    { slug }
  );
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  return sanityClient.fetch(
    `*[_type == "caseStudy" && featured == true] | order(publishedAt desc)[0...3] {
      _id, title, slug, client, industry, results, heroImage, featured, publishedAt
    }`
  );
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id, name, company, role, quote, avatar, rating, industry, featured
    }`
  );
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc)[0...5] {
      _id, name, company, role, quote, avatar, rating, industry, featured
    }`
  );
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, photo, linkedin, order
    }`
  );
}

export async function getServices(): Promise<Service[]> {
  return sanityClient.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, title, slug, tier, price, priceType, features, popular, order
    }`
  );
}

export async function getFAQs(category?: string): Promise<FAQ[]> {
  const filter = category
    ? `*[_type == "faq" && category == $category]`
    : `*[_type == "faq"]`;
  return sanityClient.fetch(`${filter} | order(order asc) { _id, question, answer, category, order }`, {
    category,
  });
}
