import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ColourPaletteTable from "@/components/ColourPaletteTable";
import SubsectionContent from "@/components/SubsectionContent";
import CaseStudyImageCarousel from "@/components/CaseStudyImageCarousel";
import DesignChoicesAccordion from "@/components/DesignChoicesAccordion";
import { getProject, projects } from "@/lib/projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

function FigmaFileLink({
  href,
  label,
  lead = "See the full Figma file",
}: {
  href: string;
  label: string;
  lead?: string;
}) {
  return (
    <p className="text-lg leading-relaxed text-muted">
      {lead}{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline underline-offset-4 transition-colors hover:opacity-70"
      >
        {label}
      </a>
      .
    </p>
  );
}

function renderTextWithLinks(
  text: string,
  links?: { text: string; href: string }[],
) {
  if (!links?.length) {
    return text;
  }

  let parts: Array<string | ReactNode> = [text];

  for (const link of links) {
    const nextParts: Array<string | ReactNode> = [];

    for (const part of parts) {
      if (typeof part !== "string") {
        nextParts.push(part);
        continue;
      }

      const index = part.indexOf(link.text);
      if (index === -1) {
        nextParts.push(part);
        continue;
      }

      if (index > 0) {
        nextParts.push(part.slice(0, index));
      }

      nextParts.push(
        <a
          key={`${link.href}-${index}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4 transition-colors hover:opacity-70"
        >
          {link.text}
        </a>,
      );

      const rest = part.slice(index + link.text.length);
      if (rest) {
        nextParts.push(rest);
      }
    }

    parts = nextParts;
  }

  return parts;
}

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
          {section.link && section.imagesLayout !== "accordion" && (
            <FigmaFileLink
              href={section.link.href}
              label={section.link.label}
              lead={section.link.lead}
            />
          )}
          {section.bullets && (
            <ul className="list-disc space-y-3 pl-5 text-muted">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="text-lg leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          )}
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
                <FigmaFileLink
                  href={group.link.href}
                  label={group.link.label}
                />
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
          {!section.subsectionGroups && section.subsections && (
            <div
              className={
                section.subsectionHeading
                  ? "border-l border-border pl-4 sm:pl-5"
                  : undefined
              }
            >
              {section.subsectionHeading && (
                <h3 className="pt-2 text-lg font-medium tracking-tight">
                  {section.subsectionHeading}
                </h3>
              )}
              {section.subsections.map((subsection, index) => (
            <div key={subsection.title} className="space-y-3 pt-2">
              {section.subsectionHeading && section.numberedSubsections ? (
                <p className="text-lg leading-relaxed text-muted">
                  {index + 1}. {subsection.title}{" "}
                  {renderTextWithLinks(
                    Array.isArray(subsection.content)
                      ? subsection.content.join(" ")
                      : (subsection.content ?? ""),
                    subsection.inlineLinks,
                  )}
                </p>
              ) : (
                <>
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
                </>
              )}
              {subsection.link && (
                <FigmaFileLink
                  href={subsection.link.href}
                  label={subsection.link.label}
                />
              )}
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
            </div>
          )}
          {section.imagesHeading && (
            <h3 className="pt-6 text-lg font-medium tracking-tight">
              {section.imagesHeading}
            </h3>
          )}
          {section.imagesLayout === "accordion" && section.imagesItems ? (
            <>
              <DesignChoicesAccordion items={section.imagesItems} />
              {section.link && (
                <FigmaFileLink
                  href={section.link.href}
                  label={section.link.label}
                  lead={section.link.lead}
                />
              )}
            </>
          ) : (
            section.imagesItems?.map((item, index) => {
              const paragraphs = Array.isArray(item.content)
                ? item.content
                : [item.content];
              const singleParagraph = paragraphs.length === 1;

              return (
                <div
                  key={item.title ?? `images-item-${index}`}
                  className="space-y-3 pt-2"
                >
                  <p className="text-lg leading-relaxed text-muted">
                    {index + 1} ·{" "}
                    {item.title
                      ? `${item.title}${singleParagraph ? ` ${paragraphs[0]}` : ""}`
                      : paragraphs.join(" ")}
                  </p>
                  {item.title &&
                    !singleParagraph &&
                    paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-lg leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              );
            })
          )}
          {section.imagesLayout !== "accordion" &&
            section.images &&
            section.images.length > 0 && (
            section.imagesLayout === "carousel" ? (
              <CaseStudyImageCarousel images={section.images} />
            ) : (
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
                    <p className="mt-6 text-base leading-relaxed text-muted">
                      {image.caption}
                    </p>
                  )}
                </li>
              ))}
            </ul>
            )
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

      {project.figmaLink && (
        <section className="mb-16">
          <FigmaFileLink
            href={project.figmaLink.href}
            label={project.figmaLink.label}
          />
        </section>
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
