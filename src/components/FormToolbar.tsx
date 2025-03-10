// src/components/FormToolbar.tsx
"use client";

import { CopyMinus, CopyPlus } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useFormSections } from "@/hooks/use-section";

export default function FormToolbar() {
  const { toggleAllSections, allCollapsed } = useFormSections();

  return (
    <ul className="hidden w-full items-center justify-start gap-2 md:flex md:justify-end">
      <li>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="mr-0 md:mr-3"
              variant="ghost"
              size="icon"
              onClick={toggleAllSections}
            >
              {allCollapsed ? <CopyPlus size={22} /> : <CopyMinus size={22} />}
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            {allCollapsed ? "Expandir tudo" : "Colapsar tudo"}
          </TooltipContent>
        </Tooltip>
      </li>
    </ul>
  );
}
