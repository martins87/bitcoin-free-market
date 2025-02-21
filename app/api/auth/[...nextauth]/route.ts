import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { AlbyWallet } from "@getalby/sdk";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    {
      id: "nwc",
      name: "Nostr Wallet Connect",
      type: "oauth",
      version: "2.0",
      scope: "read:user",
      params: { grant_type: "authorization_code" },
      accessTokenUrl: "https://nwc.getalby.com/oauth/token",
      authorizationUrl: "https://nwc.getalby.com/oauth/authorize?response_type=code",
      profileUrl: "https://nwc.getalby.com/api/v1/user",
      async profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
        };
      },
      clientId: process.env.NWC_CLIENT_ID,
      clientSecret: process.env.NWC_CLIENT_SECRET,
    },
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "nwc") {
        // Handle NWC authentication
        const albyWallet = new AlbyWallet({
          clientId: process.env.NWC_CLIENT_ID,
          clientSecret: process.env.NWC_CLIENT_SECRET,
          accessToken: account.access_token,
        });

        try {
          const userInfo = await albyWallet.getUserInfo();
          console.log("NWC User Info:", userInfo);
          user.name = userInfo.name;
          user.email = userInfo.email;
        } catch (error) {
          console.error("Failed to fetch NWC user info:", error);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user, account }) {
      if (account?.provider === "nwc" && user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };