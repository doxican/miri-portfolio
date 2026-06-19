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
  roleSummary?: string;
  sections?: {
    title: string;
    content?: string | string[];
    subsectionHeading?: string;
    numberedSubsections?: boolean;
    subsections?: {
      title: string;
      content?: string | string[];
      bullets?: string[];
      image?: {
        label: string;
        src?: string;
        caption?: string;
        aspectRatio?: "square" | "video" | "portrait" | "wide";
        afterParagraph?: number;
      };
      notes?: string[];
    }[];
    subsectionGroups?: {
      heading: string;
      content?: string | string[];
      numberedSubsections?: boolean;
      subsections?: {
        title: string;
        content?: string | string[];
        bullets?: string[];
      }[];
      notes?: string[];
      tables?: {
        title: string;
        rows: {
          token: string;
          hex: string;
          swatch?: string;
          usage: string;
        }[];
      }[];
    }[];
    imagesLayout?: "grid" | "stack";
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
      "Chainhound is a blockchain information aggregator that brings data from 100+ individual blockchains into a single platform. It serves two audiences: first-time users navigating blockchain for the first time, and engaged enthusiasts who need a reliable reference tool for research and comparison.",
      "The MVP focused on delivering immediate, trustworthy access to key blockchain data — with a clear growth path toward proprietary ratings, premium content, and an enterprise API.",
    ],
    highlights: [],
    roleSummary:
      "Lo-fi and hi-fi wireframes · Feature prioritisation · User stories · UI design · Design system",
    sections: [
      {
        title: "The Problem",
        content: [
          "Blockchain information is scattered across project pages and technical whitepapers written for developers, not users. With over 1,000 active blockchains and 160 million people showing active interest in blockchain technology, finding reliable, comparable information is time-consuming and often inconclusive.",
          "Our research found that users spend 10+ hours researching blockchain information online — with half that time spent questioning whether what they found was accurate. No single platform existed to centralise, compare, and validate this data for everyday users.",
        ],
      },
      {
        title: "Research",
        content:
          "We validated the opportunity through desktop research, competitive analysis, and market sizing — looking at both who needed this and what already existed.",
        subsections: [
          {
            title: "Market opportunity",
            content:
              "74,000 people in the US alone search for blockchain information daily. The broader addressable audience is estimated at 160 million globally — a consistent demand signal with no purpose-built product to capture it.",
          },
          {
            title: "Competitive landscape",
            content: [
              "The closest competitors — CoinGecko, CoinMarketCap, Blockchair — aggregate coin data, not blockchain data. The distinction matters: users researching which blockchain to build on, invest in, or trust need infrastructure-level information that coin trackers don't provide.",
              "Niche players like DefiLlama (EVM chains only) and L2Beat (Layer 2 only) serve fragments of the space. No product covered blockchains comprehensively across layers, consensus mechanisms, and performance data — which defined Chainhound's positioning as a first-mover in blockchain-specific aggregation.",
            ],
          },
          {
            title: "User insight",
            content: [
              "Our target early adopter was Ezra — already engaged with blockchain but lacking a faster, more reliable way to research and compare chains to inform her investment decisions. Knowledgeable enough to know what she needed, but without a tool that could deliver it efficiently.",
              "The key insight driving all design decisions: users didn't need more information. They needed trustworthy, comparable information in one place.",
            ],
            image: {
              label: "Ezra — user persona",
              src: "/work/chainhound/ezra-persona.png",
              caption:
                "Ezra, our primary user persona — an engaged blockchain enthusiast who needs a faster, more reliable way to research and compare chains.",
              afterParagraph: 0,
            },
          },
        ],
      },
      {
        title: "Defining the MVP",
        content: [
          "The feature list covered a wide range of possibilities — comparison tools, trend charts, a blog, an enterprise API. Rather than building everything, I worked through a structured prioritisation exercise to define what the MVP needed to do, and what could wait.",
          "The MVP had one job: give a user like Ezra immediate, reliable access to blockchain information across 100+ chains, with enough structure to compare and evaluate them.",
        ],
        subsections: [
          {
            title: "What made the cut",
            bullets: [
              "Blockchain table with search and filter — the primary surface. Without this working well, nothing else matters. Users needed to scan, search by name or code, and filter by data type.",
              "Individual blockchain detail pages — once a user found a chain, they needed depth. Detail pages gave each blockchain a structured view of all available data.",
              "GDPR compliance (cookies, Privacy Policy, T&Cs) — required before any public launch.",
              "Google Analytics — needed from day one to understand how users actually navigated the product.",
            ],
          },
          {
            title: "What was deliberately left out",
            content:
              "Blockchain comparison, trending banners, blog content, and the enterprise API were all deferred to phase two. Without first proving users could find and trust the core data, premium features had no foundation.",
          },
        ],
      },
      {
        title: "Wireframes",
        content:
          "The wireframes were produced across two phases: Release 1 (the MVP) and a proposed V2 that extended the product once the core table was validated.",
        imagesLayout: "stack",
        images: [
          {
            label: "Release 1 — Landing page (top)",
            caption:
              "The dashboard: a searchable table of 100+ blockchains with columns for Code, Name, Layer, Consensus Mechanism, and EVM compatibility. Each row links to the blockchain's detail page. The nav is deliberately minimal — logo, Blockchains, Contact Us, search.",
          },
          {
            label: "Release 1 — Landing page (bottom)",
            caption:
              "The lower table continues with lower-priority chains (favourited/saved rows, placeholder data). A footer provides links to Blockchains, Terms of Service, Privacy Policy, Research & Factory, and Report an Issue.",
          },
          {
            label: "Release 1 — Blockchain details page",
            caption:
              "A two-column layout: Key Info on the left (Blockchain Name, Code, Layer, Consensus Mechanism, EVM compatibility, GitHub, Native Coin) and Project Documentation (website, whitepaper links) below it. A right-hand column shows trusted Explorers. A descriptive text panel summarises the blockchain in plain language.",
          },
          {
            label: "Release 1 — Terms of Service & Privacy Policy",
            caption:
              "A single scrollable legal page, accessible from the footer. Required for GDPR compliance before public launch.",
          },
          {
            label: "Release 1 — Contact page",
            caption:
              "Minimal: a short paragraph directing users to get in touch, with links to X (Twitter) and LinkedIn.",
          },
          {
            label: "V2 — Enhanced landing page",
            caption:
              "The table gains three new proprietary columns: Security Rating, Reliability Rating, and Performance Rating — each displayed as a letter badge (A–D) colour-coded green to red. A filter toggle and favouriting system were also introduced, alongside an expanded nav including Consensus Mechanisms, Layers, Ratings, API, and News.",
          },
          {
            label: "V2 — Blockchain details with metrics",
            caption:
              "The detail page expands significantly: live status indicators, a metrics dashboard (Blockchain Speed, Network Fees, Transactions/Events charts with adjustable time ranges), Assets/TVL, Active Addresses, Rating Justifications with explanatory links, and an Ecosystem section showing related chains.",
          },
        ],
      },
      {
        title: "Design System & Takeaways",
        subsectionGroups: [
          {
            heading: "Design system",
            content:
              "One of the core decisions early in the project was to build a design system before producing high-fidelity screens. Working on a data-heavy product with multiple surfaces — dashboard, detail pages, dark mode, and responsive breakpoints — meant that without a system, visual consistency would break down quickly.",
            tables: [
              {
                title: "Colour palette",
                rows: [
                  {
                    token: "Orange",
                    hex: "#EA7B33",
                    swatch: "#EA7B33",
                    usage: "Primary brand, logo, active nav state, CTA",
                  },
                  {
                    token: "Gray",
                    hex: "#4D4D4D",
                    swatch: "#4D4D4D",
                    usage: "Body text, secondary UI",
                  },
                  {
                    token: "Rating A",
                    hex: "Green",
                    swatch: "#22c55e",
                    usage: "Top-tier security, reliability, performance",
                  },
                  {
                    token: "Rating B",
                    hex: "Blue",
                    swatch: "#3b82f6",
                    usage: "Good — above average",
                  },
                  {
                    token: "Rating C",
                    hex: "Amber",
                    swatch: "#f59e0b",
                    usage: "Average — watch this chain",
                  },
                  {
                    token: "Rating D",
                    hex: "Red",
                    swatch: "#ef4444",
                    usage: "Below average — caution",
                  },
                ],
              },
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
