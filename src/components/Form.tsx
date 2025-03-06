"use client";
import { useState } from "react";
import type { Content } from "@tiptap/react";
import MinimalTiptapOne from "./inputs/TitleInput";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";

export default function Form() {
  const [value, setValue] = useState<Content>("");

  return (
    <form className="flex w-[50%] flex-col gap-4">
      <Label>Título da prova</Label>
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
      />{" "}
    </form>
  );
}
