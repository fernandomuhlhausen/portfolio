import { render, screen } from '@testing-library/react'
import Reveal from './Reveal'

test('renders its children', () => {
  render(
    <Reveal>
      <p>conteúdo revelado</p>
    </Reveal>,
  )
  expect(screen.getByText('conteúdo revelado')).toBeInTheDocument()
})

test('renders children when the user prefers reduced motion', () => {
  window.matchMedia = ((query: string) => ({
    matches: true,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
    onchange: null,
  })) as unknown as typeof window.matchMedia

  render(
    <Reveal>
      <p>conteúdo sem animação</p>
    </Reveal>,
  )
  expect(screen.getByText('conteúdo sem animação')).toBeInTheDocument()
})
