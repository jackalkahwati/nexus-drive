import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000/api";

/**
 * Generic API route handler that proxies requests to the Lattis-Nexus backend
 */
export async function GET(
  request: NextRequest,
  context: { params: { path: string[] } }
) {
  const session = await getServerSession();
  const path = context.params.path.join("/");
  const searchParams = request.nextUrl.searchParams.toString();
  const url = `${BACKEND_URL}/${path}${searchParams ? `?${searchParams}` : ""}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (session?.user) {
    // @ts-ignore - accessToken may be added in session callback
    headers["Authorization"] = `Bearer ${session.accessToken}`;
  }

  try {
    const response = await fetch(url, {
      headers,
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Backend API error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error proxying to ${url}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch data from backend" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  context: { params: { path: string[] } }
) {
  const session = await getServerSession();
  const path = context.params.path.join("/");
  const url = `${BACKEND_URL}/${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (session?.user) {
    // @ts-ignore - accessToken may be added in session callback
    headers["Authorization"] = `Bearer ${session.accessToken}`;
  }

  try {
    const body = await request.json();
    const response = await fetch(url, {
      headers,
      method: "POST",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Backend API error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error proxying to ${url}:`, error);
    return NextResponse.json(
      { error: "Failed to send data to backend" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: { path: string[] } }
) {
  const session = await getServerSession();
  const path = context.params.path.join("/");
  const url = `${BACKEND_URL}/${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (session?.user) {
    // @ts-ignore - accessToken may be added in session callback
    headers["Authorization"] = `Bearer ${session.accessToken}`;
  }

  try {
    const body = await request.json();
    const response = await fetch(url, {
      headers,
      method: "PUT",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Backend API error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error proxying to ${url}:`, error);
    return NextResponse.json(
      { error: "Failed to update data in backend" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: { path: string[] } }
) {
  const session = await getServerSession();
  const path = context.params.path.join("/");
  const url = `${BACKEND_URL}/${path}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (session?.user) {
    // @ts-ignore - accessToken may be added in session callback
    headers["Authorization"] = `Bearer ${session.accessToken}`;
  }

  try {
    const response = await fetch(url, {
      headers,
      method: "DELETE",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Backend API error" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error proxying to ${url}:`, error);
    return NextResponse.json(
      { error: "Failed to delete data in backend" },
      { status: 500 }
    );
  }
} 