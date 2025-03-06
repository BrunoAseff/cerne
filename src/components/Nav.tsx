import { Newspaper } from "lucide-react";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="absolute top-0 flex w-full items-center justify-between px-12 py-6">
      <h1 className="text-xl font-bold">Cerne</h1>

      <Button className="flex items-center justify-center gap-2">
        <Newspaper />
        <p>Nova prova</p>
      </Button>
    </nav>
  );
}
