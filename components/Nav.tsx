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
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-foreground transition-opacity hover:opacity-70"
        >
          miriniko.design
        </Link>

        <ul className="flex flex-wrap items-center gap-6 sm:gap-8">
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
