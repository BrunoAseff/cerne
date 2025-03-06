"use client";
import { useState } from "react";
import type { Content } from "@tiptap/react";
import MinimalTiptapOne from "./inputs/TitleInput";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Form() {
  const [value, setValue] = useState<Content>("");

  return (
    <form className="flex w-[50%] flex-col">
      <Collapsible>
        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-xl border-foreground p-4 transition-all duration-200 hover:bg-accent">
          <span>Cabeçalho</span>
          <svg
            className="h-4 w-4 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <Label className="mb-2">Título da prova</Label>
          <MinimalTiptapOne
            throttleDelay={1000}
            className={cn("h-4 w-full rounded-xl bg-white")}
            editorContentClassName="overflow-auto h-full"
            value={value}
            onChange={setValue}
            output="html"
            placeholder="Escreva aqui..."
            editable={true}
            editorClassName="focus:outline-none px-5 py-4 h-full"
          />
        </CollapsibleContent>
      </Collapsible>
    </form>
  );
}
