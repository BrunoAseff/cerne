"use client";

import { useHeader } from "@/stores/useHeader";
import { fontMap } from "@/types/fonts";

export default function Preview() {
  const { title, font } = useHeader();

  const fontClass = fontMap[font] ?? "";

  return (
    <article
      className={`${fontClass} aspect-[1/1.414] w-full rounded-xl border-2 border-border bg-muted px-8 pb-8 pt-16 text-3xl md:w-[50%]`}
      style={{ fontFamily: `var(--${font}-font, inherit)` }}
    >
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </article>
  );
}
