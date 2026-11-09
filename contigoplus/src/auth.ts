import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

/** Variables necesarias: AUTH_SECRET, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET. */
export const authConfigurado = Boolean(
  process.env.AUTH_SECRET &&
    process.env.AUTH_GOOGLE_ID &&
    process.env.AUTH_GOOGLE_SECRET,
);

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  trustHost: true,
  pages: { signIn: "/acceso" },
});
