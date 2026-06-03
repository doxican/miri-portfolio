import ImagePlaceholder from "@/components/ImagePlaceholder";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 sm:py-20">
      <header className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-widest text-muted">Case study</p>
        <h1 className="text-4xl font-medium capitalize tracking-tight">
          {title}
        </h1>
        <p className="text-muted">
          Case study content placeholder. Replace with your project details.
        </p>
      </header>

      <ImagePlaceholder label="Case study hero image" aspectRatio="wide" />
    </main>
  );
}
