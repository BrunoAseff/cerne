import {
  ArrowDownToLine,
  Fullscreen,
  Printer,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";

export default function PreviewToolbar() {
  return (
    <ul className="mb-4 flex w-full items-center justify-evenly gap-2 md:mb-0 md:justify-end">
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="mr-0 md:mr-3" variant="ghost" size="icon">
              <ZoomIn size={22} />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Zoom In</TooltipContent>
        </Tooltip>
      </li>
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="mr-3" variant="ghost" size="icon">
              <ZoomOut size={22} />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Zoom Out</TooltipContent>
        </Tooltip>
      </li>
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="mr-3" variant="ghost" size="icon">
              <Fullscreen size={22} />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Tela cheia</TooltipContent>
        </Tooltip>
      </li>

      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="mr-3" variant="ghost" size="icon">
              <Printer size={22} />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Imprimir</TooltipContent>
        </Tooltip>
      </li>
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="mr-3" variant="ghost" size="icon">
              <ArrowDownToLine size={22} />
            </Button>
          </TooltipTrigger>

          <TooltipContent>Baixar prova</TooltipContent>
        </Tooltip>
      </li>
    </ul>
  );
}
