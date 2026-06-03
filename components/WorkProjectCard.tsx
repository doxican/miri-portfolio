import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type WorkProjectCardProps = {
  title: string;
  subtitle: string;
  slug: string;
};

export default function WorkProjectCard({
  title,
  subtitle,
  slug,
}: WorkProjectCardProps) {
  return (
    <li>
      <Link
        href={`/work/${slug}`}
        className="group block space-y-5 transition-opacity hover:opacity-80"
      >
        <ImagePlaceholder label={`${title} cover image`} aspectRatio="video" />
        <div className="space-y-1">
          <h3 className="text-xl font-medium tracking-tight">{title}</h3>
          <p className="text-sm leading-relaxed text-muted">{subtitle}</p>
        </div>
      </Link>
    </li>
  );
}
