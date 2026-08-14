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
    bullets?: string[];
    link?: {
      href: string;
      label: string;
      lead?: string;
    };
    notes?: string[];
    subsectionHeading?: string;
    numberedSubsections?: boolean;
    collapsibleSubsections?: boolean;
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
      inlineLinks?: {
        text: string;
        href: string;
      }[];
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
      imagesLayout?: "stack" | "carousel";
      link?: {
        href: string;
        label: string;
      };
    }[];
    imagesLayout?: "grid" | "grid-3" | "stack" | "carousel" | "accordion";
    imagesHeading?: string;
    imagesItems?: {
      title?: string;
      content: string | string[];
      image?: {
        label: string;
        src?: string;
        alt?: string;
        width?: number;
        height?: number;
        aspectRatio?: "square" | "video" | "portrait" | "wide";
      };
      images?: {
        label: string;
        src?: string;
        alt?: string;
        width?: number;
        height?: number;
        aspectRatio?: "square" | "video" | "portrait" | "wide";
      }[];
    }[];
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
    carouselLead?: string;
    carouselImages?: {
      label: string;
      caption?: string;
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
      aspectRatio?: "square" | "video" | "portrait" | "wide";
    }[];
    extraGalleries?: {
      heading: string;
      images: {
        label: string;
        caption?: string;
        src?: string;
        alt?: string;
        width?: number;
        height?: number;
        aspectRatio?: "square" | "video" | "portrait" | "wide";
      }[];
    }[];
  }[];
};

const MEDISAFE_FIGMA_LINK = {
  href: "https://www.figma.com/design/fP6a3C5JwHZBgfXbxikAgG/MediSafe-Health-Insurance?node-id=3-3&t=t4mRs2o4bHx8bqLe-1",
  label: "here",
};

