"use client";
import { useState } from "react";
import { MinimalTiptapEditor } from "./minimal-tiptap";
import type { Content } from "@tiptap/react";

export default function Form() {
  const [value, setValue] = useState<Content>("");

  return (
    <form className="flex w-[50%] flex-col gap-4">
      <h1 className="text-xl font-bold">Prova</h1>
      <MinimalTiptapEditor
        value={value}
        onChange={setValue}
        className="w-full"
        editorContentClassName="p-5 "
        output="html"
        placeholder="Escreva o enunciado..."
        autofocus={true}
        editable={true}
        editorClassName="focus:outline-none "
      />{" "}
    </form>
  );
}
