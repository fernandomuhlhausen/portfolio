export type Game = {
  slug: string
  title: string
  description: string
  tech: string[]
  url: string
  cover: string
}

export const GAMES: Game[] = [
  {
    slug: 'turbo-clash',
    title: 'TurboClash',
    description:
      'Futebol arcade com carros em arena 3D: turbo, saltos e corrida pelas paredes. Partidas de 2 minutos, de 1x1 a 5x5.',
    tech: ['Three.js', 'JavaScript'],
    url: 'https://turbo-clash-2.vercel.app/',
    cover: '/games/turbo-clash.png',
  },
  {
    slug: 'arcane-rush',
    title: 'Arcane Rush',
    description:
      'Sobrevivência em arena: um mago, magias elementais e hordas de monstros. Controles duplos, também roda no celular.',
    tech: ['Three.js', 'TypeScript', 'Vite'],
    url: 'https://vampires-magic-web.vercel.app/arcane-rush/',
    cover: '/games/arcane-rush.png',
  },
]
