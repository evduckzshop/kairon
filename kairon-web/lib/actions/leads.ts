"use server";

import { contactFormSchema, bookingFormSchema } from "@/lib/validations";
import type { ContactFormData, BookingFormData } from "@/lib/validations";

type ActionResult = {
  success: boolean;
  error?: string;
};

async function sanitizeText(text: string): Promise<string> {
  // Server-side: strip HTML tags as a basic measure
  return text.replace(/<[^>]*>/g, "").trim();
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResult> {
  try {
    // Validate
    const parsed = contactFormSchema.safeParse(data);
    if (!parsed.success) {
      return { success: false, error: "Invalid form data." };
    }

    // Honeypot check
    if (parsed.data.honeypot) {
      // Silently reject bot submissions
      return { success: true };
    }

    // Sanitize
    const sanitized = {
      name: await sanitizeText(parsed.data.name),
      email: parsed.data.email.toLowerCase().trim(),
      company: parsed.data.company
        ? await sanitizeText(parsed.data.company)
        : undefined,
      message: await sanitizeText(parsed.data.message),
    };

    // Rate limiting (if configured)
    const { getRateLimiter } = await import("@/lib/rate-limit");
    const limiter = getRateLimiter();
    if (limiter) {
      const result = await limiter.limit(sanitized.email);
      if (!result.success) {
        return {
          success: false,
          error: "Too many submissions. Please try again later.",
        };
      }
    }

    // Insert into Supabase
    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { supabaseAdmin } = await import("@/lib/supabase-server");
      const { error } = await supabaseAdmin.from("leads").insert({
        name: sanitized.name,
        email: sanitized.email,
        company: sanitized.company,
        message: sanitized.message,
        form_type: "contact",
        status: "new",
      });
      if (error) {
        console.error("Supabase insert error:", error);
      }
    }

    // Send emails via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.RESEND_FROM_EMAIL || "hello@kairon.com";

      // Confirmation to visitor
      await resend.emails.send({
        from: `Kairon <${fromEmail}>`,
        to: sanitized.email,
        subject: "Thanks for reaching out to Kairon!",
        text: `Hi ${sanitized.name},\n\nThanks for contacting us! We received your message and will get back to you within 24 hours.\n\nBest,\nThe Kairon Team`,
      });

      // Notification to team
      await resend.emails.send({
        from: `Kairon Leads <${fromEmail}>`,
        to: fromEmail,
        subject: `New lead: ${sanitized.name}${sanitized.company ? ` at ${sanitized.company}` : ""}`,
        text: `New contact form submission:\n\nName: ${sanitized.name}\nEmail: ${sanitized.email}\nCompany: ${sanitized.company || "N/A"}\nMessage: ${sanitized.message}`,
      });
    }

    return { success: true };
  } catch (error) {
    console.error("submitContactForm error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitBookingForm(
  data: BookingFormData
): Promise<ActionResult> {
  try {
    const parsed = bookingFormSchema.safeParse(data);
    if (!parsed.success) {
      return { success: false, error: "Invalid form data." };
    }

    if (parsed.data.honeypot) {
      return { success: true };
    }

    const sanitized = {
      name: await sanitizeText(parsed.data.name),
      email: parsed.data.email.toLowerCase().trim(),
      businessName: await sanitizeText(parsed.data.businessName),
      industry: parsed.data.industry,
      painPoint: parsed.data.painPoint,
      currentTools: parsed.data.currentTools,
      referralSource: parsed.data.referralSource,
    };

    const { getRateLimiter } = await import("@/lib/rate-limit");
    const limiter = getRateLimiter();
    if (limiter) {
      const result = await limiter.limit(sanitized.email);
      if (!result.success) {
        return {
          success: false,
          error: "Too many submissions. Please try again later.",
        };
      }
    }

    if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
      const { supabaseAdmin } = await import("@/lib/supabase-server");
      const { error } = await supabaseAdmin.from("leads").insert({
        name: sanitized.name,
        email: sanitized.email,
        company: sanitized.businessName,
        industry: sanitized.industry,
        pain_point: sanitized.painPoint,
        current_tools: sanitized.currentTools,
        referral_source: sanitized.referralSource,
        form_type: "booking",
        status: "new",
      });
      if (error) {
        console.error("Supabase insert error:", error);
      }
    }

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const fromEmail = process.env.RESEND_FROM_EMAIL || "hello@kairon.com";

      await resend.emails.send({
        from: `Kairon <${fromEmail}>`,
        to: sanitized.email,
        subject: "Your Kairon strategy call intake is received!",
        text: `Hi ${sanitized.name},\n\nThanks for filling out the intake form! Select a time slot on our booking page to schedule your free 30-minute strategy call.\n\nBest,\nThe Kairon Team`,
      });

      await resend.emails.send({
        from: `Kairon Leads <${fromEmail}>`,
        to: fromEmail,
        subject: `New booking intake: ${sanitized.name} at ${sanitized.businessName} (${sanitized.industry})`,
        text: `New booking intake:\n\nName: ${sanitized.name}\nEmail: ${sanitized.email}\nBusiness: ${sanitized.businessName}\nIndustry: ${sanitized.industry}\nBiggest Pain Point: ${sanitized.painPoint}\nCurrent Tools: ${sanitized.currentTools.join(", ") || "None"}\nReferral: ${sanitized.referralSource || "N/A"}`,
      });
    }

    return { success: true };
  } catch (error) {
    console.error("submitBookingForm error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
