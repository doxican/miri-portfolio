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
  coverImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  figmaLink?: {
    href: string;
    label: string;
  };
  sections?: {
    title: string;
    content?: string | string[];
    notes?: string[];
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
      link?: {
        href: string;
        label: string;
      };
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
      images?: {
        label: string;
        src: string;
        alt: string;
        width: number;
        height: number;
      }[];
      link?: {
        href: string;
        label: string;
      };
    }[];
    imagesLayout?: "grid" | "grid-3" | "stack";
    images?: {
      label: string;
      caption?: string;
      preContent?: string;
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
      aspectRatio?: "square" | "video" | "portrait" | "wide";
    }[];
  }[];
};

const MEDISAFE_FIGMA_LINK = {
  href: "https://www.figma.com/design/fP6a3C5JwHZBgfXbxikAgG/MediSafe-Health-Insurance?node-id=3-3&t=t4mRs2o4bHx8bqLe-1",
  label: "here",
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
    coverImage: {
      src: "/work/chainhound/hero.png",
      alt: "Chainhound landing page — blockchain comparison dashboard",
      width: 1024,
      height: 702,
    },
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
        notes: [
          "Write a little introduction for this section — replace this note when ready.",
        ],
        imagesLayout: "stack",
        images: [
          {
            label: "Release 1 — Landing page (top)",
            src: "/work/chainhound/wireframe-landing-top.png",
            alt: "Wireframe of the Chainhound landing page with blockchain comparison table",
            width: 1024,
            height: 619,
            caption:
              "The dashboard: a searchable table of 100+ blockchains with columns for Code, Name, Layer, Consensus Mechanism, and EVM compatibility. Each row links to the blockchain's detail page. The nav was kept deliberately minimal with intention to expand in future releases. This wireframe shows V2.",
          },
          {
            label: "Release 1 — Blockchain details page",
            src: "/work/chainhound/wireframe-blockchain-details.png",
            alt: "Wireframe of the Chainhound blockchain details page for Bitcoin",
            width: 595,
            height: 561,
            caption:
              "A two-column layout: Key Info on the left (Blockchain Name, Code, Layer, Consensus Mechanism, EVM compatibility, GitHub, Native Coin) and Project Documentation (website, whitepaper links) below it. A right-hand column shows trusted Explorers. A descriptive text panel summarises the blockchain in plain language.",
          },
          {
            label: "V2 — Enhanced landing page",
            src: "/work/chainhound/hero.png",
            alt: "Chainhound V2 landing page hi-fi with hero section and ratings table",
            width: 1024,
            height: 702,
            preContent:
              "With the core information architecture mapped out, the team reviewed the wireframes together to align on direction and agree the future state of the product. In parallel, I used Twitter, Farcaster, and Reddit to understand what features the blockchain community cared about — what data they wanted, what was missing from existing tools, and what would make them return. Both fed into the hi-fi design decisions.",
            caption:
              "The landing page hi-fi introduced a condensed navigation with a dropdown for Blockchains, a hero section with a headline and clear call-to-action, and the ratings table below the fold. The goal was to lead with product value before asking users to engage with data.",
          },
          {
            label: "V2 — Blockchain details with metrics",
            src: "/work/chainhound/wireframe-v2-blockchain-details.png",
            alt: "Chainhound V2 blockchain details page hi-fi for Bitcoin",
            width: 1024,
            height: 709,
            caption:
              "The hi-fi brings the lo-fi structure to life with formatting and the brand system applied — consistent typography, orange used for links and active states, and the layout properly spaced. The content and hierarchy stays largely the same; it's now just built to a standard ready for development.",
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
            images: [
              {
                label: "Table rows",
                src: "/work/chainhound/design-system-table-rows.png",
                alt: "Chainhound design system — table row styles and rating badges",
                width: 1024,
                height: 536,
              },
              {
                label: "Buttons",
                src: "/work/chainhound/design-system-buttons.png",
                alt: "Chainhound design system — button variants and states",
                width: 952,
                height: 1024,
              },
            ],
            link: {
              href: "https://www.figma.com/design/Aywnn9idx5yykKkmJN81wM/Chainhound-Website?m=auto&t=AKSCwWgcQ4KFXQfA-6",
              label: "here",
            },
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
  {
    slug: "medisafe",
    title: "Medisafe (RMIT course project)",
    subtitle: "Two-factor authentification for a healthcare account portal",
    client: "RMIT University",
    role: "UX/UI Designer",
    dates: "Course project",
    location: "Melbourne, Australia",
    overview: [
      "Medisafe Australia's account portal had one job for years: let members manage their health insurance online. New federal legislation changed that overnight — customer-facing platforms handling sensitive data now had to implement Two-Factor Authentication, with an eight-week window to comply.",
      "This case study covers the design process behind that 2FA rollout: how a compliance deadline got translated into a system that's actually secure and usable, the trade-offs made to hit an 8-week window, and what testing told us we got wrong the first time.",
    ],
    roleSummary:
      "Current-state audit · Design system · Wireframes and flow mapping · Hi-fi UI design · Usability testing and iteration",
    highlights: [],
    coverImage: {
      src: "/work/medisafe/hero.png",
      alt: "MediSafe UI screens — 2FA email verification, welcome pop-up, and dashboard",
      width: 1113,
      height: 768,
    },
    figmaLink: MEDISAFE_FIGMA_LINK,
    sections: [
      {
        title: "Context",
        content:
          "This project follows the Double Diamond — Discover, Define, Develop, Deliver — moving from a broad assessment of an existing system to a tested design solution.",
      },
      {
        title: "Discover",
        content: [
          "New federal legislation made 2FA mandatory for any platform holding customer health data, with an eight-week deadline to comply. Walking Medisafe's existing login and account-recovery flow showed verification relying on security questions and date of birth: static and reactive by design.",
          "Noting that Medisafe holds health data that people guard closely, I understood that the legislation sets a compliance floor — but the real question for me was how to ensure patients' trust in the platform. There are multiple ways to implement 2FA and I wanted to know which option is the most effective for this client.",
        ],
      },
      {
        title: "Define",
        subsections: [
          {
            title: "Weighing the options",
            content: [
              "Three authentication routes were on the table — SMS one-time codes, an authenticator app, and email-based verification — and each was assessed against the same four criteria: security, cost, user familiarity, and regulatory compliance.",
            ],
            image: {
              label: "2FA & MediSafe — email-based verification rationale and UI",
              src: "/work/medisafe/email-as-2fa-hi-res.png",
              afterParagraph: 0,
            },
          },
          {
            title: "Scoping the MVP to eight weeks",
            content:
              "The full wishlist of features included compliance-monitoring dashboards and deeper customer-support tooling. Both were deliberately pushed to backlog. The MVP had to do exactly two things well: get a member through mandatory 2FA with zero setup on their end, and make sure the rest of the portal — claims, plan details — stayed just as easy to reach as before.",
          },
        ],
      },
      {
        title: "Develop",
        subsections: [
          {
            title: "Design system",
            content:
              "Rather than jumping straight to hi-fi screens, the project started with a small system: a blue palette (trust, calm — deliberately in the same territory as established health insurers), Manrope for typography (clean at small sizes, which matters when a lot of this UI is one-time codes and short-lived prompts), and a documented set of buttons, inputs, tiles and nav patterns before any screen was drawn.",
            link: MEDISAFE_FIGMA_LINK,
          },
          {
            title: "Mapping the full flow, not just the happy path",
            content:
              "The core path — landing page, login, 2FA, profile, claims — was mapped end to end before any hi-fi design, including the states that don't make it into most decks: error, empty, loading and partial/incomplete-signup states alongside the ideal flow.",
          },
        ],
        imagesLayout: "stack",
        images: [
          {
            label: "Full flow wireframes — ideal path, error, loading, empty, and partial states",
            src: "/work/medisafe/wireframes-full-flow.png",
            alt: "MediSafe wireframe flow map showing landing page, login, 2FA, profile, claims, and edge-case states",
            width: 1024,
            height: 823,
          },
        ],
      },
      {
        title: "The UI solution",
        content: [
          "The 2FA screen itself is deliberately quiet: \"Check your email,\" a resend timer, a support link if the code doesn't show up. No new account setup is required on the user's end.",
          "On first login post-launch, a short welcome pop-up explains what's changed and why, with an immediate Skip option for anyone who doesn't want the tour.",
          "The dashboard keeps Account, Plan and Claims exactly where they were, with a \"See all\" pattern added to Claims so it doesn't get lost under the new security layer.",
        ],
        imagesLayout: "grid-3",
        images: [
          {
            label: "2FA — Check your email",
            src: "/work/medisafe/check-your-email.png",
            alt: "MediSafe 2FA screen with email verification code entry",
            width: 318,
            height: 688,
            aspectRatio: "portrait",
          },
          {
            label: "Welcome pop-up",
            src: "/work/medisafe/welcome-popup.png",
            alt: "MediSafe welcome pop-up explaining email verification on first login",
            width: 323,
            height: 698,
            aspectRatio: "portrait",
          },
          {
            label: "Dashboard — See all",
            src: "/work/medisafe/dashboard-see-all.png",
            alt: "MediSafe dashboard with Account, Plan, and Claims see-all pattern",
            width: 355,
            height: 768,
            aspectRatio: "portrait",
          },
        ],
      },
      {
        title: "Deliver",
        content: [
          "Development followed Agile, scoped as four two-week sprints across the eight-week deadline — compliant core first, support and monitoring tooling held as backlog. The delivery was structured to be agile to ensure development could stay adaptable within a tight deadline, rather than locking in one static build from week one.",
          "For version two, features like a resend timer and support button on the 2FA code screen, a reorganised claims dashboard, and AI live chat with a screen-reader option were suggested as post-launch improvements to build on the MVP.",
          "Alongside this, the release was paired with a go-to-market plan (email campaign, portal updates, phased pre-launch/launch/post-launch) — part of the assessment, but not the focus of this case study.",
        ],
      },
      {
        title: "Reflection",
        content: [
          "For me, 2FA wasn't something to keep reassessing — it's the standard now, and I treated it as a given rather than a question to debate. What I was really solving for was implementation within the context of this specific client: an existing, trusted product where I couldn't afford to change the UI too much, and where customers needed careful onboarding so the new step didn't land as a surprise or a frustration.",
          "Starting with lo-fi wireframes was the right call to get going — it let me get the structure and flow down without getting attached to details too early. Once I had the design system in place, moving into mid-fi and hi-fi was easy; the groundwork meant I wasn't making the same decisions twice.",
          "What I'd do differently: I'd want to run user testing to actually see the flow play out in real life and get real feedback, rather than relying on my own assumptions about where it would land well or badly.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
