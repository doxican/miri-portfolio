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
        title: "Product and Service Designer",
        dates: "2023–Present",
        description:
          "Working with clients to define, design and deliver end-to-end digital services and products, from user research and service architecture through to wireframes, UI design, and design systems.",
        fullDescription:
          "Freelance practice working with government, health, and product-led organisations. For selected client work and project detail, see Notable Projects & Platforms below.",
      },
    ],
  },
  {
    company: "Department of Education",
    location: "Australia",
    roles: [
      {
        title: "Manager, Policy",
        dates: "2020–2022",
        description:
          "Designed and delivered two internal digital platforms serving 1,500+ users across the department, combining policy expertise with a user-centred approach to solve real operational problems.",
        fullDescriptionSections: [
          {
            title: "Platform 1 — School Asset Management Tool",
            description:
              "Designed an internal database for logging and tracking identified school defects, with integrated calendar and budget functionality to support management oversight and reporting. The platform replaced fragmented manual processes with a structured, searchable system that gave teams visibility across maintenance schedules and financial planning.",
          },
          {
            title: "Platform 2 — Approval Workflow Application",
            description:
              "Designed an end-to-end approval workflow application facilitating assessment, review, and sign-off stages for internal requests. The service reduced ambiguity at each handoff point and gave decision-makers a clear, auditable view of progression through the approval process.",
          },
        ],
      },
    ],
  },
];

const notableProjects = [
  {
    company: "London Borough of Hounslow",
    location: "London, UK",
    roles: [
      {
        title: "Service Designer — GovService Platform",
        dates: "2025–2026",
        highlights: [
          "Designed an end-to-end digital service to manage consultation and engagement projects across a central service team, covering intake through to publication.",
          "Mapped existing workflows and designed the service architecture, user journeys, and interface across multiple user roles within an established government platform.",
          "Developed a reporting dashboard giving teams real-time visibility of project stages, supporting accountability and decision-making across the organisation.",
        ],
        fullDescription:
          "Working within the constraints of an existing government platform, identified pain points across the team's fragmented manual processes and redesigned them as a structured, trackable digital workflow. The service reduced ambiguity at each handoff stage and gave leadership clear oversight of consultation activity across the organisation.",
      },
    ],
  },
  {
    company: "Chainhound",
    location: "Remote",
    roles: [
      {
        title: "UX/UI Designer",
        dates: "2024–2025",
        highlights: [
          "Designed lo-fi and hi-fi wireframes for an MVP dashboard aggregating data from over 100 blockchains into a single accessible platform.",
          "Developed a comprehensive design system and UI to support a product serving both first-time blockchain users and experienced professionals.",
          "Led feature identification and user story mapping to define scope and prioritise the core dashboard experience ahead of launch.",
        ],
        fullDescription:
          "Chainhound is a blockchain data aggregator bringing together insights from over 100 individual blockchains into one platform. Working across the full design process — from user stories and wireframes through to high-fidelity UI and design system — I shaped the MVP experience to make complex blockchain data approachable for new users while remaining useful to professionals. The product was designed with a clear growth path: a free dashboard at launch, expanding into premium content and an enterprise API for businesses needing integrated blockchain data.",
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
              <h3
                id="notable-projects"
                className="text-xl font-medium tracking-tight"
              >
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