export const projects: Project[] = [
  {
    slug: "pilates-by-bryony",
    title: "Pilates by Bryony",
    subtitle: "App & website UI/UX study",
    client: "Self-initiated practice project",
    role: "UI/UX Designer",
    dates: "2024–2025",
    location: "Remote",
    overview: [
      "A self-initiated UI/UX practice project designed to simulate the brief a real fitness subscription platform might bring to a product designer. Working from the existing Pilates by Bryony brand, I designed a complete iOS app and desktop website — from first touchpoint to paying subscriber — to develop my skills across complex content systems, subscription flows, and cross-surface design.",
    ],
    roleSummary:
      "UI/UX Designer (practice project) · Figma · 15 iOS screens · full desktop homepage · 13 documented interaction patterns",
    highlights: [],
    coverImage: {
      src: "/work/pilates-by-bryony/hero.png",
      alt: "Pilates by Bryony — hero image with studio photography",
      width: 1024,
      height: 665,
    },
    sections: [
      {
        title: "The design challenge",
        content: [
          "Fitness creators with large content libraries face a specific problem: how do you make hundreds of videos feel organised and accessible rather than overwhelming? And how do you convert a casual visitor into a committed subscriber before they leave?",
          "The challenge was to design a platform that felt as intuitive as Netflix, as premium as the brand, and as persuasive as a well-crafted sales page — across both mobile and desktop.",
        ],
      },
      {
        title: "Scope of work",
        bullets: [
          "15 iOS app screens covering the full user journey: welcome, plan selection, App Store payment flow, account creation, home, search, library, settings, video detail, collection detail, and overlay interactions",
          "Full desktop homepage from hero to footer",
          "Interaction notes documenting 13 distinct UI patterns for a realistic design handoff",
        ],
      },
      {
        title: "Key design areas",
        imagesLayout: "accordion",
        imagesItems: [
          {
            title: "Subscription and onboarding",
            content:
              "The welcome screen presents two clear paths — start a free trial or explore content — reducing the decision to its simplest form. The plan selection and App Store payment screens were designed to minimise friction at the highest drop-off moment. Account creation includes a newsletter consent checkbox with a red error state for incomplete submission.",
            image: {
              label:
                "Welcome screen, plan selection, App Store payment, and account creation flow",
              src: "/work/pilates-by-bryony/onboarding-mockup.png",
              alt: "Pilates by Bryony iOS mockups — welcome, plan selection, and App Store payment flow",
              width: 1366,
              height: 768,
              aspectRatio: "wide",
            },
          },
          {
            title: "Content discovery",
            content:
              "The home screen organises a library of 600+ classes into scannable horizontal rows — by duration, body type, equipment, challenge, instructor, nutrition, and series. A hero banner with page dots surfaces featured and new content. The search screen adds a filter pill for users who know what they want.",
            image: {
              label:
                "Home screen with category rows, hero banner, and search with filter pill",
              src: "/work/pilates-by-bryony/content-discovery.png",
              alt: "Pilates by Bryony iOS mockups — home dashboard and search screens",
              width: 1366,
              height: 768,
              aspectRatio: "wide",
            },
          },
          {
            title: "Collection and episode detail",
            content:
              "Each collection has its own detail page with a hero image, description, episode list, and a seasons picker for multi-week programmes like the six-week Summer Plan. Users can save content to My List or download for offline viewing.",
            image: {
              label:
                "Collection detail with hero, episode list, and subscribe CTA",
              src: "/work/pilates-by-bryony/collection-detail.png",
              alt: "Pilates by Bryony desktop collection page — Learn the Foundations episode grid on a laptop mockup",
              width: 2400,
              height: 1800,
              aspectRatio: "wide",
            },
          },
          {
            title: "Error and empty states",
            content:
              "The account creation error state — flagging the missing newsletter consent — and the empty Library state were both designed to guide users forward rather than leave them stuck.",
            image: {
              label:
                "Account creation error state and empty Library state",
              src: "/work/pilates-by-bryony/error-empty-states.png",
              alt: "Pilates by Bryony iOS mockups — create account error state and empty Library",
              width: 1366,
              height: 768,
              aspectRatio: "wide",
            },
          },
          {
            title: "Interaction design",
            content:
              "Thirteen interaction patterns were documented including swipeable carousels, bottom sheet modals, dim overlays, segmented controls, sort popovers with pointer tails, password toggle, and dismissible banners — as a designer would prepare for development handoff.",
            image: {
              label:
                "Wireframe — interaction pattern annotations (carousels, bottom sheets, overlays, popovers)",
              aspectRatio: "portrait",
            },
          },
          {
            title: "Website homepage",
            content:
              "The desktop site leads with a full-bleed hero video and a single CTA: a 7-day free trial. The membership section uses an editorial tile layout to communicate content breadth. The testimonials section anchors trust with survey data — 96%, 98%, and 100% satisfaction metrics — before a challenges carousel and Instagram grid reinforce community and consistency.",
            image: {
              label:
                "Desktop homepage from hero through testimonials and footer",
              src: "/work/pilates-by-bryony/website-homepage.png",
              alt: "Pilates by Bryony desktop homepage layout — hero, membership tiles, challenges, testimonials, and footer",
              width: 2880,
              height: 11170,
              aspectRatio: "portrait",
            },
          },
        ],
      },
      {
        title: "Takeaways",
        bullets: [
          "Content-heavy platforms need information architecture decisions made before any visual design begins — the category structure on the home screen shaped every other screen that followed.",
          "Subscription conversion lives or dies at the payment moment. Every word, every button, every piece of reassurance copy on the plan selection and App Store screens was a deliberate friction-reduction decision.",
          "Designing error and empty states exposed gaps in the happy-path thinking. They were not an afterthought — they were where the real UX work happened.",
        ],
      },
    ],
  },
  {
    slug: "the-core",
    title: "The Core",
    subtitle: "Website design for a wellness platform",
    client: "Vita Sidorkina, certified fitness trainer",
    role: "UX/UI Designer — layout, wireframes, and design implementation",
    dates: "2026",
    location: "Remote",
    overview: [
      "The Core is a wellness platform by Vita Sidorkina, built around three pillars — workouts, nutrition, and mindset — for women who want fitness that fits into real life, not around it. Vita came to me with a clear brief: she needed a website that could introduce her method, give members a login to access their content, and host on-demand videos behind a paid subscription.",
      "I designed the layout and user experience to meet that brief — translating the requirements into a site structure, a set of wireframes, and the final page design.",
    ],
    highlights: [
      "UX & information architecture — structuring the site around the three content pillars, the login area, and the trial funnel",
      "Wireframes — mapping every page and flow in Figma before moving to final design",
      "Layout & page design — turning the wireframes into the finished, launch-ready website",
    ],
    coverImage: {
      src: "/work/the-core/hero.png",
      alt: "The Core website hero — Come back to Your Core with 7-day free trial CTA",
      width: 2880,
      height: 1720,
    },
    sections: [
      {
        title: "The brief",
        content: "Vita's requirements were specific:",
        bullets: [
          "A website that introduces Vita, her method, and the three content pillars (workouts, nutrition, mindset) to first-time visitors",
          "A login/account system so paying members can access their content",
          "On-demand video content — workouts, recipes, and mindset sessions — gated behind a paid subscription",
          "A clear path from first visit to free trial sign-up, since none of the actual content can be shown before someone commits",
        ],
        subsections: [
          {
            title: "Target user",
            content:
              "Women who are tired of extreme, all-or-nothing fitness culture and want something realistic and sustainable — workouts they'll actually repeat, recipes they'll actually cook, support they can return to.",
          },
        ],
      },
      {
        title: "Process",
        imagesLayout: "accordion",
        imagesItems: [
          {
            title: "1. Structuring the content",
            content:
              "The Core's offering breaks into three pillars — Workouts, Nutrition, Mindset — plus a live community layer. I used wireframes to work out how to introduce all three to a first-time visitor without overwhelming them, landing on a layout that gives each pillar its own section and short description while still reading as one cohesive system by the time visitors reach the sign-up.",
            image: {
              label: "Homepage structure / pillar sections",
              src: "/work/the-core/pillars-section.png",
              alt: "The Core homepage pillars — Workouts, Nutrition, and Mindset sections",
              width: 2880,
              height: 1300,
              aspectRatio: "wide",
            },
          },
          {
            title: "2. Designing around the login and paywall",
            content:
              'Since every piece of content — videos, recipes, mindset sessions — sits behind a member login, the site itself had to do the convincing before anyone could see what they were signing up for. I wireframed the layout around a "preview, then commit" logic: the homepage sells the method and the feeling (through Vita\'s story, the three pillars, and community proof) rather than the content itself, then routes every path toward the login/trial sign-up as the one next step.',
            image: {
              label: "Login / sign-up / trial flow",
              src: "/work/the-core/login-trial-flow.png",
              alt: "The Core app section with trial CTA, login and sign up, plus tablet and phone mockups",
              width: 2880,
              height: 1200,
              aspectRatio: "wide",
            },
          },
          {
            title: "3. From wireframes to final layout",
            content:
              "Once the structure and flows held up, I moved into final page design — applying layout, spacing, and type hierarchy so the site felt calm and unhurried rather than like a typical high-pressure fitness sales page.",
            image: {
              label: "Final homepage layout",
              src: "/work/the-core/final-layout.png",
              alt: "The Core final website layout — full homepage from hero through footer",
              width: 2880,
              height: 8772,
              aspectRatio: "portrait",
            },
          },
        ],
      },
      {
        title: "Outcome",
        content:
          "The Core launched at jointhecore.co with a full website, member login, and trial sign-up flow, built around Vita's requirements. The site is live today, running her 7-day free trial funnel into a paid membership with on-demand video content.",
        link: {
          lead: "Visit the live site",
          href: "https://www.jointhecore.co/",
          label: "jointhecore.co",
        },
      },
      {
        title: "What's next",
        content:
          "The website was phase one. I'm now designing The Core's companion mobile app — extending the same content structure (workouts, nutrition, mindset) into a native, on-the-go experience.",
      },
    ],
  },
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
      src: "/work/chainhound/cover.png",
      alt: "Chainhound landing page on a laptop mockup — Find the right blockchain for your next project",
      width: 2400,
      height: 1800,
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
        collapsibleSubsections: true,
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
        collapsibleSubsections: true,
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
          "The first-release wireframes mapped the core product: a dashboard with a searchable table of 100+ blockchains (Code, Name, Layer, Consensus Mechanism, EVM compatibility, and letter-grade ratings for Security, Reliability, and Performance); a details page with Key Info, a plain-language description, and trusted explorers; and a Terms of Service page for launch. Navigation was kept deliberately minimal, with intention to expand in later releases.",
        imagesLayout: "carousel",
        images: [
          {
            label: "Release 1 wireframes",
            src: "/work/chainhound/wireframes-release-1.png",
            alt: "Chainhound Release 1 wireframes — landing page, blockchain details, and terms of service",
            width: 1920,
            height: 1080,
          },
          {
            label: "Dashboard and blockchain details wireframes",
            src: "/work/chainhound/wireframes-dashboard-details.png",
            alt: "Chainhound wireframes — dashboard comparison table and Bitcoin details page",
            width: 1920,
            height: 1080,
          },
        ],
        carouselLead:
          "With the core information architecture mapped out, the team reviewed the wireframes together to align on direction and agree the future state of the product. In parallel, I used Twitter, Farcaster, and Reddit to understand what features the blockchain community cared about — what data they wanted, what was missing from existing tools, and what would make them return. Both fed into the hi-fi design decisions.",
        carouselImages: [
          {
            label: "V2 — Enhanced landing page",
            src: "/work/chainhound/hero.png",
            alt: "Chainhound V2 landing page hi-fi with hero section and ratings table",
            width: 1024,
            height: 702,
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
          {
            label: "V2 — Contact Us",
            src: "/work/chainhound/wireframe-v2-contact.png",
            alt: "Chainhound V2 Contact Us page with contact form and beta community signup",
            width: 2880,
            height: 1890,
            caption:
              "The Contact page split the ask into two paths: a structured enquiry form on the left, and a Beta community signup on the right for people who wanted early access rather than a one-off message. Social links sat below so the page also served as a lightweight presence beyond the product itself.",
          },
        ],
        extraGalleries: [
          {
            heading: "V2 — The hero",
            images: [
              {
                label: "Hero mockup",
                src: "/work/chainhound/v2-hero-mockup.png",
                alt: "Chainhound V2 landing page on a laptop mockup",
                width: 2400,
                height: 1800,
              },
              {
                label: "Full landing page",
                src: "/work/chainhound/v2-hero-page.png",
                alt: "Chainhound V2 full landing page from hero through footer",
                width: 1600,
                height: 2962,
              },
            ],
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
            imagesLayout: "carousel",
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
                alt: "Chainhound design system — primary, secondary, ghost, and outline button variants",
                width: 799,
                height: 1024,
              },
              {
                label: "Colour palette",
                src: "/work/chainhound/design-system-colour-palette.png",
                alt: "Chainhound design system — brand, neutrals, and rating colour palette",
                width: 1024,
                height: 391,
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
    title: "From paper trail to approval pipeline",
    subtitle: "End-to-end workflow design for internal requests",
    client: "Department of Education",
    role: "Manager, Policy",
    dates: "2020–2022",
    location: "Australia",
    overview: [
      "When Victorian government schools want to fund their own building works — new courts, a library extension, asbestos removal — they need approval from their regional office and the Victorian School Building Authority. Until redesign and digitalisation, that process lived on paper.",
      "I redesigned this process as a role-based digital service with three connected portal views (school, region, VSBA), a guided three-step application, and a notification system covering every decision point in the approval lifecycle. The default application page ended up shorter, catering for different scenarios while asking every question the policy requires.",
    ],
    roleSummary:
      "Policy-to-requirements translation · Process and service mapping · Lo-fi wireframes across three portal views · Feature prioritisation and developer handoff · Stakeholder management and negotiation of timelines, production and expectations",
    highlights: [],
    coverImage: {
      src: "/work/education-approval-workflow/hero.png",
      alt: "VSBA School Capital Projects assessments dashboard with summary cards and application queue",
      width: 1024,
      height: 524,
    },
    sections: [
      {
        title: "The task",
        content: [
          "The application wasn't really a form — it was a policy document with blanks in it. On paper, every school received every question: pages of maintenance evidence, funding declarations, and long conditional blocks for project types that had nothing to do with their project, with no way to know what could be skipped.",
          "My task was to turn this paper-based, policy-heavy, three-party approval process into a digital service that feels simple — without dropping any single requirement, and building it in SharePoint.",
        ],
        subsectionHeading: "Constraints",
        numberedSubsections: true,
        subsections: [
          {
            title: "The policy was the requirements document.",
            content:
              "The School-funded Capital Projects policy dictates what must be asked, what must be attached, who must approve what, and in what order. Nothing could be cut for simplicity — school council declarations, maintenance evidence, funding-source disclosures all had to stay. The design lever wasn't less but better-structured content.",
            inlineLinks: [
              {
                text: "School-funded Capital Projects policy",
                href: "https://www2.education.vic.gov.au/pal/school-funded-capital-projects/policy",
              },
            ],
          },
          {
            title: "It had to be built in-house on SharePoint.",
            content:
              "I had to maximise SharePoint's native features and use developers time/effort on carefully prioritised features.",
          },
          {
            title: "Three very different users but one source of truth.",
            content:
              "A school principal filling in a form once every few years, a regional manager working through multiple at the time, and a VSBA teams reviewing accountability to policy — all looking at the same application.",
          },
        ],
      },
      {
        title: "Design choices",
        imagesLayout: "accordion",
        imagesItems: [
          {
            title: "Structured layout",
            content:
              "Digitising meant rebuilding the question set as a three-step wizard, and reorganising its longest step into six titled, shaded sections. Yes/No questions collapsed into single compact rows; nine project-scope categories became a two-column checkbox grid.",
            images: [
              {
                label: "New application — Step 1 of 3",
                src: "/work/education-approval-workflow/structured-layout-step-1.png",
                alt: "New application form step one with school details, contact details, and proposal type",
                width: 717,
                height: 878,
              },
              {
                label: "Specify project proposal — two-column checkbox grid",
                src: "/work/education-approval-workflow/structured-layout-proposal-type.png",
                alt: "Project proposal selection with accordions and nine project-scope categories in a two-column grid",
                width: 1024,
                height: 756,
              },
            ],
          },
          {
            title: "Progressive disclosure",
            content:
              "The core of the form was still long, but these fields were non-negotiable. I created accordions, collapsing sections to slim header bars for better visibility of the form. Additionally, conditional or follow-up questions appear anchored to the selection that triggered them, streamlining the form for each specific project type.",
            images: [
              {
                label: "Demolition — conditional follow-up questions",
                src: "/work/education-approval-workflow/progressive-disclosure-demolition.png",
                alt: "Project proposal form showing demolition selected with anchored additional questions below",
                width: 832,
                height: 752,
              },
            ],
          },
          {
            title: "The dashboard",
            content:
              "The dashboards became the heart of the portal. Schools see every application they've ever made — draft, submitted, returned, under review, approved — with status badges and contextual actions: continue a draft, review and amend a returned application, view a decision. Regional and VSBA staff get queue views built for working, not just viewing: summary cards (to review, awaiting school amendment, with VSBA, decided) and multi-school tables sorted by what needs attention first, with SLA reminders when something sits too long. Reporting for decision-makers made easy.",
            images: [
              {
                label: "School portal — My Applications",
                src: "/work/education-approval-workflow/dashboard-school.png",
                alt: "School dashboard showing My Applications with status badges and contextual actions",
                width: 1024,
                height: 642,
              },
              {
                label: "Regional portal — Region Applications",
                src: "/work/education-approval-workflow/dashboard-region.png",
                alt: "Regional dashboard with summary cards and applications queue for North-Western Victoria",
                width: 1024,
                height: 641,
              },
              {
                label: "VSBA portal — Assessments",
                src: "/work/education-approval-workflow/dashboard-vsba.png",
                alt: "VSBA assessments dashboard with summary cards and multi-region application table",
                width: 1024,
                height: 643,
              },
            ],
          },
          {
            title: "Approval process",
            content:
              "I followed a single application across every role in the process. A school submits. Their regional manager reviews it and endorses it — adding a comment that travels with the application. The VSBA assessor opens it and sees that regional comment in context, assesses against policy compliance, and either recommends approval or returns it with numbered feedback. That exact feedback is what the school sees in their amendment form, point by point, with a response due date. The executive director approves with conditions, confirming their financial delegation. Letters, notifications, and status updates fire automatically to everyone.",
            images: [
              {
                label: "School — application status and timeline",
                src: "/work/education-approval-workflow/approval-process-school.png",
                alt: "School view of Springfield PS application with status timeline and supporting documents",
                width: 970,
                height: 692,
              },
              {
                label: "Regional — review and endorsement",
                src: "/work/education-approval-workflow/approval-process-region.png",
                alt: "Regional review screen with endorsement checklist and feedback to school",
                width: 1024,
                height: 685,
              },
              {
                label: "VSBA — assessment and recommendation",
                src: "/work/education-approval-workflow/approval-process-vsba.png",
                alt: "VSBA assessment screen with policy compliance checklist and executive recommendation",
                width: 1024,
                height: 811,
              },
            ],
          },
          {
            title: 'A notification for every "what\'s happening?"',
            content:
              'I mapped seven lifecycle triggers — submitted, endorsed, returned for amendment, feedback received, approved, not approved, draft reminder — and designed the channel pair for each: an in-portal notification centre with unread states, and email templates for the moments that matter. Every role got its own version, including SLA reminders for regional and VSBA staff ("this application has been in your queue 10 business days").',
            images: [
              {
                label: "In-portal notification centre",
                src: "/work/education-approval-workflow/notification-centre.png",
                alt: "Notifications panel with unread states for submitted, returned, and feedback events",
                width: 422,
                height: 708,
              },
              {
                label: "Application submitted — what happens next",
                src: "/work/education-approval-workflow/notification-submitted.png",
                alt: "Submission confirmation with reference number and three-step what happens next timeline",
                width: 918,
                height: 574,
              },
            ],
          },
        ],
        link: {
          lead: "See the full Figma designs",
          href: "https://www.figma.com/design/GMDI4lzqqaIUIrDB441lqg/VSBA-School-Capital-Project-%E2%80%94-Wireframes?node-id=0-1&t=s6vipMEnhsaiQOdF-1",
          label: "here",
        },
      },
      {
        title: "Outcome",
        bullets: [
          "One continuous digital pipeline replacing a paper-era form and email-based handoffs — three role-based portals sharing one source of truth",
          "Default application page reduced to ~a third of its original length with zero questions removed",
          "Conditional questions cut from every user's path unless relevant to them",
          "Every approval-lifecycle event covered by a notification — no more status phone calls",
          "A 42-feature handoff tracker that let developers build with prioritisation",
        ],
      },
      {
        title: "What I'd do next",
        content:
          "The roadmap was already written when I finished — as a feature list. I maintained a tracker of every feature in the design (42 by the end), each prioritised P0/P1/P2, sized for effort, and triaged by build type: what SharePoint gives us natively, what developers could configure, and what needs custom development. That prioritisation set the sprint plan: launch on the P0 core, then Sprint 2 for other priorities.",
        link: {
          lead: "See the full list",
          href: "https://www.figma.com/design/GMDI4lzqqaIUIrDB441lqg/VSBA-School-Capital-Project-%E2%80%94-Wireframes?node-id=42-2",
          label: "here",
        },
        imagesLayout: "stack",
        images: [
          {
            label: "VSBA School Portal — Feature Tracker",
            src: "/work/education-approval-workflow/feature-tracker.png",
            alt: "Feature tracker spreadsheet with P0, P1, and P2 priorities for portal features",
            width: 1024,
            height: 453,
            caption:
              "Note: The provided wireframes are my personal design and are not a 1/1 copy of the SharePoint copy used by Department of Education.",
          },
        ],
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
