import { NextResponse } from "next/server";

export async function GET() {
  const checks: Record<string, string> = {};

  // Check Supabase connectivity
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const { supabaseAdmin } = await import("@/lib/supabase-server");
      const { error } = await supabaseAdmin.from("leads").select("id").limit(1);
      checks.supabase = error ? "degraded" : "ok";
    } catch {
      checks.supabase = "down";
    }
  } else {
    checks.supabase = "not_configured";
  }

  const overallStatus = Object.values(checks).every(
    (v) => v === "ok" || v === "not_configured"
  )
    ? "ok"
    : "degraded";

  return NextResponse.json(
    { status: overallStatus, checks, timestamp: new Date().toISOString() },
    { status: overallStatus === "ok" ? 200 : 503 }
  );
}
