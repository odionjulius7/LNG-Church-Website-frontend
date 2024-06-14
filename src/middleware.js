import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const { pathname, origin } = request?.nextUrl;
  const session = request?.cookies.get("Bearer") === undefined ? true : false;
  if (pathname.includes("/admin")) {
    if (session) return NextResponse.redirect(`${origin}/login`);
  }
  return NextResponse.next();
}

// console.log("running!");
