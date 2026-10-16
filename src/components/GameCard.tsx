import { useState } from 'react'
import type { Game } from '../data/games'

type GameCardProps = {
  game: Game
}

export default function GameCard({ game }: GameCardProps) {
  const [coverFailed, setCoverFailed] = useState(false)
  const showPlaceholder = !game.cover || coverFailed

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-white/5 bg-surface transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.18)]">
      {showPlaceholder ? (
        <div
          data-testid="cover-placeholder"
          className="flex aspect-video items-center justify-center bg-gradient-to-br from-accent/10 to-bg"
        >
          <span className="font-display text-sm text-ink-muted">
            {game.title}
          </span>
        </div>
      ) : (
        <img
          src={game.cover}
          alt={`Capa do jogo ${game.title}`}
          loading="lazy"
          onError={() => setCoverFailed(true)}
          className="aspect-video w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-bold text-ink">
          {game.title}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-ink-muted">
          {game.description}
        </p>
        <ul className="flex flex-wrap gap-2">
          {game.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-accent/30 px-2.5 py-0.5 text-xs text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
        <a
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Jogar
        </a>
      </div>
    </article>
  )
}
