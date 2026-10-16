import { GAMES } from './games'

test('ships exactly the two launch games', () => {
  expect(GAMES.map((g) => g.slug)).toEqual(['turbo-clash', 'arcane-rush'])
})

test('every game has complete data and an absolute https url', () => {
  for (const game of GAMES) {
    expect(game.title.length).toBeGreaterThan(0)
    expect(game.description.length).toBeGreaterThan(0)
    expect(game.tech.length).toBeGreaterThan(0)
    expect(game.cover).toMatch(/^\/games\//)
    expect(game.url.startsWith('https://')).toBe(true)
  }
})

test('game urls match the production deployments', () => {
  const bySlug = Object.fromEntries(GAMES.map((g) => [g.slug, g.url]))
  expect(bySlug['turbo-clash']).toBe('https://turbo-clash-2.vercel.app/')
  expect(bySlug['arcane-rush']).toBe(
    'https://vampires-magic-web.vercel.app/arcane-rush/',
  )
})
