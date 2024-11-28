import { ReactNode } from "react";
import { getServers } from "@/lib/clippy/server";
import { getUserGuild, Guild } from "@/lib/discord/guild";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const clippyServers = await getServers();
  var guilds: Guild[] = [];

  for (let server of clippyServers) {
    const guild = await getUserGuild(server.id);
    guilds.push(guild);
  }
  return (
    <div className="flex flex-row">
      <aside>
        {guilds.map((guild) => (
          <div>
            <Link href={`/dashboard/${guild.id}`}>
              <Avatar>
                <AvatarImage
                  src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                ></AvatarImage>
              </Avatar>
            </Link>
          </div>
        ))}
      </aside>
      <main>{children}</main>
    </div>
  );
}
