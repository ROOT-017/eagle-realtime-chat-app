// export { default } from "next-auth/middleware"

// export const config = {
//   // matcher: ["/profile"],
//   // matcher: ["/((?!register|api|signup).*)"],
// };

import { NextRequest, NextResponse } from "next/server";
const redirectUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/signup"
    : "https://eagle-chat.vercel.app";
export const middleware = (req, res) => {
  const isAuthenticated = req.cookies.get('isAuthenticated') ? true : false;
  const path = req.nextUrl.pathname;
  console.log(path);
  const isPublicPath = path === "/signup";

  // const token = request.cookies.get("token")?.value || "";
  console.log(isPublicPath, isAuthenticated);
  if (isPublicPath && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  if (!isPublicPath && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signup", req.nextUrl.origin));
  }
};

export const config = {
  matcher: ["/", "/signup"],
};
