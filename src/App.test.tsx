import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the owner name as the page heading', () => {
  render(<App />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'Fernando Muhlhausen' }),
  ).toBeInTheDocument()
})

test('never links to a PDF file', () => {
  render(<App />)
  const links = screen
    .queryAllByRole('link')
    .map((link) => link.getAttribute('href') ?? '')
  expect(links.filter((href) => href.endsWith('.pdf'))).toEqual([])
})
