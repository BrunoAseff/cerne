import { Checkbox } from "../ui/checkbox";
import { FilePenLine, PencilLine } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useHeader } from "@/stores/useHeader";
import { Label } from "../ui/label";

export default function FieldsCard() {
  const { fields, toggleField } = useHeader();

  return (
    <div className="flex-1 rounded-xl border-2 border-border bg-muted p-3 pt-2">
      <div className="mx-3 mb-6 flex w-full items-center justify-between text-sm">
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
      <div className="mt-auto grid w-full grid-cols-2 flex-col items-center justify-evenly gap-3 md:grid-cols-4">
        {Object.entries(fields).map(([key, field]) => (
          <Label
            key={field.id}
            htmlFor={field.id}
            className="flex w-fit cursor-pointer items-center space-x-2 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-background md:px-6 md:py-4"
          >
            <Checkbox
              id={field.id}
              checked={field.enabled}
              onCheckedChange={() => toggleField(key as keyof typeof fields)}
            />
            <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              {field.label}
            </span>
          </Label>
        ))}
      </div>
    </div>
  );
}
