import { CirclePlus } from "lucide-react";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-b-border px-6 py-6 backdrop-blur-lg md:px-16">
      <h1 className="text-xl font-semibold">Cerne</h1>

      <Button className="flex items-center justify-center gap-2">
        <CirclePlus />
        <p>Nova prova</p>
      </Button>
    </nav>
  );
}
