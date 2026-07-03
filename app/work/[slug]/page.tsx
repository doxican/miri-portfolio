import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ColourPaletteTable from "@/components/ColourPaletteTable";
import SubsectionContent from "@/components/SubsectionContent";
import { getProject, projects } from "@/lib/projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: Array.isArray(project.overview)
      ? project.overview[0]
      : project.overview,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 sm:py-20">
      <Link
        href="/work"
        className="mb-10 inline-block text-sm text-muted transition-colors hover:text-foreground"
      >
        ← Back to work
      </Link>

      <header className="mb-12 space-y-6">
        <p className="text-sm uppercase tracking-widest text-muted">Case study</p>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="text-xl text-muted">{project.subtitle}</p>

        <dl className="grid gap-4 border-t border-border pt-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted">Client</dt>
            <dd className="mt-1 font-medium">{project.client}</dd>
          </div>
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="mt-1 font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted">Dates</dt>
            <dd className="mt-1 font-medium">{project.dates}</dd>
          </div>
          <div>
            <dt className="text-muted">Location</dt>
            <dd className="mt-1 font-medium">{project.location}</dd>
          </div>
        </dl>
      </header>

      {project.coverImage ? (
        <Image
          src={project.coverImage.src}
          alt={project.coverImage.alt}
          width={project.coverImage.width}
          height={project.coverImage.height}
          className="mb-16 w-full rounded-lg border border-border"
          priority
        />
      ) : (
        <ImagePlaceholder
          label={`${project.title} hero image`}
          aspectRatio="wide"
          className="mb-16"
        />
      )}

      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">Overview</h2>
        {Array.isArray(project.overview) ? (
          project.overview.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-lg leading-relaxed text-muted">{project.overview}</p>
        )}
      </section>

      <section className="mb-16 space-y-4">
        <h2 className="text-2xl font-medium tracking-tight">My role</h2>
        {project.roleSummary ? (
          <p className="text-lg leading-relaxed text-muted">
            {project.roleSummary}
          </p>
        ) : (
          <ul className="list-disc space-y-3 pl-5 text-muted">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </section>

      {project.sections?.map((section) => (
        <section key={section.title} className="mb-16 space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">
            {section.title}
          </h2>
          {section.notes && section.notes.length > 0 && (
            <ul className="space-y-2 border-l border-border pl-4">
              {section.notes.map((note) => (
                <li
                  key={note}
                  className="text-sm italic leading-relaxed text-muted"
                >
                  {note}
                </li>
              ))}
            </ul>
          )}
          {section.content &&
            (Array.isArray(section.content) ? (
              section.content.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-lg leading-relaxed text-muted">
                {section.content}
              </p>
            ))}
          {section.subsectionGroups?.map((group) => (
            <div key={group.heading} className="space-y-4 pt-4">
              <h3 className="text-lg font-medium tracking-tight">
                {group.heading}
              </h3>
              {group.content &&
                (Array.isArray(group.content) ? (
                  group.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-relaxed text-muted"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-lg leading-relaxed text-muted">
                    {group.content}
                  </p>
                ))}
              {group.link && (
                <p className="text-lg leading-relaxed text-muted">
                  See the full Figma file{" "}
                  <a
                    href={group.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4 transition-colors hover:opacity-70"
                  >
                    {group.link.label}
                  </a>
                  .
                </p>
              )}
              {group.subsections?.map((subsection, index) => (
                <div key={subsection.title} className="space-y-3 pt-2">
                  <h4 className="text-base font-medium tracking-tight">
                    {group.numberedSubsections
                      ? `${index + 1}. ${subsection.title}`
                      : subsection.title}
                  </h4>
                  {subsection.content &&
                    (Array.isArray(subsection.content) ? (
                      subsection.content.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-lg leading-relaxed text-muted"
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-lg leading-relaxed text-muted">
                        {subsection.content}
                      </p>
                    ))}
                </div>
              ))}
              {group.images && group.images.length > 0 && (
                <ul className="flex flex-col gap-10 pt-2">
                  {group.images.map((image) => (
                    <li key={image.label} className="space-y-3">
                      <h4 className="text-base font-medium tracking-tight">
                        {image.label}
                      </h4>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className={`w-full rounded-lg border border-border ${
                          image.height > image.width ? "max-w-md" : "max-w-4xl"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              )}
              {group.tables?.map((table) => (
                <ColourPaletteTable
                  key={table.title}
                  title={table.title}
                  rows={table.rows}
                />
              ))}
              {group.notes && group.notes.length > 0 && (
                <ul className="space-y-2 border-l border-border pl-4">
                  {group.notes.map((note) => (
                    <li
                      key={note}
                      className="text-sm italic leading-relaxed text-muted"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {!section.subsectionGroups &&
            section.subsectionHeading &&
            section.subsections && (
            <h3 className="pt-2 text-lg font-medium tracking-tight">
              {section.subsectionHeading}
            </h3>
          )}
          {!section.subsectionGroups &&
            section.subsections?.map((subsection, index) => (
            <div key={subsection.title} className="space-y-3 pt-2">
              {section.subsectionHeading ? (
                <h4 className="text-base font-medium tracking-tight">
                  {section.numberedSubsections
                    ? `${index + 1}. ${subsection.title}`
                    : subsection.title}
                </h4>
              ) : (
                <h3 className="text-lg font-medium tracking-tight">
                  {section.numberedSubsections
                    ? `${index + 1}. ${subsection.title}`
                    : subsection.title}
                </h3>
              )}
              {subsection.notes && subsection.notes.length > 0 && (
                <ul className="space-y-2 border-l border-border pl-4">
                  {subsection.notes.map((note) => (
                    <li
                      key={note}
                      className="text-sm italic leading-relaxed text-muted"
                    >
                      {note}
                    </li>
                  ))}
                </ul>
              )}
              <SubsectionContent
                content={subsection.content}
                image={subsection.image}
              />
              {subsection.bullets && (
                <ul className="list-disc space-y-3 pl-5 text-muted">
                  {subsection.bullets.map((bullet) => (
                    <li key={bullet} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {section.images && section.images.length > 0 && (
            <ul
              className={`gap-6 pt-4 sm:gap-8 ${
                section.imagesLayout === "stack"
                  ? "flex flex-col gap-12"
                  : section.imagesLayout === "grid-3"
                    ? "grid items-start sm:grid-cols-3"
                    : "grid sm:grid-cols-2"
              }`}
            >
              {section.images.map((image) => (
                <li key={image.label} className="space-y-3">
                  {image.preContent && (
                    <p className="text-lg leading-relaxed text-muted">
                      {image.preContent}
                    </p>
                  )}
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt ?? image.label}
                      width={image.width ?? 1024}
                      height={image.height ?? 576}
                      className={`rounded-lg border border-border ${
                        section.imagesLayout === "grid-3" ||
                        image.aspectRatio === "portrait"
                          ? "mx-auto h-auto w-full max-w-[355px] object-contain object-top"
                          : "w-full"
                      }`}
                    />
                  ) : (
                    <ImagePlaceholder
                      label={image.label}
                      aspectRatio={image.aspectRatio ?? "video"}
                    />
                  )}
                  {image.caption && (
                    <p className="text-base leading-relaxed text-muted">
                      {image.caption}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {!project.sections?.some((section) => section.images?.length) && (
        <ImagePlaceholder
          label="Project screenshots or wireframes"
          aspectRatio="video"
          className="mb-16"
        />
      )}

      <section className="border-t border-border pt-12">
        <Link
          href="/contact"
          className="text-lg text-muted underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Get in touch
        </Link>
      </section>
    </main>
  );
}
