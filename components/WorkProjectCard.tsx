import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type WorkProjectCardProps = {
  title: string;
  subtitle: string;
  slug: string;
  coverImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export default function WorkProjectCard({
  title,
  subtitle,
  slug,
  coverImage,
}: WorkProjectCardProps) {
  return (
    <li>
      <Link
        href={`/work/${slug}`}
        className="group block space-y-5 transition-opacity hover:opacity-80"
      >
        {coverImage ? (
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            width={coverImage.width}
            height={coverImage.height}
            className="aspect-video w-full rounded-lg border border-border object-cover object-top"
          />
        ) : (
          <ImagePlaceholder label={`${title} cover image`} aspectRatio="video" />
        )}
        <div className="space-y-1">
          <h3 className="text-xl font-medium tracking-tight">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{subtitle}</p>
        </div>
      </Link>
    </li>
  );
}
