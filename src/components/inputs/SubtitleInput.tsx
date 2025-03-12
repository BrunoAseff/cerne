import React, { useState, useEffect } from "react";
import "@/components/minimal-tiptap/styles/index.css";

import type { Content, Editor } from "@tiptap/react";
import type { UseMinimalTiptapEditorProps } from "@/components/minimal-tiptap/hooks/use-minimal-tiptap";
import { EditorContent } from "@tiptap/react";
import { cn } from "@/lib/utils";
import { SectionTwo } from "@/components/minimal-tiptap/components/section/two";
import { useMinimalTiptapEditor } from "@/components/minimal-tiptap/hooks/use-minimal-tiptap";
import { MeasuredContainer } from "../minimal-tiptap/components/measured-container";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export interface MinimalTiptapProps
  extends Omit<UseMinimalTiptapEditorProps, "onUpdate"> {
  value?: Content;
  onChange?: (value: Content) => void;
  className?: string;
  editorContentClassName?: string;
}

const MAX_CHARS = 30;

interface ToolbarProps {
  editor: Editor;
  characterCount: number;
}

interface TextNode {
  type: string;
  text?: string;
  content?: TextNode[];
}

const Toolbar: React.FC<ToolbarProps> = ({ editor, characterCount }) => {
  const getColorClasses = (): string => {
    if (characterCount <= 15) {
      return "text-primary bg-transparent shadow-transparent";
    } else if (characterCount <= 29) {
      return "text-warning bg-warning/10";
    } else {
      return "text-destructive bg-destructive/10 border-destructive";
    }
  };

  return (
    <div className="relative shrink-0 overflow-x-auto border-t border-border p-2">
      <div className="flex w-max items-center gap-px">
        <SectionTwo
          editor={editor}
          activeActions={["bold", "italic", "underline", "strikethrough"]}
          mainActionCount={5}
        />
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            className={`hover:none absolute bottom-3 right-3 ${getColorClasses()}`}
          >
            {characterCount}/{MAX_CHARS}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          {characterCount >= MAX_CHARS
            ? "Limite de caracteres atingido"
            : `${MAX_CHARS - characterCount} caracteres restantes`}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export const SubtitleInput = React.forwardRef<
  HTMLDivElement,
  MinimalTiptapProps
>(({ value, onChange, className, editorContentClassName, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [editorInstance, setEditorInstance] = useState<Editor | null>(null);

  const extractText = (nodes: TextNode[]): string => {
    if (editorInstance) {
      return editorInstance.getText();
    }

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

  const handleUpdate = (newValue: Content): void => {
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

    setCharacterCount(textContent.length);

    if (editor) {
      setCharacterCount(editor.getText().length);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  const editor = useMinimalTiptapEditor({
    value,
    onUpdate: handleUpdate,
    ...props,
  });

  useEffect(() => {
    if (editor) {
      setEditorInstance(editor);
    }
  }, [editor]);

  useEffect(() => {
    if (!editorInstance) return;

    const handleFocus = (): void => setIsFocused(true);
    const handleBlur = (): void => setIsFocused(false);

    editorInstance.on("focus", handleFocus);
    editorInstance.on("blur", handleBlur);

    return () => {
      editorInstance.off("focus", handleFocus);
      editorInstance.off("blur", handleBlur);
    };
  }, [editorInstance]);

  if (!editor) {
    return null;
  }

  return (
    <MeasuredContainer
      as="div"
      name="editor"
      ref={ref}
      className={cn(
        "flex h-auto min-h-28 w-full flex-col rounded-md border border-input shadow-sm focus-within:border-primary",
        className,
      )}
    >
      <EditorContent
        editor={editor}
        className={cn("minimal-tiptap-editor", editorContentClassName)}
      />
      {isFocused && <Toolbar editor={editor} characterCount={characterCount} />}
    </MeasuredContainer>
  );
});

SubtitleInput.displayName = "SubtitleInput";

export default SubtitleInput;
