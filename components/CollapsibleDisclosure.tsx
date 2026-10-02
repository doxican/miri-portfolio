"use client";

import { useId, useState, type ReactNode } from "react";

type CollapsibleDisclosureProps = {
  label: string;
  children: ReactNode;
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

export default function CollapsibleDisclosure({
  label,
  children,
}: CollapsibleDisclosureProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-y border-border">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-foreground"
      >
        <span className="text-lg leading-relaxed text-muted">{label}</span>
        <Chevron open={open} />
      </button>

      {open && (
        <div id={panelId} className="space-y-4 pb-6">
          {children}
        </div>
      )}
    </div>
  );
}
