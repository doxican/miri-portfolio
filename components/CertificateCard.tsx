import LogoPlaceholder from "@/components/LogoPlaceholder";

type CertificateCardProps = {
  name: string;
  issuer: string;
};

export default function CertificateCard({ name, issuer }: CertificateCardProps) {
  return (
    <li className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
      <LogoPlaceholder label="Logo" />
      <div className="min-w-0">
        <p className="text-sm font-medium leading-snug">{name}</p>
        <p className="text-sm text-muted">{issuer}</p>
      </div>
    </li>
  );
}
