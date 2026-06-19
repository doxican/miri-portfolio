import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type SubsectionImage = {
  label: string;
  src?: string;
  caption?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  afterParagraph?: number;
};

type SubsectionContentProps = {
  content?: string | string[];
  image?: SubsectionImage;
};

function SubsectionImageBlock({ image }: { image: SubsectionImage }) {
  return (
    <div className="space-y-3">
      {image.src ? (
        <Image
          src={image.src}
          alt={image.label}
          width={731}
          height={450}
          className="w-full max-w-3xl rounded-lg border border-border"
        />
      ) : (
        <ImagePlaceholder
          label={image.label}
          aspectRatio={image.aspectRatio ?? "video"}
          className="max-w-sm"
        />
      )}
      {image.caption && (
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          {image.caption}
        </p>
      )}
    </div>
  );
}

export default function SubsectionContent({
  content,
  image,
}: SubsectionContentProps) {
  const paragraphs = Array.isArray(content)
    ? content
    : content
      ? [content]
      : [];

  if (image?.afterParagraph !== undefined && paragraphs.length > 0) {
    return (
      <>
        {paragraphs.map((paragraph, index) => (
          <div key={paragraph} className="space-y-3">
            <p className="text-lg leading-relaxed text-muted">{paragraph}</p>
            {index === image.afterParagraph && (
              <SubsectionImageBlock image={image} />
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {image && <SubsectionImageBlock image={image} />}
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-lg leading-relaxed text-muted">
          {paragraph}
        </p>
      ))}
    </>
  );
}
