import { render, screen } from '@testing-library/react'
import GameCard from './GameCard'
import { GAMES } from '../data/games'

const game = GAMES[0]

test('play link opens the game url safely in a new tab', () => {
  render(<GameCard game={game} />)
  const link = screen.getByRole('link', { name: 'Jogar' })
  expect(link).toHaveAttribute('href', game.url)
  expect(link).toHaveAttribute('target', '_blank')
  expect(link.getAttribute('rel')).toContain('noopener')
})

test('shows title, description and tech tags', () => {
  render(<GameCard game={game} />)
  expect(
    screen.getByRole('heading', { name: game.title }),
  ).toBeInTheDocument()
  expect(screen.getByText(game.description)).toBeInTheDocument()
  for (const tech of game.tech) {
    expect(screen.getByText(tech)).toBeInTheDocument()
  }
})

test('shows placeholder instead of a broken image when the cover is missing', () => {
  render(<GameCard game={{ ...game, cover: '' }} />)
  expect(screen.getByTestId('cover-placeholder')).toBeInTheDocument()
  expect(screen.queryByRole('img')).not.toBeInTheDocument()
})
