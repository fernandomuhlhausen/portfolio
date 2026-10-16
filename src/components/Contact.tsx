import Section from './Section'

const CHANNELS = [
  {
    label: 'Email',
    value: 'fernandomuhlhausen@gmail.com',
    href: 'mailto:fernandomuhlhausen@gmail.com',
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/fernandomuhlhausen',
    href: 'https://github.com/fernandomuhlhausen',
    external: true,
  },
  {
    label: 'X',
    value: 'x.com/FehDev',
    href: 'https://x.com/FehDev',
    external: true,
  },
] as const

export default function Contact() {
  return (
    <Section id="contato" title="Contato">
      <p className="mb-8 max-w-xl leading-relaxed text-ink-muted">
        Quer conversar ou trocar ideia sobre um projeto? Me chama em qualquer
        um destes canais.
      </p>
      <ul className="grid gap-4 sm:grid-cols-3">
        {CHANNELS.map((channel) => (
          <li key={channel.label}>
            <a
              href={channel.href}
              aria-label={channel.label}
              {...(channel.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="flex h-full flex-col gap-1 rounded-xl border border-white/5 bg-surface p-5 transition-shadow duration-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="font-display text-sm font-semibold text-accent">
                {channel.label}
              </span>
              <span className="text-sm break-all text-ink-muted">
                {channel.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
