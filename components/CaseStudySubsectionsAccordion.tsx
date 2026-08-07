"use client";

import { useState } from "react";
import SubsectionContent from "@/components/SubsectionContent";

export type SubsectionAccordionItem = {
  title: string;
  content?: string | string[];
  bullets?: string[];
  notes?: string[];
  image?: {
    label: string;
    src?: string;
    caption?: string;
    aspectRatio?: "square" | "video" | "portrait" | "wide";
    afterParagraph?: number;
  };
};

type CaseStudySubsectionsAccordionProps = {
  items: SubsectionAccordionItem[];
  numbered?: boolean;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CaseStudySubsectionsAccordion({
  items,
  numbered = false,
}: CaseStudySubsectionsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="divide-y divide-border border-y border-border pt-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const label = numbered ? `${index + 1}. ${item.title}` : item.title;
        const panelId = `subsection-panel-${index}`;
        const buttonId = `subsection-button-${index}`;

        return (
          <div key={item.title}>
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-foreground"
            >
              <span className="text-lg font-medium tracking-tight">{label}</span>
              <Chevron open={isOpen} />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="space-y-4 pb-6"
              >
                {item.notes && item.notes.length > 0 && (
                  <ul className="space-y-2 border-l border-border pl-4">
                    {item.notes.map((note) => (
                      <li
                        key={note}
                        className="text-sm italic leading-relaxed text-muted"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                )}

                <SubsectionContent content={item.content} image={item.image} />

                {item.bullets && item.bullets.length > 0 && (
                  <ul className="list-disc space-y-3 pl-5 text-muted">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
