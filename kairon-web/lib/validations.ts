import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(254),
  company: z.string().max(100).optional(),
  message: z.string().min(1, "Message is required").max(5000),
  honeypot: z.string().max(0).optional(),
});

export const bookingFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(254),
  businessName: z.string().min(1, "Business name is required").max(100),
  industry: z.string().min(1, "Please select an industry"),
  painPoint: z.string().min(1, "Please select your biggest challenge"),
  currentTools: z.array(z.string()).optional().default([]),
  referralSource: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
