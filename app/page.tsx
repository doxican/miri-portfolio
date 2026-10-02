import Link from "next/link";
import WorkProjectCard from "@/components/WorkProjectCard";
import { projects } from "@/lib/projects";

const FEATURED_SLUGS = [
  "hounslow-govservice",
  "education-approval-workflow",
  "chainhound",
] as const;

export default function Home() {
  const featuredProjects = FEATURED_SLUGS.map((slug) =>
    projects.find((project) => project.slug === slug),
  ).filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-8 sm:py-24">
      <section className="max-w-3xl space-y-8 pb-20 sm:pb-28">
        <p className="text-lg text-muted sm:text-xl">Hi, I&apos;m Miri</p>
        <h1 className="text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          Product designer bridging policy thinking and digital experience —
          with a focus on service design.
        </h1>
        <div className="flex flex-wrap items-center gap-6 pt-2">
          <Link
            href="/contact"
            className="text-base font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-lg"
          >
            Let&apos;s talk
          </Link>
          <Link
            href="/work"
            className="text-base text-muted transition-colors hover:text-foreground sm:text-lg"
          >
            View work
          </Link>
        </div>
      </section>

      <section aria-labelledby="featured-work-heading" className="space-y-10 sm:space-y-14">
        <div className="flex items-end justify-between gap-6 border-t border-border pt-10 sm:pt-14">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-muted">
              Featured Work
            </p>
            <h2
              id="featured-work-heading"
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              Design that serves people and systems
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden shrink-0 text-sm text-muted transition-colors hover:text-foreground sm:inline-block"
          >
            View more work →
          </Link>
        </div>

        <ul className="grid gap-12 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16">
          {featuredProjects.map((project) => (
            <WorkProjectCard
              key={project.slug}
              title={project.title}
              subtitle={project.subtitle}
              slug={project.slug}
              coverImage={project.coverImage}
            />
          ))}
        </ul>

        <Link
          href="/work"
          className="inline-block text-sm text-muted transition-colors hover:text-foreground sm:hidden"
        >
          View more work →
        </Link>
      </section>
    </main>
  );
}
