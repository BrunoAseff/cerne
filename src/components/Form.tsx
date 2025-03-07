"use client";

import AlternativesSection from "./sections/AlternativesSection";
import HeaderSection from "./sections/HeaderSection";
import TemplateSection from "./sections/TemplateSection";

export default function Form() {
  return (
    <form className="flex w-[50%] flex-col">
      <HeaderSection />
      <AlternativesSection />
      <TemplateSection />
    </form>
  );
}
