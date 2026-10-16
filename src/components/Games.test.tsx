import { render, screen } from '@testing-library/react'
import Games from './Games'
import { GAMES } from '../data/games'

test('renders one card with a play link per game', () => {
  render(<Games />)
  const hrefs = screen
    .getAllByRole('link', { name: 'Jogar' })
    .map((link) => link.getAttribute('href'))
  expect(hrefs).toEqual(GAMES.map((game) => game.url))
})
