import { ReactNode } from "react";
import { getServers } from "@/lib/clippy/server";
import { getUserGuild, Guild } from "@/lib/discord/guild";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    <div className="flex flex-row h-full px-8 pb-8 space-x-8">
      <aside className="rounded-xl h-full">
        {guilds.map((guild) => (
          <div id={guild.id}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={`/dashboard/${guild.id}`} className="group">
                    <Avatar className="transition-all duration-100 ease-in-out group-hover:rounded-md">
                      <AvatarImage
                        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                      ></AvatarImage>
                    </Avatar>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{guild.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </aside>
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
