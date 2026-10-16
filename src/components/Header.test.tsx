import { render, screen } from '@testing-library/react'
import Header from './Header'

test('renders navigation anchors to every page section', () => {
  render(<Header />)
  const sections = [
    ['Jogos', '#jogos'],
    ['Sobre', '#sobre'],
    ['Currículo', '#curriculo'],
    ['Contato', '#contato'],
  ] as const
  for (const [name, href] of sections) {
    expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
  }
})

test('social links open safely in a new tab', () => {
  render(<Header />)

  const github = screen.getByRole('link', { name: 'GitHub' })
  expect(github).toHaveAttribute('href', 'https://github.com/fernandomuhlhausen')
  expect(github).toHaveAttribute('target', '_blank')
  expect(github.getAttribute('rel')).toContain('noopener')

  const x = screen.getByRole('link', { name: 'X' })
  expect(x).toHaveAttribute('href', 'https://x.com/FehDev')
  expect(x).toHaveAttribute('target', '_blank')
  expect(x.getAttribute('rel')).toContain('noopener')
})
