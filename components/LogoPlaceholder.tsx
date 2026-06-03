type LogoPlaceholderProps = {
  label?: string;
};

export default function LogoPlaceholder({
  label = "Logo",
}: LogoPlaceholderProps) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-dashed border-border bg-placeholder px-1 text-center text-[10px] leading-tight text-muted"
      aria-hidden="true"
    >
      {label}
    </div>
  );
}
