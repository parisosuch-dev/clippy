import { headers } from "next/headers";

export interface Guild {
  id: string;
  name: string;
  icon: string;
  banner?: string;
  owner: boolean;
  permissions: number;
  permissions_new: number;
  features: string[];
}

export const getUserGuilds = async () => {
  const response = await fetch(process.env.NEXTAUTH_URL + "/api/user/guilds", {
    method: "GET",
    headers: await headers(),
  });

  if (response.status !== 200) {
    const text = await response.text();
    throw new Error(text);
  }

  const data = await response.json();

  return data as Guild[];
};

export const getGuildIconURL = (guild: Guild) => {
  return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
};
