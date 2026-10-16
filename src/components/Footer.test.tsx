import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('renders credit line with owner name and current year', () => {
  render(<Footer />)
  expect(screen.getByText(/Fernando Muhlhausen/)).toBeInTheDocument()
  expect(
    screen.getByText(new RegExp(String(new Date().getFullYear()))),
  ).toBeInTheDocument()
})
