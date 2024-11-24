import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session || !session.accessToken) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const response = await fetch("https://discord.com/api/users/@me/guilds", {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    if (!response.ok) throw new Error("Failed to fetch guilds");
    const guilds = await response.json();

    res.status(200).json(guilds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch guilds" });
  }
}
