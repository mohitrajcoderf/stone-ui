import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Redirect /docs/components and /docs/sections to /docs
export default function middleware(request: NextRequest) {
    // Redirect /docs/components and /docs/sections to /docs
    if (
        request.nextUrl.pathname === "/docs/components" ||
        request.nextUrl.pathname === "/docs/sections"
    ) {
        return NextResponse.redirect(new URL("/docs", request.url));
    }
}

export const config = {
    matcher: ["/docs/components", "/docs/sections"],
};