import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getGuildIconURL, getUserGuilds } from "@/lib/discord/guild";
import Image from "next/image";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const guilds = await getUserGuilds();

  return (
    <div>
      {guilds.map((guild) => (
        <Image
          src={getGuildIconURL(guild)}
          alt="Discord server icon"
          width={48}
          height={48}
        />
      ))}
    </div>
  );
}
