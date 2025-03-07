import { useState } from "react";
import type { Content } from "@tiptap/react";
import { useHeader } from "@/stores/useHeader";
import FormSection from "../FormSection";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import TitleInput from "../inputs/TitleInput";
import { cn } from "@/lib/utils";

export default function HeaderSection() {
  const [value, setValue] = useState<Content>("");
  const { setTitle, fields, toggleField } = useHeader();

  const handleTitleChange = (newValue: Content) => {
    setValue(newValue);
    if (typeof newValue === "string") {
      setTitle(newValue);
    }
  };

  return (
    <FormSection title="Cabeçalho">
      <div className="flex w-full flex-col gap-4">
        <div className="grid w-full grid-cols-4 flex-col gap-6 rounded-xl bg-white p-4">
          {Object.entries(fields).map(([key, field]) => (
            <div key={field.id} className="flex items-center space-x-2">
              <Checkbox
                id={field.id}
                checked={field.enabled}
                onCheckedChange={() => toggleField(key as keyof typeof fields)}
              />
              <Label
                htmlFor={field.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {field.label}
              </Label>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <Label className="mb-2">Título da prova</Label>
          <TitleInput
            throttleDelay={1000}
            className={cn("w-full rounded-xl bg-white")}
            editorContentClassName="overflow-auto h-full"
            value={value}
            onChange={handleTitleChange}
            output="html"
            placeholder="Escreva aqui..."
            editable={true}
            editorClassName="focus:outline-none px-5 py-4 h-full"
          />
        </div>
      </div>
    </FormSection>
  );
}
