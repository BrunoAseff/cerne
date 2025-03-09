import { CopyMinus } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function FormToolbar() {
  return (
    <ul className="flex w-full items-center justify-end gap-2">
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="mr-3" variant="ghost" size="icon">
              <CopyMinus size={22} />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Colapsar tudo</TooltipContent>
        </Tooltip>
      </li>
    </ul>
  );
}
