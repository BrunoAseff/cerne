import Form from "@/components/Form";
import FormToolbar from "@/components/FormToolbar";
import Preview from "@/components/Preview";
import PreviewToolbar from "@/components/PreviewToolbar";

export default function HomePage() {
  return (
    <main className="mx-2 mb-12 mt-3 flex flex-col justify-start md:mx-16">
      <section className="mb-2 mt-1 grid w-full grid-cols-1 rounded-xl md:grid-cols-2">
        <FormToolbar />
        <PreviewToolbar />
      </section>
      <article className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-start">
        <Form />
        <Preview />
      </article>
    </main>
  );
}
