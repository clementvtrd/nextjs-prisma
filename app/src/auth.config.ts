import type { NextAuthConfig } from "next-auth";
import google from 'next-auth/providers/google';

const DOMAIN_RESCTRICT = process.env.AUTH_GOOGLE_RESTRICT_DOMAIN ?? '';

export default {
  providers: [
    google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async signIn(user): Promise<boolean> {
      if (DOMAIN_RESCTRICT === '') {
        return true;
      }

      if (user.account?.provider === "google") {
        return user.profile != null
          && user.profile.email_verified === true
          && typeof user.profile.email === 'string'
          && user.profile.email.endsWith(DOMAIN_RESCTRICT);
      }

      return false;
    }
  }
} satisfies NextAuthConfig;
