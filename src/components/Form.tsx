"use client";
import { useState } from "react";
import type { Content } from "@tiptap/react";
import TitleInput from "./inputs/TitleInput";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import FormSection from "./FormSection";
import { useHeader } from "@/stores/useHeader";

export default function Form() {
  const [value, setValue] = useState<Content>("");
  const setTitle = useHeader((state) => state.setTitle);

  const handleTitleChange = (newValue: Content) => {
    setValue(newValue);
    if (typeof newValue === "string") {
      setTitle(newValue);
    }
  };

  return (
    <form className="flex w-[50%] flex-col">
      <FormSection title="Cabeçalho">
        <Label className="mb-2">Título da prova</Label>
        <TitleInput
          throttleDelay={1000}
          className={cn("h-4 w-full rounded-xl bg-white")}
          editorContentClassName="overflow-auto h-full"
          value={value}
          onChange={handleTitleChange}
          output="html"
          placeholder="Escreva aqui..."
          editable={true}
          editorClassName="focus:outline-none px-5 py-4 h-full"
        />
      </FormSection>
      <FormSection title="Alternativas">
        <div></div>
      </FormSection>
      <FormSection title="Gabarito">
        <div></div>
      </FormSection>
      <FormSection title="Rodapé">
        <div></div>
      </FormSection>
    </form>
  );
}
