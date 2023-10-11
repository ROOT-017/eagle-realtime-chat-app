import GithubProvider from "next-auth/providers/github";
import jsCookie from "js-cookie";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    jwt: true,
  },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        isAuthenticated: true,
      };
    },
  },
  cookies: {
    //add custom cookie options
    sessionToken: {
      name: "isAuthenticated",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 3, // 3 days
      },
    },
  },
};
