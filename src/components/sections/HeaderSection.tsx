import { useState } from "react";
import type { Content } from "@tiptap/react";
import { useHeader } from "@/stores/useHeader";
import FormSection from "../FormSection";
import { Label } from "../ui/label";
import TitleInput from "../cards/TitleInput";
import { cn } from "@/lib/utils";
import SubtitleInput from "../cards/SubtitleInput";
import FontCard from "../cards/FontCard";
import FieldsCard from "../cards/FieldsCard";

interface TextNode {
  type: string;
  text?: string;
  content?: TextNode[];
}

export default function HeaderSection(): JSX.Element {
  const [value, setValue] = useState<Content>("");
  const { setTitle } = useHeader();

  const extractText = (nodes: TextNode[]): string => {
    return nodes
      .map((node) => {
        if (node.type === "text") {
          return node.text ?? "";
        } else if (node.content) {
          return extractText(node.content);
        }
        return "";
      })
      .join("");
  };

  const handleTitleChange = (newValue: Content): void => {
    setValue(newValue);

    let textContent = "";
    if (typeof newValue === "string") {
      textContent = newValue;
    } else if (
      newValue &&
      typeof newValue === "object" &&
      "content" in newValue
    ) {
      const jsonContent = newValue;

      if (Array.isArray(jsonContent.content)) {
        textContent = extractText(jsonContent.content as TextNode[]);
      }
    }

    const limitedText = textContent.slice(0, 100);

    if (limitedText !== textContent) {
      if (typeof newValue === "object" && "content" in newValue!) {
        setValue({
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: limitedText,
                },
              ],
            },
          ],
        } as Content);
      } else {
        setValue(limitedText);
      }
    }

    setTitle(limitedText);
  };

  return (
    <FormSection id="header-section" title="Cabeçalho">
      <div className="flex w-full flex-col gap-12">
        <div className="flex w-full gap-4">
          <FontCard />
          <FieldsCard />
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <Label className="mb-2">Título da prova</Label>
            <TitleInput
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
            <Label className="mb-2">Subtítulo da prova</Label>
            <SubtitleInput
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
