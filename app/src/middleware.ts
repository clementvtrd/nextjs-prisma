import NextAuth from "next-auth";
import authConfig from "./auth.config";

export const { auth } = NextAuth(authConfig);

export default auth((request) => {
  if (request.auth === null && !request.nextUrl.pathname.endsWith('/')) {
    return Response.redirect(new URL('/', request.url));
  }
});

export const config = {
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
};
