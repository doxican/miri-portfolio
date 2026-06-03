export default function Contact() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <section className="max-w-prose space-y-6">
        <p className="text-sm uppercase tracking-widest text-muted">Contact</p>
        <h1 className="text-4xl font-medium tracking-tight">Get in touch</h1>
        <p className="text-muted">
          Add your preferred contact method here — email, LinkedIn, or a form
          you wire up later.
        </p>

        <div className="space-y-3 border-t border-border pt-8 text-muted">
          <p>
            <span className="text-foreground">Email:</span>{" "}
            <a
              href="mailto:hello@example.com"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              hello@example.com
            </a>
          </p>
          <p>
            <span className="text-foreground">LinkedIn:</span>{" "}
            <a
              href="#"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Your profile link
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
