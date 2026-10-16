import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-24"
    >
      <h2
        id={`${id}-title`}
        className="mb-8 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
      >
        {title}
      </h2>
      <Reveal>{children}</Reveal>
    </section>
  )
}
