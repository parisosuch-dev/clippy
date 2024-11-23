"use client";

import Image from "next/image";
import wave from "@/public/wave.svg";
import { Button } from "@/components/ui/button";
import { BsDiscord } from "react-icons/bs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex-1 pt-16 flex flex-col items-center justify-center">
        <div className="w-1/2 text-center">
          <h1 className="text-clippy-primary font-black text-7xl tracking-wide">
            extra pins for discord channels.
          </h1>
          <p className="text-lg text-black/75 mt-6">
            clippy is a discord bot that allows you to add more pins to your
            discord server - called clips.
          </p>
        </div>
      </div>
      <div className="w-1/2 pt-12">
        <Image src={wave} alt="purple wave" className="w-full" />
        <div className="h-72 bg-clippy-primary w-full rounded-b-lg flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold">how clippy works</h2>
          <ol className="text-white mt-6 text-lg text-center">
            <li>1. invite clippy to your discord server.</li>
            <li>
              2. clip a message using discord commands or the context menu.
            </li>
            <li>3. view server clips by logging into clippy.</li>
          </ol>
          <Button className="bg-clippy-accent text-xl hover:bg-clippy-accent/75 mt-8">
            <BsDiscord />
            invite
          </Button>
        </div>
      </div>
    </div>
  );
}
