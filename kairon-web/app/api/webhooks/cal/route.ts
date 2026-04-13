import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.CAL_WEBHOOK_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 }
      );
    }

    // Verify webhook signature using raw body
    const rawBody = await request.text();
    const signature = request.headers.get("x-cal-signature-256") || "";
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.warn("Cal.com webhook signature verification failed");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    const eventType = payload.triggerEvent;

    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ received: true });
    }

    const { supabaseAdmin } = await import("@/lib/supabase-server");

    if (eventType === "BOOKING_CREATED") {
      const { email, name } = payload.payload?.attendees?.[0] || {};
      const scheduledAt = payload.payload?.startTime;
      const calEventId = payload.payload?.uid;
      const duration = payload.payload?.length || 30;

      // Try to find existing lead by email
      let leadId: string | null = null;
      if (email) {
        const { data: lead } = await supabaseAdmin
          .from("leads")
          .select("id")
          .eq("email", email.toLowerCase())
          .single();
        leadId = lead?.id || null;
      }

      await supabaseAdmin.from("bookings").insert({
        lead_id: leadId,
        cal_event_id: calEventId,
        scheduled_at: scheduledAt,
        duration_minutes: duration,
        status: "scheduled",
      });
    } else if (eventType === "BOOKING_CANCELLED") {
      const calEventId = payload.payload?.uid;
      if (calEventId) {
        await supabaseAdmin
          .from("bookings")
          .update({ status: "cancelled" })
          .eq("cal_event_id", calEventId);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Cal.com webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
