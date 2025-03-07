"use client";

import FormSection from "./FormSection";
import HeaderSection from "./sections/HeaderSection";

export default function Form() {
  return (
    <form className="flex w-[50%] flex-col">
      <HeaderSection />
      <FormSection title="Alternativas">
        <div></div>
      </FormSection>
      <FormSection title="Gabarito">
        <div></div>
      </FormSection>
      <FormSection title="Rodapé">
        <div></div>
      </FormSection>
    </form>
  );
}
