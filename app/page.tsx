import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-muted">Home</p>
          <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Your name here
          </h1>
          <p className="max-w-prose text-lg leading-relaxed text-muted">
            A short introduction goes here. Replace this with a summary of who
            you are and what you do.
          </p>
        </div>

        <ImagePlaceholder
          label="Hero image placeholder"
          aspectRatio="portrait"
        />
      </section>
    </main>
  );
}
