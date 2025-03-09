import Form from "@/components/Form";
import FormToolbar from "@/components/FormToolbar";
import Preview from "@/components/Preview";
import PreviewToolbar from "@/components/PreviewToolbar";

export default function HomePage() {
  return (
    <main className="mx-16 mb-12 mt-16 flex h-screen flex-col justify-center">
      <section className="mb-2 mt-1 grid w-full grid-cols-2">
        <FormToolbar />
        <PreviewToolbar />
      </section>
      <article className="flex justify-center gap-6">
        <Form />
        <Preview />
      </article>
    </main>
  );
}
