import Link from "next/link";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About me" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  return (
    <header className="border-b border-border">
      <nav
        className="flex w-full items-center justify-between gap-4 px-6 py-5 sm:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="shrink-0 text-sm font-medium tracking-wide text-foreground transition-opacity hover:opacity-70"
        >
          miriniko.design
        </Link>

        <ul className="flex shrink-0 flex-wrap items-center justify-end gap-6 sm:gap-8">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
