"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row justify-between w-full p-8">
      <Link href="/" className="text-clippy-primary font-bold text-2xl">
        clippy
      </Link>
      <div className="space-x-8 text-lg">
        <Link href="#">invite bot</Link>
        <Link href="#">guide</Link>
        {session ? (
          <Button
            variant="outline"
            className="text-lg border-clippy-accent text-clippy-accent hover:bg-clippy-accent hover:text-white"
            onClick={() => {
              signOut();
            }}
          >
            logout
          </Button>
        ) : (
          <Button
            variant="outline"
            className="text-lg border-clippy-accent text-clippy-accent hover:bg-clippy-accent hover:text-white"
            onClick={() => {
              signIn("discord");
            }}
          >
            login
          </Button>
        )}
      </div>
    </div>
  );
}
