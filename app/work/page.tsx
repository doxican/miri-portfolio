import type { Metadata } from "next";
import Link from "next/link";
import WorkProjectCard from "@/components/WorkProjectCard";

export const metadata: Metadata = {
  title: "My work",
  description:
    "View my past projects and read case studies covering my Product design and User research projects.",
};

const featuredProjects = [
  {
    title: "Project One",
    subtitle: "Full-stack Product Design for an AI Tool Ecosystem",
    slug: "project-one",
  },
  {
    title: "Project Two",
    subtitle: "Webflow design & development, SEO & CRO",
    slug: "project-two",
  },
  {
    title: "Project Three",
    subtitle: "Webflow & Branding for a Staffing Startup",
    slug: "project-three",
  },
  {
    title: "Project Four",
    subtitle: "Webflow Design / Development & Custom Illustrations",
    slug: "project-four",
  },
];

export default function Work() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-20">
      <header className="mb-16 max-w-3xl space-y-6">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          My work
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          View my past projects and read case studies covering my Product
          design and User research projects.
        </p>
      </header>

      <section aria-labelledby="featured-work-heading">
        <h2
          id="featured-work-heading"
          className="mb-10 text-2xl font-medium tracking-tight sm:mb-12"
        >
          Featured Work
        </h2>

        <ul className="grid gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
          {featuredProjects.map((project) => (
            <WorkProjectCard key={project.slug} {...project} />
          ))}
        </ul>
      </section>

      <section className="mt-20 border-t border-border pt-16 sm:mt-24">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">
            Have a design project you need help with?
          </h2>
          <Link
            href="/contact"
            className="inline-block text-lg text-muted underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
