import { render, screen } from '@testing-library/react'
import About from './About'

test('renders the about section mentioning freelance work', () => {
  render(<About />)
  expect(document.querySelector('section#sobre')).not.toBeNull()
  expect(screen.getByText(/freela/i)).toBeInTheDocument()
})

test('does not present the owner as a student anymore', () => {
  render(<About />)
  expect(screen.queryByText(/IFSC/)).not.toBeInTheDocument()
  expect(screen.queryByText(/estudante|estudando/i)).not.toBeInTheDocument()
})
