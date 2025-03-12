import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { TypeOutline } from "lucide-react";

export default function FontCard() {
  return (
    <div className="flex-2 rounded-xl border-2 border-border bg-muted p-3 pt-2">
      <div className="mx-3 mb-3 flex w-full items-center justify-start text-sm">
        <div className="flex items-center justify-start gap-1 py-1.5">
          <TypeOutline size={16} />
          <h1>Fonte</h1>
        </div>
      </div>
      <div className="flex w-full flex-col items-center space-y-6">
        <div className="flex flex-col items-start gap-1">
          <Select defaultValue="apple">
            <Label>Fonte</Label>

            <SelectTrigger className="m-auto w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fonte</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-start gap-1">
          <Label>Tamanho</Label>
          <Select defaultValue="banana">
            <SelectTrigger className="m-auto w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tamanho</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
