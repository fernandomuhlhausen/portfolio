import { render, screen } from '@testing-library/react'
import Hero from './Hero'

test('renders the name as level-1 heading with tagline', () => {
  render(<Hero />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'Fernando Muhlhausen' }),
  ).toBeInTheDocument()
  expect(
    screen.getByText('Crio software que roda no navegador: jogos, ferramentas e automações.'),
  ).toBeInTheDocument()
})

test('CTAs link to the games section and to GitHub', () => {
  render(<Hero />)

  const verJogos = screen.getByRole('link', { name: 'Ver jogos' })
  expect(verJogos).toHaveAttribute('href', '#jogos')

  const github = screen.getByRole('link', { name: 'GitHub' })
  expect(github).toHaveAttribute(
    'href',
    'https://github.com/fernandomuhlhausen',
  )
  expect(github).toHaveAttribute('target', '_blank')
  expect(github.getAttribute('rel')).toContain('noopener')
})
