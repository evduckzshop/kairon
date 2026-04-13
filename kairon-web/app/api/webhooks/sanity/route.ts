import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.SANITY_WEBHOOK_SECRET;
    if (!secret) {
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 }
      );
    }

    // Verify Sanity webhook signature
    const rawBody = await request.text();
    const signature = request.headers.get("sanity-webhook-signature") || "";
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.warn("Sanity webhook signature verification failed");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    const type = payload._type;

    // Revalidate affected paths
    switch (type) {
      case "caseStudy":
        revalidatePath("/work");
        if (payload.slug?.current) {
          revalidatePath(`/work/${payload.slug.current}`);
        }
        revalidatePath("/"); // Home page has case study highlights
        break;
      case "testimonial":
        revalidatePath("/");
        revalidatePath("/work");
        break;
      case "service":
        revalidatePath("/services");
        revalidatePath("/"); // Home page has services preview
        break;
      case "teamMember":
        revalidatePath("/about");
        break;
      case "faq":
        revalidatePath("/services");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, type });
  } catch (error) {
    console.error("Sanity webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
