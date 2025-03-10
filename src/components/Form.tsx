"use client";

import AlternativesSection from "./sections/AlternativesSection";
import FooterSection from "./sections/FooterSection";
import HeaderSection from "./sections/HeaderSection";
import TemplateSection from "./sections/TemplateSection";

export default function Form() {
  return (
    <form className="grid w-full grid-cols-2 flex-col gap-4 md:flex md:w-[50%] md:gap-0">
      <HeaderSection />
      <AlternativesSection />
      <TemplateSection />
      <FooterSection />
    </form>
  );
}
