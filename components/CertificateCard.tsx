import Image from "next/image";
import LogoPlaceholder from "@/components/LogoPlaceholder";

type CertificateCardProps = {
  name: string;
  issuer: string;
  logoSrc?: string;
  logoAlt?: string;
};

export default function CertificateCard({
  name,
  issuer,
  logoSrc,
  logoAlt,
}: CertificateCardProps) {
  return (
    <li className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
      {logoSrc ? (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-border bg-white p-1.5">
          <Image
            src={logoSrc}
            alt={logoAlt ?? `${issuer} logo`}
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
      ) : (
        <LogoPlaceholder label="Logo" />
      )}
      <div className="min-w-0">
        <p className="text-sm font-medium leading-snug">{name}</p>
        <p className="text-sm text-muted">{issuer}</p>
      </div>
    </li>
  );
}
