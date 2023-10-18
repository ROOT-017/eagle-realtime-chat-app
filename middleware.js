// export { default } from "next-auth/middleware"

// export const config = {
//   // matcher: ["/profile"],
//   // matcher: ["/((?!register|api|signup).*)"],
// };

import { NextRequest, NextResponse } from "next/server";

export const middleware = (req, res) => {
  const isAuthenticated = req.cookies.get("isAuthenticated") ? true : false;
  const path = req.nextUrl.pathname;
  const isPublicPath = path === "/signup";

  // const token = request.cookies.get("token")?.value || "";
  if (isPublicPath && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  if (!isPublicPath && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signup", req.nextUrl.origin));
  }
  // if (!isPublicPath && isAuthenticated) {
  //   return NextResponse.next();
  // }
};

export const config = {
  matcher: [
    "/",
    "/signup",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
