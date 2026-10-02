"use client";

import CollapsibleDisclosure from "@/components/CollapsibleDisclosure";

type CollapsibleBulletListProps = {
  bullets: string[];
  expandLabel?: string;
  collapseLabel?: string;
};

export default function CollapsibleBulletList({
  bullets,
  expandLabel = "See more",
}: CollapsibleBulletListProps) {
  return (
    <CollapsibleDisclosure label={expandLabel}>
      <ul className="list-disc space-y-3 pl-5 text-muted">
        {bullets.map((bullet) => (
          <li key={bullet} className="text-lg leading-relaxed">
            {bullet}
          </li>
        ))}
      </ul>
    </CollapsibleDisclosure>
  );
}
