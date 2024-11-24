import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const NEXTAUTH_URL = process.env.NEXTAUTH_URL;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

if (!DISCORD_CLIENT_ID) {
  throw new Error("DISCORD_CLIENT_ID is a required env variable.");
}

if (!DISCORD_CLIENT_SECRET) {
  throw new Error("DISCORD_CLIENT_SECRET is a required env variable.");
}

if (!NEXTAUTH_URL) {
  throw new Error("NEXTAUTH_URL is a required env variable.");
}
if (!NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is a required env variable.");
}

export const authOptions = {
  providers: [
    Discord({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      // Add access token to JWT on the initial sign-in
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // Pass access token to the session object
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      return baseUrl + "/dashboard";
    },
    secret: NEXTAUTH_SECRET,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
