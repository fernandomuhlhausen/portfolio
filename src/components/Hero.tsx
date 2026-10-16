export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(34,211,238,0.18),transparent)]"
      />
      <div className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:py-32">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] text-accent uppercase">
          Desenvolvedor de Software · Jogos, Web e IA
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
          Fernando Muhlhausen
        </h1>
        <p className="mt-4 max-w-xl text-lg text-ink-muted">
          Crio software que roda no navegador: jogos, ferramentas e
          automações.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#jogos"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Ver jogos
          </a>
          <a
            href="https://github.com/fernandomuhlhausen"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
