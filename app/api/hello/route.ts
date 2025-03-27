import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from Nexus Drive API",
    version: "1.0.0",
    status: "OK"
  });
} 