import Section from './Section'
import GameCard from './GameCard'
import { GAMES } from '../data/games'

export default function Games() {
  return (
    <Section id="jogos" title="Jogos">
      <div className="grid gap-6 sm:grid-cols-2">
        {GAMES.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </Section>
  )
}
