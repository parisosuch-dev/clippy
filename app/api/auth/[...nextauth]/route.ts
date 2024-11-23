import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const NEXTAUTH_URL = process.env.NEXTAUTH_URL;

if (!DISCORD_CLIENT_ID) {
  throw new Error("DISCORD_CLIENT_ID is a required env variable.");
}

if (!DISCORD_CLIENT_SECRET) {
  throw new Error("DISCORD_CLIENT_SECRET is a required env variable.");
}

if (!NEXTAUTH_URL) {
  throw new Error("NEXTAUTH_URL is a required env variable.");
}

export const authOptions = {
  providers: [
    Discord({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/dashboard";
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
