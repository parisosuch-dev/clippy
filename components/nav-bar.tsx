import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between w-full p-8">
      <p className="text-clippy-primary font-bold text-2xl">clippy</p>
      <div className="space-x-8 text-lg">
        <Link href="#">invite bot</Link>
        <Link href="#">guide</Link>
        <Button
          variant="outline"
          className="text-lg border-clippy-accent text-clippy-accent hover:bg-clippy-accent hover:text-white"
        >
          login
        </Button>
      </div>
    </div>
  );
}
