import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const response = await fetch(process.env.NEXTAUTH_URL + "/api/user/guilds", {
    method: "GET",
    headers: await headers(),
  });

  const data = await response.json();

  if (response.status != 200) {
    return <div>there was an error getting data</div>;
  }

  return (
    <div>
      {data.map((guild: any) => (
        <p key={guild.id}>{guild.name}</p>
      ))}
    </div>
  );
}
