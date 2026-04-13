// ---- Sanity CMS Types ----

export interface CaseStudy {
  _id: string;
  title: string;
  slug: { current: string };
  client: string;
  industry: string;
  challenge: PortableTextBlock[];
  approach: PortableTextBlock[];
  results: ResultMetric[];
  testimonial?: Testimonial;
  techStack: string[];
  heroImage?: SanityImage;
  gallery?: SanityImage[];
  featured: boolean;
  publishedAt: string;
}

export interface ResultMetric {
  metric: string;
  before: string;
  after: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  company: string;
  role: string;
  quote: string;
  avatar?: SanityImage;
  rating: number;
  industry: string;
  featured: boolean;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo?: SanityImage;
  linkedin?: string;
  order: number;
}

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  tier: "starter" | "growth" | "enterprise";
  price: string;
  priceType: "one-time" | "monthly" | "custom";
  features: string[];
  popular: boolean;
  order: number;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: PortableTextBlock[];
  category: "general" | "pricing" | "technical" | "process";
  order: number;
}

// ---- Supabase Types ----

export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  industry?: string;
  pain_point?: string;
  current_tools?: string[];
  referral_source?: string;
  message?: string;
  form_type: "contact" | "booking" | "inquiry";
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  lead_id: string;
  cal_event_id: string;
  scheduled_at: string;
  duration_minutes: number;
  status: "scheduled" | "completed" | "cancelled" | "no-show";
  notes?: string;
  created_at: string;
}

// ---- Sanity Helpers ----

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

// Portable Text block (simplified)
export interface PortableTextBlock {
  _type: string;
  _key: string;
  children?: Array<{
    _type: string;
    _key: string;
    text: string;
    marks?: string[];
  }>;
  style?: string;
  markDefs?: Array<{
    _type: string;
    _key: string;
    href?: string;
  }>;
}

// ---- Form Types ----

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  honeypot?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  businessName: string;
  industry: string;
  painPoint: string;
  currentTools: string[];
  referralSource: string;
  honeypot?: string;
}
