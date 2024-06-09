import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { MiddlewareConfig } from 'next/server';

export const { auth } = NextAuth(authConfig);

export default auth((request) => {
  if (request.auth === null && !request.nextUrl.pathname.endsWith('/')) {
    return Response.redirect(new URL('/', request.url));
  }
});

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
