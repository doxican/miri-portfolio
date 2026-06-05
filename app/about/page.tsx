import type { Metadata } from "next";
import Link from "next/link";
import CertificateCard from "@/components/CertificateCard";
import EmploymentEntry from "@/components/EmploymentEntry";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import NotableProjectEntry from "@/components/NotableProjectEntry";

export const metadata: Metadata = {
  title: "About me",
  description: "Background, experience, and certifications.",
};

const employmentHistory = [
  {
    company: "Freelancer",
    type: "Self-employed",
    location: "Remote",
    roles: [
      {
        title: "Product Designer",
        dates: "Jan 2020 - Present",
        description:
          "Placeholder description. Summarize your focus areas, the types of products you work on, and how you partner with teams.",
      },
    ],
  },
];

const notableProjects = [
  {
    company: "Company Name",
    location: "City, Country",
    roles: [
      {
        title: "Senior Product Designer",
        dates: "2022 - Present",
        highlights: [
          "Placeholder highlight about a key project outcome.",
          "Placeholder highlight about research, design, or delivery work.",
          "Placeholder highlight about cross-functional collaboration.",
        ],
      },
    ],
  },
  {
    company: "Another Company",
    location: "City, Country",
    roles: [
      {
        title: "UX Researcher",
        dates: "2020 - 2022",
        highlights: [
          "Placeholder highlight about user research methods used.",
          "Placeholder highlight about insights that shaped product decisions.",
          "Placeholder highlight about impact on the team or product.",
        ],
      },
    ],
  },
];

const certificates = [
  { name: "Certificate name", issuer: "Issuing organization" },
  { name: "Certificate name", issuer: "Issuing organization" },
  { name: "Certificate name", issuer: "Issuing organization" },
  { name: "Certificate name", issuer: "Issuing organization" },
];

export default function About() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-20">
      <section className="mb-20 grid gap-12 md:grid-cols-[1fr_280px] md:items-start">
        <header className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            I&apos;m Miri
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m a product and service designer with a background in public
              policy and government services. I design digital experiences that
              are intuitive, accessible, and grounded in real user needs —
              drawing on years of working inside the systems I now help
              redesign.
            </p>
            <p>
              Before moving fully into design, I spent several years as a policy
              officer at the Department of Education, leading digital
              transformation projects and shaping services used by school
              leaders, staff, and communities. That experience taught me how to
              navigate complexity, work across stakeholders, and design with
              both the user and the system in mind.
            </p>
            <p>
              I&apos;m currently focused on service design, dashboards, and
              digital apps — particularly for government and public sector
              organisations where good design genuinely changes people&apos;s
              lives.
            </p>
          </div>
        </header>

        <ImagePlaceholder
          label="Profile photo placeholder"
          aspectRatio="square"
        />
      </section>

      <section aria-labelledby="experience-heading">
        <h2
          id="experience-heading"
          className="mb-12 text-2xl font-medium tracking-tight"
        >
          Experience
        </h2>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start lg:gap-16">
          <div className="space-y-16">
            <div className="space-y-6">
              <h3 className="text-xl font-medium tracking-tight">
                Employment History
              </h3>
              <div>
                {employmentHistory.map((entry) => (
                  <EmploymentEntry key={entry.company} {...entry} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium tracking-tight">
                Notable Projects &amp; Platforms
              </h3>
              <p className="max-w-3xl text-muted">
                List below includes some notable freelance/contract positions and
                platform memberships. For additional details you can download my
                full resume.
              </p>
              <div>
                {notableProjects.map((entry) => (
                  <NotableProjectEntry key={entry.company} {...entry} />
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-xl border border-border bg-placeholder/30 p-6">
              <h3 className="mb-4 text-xl font-medium tracking-tight">
                Certificates
              </h3>
              <ul className="divide-y divide-border">
                {certificates.map((certificate, index) => (
                  <CertificateCard
                    key={`${certificate.name}-${index}`}
                    {...certificate}
                  />
                ))}
              </ul>
            </div>
          </aside>
        </div>
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
