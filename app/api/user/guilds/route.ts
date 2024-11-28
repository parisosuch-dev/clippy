import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req: NextApiRequest) {
  const token = await getToken({ req, secret });

  if (!token || !token.accessToken) {
    return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });
  }

  try {
    const response = await fetch("https://discord.com/api/users/@me/guilds", {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch guilds");
    const guilds = await response.json();

    return NextResponse.json(guilds);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to fetch gulds." },
      { status: 500 }
    );
  }
}
