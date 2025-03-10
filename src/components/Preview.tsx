"use client";

import { useHeader } from "@/stores/useHeader";

export default function Preview() {
  const title = useHeader((state) => state.title);

  return (
    <article className="aspect-[1/1.414] w-full rounded-xl border-2 border-border bg-muted px-8 pb-8 pt-16 text-3xl md:w-[50%]">
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </article>
  );
}
