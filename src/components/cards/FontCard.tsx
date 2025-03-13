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
import { useHeader } from "@/stores/useHeader";
import { fonts, fontScales } from "@/lib/fonts";

export default function FontCard() {
  const { font, setFont, fontScale, setFontScale } = useHeader();

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
          <Label>Fonte</Label>
          <Select value={font} onValueChange={setFont}>
            <SelectTrigger className="m-auto w-[180px]">
              <SelectValue placeholder="Escolha a fonte" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fonte</SelectLabel>
                {fonts.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-start gap-1">
          <Label>Tamanho</Label>
          <Select
            value={fontScale.toString()}
            onValueChange={(v) => setFontScale(parseFloat(v))}
          >
            <SelectTrigger className="m-auto w-[180px]">
              <SelectValue placeholder="Escolha a escala" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Escala</SelectLabel>
                {fontScales.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
