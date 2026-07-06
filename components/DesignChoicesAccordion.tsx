"use client";

import Image from "next/image";
import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export type DesignChoiceItem = {
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
};

type DesignChoicesAccordionProps = {
  items: DesignChoiceItem[];
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

function getAccordionLabel(item: DesignChoiceItem) {
  if (item.title) {
    return item.title;
  }

  const text = Array.isArray(item.content) ? item.content[0] : item.content;
  const firstSentence = text.match(/^[^.!?]+[.!?]/)?.[0] ?? text;

  return firstSentence.trim();
}

function getAccordionBody(item: DesignChoiceItem) {
  const paragraphs = Array.isArray(item.content) ? item.content : [item.content];
  return paragraphs.join(" ");
}

export default function DesignChoicesAccordion({
  items,
}: DesignChoicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="divide-y divide-border border-y border-border pt-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const label = getAccordionLabel(item);
        const panelId = `design-choice-panel-${index}`;
        const buttonId = `design-choice-button-${index}`;

        return (
          <div key={item.title ?? `design-choice-${index}`}>
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-foreground"
            >
              <span className="text-lg leading-relaxed text-muted">
                {label}
              </span>
              <Chevron open={isOpen} />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="space-y-6 pb-6"
              >
                <p className="text-lg leading-relaxed text-muted">
                  {getAccordionBody(item)}
                </p>

                {item.image?.src ? (
                  <Image
                    src={item.image.src}
                    alt={item.image.alt ?? item.image.label}
                    width={item.image.width ?? 1024}
                    height={item.image.height ?? 576}
                    className="w-full rounded-lg border border-border"
                  />
                ) : (
                  <ImagePlaceholder
                    label={item.image?.label ?? `Design choice ${index + 1} image`}
                    aspectRatio={item.image?.aspectRatio ?? "video"}
                    className="min-h-[20rem] sm:min-h-[24rem]"
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
