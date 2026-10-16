const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <p className="mx-auto w-full max-w-5xl px-5 py-8 text-sm text-ink-muted">
        © {YEAR} Fernando Muhlhausen · Feito com React, Three.js e café
      </p>
    </footer>
  )
}
