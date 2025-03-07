"use client";

import { useHeader } from "@/stores/useHeader";

export default function Preview() {
  const title = useHeader((state) => state.title);

  return (
    <article className="border-1 aspect-[1/1.414] w-[50%] rounded-2xl border-border bg-white p-8">
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </article>
  );
}
