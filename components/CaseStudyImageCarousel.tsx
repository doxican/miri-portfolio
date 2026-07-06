"use client";

import Image from "next/image";
import { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export type CarouselImage = {
  label: string;
  caption?: string;
  preContent?: string;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
};

type CaseStudyImageCarouselProps = {
  images: CarouselImage[];
};

function ChevronLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CaseStudyImageCarousel({
  images,
}: CaseStudyImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  const hasMultiple = images.length > 1;

  function goToPrevious() {
    setIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1,
    );
  }

  function goToNext() {
    setIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <div className="space-y-4 pt-4">
      {current.preContent && (
        <p className="text-lg leading-relaxed text-muted">{current.preContent}</p>
      )}

      <div className="relative">
        <div
          className="overflow-hidden rounded-lg border border-border"
          aria-live="polite"
        >
          {current.src ? (
            <Image
              src={current.src}
              alt={current.alt ?? current.label}
              width={current.width ?? 1024}
              height={current.height ?? 576}
              className="h-auto min-h-[28rem] w-full object-contain sm:min-h-[32rem]"
            />
          ) : (
            <ImagePlaceholder
              label={current.label}
              aspectRatio={current.aspectRatio ?? "video"}
              className="min-h-[28rem] rounded-none border-0 sm:min-h-[32rem]"
            />
          )}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-colors hover:bg-background"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm transition-colors hover:bg-background"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {current.caption && (
        <p className="text-base leading-relaxed text-muted">{current.caption}</p>
      )}

      {hasMultiple && (
        <p className="text-center text-sm text-muted">
          {index + 1} of {images.length}
        </p>
      )}
    </div>
  );
}
