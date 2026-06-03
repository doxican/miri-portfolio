type ImagePlaceholderProps = {
  label?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
};

const aspectClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
} as const;

export default function ImagePlaceholder({
  label = "Image placeholder",
  aspectRatio = "video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-border bg-placeholder ${aspectClasses[aspectRatio]} ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="px-4 text-center text-sm text-muted">{label}</span>
    </div>
  );
}
