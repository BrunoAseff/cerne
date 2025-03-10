import { useState } from "react";
import type { Content } from "@tiptap/react";
import { useHeader } from "@/stores/useHeader";
import FormSection from "../FormSection";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import TitleInput from "../inputs/TitleInput";
import { cn } from "@/lib/utils";
import { FilePenLine, PencilLine } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
    <FormSection id="header-section" title="Cabeçalho">
      <div className="flex w-full flex-col gap-12">
        <div className="rounded-xl bg-muted p-3 pt-2">
          <div className="mx-3 mb-3 flex w-full items-center justify-between text-sm">
            <div className="flex items-center justify-start gap-1">
              <FilePenLine size={16} />
              <h1>Campos</h1>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className="mr-3" variant="ghost" size="icon">
                  <PencilLine size={22} />
                </Button>
              </TooltipTrigger>

              <TooltipContent>Editar nome dos campos</TooltipContent>
            </Tooltip>
          </div>
          <div className="grid w-full grid-cols-2 flex-col items-center justify-evenly gap-3 md:grid-cols-4">
            {Object.entries(fields).map(([key, field]) => (
              <Label
                key={field.id}
                htmlFor={field.id}
                className="flex w-fit cursor-pointer items-center space-x-2 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-background md:px-6 md:py-4"
              >
                <Checkbox
                  id={field.id}
                  checked={field.enabled}
                  onCheckedChange={() =>
                    toggleField(key as keyof typeof fields)
                  }
                />
                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {field.label}
                </span>
              </Label>
            ))}
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <Label className="mb-2">Título da prova</Label>
            <TitleInput
              throttleDelay={1000}
              className={cn("w-full rounded-xl bg-muted")}
              editorContentClassName="overflow-auto h-full"
              value={value}
              onChange={handleTitleChange}
              output="html"
              placeholder="Escreva aqui..."
              editable={true}
              editorClassName="focus:outline-none px-5 py-4 h-full"
            />
          </div>

          <div className="flex flex-col">
            <Label className="mb-2">Título da prova</Label>
            <TitleInput
              throttleDelay={1000}
              className={cn("w-full rounded-xl bg-muted")}
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
      </div>
    </FormSection>
  );
}
