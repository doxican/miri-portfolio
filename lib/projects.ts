export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  dates: string;
  location: string;
  overview: string | string[];
  highlights: string[];
  sections?: {
    title: string;
    content?: string | string[];
    subsectionHeading?: string;
    numberedSubsections?: boolean;
    subsections?: {
      title: string;
      content?: string | string[];
      bullets?: string[];
    }[];
    subsectionGroups?: {
      heading: string;
      content?: string | string[];
      numberedSubsections?: boolean;
      subsections: {
        title: string;
        content?: string | string[];
        bullets?: string[];
      }[];
      notes?: string[];
    }[];
    images?: {
      label: string;
      caption?: string;
      aspectRatio?: "square" | "video" | "portrait" | "wide";
    }[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "hounslow-govservice",
    title: "London Borough of Hounslow",
    subtitle: "Service design for a government consultation platform",
    client: "London Borough of Hounslow",
    role: "Service Designer — GovService Platform",
    dates: "2025–2026",
    location: "London, UK",
    overview:
      "Designed an end-to-end digital service to manage consultation and engagement projects across a central service team, covering intake through to publication.",
    highlights: [
      "Designed an end-to-end digital service to manage consultation and engagement projects across a central service team, covering intake through to publication.",
      "Mapped existing workflows and designed the service architecture, user journeys, and interface across multiple user roles within an established government platform.",
      "Developed a reporting dashboard giving teams real-time visibility of project stages, supporting accountability and decision-making across the organisation.",
    ],
    sections: [
      {
        title: "Context",
        content:
          "Working within the constraints of an existing government platform, identified pain points across the team's fragmented manual processes and redesigned them as a structured, trackable digital workflow.",
      },
      {
        title: "Outcome",
        content:
          "The service reduced ambiguity at each handoff stage and gave leadership clear oversight of consultation activity across the organisation.",
      },
    ],
  },
  {
    slug: "chainhound",
    title: "Chainhound",
    subtitle: "Blockchain information aggregator",
    client: "Chainhound",
    role: "UX/UI Designer",
    dates: "2024–2025",
    location: "Remote",
    overview: [
      "Chainhound is a blockchain information aggregator designed to bring together data from over 100 individual blockchains into a single, accessible platform. The product serves both first-time users navigating blockchain for the first time and experienced enthusiasts looking for a reliable reference tool, all through a dashboard that simplifies the exploration of complex blockchain data.",
      "The MVP focused on delivering a user-friendly dashboard providing immediate access to key blockchain details, with a clear growth path toward premium content and an enterprise API for business users.",
    ],
    highlights: [
      "Lo-fi and hi-fi wireframes",
      "Feature identification",
      "User stories",
      "UI design",
      "Design system",
    ],
    sections: [
      {
        title: "The Problem",
        content: [
          "Blockchain information is scattered across project pages and technical whitepapers filled with jargon that most users find inaccessible. With over 1,000 active blockchains and an estimated 160 million people showing interest in blockchain technology, finding reliable, comparable information is time-consuming and often results in outdated data.",
          "Our research found that users spend 10+ hours researching blockchain information online — with half that time spent questioning whether the information they found was even accurate. No single platform existed to centralise, compare, and validate this data for everyday users.",
        ],
      },
      {
        title: "Research & Insights",
        content:
          "To validate the problem and define the opportunity, we conducted both top-down and bottom-up market analysis alongside desktop research and competitive analysis.",
        subsections: [
          {
            title: "Market opportunity",
            content:
              "The blockchain industry is in a period of exponential growth, with an identified audience of 160 million people online showing active interest in blockchain information. In the US alone, 74,000 users search for blockchain information daily — signalling strong and consistent demand for a centralised, reliable resource.",
          },
          {
            title: "Competitive landscape",
            content:
              "Existing products in the space offer fragmented solutions — educational content, newsletters, Discord communities, and occasional deep-dives on a handful of chains. None provided a comprehensive, comparable view across blockchains at scale. This gap validated both the need for Chainhound and the opportunity to be first to market with a purpose-built aggregator.",
          },
          {
            title: "User insight",
            content:
              "Our target early adopter was Ezra — already engaged with blockchain but seeking a faster, more reliable way to research, compare, and evaluate chains to inform her investment decisions. Ezra represented a broader segment of users who were motivated but underserved: knowledgeable enough to know what they needed, but lacking a tool that could deliver it efficiently.",
          },
          {
            title: "Key insight driving design",
            content:
              "Users didn't just need more information — they needed trustworthy, comparable information in one place. Every design decision for the dashboard flowed from this.",
          },
        ],
      },
      {
        title: "Defining the MVP",
        content: [
          "With a clear problem established, the challenge was deciding what to build first. The feature list covered a wide range of possibilities — from comparison tools and trend charts to blog sections and an enterprise API. Rather than building everything, I worked through a structured prioritisation exercise to define what the MVP needed to do, and what could wait.",
          "The MVP had one job: give a user like Ezra immediate, reliable access to blockchain information across 100+ chains, with enough structure to compare and evaluate them. Everything else was phase two.",
        ],
        subsections: [
          {
            title: "Core MVP features and why they made the cut",
            bullets: [
              "Blockchain table with searchable, filterable data — The primary surface of the product. Without this working well, nothing else matters. Users needed to scan, search by name or code, and filter by data type to find what they were looking for quickly.",
              "Individual blockchain detail pages — Once a user found a chain, they needed depth. Detail pages gave each blockchain its own structured view of all available data points.",
              "Search and filter functionality — Critical for usability at scale. With 100+ chains in the table, an unfiltered list would be overwhelming. This was non-negotiable for the MVP.",
              "GDPR compliance (cookies, Privacy Policy & T&Cs) — Required before any public launch, not optional.",
              "Google Analytics — Needed from day one to understand how users were actually navigating the product.",
            ],
          },
          {
            title: "What was deliberately left out of the MVP",
            content:
              "Features like blockchain comparison, trending banners, blog content, and the enterprise API were all scoped to phase two. The reasoning was simple — without first proving that users could find and trust the core data, premium features had no foundation to stand on.",
          },
          {
            title: "Competitive reference",
            content:
              "As part of scoping the MVP, I audited existing products in the space — including DefiLlama, L2Beat, and Blockchair — mapping their features against basic user expectations and what our users would actually want. This helped validate our feature decisions and identify where Chainhound could differentiate rather than simply replicate.",
          },
        ],
      },
      {
        title: "Wireframes",
        images: [
          {
            label: "Wireframe 1",
            caption: "Add a short description of this wireframe.",
          },
          {
            label: "Wireframe 2",
            caption: "Add a short description of this wireframe.",
          },
          {
            label: "Wireframe 3",
            caption: "Add a short description of this wireframe.",
          },
          {
            label: "Wireframe 4",
            caption: "Add a short description of this wireframe.",
          },
          {
            label: "Wireframe 5",
            caption: "Add a short description of this wireframe.",
          },
          {
            label: "Wireframe 6",
            caption: "Add a short description of this wireframe.",
          },
        ],
      },
      {
        title: "Design System & Takeaways",
        subsectionGroups: [
          {
            heading: "Design System",
            content: [
              "One of the core decisions early in the project was to build a design system before producing high-fidelity screens. Working on a data-heavy product with multiple surfaces — dashboard, detail pages, dark mode, and responsive breakpoints — meant that without a system, visual consistency would break down quickly.",
              "The system was built in Figma and covered four areas:",
            ],
            subsections: [
              {
                title: "Components",
                content:
                  "All reusable UI elements were built as Figma components with documented variants. The header was designed as a base component with responsive breakpoints defined across five sizes — 2XL (1536px), XL (1280px), LG (992px), and down to mobile — with the navigation collapsing to icon-only at smaller screens. Both light and dark mode variants were built into the component, toggled via the dark mode switch.",
              },
              {
                title: "Responsive layout",
                content:
                  "Every component was documented with its breakpoint behaviour, ensuring the design could scale across screen sizes without bespoke decisions at each breakpoint.",
              },
              {
                title: "Dark mode",
                content:
                  "A full dark mode variant was built in parallel with the light mode, using a consistent token structure so that switching themes required no redesign — only a colour swap.",
              },
            ],
            notes: [
              "Add colour palette — primary orange, neutrals, semantic greens for rating badges",
              "Add typography scale — font family, size scale, weight usage",
            ],
          },
          {
            heading: "What I learned",
            numberedSubsections: true,
            subsections: [
              {
                title: "Prioritisation is a design decision.",
                content:
                  "The feature list for Chainhound was extensive. Deciding what made the MVP and what didn't required the same thinking as any UX problem — understanding what the user actually needed at this moment, not what would be impressive to build. Scoping down to the core table, search, and detail page meant the MVP could do a few things well rather than many things poorly.",
              },
              {
                title: "Designing for data density requires its own discipline.",
                content:
                  "A dashboard showing 100+ blockchains across multiple data columns is inherently complex. The challenge wasn't adding information — it was making dense data feel approachable. The rating badge system (Security, Performance, Reliability) was a direct response to this: translating raw data into scannable signals that a first-time user could understand instantly.",
              },
              {
                title: "A design system pays off immediately.",
                content:
                  "Building a full design system for an MVP felt like extra work at the time. In practice it meant every screen — table, detail page, dark mode — stayed visually consistent without having to make the same decisions twice. For a solo designer working at speed, it was the most efficient thing I did.",
              },
              {
                title: "What I'd do differently.",
                content:
                  "I'd invest more time in user testing the table columns earlier. The data points we chose to surface were based on competitive analysis and assumptions about what users needed — but validating those choices with real users before hi-fi would have sharpened the decisions significantly.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "education-asset-management",
    title: "School Asset Management Tool",
    subtitle: "Internal platform design for the Department of Education",
    client: "Department of Education",
    role: "Manager, Policy",
    dates: "2020–2022",
    location: "Australia",
    overview:
      "Designed an internal database for logging and tracking identified school defects, with integrated calendar and budget functionality to support management oversight and reporting.",
    highlights: [
      "Designed an internal database for logging and tracking identified school defects.",
      "Integrated calendar and budget functionality to support management oversight and reporting.",
      "Replaced fragmented manual processes with a structured, searchable system serving 1,500+ users.",
    ],
    sections: [
      {
        title: "Outcome",
        content:
          "The platform gave teams visibility across maintenance schedules and financial planning, replacing fragmented manual processes with a structured, searchable system.",
      },
    ],
  },
  {
    slug: "education-approval-workflow",
    title: "Approval Workflow Application",
    subtitle: "End-to-end workflow design for internal requests",
    client: "Department of Education",
    role: "Manager, Policy",
    dates: "2020–2022",
    location: "Australia",
    overview:
      "Designed an end-to-end approval workflow application facilitating assessment, review, and sign-off stages for internal requests.",
    highlights: [
      "Designed an end-to-end approval workflow across assessment, review, and sign-off stages.",
      "Reduced ambiguity at each handoff point in the approval process.",
      "Gave decision-makers a clear, auditable view of progression through internal requests.",
    ],
    sections: [
      {
        title: "Outcome",
        content:
          "The service reduced ambiguity at each handoff point and gave decision-makers a clear, auditable view of progression through the approval process.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
