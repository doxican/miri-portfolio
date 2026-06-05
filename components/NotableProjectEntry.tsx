import LogoPlaceholder from "@/components/LogoPlaceholder";

type ProjectRole = {
  title: string;
  dates: string;
  highlights: string[];
  fullDescription?: string;
};

type NotableProjectEntryProps = {
  company: string;
  location: string;
  roles: ProjectRole[];
};

export default function NotableProjectEntry({
  company,
  location,
  roles,
}: NotableProjectEntryProps) {
  return (
    <article className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <div className="flex gap-5">
        <LogoPlaceholder label="Logo" />
        <div className="min-w-0 flex-1 space-y-6">
          <div>
            <h4 className="text-lg font-medium">{company}</h4>
            <p className="text-sm text-muted">{location}</p>
          </div>

          <ul className="space-y-8">
            {roles.map((role) => (
              <li key={role.title} className="space-y-3">
                <div>
                  <h5 className="font-medium">{role.title}</h5>
                  <p className="text-sm text-muted">{role.dates}</p>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <details className="group">
                  <summary className="cursor-pointer text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground">
                    Full description
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {role.fullDescription ??
                      "Additional details placeholder. Replace with a longer role description when ready."}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
